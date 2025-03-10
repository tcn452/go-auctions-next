import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

import { securedClient } from '@/app/lib/directus';
import { readMe, refresh } from '@directus/sdk';
import { signIn } from 'next-auth/react';

interface CustomSession extends Session {
  accessToken?: string;
  refreshToken?: string;
  id? : string;
  name? : string;
  expires_at? : string;
  error? : string;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Directus Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string };
      // Add logic here to look up the user from the credentials supplied
        const user = await securedClient.login(email, password, {
            mode : "json"
        });
       
        if (!user) {
          throw new Error('Email address or password is invalid');
        }
        return user as any
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
          signIn: "/auth/signin", // Redirect to your custom sign-in page
        },
  callbacks: {
    async jwt({
      token,
      user,
      account,

    }: {
      token: JWT;
      user: any;
      account: any;
    }) {
      if (account && user) {
        const me = await securedClient.request(readMe({
                        fields: ["id", "first_name", "last_name", "avatar", "email"]
                    }))

        return {
          ...token,
          accessToken: user.access_token,
          refreshToken: user.refresh_token,
          expires : Date.now() + user.expires,
          id: me.id,
          name: me.first_name ? `${me.first_name} ${me.last_name}` : me.email,
        };
      }

      if (Date.now() < token?.expires) {
        return token
      } else {
        if (!token.refreshToken) throw new TypeError("Missing refresh_token")
            console.log(token.refreshToken)
            try {
                const refreshedTokens = await securedClient.request(refresh("json", token.refreshToken as string))

                console.log(refreshedTokens)

                if (!refreshedTokens) throw new Error("Token Refresh failed")

                    return {
                        ...token,
                        accessToken: refreshedTokens.access_token,
                        expires: Date.now() + refreshedTokens?.expires,
                        refreshToken : refreshedTokens.refresh_token ? refreshedTokens.refresh_token : token.refreshToken
                    }
            
            } catch(error) {
               
                console.error("Error refreshing access token", error)
                token.error = "RefreshTokenError"
                return token
            }
      }
    },
    async session({ session, token}: { session: CustomSession; token: any }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.expires = token.expires;
      session.error = token.error
      session.id = token.id
      session.name = token.name
      return session;
    }
  },
};

// async function refreshAccessToken(token : object) {
//     try {
//       const refreshedTokens = await securedClient.request(refresh("json", token.refreshToken))
  
     
  
//       if (!refreshedTokens) {
//         signIn();
//       }
  
//       if (refreshedTokens) {
//         return {
//           ...token,
//           accessToken: refreshedTokens.access_token,
//           expires: Date.now() + refreshedTokens?.expires,
//           refreshToken: refreshedTokens.refresh_token,
//         };
//       }
//     } catch (error) {
//       console.log(
//         new Date().toUTCString() + " Error in refreshAccessToken:",
//         error
//       );
  
//       return {
//         ...token,
//         error: "RefreshAccessTokenError",
//       };
//     }
//   }
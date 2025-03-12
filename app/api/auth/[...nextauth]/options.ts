/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { NextAuthOptions, User } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { Session } from 'next-auth';
// import { JWT } from 'next-auth/jwt';
// import { securedClient } from '@/app/lib/directus';
// import { readMe, refresh, refreshToken } from '@directus/sdk';

// interface CustomSession extends Session {
//   accessToken?: string;
//   refreshToken?: string;
//   id?: string;
//   name?: string;
//   expires_at?: string;
//   error?: string;
// }

// export const options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Directus Credentials',
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials as { email: string; password: string };
//         try {
//           // Add logic here to look up the user from the credentials supplied
//           const user = await securedClient.login(email, password, {
//             mode: "json"
//           });
          
//           if (!user) {
//             throw new Error('Email address or password is invalid');
//           }
//           return user as any;
//         } catch (error) {
//           console.error('Authentication error:', error);
//           return null;
//         }
//       },
//     }),
//   ],
//   secret: process.env.AUTH_SECRET,
//   pages: {
//     signIn: "/auth/signin", // Redirect to your custom sign-in page
//   },
//   session: {
//     strategy: 'jwt',
//     // Reduce maxAge to slightly less than your token expiry time
//     maxAge: 15 * 60 - 30, // 14 minutes 30 seconds if tokens expire in 15 minutes
//   },
//   callbacks: {
//     async jwt({
//       token,
//       user,
//       account,
//     }: {
//       token: JWT;
//       user: any;
//       account: any;
//     }) {
//       // Initial sign in
//       if (account && user) {
//         try {
//           const me = await securedClient.request(readMe({
//             fields: ["id", "first_name", "last_name", "avatar", "email"]
//           }));
          
//           return {
//             ...token,
//             accessToken: user.access_token,
//             refreshToken: user.refresh_token,
//             expires: Date.now() + (user.expires * 1000), // Convert to milliseconds if needed
//             id: me.id,
//             name: me.first_name ? `${me.first_name} ${me.last_name}` : me.email,
//           };
//         } catch (error) {
//           console.error("Error fetching user details:", error);
//           return token;
//         }
//       }

//       // Return previous token if the access token has not expired yet
//       if (token.expires && Date.now() < token.expires) {
//         return token;
//       }

//       // Access token has expired, try to refresh it
//       if (token.refreshToken) {
//         try {
//           // Create a temporary client for token refresh to avoid auth middleware
//           // The refresh operation needs to be independent of the current auth state
//           const refreshedTokens = await securedClient.request(refresh("json", token.refreshToken as string));
          
//           if (!refreshedTokens || !refreshedTokens.access_token) {
//             throw new Error("Failed to refresh token - invalid response");
//           }
          
//           console.log("Token refreshed successfully");
          
//           return {
//             ...token,
//             accessToken: refreshedTokens.access_token,
//             refreshToken: refreshedTokens.refresh_token || token.refreshToken,
//             expires: Date.now() + (refreshedTokens.expires * 1000), // Convert to milliseconds if needed
//           };
//         } catch (error) {
//           console.error("Error refreshing access token:", error);
//           // Return the token with an error flag
//           return {
//             ...token,
//             error: "RefreshTokenError",
//           };
//         }
//       } else {
//         // If there's no refresh token, mark as invalid
//         return {
//           ...token,
//           error: "NoRefreshTokenError"
//         };
//       }
//     },
//     async session({ session, token }: { session: CustomSession; token: any }) {
//       session.accessToken = token.accessToken;
//       session.refreshToken = token.refreshToken;
//       session.expires = token.expires;
//       session.error = token.error;
//       session.id = token.id;
//       session.name = token.name;
      
//       return session;
//     }
//   },
// };



import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

import { securedClient } from '@/app/lib/directus';
import { readMe, refresh } from '@directus/sdk';


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

      if (Date.now() < (token?.expires as number)) {
        return token
      } else {
        if (!token.refreshToken) throw new TypeError("Missing refresh_token")
       
            try {
                const refreshedTokens = await securedClient.request(refresh("json", token.refreshToken as string))

               

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



import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authentication, createDirectus } from "@directus/sdk";
import { CustomDirectusTypes } from "@/app/types/schema";

const directus = createDirectus<CustomDirectusTypes>(process.env.PUBLIC_API_URL as string).with(authentication());


const handler = NextAuth({
    providers: [
      CredentialsProvider({
        name: "Directus Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const { email, password } = credentials as { email: string; password: string };
  
          try {
            // Attempt to authenticate using Directus SDK
            const user = await directus
              .login(email, password )
              
  
            // If the user is found, return user data
            if (user) {
              // return {
              //   id: user.id,
              //   email: user.email,
              //   name: user.first_name ? `${user.first_name} ${user.last_name}` : user.email,
              //   image: user.avatar || null,
              // };
                console.log(user)
              return user
            }
  
            // If no user found or login fails
            return null;
          } catch (error) {
            console.error("Error logging in:", error);
            return null;
          }
        },
      }),
    ],
    // pages: {
    //   signIn: "/auth/signin", // Redirect to your custom sign-in page
    // },
    session: {
      strategy: "jwt", // Use JWT for session storage
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
          token.image = user.image;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.id = token.id;
          session.email = token.email;
          session.name = token.name;
          session.image = token.image;
        }
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET, // Make sure to set a secret in your .env file
  });
  

  export { handler as GET, handler as POST}
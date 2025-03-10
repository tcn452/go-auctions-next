import NextAuth from "next-auth";
import { options } from "./options";


const handler = NextAuth(options)

export { handler as GET, handler as POST}




// import NextAuth, { Session } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { authentication, createDirectus, readMe, refresh, rest } from "@directus/sdk";
// import { CustomDirectusTypes } from "@/app/types/schema";
// import { securedClient } from "@/app/lib/directus";

// interface CustomSession extends Session {
//   id : string;
//   accessToken? :string,
//   refreshToken? :string,
// }


// const handler = NextAuth({
//     providers: [
//       CredentialsProvider({
//         name: "Directus Credentials",
//         credentials: {
//           email: { label: "Email", type: "email" },
//           password: { label: "Password", type: "password" },
//         },
//         async authorize(credentials) {
//           const { email, password } = credentials as { email: string; password: string };
  
//           try {
//             // Attempt to authenticate using Directus SDK
//             const token = await securedClient
//               .login(email, password ).then()
              
            
  
//             // If the user is found, return user data
//             if (token) {
//               // return {
//               //   id: user.id,
//               //   email: user.email,
//               //   name: user.first_name ? `${user.first_name} ${user.last_name}` : user.email,
//               //   image: user.avatar || null,
//               // };
//                 const me = await securedClient.request(readMe({
//                     fields: ["id", "first_name", "last_name", "avatar", "email"]
//                 }))
//               return {
//                 id: me.id,
//                 email : me.email,
//                 name: me.first_name ? `${me.first_name} ${me.last_name}` : me.email,
//                 image: me.avatar || null,
//                 access_token: token.access_token,
//                 refresh : token.refresh_token
//               }
//             }
  
//             // If no user found or login fails
//             return null;
//           } catch (error) {
//             console.error("Error logging in:", error);
//             return null;
//           }
//         },
//       }),
//     ],
//     // pages: {
//     //   signIn: "/auth/signin", // Redirect to your custom sign-in page
//     // },
//     session: {
//       strategy: "jwt", // Use JWT for session storage
//     },
//     callbacks: {
//       async jwt({ token, user, account }) {
//         if (account && user) {
//           token.id = user.id;
//           token.email = user.email;
//           token.name = user.name;
//           token.image = user.image;
//           token.accessToken = user.access_token
//           token.refreshToken = user.refresh_token
//         }
//         return token;
//       },
//       async session({ session, token } : { session: CustomSession, token: any }) {
//         if (token) {
//           session.id = token.id;
//           session.email = token.email;
//           session.name = token.name;
//           session.image = token.image;
//           session.accessToken = token.accessToken;
//           session.refreshToken = token.refreshToken
//         }
//         return session;
//       },
//     },
//     secret: process.env.NEXTAUTH_SECRET, // Make sure to set a secret in your .env file
//   });
  

//   export { handler as GET, handler as POST}
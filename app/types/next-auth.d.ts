/* eslint-disable @typescript-eslint/no-unused-vars */
// @types\next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        accessToken?: string;
        refreshToken?: string;
        id? : string;
        name? : string;
        expires_at? : string;
        error? : string; 
         
    } 
}
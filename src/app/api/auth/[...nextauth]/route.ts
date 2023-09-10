import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET ?? ""
        })
    ]
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
    
  secret:process.env.NEXTAUTH_SECRET

}
// generate next-auth secret
// openssl rand -base64 32 
export default NextAuth(authOptions)
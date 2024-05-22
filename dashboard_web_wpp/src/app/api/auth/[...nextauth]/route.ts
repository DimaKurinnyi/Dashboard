import bcrypt from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectMongoDB } from '../../../../../lib/db';
import User from '../../../../../models/user';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        const email = credentials?.email;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const passwordMatch = await bcrypt.compare(credentials?.password || '', user.password);
          if (!passwordMatch) {
            return null;
          }
          return user;
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      console.log('jwt callback', { token, user, session });
      if (trigger === 'update' && session?.name) {
        token.name = session.name;
      }
      // await connectMongoDB();
      // const NewUser = await User.findById(token.id);
      // NewUser.name = token.name;
      // await NewUser.save();

      if (user) {
        return {
          ...token,
          id: user.id,
          company: user.company,
        };
      }

      return token;
    },
    async session({ session, token, user }) {
      console.log('session callback', { session, token, user });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          company: token.company,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

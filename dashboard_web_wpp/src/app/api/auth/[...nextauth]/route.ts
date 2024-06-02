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
        // try {
        await connectMongoDB();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('Wrong email');
        }
        const passwordMatch = await bcrypt.compare(credentials?.password || '', user.password);
        if (!passwordMatch) {
          throw new Error('Invalid Password');
        }
        return user;
        // } catch (e:any) {
        //   console.log(e.message);
        // }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      console.log('jwt callback', { token, user, session });
      if (trigger === 'update' && session?.name && session?.company && session?.email && session?.Website && session?.phone) {
        token.name = session.name;
        token.company = session.company;
        token.email = session.email;
        token.Website = session.Website;
        token.phone = session.phone;
        token.image = session.image;
        await connectMongoDB();
        const NewUser = await User.findById(token.id);
        NewUser.name = token.name;
        NewUser.company = token.company;
        NewUser.email = token.email;
        NewUser.Website = token.Website;
        NewUser.phone = token.phone;
        NewUser.image = token.image;
        await NewUser.save();
      }

      if (user) {
        return {
          ...token,
          id: user.id,
          company: user.company,
          phone: user.phone,
          Website: user.Website,
          image: user.image
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
          phone: token.phone,
          Website: token.Website,
          image: token.image
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../lib/db';
import User from '../../../../models/user';

export async function POST(req: Request) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select('_id');
    console.log(user);
    return NextResponse.json({ user });
  } catch (e) {
    console.log(e);
  }
}

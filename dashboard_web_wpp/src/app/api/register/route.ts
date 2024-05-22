import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'
import { connectMongoDB } from '../../../../lib/db';
import User from '../../../../models/user';

export async function POST(req:Request) {
  try {
    const { name, email, password,company} = await req.json();  
    const hashedPassword = await bcrypt.hash(password,10);
    await connectMongoDB()
    await User.create({name,email,company,password:hashedPassword});
    
    return NextResponse.json({ massage: 'User registered' }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 },
    );
  }
}

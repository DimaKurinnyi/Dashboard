import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../lib/db';
import User from '../../../../models/user';

export const DELETE = async (req: Request) => {
  try {
    await connectMongoDB();
    const { email } = await req.json();

    // Проверка, что email передан
    if (!email) {
      return new NextResponse(JSON.stringify({ message: 'Email is required' }), { status: 400 });
    }

    const result = await User.deleteOne({ email });

    console.log('Deletion result:', result);
    
    if (result.deletedCount === 0) {
      return new NextResponse(JSON.stringify({ message: 'Failed to delete user or user not found' }), { status: 404 });
    }

    return new NextResponse(JSON.stringify({ message: 'User deleted successfully' }), { status: 200 });
  } catch (err) {
    console.error('Error during deletion:', err);
    return new NextResponse(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
};
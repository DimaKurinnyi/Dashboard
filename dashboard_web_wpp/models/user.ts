import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    company: {
      type: 'string',
      required: false,
    },
  },
  { timestamps: true },
);
const User = models.User || mongoose.model('User',userSchema);
export default User

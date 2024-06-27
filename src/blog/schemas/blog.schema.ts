import { Schema } from 'mongoose';

export const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: false }, // Added image field
});
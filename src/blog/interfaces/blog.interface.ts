import { Document } from 'mongoose';

export interface Blog extends Document {
  id: string;
  title: string;
  content: string;
  image?: string; 
}

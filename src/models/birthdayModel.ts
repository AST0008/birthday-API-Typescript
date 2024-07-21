import mongoose, { Document, Schema } from 'mongoose';

export interface IBirthday extends Document {
  name: string;
  date: Date;
}

const birthdaySchema: Schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model<IBirthday>('Birthday', birthdaySchema);

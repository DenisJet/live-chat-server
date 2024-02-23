// model Chat {
//   id        Int      @id @default(autoincrement())
//   username  String
//   text      String
//   createdAt DateTime @default(now())
// }

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  // @Prop()
  // id: number;

  @Prop()
  name: string;

  @Prop()
  text: string;

  @Prop()
  createdAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

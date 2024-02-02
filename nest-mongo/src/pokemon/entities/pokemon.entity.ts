import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  @Prop()
  name: string;

  @Prop()
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);

import { Field, InputType } from 'type-graphql';

@InputType()
export class ZipCodeInputType {
  @Field()
  country: string;

  @Field()
  zipCode: string;
}

import { Field, ID, ObjectType } from 'type-graphql';

import { IPlace, IZipCode } from './IZipCode';

@ObjectType()
export class ZipCodeType implements IZipCode {
  @Field((_) => ID)
  id: string;

  @Field()
  postCode: string;

  @Field()
  country: string;

  @Field((_) => [PlaceType])
  places: IPlace[];

  @Field()
  createdAt: Date;
}

@ObjectType()
export class PlaceType implements IPlace {
  @Field()
  name: string;

  @Field()
  state: string;
}

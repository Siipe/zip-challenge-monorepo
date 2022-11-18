import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { IZipCode } from './IZipCode';
import { ZipCodeInputType } from './ZipCodeInputType';
import { ZipCodeService } from './ZipCodeService';
import { ZipCodeType } from './ZipCodeType';

@Resolver()
export class ZipCodeResolver {
  private readonly service: ZipCodeService;

  constructor() {
    this.service = new ZipCodeService();
  }

  @Mutation((_) => ZipCodeType)
  handleSearch(@Arg('input') input: ZipCodeInputType): Promise<IZipCode> {
    return this.service.search(input);
  }

  @Query((_) => [ZipCodeType])
  getLastSearches(@Arg('limit') limit?: number): Promise<IZipCode[]> {
    return this.service.getLastSearches(limit);
  }
}

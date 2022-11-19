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

  @Mutation((_) => ZipCodeType, { nullable: true })
  handleSearch(@Arg('input') input: ZipCodeInputType): Promise<IZipCode | null> {
    return this.service.search(input);
  }

  @Mutation((_) => Boolean)
  async clearSearchHistory(): Promise<boolean> {
    await this.service.clearSearchHistory();

    return true;
  }

  @Query((_) => [ZipCodeType])
  getLastSearches(@Arg('limit') limit?: number): Promise<IZipCode[]> {
    return this.service.getLastSearches(limit);
  }
}

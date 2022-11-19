import { ZippopotamusHttpClient } from '../clients/ZippopotamusHttpClient';
import ZipCodeSchema from './ZipCodeSchema';
import { IZipCode } from './IZipCode';
import { ZipCodeInputType } from './ZipCodeInputType';

export class ZipCodeService {
  public async search(input: ZipCodeInputType): Promise<IZipCode | null> {
    const response = await ZippopotamusHttpClient.fetch(input.country, input.zipCode);
    if (!response) {
      return null;
    }

    const { country, 'post code': postCode, places } = response;

    return ZipCodeSchema.create({
      country,
      postCode,
      places: places.map(({ 'place name': name, state }) => ({
        name,
        state,
      })),
    });
  }

  public async clearSearchHistory(): Promise<void> {
    await ZipCodeSchema.remove();
  }

  public async getLastSearches(limit: number = 5): Promise<IZipCode[]> {
    return await ZipCodeSchema.find().sort({ createdAt: -1 }).limit(limit);
  }
}

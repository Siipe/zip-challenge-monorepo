import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

axios.defaults.baseURL = 'http://api.zippopotam.us/';

type ZippotamusResponse = {
  ['post code']: string;
  country: string;
  ['country abbreviation']: string;
  places: {
    ['place name']: string;
    longitude: string;
    state: string;
    ['state abbreviation']: string;
    latitude: string;
  }[];
};

export class ZippopotamusHttpClient {
  public static async fetch(country: string, code: string) {
    try {
      const result = await axios.get<ZippotamusResponse>(`${country}/${code}`);
      if (isEmpty(result.data)) {
        return null;
      }
      return result.data;
    } catch {
      return null;
    }
  }
}

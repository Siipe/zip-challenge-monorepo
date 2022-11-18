export interface IZipCode {
  id: string;
  postCode: string;
  country: string;
  places: IPlace[];
  createdAt?: Date;
}

export interface IPlace {
  name: string;
  state: string;
}

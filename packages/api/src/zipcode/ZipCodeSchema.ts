import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { IZipCode } from './IZipCode';

const ZipCodeSearchSchema = new Schema(
  {
    _id: { type: String, default: uuidv4 },
    postCode: String,
    country: String,
    places: [
      {
        _id: false,
        name: String,
        state: String,
      },
    ],
  },
  {
    collection: 'zipCodeSearches',
    timestamps: true,
    versionKey: false
  },
);

export default mongoose.model<IZipCode>('ZipCodeSearch', ZipCodeSearchSchema);

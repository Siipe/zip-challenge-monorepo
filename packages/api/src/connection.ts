import mongoose from 'mongoose';

(async () => {
  await mongoose.connect('mongodb://admin:12345@localhost:27017', {
    dbName: 'zipChallenge',
  });
})();

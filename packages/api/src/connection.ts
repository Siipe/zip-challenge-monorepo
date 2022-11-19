import { connect } from 'mongoose';

(async () => {
  await connect('mongodb://admin:12345@localhost:27017', {
    dbName: 'zipChallenge',
  });
})();

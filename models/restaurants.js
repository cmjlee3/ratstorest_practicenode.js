'use strict'

const { MongoClient } = require('mongodb');

module.exports = function rest() {

  const dbConnection = 'mongodb://localhost:27017/rats_to_restaurants';


  return {
    getRestaurants(req, res, next) {
      const filterObj = {};
      const qs = req.query;

        if ('dba' in qs) filterObj.dba = new RegExp(`\\b${qs.dba}`, 'i');
        if ('street' in qs) filterObj.street = new RegExp(`\\b${qs.street}`, 'i');

      MongoClient.connect(dbConnection, (err, db) => {
        if (err) return next(err);

        db.collection('restaurants')
          .find(filterObj)

          .toArray((arrayError, data) => {
              if (arrayError) return next(arrayError);

              res.filteredRestaurants = data;
              return next();
          });
    });
      return false;
  },
};
};


// const dbConnection = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/rats_to_restaurants';

// module.exports = {
//   getRestaurants: (req, res, next) => {
//     MongoClient.connect(dbConnection, (err, db) => {
//       if (err) throw err;
//       db.collection('restaurants')
//         .find(res.filteredQueryParams)
//           .toArray((err, restaurants) => {
//             res.restaurants = restaurants;
//             next();
//           })
//     })
//   }
// }

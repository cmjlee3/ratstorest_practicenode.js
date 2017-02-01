'use strict'

const { MongoClient } = require('mongodb');

module.exports = function rats() {

  const dbConnection = 'mongodb://localhost:27017/rats_to_restaurants';


  return {
    getRats(req, res, next) {
      const filterObj = {};
      const qs = req.query;
//so the first reference to the qs doesn't have to match the qs
        if ('incidentzip' in qs) filterObj.incident_zip = new RegExp(`\\b${qs.incident_zip}`, 'i');
        if ('street_name' in qs) filterObj.street_name = new RegExp(`\\b${qs.street_name}`, 'i');

      MongoClient.connect(dbConnection, (err, db) => {
        if (err) return next(err);

        db.collection('rats')
          .find(filterObj)

          .toArray((arrayError, data) => {
              if (arrayError) return next(arrayError);

              res.filteredRats = data;
              return next();
          });
    });
      return false;
  },
};
};



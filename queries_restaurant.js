db.restaurants.find().pretty()
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).pretty()
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty()
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, 'address.zipcode': 1, _id: 0 }).pretty()
db.restaurants.find({ "borough": "Bronx" }).pretty()
db.restaurants.find({ "borough": "Bronx" }).limit(5).pretty()
db.restaurants.find({ "borough": "Bronx" }).skip(5).limit(5).pretty()
db.restaurants.find({ "grades.0.score": { $gt: 9 } }).pretty()
db.restaurants.find({ "grades.0.score": { $gt: 8, $lt: 10 } }).pretty()
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } }).pretty()
db.restaurants.find({ "cuisine": { $ne: "American " }, "grades.0.score": { $gt: 7 }, "address.coord.0": { $lt: -65.754168 } }).pretty()
db.restaurants.find({ "cuisine": { $ne: "American " }, "grades.0.score": { $gt: 7 }, "address.coord.0": { $lt: -65.754168 } }).pretty()
db.restaurants.find({ "cuisine": { $ne: "American " }, "grades.grade": "A", "borough": { $ne: "Brooklyn" } }).sort({ cuisine: -1 }).pretty()
db.restaurants.find({ "name": { $regex: /^Wil.*/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).pretty()
db.restaurants.find({ "name": { $regex: /ces$/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).pretty()
db.restaurants.find({ "name": { $regex: /Reg/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).pretty()
db.restaurants.find({ $or: [{ "cuisine": "American " }, { "cuisine": "Chinese" }], "borough": "Bronx" }).pretty()
db.restaurants.find({ $or: [{ "borough": "Staten Island" }, { "borough": "Queens" }, { "borough": "Bronx" }, { "borough": "Brooklyn" }] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).pretty()
db.restaurants.find({ $nor: [{ "borough": "Staten Island" }, { "borough": "Queens" }, { "borough": "Bronx" }, { "borough": "Brooklyn" }] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).pretty()
db.restaurants.find({ "grades.0.score": { $lte: 10 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).pretty()
db.restaurants.find({ $or: [{ "name": { $regex: /fish/i }, $and: [{ "cuisine": { $ne: "American " } }, { "cuisine": { $ne: "Chinese" } }] }, { "name": { $regex: /^Wil.*/ } }] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).pretty()
db.restaurants.find({ "grades": { $elemMatch: { "score": 11, "date": ISODate("2014-08-11T00:00:00Z") } }, "grades.grade": "A" }, { restaurant_id: 1, name: 1, grades: 1 }).pretty()
db.restaurants.find({ $and: [{ "grades.1.score": 9 }, { "grades.1.date": ISODate("2014-08-11T00:00:00Z") }, { "grades.1.grade": "A" }] }, { restaurant_id: 1, name: 1, grades: 1 }).pretty()
db.restaurants.find({ $and: [{ "address.coord.1": { $gt: 42 } }, { "address.coord.1": { $lte: 52 } }] }, { restaurant_id: 1, name: 1, address: 1 }).pretty()
db.restaurants.find({}).sort({ "name": 1 }).pretty()
db.restaurants.find({}).sort({ "name": -1 }).pretty()
db.restaurants.find({}, { cuisine: 1, borough: 1 }).sort({ "cuisine": 1, borough: -1 }).pretty()
db.restaurants.find({ "address.street": null }).count()
db.restaurants.find({ "address.coord": { $type: "double" } }).pretty()
db.restaurants.find({ "grades.0.score": { $mod: [7, 0] } }, { restaurant_id: 1, name: 1, "grades": 1 }).pretty()
db.restaurants.find({ "name": { $regex: /mon/ } }, { name: 1, borough: 1, "address.coord": 1, cuisine: 1 }).pretty()
db.restaurants.find({ "name": { $regex: /^Mad.*/ } }, { name: 1, borough: 1, "address.coord": 1, cuisine: 1 }).pretty()
// 1ST DRAFT DATA MODEL
// TODO: requires / mongoose setup


// users
// * our site requires authentication...
// * so users have a username and password
// * they also can have 0 or more lists
var User = new mongoose.Schema({
  // username, password provided by plugin
  lists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});

// an item (or group of the same items) in a grocery list
// * includes the quantity of this item (multiple of the same item does not 
//   require additional Item documents; just increase the quantity!)
// * items in a list can be crossed off
var Item = new mongoose.Schema({
  name: {type: String, required: true},
  quantity: {type: Number, min: 1, required: true},
  checked: {type: Boolean, default: false, required: true}
}, {
  _id: true
});

// a grocery list
// * each list must have a related user
// * a list can have 0 or more items
var List = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  createdAt: {type: Date, required: true},
  items: [Item]
});

// TODO: add remainder of setup for slugs, connection, registering models, etc. below


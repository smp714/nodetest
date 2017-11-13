var express = require('express');
var router = express.Router();

/*
 * HTTP GET userlist.
server will return JSON that lists all of the users in the DB

 */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({}, {}, function(e, docs) {
    res.json(docs);
  });
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.insert(req.body, function(err, result) {
    res.send(
      (err === null) ? { msg: '' } : { msg: err}
    );
  });
});

module.exports = router;

const path = require('path');
const bodyParser = require('body-parser');


exports.index = async (req, res) => {
  res.render('index');
}

exports.detail = (req, res) => {
  res.render('detail');
}

exports.offline = (req, res) => {
  res.render('offline');
}

//
// exports.notFound = (req, res) => {
//   res.render('notFound');
// }

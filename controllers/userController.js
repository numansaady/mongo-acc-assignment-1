const fs = require('fs');
const data = require('../public/data.json');

module.exports.getARandomUser = (req, res) => {
  const user = data.map((user) => user);
  const randID = Math.floor(Math.random() * user.length);
  res.send(user[randID]);
};

module.exports.getAllUser = (req, res) => {
  const user = data.map((user) => user);
  const { limit } = req.query;
  const limitedUser = user.slice(0, limit);
  res.send(limitedUser);
};

module.exports.saveAnUser = (req, res) => {
  let user = data.map((user) => user);
  const newUser = req.body;
  const { Id, gender, name, contact, address, photoUrl } = newUser;
  if (!Id || !gender || !name || !contact || !address || !photoUrl) {
    res.status(204).json({ status: false, error: 'All field must be filled' });
  }
  user.push(newUser);
  fs.writeFileSync('public/data.json', JSON.stringify(user), (err) => {
    console.log(err.message);
  });
  res.send(user);
};

module.exports.updateSingleUser = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  let user = data.find((user) => user.Id === Number(id));
  
  res.send(user);
};

module.exports.deleteAUser = (req, res) => {
  const { id } = req.params;
  const users = data.map((user) => user);
  let dUser = data.find((user) => user.Id === Number(id));  
  fs.unlink('/../public/data.json', JSON.stringify(dUser), (err) => {
    console.log(err.message);
  });
  res.send(users);
};

const model = require('../models/friends.model');
function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friends name',
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'friend does not exist...',
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriend,
};

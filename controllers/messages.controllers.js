const path = require('path');

function getMessage(req, res) {
  // res.send('<ul><li>Hello</li></ul>');
  res.render('messages', {
    title: 'Messsages to my friend',
    friend: 'Elon Musk',
  });
  //res.sendFile(
  //path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
  //);
}
function postMessage(req, res) {
  console.log('updating messages');
}

module.exports = {
  getMessage,
  postMessage,
};

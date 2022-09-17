
const fetch = require('node-fetch');

fetch('http://localhost:5000/flip-coins?times=100')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });


  // had to fun Node V2 => npm install node-fetch@2

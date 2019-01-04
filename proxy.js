const express = require('express');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

let proxee = express();

proxee.use(bodyParser.urlencoded({
    extended: true
}))
proxee.use(cors());
proxee.use('/:id', express.static(path.join(__dirname, './client')) )
// proxee.use('/', proxy({
//     target: 'http://127.0.0.1:3009/', 
//     changeOrigin: true
// }))

let port = 3100;
proxee.listen(port, () => {
    console.log(`Proxy listening on port ${port}`);
})
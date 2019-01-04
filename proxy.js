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
proxee.use(express.static(path.join(__dirname, './client')) )

proxee.use('/streetBreezy/api/description', proxy({
    target: 'http://ec2-18-218-251-40.us-east-2.compute.amazonaws.com:3009'
}))

proxee.use('/api/carousel', proxy({
    target: 'http://ec2-18-223-116-251.us-east-2.compute.amazonaws.com'
}))

proxee.use('/api/similarlistings', proxy({
    target: 'http://ec2-54-174-166-132.compute-1.amazonaws.com'
}));

let port = 3100;
proxee.listen(port, () => {
    console.log(`Proxy listening on port ${port}`);
})
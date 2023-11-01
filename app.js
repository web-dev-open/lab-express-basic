import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

import express from 'express'
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res, next) {
    res.sendFile( __dirname + '/view/home.html')
  })

  app.get('/about', function (req, res) {
    res.sendFile( __dirname + '/view/about.html')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})


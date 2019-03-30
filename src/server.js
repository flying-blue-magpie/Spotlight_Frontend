import express from 'express';
import proxy from 'http-proxy-middleware';
import http from 'http';
import path from 'path';

const PORT = 5000;

const API_URI = 'spotlight-server.herokuapp.com';

const app = express();

// express
app.set('port', PORT);

app.use(express.static('./build'));

app.use(proxy('/api', {
  target: {
    protocol: 'http',
    host: API_URI,
  },
  changeOrigin: true,
  secure: true,
  pathRewrite: {
    '^/api': '',
  },
}));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


// server
const server = http.createServer(app);
server.listen(PORT);

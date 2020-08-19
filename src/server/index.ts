import express from 'express';
import proxy from 'express-http-proxy';
import routes from './routes';

const app = express();

// app.use('/static', express.static('dist/public'));
// app.use('/proxy-static', proxy('http://localhost:3001/'));
app.use(express.static('dist/public'));
app.use(routes);

app.listen(3002);

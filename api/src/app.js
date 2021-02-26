import express from 'express';
import cors from 'cors';
import io from 'socket.io';
import http from 'http';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.shttp = http.Server(this.server);
    this.socketio = io(this.shttp, {
      cors: {
        origin: "http://192.168.10.11:3000",
        methods: ["GET", "POST"]
      }
    });

    this.middlewares();
    this.routes();

  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use((req, res, next) => {
      req.io = this.socketio;
      return next();
    });
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App();
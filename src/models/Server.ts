import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import { routerEjemplo } from "../routes/routerEjemplo"
import { ENV } from '../config/envConfig'

class Server {
    private app: any
    private port: any
    private urlExample: string
    constructor() {
        this.port = ENV.PORT || 8080;
        this.app = express();
        this.urlExample = '/api/ejemplo'
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    routes() {
        this.app.use(this.urlExample, routerEjemplo)
    }
    listen() {
        try {
            this.app.listen(this.port, () => {
            })
        }
        catch (err: any) {
        }
    }
}
export { Server }
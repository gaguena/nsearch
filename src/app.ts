import express, { json } from 'express'
import * as dotenv from "dotenv";
 
class App {
  public app: express.Application
  public port: number;
 
  constructor(controllers: any, port: any) {
    this.app = express()
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(json())
  }
 
  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;
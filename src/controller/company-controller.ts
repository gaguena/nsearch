import * as express from 'express';

class CompanyController {

  private path = '/companys';
  private router = express.Router()

  constructor() {
    this.intializeRoutes()
  }
 
  private intializeRoutes() {
    this.router.get(`${this.path}/:document`, this.findCompany)
  }

  findCompany = (request: express.Request, response: express.Response) => {

  }
}
export default CompanyController
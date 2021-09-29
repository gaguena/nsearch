import * as express from 'express';
import CompanyService from '../service/company-service'

class CompanyController {

  private path = '/companys';
  private router = express.Router()
  private companyService = new CompanyService()

  constructor() {
    this.intializeRoutes()
  }
 
  private intializeRoutes() {
    this.router.get(`${this.path}/:document`, this.findCompany)
  }

  findCompany = async (request: express.Request, response: express.Response) => {
    try {
      var document = new Number(request.params.document)
      var data = await this.companyService.findBy(document)
      response.send(data)
    } catch(err) {

    }

  }
}
export default CompanyController
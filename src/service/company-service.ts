import axios from 'axios'

class CompanyService {

  async findBy(document: Number) {
    try {
      var company = await axios.get(`${process.env.COMPANY_INTEGRATION}/${document}`)
      return company.data
    } catch(err) {
      throw err;
    }
  }
}

export default CompanyService
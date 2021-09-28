import App from './src/app'
import CompanyController from './src/controller/company-controller'
import dotenv from 'dotenv'

dotenv.config()

const app = new App(
  [
    new CompanyController(),
  ],
  process.env.PORT,
);
 
app.listen();
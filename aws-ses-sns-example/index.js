import dotenv from "dotenv"
import { sendEmail } from "./services/aws-ses-service.js";
import { run } from "./services/aws-sns-service.js";

dotenv.config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let messageBody="Hi This is the sample message sent via aws sdk"
let contact={
  mobile:'+919646411231',
  email:"safieqbal@gmail.com"
}

run(messageBody,contact.mobile);
sendEmail(contact.email)


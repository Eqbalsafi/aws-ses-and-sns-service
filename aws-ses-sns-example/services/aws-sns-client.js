import { SNSClient } from "@aws-sdk/client-sns";

// Set the AWS Region.
const REGION = "ap-south-1"; 

// Create SNS service object.
export const snsClient = new SNSClient({ region: REGION });

import { SESClient } from "@aws-sdk/client-ses";

const REGION = "ap-south-1"; //e.g. "us-east-1"

export const sesClient = new SESClient({ region: REGION });

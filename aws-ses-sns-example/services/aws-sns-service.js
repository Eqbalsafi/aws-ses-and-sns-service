import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./aws-sns-client";

export const run = async (msg,contact) => {
    try {
        var params = {
            Message: msg, // MESSAGE_TEXT,
            PhoneNumber:contact
            // TopicArn: "arn:aws:sns:region:number:Sample_SMS_topic", //TOPIC_ARN
          };
      const data = await snsClient.send(new PublishCommand(params));
      console.log("Success.",  data);
      return data; 
    } catch (err) {
      console.error("Error", err.stack);      
    }
  };
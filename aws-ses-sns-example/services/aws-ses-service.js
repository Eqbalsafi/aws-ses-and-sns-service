import { SendEmailCommand }  from "@aws-sdk/client-ses";
import { sesClient } from "./ses_client.js";

export const sendEmail = async (recipientEmail) => {
  try {
    const params = {
      Destination: {
        // CcAddresses: [ /* more items */ ],
        ToAddresses: [recipientEmail],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: "HTML_FORMAT_BODY", //html
          },
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "EMAIL_SUBJECT",
        },
      },
      Source: "SENDER_ADDRESS", // SENDER_ADDRESS
      // ReplyToAddresses: [ /* more items */],
    };
    const data = await sesClient.send(new SendEmailCommand(params));
    console.log("Success", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

const twilio = require("twilio"); 

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function sendMessage(body:string , to:string) {
    const message = await client.messages.create({
      from: "+18453939479",
      body: body,
      to: to,
    });
  
    console.log(message.body);
  }
  

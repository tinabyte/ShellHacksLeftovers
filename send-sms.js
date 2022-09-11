
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: '',
     from: '+16075272269',
     to: '+13037189034'
   })
  .then(message => console.log(message.sid));
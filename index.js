const discord = require("discord.js");
const client = new Discord.Client();

client.login("NjE3MTE1NDM5NDQ4OTgxNTE1.XWmbrA.SFGNXrudykqWj8yNIeTR8CwXkD0");

client.on("ready", () =>{
  console.log("the bot is logged in");
});

  client.on("message", message => {
    if(message.author.bot)
    return;

    if(message.content.toLowerCase{} === "hello")
    message.channel.send("hi");
  });

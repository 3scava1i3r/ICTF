const { Client, RichEmbed } = require("discord.js");
const bot = new Client();

const token = "ODMyNjIzMDgwMTgyNTEzNzI1.YHmeqw.26-K8nKMEi30y9Vy4v4VZjMdEKc";

const PREFIX = "=";

bot.on("ready", () => {
  console.log("This bot is active!");
});

bot.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "flag":
      const Embed = new RichEmbed()
        .setTitle("Helper Embed")
        .setColor(0xff0000)
        .setDescription(
          "ICTF{Fl4g_F0und_0n_Di5c0rd}"
        );

      message.author.send(Embed);
      break;
  }
});

bot.login(token);

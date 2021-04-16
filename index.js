const { Client, RichEmbed } = require("discord.js");
const bot = new Client();

const token = "ODMyNjIzMDgwMTgyNTEzNzI1.YHmeqw.XpBjrVhsQfuabNXkQqWrvPspltk";

const PREFIX = "=";

bot.on("ready", () => {
  console.log("This bot is active!");
});

bot.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "flag":
      

      message.author.send("ICTF{Fl4g_F0und_0n_Di5c0rd}");
      break;
  }
});

bot.login(token);


// ICTF{Fl4g_F0und_0n_Di5c0rd}
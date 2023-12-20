const { Telegraf } = require("telegraf");
const TOKEN = "BOT_TOKEN";
const bot = new Telegraf(TOKEN);

const web_link = "<YOUR_BUILD_URL>";

bot.start((ctx) =>
  ctx.reply("Welcome to pichtranshop", {
    reply_markup: {
      keyboard: [[{ text: "Explore my web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();

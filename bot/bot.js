const { Telegraf } = require("telegraf");
const TOKEN = "6422930119:AAHWIKEqdgKQAUt13wcIcnO6L9ZPa5JepgY";
const bot = new Telegraf(TOKEN);

const web_link = "https://6582bda0638b5515a3cda77d--jovial-concha-8427ed.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to pichtranshop", {
    reply_markup: {
      keyboard: [[{ text: "Explore my web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();

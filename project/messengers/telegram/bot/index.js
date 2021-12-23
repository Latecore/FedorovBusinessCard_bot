require("dotenv").config();
const assistant_chat = process.env.ASSISTENT;

const runBot = () => {
    const TelegramBot = require(`node-telegram-bot-api`);
    const BusinessCardBot = new TelegramBot(process.env.BUSINESSCARDTOKEN, {
        polling: true,
    });

    const { ruBotStart, ruBotOn, ruBotContact } = require("../bot/ruBot");
    const { ukBotStart, ukBotOn, ukBotContact } = require("../bot/ukBot");
    const { enBotStart, enBotOn, enBotContact } = require("../bot/enBot");

    BusinessCardBot.onText(/\/start/, async (msg) => {
        const language_code = msg.from.language_code
        if(language_code === "ru"){
            await ruBotStart(BusinessCardBot, msg, language_code, assistant_chat)
        } else if(language_code === "uk"){
            await ukBotStart(BusinessCardBot, msg, language_code, assistant_chat)
        } else {
            await enBotStart(BusinessCardBot, msg, assistant_chat)
        }
    });

    BusinessCardBot.on("message", async (msg) => {
        const language_code = msg.from.language_code;
        if(language_code === "ru"){
            await ruBotContact(BusinessCardBot, msg, language_code, assistant_chat)
        } else if (language_code === "uk"){
            await ukBotContact(BusinessCardBot, msg, language_code, assistant_chat)
        } else {
            await enBotContact(BusinessCardBot, msg, assistant_chat)
        }
    });

    BusinessCardBot.on("callback_query", async (query) => {
        const language_code = query.from.language_code;
        if (language_code === "ru") {
            await ruBotOn(BusinessCardBot, query, language_code, assistant_chat);
        } else if (language_code === "uk") {
            await ukBotOn(BusinessCardBot, query, language_code, assistant_chat);
        } else {
            await enBotOn(BusinessCardBot, query, assistant_chat);
        }
    });
};

module.exports = {
    runBot,
};

const { multikeyboard } = require("../keyboard/multikeyboard");
const { content } = require("../content/MLcontent");
const { AssContent } = require("../content/AssContent");

const ukBotStart = async (
  BusinessCardBot,
  msg,
  language_code,
  assistant_chat
) => {
  console.log("UK", msg);
  const chatId = msg.from.id;
  const ClientInfo = await BusinessCardBot.getChat(chatId);
  const { first_name, last_name, username, bio } = ClientInfo;
  await BusinessCardBot.sendMessage(
    assistant_chat,
    AssContent.start(first_name, last_name, username, bio, chatId)
  );
  if (!!username) {
    await BusinessCardBot.sendMessage(assistant_chat, AssContent.url(username));
  }
  await BusinessCardBot.sendPhoto(
    chatId,
    `./media/logo.jpg`
  ).then(() => {
    BusinessCardBot.sendMessage(chatId, content[language_code].start(), {
      reply_markup: {
        inline_keyboard: multikeyboard[language_code].main,
      },
    });
  });
};

const ukBotOn = async (
  BusinessCardBot,
  query,
  language_code,
  assistant_chat
) => {
  const chatId = query.from.id;
  const message_id = query.message.message_id;
  const data = query.data;
  const name = query.from.first_name;

  switch (data) {
    case "myContact":
      await BusinessCardBot.sendMessage(
        assistant_chat,
        AssContent.sendContact(query)
      );
      await BusinessCardBot.deleteMessage(chatId, message_id);
      await BusinessCardBot.sendMessage(
        chatId,
        content[language_code].getContact,
        {
          reply_markup: {
            inline_keyboard: multikeyboard[language_code].goBack,
          },
        }
      );
      break;

    case "resume":
      await BusinessCardBot.sendMessage(
        assistant_chat,
        AssContent.aboutMe(query)
      );
      await BusinessCardBot.sendPhoto(
        chatId,
        "./media/Vladimir.jpeg",
        {
          caption: content[language_code].myResume,
        }
      ).then(() => {
        BusinessCardBot.sendMessage(chatId, content[language_code].aboutMe, {
          reply_markup: {
            inline_keyboard: multikeyboard[language_code].goBack,
          },
        });
      });
      break;

    case "personal_callback":
      await BusinessCardBot.sendMessage(chatId, content[language_code].callMe, {
        reply_markup: {
          keyboard: [
            [
              {
                text: content[language_code].sendContact,
                request_contact: true,
                resize_keyboard: true,
              },
            ],
          ],
        },
      });
      break;

    case "meeting":
      await BusinessCardBot.sendMessage(chatId, content[language_code].meet, {
        reply_markup: {
          keyboard: [
            [
              {
                text: content[language_code].sendMeet,
                request_location: true,
                resize_keyboard: true,
              },
            ],
          ],
        },
      });
      break;

    case "comeBack":
      await BusinessCardBot.deleteMessage(chatId, message_id);
      await BusinessCardBot.sendMessage(
        chatId,
        content[language_code].writeMe,
        {
          reply_markup: {
            inline_keyboard: multikeyboard[language_code].main,
          },
        }
      );
      break;

    case "about_BusinessCard":
      await BusinessCardBot.sendMessage(
        assistant_chat,
        AssContent.aboutCard(query)
      );
      await BusinessCardBot.deleteMessage(chatId, message_id);
      await BusinessCardBot.sendMessage(
        chatId,
        content[language_code].aboutCard,
        {
          reply_markup: {
            inline_keyboard: multikeyboard[language_code].order,
          },
        }
      );
      break;

    case "order":
      await BusinessCardBot.deleteMessage(chatId, message_id);
      await BusinessCardBot.sendMessage(
        assistant_chat,
        AssContent.orderCard(query)
      );
      await BusinessCardBot.sendMessage(
        chatId,
        content[language_code].orderBot,
        {
          reply_markup: {
            inline_keyboard: multikeyboard[language_code].goBack,
          },
        }
      );
      break;

    // case "services":
    //   await BusinessCardBot.deleteMessage(chatId, message_id);
    //   await BusinessCardBot.sendMessage(
    //     assistant_chat,
    //     AssContent.services(query)
    //   );
    //   await BusinessCardBot.sendMessage(
    //     chatId,
    //     content[language_code].services,
    //     {
    //       reply_markup: {
    //         inline_keyboard: multikeyboard[language_code].goBack,
    //       },
    //     }
    //   );
    //   break;
  }
};

const ukBotContact = async (
  BusinessCardBot,
  msg,
  language_code,
  assistant_chat
) => {
  const chatId = msg.from.id;
  if (msg.contact) {
    console.log(msg.contact);
    const contactString = `Contact: ${msg.from.first_name} with phone ☎️ ${msg.contact.phone_number}`;
    await BusinessCardBot.sendMessage(assistant_chat, contactString);
    await BusinessCardBot.sendMessage(chatId, content[language_code].contact, {
      reply_markup: {
        remove_keyboard: true,
      },
    });
  }
  if (msg.location) {
    console.log(msg.location);
    try {
      let mapUrl = `https://www.google.com/maps/search/?api=1&query=${msg.location.latitude},${msg.location.longitude}`;
      const locationString = `name: ${msg.from.first_name} \n username: ${msg.from.username} : \n location 🗺 ${mapUrl}`;
      await BusinessCardBot.sendMessage(assistant_chat, locationString);
      await BusinessCardBot.sendMessage(
        chatId,
        content[language_code].location,
        {
          reply_markup: {
            remove_keyboard: true,
          },
        }
      );
    } catch (e) {
      await BusinessCardBot.sendMessage(chatId, "Something went wrong... 🤔");
      console.log("error:", e);
    }
  }

  const start = msg.text;
  if (!msg.contact && !msg.location && start !== "/start") {
    await BusinessCardBot.sendMessage(
      assistant_chat,
      AssContent.textMessage(msg)
    );
  }
};

module.exports = {
  ukBotStart,
  ukBotOn,
  ukBotContact,
};

const multikeyboard = {
  ru: {
    main: [
      [{ text: "🧑🏻‍🦱 о себе", callback_data: "resume" }],
      [{ text: "📞 мои контакты", callback_data: "myContact" }],
      [{ text: "📲 обратный звонок", callback_data: "personal_callback" }],
      [{ text: "🤝 назначить встречу", callback_data: "meeting" }],
      [{ text: "✍️ написать мне", url: "https://t.me/SomeTeleAcc" }],
      // [{ text: "💼 услуги", callback_data: "services" }],
      [{ text: "⚠ про мою визитку", callback_data: "about_BusinessCard" }],
    ],
    goBack: [[{ text: "↩️ вернуться назад", callback_data: "comeBack" }]],
    order: [
      [{ text: "✅ ЗАКАЗАТЬ", callback_data: "order" }],
      [{ text: "↩ вернуться назад", callback_data: "comeBack" }],
    ],
  },
  uk: {
    main: [
      [{ text: "🧑🏻‍🦱 про себе", callback_data: "resume" }],
      [{ text: "📞 мої контакти", callback_data: "myContact" }],
      [{ text: "📲 зворотній звонок", callback_data: "personal_callback" }],
      [{ text: "🤝 призначити зустріч", callback_data: "meeting" }],
      [{ text: "✍️ написати мені", url: "https://t.me/SomeTeleAcc" }],
      // [{ text: "💼 послуги", callback_data: "services" }],
      [{ text: "⚠ про мою візитку", callback_data: "about_BusinessCard" }],
    ],
    goBack: [[{ text: "↩️ назад", callback_data: "comeBack" }]],
    order: [
      [{ text: "✅ ЗАМОВИТИ", callback_data: "order" }],
      [{ text: "↩ назад", callback_data: "comeBack" }],
    ],
  },
  en: {
    main: [
      [{ text: "🧑🏻‍🦱 about me", callback_data: "resume" }],
      [{ text: "📞 my contact", callback_data: "myContact" }],
      [{ text: "📲 callback", callback_data: "personal_callback" }],
      [{ text: "🤝 make appointment", callback_data: "meeting" }],
      [{ text: "✍️ write me", url: "https://t.me/SomeTeleAcc" }],
      // [{ text: "💼 services", callback_data: "services" }],
      [{ text: "⚠ about my business card", callback_data: "about_BusinessCard" }],
    ],
    goBack: [[{ text: "↩️ back", callback_data: "comeBack" }]],
    order: [
      [{ text: "✅ ORDER", callback_data: "order" }],
      [{ text: "↩ back", callback_data: "comeBack" }],
    ],
  }
};

module.exports = { multikeyboard };
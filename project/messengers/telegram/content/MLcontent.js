const first_start_ru = () => {
  return (
    "Я очень рад, что вы нашли время посмотреть мою визитку, надеюсь она вам понравится и вы найдете ответы на все вопросы которые вас интересуют.\n" +
    "\n" +
    "Я уверен, мы сработаемся 😉 впереди нас ждут великие дела 😎 \n"
  );
};

const first_start_ua = () => {
  return (
    `Я дуже радий, що ви знайшли час подивитися мою візитку, сподіваюся, вона вам сподобається і ви знайдете відповіді на всі питання, які вас цікавлять.\n` +
    "\n" +
    `Я впевнений, ми спрацюємося 😉 попереду нас чекають великі справи 😎 `
  );
};

const first_start_eng = () => {
  return (
    `I am very glad that you took the time to look at my business card, I hope you will like it and you will find answers to all the questions that interest you.\n` +
    "\n" +
    `I'm sure, we will work together 😉 great things await us 😎 `
  );
};

const content = {
  ru: {
    start: first_start_ru,
    contact: "Контакт принят",
    location: "Местоположение принято",
    getContact:
      "🏠 Украина, Киев\n" +
      " \n" +
      `📱 +380986726358 \n` +
      " \n" +
      `🖥 www.latecore.com \n` +
      " \n" +
      `📧  fedorov.exec@gmail.com \n`,
    myResume:
      "Меня зовут Владамир Федоров, я Глава технического отдела, расчитываю на сотрудничество с вами",
    aboutMe:
      "Кратко о том, чем я занимаюсь:\n" +
      "\n" +
      "✔️ Специалист в области информацинных технологий и искуственного интелекта.\n" +
      "\n" +
      "✔️ 5 лет опыта на руководящих позициях.\n" +
      " \n" +
      "✔️ Сотрудник Института физики НАН Украины, отдел Физики биологических систем.",
    callMe: "Поделится контактом для обратной связи",
    sendContact: "Отправить контакт",
    meet:
      "Отправьте свое местоположение или введите другой удобный для вас адрес, а также укажите время и дату встречи",
    sendMeet: "Отправить свое местоположение",
    writeMe:
      "можете написать мне свои вопросы или оставить заявку на обратный звонок и я перезвоню вам",
    aboutCard:
      "Ну что, Вам понравилась моя БОТ-ВИЗИТКА 😎\n" +
      "она мне очень помогает в моих повседневных делах!\n" +
      "\n" +
      "🔘 это как персональная страничка в мессенджере\n" +
      "\n" +
      "☎️  - мои контакты\n" +
      "📅  - моё расписание\n" +
      "💡  - чем я занимаюсь\n" +
      "🗺  - где нахожусь\n" +
      "📣  - почитать/оставить отзывы\n" +
      "💼  - посмотреть портфолио\n" +
      "📩  - задать вопрос\n" +
      "📝  - оставить заявку\n" +
      "\n" +
      "... и все это 24/7\n" +
      "Вам больше не надо отвечать лично на все вопросы ❗️\n" +
      "\n" +
      "✅ не медлите, заказывайте и себе такую БОТ-ВИЗИТКУ ✅️\n" +
      "\n" +
      "\n" +
      "Не только визитки, смотри что ещё может БОТ\n 👉 @KovalCraftManager_bot 👈",
    orderBot: "Отлично! Заявка принята, мы скоро свяжемся с вами",
    //     services: "👨🏼‍🏫 Консультации по инвестициям за рубежом и в Украине. \n💵 100$/ час\n" +
    //         "\n" +
    //         "👨🏼‍🏫 Консультации для фаундеров стартапов по поводу валидации гипотезы, УТП, критической ценности, рынка, питчинга проекта и подготовки к выступлению, проработка слабых мест: \n💵 100$/ час\n" +
    //         "\n" +
    //         "🕵️‍♂️ услуга по поиску грантов для стартапа с консалтингом и подачей на программы + 2 📚 текстовыми защитами перед экспертами:\n" +
    //         "💵 1000$ за 3 Гранта +10% от суммы полученных грантов\n" +
    //         "\n" +
    //         "🕵️‍♂️ поиск 3-х грантовых программ под стартап без консалтинга и подачи - \n💵 600$"
  },
  uk: {
    start: first_start_ua,
    contact: "Контакт прийнято",
    location: "Місце розташування прийнято",
    getContact:
      "🏠 Україна, Київ\n" +
      " \n" +
      `📱 +380986726358 \n` +
      " \n" +
      `🖥 www.latecore.com \n` +
      " \n" +
      `📧  fedorov.exec@gmail.com \n`,
    myResume:
      "Мене звуть Володимир Федоров, я Голова технічного підрозділу, розраховую на партнерство з вами",
    aboutMe:
      "Коротко про те, чим я займаюся: \n" +
      "\n" +
      "✔️ Спеціаліст у галузі інформаціонніх технологій та штучного інтелекту.\n" +
      "\n" +
      "✔️ 5 років досвіду на керуючих посадах.\n" +
      "\n" +
      "✔️ Співробітних Інституту фізики, відділ Фізики біологічних систем.",
    callMe: "Поділиться контактом для зворотного зв'язку",
    sendContact: "Надіслати контакт",
    meet:
      "Надішліть своє місцезнаходження або введіть іншу зручну для вас адресу, а також вкажіть час і дату зустрічі",
    sendMeet: "Надіслати місце розташування",
    writeMe:
      "можете написати мені свої запитання або залишити заявку на зворотній дзвінок і я передзвоню вам",
    aboutCard:
      "Вам сподобалася моя БОТ-ВІЗИТКА 😎\n" +
      "вона мені дуже допомагає у моїх повсякденних справах!\n" +
      "\n" +
      "🔘 це як персональна сторінка в месенджері\n" +
      "\n" +
      "☎️ - мої контакти\n" +
      "📅 - мій розклад \n" +
      "💡 - чим я займаюся\n" +
      "🗺 - де знаходжусь\n" +
      "📣 - почитати/залишити відгук\n" +
      "💼 - переглянути портфоліо\n" +
      "📩 - поставити питання\n" +
      "📝 - залишити заявку\n" +
      "\n" +
      "... і все це 24/7\n" +
      "Вам більше не треба відповідати особисто на всі запитання ❗️\n" +
      "\n" +
      "✅ не зволікайте, замовляйте і собі таку БОТ-ВІЗИТКУ ✅️\n" +
      "\n" +
      "\n" +
      "Не тільки візитки, дивись що ще може БОТ\n 👉 @KovalCraftManager_bot 👈",
    orderBot: "Чудово! Заявка прийнята, я скоро з Вами зв'яжусь",
    // services: "👨🏼‍🏫 Консультації з інвестицій за кордоном та в Україні. 💵 100$/ година\n" +
    //     "\n" +
    //     "👨🏼‍🏫 Консультації для фаундерів стартапів з приводу валідації гіпотези, УТП, критичної цінності, ринку, пітчингу проекту та підготовки до виступу, пропрацювання слабких місць: 💵 100$/ година\n" +
    //     "\n" +
    //     "🕵️‍♂️ послуга з пошуку грантів для стартапу з консалтингом та подачею на програми + 2 📚 текстовими захистами перед експертами:\n" +
    //     "💵 1000$ за 3 Гранти +10% від суми здобутих грантів\n" +
    //     "\n" +
    //     "🕵️‍♂️ пошук 3-х грантових програм під стартап без консалтингу та подачі - 💵 600$"
  },
  en: {
    start: first_start_eng,
    contact: "Contact accepted",
    location: "Location accepted",
    getContact:
      "🏠 Ukraine, Кyiv\n" +
      " \n" +
      `📱 +380986726358 \n` +
      " \n" +
      `🖥 www.latecore.com \n` +
      " \n" +
      `📧  fedorov.exec@gmail.com \n`,
    myResume:
      "My name is Volodymyr Fedorov, i am the Chief Technology Officer, looking forward to partnering with you",
    aboutMe:
      "Briefly about what I do: \n " +
      " n" +
      "✔️ IT&AI professional.\n" +
      " n" +
      "✔️ 5 years of experiance as head of department.\n" +
      " n" +
      "✔️ Researcher at Institute of Physics NAS of Ukraine, Department of physics of biological systems.",
    callMe: "Share a contact for feedback",
    sendContact: "Send contact",
    meet:
      "Send your location or enter another address convenient for you, and also indicate the time and date of the meeting",
    sendMeet: "Submit your location",
    writeMe:
      "you can write me your questions or leave a request for a call back and I will call you back",
    aboutCard:
      "Well, you liked my BOT-BUSINESS CARD 😎 \n " +
      "she helps me a lot in my daily activities! \n" +
      "\n" +
      "🔘 it's like a personal page in a messenger \n" +
      "\n" +
      "☎️ - my contacts \n" +
      "📅 is my schedule \n" +
      "💡 - what am I doing \n" +
      "🗺 - where am I \n" +
      "📣 - read / leave feedback \n" +
      "💼 - see portfolio \n" +
      "📩 - ask a question \n" +
      "📝 - leave a request \n" +
      "\n" +
      "... and it's all 24/7 \n" +
      "You don't have to answer all questions personally ❗️ \n" +
      "\n" +
      "✅ do not hesitate, order this BOT-BUSINESS CARD for yourself too ✅️ \n" +
      "\n" +
      "\n" +
      "Not only business cards, see what else the BOT can do \n 👉 @KovalCraftManager_bot 👈",
    orderBot:
      "Fine! The application has been accepted, I will contact you shortly",
    // services: "👨🏼‍🏫 Investment consultations abroad and in Ukraine. 💵 $ 100 / hour \n" +
    //     "\n" +
    //     "👨🏼‍🏫 Consultations for startup founders on hypothesis validation, UTP, critical value, market, project pitching and performance preparation, working out weaknesses: 💵 $ 100 / hour \n" +
    //     "\n" +
    //     "🕵️‍♂️ grant search service for startups with consulting and application + 2 📚 text protections to experts: \n" +
    //     "$ 1,000 for 3 Grants + 10% of the amount of grants received \n" +
    //     "\n" +
    //     "🕵️‍♂️ search for 3 grant programs for a startup without consulting and submission - 💵 $ 600"
  },
};

module.exports = {
    content
}
const NewClient = (first_name, last_name, username, bio, chatId)=>{
    return `🟢 New client open your BusinessCard 📇\n
   name ${first_name}\n
   last name: ${last_name}\n
   username: ${username}\n
   biography: ${bio} \n
   🆔 ${chatId}`
}
const clientUrl = (username)=>{
    return `открыть диалог с ⏭ https://t.me/${username}`
}

const Contact = (query)=>{
    return `📇 message from Business Card: \n name: ${query.from.first_name} \n username: ${query.from.username} \n ⤵️ открыта вкладка мои контакты`
}

const About = (query)=>{
    return `📇 message from Business Card: \n name: ${query.from.first_name} \n username: ${query.from.username} \n ⤵️ открыта вкладка "обо мне"`
}

const AboutCard = (query)=>{
    return `📇 message from Business Card: \n name: ${query.from.first_name} \n username: ${query.from.username} \n ⤵️ открыта вкладка "про визитку"`
}

const OrderCard = (query)=>{
    return `📇 message from Business Card Fedorov: \n name: ${query.from.first_name} \n username: ${query.from.username} \n 🆔 ${query.from.id} \n 🆕 ЗАЯВКА НА БОТ-ВИЗИТКУ ✅`
}

// const MyServices = (query)=>{
//     return `📇 message from Business Card: \n name: ${query.from.first_name} \n username: ${query.from.username} \n ⤵️ открыта вкладка "услуги"`
// }

const MessageText = (msg)=>{
    return `📇 message from Business Card: \n name: ${msg.from.first_name} \n username: ${msg.from.username} \n 🆔 ${msg.from.id} \n send 🖊 ${msg.text}`
}

const AssContent = {

        start: NewClient,
        url: clientUrl,
        sendContact: Contact,
        aboutMe: About,
        aboutCard: AboutCard,
        orderCard: OrderCard,
        // services: MyServices,
        textMessage: MessageText

}

module.exports = {
    AssContent
}
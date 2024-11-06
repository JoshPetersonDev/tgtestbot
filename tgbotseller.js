import TelegramBot from 'node-telegram-bot-api';
import fetch from 'node-fetch';
// Вставте свій токен бота, отриманий від BotFather
const token = '7484610747:AAGuWlwXNpwMCas6xPesYIEzwPm7BhIbAkE';
const nowPaymentsApiKey = '9D7NR9E-DBRM40S-QJCQAX3-DYHWAKW';

// Створюємо бота
const bot = new TelegramBot(token, {polling: true});

import { language } from './lang.js'
import { linksKeyboard } from './lang.js'

const lang = language;
const { textBack, listOfAccs, accsLeft, faq, refSystem, buyAnAccs,
        profile, statistics, regRefLink, bonusSystem, giftCodeFaq,
        paymentFaq, refSystemFaq, withdrawalFaq, paymentCreater, 
        withdrawalCreater, generateWithdrawalLink
    }  = linksKeyboard


// Меню для вибору мови
const langKeyboard = [
    [{text: lang['icons'].ru, callback_data: 'lang_ru'}, {text: lang['icons'].en, callback_data: 'lang_en'}],
    [{text: lang['icons'].es, callback_data: 'lang_es'}, {text: lang['icons'].it, callback_data: 'lang_it'}], 
    [{text: lang['icons'].ge, callback_data: 'lang_ge'}]
]

let emailInfo = '';
let currentLang;
let userEmails = {};

// Валідація почти
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
// Створення платежу
const generatePayment = async (chatId, amount, description, email, pathTofile) => {
    const filePath = pathTofile;
    const paymentData = {
        price_amount: amount, // Сума у валюті
        price_currency: 'usd', // Валюта
        pay_currency: 'btc', // Криптовалюта для оплати
        order_id: `user_${chatId}`,
        order_description: description,
        ipn_callback_url: `https://localhost.com/webhook`,
    }

    try {
        const response = await fetch('https://api.nowpayments.io/v1/invoice', {
            method: 'POST',
            headers: {
                'x-api-key': nowPaymentsApiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        });

        const payment = await response.json();

        bot.sendMessage(chatId, `
${lang[currentLang].text_payment_descr_one} ${payment.invoice_url}. 
${lang[currentLang].text_payment_descr_two} ${email ? email : 'email'}
${lang[currentLang].text_payment_descr_three} 

${lang[currentLang].text_payment_descr_four}`)
        bot.sendDocument(chatId, filePath, { contentType: 'application/zip' })
    } catch (error) {
        bot.sendMessage(chatId, 'error')
    }
}

// Старт бота
bot.onText(/\/start/, msg => {
    const chatId = msg.chat.id;

    const options = {
        reply_markup: {
            resize_keyboard: true,
            inline_keyboard: langKeyboard
        }
    }

    console.log(`User is connected: ${chatId}`)

    bot.sendMessage(chatId, `Select language`, options)
})

// Запис вибраої мови і відображення меню
bot.on('callback_query', query => {
    const chatId = query.message.chat.id;
    if(query.data === 'lang_en') currentLang = 'en'
    if(query.data === 'lang_ru') currentLang = 'ru'
    if(query.data === 'lang_es') currentLang = 'es'
    if(query.data === 'lang_it') currentLang = 'it'
    if(query.data === 'lang_ge') currentLang = 'ge'

    const keyboard = [
        [{text: lang[currentLang].text_1_btn}, {text: lang[currentLang].text_2_btn}],
        [{text: lang[currentLang].text_3_btn}, {text: lang[currentLang].text_4_btn}], 
        [{text: lang[currentLang].text_5_btn}]
    ]

    const options = {
        reply_markup: {
            keyboard: keyboard,
            resize_keyboard: true,
        },
    }

    if(query.data === 'add_email'){
        bot.sendMessage(chatId, lang[currentLang].enter_email)
    }

    if(query.data === 'lang_en') bot.sendMessage(chatId, lang[currentLang].text_1, options)
    if(query.data === 'lang_ru') bot.sendMessage(chatId, lang[currentLang].text_1, options)
    if(query.data === 'lang_es') bot.sendMessage(chatId, lang[currentLang].text_1, options)
    if(query.data === 'lang_it') bot.sendMessage(chatId, lang[currentLang].text_1, options)
    if(query.data === 'lang_ge') bot.sendMessage(chatId, lang[currentLang].text_1, options)
})

// Початок оброблення кнопок

// 1. Оброблення першого пункту меню
bot.onText(listOfAccs, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_1_descr;

    bot.sendMessage(chatId, message)
})

// 2. Добалення другого пункту меню
bot.onText(accsLeft, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_2_descr;

    bot.sendMessage(chatId, message);
})

// 3. Добалення третього пункту меню
bot.onText(faq, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_3_descr_faq

    const faqKeyboard = [
        [{text: lang[currentLang].text_9_btn}, {text: lang[currentLang].text_10_btn}],
        [{text: lang[currentLang].text_11_btn}, {text: lang[currentLang].text_12_btn}],
        [{text: lang[currentLang].text_back}]
    ]

    const options = {
        reply_markup: {
            keyboard: faqKeyboard,
            resize_keyboard: true,
        },
    }

    bot.sendMessage(chatId, message, options)
})

// 3.1 Gift Code
bot.onText(giftCodeFaq, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_3_faq_giftcode

    bot.sendMessage(chatId, message)
})

// 3.2 Оплата и получение
bot.onText(paymentFaq, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_3_faq_paymentFaq

    bot.sendMessage(chatId, message)
})

// 3.3 Реферальная система
bot.onText(refSystemFaq, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_3_faq_refSystemFaq

    bot.sendMessage(chatId, message)
})

// 3.4 Вывод
bot.onText(withdrawalFaq, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_3_faq_withdrawalFaq

    bot.sendMessage(chatId, message)
})

// 4. Добалення четвертого пункту меню
bot.onText(refSystem, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_4_descr_referrals;
    const refSystemKeyboard = [
        [{text: lang[currentLang].text_8_btn}, {text: lang[currentLang].text_6_btn}],
        [{text: lang[currentLang].text_7_btn}],
        [{text: lang[currentLang].text_back}]
    ]

    const options = {
        reply_markup: {
            keyboard: refSystemKeyboard,
            resize_keyboard: true,
        },
    }

    bot.sendMessage(chatId, message, options)
})

// 4.1 пункт Профіль
bot.onText(profile, msg => {
    const chatId = msg.chat.id
    const message = "Error"

    bot.sendMessage(chatId, message)
})
// 4.2 пункт Статистика
bot.onText(statistics, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_statistic

    bot.sendMessage(chatId, message)
})
// 4.3 пункт Зарег реф ссилку
bot.onText(regRefLink, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_regreflink

    bot.sendMessage(chatId, message)
})

// 4.4 пункт Бунус система
bot.onText(bonusSystem, msg => {
    const chatId = msg.chat.id
    const message = lang[currentLang].text_bonussystem

    bot.sendMessage(chatId, message)
})

// Кнопка НАЗАД
bot.onText(textBack, msg => {
    const chatId = msg.chat.id
    const keyboard = [
        [{text: lang[currentLang].text_1_btn}, {text: lang[currentLang].text_2_btn}],
        [{text: lang[currentLang].text_3_btn}, {text: lang[currentLang].text_4_btn}], 
        [{text: lang[currentLang].text_5_btn}]
    ]

    const options = {
        reply_markup: {
            keyboard: keyboard,
            resize_keyboard: true,
        },
    }

    bot.sendMessage(chatId, lang[currentLang].text_main_page, options)

})

// Записання пошти і генерування посилання 
bot.on('callback_query', async query => {
    const chatId = query.message.chat.id;

    if(query.data === 'add_email'){
        bot.once('message', msg=> {
            if(isValidEmail(msg.text)){
                const email = msg.text
                userEmails[chatId] = email;
                const keyboard = [
                    [{text: 'Amazon #1. 40 USDT'}, {text: 'Amazon #2. 65 USDT'}],
                    [{text: 'Ebay #1. 35 USDT'}, {text: 'Ebay #2. 70 USDT'}],
                    [{text: 'Walmart #1. 60 USDT'}, {text: lang[currentLang].text_back}]
                ]
                const options = {
                    reply_markup: {
                        resize_keyboard: true,
                        keyboard: keyboard
                    }
                }
            
                bot.sendMessage(chatId, lang[currentLang].text_giftcode_buy, options)

            }else {
                const opts = {
                    reply_markup: {
                        resize_keyboard: true,
                        inline_keyboard: [
                            [{text: lang[currentLang].enter_email, callback_data: 'add_email'}]
                        ]
                    }
                } 
                bot.sendMessage(chatId, lang[currentLang].wrong_email, opts)
            }

        })
    }
})

// Добавлення кнопок для оплати

// Кнопка оплати
bot.onText(buyAnAccs, msg => {
    const chatId = msg.chat.id;

    const keyboard = [
        [{text: lang[currentLang].text_13_btn}, {text: lang[currentLang].text_14_btn}],
        [{text: lang[currentLang].text_back}]
    ]

    const opts = {
        reply_markup: {
            resize_keyboard: true,
            keyboard: keyboard,
        }
    }
    bot.sendMessage(chatId, lang[currentLang].text_buyanaccs, opts)
})
bot.onText(paymentCreater, msg => {
    const chatId = msg.chat.id;

    const opts = {
        reply_markup: {
            resize_keyboard: true,
            inline_keyboard: [
                [{text: lang[currentLang].enter_email, callback_data: 'add_email'}]
            ]
        }
    }
    bot.sendMessage(chatId, lang[currentLang].enter_email_payment_text, opts)

})
// Кнопка вивода
bot.onText(withdrawalCreater, msg => {
    const chatId = msg.chat.id;

    const keyboard = [
        [{text: lang[currentLang].text_15_btn}],
        [{text: lang[currentLang].text_back}]
    ]

    const opts = {
        reply_markup: {
            resize_keyboard: true,
            keyboard: keyboard,
        }
    }

    bot.sendMessage(chatId, lang[currentLang].text_withdraw_balance, opts)
})

bot.onText(generateWithdrawalLink, msg => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, lang[currentLang].text_not_amount)
})

bot.onText('Amazon #1. 40 USDT', msg => {
    const chatId = msg.chat.id;

    const email = userEmails[chatId];

    if(!email){
        bot.sendMessage(chatId, lang[currentLang].enter_email)
        return -1;
    }

    generatePayment(chatId, 40, 'Gift Code - Amazon #1.', email, 'amazon#1.zip')
})

bot.onText('Amazon #2. 65 USDT', msg => {
    const chatId = msg.chat.id;

    const email = userEmails[chatId];

    if(!email){
        bot.sendMessage(chatId, lang[currentLang].enter_email)
        return -1;
    }

    generatePayment(chatId, 65, 'Gift Code - Amazon #2.', email, 'amazon#2.zip')
})

bot.onText('Ebay #1. 35 USDT', msg => {
    const chatId = msg.chat.id;

    const email = userEmails[chatId];

    if(!email){
        bot.sendMessage(chatId, lang[currentLang].enter_email)
        return -1;
    }

    generatePayment(chatId, 35, 'Gift Code - Ebay #1.', email, 'ebay#1.zip')
})

bot.onText('Ebay #2. 70 USDT', msg => {
    const chatId = msg.chat.id;

    const email = userEmails[chatId];

    if(!email){
        bot.sendMessage(chatId, lang[currentLang].enter_email)
        return -1;
    }

    generatePayment(chatId, 70, 'Gift Code - Ebay #2.', email, 'ebay#2.zip')
})

bot.onText('Walmart #1. 60 USDT', msg => {
    const chatId = msg.chat.id;

    const email = userEmails[chatId];

    if(!email){
        bot.sendMessage(chatId, lang[currentLang].enter_email)
        return -1;
    }

    generatePayment(chatId, 60, 'Gift Code - Walmart #1.', email, 'walmart#1.zip')
})
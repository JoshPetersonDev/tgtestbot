const updatedAccsRu = '31.10.2024'
const updatedAccsEn = '10/31/2024'
const updatedAccsEu = '31-10-2024'
export const linksKeyboard = {
    textBack: /Назад|Back|Atrás|Indietro|Zurück/,
    listOfAccs: /Список аккаунтов|List of accounts|Lista de cuentas|Elenco dei conti|Liste der Konten/,
    accsLeft:  /Осталось аккаунтов|Accounts left|Cuentas que quedan|Conti rimasti|Konten übrig/,
    faq: /FAQ|FAQ|Preguntas frecuentes|Domande frequenti|Häufig gestellte Fragen/,
    refSystem: /Реферальная система|Referral system|Sistema de referencia|Sistema di riferimento|Empfehlungssystem/,
    buyAnAccs: /Оплата и Вывод|Payment and Withdrawal|Pago y Retiro|Pagamento e Prelievo|Zahlung und Auszahlung/,
    profile: /Профиль|Profile|Perfil|Profilo|Profil/,
    statistics: /Статистика|Statistics|Estadística|Statistiche|Statistiken/,
    regRefLink: /Зарегистрировать реферальную ссылку|Register a referral link|Registrar enlace de referencia|Registra il link di riferimento|Empfehlungslink registrieren/,
    bonusSystem: /Бонусная система|Bonus system|Sistema de bonificación|Sistema di bonus|Bonus system/,
    giftCodeFaq: /Подарочный код|Gift Code|Código de Regalo|Codice Regalo|Geschenkcode/,
    paymentFaq: /Оплата и получение|Payment and Receipt|Pago y Recepción|Pagamento e Ricezione|Zahlung und Empfang/,
    refSystemFaq: /Реферальная программа|Referral Program|Programa de Referidos|Programma di Riferimento|Empfehlungsprogramm/,
    withdrawalFaq: /Вывод cредств|Withdrawal of Funds|Retiro de Fondos|Prelievo di Fondi|Auszahlung von Geldern/,
    paymentCreater: /Купить|Buy|Comprar|Acquistare|Kaufen/,
    withdrawalCreater: /Вывести|Withdraw|Retirar|Prelevare|Abheben/,
    generateWithdrawalLink: /Сгенерировать ссылку для вывода|Generate a withdrawal link|Generar un enlace de retiro|Generare un link di prelievo|Einen Auszahlungslink generieren/,
}
export const language = {
    ru: {
        "text_main_page": 'Главное меню',
        "text_back": 'Назад',
        "wrong_email": "Неверный Email. Попробуйте еще раз.",
        "enter_email": "Введите почту.",
        "enter_email_payment_text": "Введите почту на которую придет пароль от файла, где указан Ваш Подарочный код.",
        "text_1" : 'Выберите раздел:',
        "text_1_btn": 'Список аккаунтов',
        "text_2_btn": 'Осталось аккаунтов',
        "text_3_btn": 'FAQ',
        "text_4_btn": 'Реферальная система',
        "text_5_btn": 'Оплата и Вывод',
        "text_6_btn": 'Статистика',
        "text_7_btn": 'Зарегистрировать реферальную ссылку',
        "text_8_btn": "Бонусная система",
        "text_9_btn": 'Подарочный код',
        "text_10_btn": 'Оплата и получение',
        "text_11_btn": 'Реферальная программа',
        "text_12_btn": 'Вывод cредств',
        "text_13_btn": 'Купить',
        "text_14_btn": 'Вывести',
        "text_15_btn": 'Сгенерировать ссылку для вывода',
        "text_1_descr": `
\u{02776}. Amazon: 
    $200. Цена \u{0279C} 40 USDT.
    $300. Цена \u{0279C} 65 USDT.
    *Включена бесплатная доставка по Европе и СНГ.
\u{02777}. Ebay: 
    $150.  Цена \u{0279C} 35 USDT.
    $300. Цена \u{0279C} 70 USDT.
    *Включена бесплатная доставка по Европе и СНГ.
\u{02778}. Walmart: 
    $300.  Цена \u{0279C} 60 USDT.
    *Доставка оплачивается отдельно по выбранному товару в зависимости от габаритов.
\u{02779}. Temu: В разработке!
\u{0277A}. Allegro: Скоро пополнение!
        `,
        "text_2_descr": `
\u{02776}. Amazon: 268 аккаунтов.
\u{02777}. Ebay: 68 аккаунтов.
\u{02778}. Walmart: 148 аккаунтов. 
\u{02779}. Temu: 0 аккаунтов. 
\u{0277A}. Allegro: В ожидании. 

Обновлено: ${updatedAccsRu}
        `,
        "text_3_descr_faq": `
Вы в меню FAQ. 
Выберите нужную вам вкладку и узнайте больше информации о том, как пользоваться нашими услугами.
        `,
        "text_3_faq_giftcode": `
Мы занимаемся закупкой Gift Code на других площадках со скидкой 90-95%. 
Все наши Gift Code являются уникальными и актуальными. 
В наличии Gift Code для разных площадок от $75 до $800. 
Актуальную цену для каждой площадки смотрите во вкладке "Список аккаунтов" в главном меню.
        `,
        "text_3_faq_paymentFaq": `
Для оплаты перейдите в меню Оплата/Вывод в главном меню, выберите вкладку Оплата. 
Если Вы новый участник, тогда введите почту. 
После этого Вам придет ссылка на оплату и файл с данными аккаунта выбранной Вами площадки, Gift Code и видеоинструкция, где указано, как активировать Gift Code. 
Если у Вас уже есть аккаунт в выбранной площадке, пользоваться новым не нужно, Вы можете активировать Gift Code в своем аккаунте`,
        "text_3_faq_refSystemFaq": `
Для участия в реферальной системе вам нужно быть активным пользователем. 
Чтобы стать активным пользователем, вам нужно приобрести минимум один Gift Code, чтобы знать всю процедуру и рекомендовать нас своим рефералам. 
Во вкладке Статистика вы сможете отслеживать своих рефералов, а также начисления. 
Вы также автоматически принимаете участие в бонусной системе и сможете получать дополнительное вознаграждение. 

Вознаграждение вы получаете за каждого реферала фиксированную ставку $13 и еще 10% от стоимости Gift Code. 
Для участия в реферальной системе вам нужно зарегистрироваться во вкладке - Зарегистрировать реферальную ссылку.
        `,
        "text_3_faq_withdrawalFaq": `
Для вывода средств с баланса реферальной системы вам нужно перейти во вкладку Оплата/Вывод в главном меню. 
Далее нажмите кнопку Вывод, и у вас сгенерируется ссылка. 
Перейдите по ссылке и вставьте ваш кошелек в соответствующее поле, затем нажмите кнопку - Заказать вывод. 

Вывод осуществляется в течение 6-ти часов на ваш кошелек. 
Сумма вывода - это ваш баланс с рефералов. Комиссия за перевод 4%.
        `,
        "text_4_descr_referrals": `
Реферальная система. Здесь Вы можете зарегистрировать и получить реферальную ссылку для приглашений. 

Каждый реферал, который купил Gift Code, дает Вам $13 + 10% от стоимости Gift Code.

Вывод средств осуществляется в автоматическом режиме в 03:00 по UTC+0. 
Заказывать вывод средств можно в любое удобное для Вас время во вкладке - Вывод средств.

Также Вы можете участвовать в бонусной системе. Подробнее во вкладке - Бонус.
        `,
        "text_statistic": `
Ваш статус - не активно \u{02612}.

Статистика:
Количество куплених Gift Code: 0.
Количество активированных Gift Code: 0.

Статус реферальной системы: не активно.
Количество переходов: 0.
Количество рефералов: 0.
Количество купленых Gift Code: 0.
KPI рефералов: 0%.

Рейтинг в реферальной системе: без рейтинга.
Бонус в реферально системе: 0 USDT.

Выплата реферальных начислений осуществляется во вкладке - Оплата/Вывод в главном меню.
    `,
    "text_bonussystem": `
Ваш статус - не активно \u{02612}.

Для активации и участия в реферальной бонусной системе нужно быть активным пользователем. 
Подробнее во вкладке FAQ в главном меню.
    `,
    "text_regreflink": `
Ваш статус - не активно \u{02612}.

Для активации и участия в реферальной системе нужно быть активным пользователем. 
Подробнее во вкладке FAQ в главном меню.
    `,
    "text_payment_descr_one": `Ваш платеж создан! Перейдите по этой ссылке для оплаты:`,
    "text_payment_descr_two": `После оплаты данные будут отправлены на почту - `,
    "text_payment_descr_three": `Пароль, который придет на почту, используйте чтобы открыть файл. В файле - Логин и пароль от аккаунта, код для активации Подарочного кода, видеоинструкция.`,
    "text_payment_descr_four": `Файл для скачивания будет доступен в течение одной минуты.`,
    "text_buyanaccs": 'Выберите пункт:',
    "text_withdraw_balance": `
Вывод средств осуществляется с баланса реферальной системы. 

Доступно для вывода: 0 USDT.

Более детальная информация во вкладке FAQ.
    `,
    "text_not_amount": "На вашем балансе недостаточно средств.",
    "text_giftcode_buy": "Выберите Подарочный код",
    },
    en : {
        "text_main_page": 'Main menu',
        "text_back": 'Back',
        "wrong_email": "Invalid email. Please try again.",
        "enter_email": "Enter your email.",
        "enter_email_payment_text": "Enter the email address where the password for the file containing your Gift Code will be sent.",
        "text_1" : 'Select section:',
        "text_1_btn": 'List of accounts',
        "text_2_btn": 'Accounts left',
        "text_3_btn": 'FAQ',
        "text_4_btn": 'Referral system',
        "text_5_btn": 'Payment and Withdrawal',
        "text_6_btn": 'Statistics',
        "text_7_btn": 'Register a referral link',
        "text_8_btn": "Bonus system",
        "text_9_btn": 'Gift Code',
        "text_10_btn": 'Payment and Receipt',
        "text_11_btn": 'Referral Program',
        "text_12_btn": 'Withdrawal of Funds',
        "text_13_btn": 'Buy',
        "text_14_btn": 'Withdraw',
        "text_1_descr": `
\u{02776}. Amazon: 
    $200. Price \u{0279C} 40 USDT.
    $300. Price \u{0279C} 65 USDT.
    *Free shipping to Europe and CIS included.
\u{02777}. Ebay: 
    $150.  Price \u{0279C} 35 USDT.
    $300. Price \u{0279C} 70 USDT.
    *Free shipping to Europe and CIS included.
\u{02778}. Walmart: 
    $300.  Price \u{0279C} 60 USDT.
    *Delivery is paid separately for the selected product depending on the dimensions.
\u{02779}. Temu: In development!
\u{0277A}. Allegro: New arrivals coming soon!
        `,
        "text_2_descr": `
\u{02776}. Amazon: 268 accounts.
\u{02777}. Ebay: 68 accounts.
\u{02778}. Walmart: 148 accounts. 
\u{02779}. Temu: 0 accounts. 
\u{0277A}. Allegro: In anticipation.

Обновлено: ${updatedAccsEn}
        `,
    "text_3_descr_faq": "You are in the FAQ menu. Choose the tab you need and learn more about how to use our services.",
    "text_3_faq_giftcode": `
We purchase Gift Codes on other platforms at a discount of 90-95%. 
All our Gift Codes are unique and valid. 
Gift Codes are available for different platforms from $75 to $800. 
Check the current price for each platform in the 'Account List' tab in the main menu.`,
    "text_3_faq_paymentFaq": `
To make a payment, go to the Payment/Withdrawal menu in the main menu, select the Payment tab. If you are a new user, then enter your email. 
After that, you will receive a payment link and a file with account data of the chosen platform, a Gift Code, and a video instruction on how to activate the Gift Code. 
If you already have an account on the chosen platform, you do not need to use a new one, you can activate the Gift Code in your account.`,
    "text_3_faq_refSystemFaq": `
To participate in the referral system, you need to be an active user. 
To become an active user, you need to purchase at least one Gift Code to know the entire procedure and recommend us to your referrals. 
In the Statistics tab, you can track your referrals and accruals. 
You also automatically participate in the bonus system and can receive additional rewards. 

You get a reward of $13 for each referral and 10% of the Gift Code cost. 
To participate in the referral system, you need to register yourself in the Register Referral Link tab.`,
    "text_3_faq_withdrawalFaq": `
To withdraw funds from the referral system balance, go to the Payment/Withdrawal tab in the main menu. 
Then click the Withdrawal button, and a link will be generated for you. 
Follow the link and enter your wallet in the appropriate field, then click the - Request Withdrawal button. 
The withdrawal is made within 6 hours to your wallet. The withdrawal amount is your referral balance. The transfer fee is 4%.`,
    "text_4_descr_referrals": `
Referral system. Here you can register and get a referral link for invitations. 
Each referral who buys a Gift Code gives you $13 + 10% of the Gift Code cost. 
Funds are withdrawn automatically at 03:00 UTC+0. You can request a withdrawal at any convenient time in the Withdrawal tab. 
You can also participate in the bonus system. Learn more in the Bonus tab
    `,
    "text_statistic": `
Your status is inactive \u{02612}. 

Statistics: Number of purchased Gift Codes: 0. 
Number of activated Gift Codes: 0. 
Referral system status: inactive. 
Number of clicks: 0. 
Number of referrals: 0. 
Number of purchased Gift Codes: 0. 
Referral KPI: 0%.

Referral system rating: no rating. 
Bonus in the referral system: 0 USDT. 
Referral accrual payments are made in the Payment/Withdrawal tab in the main menu.`,
    "text_bonussystem": `
Your status is inactive \u{02612}. 
To activate and participate in the referral bonus system, you need to be an active user. 

Learn more in the FAQ tab in the main menu.`,
    "text_regreflink": `
Your status is inactive \u{02612}. To activate and participate in the referral system, you need to be an active user. Learn more in the FAQ tab in the main menu.`, 
    "text_payment_descr_one": `Your payment has been created! Follow this link to complete the payment: `,
    "text_payment_descr_two": `After payment, the data will be sent to your email - `,
    "text_payment_descr_three": `Use the password that will be sent to your email to open the file. The file contains the login and password for the account, the code to activate the Gift Code, and a video instruction.`,
    "text_payment_descr_four": `The file will be available for download within one minute.`,
    "text_buyanaccs": 'Select an option:',
    "text_withdraw_balance": `
Withdrawal of funds is carried out from the referral system balance. 

Available for withdrawal: 0 USDT. 

More detailed information in the FAQ tab.
    `,
    "text_not_amount": "Your balance is insufficient.",
    "text_giftcode_buy": "Select a Gift Code",
    },
    es: {
        "text_main_page": 'Menú principal',
        "text_back": 'Atrás',
        "wrong_email": "Correo electrónico inválido. Inténtalo de nuevo.",
        "enter_email": "Introduce tu correo electrónico.",
        "enter_email_payment_text": "Introduce la dirección de correo electrónico a la que se enviará la contraseña del archivo que contiene tu código de regalo.",
        "text_1" : 'Seleccionar sección:',
        "text_1_btn": 'Lista de cuentas',
        "text_2_btn": 'Cuentas que quedan',
        "text_3_btn": 'Preguntas frecuentes',
        "text_4_btn": 'Sistema de referencia',
        "text_5_btn": 'Pago y Retiro',
        "text_6_btn": 'Estadística',
        "text_7_btn": 'Registrar enlace de referencia',
        "text_8_btn": "Sistema de bonificación",
        "text_9_btn": 'Código de Regalo',
        "text_10_btn": 'Pago y Recepción',
        "text_11_btn": 'Programa de Referidos',
        "text_12_btn": 'Retiro de Fondos',
        "text_13_btn": 'Comprar',
        "text_14_btn": 'Retirar',
        "text_1_descr": `
\u{02776}. Amazon: 
    $200. Precio \u{0279C} 40 USDT.
    $300. Precio \u{0279C} 65 USDT.
    *Se incluye la entrega gratuita en toda Europa y la CEI.
\u{02777}. Ebay: 
    $150.  Precio \u{0279C} 35 USDT.
    $300. Precio \u{0279C} 70 USDT.
    *Se incluye la entrega gratuita en toda Europa y la CEI.
\u{02778}. Walmart: 
    $300.  Precio \u{0279C} 60 USDT.
    *El envío se paga por separado para el producto seleccionado según las dimensiones.
\u{02779}. Temu: ¡En desarrollo!
\u{0277A}. Allegro: ¡Reposición próximamente!
        `,
        "text_2_descr": `
\u{02776}. Amazon: 268 cuentas.
\u{02777}. Ebay: 68 cuentas.
\u{02778}. Walmart: 148 cuentas. 
\u{02779}. Temu: 0 cuentas. 
\u{0277A}. Allegro: Espera. 
        
Обновлено: ${updatedAccsEu}
        `,
        
        "text_3_descr_faq": "Estás en el menú FAQ. Elige la pestaña que necesitas y aprende más sobre cómo usar nuestros servicios.",
        "text_3_faq_giftcode": "Compramos códigos de regalo en otras plataformas con un descuento del 90-95%. Todos nuestros códigos de regalo son únicos y válidos. Los códigos de regalo están disponibles para diferentes plataformas desde $75 hasta $800. Verifica el precio actual para cada plataforma en la pestaña 'Lista de cuentas' en el menú principal.",
        "text_3_faq_paymentFaq": "Para realizar un pago, dirígete al menú Pago/Retiro en el menú principal y selecciona la pestaña Pago. Si eres un usuario nuevo, introduce tu correo electrónico. Después de eso, recibirás un enlace de pago y un archivo con los datos de la cuenta de la plataforma elegida, un código de regalo y un video con instrucciones sobre cómo activar el código de regalo. Si ya tienes una cuenta en la plataforma elegida, no necesitas usar una nueva, puedes activar el código de regalo en tu cuenta.",
        "text_3_faq_refSystemFaq": "Para participar en el sistema de referidos, necesitas ser un usuario activo. Para convertirte en un usuario activo, necesitas comprar al menos un código de regalo para conocer todo el procedimiento y recomendarnos a tus referidos. En la pestaña Estadísticas, puedes rastrear tus referidos y las acumulaciones. También participas automáticamente en el sistema de bonificación y puedes recibir recompensas adicionales. Recibes una recompensa de $13 por cada referido y el 10% del costo del código de regalo. Para participar en el sistema de referidos, necesitas registrarte en la pestaña Registrar enlace de referido.",
        "text_3_faq_withdrawalFaq": "Para retirar fondos del saldo del sistema de referidos, dirígete a la pestaña Pago/Retiro en el menú principal. Luego haz clic en el botón Retiro, y se generará un enlace para ti. Sigue el enlace e introduce tu cartera en el campo correspondiente, luego haz clic en el botón Solicitar retiro. El retiro se realiza dentro de las 6 horas a tu cartera. La cantidad del retiro es tu saldo de referidos. La comisión por transferencia es del 4%.",
        "text_4_descr_referrals": "Sistema de referidos. Aquí puedes registrarte y obtener un enlace de referido para invitaciones. Cada referido que compre un código de regalo te da $13 + el 10% del costo del código de regalo. Los fondos se retiran automáticamente a las 03:00 UTC+0. Puedes solicitar un retiro en cualquier momento conveniente en la pestaña Retiro. También puedes participar en el sistema de bonificación. Aprende más en la pestaña Bonificación.",
        "text_statistic": `
Tu estado es inactivo \u{02612}. 

Estadísticas: Número de códigos de regalo comprados: 0. 
Número de códigos de regalo activados: 0. 
Estado del sistema de referidos: inactivo. 
Número de clics: 0. Número de referidos: 0. 
Número de códigos de regalo comprados: 0. 
KPI de referidos: 0%. 

Clasificación en el sistema de referidos: sin clasificación. 
Bono en el sistema de referidos: 0 USDT. 

Los pagos de acumulaciones de referidos se realizan en la pestaña Pago/Retiro en el menú principal.`,
        "text_bonussystem": `
Tu estado es inactivo \u{02612}. 
Para activar y participar en el sistema de bonificación de referidos, necesitas ser un usuario activo. Aprende más en la pestaña FAQ en el menú principal.`,
        "text_regreflink": `        
Tu estado es inactivo \u{02612}. 
Para activar y participar en el sistema de referidos, necesitas ser un usuario activo. Aprende más en la pestaña FAQ en el menú principal.`,
    "text_payment_descr_one": `¡Su pago ha sido creado! Siga este enlace para completar el pago:`,
    "text_payment_descr_two": `Después del pago, los datos serán enviados a su correo electrónico - `,
    "text_payment_descr_three": `Use la contraseña que se enviará a tu correo electrónico para abrir el archivo. El archivo contiene el nombre de usuario y la contraseña de la cuenta, el código para activar el código de regalo y un video con instrucciones.`,
    "text_payment_descr_four": `El archivo estará disponible para descargar en un minuto.`,
    "text_buyanaccs": 'Seleccione una opción:',  
    "text_withdraw_balance": `
El retiro de fondos se realiza desde el saldo del sistema de referidos. 

Disponible para retiro: 0 USDT. 

Más información detallada en la pestaña FAQ
    `, 
    "text_not_amount": "Tu saldo es insuficiente.",
    "text_giftcode_buy": "Seleccione un Código de Regalo",
    },
    it: {
        "text_main_page": 'Menù principale',
        "text_back": 'Indietro',
        "wrong_email": "Email non valida. Riprova.",
        "enter_email": "Inserisci la tua email.",
        "enter_email_payment_text": "Inserisci l'indirizzo email dove verrà inviata la password per il file contenente il tuo codice regalo.",
        "text_1" : 'Seleziona sezione:',
        "text_1_btn": 'Elenco dei conti',
        "text_2_btn": 'Conti rimasti',
        "text_3_btn": 'Domande frequenti',
        "text_4_btn": 'Sistema di riferimento',
        "text_5_btn": 'Pagamento e Prelievo',
        "text_6_btn": 'Statistiche',
        "text_7_btn": 'Registra il link di riferimento',
        "text_8_btn": "Sistema di bonus",
        "text_9_btn": 'Codice Regalo',
        "text_10_btn": 'Pagamento e Ricezione',
        "text_11_btn": 'Programma di Riferimento',
        "text_12_btn": 'Prelievo di Fondi',
        "text_13_btn": 'Acquistare',
        "text_14_btn": 'Prelevare',
        "text_1_descr": `
\u{02776}. Amazon: 
    $200. Prezzo \u{0279C} 40 USDT.
    $300. Prezzo \u{0279C} 65 USDT.
    *La consegna gratuita in tutta Europa e nella CSI è inclusa.
\u{02777}. Ebay: 
    $150.  Prezzo \u{0279C} 35 USDT.
    $300. Prezzo \u{0279C} 70 USDT.
    *La consegna gratuita in tutta Europa e nella CSI è inclusa.
\u{02778}. Walmart: 
    $300.  Prezzo \u{0279C} 60 USDT.
    *La consegna viene pagata separatamente per il prodotto selezionato a seconda delle dimensioni.
\u{02779}. Temu: In sviluppo!
\u{0277A}. Allegro: Rifornimento in arrivo!
        `,
        "text_2_descr": `
\u{02776}. Amazon: 268 conti.
\u{02777}. Ebay: 68 conti.
\u{02778}. Walmart: 148 conti. 
\u{02779}. Temu: 0 conti. 
\u{0277A}. Allegro: In attesa. 
        
Обновлено: ${updatedAccsEu}
        `,
        "text_3_descr_faq": "Sei nel menu FAQ. Scegli la scheda di cui hai bisogno e scopri di più su come utilizzare i nostri servizi.",
        "text_3_faq_giftcode": "Acquistiamo codici regalo su altre piattaforme con uno sconto del 90-95%. Tutti i nostri codici regalo sono unici e validi. I codici regalo sono disponibili per diverse piattaforme da $75 a $800. Controlla il prezzo corrente per ogni piattaforma nella scheda 'Elenco Account' nel menu principale.",
        "text_3_faq_paymentFaq": "Per effettuare un pagamento, vai al menu Pagamento/Prelievo nel menu principale, seleziona la scheda Pagamento. Se sei un nuovo utente, inserisci la tua email. Dopodiché riceverai un link di pagamento e un file con i dati dell'account della piattaforma scelta, un codice regalo e un video tutorial su come attivare il codice regalo. Se hai già un account sulla piattaforma scelta, non è necessario utilizzarne uno nuovo, puoi attivare il codice regalo nel tuo account.",
        "text_3_faq_refSystemFaq": "Per partecipare al sistema di referral, devi essere un utente attivo. Per diventare un utente attivo, devi acquistare almeno un codice regalo per conoscere l'intera procedura e consigliarci ai tuoi referral. Nella scheda Statistiche, puoi monitorare i tuoi referral e gli accrediti. Partecipi automaticamente anche al sistema di bonus e puoi ricevere premi aggiuntivi. Ottieni una ricompensa di $13 per ogni referral e il 10% del costo del codice regalo. Per partecipare al sistema di referral, devi registrarti nella scheda Registra Link Referral.",
        "text_3_faq_withdrawalFaq": "Per prelevare fondi dal saldo del sistema di referral, vai alla scheda Pagamento/Prelievo nel menu principale. Quindi fai clic sul pulsante Prelievo e verrà generato un link per te. Segui il link e inserisci il tuo portafoglio nel campo appropriato, quindi fai clic sul pulsante - Richiedi Prelievo. Il prelievo viene effettuato entro 6 ore nel tuo portafoglio. L'importo del prelievo è il tuo saldo referral. La commissione di trasferimento è del 4%.",
        "text_4_descr_referrals": "Sistema di referral. Qui puoi registrarti e ottenere un link di referral per inviti. Ogni referral che acquista un codice regalo ti dà $13 + il 10% del costo del codice regalo. I fondi vengono prelevati automaticamente alle 03:00 UTC+0. Puoi richiedere un prelievo in qualsiasi momento nella scheda Prelievo. Puoi anche partecipare al sistema di bonus. Scopri di più nella scheda Bonus.",
        "text_statistic": "Il tuo stato è inattivo \u{02612}. Statistiche: Numero di codici regalo acquistati: 0. Numero di codici regalo attivati: 0. Stato del sistema di referral: inattivo. Numero di clic: 0. Numero di referral: 0. Numero di codici regalo acquistati: 0. KPI dei referral: 0%. Classifica nel sistema di referral: senza classifica. Bonus nel sistema di referral: 0 USDT. I pagamenti degli accrediti referral vengono effettuati nella scheda Pagamento/Prelievo nel menu principale.",
        "text_bonussystem": "Il tuo stato è inattivo \u{02612}. Per attivare e partecipare al sistema di bonus referral, devi essere un utente attivo. Scopri di più nella scheda FAQ nel menu principale.",
        "text_regreflink": "Il tuo stato è inattivo \u{02612}. Per attivare e partecipare al sistema di referral, devi essere un utente attivo. Scopri di più nella scheda FAQ nel menu principale.",
    "text_payment_descr_one": `Il tuo pagamento è stato creato! Segui questo link per completare il pagamento: `,
    "text_payment_descr_two": `Dopo il pagamento, i dati saranno inviati alla tua email - `,
    "text_payment_descr_three": `Usa la password che verrà inviata alla tua email per aprire il file. Il file contiene il login e la password dell'account, il codice per attivare il codice regalo e un'istruzione video.`,
    "text_payment_descr_four": `Il file sarà disponibile per il download entro un minuto.`,
    "text_buyanaccs": `Seleziona un'opzione:`,
    "text_withdraw_balance": `
Il prelievo dei fondi viene effettuato dal saldo del sistema di referral. 

Disponibile per il prelievo: 0 USDT. 

Maggiori informazioni dettagliate nella scheda FAQ.
    `, 
    "text_not_amount": "Il tuo saldo è insufficiente.",
    "text_giftcode_buy": "Seleziona un Codice Regalo",
    },
    ge: {
        "text_main_page": 'Hauptmenü',
        "text_back": 'Zurück',
        "wrong_email": "Ungültige E-Mail. Bitte versuchen Sie es erneut..",
        "enter_email": "Geben Sie Ihre E-Mail-Adresse ein.",
        "enter_email_payment_text": "Geben Sie die E-Mail-Adresse ein, an die das Passwort für die Datei mit Ihrem Geschenkcode gesendet wird.",
        "text_1" : 'Abschnitt auswählen:',
        "text_1_btn": 'Liste der Konten',
        "text_2_btn": 'Konten übrig',
        "text_3_btn": 'Häufig gestellte Fragen',
        "text_4_btn": 'Empfehlungs system',
        "text_5_btn": 'Zahlung und Auszahlung',
        "text_6_btn": 'Statistiken',
        "text_7_btn": 'Empfehlungs link registrieren',
        "text_8_btn": "Bonus system",
        "text_9_btn": 'Geschenkcode',
        "text_10_btn": 'Zahlung und Empfang',
        "text_11_btn": 'Empfehlungsprogramm',
        "text_12_btn": 'Auszahlung von Geldern',
        "text_13_btn": 'Kaufen',
        "text_14_btn": 'Abheben',
        "text_1_descr": `
\u{02776}. Amazon: 
    $200. Preis \u{0279C} 40 USDT.
    $300. Preis \u{0279C} 65 USDT.
    *Kostenlose Lieferung in ganz Europa und in die GUS ist im Preis inbegriffen.
\u{02777}. Ebay: 
    $1250.  Preis \u{0279C} 35 USDT.
    $300. Preis \u{0279C} 70 USDT.
    *Kostenlose Lieferung in ganz Europa und in die GUS ist im Preis inbegriffen.
\u{02778}. Walmart: 
    $300.  Preis \u{0279C} 60 USDT.
    *Die Lieferung erfolgt je nach Größe separat für das ausgewählte Produkt.
\u{02779}. Temu: In Entwicklung!
\u{0277A}. Allegro: Nachschub folgt bald!
        `,
        "text_2_descr": `
\u{02776}. Amazon: 268 Konten.
\u{02777}. Ebay: 68 Konten.
\u{02778}. Walmart: 148 Konten. 
\u{02779}. Temu: 0 Konten. 
\u{0277A}. Allegro: Warten.
        
Обновлено: ${updatedAccsEu}
        `,
        "text_3_descr_faq": "Sie befinden sich im FAQ-Menü. Wählen Sie den benötigten Reiter und erfahren Sie mehr darüber, wie Sie unsere Dienstleistungen nutzen können.",
        "text_3_faq_giftcode": "Wir kaufen Geschenkcodes auf anderen Plattformen mit einem Rabatt von 90-95%. Alle unsere Geschenkcodes sind einzigartig und gültig. Geschenkcodes sind für verschiedene Plattformen von $75 bis $800 erhältlich. Überprüfen Sie den aktuellen Preis für jede Plattform im Reiter 'Kontenliste' im Hauptmenü.",
        "text_3_faq_paymentFaq": "Um eine Zahlung zu tätigen, gehen Sie zum Menü Zahlung/Auszahlung im Hauptmenü und wählen Sie den Reiter Zahlung. Wenn Sie ein neuer Benutzer sind, geben Sie dann Ihre E-Mail-Adresse ein. Danach erhalten Sie einen Zahlungslink und eine Datei mit den Kontodaten der ausgewählten Plattform, einen Geschenkcoder und eine Videoanleitung, wie Sie den Geschenkcoder aktivieren können. Wenn Sie bereits ein Konto auf der ausgewählten Plattform haben, müssen Sie kein neues verwenden, Sie können den Geschenkcoder in Ihrem Konto aktivieren.",
        "text_3_faq_refSystemFaq": "Um am Empfehlungsprogramm teilzunehmen, müssen Sie ein aktiver Benutzer sein. Um ein aktiver Benutzer zu werden, müssen Sie mindestens einen Geschenkcoder kaufen, um den gesamten Ablauf zu kennen und uns Ihren Empfehlungen zu empfehlen. Im Reiter Statistik können Sie Ihre Empfehlungen und Gutschriften verfolgen. Sie nehmen auch automatisch am Bonussystem teil und können zusätzliche Belohnungen erhalten. Sie erhalten eine Belohnung von $13 für jede Empfehlung und 10% der Geschenkcoderkosten. Um am Empfehlungsprogramm teilzunehmen, müssen Sie sich im Reiter Empfehlungslink registrieren registrieren.",
        "text_3_faq_withdrawalFaq": "Um Geld von Ihrem Empfehlungssystem-Guthaben abzuheben, gehen Sie zum Reiter Zahlung/Auszahlung im Hauptmenü. Klicken Sie dann auf die Schaltfläche Auszahlung, und es wird ein Link für Sie generiert. Folgen Sie dem Link und geben Sie Ihre Wallet-Adresse in das entsprechende Feld ein, klicken Sie dann auf die Schaltfläche - Auszahlung anfordern. Die Auszahlung erfolgt innerhalb von 6 Stunden auf Ihre Wallet. Der Auszahlungsbetrag ist Ihr Empfehlungsguthaben. Die Überweisungsgebühr beträgt 4%.",
        "text_4_descr_referrals": "Empfehlungssystem. Hier können Sie sich registrieren und einen Empfehlungslink für Einladungen erhalten. Jede Empfehlung, die einen Geschenkcoder kauft, gibt Ihnen $13 + 10% der Geschenkcoderkosten. Die Gelder werden automatisch um 03:00 UTC+0 abgehoben. Sie können jederzeit eine Auszahlung im Reiter Auszahlung anfordern. Sie können auch am Bonussystem teilnehmen. Erfahren Sie mehr im Reiter Bonus.",
        "text_statistic": "Ihr Status ist inaktiv \u{02612}. Statistiken: Anzahl der gekauften Geschenkcoder: 0. Anzahl der aktivierten Geschenkcoder: 0. Status des Empfehlungssystems: inaktiv. Anzahl der Klicks: 0. Anzahl der Empfehlungen: 0. Anzahl der gekauften Geschenkcoder: 0. KPI der Empfehlungen: 0%. Bewertung im Empfehlungssystem: keine Bewertung. Bonus im Empfehlungssystem: 0 USDT. Die Zahlungen der Empfehlungsvergütungen erfolgen im Reiter Zahlung/Auszahlung im Hauptmenü.",
        "text_bonussystem": "Ihr Status ist inaktiv \u{02612}. Um das Bonusprogramm des Empfehlungssystems zu aktivieren und daran teilzunehmen, müssen Sie ein aktiver Benutzer sein. Erfahren Sie mehr im Reiter FAQ im Hauptmenü.",
        "text_regreflink": "Ihr Status ist inaktiv \u{02612}. Um das Empfehlungssystem zu aktivieren und daran teilzunehmen, müssen Sie ein aktiver Benutzer sein. Erfahren Sie mehr im Reiter FAQ im Hauptmenü.",
        "text_payment_descr_one": `Ihre Zahlung wurde erstellt! Folgen Sie diesem Link, um die Zahlung abzuschließen: `,
        "text_payment_descr_two": `Nach der Zahlung werden die Daten an Ihre E-Mail gesendet - `,
        "text_payment_descr_three": `Verwenden Sie das Passwort, das an Ihre E-Mail gesendet wird, um die Datei zu öffnen. Die Datei enthält den Login und das Passwort für das Konto, den Code zur Aktivierung des Geschenkcodes und eine Videoanleitung.`,
        "text_payment_descr_four": `Die Datei wird innerhalb einer Minute zum Download bereitstehen.`,
        "text_buyanaccs": `Wählen Sie einen Punkt:`,
        "text_withdraw_balance": `
Die Auszahlung von Geldern erfolgt aus dem Guthaben des Empfehlungsprogramms. 

Verfügbar für Auszahlung: 0 USDT. 

Detailliertere Informationen im FAQ-Reiter.
    `, 
    "text_not_amount": "Ihr Guthaben ist unzureichend.",
    "text_giftcode_buy": "Wählen Sie einen Geschenkcode aus",
    },
    icons: {
        ru: 'Русский \u{1F1F7}\u{1F1FA}',
        en: 'Engish \u{1F1FA}\u{1F1F8}',
        es: 'Español \u{1F1EA}\u{1F1F8}',
        it: 'Italiano \u{1F1EE}\u{1F1F9}',
        ge: 'Deutsch \u{1F1E9}\u{1F1EA}',
    }
}


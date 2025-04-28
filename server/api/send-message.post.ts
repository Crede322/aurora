export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const message = `
    Новая заявка:
    Имя: ${body.name}
    Телефон: +38 ${body.phone}
    Сообщение: ${body.message}
  `;

  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken || !chatId) {
    throw new Error('TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не настроены в .env');
  }

  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

  await $fetch(url, {
    method: 'POST',
    body: {
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    },
  });

  return { success: true };
});

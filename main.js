import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6850275077:AAEjSf0JK8zn8ZnIGmKQDUrvVl5qz6zs5Z4'
const webAppUrl = 'https://angular-app-8dc29.web.app'
const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp(
        'Отправить сообщение',
        webAppUrl + `${webAppUrl}/feedback`
      ),
    ])
  )
})

bot.on(message('web_app_data'), async (ctx) => {
  const data = ctx.webAppData.data.json()
  ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()

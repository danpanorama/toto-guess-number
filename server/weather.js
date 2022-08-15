require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const nightmare = require('nightmare')()

const args = process.argv.slice(2)
const url = args[0]
const minPrice = args[1]

checkPrice()

async function checkPrice() {
  try {
    const priceString = await nightmare.goto(url)
                                       .wait("#wob_wc")
                                       .evaluate(function() {
                                        return document.getElementById('wob_tci').src
                                                })
                                       .end()
    // const priceNumber = parseFloat(priceString.replace('%', ''))

        console.log(priceString)

        if(priceString == '//ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png'){
            console.log('yes')
        }else{
            console.log('not rain today')
        }

  } catch (e) {
     console.log('bad val')
    throw e
  }
}


// node weather.js 'https://www.google.com/search?q=%D7%AA%D7%97%D7%96%D7%99%D7%AA&sxsrf=ALeKk03Q1E_ZJA92aK99XQqCXu1mgfWoxQ%3A1617964807409&ei=By9wYKaYGKKB9u8PmY6byA4&oq=%D7%AA%D7%97%D7%96%D7%99%D7%AA&gs_lcp=Cgdnd3Mtd2l6EAMyDAgjECcQnQIQRhCAAjIECCMQJzIKCAAQsQMQgwEQQzIKCAAQsQMQgwEQQzINCAAQsQMQgwEQyQMQQzIFCAAQkgMyBQgAEJIDMggIABCxAxCDATIECAAQQzIICAAQsQMQgwE6BwgAEEcQsAM6BwgAELADEEM6BwgjECcQnQI6AggAUN1YWPVkYOdoaAVwAngBgAGAA4gBhQiSAQcwLjUuMC4xmAEAoAEBqgEHZ3dzLXdpesgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwjmt-rM_PDvAhWigP0HHRnHBukQ4dUDCA0&uact=5'
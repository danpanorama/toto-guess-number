// https://www.zara.com/de/en/
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const nightmare = require('nightmare')()
const args = process.argv.slice(2)
let arr = []
let url = ['de','il','bg','en','nl','hu']
// const url = args[0]
// const minPrice = args[1]




function start(){

for(let i = 0; i < url.length; i++){    
async function checkPrice(i) {
    try {
      const priceString = await nightmare.goto('https://www.zara.com/'+ url[i] +'/en/man-new-in-l711.html?v1=1717453')
                                         .wait("#catalog-category-area")
                                         .evaluate(function() {
                                          return document.querySelectorAll('.price__amount').value
                                                  })
                                         .end()
      // const priceNumber = parseFloat(priceString.replace('%', ''))
  
        console.log(priceString,url[i])
        arr= [...arr,priceString]
        console.log(arr,";;;;;")

  
    } catch (e) {
       console.log('bad val')
      throw e
    }
  }





    checkPrice()
}
  
}





  start()
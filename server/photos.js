// https://www.zara.com/de/en/
// require('dotenv').config()
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const nightmare = require('nightmare')()
const args = process.argv.slice(2)

// let url = "https://www.google.co.il/search?q=dog&sxsrf=AOaemvIAjgEQQpEK3LyEFO6JX2laZ0F7jQ:1635950479695&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjyti5tvzzAhW2hP0HHY1fC_YQ_AUoAXoECAEQAw&biw=2133&bih=1076&dpr=0.9"
// const url = args[0]
// const minPrice = args[1]


async function checkPrice(img) {
 
    img = 'dog'
    let url = "https://www.google.co.il/search?q="+img+"&sxsrf=AOaemvIAjgEQQpEK3LyEFO6JX2laZ0F7jQ:1635950479695&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjyti5tvzzAhW2hP0HHY1fC_YQ_AUoAXoECAEQAw&biw=2133&bih=1076&dpr=0.9"

    try {
      const priceString = await nightmare.goto( url )
                                         .wait("#islrg")
                                         .evaluate(function() {
                                             let arr = []
                                         
                                            console.log('found')
                                           document.querySelectorAll('.rg_i').forEach((e)=>{
                                              console.log(e.target)
                                              arr = [...arr,e]
                                              
                                          })
                                          console.log(arr)
                                          return arr
                                                  })
                                         .end()
      // const priceNumber = parseFloat(priceString.replace('%', ''))
      console.log(priceString)
        
      return priceString
  
    } catch (e) {
       console.log('bad val')
      throw e
    }
  }





    checkPrice()

  


const nightmare = require('nightmare')()
// require('dotenv').config()
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)



  const args = process.argv.slice(2)
const url = 'https://www.pais.co.il/lotto/archive.aspx'
const minPrice = args[1]

// checkPrice()

async function checkPrice(req,res,next) {


  try {

    const priceString = await nightmare.goto(url)
        .wait("#moreRecordsOL")
        .evaluate(function (){
            console.log('here')
            return Array.from(document.querySelectorAll('.loto_info_num.archive')).map(a=> a.firstElementChild.innerText);
        },function (name){
            console.log(name)
            return
        })
        // .end()
        
    console.log(priceString)
    res.json({data:priceString}) 

    req.on('abort', function (err) {
      if (err)
          console.error('aborteddd',error.message);
    
    console.log('problem')
    });
    next()
    
    
  } catch (e) {
   console.log(e)
    next()
  }
}
module.exports.checkPrice = checkPrice;


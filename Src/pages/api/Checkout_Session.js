const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
export default async (req,res) =>{
   const [item,email] = req.body

   console.log(item)
   console.log(email)
}
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
export default async (req,res) =>{
   const {items,email} = req.body
   const transformedItems = items.map((item) => ({
    description : item.description,
    quantity : 1 ,
    price_data:{
        currency : 'usd',
        unit_amount: item.price * 100,
        product_data:{
            name: item.title,
            images:[item.image]
        },
     },
   })) 

   const session = await stripe.checkout.session.create({
    payment_method_types : ['card'], //select payment methods
   shipping_rates:['shr_1MH8rZJW0SEZBNDhOabtNt6U'],
    shipping_address_collections :{
       allowed_countries : ["GH", "GER" , "CA" , "FR" , "US" ,"RUS"]
    },
    line_items : transformedItems, //get a list of items in cart
    success_url : `${process.env.HOST}/success`,
    cancel_url : `${process.env.HOST}/Cart`,
    metadata:{
        email,
        images:JSON.stringify(items.map((item) => item.image)),
    },

   })
   res.status(200).json({id:session.id})

}
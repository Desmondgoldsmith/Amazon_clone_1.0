import {buffer} from 'micro'
import * as admin from 'firebase-admin'

// connect to firebase (backend)
cost serviceAccount = require('../../../permission.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

// connect to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET

export default async (req,res)=>{
    
    if(req.method === 'POST'){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];

        let event;
    //  verify event from stripe
        try{
            event = stripe.webhooks.constructEvent(payload, sig,signinSecret)
        }catch{
            console.log('error',error.message)
            return res.status(400).send(`webhookerror: ${err.message}`)
        }
        // handle checkout session completed events
        if(event.type === 'checkout.session.completed'){

        }
    }
}

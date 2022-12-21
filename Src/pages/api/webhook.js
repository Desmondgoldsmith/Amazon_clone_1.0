import {buffer} from 'micro'
import * as admin from 'firebase-admin'

// connect to firebase (backend)
const serviceAccount = require('../../../permissions.json');
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

// connect to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session) =>{
    // console.log('fufilling order',session)
     return app.firestore().collection('users').doc(session.metadata.collection("orders").doc(session.id).set({
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping /100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp(),

     }).then(()=>{
        consloe.log(`Success: order ${session.id} has been added !`)
     }))
}

export default async (req,res)=>{
    
    if(req.method === 'POST'){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];

        let event;
    //  verify event from stripe
        try{
            event = stripe.webhooks.constructEvent(payload, sig,endpointSecret)
        }catch(err){
            console.log('error',err.message)
            return res.status(400).send(`webhookerror: ${err.message}`)
        }
        // handle checkout session completed events
        if(event.type === 'checkout.session.completed'){
           const session = event.data.object;
        //    fulfill the order
        return fulfillOrder(session).then(() => res.status(200)).catch((err) => res.status(400).send(`webhook error: ${err.message}`))
        }
    }
}


export const config ={
    api:{
        bodyParser: false,
        externalResolver:true,
    }
}
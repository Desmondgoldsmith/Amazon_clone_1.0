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
        
    }
}

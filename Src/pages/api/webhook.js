import {buffer} from 'micro'
import * as admin from 'firebase-admin'

// connect to firebase (backend)
cost serviceAccount = require('../../../permission.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

// connect to stripe
const stripe = require('stripe')

export default async (req,res)=>{
    if(req.method === 'POST'){
    }
}

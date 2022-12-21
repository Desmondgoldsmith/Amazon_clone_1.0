import {buffer} from 'micro'
import * as admin from 'firebase-admin'
cost serviceAccount = require('../../../permission.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app()
export default async (req,res)=>{
    if(req.method === 'POST'){
    }
}

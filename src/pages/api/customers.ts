import type {NextApiRequest, NextApiResponse} from 'next';
import {getAllCustomers} from './controllers/customer.controller'
import { CustomerOutput } from './typeDefs';

export default async function handler(req: NextApiRequest, res: NextApiResponse<CustomerOutput[]>){
    const customers: CustomerOutput[] = await getAllCustomers(req,res);
    console.log(customers);
    
    return res.status(200).send(customers);
}
import { NextApiRequest, NextApiResponse } from "next";
import { DishOutput } from "./typeDefs";
import { createADish, deleteADish, getDishes } from "./controllers/dishes.controller";
interface DishesResponse {
    dishes: DishOutput[];
    status: "success" | "error";
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<DishOutput[]>) {
    const method = req.method;
    switch (method) {
        case 'GET':
            const dishes = await getDishes(req, res);
            console.log(dishes);
            res.status(200).send(dishes);
            break;
        case 'POST':
            const newDish = await createADish(req,res);
            console.log(newDish);
            res.status(200).send(newDish);
            break;
        case 'DELETE':
            const deletedDish = await deleteADish(req,res);
            console.log(deletedDish);
            res.send(newDish)
            break;
        default:
            res.status(405).end("Method not allowed")
            break;
    }
    
}
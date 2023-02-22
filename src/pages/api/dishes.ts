import { NextApiRequest, NextApiResponse } from "next";
import { DishOutput } from "./typeDefs";
import { getDishes } from "./controllers/dishes.controller";
interface DishesResponse {
    dishes: DishOutput[];
    status: "success" | "error";
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<DishOutput[]>) {
    const dishes = await getDishes(req, res);
    console.log(dishes);
    return res.status(200).send(dishes);
}
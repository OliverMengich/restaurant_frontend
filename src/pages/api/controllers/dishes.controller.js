import { getAllDishes, createDish, deleteDish, getDishById, updateDish } from "../services/dishes.services.js";
export const getDishes = async () => {
    try {
        // if(req.query.limit !==undefined){
        //     const dishes = await getAllDishes();
        //     return JSON.parse(JSON.stringify(dishes))
        // }
        const dishes = await getAllDishes();
        return JSON.parse(JSON.stringify(dishes))
    } catch (err) {
        console.log(err);
        return JSON.parse('{"err":"Error Encounter"}')
    }
}
export const createADish =  (async (req, res) => {
    console.log('request body is: ',req.body);
    try {
        const dish = await createDish(req.body);
        return res.json({
            dish,
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({error})
    }
})
export const getADish = async (req, res) => {
    try {
        const dish = await getDishById(req.params.id);
        return res.json({
            dish,
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({error})
    }
}
export const updateADish = async (req, res) => {
    try {
        const dish = await updateDish(req.params.id, req.body);
        return res.json({
            dish,
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({error})
    }
}
export const deleteADish = async (req, res) => {
    try {
        const res = await deleteDish(req.params.id);
        return res.json(res)
    } catch (error) {
        return res.status(500).json({error})
    }
}

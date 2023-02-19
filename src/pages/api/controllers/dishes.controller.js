import { getAllDishes, createDish, deleteDish, getDishById, updateDish } from "../services/dishes.services.js";
export const getDishes = async (req, res) => {
    try {
        if(req.params.limit){
            const dishes = await getAllDishes();
            return res.json({
                dishes,
                status: 'success'
            })
        }
        const dishes = await getAllDishes();
        return res.status(200).json({
            dishes,
            status: 'success'
        })
    } catch (err) {
        res.status(404).json({error: err});
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

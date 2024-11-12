import CastingDetails from "../Model/Casting.js";

export const createCasting = async (req, res, next) => {
    try {
        const {casting_name,casting_weight } = req.body;
        if (!casting_name||!casting_weight) {
            return res.status(422).json({ message: 'Invalid Inputs' });
        }
        const existingCasting = await CastingDetails.findOne({ casting_name });
        if (!existingCasting) {
            const CastingItem = new CastingDetails({
                casting_name,casting_weight      });
            const savedCastingtem = await CastingItem.save();
            console.log(savedCastingtem);
            if (!savedCastingtem) {
                return res.status(500).json({ message: 'Unexpected error occurred' });
            }
            return res.status(201).json({ CastingItem: savedCastingtem });
        }

    }
    catch (error) {
        return next(error);

    }
};
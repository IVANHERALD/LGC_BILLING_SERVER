import CastingDetails from "../Model/Casting.js";

export const createCasting = async (req, res, next) => {
    try {
        const {casting_name,casting_weight,casting_hsn} = req.body;
        if (!casting_name||!casting_weight||!casting_hsn) {
            return res.status(422).json({ message: 'Invalid Inputs' });
        }
        const existingCasting = await CastingDetails.findOne({ casting_name });
        if (!existingCasting) {
            const CastingItem = new CastingDetails({
                casting_name,casting_weight,casting_hsn      });
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
export const fetchCasting = async (req, res, next) => {
    try {
      const casting = await CastingDetails.find();
      res.status(200).json({ casting });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
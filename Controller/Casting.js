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
  export const deleteCasting = async (req, res, next) => {
      const casting = req.params.casting_name; // Extract invoice_no from query parameters
      try {
        if (!casting) {
          return res.status(400).json({ message: ' Casting name is required for deleting the bill.' });
        }
    
        // Find and delete the bill
        const deletedCast = await CastingDetails.findOneAndDelete({ casting_name: casting });
    
        if (!deletedCast) {
          return res.status(404).json({ message: 'Casting not found.' });
        }
    
        return res.status(200).json({ message: 'Casting deleted successfully.', deletedCast });
      } catch (error) {
        console.error('Error deleting Casting:', error);
        return res.status(500).json({ message: 'Internal server error.' });
      }
    };
    
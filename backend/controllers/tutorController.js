import tutorModel from "../models/tutorModel.js";

const changeAvailability = async (req, res) => {
    try {
        const { tutorId } = req.body;

        // Check if tutor exists
        const tutorData = await tutorModel.findById(tutorId);
        if (!tutorData) {
            return res.status(404).json({ success: false, message: "Tutor not found" });
        }

        // Toggle availability
        const updatedTutor = await tutorModel.findByIdAndUpdate(
            tutorId,
            { available: !tutorData.available },
            { new: true } // Return updated document
        );

        res.json({ success: true, message: "Availability Changed", updatedTutor });

    } catch (error) {
        console.error(" Error changing availability:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const tutorList = async (req, res)=> {
    try {
        
        const tutors = await tutorModel.find({}).select(['-password', '-email'])

        res.json({success:true, tutors})

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export { changeAvailability, tutorList };


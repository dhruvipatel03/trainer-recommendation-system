// import tutorModel from "../models/tutorModel";

// const changeAvailability = async (req, res) => {
//     try {
        
//         const {tutorId} = req.body
         
//         const tutorData = await tutorModel.findById(tutorId)
//         await tutorModel.findByIdAndUpdate(tutorId, {available: !tutorData.available})
//         res.json({success:true, message: 'Availability Changed'})

//     } catch (error) {
//         console.log("Error fetching tutors:", error)
//         res.json({ success: false, message: error.message })
//     }
// }


// export {changeAvailability}



// API for adding tutor
const addtutor = async(req, res) => {

    try{

       const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
       const imageFile = req.file 

       console.log({name, email, password, speciality, degree, experience, about, fees, address}, imageFile);
    }
    catch (error) {
 
    }
}

export {addtutor}
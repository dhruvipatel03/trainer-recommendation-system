import jwt from 'jsonwebtoken'
const authTutor = async(req , res , next) =>{
    try {
        const {ttoken} = req.headers
        if(!ttoken)
        {
            return res.json({success:false , message:'Not authorized login agin'})
        }
        const token_decode = jwt.verify(ttoken,process.env.JWT_SECRET)
        req.body.tutorId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}
export default authTutor
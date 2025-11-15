import jwt from 'jsonwebtoken'

//admin authentication middleware
const authAdmin = async(req,res,next)=>{
  try {
    const {atoken} = req.headers;
    if(!atoken){
      return res.json({success:false,message:'Not Authorized Login Again'})
    }
    const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)
    
    if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
      return res.json({success:false,message:'Not Authorized Login Again'})
    }
    next()
    
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
    
  }

}

export default authAdmin



// const authAdmin = async(req,res,next)=>{
//   try {
//     const {atoken} = req.headers
//     if(!atoken){
//       return res.json({success:false, message:'Not Authorized, token missing'})
//     }

//     const decoded = jwt.verify(atoken, process.env.JWT_SECRET)

//     if(decoded.email !== process.env.ADMIN_EMAIL){
//       return res.status(403).json({success:false, message:'Not Authorized'})
//     }

//     next()
    
//   } catch (error) {
//     console.log(error)
//     res.status(401).json({success:false, message:'Token Invalid or Expired'})
//   }
// }

// export default authAdmin



// const authAdmin = async (req, res, next) => {
//   try {
//     const token = req.headers.atoken;  
//     if(!token){
//       return res.status(401).json({success:false, message:'Not Authorized, token missing'});
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

   
//     if(decoded.email !== process.env.ADMIN_EMAIL || decoded.role !== "admin"){
//       return res.status(403).json({success:false, message:'Not Authorized'});
//     }

//     next();

//   } catch (error) {
//     console.log(error);
//     res.status(401).json({success:false, message:'Token Invalid or Expired'});
//   }
// }

// export default authAdmin;

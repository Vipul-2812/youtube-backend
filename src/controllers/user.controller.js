import {asyncHandler} from "../utils/asyncHandler.js"

const userRegister = asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"ok"
    })
})

export {
    userRegister,
};

// import { asyncHandler } from "../utils/asyncHandler.js";


// const registerUser = asyncHandler( async (req, res) => {
//     res.status(500).json({
//         message: "chai aur code"
//     })
// } )


// export {
//     registerUser,
// }




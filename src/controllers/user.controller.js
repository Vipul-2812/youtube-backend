

import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"



const userRegister = asyncHandler(async (req, res) => {
    // data from thunder client
    // data validation- not empty field
    // chech if data user already exist
    // check for image and avatar
    // upload them to cloudnary
    // create user object - entry in db
    // remove password and refresh token from response
    // check for user creation 
    // retuen response
    const { username, email, fullName, password } = req.body;

    // checking empty or not
    if ([username, fullName, password, email].some((field) => field?.trim() === '')) {
        throw new ApiError(400, 'All fields are required')
    }


    // checking already exist or not 
    const existUser = await User.findOne({
        $or: [{ username }, { email }]
    })


    if (existUser) {
        throw new ApiError(409, 'user is already exist')
    }

    // cloudnary url checking for upload
    const avatalLocalPath = req.files?.avatar[0]?.path;

    // const coverImagepath = req.files?.coverImage?.[0]?.path;

    let coverImagepath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImagepath = req.files.coverImage[0].path
    }

    if (!avatalLocalPath) {
        throw new ApiError(400, 'Avatar file is required')
    }

    const avatar = await uploadOnCloudinary(avatalLocalPath)
    const coverImage = await uploadOnCloudinary(coverImagepath)



    // save in db



    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    }) 


    // removing password and token from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )


    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    
   
    // sending response
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )


})

export {
    userRegister
};






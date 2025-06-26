import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

const uploadOnCloudinary = async(filePath)=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    try{
        if(!filePath){
            return null
        }
        const uploadResult = await cloudinary.uploader.upload(filePath)
        if (fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath);
            } catch (err) {
                console.log("Failed to delete file:", err.message);
            }
        }
        return uploadResult.secure_url

    }
    catch(error){
        if (fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath);
            } catch (err) {
                console.log("Failed to delete file in error:", err.message);
            }
        }
        console.log(error);
    }
}

export default uploadOnCloudinary
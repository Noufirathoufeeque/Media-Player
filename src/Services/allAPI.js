import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

//add video called by add

export const addVideoAPI = async (video) =>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}
 //get all videos called by view component
 export const getAllVideoAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
 }
 //remove video called by videocard component
 export const removeVideoAPI = async (videoID)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoID}`,{})
 }
 //save history called by video card component
export const saveHistoryAPI = async (video) =>{
   return await commonAPI("POST",`${SERVER_URL}/history`,video)
}
//get video history called by history component
export const getVideoHistoryAPI = async () =>{
   return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
//remove history called by history component
export const removeHistoryAPI = async (videoID)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/history/${videoID}`,{})
}
//add category called by category component
export const addCategoryAPI = async (categoryDetails) =>{
   return await commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDetails)
}
//get category called by category component
export const getCategoryAPI = async () =>{
   return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
}
//remove category called by category component
export const removeCategoryAPI = async (categoryId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/allCategory/${categoryId}`,{})
}
//get video called by category component
export const getAVideoAPI = async (videoID) =>{
   return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoID}`,"")
}
//update video called by category component
export const updateCategoryAPI = async (categoryId,categoryDetails) =>{
   return await commonAPI("PUT",`${SERVER_URL}/allCategory/${categoryId} `,categoryDetails)
}
//get a category called by category component
export const getSingleCategoryAPI = async (categoryId) =>{
   return await commonAPI("GET",`${SERVER_URL}/allCategory/${categoryId}`,"")
}
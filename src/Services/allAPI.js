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

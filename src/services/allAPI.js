import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"
// //upload video
export const uploadVideo = async(body)=>{
    //call post http request to http://localhost:4000/vedios to add video in json server return response to add component
    return await commonAPI("POST",`${serverURL}/videos`,body)

}
// get all videos
export const getAllVideos = async () =>{
    return  await commonAPI("GET",`${serverURL}/videos`,"")

}
//get single vedio
export const getAVideo=async (id)=>{
   return await commonAPI("GET",`${serverURL}/videos/${id}`,{});
}


// delete a single 
export const deleteAVideo=(id)=>{
    (commonAPI("DELETE",`${serverURL}/videos/${id}`,{}));
}

//store watch history
export const addHistory=async(videoHistory)=>{
    return  await commonAPI('POST', `${serverURL}/history`,videoHistory );
}
export const getHistory=async()=>{
    return  await commonAPI('GET', `${serverURL}/history`,"" );


}

//add category
export const addCategory = async(body)=>{
    return await commonAPI('POST',`${serverURL}/categories`, body);
}
export const getCategory = async()=>{
    return await commonAPI('GET',`${serverURL}/categories`, "");
}
//delete
export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{});
}

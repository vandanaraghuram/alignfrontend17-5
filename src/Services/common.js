import axios from  "axios";
export const commonStructure=async(method,url,body)=>{
    let config={
        method,
        url,
        // headers: header?header:"application/json",
        data:body
    }
    return await axios (config).then(response=>{
        return response
    }).catch(error=>{
        return error
    })
}

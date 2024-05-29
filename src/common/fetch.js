export async function fetchData(endpoint){
    try{
        let response = await fetch(`https://tap-web-1.herokuapp.com/topics${endpoint}`);
        let data = await response.json();
        return data
    }
    catch(error){
        console.log("error",error);
    }
}
const axios = require('axios');
//----------------------------------------------------------------
const getLugarLatLong = async(direccion)=>{
    
    const encodedUrl = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': 'a6318dfa76mshc55ee954867ac74p17b4b0jsnb995545adbcd'}
    });
   /* instance.get()
        .then(res=>console.log(res.data.Results[0]))
        .catch(err=>console.log(err))
    */
    const resp = await instance.get();
    if(resp.data.Results === 0){
        throw new Error('No se encontro nada con el nombre de '+ direccion)
    }
    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat
    const long = data.lon
    return {
        address,
        lat,
        long
    }
}
//---------------------------------------------------------------

module.exports = {
    getLugarLatLong
}
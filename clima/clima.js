const axios = require('axios');
//------------------------------------------------
const getClima = async(lat, long)=>{
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7d8fd8bce7e2c00a132c363541376924&units=metric`);

    return resp.data.main.temp;
}
//------------------------------------------------
module.exports = {
    getClima
}
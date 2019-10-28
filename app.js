const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        descripcion: 'Muestra el clima de una ciudad'
    }
}).argv;

//console.log(argv.direccion)
/*lugar.getLugarLatLong(argv.direccion)
                .then(info=>{
                    console.log(info)
                })*//*
clima.getClima(3.030000, -75.169998)
                .then(console.log)
                .catch(console.log)*/
//------------------------------------------------
const getInfo = async(direccion)=>{

    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.lat, coords.long);
        //console.log(coords)
                
        return `La temperatura en ${coords.address} es: ${temp} grados`;
    } catch (error) {
        return `no se pudo determinar el clima de ${direccion}`
    }



}
getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log)


/*
MI SOLUCION

 lugar.getLugarLatLong(direccion)
            .then( place =>{
                clima.getClima(place.lat, place.long)
                            .then(tem=>{
                                console.log(
                                    `La temperatura en ${place.address} es: ${tem} grados`
                                )                                
                            })
                                           
            } )
            .catch( err=>{throw new Error('no se encontraron matches')} )
*/
     export function latlon() { 
    
        return new Promise(function(resolve, reject) {
            if (global.navigator.geolocation) {
                global.navigator.geolocation.getCurrentPosition(function(position) {
                 resolve({lat: position.coords.latitude, lon: position.coords.longitude})
                })
            } else {
                reject('falhou')
            }
        })
     }
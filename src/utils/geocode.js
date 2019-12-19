const request = require('request')

const geocode = (address, callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiamxlZTM4MiIsImEiOiJjazN6aXRxejYwMXZ1M2RscThrbHZlemRqIn0.RXa4y2yflHu30J9JtdovqQ&limit=1'
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('unable to connect to location services!', undefined)
        }else if(body.features.length===0){
            callback('unable to find location. Try another search', undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
 }
 
 module.exports= geocode
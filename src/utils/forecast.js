const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/d75c3abfb504bbae1734a3bb82a0f13f/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si'
    request({url, json:true}, (error,{body})=>{
        if(error){
            callback('unable to connect weather service', undefined)
        }else if(body.error){
            callback('unable to find coordiates', undefined)
        }else{
            callback(undefined, body.daily.summary+' It is currently '+body.currently.temperature+'degrees out. There is a '+body.currently.precipProbability+'% chances of rain.'+' Highest temperature is '+body.daily.data[0].temperatureMax+'degree and lowest temperature is '+body.daily.data[0].temperatureMin)
        }
    })
}

module.exports = forecast
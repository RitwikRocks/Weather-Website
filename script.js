const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3333562ef7msh8069032a02c156ap129370jsn8156fbbfe8ae',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then(response => {
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed

        console.log(response)

    })
    .catch(err => console.error(err));
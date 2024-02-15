const apiKey = "ad76719e4eb79a9859fcf446d3bb3193";
const longtitude =55.06
const latitude =4.28
const documentText = document.querySelector('.display-weather')

const apiURL = "";

const fetchWeather = async () => {
    try {

        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=2641528&appid=${apiKey}`)

        const data = await response.json();
        //You're missing this step
        //You will need to reformat this as we aren't taking a param
        // phrase = data.find(item => item.id ===id)
        console.log("test")

        let weather = await data.list[0].weather[0].main
        let temp = await data.list[0].main.temp
        console.log(temp)
        return {weather, temp};
        
    } catch (error) {
        //improve error handling capabilities
        throw new Error(`error: `)
    }
};

const kelvinToCelsius = (kel) => {

        
        return Math.round(kel -273.15)
    }

const setWeather = async () =>{

   let { weather, temp } = await fetchWeather();
   temp = kelvinToCelsius(temp);
   documentText.innerHTML = `The current weather in Galloway Forest Park is ${weather}. <br> The current temperature is ${temp}°C.`

}

setWeather();

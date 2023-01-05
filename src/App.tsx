import {useState} from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';

import './App.css';
type ResultsStateType = {
  country:string;
  cityName:string;
  temperture:string;
  conditionText:string;
  icon:string; 
}
function App(){
const [city, setCity] = useState<string>("");
const getWeather = (e:any) => {
    e.preventDefault()
    fetch(`http://api.weatherapi.com/v1/current.json?key=585ba6a19e9a454e85342109222212&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      setResults({
        country:data.location.country,
        cityName:data.location.name,
        temperture:data.current.temp_c,
        conditionText:data.current.condition.text,
        icon:data.current.condition.icon
      })
      console.log(data)
    })
    
};
const [results, setResults] = useState<ResultsStateType>({
  country:"",
  cityName:"",
  temperture:"",
  conditionText:"",
  icon:""
}
);





  return (
    <div className="App">
    <Title />
    <Form setCity={setCity} getWeather={getWeather}/>
    <Results results={results}/>
    </div>
  );
}

export default App;

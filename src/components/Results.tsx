type ResultsStateType = {
results:{
    country:string;
    cityName:string;
    temperture:string;
    conditionText:string;
    icon:string; 
}
}



const Results = (props: ResultsStateType) => { 
    return (
    <div className="weatherBox">

        {props.results.country && 
        <>
        {props.results.country}
        </>
        }<br/>
        {props.results.icon && 
        <>
        <img src={props.results.icon} />
        </>
        }<br/>
        {props.results.cityName && 
        <>
        {props.results.cityName}
        </>
        }<br/>
        {props.results.temperture && 
        <>
        {props.results.temperture}°C
        </>
        }<br/>
        {props.results.conditionText && 
        <>
        {props.results.conditionText}
        </>
        }<br/>

    </div>
    );
 };


export default Results;
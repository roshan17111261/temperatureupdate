import React, { useEffect, useState } from "react";
import "./Css/Style.css";

const Temperature = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c0f7619bf5f3d6fc3fdaeeea8ee07bf8`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={(event) => { setSearch(event.target.value) }}></input>
                </div>

                {!city ? (
                    <p>no data found</p>
                ) : (
                    <>
                        <div className="info">
                            <h2 className="location">
                              {search}
                            </h2>
                            <h1 className="temp">
                                <b>{city.temp}</b>
                            </h1>
                            <h3 className="temmin_min">min: {city.temp_min} </h3>
                            <h3 className="temmin_max">max: {city.temp_max} </h3>
                        </div>

                    </>
                )
                }


                <div className="waveone"></div>

            </div>
        </>
    )
}
export default Temperature;
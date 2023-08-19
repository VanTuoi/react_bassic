// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Weather() {
//     const axios = require('axios');
//     let [temperature, setTemperature] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const options = {
//                 method: 'GET',
//                 url: 'https://meteostat.p.rapidapi.com/stations/hourly',
//                 params: {
//                     station: '10637',
//                     start: '2020-01-01',
//                     end: '2020-01-01',
//                     tz: 'Europe/Berlin'
//                 },
//                 headers: {
//                     'X-RapidAPI-Key': '8063f946b1msha103033241361a6p1d2ceajsn14e484c167da',
//                     'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
//                 }
//             };
//             try {
//                 temperature = await axios.request(options);
//                 console.log(temperature)
//                 setTemperature(temperature.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="App">
//             <h2>Weather App</h2>
//             {/* {temperature ? (
//                 <h3>Nhiệt độ hiện tại: {temperature}</h3>
//             ) : (
//                 <h3>Đang tải...</h3> */}
//             {/* )} */}
//         </div>
//     );
// }

// export default Weather;
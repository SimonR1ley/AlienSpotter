import 'chart.js/auto';
import React from "react";
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from 'axios';

const ComThree = () => {


    const [sighting1950, setSighting1950] = useState("undefined");
    const [sighting1960, setSighting1960] = useState("undefined");
    const [sighting1970, setSighting1970] = useState("undefined");
    const [sighting1980, setSighting1980] = useState("undefined");
    const [sighting1990, setSighting1990] = useState("undefined");
    const [sighting2000, setSighting2000] = useState("undefined");
    const [sighting2010, setSighting2010] = useState("undefined");
    const [sighting2020, setSighting2020] = useState("undefined");
    const [sightings, setSightings] = useState([]);
    const [userInput, setUserInput] = useState(2021);


    // const [yearNum, setYearNum] = useState([]);

    // const yearArray = [];
    // const newYearArray = [];



    // function getUniqueVal(value, index, self) {
    //     return self.indexOf(value) === index;
    // }



    useEffect(() => {

        axios.get('data.json')
            .then((res) => {

                let sightingData = 0;
                let year = 0;
                let sightingData1950 = 0;
                let sightingData1960 = 0;
                let sightingData1970 = 0;
                let sightingData1980 = 0;
                let sightingData1990 = 0;
                let sightingData2000 = 0;
                let sightingData2010 = 0;
                let sightingData2020 = 0;


                for (let i = 0; i < res.data.length; i++) {

                    var dateSnip = new Date(res.data[i].date_time);
                    year = dateSnip.getFullYear();


                    if (year === parseInt(userInput)) {
                        sightingData = sightingData + 1;
                    }

                    if (year === 1950) {
                        sightingData1950 = sightingData1950 + 1;
                    }

                    if (year === 1960) {
                        sightingData1960 = sightingData1960 + 1;
                    }

                    if (year === 1970) {
                        sightingData1970 = sightingData1970 + 1;
                    }

                    if (year === 1980) {
                        sightingData1980 = sightingData1980 + 1;
                    }

                    if (year === 1990) {
                        sightingData1990 = sightingData1990 + 1;
                    }

                    if (year === 2000) {
                        sightingData2000 = sightingData2000 + 1;
                    }

                    if (year === 2010) {
                        sightingData2010 = sightingData2010 + 1;
                    }

                    if (year === 2020) {
                        sightingData2020 = sightingData2020 + 1;
                    }
                }

                setSightings(sightingData);
                setSighting1950(sightingData1950);
                setSighting1960(sightingData1960);
                setSighting1970(sightingData1970);
                setSighting1980(sightingData1980);
                setSighting1990(sightingData1990);
                setSighting2000(sightingData2000);
                setSighting2010(sightingData2010);
                setSighting2020(sightingData2020);







                //     var newArr = yearArray.filter(getUniqueVal);
                //     newYearArray.push(newArr);




                //     for (let i = 0; i < yearArray.length; i++) {
                //         for(let j = 0; j < newArr.length; j++){

                //             if(newArr[j] === yearArray[i]){
                //                 sightingData.push(newArr[j]);
                //                 setSightings(sightingData);

                //             }
                //         } 
                //     }

                // })





                // setYearNum(newYearArray);


                // console.log(sightingData);

            });

    });






    return (
        <div className="container-fluid">

            <div className='pg3-info-con'>
                <h2 className='pg3-info-heading'>About This Page</h2>
                <p className='pg3-info'>This pages has a timeline marking sightngs for the decades from 1950 till 2020. The input allows you to pick and chart a year of your choosing</p>
            </div>

            <div className='graph-pg3-con'>
                <h3 className='graph-heading-pg3'>Sightings from 1950 till 2022:</h3>

                <div className="chartThreePg3">
                    <Line
                        data={{
                            labels: ['1950', '1960', '1970', '1980','1990','2000','2010', '2020', userInput],
                            datasets: [{
                                label: 'Number of Sightings',
                                data: [sighting1950, sighting1960, sighting1970, sighting1980, sighting1990, sighting2000, sighting2010, sighting2020, userInput],
                                backgroundColor: [
                                    '#4DCEEA',
                                    '#FC6161',
                                    '#82E26A',
                                    '#EEE85C'
                                ],
                                borderColor: [
                                    '#4DCEEA',
                                    '#EEE85C',
                                    '#82E26A',
                                    '#FC6161',
                                ],
                                borderWidth: 3
                            },

                            ],
                        }}
                        height={300}
                        width={500}
                        options={{ maintainAspectRatio: false }}
                    />

                </div>

                <div className='input-con'>
                    <h4 className='input-date'>Input Date:</h4>
                    <input className='time-input3' onChange={event => setUserInput(event.target.value)} type='number' />
                </div>
            </div>




        </div>
    );
}

export default ComThree;


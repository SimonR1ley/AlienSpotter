import 'chart.js/auto';
import React from "react";
import {Line} from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from 'axios';

const ComThree = () => {


    const [sighting1950, setSighting1950] = useState("undefined");
    const [sighting1960, setSighting1960] = useState("undefined");
    const [sighting1980, setSighting1980] = useState("undefined");
    const [sightings, setSightings] = useState("undefined");
    const [userInput, setUserInput] = useState("undefined");


    useEffect(() => {

        axios.get('data.json')
            .then((res) => {

                let sightingData = 0;
                let sightingData1950 = 0;
                let sightingData1960 = 0;
                let sightingData1980 = 0;
                // var inputYear = 


                for (let i = 0; i < res.data.length; i++) {

                    var dateSnip = new Date(res.data[i].date_time);
                    var year = dateSnip.getFullYear();

                    // console.log(year);

                    if (year === parseInt(userInput)) {
                        sightingData = sightingData + 1;
                    }

                    if (year === 1950) {
                        sightingData1950 = sightingData1950 + 1;
                    }

                    if (year === 1960) {
                        sightingData1960 = sightingData1960 + 1;
                    }

                    if (year === 1980) {
                        sightingData1980 = sightingData1980 + 1;
                    }
                }

                // console.log(sightingData1950);
                // console.log(userInput);


                setSightings(sightingData);
                setSighting1950(sightingData1950);
                setSighting1960(sightingData1960);
                setSighting1980(sightingData1980);

            })
            

    });



    return (
        <div className="container-fluid componentInterior3 bgimage3">

            <div className='graph-pg3-con'>
                <h3 className='graph-heading-pg3'>Sightings from 1950 till 2022:</h3>

                <div className="chartThreePg3">
                    <Line
                        data={{
                            labels: ['1950', '1960', '1980', userInput],
                            datasets: [{
                                label: 'Number of Sightings',
                                data: [sighting1950, sighting1960, sighting1980, sightings],
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
                        height={400}
                        width={600}
                        options={{ maintainAspectRatio: false, }}
                    />

                </div>

                <div className='input-con'>
                    <h4 className='input-date'>Input Date:</h4>
                    <input className='time-input3' onChange={event => setUserInput(event.target.value)} type='number'/>
                </div>
            </div>

            
            

        </div>
    );
}

export default ComThree;

     
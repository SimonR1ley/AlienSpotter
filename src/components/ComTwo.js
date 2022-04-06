import 'chart.js/auto';
import React from "react";
import { Bar, Pie, PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from "react";
import axios from 'axios';
import $ from 'jquery';
import TableItem from './TableItem';

ChartJS.register(ArcElement, Tooltip, Legend);

const ComTwo = () => {


    const [sightings17, setSightings17] = useState("undefined");
    const [sightings18, setSightings18] = useState("undefined");
    const [sightings19, setSightings19] = useState("undefined");
    const [sightings20, setSightings20] = useState("undefined");
    const [sightings21, setSightings21] = useState("undefined");
    const [sightings22, setSightings22] = useState("undefined");


    const [triangle, setTriangle] = useState("");
    const [fireball, setFireball] = useState("");
    const [sphere, setSphere] = useState("");
    const [light, setLight] = useState("");

    const [showJoke, setShowJoke] = useState('none');
    const [hideButton, setHideButton] = useState('block');

    const [sightings, setSightings] = useState("undefined");
    const [userInput, setUserInput] = useState(1950);






    useEffect(() => {

        axios.get('data.json')
            .then((res) => {



                // Dates 
                let sightingData17 = 0;
                let sightingData18 = 0;
                let sightingData19 = 0;
                let sightingData20 = 0;
                let sightingData21 = 0;
                let sightingData22 = 0;

                for (let i = 0; i < res.data.length; i++) {

                    var dateSnip = new Date(res.data[i].date_time);
                    var year = dateSnip.getFullYear();

                    // console.log(year);
                    if (year === 2022) {
                        sightingData22 = sightingData22 + 1;
                    }

                    if (year === 2020) {
                        sightingData20 = sightingData20 + 1;
                    }

                    if (year === 2021) {
                        sightingData21 = sightingData21 + 1;
                    }

                    if (year === 2019) {
                        sightingData19 = sightingData19 + 1;
                    }

                    if (year === 2018) {
                        sightingData18 = sightingData18 + 1;
                    }

                    if (year === 2017) {
                        sightingData17 = sightingData17 + 1;
                    }




                }
                setSightings17(sightingData17);
                setSightings18(sightingData18);
                setSightings19(sightingData19);
                setSightings20(sightingData20);
                setSightings21(sightingData21);
                setSightings22(sightingData22);




                // Shapes 
                let triangleData = 0;
                let fireballData = 0;
                let sphereData = 0;
                let lightData = 0;


                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].shape === "Triangle") {
                        triangleData = triangleData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Fireball") {
                        fireballData = fireballData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Sphere") {
                        sphereData = sphereData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Light") {
                        lightData = lightData + 1;
                        // console.log(triangle.length);
                    }
                }


                setSphere(sphereData);
                setFireball(fireballData);
                setTriangle(triangleData);
                setLight(lightData);




                const sightingList = [];
                const listSightings = [];

                for (let i = 0; i < res.data.length; i++) {

                    var dateSnip = new Date(res.data[i].date_time);
                    var year = dateSnip.getFullYear();

                    sightingList.push({
                        summary: res.data[i].text,
                        id: year,
                    });


                    if (sightingList[i].id === parseInt(userInput)) {
                        listSightings.push(sightingList[i].summary)
                    //   console.log("bingo");  
                    }

                }

                // console.log(sightingList);

                
                const listItems = listSightings.map((item) => item);
                setSightings(listItems);

                // let startItem = sightings.map();
                // setShowMissions(startItem);
            


                // let startItem = listSightings.map((item) => <TableItem dets={item}  />)


            })

    });



    var hide = '';
    var showInfo;

    function updateJoke() {
        hide = 'none';
        showInfo = 'block'
        setShowJoke(showInfo)
        setHideButton(hide)
    }




    return (
        <div className="container-fluid bgimage2">


            <div className='about-graphs'>
                <h3 className='about-pg2'>Information</h3>
            </div>

            <div className='joke-con'>
                <div className='page2-text'>
                    <h3 className='joke'>How do you get clean in outer space?</h3>
                    <h3 className='answer' onClick={updateJoke} style={{ display: showJoke }}>You take a meteor shower</h3>
                    <div className='joke-button' onClick={updateJoke} style={{ display: hideButton }}>???</div>
                </div>
                <div className='inner-img'>
                </div>
            </div>


            <div className='graphs-top'>

                <h3 className='graph1-heading'>Most Seen UFO Shapes:</h3>
                <h3 className='graph2-heading'>Sightings in the last 5 years:</h3>
                <h3 className='graph3-heading'>Sightings in the last 6 years:</h3>


                <div className='row graphs-topCon'>
                    <div className="exCon chart chartOne">
                        <PolarArea
                            data={{
                                labels: ['Triangle', 'Fireball', 'Sphere', 'Light'],
                                datasets: [{
                                    label: '# of Sightings',
                                    data: [triangle, fireball, sphere, light],
                                    backgroundColor: [
                                        '#F06497',
                                        '#F5908B',
                                        '#00B5DB',
                                        '#FDC381',
                                        // 'rgba(153, 102, 255, 0.2)',
                                        // 'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        // 'rgba(153, 102, 255, 1)',
                                        // 'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                },

                                ],
                            }}
                            height={200}
                            width={300}
                            options={{
                                maintainAspectRatio: false, scales: {
                                    x: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    },
                                    y: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    }
                                }
                            }
                            }
                        />

                    </div>

                    <div className="exCon chart chartTwo">
                        <Pie
                            data={{
                                labels: ['2022', '2021', '2020', '2019', '2018'],
                                datasets: [{
                                    label: '# of Sightings',
                                    data: [sightings22, sightings21, sightings20, sightings19, sightings18],
                                    backgroundColor: [
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                },

                                ],
                            }}
                            height={300}
                            width={400}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    y: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    }
                                }
                            }
                            }
                        />

                    </div>

                    <div className="exCon chart chartThree">
                        <Bar
                            data={{
                                labels: ['2022', '2021', '2020', '2019', '2018', '2017'],
                                datasets: [{
                                    label: '# of Sightings',
                                    data: [sightings22, sightings21, sightings20, sightings19, sightings18, sightings17],
                                    backgroundColor: [
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                },

                                ],
                            }}
                            height={300}
                            width={700}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    y: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    }
                                }
                            }
                            }
                        />

                    </div>



                </div>
            </div>


            <div className='card-con'>
        <h2 className='sighting-dets'>Sighting Details:</h2>
        <div className='input-conPg2'>
        <input className='time-input' onChange={event => setUserInput(event.target.value)} type='number'/>
        </div>
        <div className='card-info'>
            <h4 className='card-heading'>Year: {userInput}</h4>
            <p className='sighting-sum'>{sightings}</p>
        </div>
    </div>



        </div>


    );
}

export default ComTwo;




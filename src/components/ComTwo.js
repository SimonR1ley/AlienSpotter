import 'chart.js/auto';
import React from "react";
import { Bar, Pie, Radar } from 'react-chartjs-2';
import { useEffect, useRef, useState } from "react";
import axios from 'axios';

const ComTwo = () => {


    const [sightings, setSightings] = useState("undefined");
    const [triangle, setTriangle] = useState("");
    const [fireball, setFireball] = useState("");
    const [sphere, setSphere] = useState("");
    const [light, setLight] = useState("");



    useEffect(() => {

        axios.get('data.json')
            .then((res) => {

                // Dates 
                var dateSnip = res.data[1].stats;
                dateSnip = dateSnip.slice(19, 21);
                console.log(dateSnip);


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
                

                let sightings = res.data.length;

                setSightings(sightings);

                // console.log(year);

            })

    });



    return (
        <div className="container-fluid componentInterior bgimage2">

            <div className='row'>
                <h3 className='graph1-heading'>Most Seen UFO Shapes:</h3>

                <div className="exCon chart">
                    <Pie
                        data={{
                            labels: ['Triangle', 'Fireball', 'Sphere', 'Light'],
                            datasets: [{
                                label: '# of Sightings',
                                data: [triangle, fireball, sphere, light],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    // 'rgba(153, 102, 255, 0.2)',
                                    // 'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    // 'rgba(75, 192, 192, 1)',
                                    // 'rgba(153, 102, 255, 1)',
                                    // 'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            },

                            ],
                        }}
                        height={500}
                        width={600}
                        options={{ maintainAspectRatio: false, }}
                    />

                </div>

            </div>

            <div className='row'>
                <h3 className='graph1-heading'>Sightings in the last 5 years:</h3>

                <div className="exCon chart">
                    <Bar
                        data={{
                            labels: ['2020', '2019', '2018', '2017', '2016', '2015'],
                            datasets: [{
                                label: '# of Sightings',
                                data: [25, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
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
                        height={400}
                        width={600}
                        options={{ maintainAspectRatio: false, }}
                    />

                </div>

            </div>




            <div className='row'>
                <h3 className='graph1-heading'>Sightings in the last 5 years:</h3>

                <div className="exCon chart">
                    <Radar
                        data={{
                            labels: ['2020', '2019', '2018', '2017', '2016', '2015'],
                            datasets: [{
                                label: '# of Sightings',
                                data: [25, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
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
                        height={400}
                        width={600}
                        options={{ maintainAspectRatio: false, }}
                    />

                </div>

            </div>

        </div>
    );
}

export default ComTwo;




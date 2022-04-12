import 'chart.js/auto';
import React from "react";
import { Bar, Pie, PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from "react";
import axios from 'axios';
// import $ from 'jquery';
import TableItem from './TableItem';

ChartJS.register(ArcElement, Tooltip, Legend);

const ComTwo = () => {





    const [sightings13, setSightings13] = useState("undefined");
    const [sightings14, setSightings14] = useState("undefined");
    const [sightings15, setSightings15] = useState("undefined");
    const [sightings16, setSightings16] = useState("undefined");
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
    const [formation, setFormation] = useState("");
    const [circle, setCircle] = useState("");
    const [disk, setDisk] = useState("");
    const [other, setOther] = useState("");
    const [unknown, setUnknown] = useState("");

    const [showJoke, setShowJoke] = useState('none');
    const [hideButton, setHideButton] = useState('block');

    const [sightings, setSightings] = useState("");
    const [sightingsStart, setSightingsStart] = useState("");
    const [userInput, setUserInput] = useState(1950);

    const [inputSightings, setInputSightings] = useState('');

    const [hideInst, setHideInst] = useState('block');


    const [ufos, setUfos] = useState("Loading Data");

    const [percentageOne, setPercentageOne] = useState(0);
    const [percentageTwo, setPercentageTwo] = useState(0);
    const [percentageThree, setPercentageThree] = useState(0);
    const [percentageFour, setPercentageFour] = useState(0);
    const [percentageFive, setPercentageFive] = useState(0);
    const [percentageSix, setPercentageSix] = useState(0);
    const [percentageSeven, setPercentageSeven] = useState(0);
    const [percentageEight, setPercentageEight] = useState(0);
    const [percentageNine, setPercentageNine] = useState(0);




    useEffect(() => {

        axios.get('data.json')
            .then((res) => {


                let ufos = res.data.length;
                setUfos(ufos);


                // Dates
                let sightingData13 = 0;
                let sightingData14 = 0;
                let sightingData15 = 0;
                let sightingData16 = 0; 
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

                    if (year === 2016) {
                        sightingData16 = sightingData16 + 1;
                    }

                    if (year === 2015) {
                        sightingData15 = sightingData15 + 1;
                    }

                    if (year === 2014) {
                        sightingData14 = sightingData14 + 1;
                    }

                    if (year === 2013) {
                        sightingData13 = sightingData13 + 1;
                    }

                    




                }
                setSightings13(sightingData13);
                setSightings14(sightingData14);
                setSightings15(sightingData15);
                setSightings16(sightingData16);
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
                let formationtData = 0;
                let circleData = 0;
                let diskData = 0;
                let otherData = 0;
                let unknownData = 0;


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

                    if (res.data[i].shape === "Formation") {
                        formationtData = formationtData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Circle") {
                        circleData = circleData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Disk") {
                        diskData = diskData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Other") {
                        otherData = otherData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Unknown") {
                        unknownData = unknownData + 1;
                        // console.log(triangle.length);
                    }

                }


                setSphere(sphereData);
                setFireball(fireballData);
                setTriangle(triangleData);
                setLight(lightData);
                setFormation(formationtData);
                setCircle(circleData);
                setDisk(diskData);
                setOther(otherData);
                setUnknown(unknownData);






                // console.log(persOneDisplay);







                const sightingList = [];
                const startSightings = [];


                for (let i = 0; i < res.data.length; i++) {

                    var dateSnip = new Date(res.data[i].date_time);
                    var year = dateSnip.getFullYear();

                    sightingList.push({
                        summary: res.data[i].text,
                        id: year,
                    });

                }


                setSightings(sightingList);
            })



        let persOne = triangle / ufos * 100;
        let persOneDisplay = Math.round(persOne)

        setPercentageOne(persOneDisplay);


        let persTwo = fireball / ufos * 100;
        let persTwoDisplay = Math.round(persTwo)

        setPercentageTwo(persTwoDisplay);

        let persThree = sphere / ufos * 100;
        let persThreeDisplay = Math.round(persThree)

        setPercentageThree(persThreeDisplay);

        let persFour = light / ufos * 100;
        let persFourDisplay = Math.round(persFour)

        setPercentageFour(persFourDisplay);

        let persFive = formation / ufos * 100;
        let persFiveDisplay = Math.round(persFive)

        setPercentageFive(persFiveDisplay);

        let persSix = circle / ufos * 100;
        let persSixDisplay = Math.round(persSix)

        setPercentageSix(persSixDisplay);

        let persSeven = disk / ufos * 100;
        let persSevenDisplay = Math.round(persSeven)

        setPercentageSeven(persSevenDisplay);

        let persEight = other / ufos * 100;
        let persEightDisplay = Math.round(persEight)

        setPercentageEight(persEightDisplay);

        let persNine = unknown / ufos * 100;
        let persNineDisplay = Math.round(persNine)

        setPercentageNine(persNineDisplay);

    });








    var hide = '';
    var showInfo;

    function updateJoke() {
        hide = 'none';
        showInfo = 'block'
        setShowJoke(showInfo)
        setHideButton(hide)
    }


    function updateSightings() {

        // console.log(parseInt(userInput));

        let startItems = sightings.filter((item) => item.id === parseInt(userInput));
        let mapItems = startItems.map((item) => <TableItem id={item.id} sum={item.summary} />)

        setSightingsStart(mapItems);

        console.log(inputSightings);

    }


    var hideVar = '';

    function hideInstructions() {
        hideVar = 'none';
        setHideInst(hideVar)
    }



    return (
        <div className="container-fluid">


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



                <div className="exCon chart chartOne">
                    <Bar
                        data={{
                            labels: ['Triangle', 'Fireball', 'Sphere', 'Light', "Formation", "Circle", "Disk", "Other", "Unknown"],
                            datasets: [{
                                label: '# of Sightings',
                                data: [triangle, fireball, sphere, light, formation, circle, disk, other, unknown],
                                backgroundColor: [
                                    '#FC6161',
                                    '#4DCEEA',
                                    '#EEE85C',
                                    '#82E26A',
                                    '#E15CF6',
                                    '#F6945C'
                                ],
                                borderColor: [
                                    '#FC6161',
                                    '#4DCEEA',
                                    '#EEE85C',
                                    '#82E26A',
                                    '#E15CF6',
                                    '#F6945C'
                                ],
                                borderWidth: 1
                            },

                            ],
                        }}
                        height={400}
                        width={700}
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

                        <h4 className='perc-heading'>Percentage of UFO shapes seen:</h4>

                <div className='perc-rowOne'>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageOne}%</h2>
                        <p className='perc-name'>Triangle</p>
                    </div>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageTwo}%</h2>
                        <p className='perc-name'>Fireball</p>
                    </div>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageThree}%</h2>
                        <p className='perc-name'>Sphere</p>
                    </div>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageFour}%</h2>
                        <p className='perc-name'>Light</p>
                    </div>

                </div>     

                    <div className='perc-rowTwo'>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageFive}%</h2>
                        <p className='perc-name'>Formation</p>
                    </div>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageSix}%</h2>
                        <p className='perc-name'>Circle</p>
                    </div>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageSeven}%</h2>
                        <p className='perc-name'>Disk</p>
                    </div>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageEight}%</h2>
                        <p className='perc-name'>Other</p>
                    </div>

                    <div className='perc'>
                        <h2 className='shape-perc'>{percentageNine}%</h2>
                        <p className='perc-name'>Unkown</p>
                    </div>

                </div>     




                </div>

                <div className='graphs-top'>

                    <h3 className='graph2-heading'>Sightings in the last 5 years:</h3>

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
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
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

                </div>


                <div className='graphs-top'>

                    <h3 className='graph3-heading'>Sightings in the last 10 years:</h3>

                    <div className="chartThree">
                        <PolarArea
                            data={{
                                labels: ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013'],
                                datasets: [{
                                    label: '# of Sightings',
                                    data: [sightings22, sightings21, sightings20, sightings19, sightings18, sightings17, sightings16, sightings15, sightings14, sightings13],
                                    backgroundColor: [
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
                                    ],
                                    borderColor: [
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
                                    ],
                                    borderWidth: 1
                                },

                                ],
                            }}
                            height={400}
                            width={800}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    y: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    },
                                    x: {
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


                <div className='card-con'>
                    <h2 className='sighting-dets'>Sighting Details:</h2>
                    <div className='input-conPg2'>
                        <input className='time-input' onChange={event => setUserInput(event.target.value)} type='number' />
                        <button className='date-update' onClick={() => { updateSightings(); hideInstructions(); }}>Search</button>
                        <div className='list-no-sightings'>Number of sightings: {inputSightings}</div>
                    </div>
                    {sightingsStart}

                    {/* <div className='instructions'></div> */}

                    <div className='instructions' style={{ display: hideInst }}><h3>TYPE IN A YEAR YOU WANT TO READ ABOUT</h3></div>

                </div>



            </div>


            );
}

            export default ComTwo;




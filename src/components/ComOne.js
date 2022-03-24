import axios from "axios";
import { useEffect, useState } from "react";




const ComOne = () => {

    const [ufos, setUfos] = useState("Loading Data");
    const [story, setStory] = useState("Click The Button To Load A Sightings Details");


    useEffect(() => {

        axios.get('data.json')
            .then((res) => {
                let ufos = res.data.length;
                setUfos(ufos);
            })
    });

    const getStory = () => {

        let urlEnd = 'data.json';

        axios.get(urlEnd)
            .then((response) => {
                //console.log(response.data);

                let randomNumber = Math.trunc(Math.random() * 30) + 1;
                console.log(randomNumber);
                let story = response.data[randomNumber].text;
                setStory(story);
            })
    }



    return (
        <div className='container-fluid'>
            <div className="row">
                <div className='col-12 bgimage'>
                    <h1 className='col-12 welcome-heading'>Welcome To Alien Spotter</h1>
                    <p className='col-6 page-info'>Here you'll get 2020-2021 information on sightings of unidetified flying objects across the globe.</p>
                    <h2 className="data-info">Over {ufos} Sightings</h2>
                    <div className="story-container">
                        <h4 className="story-heading">Random Sighting Details</h4>
                        <p className="story">{story}</p>
                    </div>
                    <div className="random-button">
                        <button onClick={getStory} className="btn btn-primary">Random Details</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ComOne;

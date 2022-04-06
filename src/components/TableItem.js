import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

const TableItem = (props) => {


   

    return (
        <div className='card-con'>
        <h2 className='sighting-dets'>Sighting Details:</h2>
        <div className='input-conPg2'>
        <input className='time-input'  type='number'/>
        </div>
        <div className='card-info'>
            <h4 className='card-heading'>Year:</h4>
            <p className='sighting-sum'></p>
        </div>
    </div>
    );
};

export default TableItem;

import React from 'react';

const TableItem = (props) => {



    return (
        <div className='card-info' key={props.id}>
            <h4 className='card-heading'>Year: {props.id}</h4>
            <p className='sighting-sum'>{props.sum}</p>
        </div>
    );
};

export default TableItem;

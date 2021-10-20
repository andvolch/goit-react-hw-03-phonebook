import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({value, change}) => {
    return (
        <div className={s.container}>
        <h3>Finde contacts by name</h3>
            <label>
                <input type="text" value={value} onChange={change} />
            </label>
        </div>
    )
    
};


Filter.propTypes = {
   value: PropTypes.string,
   change: PropTypes.func.isRequired,
   

};

export default Filter;

import React from 'react';
import PropTypes from 'prop-types';
import filteredStyles from './Filter.module.css';

const Filter = ({ filter, inputHandler}) => {
    return (
        <>
        <div className={filteredStyles['filter-container']}>
            <label className={filteredStyles['filter__label']} htmlFor='filter'>
                Find contacts by name
            </label>
            <input className={filteredStyles['filter__input']}
            type='text'
            name='filter'
            value={filter}
            placeholder='filter'
            onChange={inputHandler}
            />
        </div>
        </>
    )
}
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    inputHandler: PropTypes.func.isRequired,
};
export default Filter;
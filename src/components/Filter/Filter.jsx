import { nanoid } from "nanoid";
import React from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import {  setFilter } from '../../redux/filterSlice';
import { getFilterValue } from "../../redux/selectors";

export const Filter = () => {
  const filterValue= useSelector(getFilterValue);
  const dispatch= useDispatch();
  const filterID = nanoid();
  return <>
    <label htmlFor={filterID}>Find contac by name
      <input
        type="text"
        value={filterValue}
        name="filter"
        onChange={(e)=>dispatch(setFilter(e.target.value))}
        id={filterID}
      />
    </label>
  </>
};

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
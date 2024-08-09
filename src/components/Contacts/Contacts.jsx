import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, setFilteredContacs } from "../../redux/selectors";
import { deleteContactThunk,fetchContactsThunk } from "../../redux/operations";

export  const Contacts=() => {

 const isLoading=useSelector(getIsLoading);
 
 const dispatch=useDispatch();
  const handleDelete = id => dispatch(deleteContactThunk(id));
  
  const filterContacts = useSelector(setFilteredContacs);

 useEffect(()=>{
  dispatch(fetchContactsThunk())},[dispatch]);

 return <>
     <ul>
         {isLoading ? (<div>Is Loading...</div>):( filterContacts.map(({ name, id, phone,}) => {
              return <li key={id}>{name}: {phone}
                <button  type="button" onClick={()=>
                  handleDelete(id)
                }>Delete</button>
                </li>}))}
      </ul>
    </>
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
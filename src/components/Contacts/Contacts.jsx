import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilterValue, getIsLoading } from "../../redux/selectors";
import { deleteContact,fetchContacts } from "../../redux/operations";

export  const Contacts=() => {
 const filter= useSelector(getFilterValue);
 const contacts=useSelector(getContacts)
 const isLoading=useSelector(getIsLoading);
 
  const dispatch=useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  
  const filterContacts = contacts && Array.isArray(contacts)?contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase())):[];

 useEffect(()=>{dispatch(fetchContacts())},[dispatch]);

 return <>
        <ul>
          {filterContacts.map(({ name, id, phone,}) => {
              return <li key={id}>{name}: {phone}
                <button key={id} type="button" onClick={()=>handleDelete(id)}> delete</button>
                </li>
            })}
      </ul>
    </>
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
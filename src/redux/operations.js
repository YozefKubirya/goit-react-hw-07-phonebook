import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL='https://66b501299f9169621ea52add.mockapi.io/contacts';

export const fetchContactsThunk = createAsyncThunk(
   "contacts/fetchAll",
   async (_, thunkAPI) => {
     try {
       const response = await axios.get("/contacts");
       return response.data;
     } catch (e) {
       return thunkAPI.rejectWithValue(e.message);
     }
   }
 );

 export const deleteContactThunk = createAsyncThunk('contacts/deleteContact',
  async (id, thunkAPI)=>{
try {
 const {data}= await axios.delete(`/contacts/${id}`);
 return data.id;
} catch (error) {
 return thunkAPI.rejectWithValue(error.message);
}
})

 export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact,thunkAPI)=>{
try {
   const response = await axios.post('/contacts',{...contact})
   return response.data;
} catch (error) {
   return thunkAPI.rejectWithValue(error.message);
}
 });

  
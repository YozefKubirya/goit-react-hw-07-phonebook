import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, fetchContactsThunk,deleteContactThunk } from "./operations";


const contactsInitialState= {
    items: [],
    isLoading: false,
    error: null

}
  const handlePending=(state)=>{
state.isLoading=true
  }   ;
const handleRejected =(state,{payload})=>
{
   state.isLoading=false;
   state.error=payload
}
 export const contactSlice=createSlice({
   name:'contacts',
   initialState:contactsInitialState,
   extraReducers:builder=>{
      builder
     .addCase(fetchContactsThunk.pending,handlePending)
      .addCase(fetchContactsThunk.fulfilled,(state,{payload})=>{
         state.isLoading=false;
         state.items=payload;
         state.error=null
      })
      .addCase(fetchContactsThunk.rejected,handleRejected)
       .addCase(deleteContactThunk.pending,handlePending)
         .addCase(deleteContactThunk.fulfilled,(state,{payload})=>{
      state.isLoading=false;
      state.items=state.items.filter(contact => contact.id !== payload);
      state.error=null;
         })
         .addCase(deleteContactThunk.rejected,handleRejected)
         .addCase(addContactThunk.pending,handlePending)
         .addCase(addContactThunk.fulfilled,(state,{payload})=>{
      state.isLoading=false;
      state.items.push(payload); 
      state.error=null; })
         .addCase(addContactThunk.rejected,handleRejected)
       
      }})      

 export const { deleteContact, addContact } = contactSlice.actions;
export const contactReducer=contactSlice.reducer;

// export const contactSlice= createSlice(
//    {
//       name:'contacts',
//       initialState:contactsInitialState,
//       reducers:{
//          addContact(state,action){
// state.contacts.push(action.payload)
//          },
//          deleteContact(state,action){
// state.contacts=state.contacts.filter(contact=> contact.id !== action.payload)}
//    }
// });
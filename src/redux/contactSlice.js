import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts,deleteContact } from "./operations";

const contactsInitialState= {
   contacts:{
    items: [],
    isLoading: false,
    error: null
}
}
           
 export const contactSlice=createSlice({
   name:'contacts',
   initialState:contactsInitialState,
   extraReducers:builder=>{
      builder
     .addCase(fetchContacts.pending,(state)=>{state.isLoading=true;})
      .addCase(fetchContacts.fulfilled,(state,{payload})=>{
         state.isLoading=false;
         state.items=payload;
         state.error=null
      })
      .addCase(fetchContacts.rejected,(state,{payload})=>{
         state.isLoading=false;
         state.error=payload
      })
      .addCase(addContact.pending,(state)=>{
         state.isLoading=true;
      })
      .addCase(addContact.fulfilled,(state,{payload})=>{
   state.isLoading=false;
   state.items.push(payload); 
   state.error=null; })
      .addCase(addContact.rejected,(state,{payload})=>{
   state.isLoading=false;
   state.error=payload; })
       .addCase(deleteContact.pending,(state)=>{
      state.isLoading=true;
         })
         .addCase(deleteContact.fulfilled,(state,{payload})=>{
      state.isLoading=false;
      state.items=state.items.filter(contact=> contact.id !== payload);
  
      state.error=null;
         })
         .addCase(deleteContact.rejected,(state,{payload})=>{
            state.isLoading=false;
            state.error=payload;
         })
   },

   }
 )        


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
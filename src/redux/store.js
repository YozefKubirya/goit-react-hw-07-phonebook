import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { contactReducer,} from "./contactSlice";


export const store = configureStore({
      reducer:{
      contacts:contactReducer,
      filter:filterReducer
},

// middleware: getDefaultMiddleware =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       })
})

// export const persistor = persistStore(store);
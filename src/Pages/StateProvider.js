import React, { useReducer, createContext, useContext } from "react";


//Preapare data layer
export const Context = createContext();



//Provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (

    <Context.Provider value={useReducer(reducer, initialState)}>

        {children}

    </Context.Provider>
)


//pull information from data layer
export const useStateValue = () => useContext(Context)
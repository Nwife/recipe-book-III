import { createContext, useReducer } from "react"; //creates a new context object

export const ThemeContext = createContext(); //returns an object ThemeContext from createContext Hook

//<ThemeContext.Provider></ThemeContext.Provider>//the provider component that wraps any part of our component tree and provide it wit the valueof the context

const themeReducer = (state, action) => {
    switch (action.type){  //checks the type property of the action object sent from the dispatch function
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}; //returns(spreads) the prev state properties and overwrites the color property value of the payload gotten from the dispatchfunction
        case 'CHANGE_MODE':
            return {...state, mode: action.payload}
        default: 
            return state;
    }
}

export function ThemeProvider({ children }) { //Now remember, the children prop represents any children components that this component might wrap in the future so that then we can render those children inside this component template.
    const [state, dispatch] = useReducer(themeReducer, { //themeReducer is the name of our reducer function, the second value is the intial value of our useareducer hook which is an object
        color: '#58249c',
        mode: 'light'
    })

    const changeColor = (color) => { 
        dispatch({ type: 'CHANGE_COLOR', payload: color })   //The dispatch function is a way that we can dispatch a state change to the reducer function(themeReducer) that we made
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode }) //the dispatch function returns an action object that is used in the theme reducer
    }

    return(
        //the ThemeContext Provider tag wraps around the whole app components which wraps all the components and give them access to the state and changeColor function values
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}


/**
 * a reducer is a function and is a way of working with states
 * a reducer makes it easier & possible to work with multiple bits of related states that can be updated in different ways
 * helps with multiple state changes at once
 * a reducer function,is a single function that encapsulates all the logic.
 */
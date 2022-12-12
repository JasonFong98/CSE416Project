import { createContext, useState } from 'react'
import apis from '../api/api';

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType={
    SET_STATE_MAP: "SET_STATE_MAP"
}

function GlobalStoreContextProvider(props){
    const[store, setStore] = useState({
        geoJson: "Enacted Plan"
    });

    const storeReducer = (action) => {
        const { type, payload } = action;
        switch(type){
            case GlobalStoreActionType.SET_STATE_MAP: {
                return setStore({
                    geoJson: payload,
                })
            }

            default:
                return store;
        }
    }

    store.setStateMap = function(map){
        storeReducer({
            type: GlobalStoreActionType.SET_STATE_MAP,
            payload: map
        });
        
    }

    return (
        <GlobalStoreContext.Provider value={{store}}>
            {props.children}
        </GlobalStoreContext.Provider>
    );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };
import { createContext, useState } from 'react'
import apis from '../api/api';

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType={
    SET_STATE_MAP: "SET_STATE_MAP",
    SET_MMD_PLAN: "SET_MMD_PLAN"
}

function GlobalStoreContextProvider(props){
    const[store, setStore] = useState({
        geoJson: "Enacted Plan",
        mmd1: "",
        mmd2: ""
    });

    const storeReducer = (action) => {
        const { type, payload } = action;
        switch(type){
            case GlobalStoreActionType.SET_STATE_MAP: {
                return setStore({
                    geoJson: payload,
                    mmd1: store.mmd1,
                    mmd2: store.mmd2
                });
            }

            case GlobalStoreActionType.SET_MMD_PLAN:{
                return setStore({
                    geoJson: store.geoJson,
                    mmd1: payload.mmd1,
                    mmd2: payload.mmd2
                });
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

    store.setMMDPlan = function(one, two){
        storeReducer({
            type: GlobalStoreActionType.SET_MMD_PLAN,
            payload: {mmd1:one, mmd2:two}
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
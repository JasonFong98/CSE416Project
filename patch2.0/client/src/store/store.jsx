import { createContext, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import apis from '../api/api';

export const GlobalStoreContext = createContext({});

function GlobalStoreContextProvider(props){
    const[store, setStore] = useState({
        geoJson: null
    });

    const history = useHistory();

    const storeReducer = (action) => {
        const { type, payload } = action;
        switch(type){
            case GlobalStoreActionType.CHANGE_MAP_SMD: {

            }

            default:
                return store;
        }
    }

    

    return (
        <GlobalStoreContext.Provider value={{
            store
        }}>
            {props.children}
        </GlobalStoreContext.Provider>
    );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };
import React, {useEffect, useState} from 'react';
import BoxAndWhiskers from "../graphs/boxAndWhiskers";
import api from '../../api/api';

function BoxAndWhiskersData(state) {
    const stateDict =  {"Ohio": "OH", "Florida": "FL", "North Carolina": "NC"}
    const [data, setData] = React.useState({ "Asian": [0,1,2,3,4]});
    React.useEffect(() => {
      api.getBoxWhisker(stateDict[state.state]).then((res) => {
        const boxWhiskerData=res.data.ensemble.boxAndWhiskers[0]
        setData({
          "Asian": [boxWhiskerData.min, boxWhiskerData.firstQ, boxWhiskerData.median, boxWhiskerData.thirdQ, boxWhiskerData.max]
        });
      });
    }, []);
  
    return ( <BoxAndWhiskers data={data}/> );
}

export default BoxAndWhiskersData;
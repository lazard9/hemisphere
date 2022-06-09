import React from "react";

const hemisphereConfig = {
    northen: {
        text: "Northen hemisphere some text"
    },
    southern: {
        text: "Southern hemisphere some text"
    }
}

const HemisphereDisplay = ({ latitude, longitude }) => {  
    
    const hemisphere = latitude > 0 ? 'northen' : 'southern';
    const { text } = hemisphereConfig[hemisphere];

    return(
        <div className={hemisphere}>
            { text }
            <br/>
            { latitude }
            <br/>
            { longitude }
        </div>
    )
};

export default HemisphereDisplay;

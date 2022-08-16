import React from "react";
import {Text} from 'react-native';


/**Fact Link
 * 
 * -state: none
 * -props: 
 * -path (str)
 * -apiCall (func)
 * -updateWidget (func)
 * 
 * RandomRactLinks -> FactLink
 * 
 */
const FactLink = ({ path, apiCall, updateWidget }) => {
    const baseURL = 'http://numbersapi.com/';

    async function handlePress(){
        const response = await apiCall(baseURL + path);
        const fact = response.data;
        updateWidget(fact, path);
    }
    
    return (
        <>
            <Text onPress={handlePress}>{path}</Text>
        </>
    )
}

export default FactLink;
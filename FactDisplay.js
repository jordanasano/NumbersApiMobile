import React from "react";
import { Text } from "react-native";

/** Fact Display
 * 
 * state: 
 * props: 
 * -widgetFact (str)
 * -addFact (func)
 * -displayPath (str)
 * WidgetContainer-> RandomFactLinks FactDisplay
 */

 const FactDisplay = ({ widgetFact, addFact, displayPath }) => {
    return (
        <>
            <Text>numbersapi.com/{displayPath}</Text>
            <Text>{widgetFact}</Text>
        </>
    )
}

export default FactDisplay;
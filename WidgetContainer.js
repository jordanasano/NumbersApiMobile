import React from "react";
import { Text } from "react-native";
import FactForm from "./FactForm";

/** Widget Container
 * 
 * state: 
 * props: 
 * isSubmitting (boolean)
 * widgetFact (str)
 * displayPath (str)
 * apiCall (func)
 * updateWidget (func)
 * addFact (func)
 * handleSubmitClick (func)
 * 
 * FactContainer -> WidgetContainer-> RandomFactLinks FactDisplay
 */

import FactDisplay from "./FactDisplay";
import RandomFactLinks from "./RandomFactLinks";

const WidgetContainer = ({ widgetFact, displayPath, apiCall, updateWidget, isSubmitting, handleSubmitClick }) => {
    
    return (
        <>
            <RandomFactLinks apiCall={apiCall} updateWidget={updateWidget} />
            {isSubmitting
                ?
                <>
                    <FactForm />
                </>
                :
                <>
                    <FactDisplay widgetFact={widgetFact} displayPath={displayPath} />
                    <Text onPress={handleSubmitClick}>Submit a fact!</Text>
                </>
            }

        </>
    )
}

export default WidgetContainer;
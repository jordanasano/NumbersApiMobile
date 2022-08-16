import React from "react";

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
 * 
 * FactContainer -> WidgetContainer-> RandomFactLinks FactDisplay
 */

import FactDisplay from "./FactDisplay";
import RandomFactLinks from "./RandomFactLinks";

 const WidgetContainer = ({widgetFact, displayPath, apiCall, updateWidget}) => {
    return (
        <>
            <RandomFactLinks apiCall={apiCall} updateWidget={updateWidget}/>
            <FactDisplay widgetFact={widgetFact} displayPath={displayPath} />
        </>
    )
}

export default WidgetContainer;
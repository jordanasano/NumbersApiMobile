import React from "react";

/** Widget Container
 * 
 * state: 
 * props: 
 * isSubmitting (boolean)
 * widgetFact (str)
 * displayPath (str)
 * randomAPICall (func)
 * addFact (func)
 * 
 * FactContainer -> WidgetContainer-> RandomFactLinks FactDisplay
 */

import FactDisplay from "./FactDisplay";
import RandomFactLinks from "./RandomFactLinks";

 const WidgetContainer = ({widgetFact, displayPath}) => {
    return (
        <>
            <RandomFactLinks />
            <FactDisplay widgetFact={widgetFact} displayPath={displayPath} />
        </>
    )
}

export default WidgetContainer;
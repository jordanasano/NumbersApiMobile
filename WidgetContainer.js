import React from "react";

/** Widget Container
 * 
 * state: 
 * props: 
 * isSubmitting (boolean)
 * fact (str)
 * displayPath (str)
 * randomAPICall (func)
 * addFact (func)
 * 
 * FactContainer -> WidgetContainer-> RandomFactLinks FactDisplay
 */

import FactDisplay from "./FactDisplay";
import RandomFactLinks from "./RandomFactLinks";

 const WidgetContainer = () => {
    return (
        <>
            <RandomFactLinks />
            <FactDisplay />
        </>
    )
}

export default WidgetContainer;
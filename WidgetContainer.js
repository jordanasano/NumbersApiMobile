import React from "react";
import { StyleSheet, View } from "react-native";

// FactForm not finished, for further study
// import FactForm from "./FactForm";

/** Widget Container
 * 
 * state: none
 * props: 
 * widgetFact (str)
 * displayPath (str)
 * apiCall (func)
 * updateWidget (func)
 * 
 * FactContainer -> WidgetContainer-> RandomFactLinks FactDisplay
 */

import FactDisplay from "./FactDisplay";
import RandomFactLinks from "./RandomFactLinks";

const WidgetContainer = ({ widgetFact, displayPath, apiCall, updateWidget }) => {

    return (
        <View>
            <RandomFactLinks
                apiCall={apiCall}
                updateWidget={updateWidget} />
            <FactDisplay
                widgetFact={widgetFact}
                displayPath={displayPath}
                updateWidget={updateWidget}
                apiCall={apiCall} />
            {/* <Text onPress={handleSubmitClick}>Submit a fact!</Text>      */}
        </View>
    )
}
const styles = StyleSheet.create({
    randomFactLinks: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
    }
});
export default WidgetContainer;
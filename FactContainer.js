import ExampleContainer from "./ExampleContainer";
import WidgetContainer from "./WidgetContainer";
import Socials from "./Socials";
import React, { useState } from "react";
import axios from "axios";
import { Text } from "react-native";

/** Fact Container
 * 
 * state: 
 * -widgetFact (str)
 * -isSubmitting (function)
 * -subtitle (str)
 * -displayPath (str)
 * props: 
 *
 * App-> Fact Container -> WidgetContainer, Socials, ExampleContainer
 */
const FactContainer = () => {
    const [widgetFact, setWidgetFact] = useState('Default fact');
    const [displayPath, setDisplayPath] = useState('5');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function apiCall(endpoint) {
        return await axios.get(endpoint);
    }

    function updateWidget(fact, path) {
        setWidgetFact(fact);
        setDisplayPath(path);
    }

    function handleSubmitClick() {
        setIsSubmitting(s => !s);
    }

    return (
        <>
            <WidgetContainer 
                apiCall={apiCall} 
                updateWidget={updateWidget} 
                widgetFact={widgetFact} 
                displayPath={displayPath} 
                isSubmitting={isSubmitting}
                handleSubmitClick={handleSubmitClick} />
            <Socials />
            <ExampleContainer 
                apiCall={apiCall} 
                updateWidget={updateWidget} />
        </>
    )
}

export default FactContainer;
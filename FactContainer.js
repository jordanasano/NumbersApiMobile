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
    const [widgetFact, setWidgetFact] = useState(
        '5 is the holy number of Discordianism, ' +
        'as dictated by the Law of Fives.');
    const [displayPath, setDisplayPath] = useState('5');

    // State for implementing submitting a new fact
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function apiCall(endpoint) {
        return await axios.get(endpoint);
    }

    function updateWidget(fact, path) {
        setWidgetFact(fact);
        setDisplayPath(path);
    }

    // Function for implementing button for submitting a new fact
    function handleSubmitClick() {
        setIsSubmitting(s => !s);
    }

    return (
        <>
            <ExampleContainer 
                apiCall={apiCall} 
                updateWidget={updateWidget} />
            <WidgetContainer 
                apiCall={apiCall} 
                updateWidget={updateWidget} 
                widgetFact={widgetFact} 
                displayPath={displayPath} 
                isSubmitting={isSubmitting}
                handleSubmitClick={handleSubmitClick} />
            <Socials />
        </>
    )
}

export default FactContainer;
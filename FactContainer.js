import ExampleContainer from "./ExampleContainer";
import WidgetContainer from "./WidgetContainer";
import Socials from "./Socials";
import React from "react";

/** Fact Container
 * 
 * state: 
 * -fact
 * -isSubmitting
 * -subtitle
 * -displayPath
 * props: 
 *
 * App-> Fact Container -> WidgetContainer, Socials, ExampleContainer
 */
 const FactContainer = () => {
    return (
        <>
            <WidgetContainer />
            <Socials />
            <ExampleContainer />
        </>
    )
}

export default FactContainer;
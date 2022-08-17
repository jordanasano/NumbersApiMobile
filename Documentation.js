import React from "react";
import { useWindowDimensions, ActivityIndicator } from "react-native";
import MarkdownIt from "markdown-it";
import RenderHtml from 'react-native-render-html';
import documentation from "./apiDocumentation";

/** Documentation
 * 
 * state: 
 * props: 
 *
 * App-> Documentation
 */

 const Documentation = () => {
    const { width } = useWindowDimensions();
    const md = new MarkdownIt(); 
    const html = md.render(documentation);
    const source = {html}
    return (
        <RenderHtml
            contentWidth={width}
            source={source}
        />
    )
}

export default Documentation;
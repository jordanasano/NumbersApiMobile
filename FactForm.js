import axios from "axios";
import React, {useState} from "react";
import { TextInput, Text, Alert } from "react-native";
import styles from "./App";

/**Fact Form
 * 
 * -state: 
 * -factData (obj)
 * 
 * -props: 
 * -submitFact
 * 
 * WidgetContainer -> FactForm
 */

const FactForm = ({ submitFact, handleSubmitClick }) => {
    const [fact, setFact] = useState("");
    async function submitFact() {
        try {
            const url = 'http://numbersapi.com/submit'
            // Our post request isn't going through. data might not be formatted right
            await axios.post(url, {data:{"fact":fact}});
        } catch {
            Alert.alert(`Don't know how to open this URL:`);
        }
        handleSubmitClick();
    }
    return (
        <>
            <Text>Type in a number and a fact!</Text>
            <TextInput
                style={styles.input}
                onChangeText={setFact}
                value={fact}
            />
            <Text onPress={submitFact}>Submit your fact!</Text>
        </>
    )
} 

export default FactForm;
import React, {useCallback} from "react";
import { Image, Linking, Button, Alert } from "react-native";

/** Social Link
 * 
 * state: none
 * props: 
 * -img url
 * -social media url
 * 
 * Socials -> SocialLink
 */


const SocialLink = ({ socialUrl, children }) => {
    const handlePress = useCallback(async () => {
        try{
            // Opening the link with some app, if the URL scheme is 
            // "http" the web link should be opened by some browser in the 
            // mobile
            await Linking.openURL(socialUrl);
        } catch {
            Alert.alert(`Don't know how to open this URL: ${socialUrl}`);
        }
    }, [socialUrl]);

    return <Button title={children} onPress={handlePress} />;
};
export default SocialLink;
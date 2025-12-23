import { StyleSheet, Text, FlatList, Appearance } from "react-native";
import { Colors } from '../constants/Colors';


const menuItems = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme,colorScheme);

    

}
export default menuItems;

function createStyles(theme,colorScheme) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
            padding: 16,
        },
        item: {
            backgroundColor: theme.card,
            padding: 20,
            marginVertical: 8,
            borderRadius: 10,
        },
        name: {
            fontSize: 18,
            color: theme.text,
            fontWeight: 'bold',
        },
        price: {
            fontSize: 16,
            color: theme.text,

            marginTop: 4,
        },
    });
}   
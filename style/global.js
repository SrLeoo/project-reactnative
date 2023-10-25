import { StyleSheet } from 'react-native';
import { } from 'expo'
const global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0F10',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    color: {
        principal: { color: '#A04B5A' },
        cinza: { color: '#BBBBBB' },
    },

    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 400,
        height: 300
    }
});

export default global
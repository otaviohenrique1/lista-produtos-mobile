import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    areaTitulo: {
        backgroundColor: "#00ccff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 40,
        color: 'black',
        lineHeight: 60,
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    areaBotaoFlutuante:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    botaoFlutuante: {
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#1e90ff',
        backgroundColor: '#1e90ff',
        padding: 1,
        bottom: 30,
        right: 30,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    listaVaziaArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listaVaziaTexto: {
        fontSize: 40,
        color: 'black',
    },
    listaArea: {
        flex: 1,
    },
});
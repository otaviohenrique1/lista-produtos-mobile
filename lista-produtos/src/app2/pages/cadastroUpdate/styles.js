import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    areaTitulo: {
        alignItems: "center",
        justifyContent: "center",
    },
    areaHeader: {
        backgroundColor: "#00ccff",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    botaoVoltar: {
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        fontSize: 40,
        color: 'black',
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        lineHeight: 60,
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    areaFormulario: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    areaCampos: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingLeft: 20,
        justifyContent: "center",
    },
    campos: {
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        fontSize: 30,
        marginBottom: 20,
        padding: 10,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
    },
    areaBotao: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 20,
    },
    botao: {
        width: 140,
        height: 140,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: '#87cefa',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#87cefa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoTexto: {
        fontSize: 30,
        fontWeight: '500'
    },
    erroTexto: {
        fontSize: 20,
    },
});
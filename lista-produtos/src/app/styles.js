import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    separatorHorizontal: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth + 2,
    },
    separatorVertical: {
        marginVertical: 1,
        borderLeftColor: '#737373',
        borderLeftWidth: StyleSheet.hairlineWidth + 2,
    },
    itemTitulo: {
        fontSize: 25,
    },
    itemAreaTitulo: {
        flexDirection: "column",
        justifyContent: "center",
    },
    item: {
        backgroundColor: '#afcecf',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    areaBotaoItem1: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    areaBotaoItem2: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 5,
    },
    botaoItem: {
        width: 35,
        height: 35,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaTitulo: {
        alignItems: "center",
        justifyContent: "center",
    },
    areaHeader: {
        backgroundColor: "#00ccff",
        flexDirection: "row",
        justifyContent: "flex-start",
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
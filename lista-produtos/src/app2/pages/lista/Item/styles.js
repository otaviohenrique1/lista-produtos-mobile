import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        paddingLeft: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    areaBotao1: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    areaBotao2: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 5,
    },
    botao: {
        width: 35,
        height: 35,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
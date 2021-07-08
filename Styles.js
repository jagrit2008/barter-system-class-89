import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDFFE0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    view: {
        flex: 1,
        backgroundColor: '#DDFFE0',
        //alignItems: 'center',
        //justifyContent: 'center',
        padding: 10
    },
    HomeImage: {
        width: 220,
        height: 156,
        resizeMode: 'contain'

    },
    detailText:{
        margin:5,
        fontSize:16,
    },

    HomeHeading: {
        // fontFamily: ' Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 30,
        textAlign: 'center',
        color: '#FFAA00',
        //width: 100
        marginBottom:20
    },
    ModalText: {
        // fontFamily: ' Roboto',
        margin:20,
        fontStyle: 'normal',
        fontWeight:'200',
        fontSize: 18,
        textAlign: 'justify',
        color: '#FFAA00',
        // width:100
    },
    Modal: {
        alignSelf: 'center',
        backgroundColor: '#ffffffda',
        borderColor: '#fff',
        borderRadius: 20,
        padding: 20
    },
    TextInput: {
        width: 200,
        // height:100,
        borderWidth: 2,
        borderColor: "#2F2E41",
        borderStyle: "solid",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1
    },
    textInput: {
        height: 40,
        paddingLeft: 6,
        width: 200,
        fontSize: 30
    },
    button: {
        "width": 203,
        "height": 39,
        "borderWidth": 2,
        margin: 5,
        marginTop: 10,
        "borderColor": "#FFAA00",
        "borderStyle": "solid",
        "boxSizing": "border-box",
        "borderTopLeftRadius": 20,
        "borderTopRightRadius": 20,
        "borderBottomRightRadius": 20,
        "borderBottomLeftRadius": 20,
        alignItems: 'center'
    },
    buttonText: {
       // "width": 81,
        "height": 39,
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": 20,
        "lineHeight": 23,
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        "color": "#FFAA00"
    }
})
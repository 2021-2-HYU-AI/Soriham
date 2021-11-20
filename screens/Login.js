import React from "react";
import { 
    View,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions,
    Image,
    TextInput,
    Button,
    TouchableOpacity
    } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Login = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.logoView}>
                <Image source={require('../assets/NUGU.png')} />
            </View>
            <TextInput 
                style={styles.textInput}
                placeholder={"아이디"}
            />
            <TextInput 
                style={styles.textInput}
                placeholder={"비밀번호"}
            />
            <TouchableOpacity style={styles.outterButtonView}>
                <View style={styles.innerButtonView}>
                    <Text style={styles.buttonText}>로그인</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.lowerView}>
                <TouchableOpacity>
                    <Text style={styles.lowerText}>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.lowerText}>아이디 / 비밀번호 재설정</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoView: {
        marginTop: 180,
        marginHorizontal: 35,
        marginBottom: 50,
        alignItems: 'center',
    },
    textInput: {
        marginTop: 10,
        marginHorizontal: 56,
        borderWidth: 1,
        borderRadius:10,
        borderColor: "#C4C4C4",
        paddingHorizontal: 16,
        paddingVertical: 5,
    },
    outterButtonView : {
        marginHorizontal: 56,
        marginTop: 55,
        marginBottom: 10,
    },
    innerButtonView :{
        backgroundColor: "#009DFD",
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText : {
        color: "white",
    },
    lowerView : {
        marginVertical: 25,
        marginHorizontal: 80,
        alignItems: 'center',
    },
    lowerText : {
        color: "#555555",
        textDecorationLine: 'underline',
        marginVertical: 5,
    },
    header: {
        paddingHorizontal: 10,
        height: 65,
        justifyContent: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    headerText: {
        fontSize: 24,
        alignItems: "flex-start",
    },
    body: {

    },
    nav: {
        justifyContent: "center",
        width: SCREEN_WIDTH,
        height: 100,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    navText: {
        fontSize: 15,
    },
    btn: {

    },
});

export default Login;

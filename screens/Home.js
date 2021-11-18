import React from "react";
import { 
    View,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions,
    } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome</Text>
            </View>
            
            <View style={styles.body}>
                <View style={styles.nav}>
                    <Text style={styles.navText}>Message</Text>
                </View>
                <View style={styles.nav}>
                    <Text style={styles.navText}>Setting</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 10,
        width: SCREEN_WIDTH,
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

export default Home;

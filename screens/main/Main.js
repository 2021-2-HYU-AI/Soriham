import React from "react";
import { AntDesign } from '@expo/vector-icons'; 
import { 
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView
    } from "react-native";

const Main = ({navigation: {goBack}, navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>윤석님, 환영합니다.</Text>
            </View>

            <View style={styles.menuListWrapper}>
                <View style={styles.menuWrapper}>
                    <View style={styles.menuTextWrapper}>
                        <Text style={styles.menuTitle}>메시지 보내기</Text>
                        <Text style={styles.menuText}>텍스트로 보유하신 스피커에 메시지를 남길 수 있습니다.</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                        <AntDesign name="right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.menuWrapper}>
                    <View style={styles.menuTextWrapper}>
                        <Text style={styles.menuTitle}>보이스 설정</Text>
                        <Text style={styles.menuText}>스피커에서 메시지를 출력 시 사용할 보이스를 설정할 수 있습니다.</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('VoiceSetting')}>
                        <AntDesign name="right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "500",
    },
    menuListWrapper: {
        flex: 10,
    },
    menuWrapper: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 20,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
    menuTextWrapper: {

    },
    menuTitle: {
        fontSize: 15,
    },
    menuText: {
        fontSize: 11,
        color: "gray",
    },
});

export default Main;

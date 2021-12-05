import React from "react";
import { AntDesign } from '@expo/vector-icons'; 
import { useState, useEffect } from "react";
import { 
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView
    } from "react-native";

const VoiceSetting = ({navigation: {goBack}, navigation}) => {
    const[sex, setSex] = useState("male");

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>보이스 설정</Text>
            </View>

            <View style={styles.menuListWrapper}>
                <View style={styles.menuWrapper}>
                    <View style={styles.menuTextWrapper}>
                        <Text style={styles.menuTitle}>성별</Text>
                        <Text style={styles.menuText}>회원정보에 맞춰 기본 보이스가 설정됩니다.{"\n"}변경은 언제나 가능합니다.</Text>
                    </View>
                    <TouchableOpacity>
                        {sex == "male" ? <Text style={styles.settingText}>남성</Text> :
                        <Text style={styles.settingText}>여성</Text>}
                    </TouchableOpacity>
                </View>
                <View style={styles.menuWrapper}>
                    <View style={styles.menuTextWrapper}>
                        <Text style={styles.menuTitle}>세부설정</Text>
                        <Text style={styles.menuText}>기본 보이스가 아닌 다른 TTS로 보이스가 설정 가능합니다.</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('VoiceSettingDetail')}>
                        <AntDesign name="right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={styles.menuWrapper}>
                        <View style={styles.menuTextWrapper}>
                            <Text style={styles.menuTitle}>사용자 목소리 맞춤</Text>
                            <Text style={styles.menuText}>음성으로 메시지를 남길 때마다 스피커가 사용자의 목소리를 학습합니다.</Text>
                        </View>
                        <TouchableOpacity>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                    </View> 
                </TouchableOpacity>
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
        marginLeft: 5,
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
    settingText: {
        fontSize: 14,
        fontWeight: "600",
        color: "skyblue",
        paddingRight: 5,
    },
});

export default VoiceSetting;

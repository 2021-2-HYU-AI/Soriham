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

const VoiceSettingDetail = ({navigation: {goBack}}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>세부 설정</Text>
            </View>

            <View style={styles.menuListWrapper}>
                <View style={styles.menuWrapper}>
                    <View style={styles.menuTextWrapper}>
                        <Text style={styles.menuTitle}>기본 남성 1</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.settingText}>미리듣기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuWrapper}>
                    <View style={styles.menuTextWrapper}>
                        <Text style={styles.menuTitle}>기본 남성 2</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.settingText}>미리듣기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuWrapper}>
                    <View style={styles.menuTextWrapper}>
                        <Text style={styles.menuTitle}>기본 여성 1</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.settingText}>미리듣기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuWrapper}>
                    <View style={styles.menuTextWrapper}>
                        <Text style={styles.menuTitle}>기본 여성 2</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.settingText}>미리듣기</Text>
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

export default VoiceSettingDetail;

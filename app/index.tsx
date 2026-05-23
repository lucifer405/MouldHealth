import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import { router, useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/(auth)/welcome");
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../assets/logo.png')}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.neutral900,
    },
    logo: {
        aspectRatio: 1,
        height: "20%",
    },
})
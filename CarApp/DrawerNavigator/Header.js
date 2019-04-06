import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
// import { Icon } from 'native-base';
// import navigation from './Nav/menuNavigation';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation}) => {
    return(
        <View style={styles.Container}>
           <Icon 
            name="bars"
            color="black"
            size={25}
            onPress={() => navigation.openDrawer()}
                //navigate('DrawerOpen')}
            />
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#878181',
        paddingHorizontal: 15,
        paddingTop: 10,
    }
})

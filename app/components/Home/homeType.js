
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from "react-native";
import Swiper from 'react-native-swiper'

class HomeType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageProps: { name: '美食', icon: require('../../images/type1.png') },
            all: [[
                { id: 'food', name: '美食', icon: require('../../images/type1.png') },
                { id: 'movie', name: '电影', icon: require('../../images/type2.png') },
                { id: 'hotel', name: '酒店', icon: require('../../images/type3.png') },
                { id: 'KTV', name: 'KTV', icon: require('../../images/type4.png') },
                { id: 'list', name: '新日新单', icon: require('../../images/type5.png') },
                { id: 'coupon', name: '代金券', icon: require('../../images/type6.png') },
                { id: 'travel', name: '周边游', icon: require('../../images/type7.png') },
                { id: 'cake', name: '蛋糕甜点', icon: require('../../images/type8.png') }
            ],
            [
                { id: 'highHotel', name: '高端酒店', icon: require('../../images/type1.png') },
                { id: 'exercise', name: '运动健身', icon: require('../../images/type2.png') },
                { id: 'life', name: '生活服务', icon: require('../../images/type3.png') },
                { id: '', name: '母婴亲子', icon: require('../../images/type4.png') },
                { id: 'marry', name: '结婚', icon: require('../../images/type5.png') },
                { id: 'scenic', name: '景点', icon: require('../../images/type6.png') },
                { id: 'spring', name: '温泉', icon: require('../../images/type7.png') },
                { id: '', name: '学习培训', icon: require('../../images/type8.png') }
            ]]
        };
    }

    butonSelect(inputId) {
        this.props.selectedButton(inputId);
    }

    render() {
        var weakself = this;
        var all = this.state.all.map(function (arr) {
            var group = arr.map(function (row) {
                return (
                    <TouchableOpacity key= {row.id} style={styles.item} onPress={() => weakself.butonSelect(row.id)}>
                        <Image source={row.icon} style={{ width: 50, height: 50 }} />
                        <Text style={{ paddingTop: 5 }}>{row.name}</Text>
                    </TouchableOpacity>
                )
            })
            return (
                <View style={styles.row}>
                    <View style={styles.flex}>
                        {group.slice(0, 4)}
                    </View>
                    <View style={styles.flex}>
                        {group.slice(4)}
                    </View>
                </View>
            )
        })
        return (
            <Swiper height={220} loop={true} index={0} autoplay={true} >
                {all}
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    flex: { flexDirection: 'row' },
    row: { marginBottom: 6, backgroundColor: '#fff' },
    block: { flex: 1, padding: 5 },
    item: { flex: 1, alignItems: 'center', padding: 5 },
    icon: { justifyContent: 'center', width: 50, height: 50 },
});

export default HomeType;

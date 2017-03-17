import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    ListView,
    StyleSheet,
    Alert,
    ActivityIndicator
} from "react-native";

class HomeLike extends Component {

    renderRow(row) {
        return (
            <View>
                <View style={styles.flex}>
                    <View style={ {flex: 1 }}>
                        <Text style={{ textAlign: 'center', paddingTop: 10, fontSize: 14, color: '#000000' }}>{row.title}</Text>
                        <Text style={{ textAlign: 'center', paddingTop: 5, fontSize: 12, color: '#FFD700' }}>{row.desc}</Text>
                    </View>
                </View>
                 <Image source={{ uri: row.image }} style={{ flexDirection: 'row', alignSelf: 'center', height: 50, width: 50 }} />
            </View>
        )
    }
    render() {
        return (
            <View>
                <View style={styles.flex}>
                    <View style={styles.block}>{this.renderRow({ title: '女王驾到', desc: '大牌美食38元', image: 'http://p0.meituan.net/280.0/groupop/2ccf688380a03083c071362693e570f620691.png' })}</View>
                    <View style={{ height: 100, width: 0.5, backgroundColor: '#D4D4D4' }} />
                    <View style={styles.block}>{this.renderRow({ title: '新客人专享', desc: '领10元看电影', image: 'http://p0.meituan.net/280.0/groupop/2ccf688380a03083c071362693e570f620691.png' })}</View>
                    <View style={{ height: 100, width: 0.5, backgroundColor: '#D4D4D4' }} />
                    <View style={styles.block}>{this.renderRow({ title: '紧致毛孔', desc: '梦妆免费体验', image: 'http://p0.meituan.net/280.0/groupop/d715a19a85e8d22ba93966f2516f166a19385.png' })}</View>
                </View>
                <View style={{ height: 0.5, backgroundColor: '#D4D4D4' }}></View>
                <View style={styles.flex}>
                    <View style={styles.block}>{this.renderRow({ title: '0元1元', desc: '疯狂吕羊毛', image: 'http://p0.meituan.net/280.0/groupop/2ccf688380a03083c071362693e570f620691.png' })}</View>
                    <View style={{ height: 100, width: 0.5, backgroundColor: '#D4D4D4' }} />
                    <View style={styles.block}>{this.renderRow({ title: '清仓特卖', desc: '1元巴厘岛', image: 'http://p0.meituan.net/280.0/groupop/2ccf688380a03083c071362693e570f620691.png' })}</View>
                    <View style={{ height: 100, width: 0.5, backgroundColor: '#D4D4D4' }} />
                    <View style={styles.block}>{this.renderRow({ title: '3.8宠爱姐', desc: '领38元宏博啊', image: 'http://p0.meituan.net/280.0/groupop/d715a19a85e8d22ba93966f2516f166a19385.png' })}</View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    flex: { flexDirection: 'row' },
    block: { flex: 1 },
})

export default HomeLike;
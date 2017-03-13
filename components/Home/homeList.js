import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    ListView,
    Platform,
    Dimensions,
    StyleSheet,
    Alert,
    ActivityIndicator
} from "react-native";
import XmlParser from '../Model/xmlParser';

class HomeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false,
        };
    }

    render() {
        return (
            <View>
                {this.setListView()}
            </View>
        );
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        // fetch('http://api.union.meituan.com/data/api?city=%E8%A5%BF%E5%AE%89&category=%E7%BE%8E%E9%A3%9F&limit=40')
        //     .then((response) => response.text())
        //     .then((responseData) => {
        //         var result = new XmlParser().parseXmlText(responseData);
        //         var likeData = result.response.deals.data;
        //         console.log('betta   ' + JSON.stringify(likeData))
        //         this.setState({
        //             dataSource: this.state.dataSource.cloneWithRows(likeData),
        //             loaded: true,
        //         });
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //     })
        //     .done();
    }
    setListView() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCell}
                />
            </View>
        )
    }
    renderCell(rowData, sectionID, rowID, highlighRow) {
        console.log('betta' + rowData.deal.deal_img);
        return (
            <View style={styles.cellStyle}>
                <Image source={{ uri: rowData.deal.deal_img.text }} style={{ marginLeft: 10, width: 80, height: 80, backgroundColor: '#FFE1FF' }} />
                <View style={{ marginLeft:10 ,marginRight: 100 }}>
                    <Text style={{ marginTop: 10 }} >炝锅鱼套餐，建议2-3人使用，提供免费WiFi,炝锅鱼套餐，建议2-3人使用，提供免费WiFi</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    cellStyle: {
        height: 90,
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row'
    },
    cellLeftImageStyle: {

    },
    cellRightImageStyle: {
    },
    navButtonStyle: {
        marginLeft: 10
    },
    leftButtonTitleStyle: {
        color: '#FFFFFF'
    },
    navBarStyle: {
        height: 64,
        backgroundColor: '#48D1CC',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center'
    }
})


export default HomeList;
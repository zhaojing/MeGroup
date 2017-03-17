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
const placeholder = require('../../icon/placeHolder.png')

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
        fetch('http://api.meituan.com/group/v1/recommend/homepage/city/1')
            .then((response) => response.json())
            .then((responseData) => {
                var likeData = responseData.data;
                console.log('betta   ' + JSON.stringify(likeData))
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(likeData),
                    loaded: true,
                });
            })
            .catch((error) => {
                console.error(error)
            })
            .done();
    }
    setListView() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCell.bind(this)}
                />
            </View>
        )
    }
    butonSelect(rowData) {
        
        // this.props.selectedButton(inputId);
    }
    renderCell(rowData, sectionID, rowID, highlighRow) {
        return (
            <View style={styles.cellStyle}>
                <Image source={{ uri: rowData.imgurl }} defaultSource={placeholder} style={{ marginLeft: 10, width: 80, height: 80, backgroundColor: '#FFE1FF', borderRadius: 5 }} />
                <View style={{ flex: 0.6, justifyContent: 'space-between', margin: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                        <Text style={{ fontSize: 15 }} >{rowData.mname}</Text>
                        <TouchableOpacity  onPress={()=>this.butonSelect(rowData)} style={{ backgroundColor: '#48D1CC', justifyContent: 'flex-end', marginRight: 10, borderRadius: 5, borderWidth: 1, borderColor: '#48D1CC' }}>
                            <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>收藏</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#969696', fontSize: 12 }} >{rowData.mtitle}</Text>
                    <Text style={{ color: 'red', fontSize: 15 }} >￥{rowData.price}</Text>
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
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
import XmlParser from './model/xmlParser';

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
                var nameList = responseData.data;
                console.log(nameList);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(nameList),
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
                    renderRow={this.renderCell}
                />
            </View>
        )
    }
    renderCell(rowData, sectionID, rowID, highlighRow) {
        return (
            <View style={styles.cellStyle}>
                <Text >{rowData.brandname}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE1FF"
    },
    cellStyle: {
        height: 100,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingLeft: 5
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
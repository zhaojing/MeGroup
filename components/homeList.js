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
                rowHasChanged: (row1, row2) => row1 !== row2,
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
        // fetch('http://www.meituan.com/api/v1/divisions')
        //     .then((response) => response.text())
        //     .then((responseData) => {
        //         var result = new XmlParser().parseXmlText(responseData);
        //         var nameList = result.response.divisions.division;
        //         this.setState({
        //             dataSource: this.state.dataSource.cloneWithRowsAndSections(groupNameList),
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
        return (
            <View style={styles.cellStyle}>
                <Text >{rowData.name.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE1FF"
    },

    sectionStyle: {
        height: 30,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        paddingLeft: 5
    },

    cellStyle: {
        height: 40,
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
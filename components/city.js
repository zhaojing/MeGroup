import React, { Component } from 'react';
import _ from 'lodash';
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


class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            }),
            loaded: false,
        };
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View>
                    {this.setNavigationBar()}
                    {this.renderLoadingView()}
                </View>
            )
        }

        return (
            <View>
                {this.setNavigationBar()}
                {this.setListView()}
            </View>
        );
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://www.meituan.com/api/v1/divisions')
            .then((response) => response.text())
            .then((responseData) => {
                var result = new XmlParser().parseXmlText(responseData);
                var nameList = result.response.divisions.division;
                nameList.sort((a, b) => (a.id.text.localeCompare(b.id.text)));
                let groupNameList = _.groupBy(nameList, x => x.id.text[0]);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(groupNameList),
                    loaded: true,
                });
            })
            .catch((error) => {
                console.error(error)
            })
            .done();
    }

    setNavigationBar() {
        return (
            <View style={styles.navBarStyle} >
                {/* 左边按钮 */}
                <TouchableOpacity style={styles.navButtonStyle} onPress={this.onBack.bind(this)}>
                    <Text style={styles.leftButtonTitleStyle}>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }

    setListView() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCell}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        )
    }

    onBack() {
        this.props.navigator.pop()
    }

    renderLoadingView() {
        return (
            <View>
                <ActivityIndicator
                    animating={!this.state.loaded}
                    style={[styles.centering, { height: 80 }]}
                    size="large" />
            </View>
        );
    }

    renderCell(rowData, sectionID, rowID, highlighRow) {
        return (
            <View style={styles.cellStyle}>
                <Text >{rowData.name.text}</Text>
            </View>
        );
    }
    renderSectionHeader = (sectionData, sectionID) => {
        return (
            <View style={styles.sectionStyle}>
                <Text >{sectionID}</Text>
            </View>
        )
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
        // paddingTop: Platform.OS === 'ios' ? 15 : 0
    }
})

export default City;
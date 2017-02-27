import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity, ListView } from "react-native";
import XmlParser from './model/xmlParser';


class City extends Component {
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
                console.log('betta' + result.response.divisions.division);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result.response.divisions.division),
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
                <Text>
                    Loading data...
            </Text>
            </View>
        );
    }

    renderCell(data) {
        return (
            <View style={styles.container}>
                <Text>{data.name.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFB6C1"
    },
    navButtonStyle: {
        marginLeft: 10
    },
    navBarStyle: {
        height: 64,
        backgroundColor: '#FFBBFF',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center'
        // paddingTop: Platform.OS === 'ios' ? 15 : 0
    }
})

export default City;
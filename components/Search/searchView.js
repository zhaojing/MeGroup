import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    ListView
} from "react-native";

var STOREHISTORY_KEY = '@SearchHistory:key';
var STORELIST_KEY = '@SearchList:key';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{}],
            history: 'youyou',
        };
    }
    render() {
        return (
            <View style={[styles.container]}>
                <View>
                    <StatusBar barStyle="default" />
                    <View style={[styles.nav]} >
                        <View style={[styles.search]}>
                            <Image source={require('../../icon/search.png')} style={[styles.searchIcon]} />
                            <TextInput placeholder={this.state.list[0].name} style={[styles.searchTextInput]}></TextInput>
                        </View>
                        <TouchableOpacity onPress={() => this.onBack()}>
                            <Text style={[styles.cancel]}>取消
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ListView
                    dataSource={ds.cloneWithRows(this.state.list)}
                    renderRow={(rowData) => this.cell(rowData)}
                />
            </View>
        );
    }

    cell(rowData) {
        return (
            <View style={[styles.cell]}>
                <TouchableOpacity>
                <View style={[styles.cellData]}>
                    <View style={[styles.cellIconAndText]}>
                        <Image source={require('../../icon/search.png')} style={[styles.searchIcon]} />
                        <Text>{rowData.name}</Text>
                    </View>
                    <Text style={[styles.detail]}>约{rowData.count}个结果</Text>
                </View>
                <View style={[styles.line]} />
                </TouchableOpacity>
            </View>
        );
    }
    componentDidMount() {
        this._storeInitialSearchList().done;
        this._loadInitialSearchList().done;
        this._loadInitialHistory().done();
    }

    _storeInitialSearchList = async () => {
        var listString = JSON.stringify([{ 'name': '火锅', 'count': '12' },
        { 'name': '火吧', 'count': '3' },
        { 'name': '火焰山', 'count': '1' },
        { 'name': '自助', 'count': '120' },
        { 'name': '自助烧烤', 'count': '54' },
        { 'name': '自助餐', 'count': '110' },
        ]);
        try {
            await AsyncStorage.setItem(STORELIST_KEY, listString);
        } catch (error) {
            this.setState({ list: listString });
        }
    }

    _loadInitialSearchList = async () => {
        try {
            var listString = await AsyncStorage.getItem(STORELIST_KEY);
            this.setState({ list: JSON.parse(listString) });
        } catch (error) {
            console.log(error);
        }
    }

    _loadInitialHistory = async () => {
        try {
            var value = await AsyncStorage.getItem(STOREHISTORY_KEY);
            this.setState({ history: value });
        } catch (error) {
            console.log(error);
        }
    }

    onBack() {
        this.props.navigator.pop()
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    nav: {
        paddingTop: 20,
        height: 42,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        flex: 0.7,
        margin: 10,
        height: 20,
        backgroundColor: '#EBECEE',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        height: 15,
        width: 15,
        margin: 5,
        tintColor: '#8F9092'
    },
    searchTextInput: {
        margin: 2,
        flex: 0.8,
        fontSize: 12,
    },
    cancel: {
        marginRight: 10,
        color: '#21C0AD'
    },
    cell: {
        marginLeft: 10,
        flexDirection: 'column',
    },
    cellData: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cellIconAndText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    detail: {
        fontSize: 12,
        color: '#B1B1B1',
        marginRight: 5,
    },
    line: {
        flex: 1,
        height: 0.5,
        backgroundColor: '#EAEAEA'
    }
})

export default SearchView;

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
    ScrollView,
    ListView
} from "react-native";
import SearchList from './searchList';
import { searchMerchant } from '../../actions/search';

var STOREHISTORY_KEY = '@SearchHistory:key';
var STORELIST_KEY = '@SearchList:key';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{}],
            searchResult: [{}],
            history: [],
        };
    }
    render() {
        let self = this;
        return (
            <View style={[styles.container]}>
                <View>
                    <StatusBar barStyle="default" />
                    <View style={[styles.nav]} >
                        <View style={[styles.search]}>
                            <Image source={require('../../icon/search.png')} style={[styles.searchIcon]} />
                            <TextInput placeholder={this.state.list[0].name} onChangeText={(text) => this.search(text)} onSubmitEditing={(event) => { this.addHistory(event.nativeEvent.text); this.searchList(event.nativeEvent.text) }} autoFocus={true} returnKeyType='search' style={[styles.searchTextInput]}></TextInput>
                        </View>
                        <TouchableOpacity onPress={() => this.onBack()}>
                            <Text style={[styles.cancel]}>取消
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={[styles.sessionHeard]}>
                        <Text style={[styles.sessionHeardText]}>
                            历史记录
                    </Text>
                    </View>
                    <ListView
                        enableEmptySections={true}
                        dataSource={ds.cloneWithRows(this.state.history)}
                        renderRow={(rowData) => this.historyCell(rowData)}
                    />
                    <TouchableOpacity onPress={() => this.clearHistory()}>
                        <View style={[styles.cellData]}>
                            <Text>清除收缩记录</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

                <ListView
                    enableEmptySections={true}
                    dataSource={ds.cloneWithRows(this.state.searchResult)}
                    renderRow={(rowData) => this.cell(rowData)}
                />
            </View>
        );
    }

    cell(rowData) {
        return (
            <View style={[styles.cell]}>
                <TouchableOpacity onPress={() => this.searchList()}>
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

    historyCell(name) {
        return (
            <View style={[styles.cell]}>
                <TouchableOpacity onPress={() => this.searchList()}>
                    <View style={[styles.cellData]}>
                        <View style={[styles.cellIconAndText]}>
                            <Image source={require('../../icon/search.png')} style={[styles.searchIcon]} />
                            <Text>{name}</Text>
                        </View>
                        <Image source={require('../../icon/angle-arrow-right.png')} style={[styles.searchIcon]} />
                    </View>
                    <View style={[styles.line]} />
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        AsyncStorage.clear;
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
            this.setState({ list: listString, searchResult: list });
        }
    }

    _loadInitialSearchList = async () => {
        try {
            var listString = await AsyncStorage.getItem(STORELIST_KEY);
            this.setState({ list: JSON.parse(listString) });
            this.setState({ searchResult: this.state.list });
        } catch (error) {
            console.log(error);
        }
    }

    _loadInitialHistory = async () => {
        try {
            var value = await AsyncStorage.getItem(STOREHISTORY_KEY);
            this.setState({ history: JSON.parse(value) });
        } catch (error) {
            console.log(error);
        }
    }

    onBack() {
        this.props.navigator.pop()
    }

    search(text) {
        var result = this.state.list.filter((item) => {
            return item.name.indexOf(text) > -1;
        });
        this.setState({ searchResult: result })
    }

    searchList(text) {
        this.props.navigator.push({
            component: SearchList,
        })
    }

    addHistory = async (text) => {
        try {
            var historyString = await AsyncStorage.getItem(STOREHISTORY_KEY);
            var history = JSON.parse(historyString);
            if (history == null) {
                history = [];
                AsyncStorage.setItem(STOREHISTORY_KEY, JSON.stringify(history));
            } else if (history.indexOf(text) <= -1) {
                history.push(text);
                AsyncStorage.setItem(STOREHISTORY_KEY, JSON.stringify(history));
            }
        } catch (error) {
            console.log(error);
        }
    }

    clearHistory = async () => {
        try {
            await AsyncStorage.removeItem(STOREHISTORY_KEY);
        } catch (error) {
            console.log(error);
        }
    }
}

SearchView.propTypes = {
  searchMerchant: React.PropTypes.func,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    searchMerchant,
  }, dispatch)
);

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
    },
    sessionHeard: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 10,
        backgroundColor: '#F4F4F4',
    },
    sessionHeardText: {
        color: '#B1B1B1'
    }
})

export default SearchView;

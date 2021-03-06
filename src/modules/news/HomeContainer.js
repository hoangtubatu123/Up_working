import React, {Component} from 'react';
import {FlatList, RefreshControl, Text, View, Image} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../commons/HamburgerButton';
import Loading from '../../commons/Loading';
import * as homeAction from '../news/homeAction';
import {bindActionCreators} from 'redux';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux'
import SearchBar from 'react-native-searchbar';
import SearchButton from '../../commons/SearchButton'
import ListView from '../news/ListView';

class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false,
            id: 0,
            showSearch: false,
            page: 1,
            txt : "",
            new : 0
        }
    }

    componentWillMount() {
        this.props.homeAction.getNews();
        this.isLoading();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.news.length !== this.props.news.length){
            this.setState({new : 1})
        }
    }

    toggleSearch() {
        if (this.state.showSearch == false) {
            this.setState({showSearch: true});
            this.searchBar.show();
        } else {
            this.setState({showSearch: false});
            this.searchBar.hide();
        }
    }

    onBack() {
        if (this.state.showSearch == false) {
            this.setState({showSearch: true});
            this.searchBar.show();
        } else {
            this.setState({showSearch: false});
            this.searchBar.hide();
        }
    }

    loadMore() {
        if (this.props.isLoadingMore || this.props.isLoadingMoreSearch)
            return (<Loading/>)
        else
            return (<View/>)
    }


    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 1500);
    }

    handleChangText(input) {
        this.isLoading();
        this.setState({txt : input, page:1})
        if(input!== "")
        this.props.homeAction.getSearchNew(input);
        if(input == ""){
            this.props.homeAction.getNews()
            this.setState({page : 1})
        }
    }
    onX(){
        this.props.homeAction.getNews()
            this.setState({page : 1, txt : ""})
    }

    getMore() {
        const {news} = this.props;
            let page = this.state.page + 1;
            if(news.length >= this.state.page * 6){
                this.props.homeAction.getMoreNews(page);
                this.setState({page : page})
        }
        if(this.state.txt != "" && this.state.new == 0){
            this.props.homeAction.getMoreNewsSearch(page, this.state.txt);
        }
        this.setState({page : page})
    }
    refreshList(){
        this.props.homeAction.refreshNews();
        this.setState({page : 1, txt : ""});
    }


    render() {
        const {navigate} = this.props.navigation;
        const {colors} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <View
                    style={general.linearGradient}>
                    <View style={[general.wrapperHeader, general.paddingBorder]}>
                        <Text style={[general.textTitleHeader]}>
                            TIN MỚI
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <SearchBar
                        ref={(ref) => this.searchBar = ref}
                        onBack={() => this.onBack()}
                        onX = {() => this.onX()}
                        handleChangeText={(input) => this.handleChangText(input)}
                    />
                    <View style={general.wrapperFullWidth}>
                        {this.props.isLoading || this.state.isLoading || (this.props.isLoading && this.props.news.length === 0)?
                            <Loading/>
                            :

                            this.props.news.length != 0
                            ?
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.props.news}
                                onEndReachedThreshold={5}
                                onEndReached={
                                    () => this.getMore()
                                }
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.props.isRefreshing}
                                        onRefresh={
                                            () => this.refreshList()
                                        }
                                    />
                                }
                                ListFooterComponent={
                                    this.loadMore()
                                }
                                renderItem={({item}) => {
                                    return (<ListView item={item} navigation={this.props.navigation}/>)
                                }
                                }
                            />
                                :
                                <View style={[general.wrapperCenter, general.paddingLR]}>
                                    <Text style={[general.textTitleCard, general.marginTop, {textAlign: 'center'}]}>
                                        Không tìm thấy kết quả nào .
                                    </Text>
                                </View>
                        }

                    </View>
                    <SearchButton
                        function={() => this.toggleSearch()}/>
                </View>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.home.isLoading,
        news: state.home.news,
        isLoadingMore: state.home.isLoadingMore,
        isRefreshing: state.home.isRefreshing,
        isLoadingMoreSearch :state.home.isLoadingMoreSearch
    }
}

function mapDispatchToProps(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
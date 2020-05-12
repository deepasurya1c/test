/*==========================================================================================*/
// Welcome - Display options to select
//         - Login with FSP
//         - Guest Login
/*==========================================================================================*/

import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StatusBar, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchUsersAction from '../../request/request';
import { getUsersError, getUsers, getUsersPending } from '../../reducer';
import Loader from '../../components/Loader';


const { width, height } = Dimensions.get('window');
console.disableYellowBox = true


class Home extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { fetchUsers, users } = this.props;
        fetchUsers();

    }

    render() {
        const { users, error, pending } = this.props;
        console.log("users", users)
        return (
            <SafeAreaView>
                <View style={{ justifyContent: 'center', width: width, height: height, backgroundColor: "#abc" }}>
                    <Text>{users}</Text>
                    <FlatList
                        data={users}
                        renderItem={({ item }) => <Text>{item.email}</Text>}
                        keyExtractor={item => item.id}
                    />

                </View>
            </SafeAreaView>
        )
    };
}

const mapStateToProps = state => ({
    error: getUsersError(state),
    users: getUsers(state),
    pending: getUsersPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers: fetchUsersAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


const styles = StyleSheet.create({
    

})
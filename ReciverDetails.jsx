import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from '../Styles'
import MyHeader from '../components/MyHeader'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../config'
class ReciverDetails extends Component {
    constructor(props) {
        super(props);
        var param = this.props.navigation.getParam('details')
        this.state = {
            reciverId: param,
            emailId: param['user_id'],
            itemName: param['item_name'],
            description: param['description'],
            exchangeId: param['exchangeId'],
            firstName: '',
            lastName: '',
            userName: '',
            address: '',
            contact: '',
            docId: '',
            userId: firebase.auth().currentUser.email
        };
    }
    componentDidMount = () => {
        console.log(this.props.navigation.getParam('details'))
        this.getReciverDetails()
    }
    getReciverDetails = async (email = this.state.emailId) => {
        var i = await db.collection('users').where('email_id', '==', email).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    var data = doc.data()
                    this.setState({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        userName: data.userName,
                        address: data.Address,
                        contact: data.Contact,
                    })
                    return {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        userName: data.userName,
                        address: data.Address,
                        contact: data.Contact,
                     }
                })
            })

    }
    addNotification = async () => {
        var message = `${this.state.userId} has shown Interest in donating the book, you requested that is ${this.state.itemName}`
        await db.collection('notifications').add({
            donar_id: this.state.userId,
            reciever_id: this.props.navigation.getParam('details')['user_id'],
            itemName: this.state.itemkName,
            requestId: this.state.exchangeId,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            notificationStatus: 'unread',
            message: message
        })
        console.log("notification created")
    }
    ExchangeItem = async () => {
        // TODO:Exchanger Contact, Exchanger Address, Exchange Id and the status of exchange
        this.getReciverDetails()
        var itemToAdd = {
            exchangerContact: this.state.contact,
            exchangerAddress: this.state.address,
            exchangerEmail: this.state.emailId,
            exchangeId: this.state.exchangeId,
            exchangeStatus: 'unread'
        }
        console.log(itemToAdd)
        this.addNotification()
        await db.collection('AllBarters').add(itemToAdd)
        this.props.navigation.navigate('MyBarters')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader title="User Details" navigation={this.props.navigation} />
                <View style={styles.container}>
                    <View style={styles.Modal}>
                        <Text style={styles.detailText}>
                            <Text style={{ fontWeight: 750 }}>Item Name: </Text>
                            {this.state.itemName}
                        </Text>
                        <Text style={styles.detailText}>
                            <Text style={{ fontWeight: 750 }}>Description: </Text>
                            {this.state.description}
                        </Text>
                        <Text style={styles.buttonText}>User Details</Text>
                        <Text style={styles.detailText}>
                            <Text style={{ fontWeight: 750 }}>First Name: </Text>
                            {this.state.firstName}
                        </Text>
                        <Text style={styles.detailText}>
                            <Text style={{ fontWeight: 750 }}>Last Name: </Text>
                            {this.state.lastName}
                        </Text>
                        <Text style={styles.detailText}>
                            <Text style={{ fontWeight: 750 }}>Contact: </Text>
                            {this.state.contact}
                        </Text>
                        <TouchableOpacity style={styles.button}
                            // disabled={this.state.input_confirmPassword != this.state.input_password}
                            onPress={this.ExchangeItem}
                        >
                            <Text style={styles.buttonText}>
                                I am Intrested
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        );
    }
}

export default ReciverDetails;
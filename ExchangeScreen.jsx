import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Styles";
import { Input } from "react-native-elements";
import firebase from "firebase/app";
import db from "../config";
import MyHeader from "../components/MyHeader";
// import { Header, Icon } from 'react-native-elements';
class ExchangeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_itemName: "",
      input_description: "",
    };
  }
  componentDidMount() {
      this.getItems();
      this.getData();
  }
  getItems = () => {
    db.collection("Items")
      .where("user_id", "==", firebase.auth().currentUser.email)
      .onSnapshot((snapshot)=>{console.log(snapshot.data);});
  };
  createUniqueId = () => {
    return Math.random().toString(36).substring(7);
  };
  addItem = (itemName, description) => {
    var user_id = firebase.auth().currentUser.email;
    var uniquieId = this.createUniqueId();
    db.collection("Items")
      .add({
        user_id: user_id,
        item_name: itemName,
        description: description,
        exchangeId: uniquieId,
      })
      .then((resopnse) => {
        return alert("Item ready to exchanged", "", [
          {
            text: "Ok",
            onPress: () => {
              this.props.navigation.navigate("HomeScreen");
            },
          },
        ]);
      });
    this.setState({
      input_itemName: "",
      input_description: "",
    });
  };
  IsExchangeRequestActive = () => {
    db.collection("Items")
      .where("user_id", "==", firebase.auth().currentUser.email)
      .onSnapshot(() => {});
  };
  getData(){
    fetch("http://data.fixer.io/api/latest?access_key=1f7dd48123a05ae588283b5e13fae944&format=1")
    .then(response=>{
      return response.json();
    }).then(responseData =>{
      var currencyCode = this.state.currencyCode
      var currency = responseData.rates.INR
      var value =  69 / currency
      console.log(value);
    })
    }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader
          title="Exchanges Item Screen"
          navigation={this.props.navigation}
        />
        <View style={[styles.container]}>
          <Input
            id=" Item Name"
            label="Item Name"
            value={this.state.input_itemName}
            onChangeText={(value) => {
              this.setState({ input_itemName: value });
            }}
            style={{ width: "80%" }}
          />
          <Input
            id="Description"
            label="Description"
            value={this.state.input_description}
            onChangeText={(value) => {
              this.setState({ input_description: value });
            }}
            multiline
            style={{ width: "80%" }}
          />
                <Input
            style={styles.formTextInput}
            placeholder ={"Item Value"}
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                itemValue: text
              })
            }}
            value={this.state.itemValue}
          />
          <TouchableOpacity
            style={[
              styles.button,
              {
                alignSelf: "stretch",
                width: null,
                paddingHorizontal: 20,
                margin: 30,
                marginTop: 30,
              },
            ]}
            onPress={() => {
              this.addItem(
                this.state.input_itemName,
                this.state.input_description
              );
            }}
          >
            <Text style={[styles.buttonText, { fontSize: 20 }]}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ExchangeScreen;

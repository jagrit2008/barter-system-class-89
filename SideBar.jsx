import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import firebase from "firebase/app";
import "firebase/auth";
import styles from "../Styles";
import * as ImagePicker from "expo-image-picker";
import { Avatar, Icon } from "react-native-elements";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: "../assets/barter.png",
      userId: firebase.auth().currentUser.email,
      image: "#",
      name: "",
      docId: "",
    };
  }
  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };

  getUserProfile() {
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
          this.setState({
            name: doc.data().firstName + " " + doc.data().lastName,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#DDFFE0",
            padding: 10,
            alignContent: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: this.state.image,
            }}
            // icon={{ name: "user", type: "font-awesome" }}
            size="large"
            // title="LW"
            onPress={() => {
            //   console.log("Works!");
              this.selectPicture();
            }}
            activeOpacity={0.7}
          />
          <Text style={{ fontWeight: "bold" }}>{this.state.name}</Text>
        </View>
        <Text>Custom Side Drawer</Text>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props} />
        </View>
        <View
          style={{
            flex: 1,
            //  alignSelf:'flex-end',
            justifyContent: "flex-end",

            paddingBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#FF1A1F",
              paddingHorizontal: 10,
              margin: 10,
              paddingVertical: 10,
              borderRadius: 5,
              flex: 1,
              flexDirection: "row",
              maxHeight: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#fff",
                marginRight: 20,
              }}
            >
              Log Out
            </Text>
            <Icon
              size={30}
              name="input"
              color="#fff"
              style={{ alignSelf: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SideBar;

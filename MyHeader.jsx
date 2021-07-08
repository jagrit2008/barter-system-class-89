import React, { Component } from "react";
import { View ,Text,} from "react-native";
import { Header, Icon, Badge } from "react-native-elements";
import db from "../config";
class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationsNo: 0,
    };
  }
  getNumberOfUnreadNotification = async () => {
    this.req = await db
      .collection("notifications")
      .where("notificationStatus", "==", "unread")
      .onSnapshot(
        (request) => {
          var list = request.docs.map((document) => document.data());
          console.log(document.length);
          this.setState({ notificationsNo: list.length });
          // console.log(list)
        },
        (error) => {
          console.log(error);
        }
      );
  };
  componentDidMount() {
    this.getNumberOfUnreadNotification();
  }
  render() {
    return (
<View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#39B39C",
          justifyContent: "space-between",
          alignItems: "center",
          maxHeight:50,
          minHeight:50,
          paddingHorizontal:10
        }}
      >
        <Icon
          name="bars"
          type="font-awesome"
          color="#fff"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          {this.props.title}
        </Text>
        <View>
          <Icon
            name="notifications"
            color="#fff"
            onPress={() => {
              console.log("Bell Pressed");
              this.props.navigation.navigate("Notifications");
            }}
          />

          <Badge
            value={this.state.notificationsNo}
            containerStyle={{ position: "absolute", top: -4, right: -4 }}
            status="success"
          />
        </View>
      </View>
      // <Header
      //   centerComponent={{
      //     text: this.props.title,
      //     style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
      //   }}
      //   backgroundColor="#FFAA00"
      //   leftComponent={
      //     <Icon
      //       name="list"
      //       color={"#fff"}
      //       onPress={() => {
      //         this.props.navigation.openDrawer();
      //       }}
      //       size={30}
      //     />
      //   }
      //   // rightComponent={
      //   //   <View>
      //   //     <Icon
      //   //       name="notifications"
      //   //       color="#fff"
      //   //       onPress={() => {
      //   //         console.log("Bell Pressed");
      //   //         this.props.navigation.navigate("MyBarters");
      //   //       }}
      //   //     />
      //   //     <Badge
      //   //       value={this.state.notificationsNo}
      //   //       containerStyle={{ position: "absolute", top: -4, right: -4 }}
      //   //       status="success"
      //   //     />
      //   //   </View>
      //   // }
      // />
    );
  }
}

export default MyHeader;

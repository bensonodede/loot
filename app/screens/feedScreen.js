import React from "react";
import {
  StatusBar,
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Button
} from "react-native";
import firebase from "react-native-firebase";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import styles from "../config/styles";

export default class FeedScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection("games");
    this.unsubscribe = null;
    this.state = {
      games: [],
      loading: true
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = querySnapshot => {
    const games = [];
    querySnapshot.forEach(doc => {
      const { title, imageUrl, price, description } = doc.data();
      games.push({
        key: doc.id, // Document ID
        //doc, // DocumentSnapshot(The whole document) //
        title,
        imageUrl,
        price,
        description
      });
    });
    this.setState(
      {
        games,
        loading: false
      },
      () => {
        //console.log(this.state);
      }
    );
  };

  signOut = () => {
    firebase.auth().signOut();
  };
  renderHeader = () => {
    return (
      <View>
        <Text
          style={[
            styles.title2,
            styles.fontBold,
            styles.blackish,
            {
              paddingVertical: responsiveHeight(8),
              paddingHorizontal: responsiveWidth(3)
            }
          ]}
        >
          Featured
        </Text>
        <Button
          title={"SIGN OUT"}
          onPress={() => {
            this.signOut;
          }}
        />
      </View>
    );
  };

  _addRandomGame = () => {
    this.ref.add({
      title: "Added game by random button",
      price: Math.floor(Math.random() * 10 + 1),
      imageUrl: `https://picsum.photos/200/300?image=${Math.floor(
        Math.random() * 100 + 1
      )}`,
      description: "This is a random description"
    });
  };

  _goToDetails(item) {
    this.props.navigation.navigate("Detail", {
      gameDetails: item
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"#FFFFFF"}
          animated
        />
        <Button
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                console.log("SIGNED OUT");
              })
              .catch(error => console.log(error));
          }}
          title={"SIGN OUT"}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={this.renderHeader}
          data={this.state.games}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                this._goToDetails(item);
              }}
            >
              <View style={{ padding: responsiveWidth(3) }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{
                      flex: 1,
                      height: responsiveHeight(72),
                      width: responsiveWidth(90),
                      borderRadius: responsiveWidth(3)
                    }}
                    resizeMode={"cover"}
                  />
                </View>

                <View
                  style={{
                    alignItems: "flex-start",
                    flexDirection: "column",
                    paddingBottom: responsiveHeight(2)
                  }}
                >
                  <Text
                    style={[
                      styles.title3,
                      styles.fontBold,
                      styles.blackish,
                      { paddingTop: responsiveHeight(1.4) }
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.fontLight,
                      styles.regular,
                      styles.greyish,
                      {
                        paddingTop: responsiveHeight(0.2),
                        paddingBottom: responsiveHeight(1.2)
                      }
                    ]}
                  >
                    {item.price} ksh per day
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  }
}

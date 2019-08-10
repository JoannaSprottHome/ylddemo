import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {AsyncStorage} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 5,
    marginTop: 10
  },
  textContainer: {
    flex: 2,
    marginTop: 90,
    padding: 5
  },
  description: {
    fontSize: 12,
    margin: 10
  }
});

class BookmarIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarked: false
    };
  }

  toggleBookmark() {
      this.setState({bookmarked: !this.state.bookmark});
  }

  render() {
    const { bookmarked = false } = this.state;
    console.log(this.state, this.props)
    const bookMarkColor = this.state.bookmarked ? "black" : "#c2c2d6";

    return (
      <TouchableOpacity
        onPress={() => this.toggleBookmark()}
      >
        <FontAwesomeIcon icon={ faBookmark } style={{marginRight:10, color: bookMarkColor}}/>
      </TouchableOpacity>
    )
  }
}

export default class detail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My App",
    headerRight: <BookmarIcon title={navigation.getParam('article').title} />
  });

  render() {
    const article = this.props.navigation.getParam('article');
    const {title, description, urlToImage} = article;
    console.log("outputting something")

    let bk_object = {
      title,
      bk: false
    };

    let bk_current = {
      title,
      bk: true
    };

    // AsyncStorage.setItem('bookmarks', JSON.stringify(bk_object), () => {
    //   AsyncStorage.mergeItem('bookmarks', JSON.stringify(bk_current), () => {
    //     AsyncStorage.getItem('bookmarks', (err, result) => {
    //       console.log("outputting AsyncStorage")
    //       console.log(result);
    //     });
    //   });
    // });
    //
    // console.log(`bookmark state: ${this.state.bookmarks}`);

    return(
      <View>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={{width: 400, height: 200, marginTop: 10}}
          source={{uri: urlToImage}}
        />
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

};

import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {ImageComponent} from "./ImageComponent.js";

const Article = (props) => {
    const {title, description, urlToImage} = props.article;
    return (
    <View style={{ flex: 1, flexDirection: 'row'}}>
    <ImageComponent source={urlToImage}/>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  textContainer: {
    flex: 2,
    padding: 5
  },
  description: {
    fontSize: 12
  }
});

export {Article};

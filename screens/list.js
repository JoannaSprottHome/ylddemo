import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View, Text, ScrollView, Button } from 'react-native';
import { Article } from "../Article.js";

const NEWS_API_KEY = "c35d1b22e6a54d93b6cc985e5a47dc27";
const styles = StyleSheet.create({
  touchable: {
    flex: 1
  }
});

const newList = (articleArray, navigation) => {
  return articleArray.map((article, index)=> {
    return <TouchableOpacity
      style={{flex: 1}}
      onPress={() => navigation.navigate("Detail", { article })}
      key={`TouchableOpacity-${index}`}
    >
      <Article  key={`article-${index}`} article={article}/>
    </TouchableOpacity>
  })
};

export default class myList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    }
  }

  static navigationOptions = {
    title: "My App"
  };

  componentDidMount() {
    const query = new URLSearchParams({
      page: 1,
      country: 'us',
      apiKey: NEWS_API_KEY
    }).toString();

    fetch(`https://newsapi.org/v2/top-headlines?${query}`)
      .then(response => response.json())
      .then(data =>
        this.setState(() => {
          return { data: data, loading: false };
        })
      );
  }

  render() {

    if (this.state.loading) {
      return(
        <ScrollView style={{ height: 100 }}>
          <Text style={{fontSize: 24, fontWeight: "bold", margin: 10}}>Still loading...</Text>
        </ScrollView>
      );
    } else {
      return(
        <ScrollView style={{ height: 100 }}>
          <Text style={{fontSize: 24, fontWeight: "bold", margin: 10}}>Top News Stories</Text>
          {newList(this.state.data.articles, this.props.navigation)}
        </ScrollView>
      );
    }
  }
}

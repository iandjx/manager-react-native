import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>{name}</Text>
      </CardSection>
    );
  }
}

const styles = {
  cardStyle: {
    flexDirection: "column"
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  nameStyle: {
    fontWeight: "bold"
  }
};

export default ListItem;

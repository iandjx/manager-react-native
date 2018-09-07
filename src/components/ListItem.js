import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }
  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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

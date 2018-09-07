import React from "react";
import { Picker, Text } from "react-native";
import { CardSection } from "./CardSection";

const DayPicker = props => {
  return (
    <CardSection style={styles.cardStyle}>
      <Text style={styles.textStyle}>Shift</Text>
      <Picker
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
        style={styles.pickerStyle}
      >
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
    </CardSection>
  );
};

const styles = {
  cardStyle: {
    flexDirection: "column"
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 7,
    width: "100%"
  },
  pickerStyle: {
    width: "100%"
  }
};

export { DayPicker };

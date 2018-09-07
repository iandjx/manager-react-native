import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { CardSection, Input, DayPicker } from "./common";
import { employeeUpdate, employeeCreate } from "../actions";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        {/* Name input */}
        <CardSection>
          <Input
            placeholder="Name"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>

        {/* Phone Input */}
        <CardSection>
          <Input
            placeholder="Phone Number"
            keyboardType="numeric"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>
        {/* DayPicker */}
        <DayPicker
          selectedValue={this.props.shift}
          onValueChange={day =>
            this.props.employeeUpdate({ prop: "shift", value: day })
          }
        />
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    width: "100%"
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeForm);

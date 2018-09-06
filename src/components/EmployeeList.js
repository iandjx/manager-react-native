import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, Text, View } from "react-native";
import { employeeFetch } from "../actions";
import _ from "lodash";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>test</Text>
      </View>
      // <FlatList
      //   data={this.props.employees}
      //   renderItem={({ item }) => <ListItem employee={item} />}
      // />
    );
  }
}

const mapStateToProps = state => {
  //transform Object state.employees to Array
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; //{ shift: 'Monday', name: 'Vinh', id: '123213' }
  });
  return { employees };
};
export default connect(
  mapStateToProps,
  { employeeFetch }
)(EmployeeList);

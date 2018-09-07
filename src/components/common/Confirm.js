import React from "react";
import { Text, View, Modal } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";
import { Card } from "./Card";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={() => {}}
    >
      <View style={styles.containerStyle}>
        <Card>
          <CardSection>
            <Text style={styles.textStyle}>{children}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={onAccept}>Accept</Button>
            <Button onPress={onDecline}>Cancel</Button>
          </CardSection>
        </Card>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  cardStyle: {
    paddingTop: 5,
    paddingBottom: 5
  }
};

export { Confirm };

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
} from "react-native";
import Listitem from "./components/ListItem";

export default function App() {
  const [goal, setGoal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = () => {
    setGoals((prevState) => [
      ...prevState,
      { key: Math.random().toString(), value: goal },
    ]);
    // setGoals([]);
    setGoal("");
    setIsOpen(false);
  };

  const removeGoalHandler = (id) => {
    setGoals((prevState) => prevState.filter((goal) => goal.key !== id));
  };

  return (
    <View style={styles.screen}>
      <Button title="Add a New Goal" onPress={() => setIsOpen(true)} />
      <Modal visible={isOpen} animationType="slide">
        <View style={styles.firstView}>
          <TextInput
            placeholder="Set Goal"
            style={styles.input}
            value={goal}
            onChangeText={(text) => {
              setGoal(text);
            }}
          />
          <Button disabled={!goal} title="ADD" onPress={addGoalHandler} />
          <Button title="Cancel" color="red" onPress={() => setIsOpen(false)} />
        </View>
      </Modal>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <Listitem
            value={itemData.item.value}
            deleteHandler={() => removeGoalHandler(itemData.item.key)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  firstView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
  },
});

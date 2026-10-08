import { View, Text, StyleSheet } from 'react-native';
import React, { useReducer } from 'react';

interface Mystate {
  count: number;
}
const initialState: Mystate = {
  count: 0,
};
type Action = {
  type: 'INCREMENT' | 'DECREMENT';

};

const reducer = (state: Mystate, action: Action): Mystate => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: Math.max(0, state.count - 1) };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>{state.count}</Text>
      <Text
        style={styles.container}
        onPress={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        INCREMENT
      </Text>
      <Text
        style={styles.container}
        onPress={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        DECREMENT
      </Text>
    </View>
  );
};

export default UseReducer;
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    textAlign: 'center',
    padding: 10,
  },
});

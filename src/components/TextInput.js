import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const TextInputComponent = ({ mode, label, value, onChangeText }) => {
  return (
    <TextInput
      mode={mode}
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextInputComponent;

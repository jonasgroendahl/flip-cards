import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Card, Title } from "react-native-paper";

type Props = {
  value: string;
  onChange: (text: string) => void;
  inputRef: any;
  title: string;
  autoFocus?: boolean;
};

const FlipCard: React.FC<Props> = ({
  title,
  value,
  onChange,
  inputRef,
  autoFocus,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{title}</Title>
        <TextInput
          value={value}
          onChangeText={onChange}
          style={styles.textInput}
          ref={inputRef}
          autoFocus={autoFocus}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
  },
  textInput: {
    fontSize: 18,
  },
});

export default FlipCard;

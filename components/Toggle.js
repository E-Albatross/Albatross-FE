import React from 'react';
import {
  StyleSheet,
  Wrap,
  Pressable,
  ToggleContainer,
  ToggleWheel,
} from 'react-native';

const Toggle = ({ onToggle }) => {
  return (
    <Wrap>
      <Pressable onPress={onToggle}>
        <ToggleContainer style={{ backgroundColor: color }}>
          <ToggleWheel
            style={[
              styles.toggleWheel,
              { transform: [{ translateX: moveSwitchToggle }] },
            ]}
          />
        </ToggleContainer>
      </Pressable>
    </Wrap>
  );
};

const styles = StyleSheet.create({});

export default Toggle;

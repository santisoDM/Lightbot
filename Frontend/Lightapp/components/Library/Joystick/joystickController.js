import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, Text } from 'react-native';

const Joystick = ({ serialNumber, onSendCommand, command }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const { dx, dy } = gestureState;

        // Limitar el rango de movimiento a la zona gris (ejemplo: 100x100)
        const limitedDx = Math.max(-100, Math.min(100, dx));
        const limitedDy = Math.max(-100, Math.min(100, dy));

        console.log(`Joystick direction: dx = ${limitedDx}, dy = ${limitedDy}`);
        Animated.event(
          [null, { dx: pan.x, dy: pan.y }],
          { useNativeDriver: false }
        )(e, { ...gestureState, dx: limitedDx, dy: limitedDy });
      },
      onPanResponderRelease: (e, gestureState) => {
        const { dx, dy } = gestureState;

        const limitedDx = Math.max(-100, Math.min(100, dx));
        const limitedDy = Math.max(-100, Math.min(100, dy));

        // Asume que el rango del joystick es de -100 a 100 y mapea eso al rango de 0 a 3600
        const panValue = Math.round(((limitedDx + 100) / 200) * 3600);  
        const tiltValue = Math.round(((limitedDy + 100) / 200) * 3600); 

        // Crear el comando correspondiente basado en el prop `command`
        let commandString;
        if (command === 'RUNPOS') {
          commandString = `${serialNumber},RUNPOS,${panValue},1,${tiltValue},2,0,0,0,0,\r\n`;
        } else if (command === 'INCDEC') {
          commandString = `${serialNumber},INCDEC,2,${panValue},4,,,,,,,\r\n`;
        }
        
        console.log('Command:', commandString);

        if (onSendCommand) {
          onSendCommand(commandString);
        }
      },
    })
  ).current;

  const panStyle = {
    transform: pan.getTranslateTransform(),
  };

  return (
    <View style={styles.container}>
      <View style={styles.joystickBackground}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.joystick, panStyle]}
        />
      </View>
      <Text>Move the joystick to control the Minibot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joystickBackground: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  joystick: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f00',
  },
});

export default Joystick;

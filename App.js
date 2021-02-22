import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  // const uri = DiceTwo;

  const [uri, setUri] = useState(DiceTwo);

  const [uri2, setUri2] = useState(DiceOne);

  const playButtonTapped = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;
      default:
        setUri(DiceOne);
    }

    switch (randomNumber2) {
      case 1:
        setUri2(DiceOne);
        break;
      case 2:
        setUri2(DiceTwo);
        break;
      case 3:
        setUri2(DiceThree);
        break;
      case 4:
        setUri2(DiceFour);
        break;
      case 5:
        setUri2(DiceFive);
        break;
      case 6:
        setUri2(DiceSix);
        break;
      default:
        setUri2(DiceOne);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={playButtonTapped}>
          <Image style={styles.image} source={uri} />
          <Image style={styles.image} source={uri2} />
        </TouchableOpacity>
        <Text style={styles.gamePlayButton}>Dice Roller</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9294f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#fff',
    backgroundColor: '#f0a500',
    borderRadius: 10,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontWeight: 'bold',
  },
});

export default App;

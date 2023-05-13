import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Image, StyleSheet} from 'react-native';

const MainCard = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#FB693C', '#FB9115']}
      style={styles.container}>
      <View style={styles.upperView}>
        <Image
          source={require('../assests/money.png')}
          style={{height: '80%', width: '80%'}}
          resizeMode="contain"
        />
        <Text style={{fontSize: 16, fontWeight: '600', color: '#FFFFFF'}}>
          July
        </Text>
      </View>
      <View style={styles.middleView}>
        <View
          style={{height: '65%', width: '3%', backgroundColor: '#FFFFFF'}}
        />
      </View>
      <View style={styles.lowerView}>
        <View style={styles.textView}>
          <Text style={styles.bigText}>Income</Text>
          <Text style={styles.smallText}>$22,000</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.bigText}>Expenses</Text>
          <Text style={styles.smallText}>$5,000</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  container: {
    height: '88%',
    width: '90%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  upperView: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
  },
  lowerView: {
    height: '100%',
    width: '47%',
    justifyContent: 'space-evenly',
  },
  middleView: {height: '100%', width: '13%', justifyContent: 'center'},
  textView: {
    height: '30%',
    width: '100%',
  },
  bigText: {fontSize: 16, fontWeight: '600', color: '#FFFFFF'},
  smallText: {fontSize: 12, fontWeight: '500', color: '#FFFFFF'},
});

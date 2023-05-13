import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../constants/colors';
interface propTypes {
  cardStyle: any;
  imageUrl: any;
  imageStyle: any;
  title: string;
  amount: string;
}

const ItemCard = (props: propTypes) => {
  return (
    <View style={[styles.container, props.cardStyle]}>
      <View style={{flex: 0.6, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={props.imageUrl}
          style={props.imageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 0.4, justifyContent: 'center'}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.amount}>{props.amount}</Text>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  amount: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    marginLeft: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.black,
    marginLeft: 10,
  },
});

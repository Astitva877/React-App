import React from 'react';
// import react from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MainCard from '../components/MainCard';
import ItemCard from '../components/ItemCard';
import colors from '../constants/colors';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Image
          source={require('../assests/mainlogo.png')}
          style={styles.mainLogoStyle}
        />
      </View>
      <View style={styles.mainView}>
        <View style={styles.mainUpperView}>
          <View style={styles.secondMainUpperView}>
            <View style={styles.upperTextView}>
              <Text style={styles.helloText}>Hello Alex</Text>
              <Text style={styles.morningText}>Good morning</Text>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.addText}>+ Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.middleFlex}>
          <MainCard />
        </View>
        <View style={styles.lowerFlex}>
          <View
            style={{
              width: '90%',
              height: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '47%',
                height: '100%',
                justifyContent: 'space-evenly',
              }}>
              <ItemCard
                cardStyle={{
                  height: '50%',
                  width: '100%',
                  backgroundColor: '#FFF6EC',
                  borderRadius: 20,
                }}
                imageUrl={require('../assests/logo1.png')}
                imageStyle={{width: '70%', height: '60%'}}
                title="Listed properties"
                amount="10"
              />
              <ItemCard
                cardStyle={{
                  height: '40%',
                  width: '100%',
                  backgroundColor: '#E6E6FA',
                  borderRadius: 20,
                }}
                imageUrl={require('../assests/logo2.png')}
                imageStyle={{width: '70%', height: '60%'}}
                title="Tenant Enquires"
                amount="10"
              />
            </View>
            <View
              style={{
                width: '47%',
                height: '100%',
                justifyContent: 'space-evenly',
              }}>
              <ItemCard
                cardStyle={{
                  height: '40%',
                  width: '100%',
                  backgroundColor: '#E3F6F4',
                  borderRadius: 20,
                }}
                imageUrl={require('../assests/logo3.png')}
                imageStyle={{width: '70%', height: '60%'}}
                title="Active Tenants"
                amount="10"
              />
              <ItemCard
                cardStyle={{
                  height: '50%',
                  width: '100%',
                  backgroundColor: '#E3F3FF',
                  borderRadius: 20,
                }}
                imageUrl={require('../assests/logo4.png')}
                imageStyle={{width: '70%', height: '60%'}}
                title="Pending Dues"
                amount="10"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  upperView: {
    flex: 0.08,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  mainLogoStyle: {height: 33, width: 38, marginLeft: 8},
  mainView: {flex: 0.9},
  mainUpperView: {flex: 0.1, alignItems: 'center'},
  secondMainUpperView: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
  },
  upperTextView: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  helloText: {fontSize: 24, fontWeight: '600', color: '#000000'},
  morningText: {fontSize: 14, fontWeight: '400', color: '#000000'},
  buttonView: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonStyle: {
    backgroundColor: colors.button,
    height: '50%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addText: {fontSize: 12, fontWeight: '600', color: '#FFFFFF'},
  lowerFlex: {flex: 0.65, alignItems: 'center'},
  middleFlex: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const Data = [
  {
    id: 1,
    info: 'Esse reprehenderit sint proident consectetur dolor proident cillum minim sunt magna.',

    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 2,
    info: 'Esse reprehenderit sint proident consectetur dolor proident cillum minim sunt magna.',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 3,
    info: 'Esse reprehenderit sint proident consectetur dolor proident cillum minim sunt magna.',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 4,
    info: 'Esse reprehenderit sint proident consectetur dolor proident cillum minim sunt magna.',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 5,
    info: 'Esse reprehenderit sint proident consectetur dolor proident cillum minim sunt magna.',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
];
const App = () => {
  const flatListIndex = useRef(null);
  const renderData = ({item}) => {
    return (
      <View
        style={{
          // flex: 1,
          backgroundColor: 'red',
          // height: '100%',
          // width: '30%',
          // paddingHorizontal: 30,
          marginHorizontal: 15,
        }}>
        <View
          style={{
            // backgroundColor: 'yellow',
            width: 400,
            alignSelf: 'center',
            padding: 20,
          }}>
          <Text style={{fontSize: 25}}>{item.info}</Text>
        </View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.uri,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        // getItemLayout={(data, index) => {
        //   return {length: Data.length, index, offset: Data.length * index};
        // }}
        ref={flatListIndex}
        horizontal
        data={Data}
        renderItem={renderData}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          marginTop: 20,
          width: '50%',
        }}>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'red',
            borderRadius: 15,
          }}
        />
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'red',
            borderRadius: 15,
          }}
        />
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'red',
            borderRadius: 15,
          }}
        />
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'red',
            borderRadius: 15,
          }}
        />
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'red',
            borderRadius: 15,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default App;

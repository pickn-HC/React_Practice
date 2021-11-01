import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider, View, Text, ScrollView} from 'native-base';
import CategoryList from './src/Components/CategoryList';
import Content from './src/Components/Content';
import EnrollmentButton from './src/Components/EnrollmentButton';
import {SafeAreaView} from 'react-native-safe-area-context';

const WhosQuestion = ['전체보기', '내 질문 보기'];
const Category = [
  '전체',
  '보험금 청구',
  '상품 문의',
  '보장 분석',
  '병력 문의',
  '기타',
];

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{height: '100%', position: 'relative'}}>
        <View style={styles.tap1}>
          <CategoryList title={WhosQuestion} size={20} />
        </View>
        <View style={styles.tap2}>
          <CategoryList title={Category} size={15} />
        </View>
        <Content />
        <View style={styles.button}>
          <EnrollmentButton />
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  tap1: {
    justifyContent: 'center',
    left: 0,
    height: 70 /* dp */,
  },
  tap2: {
    left: 10,
    right: 10,
    height: 60,
    flexWrap: 'wrap',
  },
  content: {
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '95%',
    height: 50,
    alignSelf: 'center',
  },
});

export default App;

import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider, View, Text} from 'native-base';
import CategoryList from './src/components/CategoryList';
import Content from './src/components/Content';
import EnrollmentButton from './src/components/EnrollmentButton';

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
      <View>
        <View style={styles.tap1}>
          <CategoryList title={WhosQuestion} size={20} />
        </View>
        <View style={styles.tap2}>
          <CategoryList title={Category} size={15} />
        </View>
        <View style={styles.content}>
          <Content />
        </View>
        <View style={styles.button}>
          <EnrollmentButton />
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  tap1: {
    justifyContent: 'center',
    left: 10,
    height: '15%',
  },
  tap2: {
    left: 10,
    right: 10,
    height: '10%',
    flexWrap: 'wrap',
  },
  content: {
    height: '69%',
  },
  button: {},
});

export default App;

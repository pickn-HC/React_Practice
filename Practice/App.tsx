import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider, View, ScrollView} from 'native-base';
import CategoryList from './src/Components/CategoryList';
import Content from './src/Components/Content';
import EnrollmentButton from './src/Components/EnrollmentButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ContentItem} from './src/Assets/Data/data';

const WhosQuestion: Array<string> = ['전체보기', '내 질문 보기'];
const Category: Array<string> = [
  '전체',
  '보험금 청구',
  '상품 문의',
  '보장 분석',
  '병력 문의',
  '기타',
];

const App = () => {
  // function test(title: string) {
  //   ContentItem.map(item => {
  //     if (item.title === title) {
  //       item.questionAnswer = !item.questionAnswer;
  //     }
  //   });
  //   setContentItems(ContentItem);
  // }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{height: '100%', position: 'relative'}}>
        <View style={styles.tap1}>
          <CategoryList title={WhosQuestion} size={20} />
        </View>
        <View style={styles.tap2}>
          <CategoryList title={Category} size={15} />
        </View>
        <ScrollView style={[{marginBottom: 55}, styles.content]}>
          <Content items={ContentItem} />
        </ScrollView>
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
    left: 10,
    height: 70 /* dp */,
  },
  tap2: {
    left: 10,
    right: 10,
    height: 60,
    flexWrap: 'wrap',
  },
  content: {},
  button: {
    position: 'absolute',
    bottom: 5,
    width: '95%',
    height: 50,
    alignSelf: 'center',
  },
});

export default App;

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
  const [whichCategory, setWhichCategory] = useState(0);
  const [categoryLen, setCategoryLen] = useState(0);
  const [firstCategory, setFirstCategory] = useState(0);
  const [secondCategory, setSecondCategory] = useState(0);

  // function checkCategory(categoryNbr: number, categoryLen: number) {
  //   setWhichCategory(categoryNbr);
  //   setCategoryLen(categoryLen);
  // }

  // if (categoryLen === 2) {
  //   setFirstCategory(whichCategory);
  // } else {
  //   setSecondCategory(whichCategory);
  // }

  const [tabIndex, setTabIndex] = useState(0);
  const [cIndex, setCIndex] = useState(0);
  const [data, setData] = useState(ContentItem);

  function onChangeTabIndex(index: number, type: boolean) {
    if (type) {
        ContentItem.filter(item => {
          return item.tab === index;
        }),
    } else {
      
    }
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{height: '100%', position: 'relative'}}>
        <View style={styles.tap1}>
          <CategoryList
            title={WhosQuestion}
            size={20}
            type={true}
            onChangeIndex={onChangeTabIndex}
          />
        </View>
        <View style={styles.tap2}>
          <CategoryList
            title={Category}
            size={15}
            type={false}
            onChangeIndex={onChangeTabIndex}
          />
        </View>
        <ScrollView style={[{marginBottom: 55}, styles.content]}>
          <Content items={ContentItem} tab={tabIndex} cTab={cIndex} />
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

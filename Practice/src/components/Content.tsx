import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, View, Image} from 'native-base';

const iconTest1 = require('../Assets/Images/question.png');
const iconTest2 = require('../Assets/Images/question_fill.png');

interface IProps {
  items: IContentItemEle[];
}

interface IContentItemEle {
  title: string;
  questionAnswer: boolean;
  answerNumber: number;
}

function ChooseContent(items: IContentItemEle[], answerCheck: number) {
  let chooseItem: Array<any> = [];

  if (answerCheck === 0) {
    chooseItem = items;
  } else {
    const answerCheckBool: boolean = answerCheck === 1 ? true : false;
    const iconName: any = answerCheck === 1 ? iconTest1 : iconTest2;

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].questionAnswer === answerCheckBool) {
        chooseItem.push(items[i]);
      }
    }
  }
  return chooseItem;
}

function Content({items}: IProps) {
  const [answerCheck, setAnswerCheck] = useState(0);
  let chooseItem: Array<any> = [];
  const itemTmp: Array<any> = [];

  chooseItem = ChooseContent(items, answerCheck);
  // console.log(chooseItem, iconName);
  // for (let i = 0; i < chooseItem.length; i += 1) {
  //   itemTmp.push(
  //     <Button variant="outline" colorScheme="gray">
  //       <Image source={iconName} alt={'image select'} />
  //       <Text>{chooseItem[i].title}</Text>
  //     </Button>,
  //   );
  // }

  function Test(item: IContentItemEle) {
    return (
      <Button variant="outline" colorScheme="gray" key={item.title}>
        <Image
          source={item.questionAnswer ? iconTest1 : iconTest2}
          alt={'image select'}
        />
        <Text>{item.title}</Text>
      </Button>
    );
  }

  return (
    <View>
      <View style={styles.questionMark}>
        <Button
          bgColor="gray"
          onPress={() => {
            setAnswerCheck(1);
          }}>
          <Image source={iconTest1} alt={'image1'} />
          <Text>미완료</Text>
        </Button>
        <Button
          bgColor="gray"
          onPress={() => {
            setAnswerCheck(2);
          }}>
          <Image source={iconTest2} alt={'image2'} />
          <Text>답변완료</Text>
        </Button>
      </View>
      {chooseItem.map(item => Test(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  questionMark: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Content;

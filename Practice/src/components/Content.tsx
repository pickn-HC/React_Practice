import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Button, Text, View} from 'native-base';

const allIcon = require('../Assets/Images/all.png');
const questionIcon = require('../Assets/Images/question.png');
const answeredIcon = require('../Assets/Images/question_fill.png');

interface IProps {
  items: IContentItemEle[];
  // categoryNbr: number[];
  tab: number;
  cTab: number;
}

interface IContentItemEle {
  title: string; // 제목
  questionAnswer: boolean; // 답변여부
  answerNumber: number; // 댓글 수
  whoseQuestion: number; // 질문자 id 번호
  categoryNumber: number; // 질문 카테고리 번호
}

function ChooseContent(
  items: IContentItemEle[],
  tab: number,
  cTab: number,
  answerCheck: number,
) {
  let chooseItem: Array<any> = [];

  if (answerCheck === 0) {
    chooseItem = items;
  } else {
    const answerCheckBool: boolean = answerCheck === 1 ? true : false;

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].questionAnswer === answerCheckBool) {
        chooseItem.push(items[i]);
      }
    }
  }

  return chooseItem;
}

function Content({items, tab, cTab}: IProps) {
  const [answerCheck, setAnswerCheck] = useState(0);
  let chooseItem: Array<any> = [];
  chooseItem = ChooseContent(items, answerCheck, tab, cTab);

  function Test(item: IContentItemEle) {
    return (
      <Button variant="outline" colorScheme="gray" key={item.title}>
        {item.questionAnswer ? (
          <Image source={questionIcon} alt={'image select'} />
        ) : (
          <Image source={answeredIcon} alt={'image select'} />
        )}
        <Text>{item.questionAnswer ? 'true' : 'false'}</Text>
      </Button>
    );
  }

  return (
    <View>
      <View style={styles.questionMark}>
        <Button
          bgColor="gray"
          onPress={() => {
            setAnswerCheck(0);
          }}>
          <Image source={allIcon} alt={'show all item'} />
          <Text>전체보기</Text>
        </Button>
        <Button
          bgColor="gray"
          onPress={() => {
            setAnswerCheck(1);
          }}>
          <Image source={questionIcon} alt={'show unanswered item'} />
          <Text>미완료</Text>
        </Button>
        <Button
          bgColor="gray"
          onPress={() => {
            setAnswerCheck(2);
          }}>
          <Image source={answeredIcon} alt={'show answered item'} />
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

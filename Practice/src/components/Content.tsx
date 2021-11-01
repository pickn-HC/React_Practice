import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, View, Image} from 'native-base';

const iconTest1 = require('../Assets/Images/question.png');
const iconTest2 = require('../Assets/Images/question_fill.png');

function Content() {
  return (
    <View>
      <View style={styles.questionMark}>
        <Button bgColor="white">
          <Image source={iconTest1} />
        </Button>
        <Button bgColor="white">
          <Image source={iconTest2} />
        </Button>
      </View>
      <Button variant="outline" colorScheme="gray">
        <Image source={iconTest1} />
        <Text>
          급성심근경색 병력이 있는데 치매 보험 가입이 가능한지 궁금합니다.
        </Text>
      </Button>
      <Button variant="outline" colorScheme="gray">
        <Image source={iconTest1} />
        <Text>
          보험금 청구하려고 하는데 어떤 서류가 지금보다 더 필요한지 궁금합니다.
        </Text>
      </Button>
      <Button variant="outline" colorScheme="gray">
        <Image source={iconTest1} />
        <Text>
          Grid/Flex를 통해서 배치를 예쁘게 해야하는데 왜 이렇게 어려운지
          궁금합니다.
        </Text>
      </Button>
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

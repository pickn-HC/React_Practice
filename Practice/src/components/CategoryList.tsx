import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

function Texting(Props: {title: string[]; size: number}) {
  const [selected, setSelected] = useState(0);

  const content = [];
  let divider = ' | ';

  for (let i = 0; i < Props.title.length; i += 1) {
    if (i === Props.title.length - 1) {
      divider = '';
    }

    content.push(
      <View style={styles.button} key={i}>
        <TouchableOpacity
          onPress={() => {
            setSelected(i);
          }}
          style={styles.button}>
          <Text
            style={[
              {fontSize: Props.size},
              {color: selected === i ? 'red' : undefined},
            ]}>
            {Props.title[i]}
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: Props.size}}> {divider} </Text>
      </View>,
    );
  }

  return content;
}

function CategoryList(Props: {title: string[]; size: number}) {
  const content = Texting(Props);

  return <View style={styles.button}>{content}</View>;
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default CategoryList;

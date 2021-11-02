interface IContentItemEle {
  title: string; // 제목
  questionAnswer: boolean; // 답변여부
  answerNumber: number; // 댓글 수
  // whoseQuestion: number; // 질문자 id 번호
  // categoryNumber: number; // 질문 카테고리 번호
}

export const ContentItem: IContentItemEle[] = [
  {
    title: 'item1',
    questionAnswer: true,
    answerNumber: 1,
    // whoseQuestion: 3,
    // categoryNumber: 1,
  },
  {
    title: 'item2',
    questionAnswer: false,
    answerNumber: 1,
    // whoseQuestion: 4,
    // categoryNumber: 1,
  },
  {
    title: 'item3',
    questionAnswer: true,
    answerNumber: 1,
    // whoseQuestion: 1,
    // categoryNumber: 1,
  },
  {
    title: 'item4',
    questionAnswer: false,
    answerNumber: 1,
    // whoseQuestion: 2,
    // categoryNumber: 1,
  },
  {
    title: 'item5',
    questionAnswer: true,
    answerNumber: 1,
    // whoseQuestion: 3,
    // categoryNumber: 1,
  },
  {
    title: 'item6',
    questionAnswer: true,
    answerNumber: 1,
    // whoseQuestion: 1,
    // categoryNumber: 1,
  },
  {
    title: 'item7',
    questionAnswer: false,
    answerNumber: 1,
    // whoseQuestion: 3,
    // categoryNumber: 1,
  },
];

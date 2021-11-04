import React, { useState } from "react";
import _Subject from "./component/Subject";
import _ReadContent from "./component/ReadContent";
import _TOC from "./component/TOC";
import _Control from "./component/Control";
import _CreateContent from "./component/CreateContent";
import _UpdateContent from "./component/UpdateContent";

let _nbr: number = 0;
let _title,
  _desc: string = "";
let _article: any = null;
let last_content: number = 3;

// Subject에 대한 배열
interface SubjectType {
  title: string;
  sub: string;
}

const Subject: SubjectType[] = [{ title: "WEB", sub: "World Wide Web!" }];

// ReadContent에 대한 배열
interface ReadContentType {
  title: string;
  desc: string;
}

const ReadContent: ReadContentType[] = [
  { title: "Welcome", desc: "Hello, React!!" },
  { title: "HTML", desc: "HTML is HyperText Markup Language" },
  { title: "CSS", desc: "CSS is for design" },
  { title: "JavaScript", desc: "Language for Webpage Event" },
];

// TOC에 대한 배열
interface TOCType {
  id: number;
  title: string;
  desc: string;
}

const TOC: TOCType[] = [
  { id: 1, title: "HTML", desc: "HTML is HyperText Markup Language" },
  { id: 2, title: "CSS", desc: "CSS is for design" },
  { id: 3, title: "JavaScript", desc: "Language for Webpage Event" },
];

interface ModeType {
  mode: string;
  modeNbr: number;
}

const Mode: ModeType = { mode: "Read", modeNbr: -1 };

function App() {
  const [items_subject, setSubject] = useState<SubjectType[]>(Subject);
  const [items_readContent, setReadContent] =
    useState<ReadContentType[]>(ReadContent);
  const [items_TOC, setTOC] = useState<TOCType[]>(TOC);
  const [mode, setMode] = useState<ModeType>(Mode);

  let modeNow = mode.mode;
  let modeNbrNow = mode.modeNbr;

  if (modeNow === "Read") {
    _nbr = modeNbrNow + 1; // TOC와 ReadContent의 같은 값의 원소의 위치가 1씩 차이남
    _title = items_readContent[_nbr].title;
    _desc = items_readContent[_nbr].desc;
    _article = <_ReadContent title={_title} desc={_desc} />;
    console.log(_article);
  } else if (modeNow === "Create") {
    _article = (
      // eslint-disable-next-line react/jsx-pascal-case
      <_CreateContent
        onSubmit={function (newTitle: string, newDesc: string) {
          last_content = last_content + 1;
          // const tmp = {id: last_content, title: _title, desc: _desc};
          // TOC = [...TOC, tmp];
          console.log("TOC 확인 : ", items_TOC);
          items_TOC.push({ id: last_content, title: newTitle, desc: newDesc });
          items_readContent.push({ title: newTitle, desc: newDesc });

          setTOC([...items_TOC]);
          setReadContent([...items_readContent]);
        }}
      />
    );
  } else if (modeNow === "Update") {
    let content = items_TOC[_nbr - 1];
    _article = (
      // eslint-disable-next-line react/jsx-pascal-case
      <_UpdateContent
        item={content}
        onSubmit={function (_id: number, _title: string, _desc: string) {
          let contentTOC = Array.from(items_TOC);
          let contentReadContent = Array.from(items_readContent);

          contentTOC[content.id - 1] = {
            id: content.id,
            title: _title,
            desc: _desc,
          };
          contentReadContent[content.id] = { title: _title, desc: _desc };

          setTOC([...contentTOC]);
          setReadContent([...contentReadContent]);
        }}
      />
    );
  } else if (modeNow === "Delete") {
    let content = items_TOC[_nbr - 1];
    let content_nbr = content.id - 1;
    if (window.confirm("Really?")) {
      let contentTOC = Array.from(items_TOC);
      let contentReadContent = Array.from(items_readContent);

      contentTOC.splice(content_nbr, 1);
      contentReadContent.splice(content_nbr + 1, 1);

      setMode({ mode: "Read", modeNbr: -1 });
      setTOC([...contentTOC]);
      setReadContent([...contentReadContent]);

      alert("deleted!");
    }
  }

  return (
    <div className="App">
      <_Subject title={items_subject[0].title} sub={items_subject[0].sub} />
      <_TOC
        items={items_TOC}
        onChangePage={function (mode: any) {
          setMode(mode);
        }}
      />
      <_Control
        onChangeMode={function (mode: any) {
          setMode(mode);
        }}
      />
      {_article}
    </div>
  );
}

export default App;

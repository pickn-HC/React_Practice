import React, { useState } from "react";
import _TOC from "./components/TOC";
import _Subject from "./components/Subject";
import _Control from "./components/Control";
import _ReadContent from "./components/ReadContent";
import _CreateContent from "./components/CreateContent";
import _UpdateContent from "./components/UpdateContent";
import "./App.css";

let _nbr = 0;
let _title,
  _desc,
  _article = null;
let last_content = 3;

// Subject에 대한 배열
const Subject = [{ title: "WEB", sub: "World Wide Web!" }];

// ReadContent에 대한 배열
const ReadContent = [
  { title: "Welcome", desc: "Hello, React!!" },
  { title: "HTML", desc: "HTML is HyperText Markup Language" },
  { title: "CSS", desc: "CSS is for design" },
  { title: "JavaScript", desc: "Language for Webpage Event" },
];

// TOC에 대한 배열
const TOC = [
  { id: 1, title: "HTML", desc: "HTML is HyperText Markup Language" },
  { id: 2, title: "CSS", desc: "CSS is for design" },
  { id: 3, title: "JavaScript", desc: "Language for Webpage Event" },
];

function App() {
  // Subject에 대한 state
  // const [titleSub, settitleSub] = useState("WEB");
  // const [sub, setSub] = useState("World Wide Web!");

  // Subject/ReadContent/TOC/mode 에 대한 값 설정
  const [items_subject, setSubject] = useState(Subject);
  const [items_readContent, setReadContent] = useState(ReadContent);
  const [items_TOC, setTOC] = useState(TOC);
  const [mode, setMode] = useState(["Read", -1]);

  console.log(items_TOC);
  console.log(items_readContent);

  if (mode[0] === "Read") {
    _nbr = mode[1] + 1; // TOC와 ReadContent의 같은 값의 원소의 위치가 1씩 차이남
    _title = items_readContent[_nbr].title;
    _desc = items_readContent[_nbr].desc;
    _article = <_ReadContent title={_title} desc={_desc} />;
  } else if (mode === "Create") {
    _article = (
      // eslint-disable-next-line react/jsx-pascal-case
      <_CreateContent
        onSubmit={function (newTitle, newDesc) {
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
  } else if (mode === "Update") {
    let content = items_TOC[_nbr - 1];
    _article = (
      // eslint-disable-next-line react/jsx-pascal-case
      <_UpdateContent
        item={content}
        onSubmit={function (_id, _title, _desc) {
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
  } else if (mode === "Delete") {
    let content = items_TOC[_nbr - 1];
    let content_nbr = content.id - 1;
    if (window.confirm("Really?")) {
      let contentTOC = Array.from(items_TOC);
      let contentReadContent = Array.from(items_readContent);

      contentTOC.splice(content_nbr, 1);
      contentReadContent.splice(content_nbr + 1, 1);

      setMode("Welcome");
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
        onChangePage={function (mode) {
          setMode(mode);
        }}
      />
      <_Control
        onChangeMode={function (mode) {
          setMode(mode);
        }}
      />
      {_article}
    </div>
  );
}

export default App;

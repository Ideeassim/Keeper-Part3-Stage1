import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [titleValue, setTitle] = useState({
    name: "",
    content: "",
  });
  const [noteTitle, setNoteTitle] = useState("note");
  const [noteContent, setNoteContent] = useState("content");

  function titleHandler(event) {
    const nameOfTarget = event.target.name;
    const value = event.target.value;
    return setTitle((prevValue) => {
      if (nameOfTarget === "title") {
        return { name: value, content: prevValue.content };
      } else if (nameOfTarget === "content") {
        return { name: prevValue.name, content: value };
      }
    });
  }

  function addNote(titleValue) {
    return setNoteTitle(titleValue.name), setNoteContent(titleValue.content);
  }
  return (
    <div>
      <Header />
      <CreateArea
        Add={addNote}
        titleValue={titleValue}
        titleHandler={titleHandler}
        titleValueName={titleValue.name}
        titleValueContent={titleValue.content}
      />

      <Note key={1} title={noteTitle} content={noteContent} />
      <Footer />
    </div>
  );
}

export default App;

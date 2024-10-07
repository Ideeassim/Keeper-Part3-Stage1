import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.titleHandler}
          name="title"
          placeholder="Title"
          value={props.titleValueName}
        />
        <textarea
          onChange={props.titleHandler}
          name="content"
          placeholder="Take a note..."
          value={props.titleValueContent}
          rows="3"
        />
        <button type="button" onClick={() => props.Add(props.titleValue)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

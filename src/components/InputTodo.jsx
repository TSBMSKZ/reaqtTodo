import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disableFlag } = props;

  return (
    <div style={style}>
      <input
        disabled={disableFlag}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disableFlag} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

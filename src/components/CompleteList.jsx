import React from "react";

export const CompleteList = (props) => {
  const { todos, rtn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了済みのTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => rtn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

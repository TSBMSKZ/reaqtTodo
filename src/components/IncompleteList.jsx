import React from "react";

export const IncompleteList = (props) => {
  const { todos, comp, del } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => comp(index)}>完了</button>
              <button onClick={() => del(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

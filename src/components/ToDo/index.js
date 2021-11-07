import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Fade from "react-reveal/Fade";
import { Typography } from "@material-ui/core";

function ToIndex() {
  const dataTitle = useState("");
  const [todos, setTodos] = useState([]);
  const [payload, setPayload] = useState([]);
  const [pay, setPay] = React.useState([]);
  const [resetP, setResetP] = React.useState(true);
  const [resetI, setResetI] = React.useState(false);

  return (
    <div>
      <div align="center">
        <Typography variant="h5" gutterBottom>
          {dataTitle}
        </Typography>
        <div>
          <Typography variant="overline" display="block" gutterBottom>
            *. Add your ToDoList
          </Typography>
        </div>
      </div>
      <AddTodo
        makeTodos={(text) => {
          // console.log(text);
          setTodos([...todos, text]);
          setPay([
            ...pay,
            {
              text: text,
              check: "false",
              createdAt: "2021:12:12",
            },
          ]);
          setPayload({
            ...payload,
            text: text,
          });
          setResetI(true);
        }}
      />
      {pay
        ? pay.map((data, index) => {
            return data.check === "false" ? (
              <Fade>
                <Todo
                  todoNo={index}
                  text={data.text}
                  check={data.check}
                  createdAt={data.createdAt}
                  // setCheck={setCheck}
                  key={index}
                />
              </Fade>
            ) : null;
          })
        : null}
      {pay
        ? pay.map((data, index) => {
            return data.check === "true" ? (
              <Fade>
                <Todo
                  todoNo={index}
                  text={data.text}
                  check={data.check}
                  createdAt={data.createdAt}
                  // setCheck={setCheck}
                  key={index}
                />
              </Fade>
            ) : null;
          })
        : null}
    </div>
  );
}

export default ToIndex;

import React, { useEffect , useContext} from "react";
import {
  Card,
  Typography,
  Container,
  Checkbox,
  makeStyles,
} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import DeleteIcon from "@material-ui/icons/Delete";
import TimeAgo from "timeago-react";


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
}));
const Todo = ({ text, check, createdAt  }) => {
  const [color] = React.useState(["#f7fafc", "#e8f0f7", "#dae6f3", "#cbdcee"]);
  const [checked, setChecked] = React.useState(check === true ? true : false);
  
  const handleChange = (event) => {
    console.log(event);
    setChecked(event.target.checked);
  };

  const RemoveTodo =  () => {
  };

  const CheckTodo =  () => {
   
  };
  useEffect(() => {
    CheckTodo();
  }, [checked]);
  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={
          checked === true
            ? { marginTop: 10, background: "#f1f1f1" }
            : { marginTop: 10, background: color[3] }
        }
      >
        <CardHeader
          avatar={
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
              checked={checked === true ? true : false}
              onClick={()=>{
                checked === true ? setChecked(false)  : setChecked(true)
              }}
            />
          }
          action={
            <DeleteIcon style={{ cursor: "pointer" }} onClick={RemoveTodo} />
          }
          title={
            <Typography
              style={
                checked ===true
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {text}
            </Typography>
          }
          subheader={
            createdAt && (
              <p style={{ textAlign: "left", color: "gray" }}>
                <TimeAgo datetime={createdAt} />
              </p>
            )
          }
        />
      </Card>
    </Container>
  );
};

export default Todo;

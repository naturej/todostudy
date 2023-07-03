import { useDispatch, useSelector } from "react-redux";
import OneTodo from "./one-todo";
import { useEffect } from "react";
import { getTodo } from "reducer/todoSlice";
import styled from "styled-components";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const { loading: getTodoLoading } = useSelector(
    (state) => state.todo.getTodoState
  );
  const { loading: addTodoLoading } = useSelector(
    (state) => state.todo.addTodoState
  );

  const getTodoList = () => {
    dispatch(getTodo());
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      {getTodoLoading || addTodoLoading ? (
        <EmptyList>loading...</EmptyList>
      ) : (
        <ListWrap>
          {todoList.length > 0 ? (
            todoList.map((todo) => (
              <List key={todo.id}>
                <OneTodo todo={todo} />
              </List>
            ))
          ) : (
            <EmptyList>할 일이 없습니다</EmptyList>
          )}
        </ListWrap>
      )}
    </>
  );
};

export default TodoList;

const EmptyList = styled.div`
  padding: 80px 0;
  text-align: center;
`;

const ListWrap = styled.ul`
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  list-style: none;
`;

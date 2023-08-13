import React, {useState, useEffect} from 'react'
import "./App.css"



function App(){

const [todo, setTodo] = useState([ ])
const [todoId, setTodoId] = useState(0)

const handleSumit = (todoText, todoTime) =>{
  setTodo([...todo, {
    todoText: todoText,
    todoId: todoId,
    todoTime: todoTime,
    todoDone: false,

  }])
  setTodoId(todoId + 1)
}

const handleToggle = (todoId) => {
  setTodo(
  todo.map((item, index) => {
    return item.todoId === todoId ? {...item, todoDone: !item.todoDone} : item
  })

  )
}

  const handleDelete = (todoId) => {
    setTodo(
    todo.filter((item) => {
      return item.todoId !== todoId
    })
  )

}

useEffect(() =>{
  localStorage.setItem("todo", JSON.stringify(todo) )
}, [todo])

useEffect(() => {
  const defaultTodo = JSON.parse(localStorage.getItem("todo"))

  if(defaultTodo) return;

  setTodo(defaultTodo)

  if(defaultTodo.length !== 0){
    setTodoId(defaultTodo[defaultTodo.length - 1].todoId + 1
    )
    }

}, [])


return (
  <div className="app">
    <div className="center-container">
      <h1>스케줄</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todoText = e.target.todo.value;
          const todoTime = e.target.time.value;
          handleSumit(todoText, todoTime); // 수정: todoTime 변수 사용
          e.target.todo.value = '';
          e.target.time.value = '';
        }}
      >
        <div className="form-container">
          <input type="text" placeholder="입력하세요" name="todo" className="input-field" />
          <input type="time" name="time" className="time-field" />
          <button type="submit" className="submit-button">입력</button>
        </div>
      </form>

      <ul className="할일 목록"> {/*  todo-list 클래스 추가 */}
        {todo.map((item) => (
          <li key={item.todoId} className={`todo-item ${item.todoDone ? 'done' : ''}`}>
            <span
              onClick={() => {
                handleToggle(item.todoId);
              }}
              style={item.todoDone ? { textDecoration: 'line-through' } : {}}
            >
              {item.todoText}
            </span>
            <span
              className="delete-button"
              onClick={() => {
                handleDelete(item.todoId);
              }}
            >
              x
            </span>
            <span className="todo-time">{item.todoTime}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}



export default App
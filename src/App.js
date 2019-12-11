import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckBox from "./components/CheckBox";
import todoData from "./data/todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: todoData };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    const todoComponents = this.state.todos.map(todoItem => (
      <CheckBox
        key={todoItem.id}
        item={todoItem}
        handleChange={this.handleChange}
      />
    ));

    return (
      <div className="container-fluid">
        <Header />
        {todoComponents}
        <Footer />
      </div>
    );
  }

  handleChange(id) {
    //update the state of the clicked to completed
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      });
      return { todos: updatedTodos };
    });
  }
}

export default App;

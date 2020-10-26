import React from "react";

class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      task: "",
      list: [],
    };
  }

  updateInput(value) {
    this.setState({
      task: value,
    });
  }

  addItem() {
    if (this.state.task !== "") {
      const task = {
        id: Math.random(),
        value: this.state.task,
      };

      const list = [...this.state.list];
      list.push(task);

      this.setState({
        list,
        task: "",
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];

    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      list: updateList,
    });
  }

  render() {
    return (
      <>
        <div>
          <div>
            <h1>To-Do List</h1>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={(e) => this.updateInput(e.target.value)}
            />

            <button onClick={() => this.addItem()}>Add Task</button>
          </div>
          <div>
            <div>
             
              {this.state.list.map((item) => {
                return (
                  <div>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Todo;

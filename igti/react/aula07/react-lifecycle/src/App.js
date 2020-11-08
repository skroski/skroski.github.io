import React, { Component } from "react";
import Toggle from "./components/toggle/Toggle";
import Users from "./components/users/Users";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    const res = await fetch(
      "https://randomuser.me/api/?seed=rush&nat=br&results=10"
    );
    const json = await res.json();
    this.setState({
      users: json.results,
    });
  }



  handleShowUsers = (isChecked) => {
      //console.log(event.target.checked);
      this.setState({showUsers: isChecked });
  }

  render() {
    const { showUsers, users} = this.state;
    // console.log(showUsers);
    return (
      <div>
        <h3>React LifeCycle</h3>
      <Toggle 
      description="Mostrar usuários" 
      enabled={showUsers} 
      onToggle={this.handleShowUsers}
      ></Toggle>
        <hr />
        {showUsers && <Users users={users} />}
      </div>
    );
  }
}

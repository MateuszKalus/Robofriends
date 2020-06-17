import React from "react";
import CardList from './CardList'
import SearchBox from './SearchBox'
import robots from "./robots";
import Scroll from './Scroll';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    componentDidMount() {

    }

    onSearchChange = (event) => {
        const input_value = event.target.value;
        this.setState({searchfield: input_value});
        console.log("w funkcji: ", this.state.searchfield)
    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        console.log(this.state.searchfield)
        return (
            <div className='tc'>
                <h1 className='f1-l'>Robofriends</h1>
                <SearchBox func={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>

            </div>
        )

    }
}

export default App
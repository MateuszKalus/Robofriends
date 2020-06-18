import React from "react";
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }



    onSearchChange = (event) => {
        const input_value = event.target.value;
        this.setState({searchfield: input_value});
    }

    render() {
        const {searchfield, robots} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return (
            <div className='tc selectDisable main'>
                <div className='web-title'>
                    <div className='ddd'></div>
                </div>
                <SearchBox func={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>

            </div>
        )

    }
}

export default App
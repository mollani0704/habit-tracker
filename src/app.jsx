import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        habits: [
            { id: 0, name: 'reading', count: 5 },
            { id: 1, name: 'running', count: 2 },
            { id: 2, name: 'coding', count: 3 },
        ],
    };

    handleAdd = name => {
        const habits = [
            ...this.state.habits,
            { id: Date.now(), name: name, count: 0 },
        ];
        this.setState({ habits });
    };

    handleIncrement = habit => {
        console.log(habit);
        const habits = this.state.habits.map(item => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 };
            }
            return item;
        });
        this.setState({ habits });
    };

    handleDecrement = habit => {
        const habits = this.state.habits.map(item => {
            if (item.id === habit.id) {
                const count = habit.count - 1;
                return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
        });
        this.setState({ habits });
    };

    handleDelete = habit => {
        const data = this.state.habits;
        const habits = data.filter(item => item.id !== habit.id);
        this.setState({ habits });
    };

    resetCount = () => {
        const habits = this.state.habits.map(habit => {
            if (habit.count !== 0) {
                return { ...habit, count: 0 };
            }
            return habit;
        });
        this.setState({ habits });
    };

    render() {
        return (
            <>
                <Navbar
                    totalCount={
                        this.state.habits.filter(item => item.count > 0).length
                    }
                />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                />
                <button className="habits-reset" onClick={this.resetCount}>
                    Reset All
                </button>
            </>
        );
    }
}

export default App;

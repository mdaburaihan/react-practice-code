import React, { Component } from 'react'
import Counter from './Counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 0, value: 4 },
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 }
        ]
    }

    handleIncrement = (counterId) => {
       const findIndex = this.state.counters.findIndex(obj => obj.id === counterId)
       const counters = this.state.counters;
       counters[findIndex].value++;
       this.setState({ counters })
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(obj => obj.id !== counterId)
        this.setState({ counters })
    }

    render () {
        return (
            <div>
                {
                    this.state.counters.map(counter => (
                        <Counter key={counter.id} 
                        onIncrement={this.handleIncrement} 
                        onDelete={this.handleDelete} 
                        value={counter.value} 
                        counter={counter} 
                        id={counter.id}>
                            <h4>Counter #{counter.id}</h4>
                        </Counter>
                    ))
                }
            </div>
        )
    }
}

export default Counters;
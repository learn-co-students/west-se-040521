import React, { Component } from 'react'

export default class WalletForm extends Component {

    state = {
        amount: ''
    }

    handleChange = e => {
        console.log(e.target.amount)
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addMoney(this.state)
        this.setState({
            amount: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>ADD MONEY</label>
                    <input 
                        name="amount" 
                        value={this.state.amount} 
                        placeholder="enter an amount" 
                        type="text" 
                        onChange={this.handleChange} 
                    />
                    <button type='submit'>$$$</button>
                </form>
            </div>
        )
    }
}

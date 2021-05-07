import React from 'react'

class PaintingForm extends React.Component{

    constructor(){
        super()
        this.state = {
            image: "",
            title: "",
            artist: "",
            date: "",
            width: "",
            height: ""
        }
    }

    componentWillUnmount(){
        console.log("PaintingForm: ComponentWillUnmount")
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPainting(this.state)
    }

    render(){
    return(
    <div>
        <h1> Add a new Painting</h1>
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            name="image" 
            placeholder="ImgURL"
            value={this.state.image} 
            onChange={this.handleChange}/> <br/>

            <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={this.state.title}
            onChange={this.handleChange}/><br/>

            <input 
            type="text" 
            name="artist" 
            placeholder="Artist Name" 
            value={this.state.artist}
            onChange={this.handleChange}/><br/>

            <input 
            type="text" 
            name="date" 
            placeholder="date" 
            value={this.state.date}
            onChange={this.handleChange}/><br/>

            <input 
            type="text" 
            name="width" 
            placeholder="width"
            value={this.state.width} 
            onChange={this.handleChange}/><br/>

            <input 
            type="text" 
            name="height" 
            placeholder="height"
            value={this.state.height}
            onChange={this.handleChange}/><br/>

            <input type="submit" value="add new painting"/>
        </form>

    </div>)
    }

}

export default PaintingForm

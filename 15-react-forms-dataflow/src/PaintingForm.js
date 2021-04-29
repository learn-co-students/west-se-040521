import React from 'react'

class PaintingForm extends React.Component{

    render(){
    return(
    <div>
        <h1> Add a new Painting</h1>
        <form>
            <input 
            type="text" 
            name="image" 
            placeholder="ImgURL"/> <br/>

            <input 
            type="text" 
            name="title" 
            placeholder="Title"/><br/>

            <input 
            type="text" 
            name="artist" 
            placeholder="Artist Name"/><br/>

            <input 
            type="text" 
            name="date" 
            placeholder="date"/><br/>

            <input 
            type="text" 
            name="width" 
            placeholder="width"/><br/>

            <input 
            type="text" 
            name="height" 
            placeholder="height"/><br/>

            <input type="submit" value="add new painting"/>
        </form>

    </div>)
    }

}

export default PaintingForm

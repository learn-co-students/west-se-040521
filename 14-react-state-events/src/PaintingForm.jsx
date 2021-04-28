import React, { Component } from 'react';

class PaintingForm extends Component {
    render() {
        return (
            <div>
                <h1>Add a New Painting</h1>
                <form>
                    <input type="text" placeholder="ImgURL" /><br/>
                    <input type="text" placeholder="Title" /><br/>
                    <input type="text" placeholder="Artist Name" /><br/>
                    <input type="text" placeholder="date" /><br/>
                    <input type="text" placeholder="width" /><br/>
                    <input type="text" placeholder="height" /><br/>
                </form>
            </div>
        );
    }
}

export default PaintingForm;

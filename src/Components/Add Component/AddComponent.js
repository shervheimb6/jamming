import React from 'react';
import './AddComponent.js';

class car extends React.Component  {

    constructor()  {
        super(props);
        this.state = {color:red};
    }

    render()  {
    return  <h3>Hello world, you are {this.state.color}</h3>
    }

}

export default AddComponent;
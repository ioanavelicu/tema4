import React, { Component, useState } from "react";

class RobotForm extends Component {
    render() {
        const {onAdd} = this.props
        let name, type, mass;

        const add = (e) => {
            onAdd({
                name,
                type,
                mass
            })
        }

        return(
            <div>
                <input type='text' id='name' onChange={(e) => name = e.target.value}/>
                <input type='text' id='type' onChange={(e) => type = e.target.value}/>
                <input type='text' id='mass' onChange={(e) => mass = e.target.value}/>
                <input type='button' value='add' onClick={add}/>
            </div>
        )
    }
}

export default RobotForm
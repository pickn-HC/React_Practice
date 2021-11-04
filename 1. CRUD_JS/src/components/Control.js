import React from 'react';

function Control(props) {
    return (
        <ul>
            <li><a href="/create" onClick={function(e) {
                e.preventDefault();
                props.onChangeMode("Create");
            }}>Create</a></li>
            <li><a href="/update" onClick={function(e) {
                e.preventDefault();
                props.onChangeMode("Update");
            }}>Update</a></li>
            <li><input onClick={function(e) {
                e.preventDefault();
                props.onChangeMode("Delete");
            }} type="button" value="Delete"></input></li>

        </ul>
    );
}



export default Control;
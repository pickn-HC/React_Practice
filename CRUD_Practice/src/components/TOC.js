import React from 'react';

function TOC(props) {
    const temp = [];

    for (let i=0; i<props.items.length; i++){
        temp.push(<li key={i}><a href="/" 
        onClick={function(e) {
            e.preventDefault();
            props.onChangePage(["Read", i]);
        }}>{props.items[i].title}</a></li>)
    }
    
    return (
        <nav>
            <ul>
                {temp}
            </ul>
        </nav>
    );
}

export default TOC;
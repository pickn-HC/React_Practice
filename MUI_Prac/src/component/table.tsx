import React from "react";

function Table() {
    let arr: number[] = [1, 123, 4235, 23, 1, 52, 31];
    let ret = arr.map(
      (value: number, index: number): string =>
        "index is ${index} and value is ${value}"
    );
    console.log(ret);
    
//     return (
    
//   );
}

export default Table;

import React from 'react';

export const Timer = ({titleID, title, minID, lengthID, length, addID, onClick}) => {

    return (
        <div className="length-control">
          <div id={titleID}>{title}</div>
          <button
            className="btn-level"
            id={minID}
            onClick={onClick}
            value="-"
          >
            -
          </button>
          <div className="btn-level" id={lengthID}>
            {length}
          </div>
          <button
            className="btn-level"
            id={addID}
            onClick={onClick}
            value="+"
          >
            +
          </button>
        </div>
      );
    }

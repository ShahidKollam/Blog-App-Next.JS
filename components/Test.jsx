import React from "react";

const Test = () => {
    return (
        <div className="flex flex-col">
            <div>First Child</div>
            <div>Second Child</div>
            <div className="last:-order-1">Third Child (should be moved to the first position)</div>
        </div>
    );
};

export default Test;

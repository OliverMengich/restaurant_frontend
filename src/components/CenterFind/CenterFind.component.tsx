import React from 'react';
import centerFindStyles from './CenterFind.module.css';
function CenterFindComponent() {
    return (
        <div className={centerFindStyles["home-body-info"]}>
            <div style={{ float: "left" }}>
                <h1>
                    <span style={{ color: "yellow" }}>L&apos;Assiette</span>{" "}
                    Restaurant
                </h1>
                <input/>
            </div>
        </div>
    );
}

export default CenterFindComponent;
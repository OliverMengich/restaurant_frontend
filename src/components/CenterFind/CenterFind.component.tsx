import React from 'react';
import centerFindStyles from './CenterFind.module.css';
function CenterFindComponent() {
    return (
        <div className={centerFindStyles["home-body-info"]}>
            <div className={centerFindStyles.select}>
                <h1>
                    <span style={{ color: "yellow" }}>What are you</span>{" "}
                    Looking for?
                </h1>
                <select>
                    <option>Single Room</option>
                    <option>Double Room</option>
                    <option>Twin Room</option>
                </select>
                <select>
                    <option>Single Room</option>
                    <option>Double Room</option>
                    <option>Twin Room</option>
                </select>
            </div>
            <div className={centerFindStyles.finder}>
                <form>
                    <div>    
                        <input type="text" name="" id="" placeholder='Keywords, name, date'/>
                    </div>
                    <button className={centerFindStyles.btn} type="submit">SEARCH</button>
                </form>
            </div>
        </div>
    );
}

export default CenterFindComponent;
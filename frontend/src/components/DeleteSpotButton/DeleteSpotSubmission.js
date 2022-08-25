import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './DeleteSpotSubmission.css'
import DeleteSpotConfirmed from "./DeleteSpotConfirmed";

function DeleteSpotSubmission () {
    const [menu, setMenu] = useState(false);
    const activeSpot = useSelector(state => state.spots.activeSpot)


    const toggleMenu = () => {
        setMenu(current => !current)
      }

    return (
        <div>
            <div className="delete-button" onClick={toggleMenu} >
                Delete Spot
            </div>
            {menu && (
                <div className="delete-dropdown">
                    Are you sure you want to permanently delete this spot?
                    <div className="buttons">
                        <div>
                            <DeleteSpotConfirmed id={activeSpot.id}/>
                        </div>
                        <div onClick={toggleMenu}>Cancel</div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default DeleteSpotSubmission
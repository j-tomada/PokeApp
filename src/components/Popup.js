import React from 'react'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import './Popup.css'

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    <CloseTwoToneIcon />
                </button>
                { props.children }
            </div>
        </div>
    ) : "";
}
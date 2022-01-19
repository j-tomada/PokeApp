import React from 'react'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { IconButton } from '@mui/material'
import './Popup.css'

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <IconButton className="close-btn" onClick={() => props.setTrigger(false)}>
                    <CloseTwoToneIcon />
                </IconButton>
                { props.children }
            </div>
        </div>
    ) : <div></div>;
}
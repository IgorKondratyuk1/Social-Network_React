import React from "react";
import { useState, useEffect } from "react";

const ProfileStatusHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {   !editMode &&
                <div>
                    <span>Status: </span>
                    <span onDoubleClick={activateEditMode}>{status || "-----"}</span>
                </div>
            }
            {   editMode &&
                <div>
                    <span>Status: </span>
                    <input onChange={onChangeStatus} 
                        autoFocus={true} 
                        onBlur={deactivateEditMode} 
                        type="text" 
                        value={status} />
                </div>
            }
        </>
    )
}

export default ProfileStatusHooks;

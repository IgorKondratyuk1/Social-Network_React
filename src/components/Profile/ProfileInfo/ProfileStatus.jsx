import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
     
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode &&
                        <div>
                            <span>Status: </span>
                            <span onDoubleClick={ () => { this.activateEditMode() } }>{this.state.status || "-----"}</span>
                        </div>
                }

                {
                    this.state.editMode &&
                        <div>
                            <input onChange={(e) => { this.onChangeStatus(e) }} autoFocus={true} onBlur={() => { this.deactivateEditMode() }} type="text" value={this.state.status} />
                        </div>
                }
            </>
        )
    };
}

export default ProfileStatus;

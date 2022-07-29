import { connect } from "react-redux";
import Dialogs from './Dialogs';
import { sendMessage } from "../../redux/dialogsReducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Dialogs);
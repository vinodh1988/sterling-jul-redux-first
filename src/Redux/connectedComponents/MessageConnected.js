import Message from '../../Components/Message';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { messageAction } from '../actions/messageAction';

const mapStatetoProps = (state) => {
    return {  message: state.first.message};
}

const mapActionToProps = (dispatch) => {
    return bindActionCreators({changeMessage:messageAction},dispatch);
}

 export const MessageConnected = connect(mapStatetoProps,mapActionToProps)(Message);
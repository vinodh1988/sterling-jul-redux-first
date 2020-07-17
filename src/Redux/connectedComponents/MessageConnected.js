import Message from '../../Components/Message';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { messageAction } from '../actions/messageAction';
import Message2 from '../../Components/Message2';

const mapStatetoProps = (state) => {
    return {  message: state.first.message};
}

const mapStateToProps2 = (state) =>{
    return { message: state.second.message};
}

const mapActionToProps = (dispatch) => {
    return bindActionCreators({changeMessage:messageAction},dispatch);
}

 export const MessageConnected = connect(mapStatetoProps,mapActionToProps)(Message);
 export const MessageConnected2 = connect(mapStateToProps2,mapActionToProps)(Message2)
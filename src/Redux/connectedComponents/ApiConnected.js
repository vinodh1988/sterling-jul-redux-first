
import {connect} from "react-redux";
//import { bindActionCreators } from 'redux';
import Api from '../../Components/Api'

const mapStatetoProps = (state) => {
    return {  people : state.first.people};
}
/*
const mapActionToProps = (dispatch) => {
    return bindActionCreators({changeMessage:messageAction},dispatch);
}
*/

 export const ApiConnected = connect(mapStatetoProps,null)(Api);
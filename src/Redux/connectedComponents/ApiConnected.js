
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import Api from '../../Components/Api'
import { writePeopleAction } from "../actions/peopleAction";

const mapStatetoProps = (state) => {
    return {  people : state.first.people};
}

const mapActionToProps = (dispatch) => {
    return bindActionCreators({storePerson:writePeopleAction},dispatch);
}


 export const ApiConnected = connect(mapStatetoProps,mapActionToProps)(Api);
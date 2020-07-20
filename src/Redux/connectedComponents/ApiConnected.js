
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import Api from '../../Components/Api'
import { writePeopleSaga } from "../actions/peopleAction";
//import { writePeopleAction } from "../actions/peopleAction";

const mapStatetoProps = (state) => {
    return {  people : state.first.people};
}

const mapActionToProps = (dispatch) => {
    return bindActionCreators({storePerson:writePeopleSaga},dispatch);
}


 export const ApiConnected = connect(mapStatetoProps,mapActionToProps)(Api);
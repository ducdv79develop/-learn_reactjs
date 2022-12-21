import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//Import action dùng để dispatch
import { actAddNote } from './../../actions/action';

function Home() {
    return (
        <div>
            <h1> Home Page</h1>
            <Link to="/admin">Admin / </Link>
            <Link to="/user">User / </Link>
            <Link to="/404">404 / </Link>
        </div>
    );
};

//Gán dispatch thành props
const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (content) => {
            dispatch(actAddNote(content))
        }
    }
}

//Gán giá trị của state thành props
const mapStateToProps = (state, ownProps) => {
    return {
        note: state.note
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
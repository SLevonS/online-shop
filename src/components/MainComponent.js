import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFirstName, changeSecondName } from '../store/action';

class MainComponent extends React.Component{
    render(){
        const { firstName, secondName, changeFirstName, changeSecondName} = this.props;
        return <div>
            <div>
                <input
                    type="text"
                    placeholder="FirstName"
                    value={firstName}
                    onChange={event => {
                        changeFirstName(event.target.value)
                    }}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="SecondName"
                    value={secondName}
                    onChange={event => {
                        changeSecondName(event.target.value)
                    }}
                />
            </div>
            <div>{`${firstName} ${secondName}`}</div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    }
};
const mapActionsToProps = (dispatch) => {
    return{
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
};
export default connect(mapStateToProps, mapActionsToProps)(MainComponent);

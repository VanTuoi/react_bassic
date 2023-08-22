import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import Logo from "../../assets/images/LogoChange.jpg";
import { connect } from "react-redux";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     console.log('>>>check time out');
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    handleOnclikDeleteUser = (user) => {
        console.log('check user delete>>> ', user);
        this.props.deleteUserRedux(user);
    }
    handleOnclikCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>>check props', this.props)
        let ListUsers = this.props.dataRedux
        return (
            <>
                <div> This is page Home</div>
                <div>
                    {/* <img src={Logo} /> */}
                </div>
                <div>
                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <span onClick={() => this.handleOnclikDeleteUser(item)}>X</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleOnclikCreateUser()}> Add new</button>
                </div >
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
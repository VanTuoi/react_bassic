import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import Logo from "../../assets/images/LogoChange.jpg";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     console.log('>>>check time out');
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    render() {
        console.log('>>>check props', this.props)
        return (
            <>
                <div> This is page Home</div>
                <div>
                    <img src={Logo} />
                </div>
            </>
        )
    }
}
// export default withRouter(Home);
export default Color(Home);
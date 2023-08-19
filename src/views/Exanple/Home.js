import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

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
            </>
        )
    }
}
// export default withRouter(Home);
export default Color(Home);
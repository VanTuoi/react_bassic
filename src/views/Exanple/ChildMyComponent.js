import React from 'react';
import './Demo.scss'

class ChildMyComponent extends React.Component {

    state = {
        showJob: false,
    };

    handleShowHire = () => {
        this.setState({
            showJob: !this.state.showJob,
        })
    }
    handleOnClickDeleteJob = (job) => {
        // alert('click me');
        console.log('>>> handleOnClickDeleteJob: ', job)
        this.props.deleteAJob(job);
    }

    render() {
        let { arrayJob } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJob = true' : 'showJob = false'
        console.log('>>> check conditional', check);
        return (
            <>
                {showJob === false ?
                    <div>
                        <button
                            className='btn-show'
                            onClick={() => this.handleShowHire()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-list'>ChildMyComponent
                            {
                                arrayJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></><span><button onClick={() => this.handleOnClickDeleteJob(item)}>x</button></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHire()}>Hire</button></div>
                    </>
                }
            </>
        )
    }
}
// let ChildMyComponent = (props) => {
//     console.log(props);
//     let { first_name, last_name, arrayJob } = props;
//     return (
//         <>
//             <div className='job-list'>ChildMyComponent - {first_name} - {last_name}
//                 {
//                     arrayJob.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }


export default ChildMyComponent;
import React from 'react';
import ChildMyComponent from './ChildMyComponent';
import AddComponent from './AddComponent';


class MyComponent extends React.Component {


    state = {
        arrayJob: [
            { id: 'abc1', title: 'Developer', salary: 500 },
            { id: 'abc2', title: 'Tester', salary: 400 },
            { id: 'abc3', title: 'Project manager', salary: 1000 },
        ]
    };
    addNewJob = (job) => {
        console.log('check job form chirdren', job);
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        })
    }

    deleteAJob = (job) => {
        let currenJob = this.state.arrayJob;
        currenJob = currenJob.filter(item => item.id !== job.id);               //  loc phan tu can xoa
        this.setState({
            arrayJob: currenJob,
        })
    }
    componentDidUpdate(prevProps, preState) {
        console.log('>>> run comonennet DidUpdate', 'prev State: ', preState, 'currren state', this.state)
    }
    componentDidMount() {
        console.log('>>> run component didMount')
    }

    // re-render: khi thay doi gia tri
    render() {
        console.log(this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildMyComponent
                    name='child one'
                    arrayJob={this.state.arrayJob}
                    deleteAJob={this.deleteAJob}
                />

            </>
        )
    }
}

export default MyComponent;
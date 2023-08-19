import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeJobTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('this is null');
            return null;
        }
        console.log('This data input ', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeJobTitle(event)}
                />
                <br />
                <label htmlFor="lname">salary:</label>
                <br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br />
                <br />
                <input
                    type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }

}

export default AddComponent;
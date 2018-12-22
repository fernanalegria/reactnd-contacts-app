import React, { Component } from 'react';

class CreateContactDetails extends Component {
    state = {
        name: '',
        handle: ''
    };

    updateForm = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    isDisabled = () => {
        return this.state.name === '' || this.state.handle === '';
    };

    render() {
        const { name, handle } = this.state;
        return (
            <div className='create-contact-details'>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={this.updateForm}
                />
                <input
                    type='text'
                    name='handle'
                    placeholder='Handle'
                    value={handle}
                    onChange={this.updateForm}
                />
                <button disabled={this.isDisabled()}>Add Contact</button>
            </div>
        );
    }
}

export default CreateContactDetails;

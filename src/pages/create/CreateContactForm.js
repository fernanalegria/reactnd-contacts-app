import React, { Component } from 'react';
import ImageInput from '../../common/ImageInput';
import serializeForm from 'form-serialize';
import CreateContactDetails from './CreateContactDetails';

class CreateContactForm extends Component {
    handleForm = event => {
        event.preventDefault();
        const values = serializeForm(event.target, { hash: true });
        values.handle = `@${values.handle}`;
        if (this.props.onCreateContact) {
            this.props.onCreateContact(values);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleForm} className='create-contact-form'>
                <ImageInput
                    className='create-contact-avatar-input'
                    name='avatarURL'
                    maxHeight={64}
                />
                <CreateContactDetails />
            </form>
        );
    }
}

export default CreateContactForm;

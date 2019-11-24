import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ValidatedDatePicker from '../commons/ValidatedDatePicker';

class CandidateFormContainer extends Component {
  state = {
    name: '',
    lastname: '',
    id: '',
    birthday: '',
    email: '',
    github: ''
  };

  handleChange = (event, key) => {
    event.preventDefault();
    this.setState({ [key]: event.target.value });
  };

  handleDateChange = (birthday) => {
    this.setState({ birthday });
  };

  render() {
    const { submit } = this.props;
    const { name, lastname, id, birthday, email, github } = this.state;

    return (
      <ValidatorForm
        className="form-container "
        ref="form"
        onSubmit={(e) => submit(e, this.state)}
        onError={(errors) => console.log(errors)}
      >
        <div className="text-validator-container">
          <TextValidator
            label="Name"
            onChange={(e) => this.handleChange(e, 'name')}
            name="name"
            value={name}
            validators={['required']}
            errorMessages={['this field is required']}
          />
        </div>
        <div className="text-validator-container">
          <TextValidator
            label="Last Name"
            onChange={(e) => this.handleChange(e, 'lastname')}
            name="lastname"
            value={lastname}
            validators={['required']}
            errorMessages={['this field is required']}
          />
        </div>
        <div className="text-validator-container">
          <TextValidator
            label="Id"
            onChange={(e) => this.handleChange(e, 'id')}
            name="id"
            value={id}
            validators={['required', 'isNumber']}
            errorMessages={['this field is required', 'Invalid number']}
          />
        </div>
        <div className="text-validator-container">
          <TextValidator
            label="Email"
            onChange={(e) => this.handleChange(e, 'email')}
            name="email"
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
        </div>
        <div className="text-validator-container">
          <TextValidator
            label="Github"
            onChange={(e) => this.handleChange(e, 'github')}
            name="github"
            value={github}
            validators={['required']}
            errorMessages={['this field is required']}
          />
        </div>
        <div className="text-validator-container">
          <ValidatedDatePicker
            label="Birthday"
            onChange={this.handleDateChange}
            name="birthday"
            value={birthday ? birthday : null}
            validators={['required']}
            errorMessages={['date is required']}
            format="dd/MM/yyyy"
          />
        </div>
        <div className="create-btn">
          <Button type="submit">Consult Candidate</Button>
        </div>
      </ValidatorForm>
    );
  }
}

export default CandidateFormContainer;

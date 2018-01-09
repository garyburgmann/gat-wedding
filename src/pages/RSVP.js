import React, { Component } from 'react';
import { Button, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {
  Form,
  StyledText,
  StyledTextArea,
  StyledRadio,
  StyledRadioGroup,
  StyledSelect,
  StyledCheckbox
} from 'react-form';
require('./rsvp.css');


const statusOptions = [
  {
    label: 'Single',
    value: 'single'
  },
  {
    label: 'In a Relationship',
    value: 'relationship'
  },
  {
    label: "It's Complicated",
    value: 'complicated'
  }
];

export default class ExampleForm extends Component {

  constructor( props ) {
    super( props );
    this.state = {};
  }

  errorValidator = ( values ) => {
    const validateFirstName = ( firstName ) => {
      return !firstName ? 'First name is required.' : null;
    };
    const validateLastName = ( lastName ) => {
      return !lastName ? 'Last name is required.' : null;
    };
    const validateGender = ( gender ) => {
      return !gender ? 'Attendance is required.' : null;
    };
    const validateBio = ( bio ) => {
      return !bio ? 'Bio is required.' : null;
    };
    const validateAuthorize = ( authorize ) => {
      return !authorize ? 'Please check authorize.' : null;
    };
    const validateStatus = ( status ) => {
      return !status ? 'Status is required.' : null;
    };
    return {
      firstName: validateFirstName( values.firstName ),
      lastName: validateLastName( values.lastName ),
      gender: validateGender( values.gender ),
      bio: validateBio( values.bio ),
      authorize: validateAuthorize( values.authorize ),
      status: validateStatus( values.status )
    };
  }

  warningValidator = ( values ) => {
    const validateFirstName = ( firstName ) => {
      return firstName && firstName.length < 2 ? 'First name must be longer than 2 characters.' : null;
    };
    const validateLastName = ( lastName ) => {
      return lastName && lastName.length < 2 ? 'Last name must be longer than 2 characters.' : null;
    };
    const validateBio = ( bio ) => {
      return bio && bio.replace(/s+/g, ' ').trim().split(' ').length < 5 ? 'Bio should have more than 5 words.' : null;
    };
    return {
      firstName: validateFirstName( values.firstName ),
      lastName: validateLastName( values.lastName ),
      gender: null,
      bio: validateBio( values.bio ),
      authorize: null,
      status: null
    };
  }

  successValidator = ( values, errors ) => {
    const validateFirstName = ( ) => {
      return !errors.firstName ? 'Nice name!' : null;
    };
    const validateLastName = ( ) => {
      return !errors.lastName ? 'Your last name is sick!' : null;
    };
    const validateGender = ( ) => {
      return !errors.gender ? 'Thanks for entering your attendance.' : null;
    };
    const validateBio = ( ) => {
      return !errors.bio ? 'Cool Bio!' : null;
    };
    const validateAuthorize = ( ) => {
      return !errors.authorize ? 'You are now authorized.' : null;
    };
    const validateStatus = ( ) => {
      return !errors.status ? 'Thanks for entering your status.' : null;
    };
    return {
      firstName: validateFirstName( values.firstName ),
      lastName: validateLastName( values.lastName ),
      gender: validateGender( values.gender ),
      bio: validateBio( values.bio ),
      authorize: validateAuthorize( values.authorize ),
      status: validateStatus( values.status )
    };
  }

  render() {
    return (
      <div className='rsvp-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        {/* <style>{`
          body > div,
          body > div > div,
          body > div > div > div.rsvp-form {
            height: 100%;
          }
        `}</style> */}
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {/* <Image src={xavier} /> */}
            <Header as='h2' color='teal' textAlign='center'>
              RSVP Details Form
            </Header>
            <Header as='h5' color='teal' textAlign='center'>
              Please fill a copy of the form for <u><em>each</em></u> person attending
            </Header>
            <Form
              validateError={this.errorValidator}
              validateWarning={this.warningValidator}
              validateSuccess={this.successValidator}
              onSubmit={submittedValues => this.setState( { submittedValues } )}>
              { formApi => (
                <form onSubmit={formApi.submitForm} id="form2">
              <Segment stacked>
                <span><label htmlFor="firstName">First name</label>
                <StyledText field="firstName" id="firstName" /></span>
                <label htmlFor="lastName">Last name</label>
                <StyledText field="lastName" id="lastName" />
                <label>Will you be attending?</label>
                <StyledRadioGroup field="gender">
                  { group => (
                    <div>
                      <StyledRadio group={group} value="yes" id="yes" label="Yes" className="mr-3 d-inline-block" />
                      <StyledRadio group={group} value="no" id="no" label="No" className="d-inline-block" />
                    </div>
                  )}
                </StyledRadioGroup>
                {/* <label htmlFor="bio">Bio</label>
                <StyledTextArea field="bio" id="bio" />
                <StyledCheckbox field="authorize" id="authorize" label="Authorize" className="d-inline-block" />
                <label htmlFor="status" className="d-block">Relationship status</label>
                <StyledSelect field="status" id="status" options={statusOptions} /> */}

                <Button color='teal' fluid size='large' type='submit' value='Submit' >Submit</Button>
              </Segment>
              </form>
              )}
            </Form>
            {/* <Message>
              Password is on your invitation :) <br />
              (Hint: 'open seasame' won't work)
            </Message> */}
          </Grid.Column>
        </Grid>
      </div>
    );}
}
  // <Form
  //   validateError={this.errorValidator}
  //   validateWarning={this.warningValidator}
  //   validateSuccess={this.successValidator}
  //   onSubmit={submittedValues => this.setState( { submittedValues } )}>
  //   { formApi => (
  //     <form onSubmit={formApi.submitForm} id="form2">
  //       <label htmlFor="firstName">First name</label>
  //       <StyledText field="firstName" id="firstName" />
  //       <label htmlFor="lastName">Last name</label>
  //       <StyledText field="lastName" id="lastName" />
  //       <label>Choose Gender</label>
  //       <StyledRadioGroup field="gender">
  //         { group => (
  //           <div>
  //             <StyledRadio group={group} value="male" id="male" label="Male" className="mr-3 d-inline-block" />
  //             <StyledRadio group={group} value="female" id="female" label="Female" className="d-inline-block" />
  //           </div>
  //         )}
  //       </StyledRadioGroup>
  //       <label htmlFor="bio">Bio</label>
  //       <StyledTextArea field="bio" id="bio" />
  //       <StyledCheckbox field="authorize" id="authorize" label="Authorize" className="d-inline-block" />
  //       <label htmlFor="status" className="d-block">Relationship status</label>
  //       <StyledSelect field="status" id="status" options={statusOptions} />
  //       <button type="submit" className="">Submit</button>
  //     </form>
  //   )}
  // </Form>
 
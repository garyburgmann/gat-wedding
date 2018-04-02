import React, { Component } from 'react';
import { Button, 
         Grid, 
         Header, 
         Message, 
         Segment,
         Form,
         Image,
         Input
} from 'semantic-ui-react'
// import {
//   Form,
//   StyledText,
//   StyledTextArea,
//   StyledRadio,
//   StyledRadioGroup,
//   StyledSelect,
//   StyledCheckbox
// } from 'react-form';
import MediaQuery from 'react-responsive';
import './rsvp.css';
import desktop from '../assets/images/rsvp-desktop.jpg'; // Tell Webpack this JS file uses this image
// import mobile from '../assets/images/gat-mobile.jpg'; // Tell Webpack this JS file uses this image
import seahorses from '../assets/images/seahorses.png'
import FixedMenu from '../components/Menu';


export default class ExampleForm extends Component {

  state = {
    email: '', 
    names: ''
  }

  party = [
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
  ]

  handleAttendance = (e, { value }) => {
    // console.log(value, this .state);

    this.setState({ attendance: value });
    setTimeout(() => {
      console.log(value, this.state);
    }, 10);
  }

  handleInput = (e, { name, value }) => {
    console.log(name, value);
    this.setState({ [name]: value });
    setTimeout(() => {
      console.log(this.state);
    }, 1);
  }
  
  handleSubmit = () => {
    const { email } = this.state

    // this.setState({ submittedName: name, submittedEmail: email })
  }

  handleScreen = (val) => {
    console.log('HANDLE SCREEN: ', val);
    this.setState({ mobile: val });
  }

  // content = (
    
  // );

  render() {
    const { attendance, email } = this.state
    let jedi = false;
    return (
      <div>
          <MediaQuery query="(min-device-width: 850px)"> 
            {(matches) => {
              if (matches) {
                jedi = true;
                if (jedi != this.state.mobile) {
                  this.handleScreen(jedi);
                }
                
                console.log('JEDI: ', jedi);
                return null;
              } else {
                jedi = false;
                if (jedi != this.state.mobile) {
                  this.handleScreen(jedi);
                }
                console.log('JEDI: ', jedi);
                return null;
              }
            }}
          </MediaQuery>
        <Segment
            inverted
            style={{minHeight: '100vh', padding: '1em 0em', background: `#000 url('${desktop}') no-repeat center center `, backgroundSize: 'cover', }}
            vertical
            raised
        > 
          <FixedMenu  />
          <div className='rsvp-form'>
            <Grid style={{ height: '100%' }} centered>
              <Grid.Column style={{ maxWidth: this.state.mobile ? 700 : 500 }}>

                <Segment style={{minHeight: '50vh', padding: '1em 0em', background: `#F7F7F7`}} >
                  <Form onSubmit={this.handleSubmit} size="big">
                    
                    <Header as='h1' textAlign='center' size='huge' style={{fontFamily: `'Allura', cursive`, padding: '1em 0em'}}>
                      Please reply by September 03, 2018
                    </Header>
                    
                  
                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Input placeholder='Your names' name='names' transparent onChange={this.handleInput}
                                  style={{width: '80%', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', borderColor: 'teal', margin: '0 0 1em 0'}} />
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Input placeholder='Your email' name='email' transparent type='email' onChange={this.handleInput}
                                  style={{width: '80%', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', borderColor: 'teal', margin: '0 0 1em 0'}} />
                    </div>
                    
                    <div style={{ marginBottom: '2em', fontFamily: `'Libre Baskerville', serif` }}>
                      <Form.Group grouped style={{marginLeft: '10%'}}>
                        {/* <label>Can you attend?</label> */}
                        <Form.Checkbox type='radio' label='Accept' value='yes' checked={attendance === 'yes'} onChange={this.handleAttendance} />
                        <Form.Checkbox type='radio' label='Decline' value='no' checked={attendance === 'no'} onChange={this.handleAttendance} />
                      </Form.Group>
                    </div>
                    
                    <div style={{marginLeft: '10%', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Group grouped>
                        <Form.Checkbox label='I love seafood!' />
                        <Form.Checkbox label="I don't eat fish or seafood" />
                        <Form.Checkbox label="I'm vegetarian" />
                      </Form.Group>
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Input placeholder='Other dietary requirements?' name='dietary' transparent 
                                  style={{width: '80%', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', borderColor: 'teal', margin: '0 0 1em 0'}} />
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                    {/* <Form.TextArea label='Any other comments or information?' placeholder='Please enlighten us...' /> */}
                      <Form.Button>Submit</Form.Button>
                      <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
                    </div>
                   
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid>
          </div>
        </Segment>
      </div>
    );
  }
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
 
  
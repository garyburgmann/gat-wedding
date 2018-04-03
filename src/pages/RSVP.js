import React, { Component } from 'react';
import { Button, 
         Grid, 
         Header, 
         Message, 
         Segment,
         Form,
         Image,
         Input
} from 'semantic-ui-react';
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
import { Redirect } from 'react-router-dom';
import EmailService from '../services/EmailService';


export default class ExampleForm extends Component {

  state = {
    email: '', 
    names: '',
    specialDietary: '',
    seafood: false,
    noSeafood: false,
    vegetarian: false,
    extraNotes: '',
    attendance: null,
    warn: false,
    success: false,
    redirect: false
  }

  emailService = new EmailService();

  handleAttendance = (e, { value }) => {
    // console.log(value, this .state);

    this.setState({ attendance: value == 'true' });
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

  handleFood = (e, { name, value }) => {
    console.log(name, value);
    this.setState({ [name]: !this.state[name] });
    setTimeout(() => {
      console.log(this.state);
    }, 1);
  }
  
  handleSubmit = async () => {
    const { attendance, email, names, specialDietary, seafood, noSeafood, vegetarian, extraNotes } = this.state;

    console.log(this.state)
    if (attendance === null || names.length < 3 || email.length < 3) {
      // alert('Must set attendance');
      this.setState({ warn: true })
      // console.log('WARN: ', this.state.warn);
      setTimeout(() => {
        this.setState({ warn: false })
        // console.log('WARN 2: ', this.state.warn);
      }, 4000);
    } else {
      this.setState({ success: true });
      const data = {
        attendance: attendance, 
        email: email, 
        names: names, 
        specialDietary: specialDietary, 
        seafood: seafood, 
        noSeafood: noSeafood, 
        vegetarian: vegetarian,
        extraNotes: extraNotes
      }

      const res = await this.emailService.sendRSVP(data);
      console.log('RES: ', res);
      setTimeout(() => {
        this.setState({ redirect: true });
        // console.log('WARN 2: ', this.state.warn);
      }, 3000);
    }

    // this.setState({ submittedName: name, submittedEmail: email })
  }

  handleScreen = (val) => {
    console.log('HANDLE SCREEN: ', val);
    this.setState({ mobile: val });
  }

  handleDismiss = () => {
    this.setState({ warn: false })
  }

  // content = (
    
  // );

  render() {
    const { attendance, names, email, specialDietary, extraNotes, redirect, success, warn } = this.state
    let jedi = false;

    if (redirect) {
      return (
        <Redirect to='/' />
      )
    }

    if(success) {
      return (
        <div style={{textAlign: 'center'}}>
          <Message success header='Success!' content='Your RSVP has been submitted. Thank you :)' />
        </div>
      )
    }

    return (
      <div>
        <MediaQuery query="(min-device-width: 850px)"> 
          {(matches) => {
            if (matches) {
              jedi = true;
              if (jedi != this.state.mobile) {
                () => this.handleScreen(jedi);
              }
              console.log('JEDI: ', jedi);
              return null;
            } else {
              jedi = false;
              if (jedi != this.state.mobile) {
                () => this.handleScreen(jedi);
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
                  <Form onSubmit={this.handleSubmit} size="big" error={warn} success={success}>
                    
                    <Header as='h1' textAlign='center' size='huge' style={{fontFamily: `'Allura', cursive`, padding: '1em 0em'}}>
                      Please reply by September 03, 2018
                    </Header> 

                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Input placeholder='Your names' name='names' value={names} transparent onChange={this.handleInput} 
                                  style={{width: '80%', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', borderColor: 'teal', margin: '0 0 1em 0'}} />
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Input placeholder='Your email' name='email' value={email} transparent type='email' onChange={this.handleInput}
                                  style={{width: '80%', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', borderColor: 'teal', margin: '0 0 1em 0'}} />
                    </div>
                    
                    <div style={{ marginBottom: '2em', fontFamily: `'Libre Baskerville', serif` }}>
                      <Form.Group grouped style={{marginLeft: '10%'}} >
                        {/* <label>Can you attend?</label> */}
                        <Form.Checkbox type='radio' name='attendance' label='Accept' value='true' checked={attendance === true} onChange={this.handleAttendance} />
                        <Form.Checkbox type='radio' name='attendance' label='Decline' value='false' checked={attendance === false} onChange={this.handleAttendance} />
                      </Form.Group>
                    </div>
                    
                    <div style={{marginLeft: '10%', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Group grouped>
                        <Form.Checkbox label='I love seafood!' name='seafood' onChange={this.handleFood} />
                        <Form.Checkbox label="I don't eat fish or seafood" name='noSeafood' onChange={this.handleFood} />
                        <Form.Checkbox label="I'm vegetarian" name='vegetarian' onChange={this.handleFood} />
                      </Form.Group>
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Input placeholder='Other dietary requirements?' name='specialDietary' value={specialDietary} transparent onChange={this.handleInput}
                                  style={{width: '80%', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', borderColor: 'teal', margin: '0 0 1em 0'}} />
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                      <Form.Input placeholder='Extra notes' name='extraNotes' value={extraNotes} transparent onChange={this.handleInput}
                                  style={{width: '80%', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', borderColor: 'teal', margin: '0 0 1em 0'}} />
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '2em', fontFamily: `'Libre Baskerville', serif`}}>
                    {/* <Form.TextArea label='Any other comments or information?' placeholder='Please enlighten us...' /> */}
                      <Form.Button color='teal' type='submit'>Submit</Form.Button>

                      <Message error header='Missing Info' content='We need your names, email and attendance please.' />

                      <Message success header='Success!' content='Your RSVP has been submitted. Thank you :)' />

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
 
  
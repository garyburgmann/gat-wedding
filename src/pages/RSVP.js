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

  // content = (
    
  // );

  render() {
    const { attendance, firstName, firstName2, lastName, lastName2, email, party } = this.state
    
    return (
      <div>
          {/* <MediaQuery query="(min-device-width: 850px)"> 
            {(matches) => {
              if (matches) {
                this.setState({segment: {minHeight: '100vh', padding: '1em 0em', background: `#000 url('${desktop}') no-repeat center center `, backgroundSize: 'cover'}});
                console.log(this.state);
                return <span></span>
              } else {
                this.setState({segment: {minHeight: '100vh', padding: '1em 0em', background: `teal`, backgroundSize: 'cover'}});
                console.log(this.state);
                return <span></span>
              }
            }}
          </MediaQuery> */}
        <Segment
            inverted
            textAlign='center'
            style={{minHeight: '100vh', padding: '1em 0em', background: `#000 url('${desktop}') no-repeat center center `, backgroundSize: 'cover', }}
            vertical
            raised
        > 
          <FixedMenu  />
          <div className='rsvp-form'>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 500 }}>

                <Segment style={{minHeight: '50vh', padding: '1em 0em', background: `#F7F7F7`}} >
                  <Form onSubmit={this.handleSubmit} size="big">
                    
                    <Header as='h1' textAlign='center' style={{fontFamily: `'Allura', cursive`, fontSize: '2em', padding: '1em 0em'}}>
                      Please reply by September 03, 2018
                    </Header>
                    
                    
                    {/* <Segment stacked>
                      <Form.Input fluid label='Email Address' placeholder='Your Contact Email Address' name='email' value={email} onChange={this.handleInput} />
                      <Form.Select fluid label='Total In Your Party' options={this.party} placeholder='Total In Your Party' name='party' value={party} onChange={this.handleInput}/>
                    </Segment>  */}
                    <Form.Input label='Name(s)' placeholder='Your names' name='names' transparent 
                                style={{width: '80%', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', borderColor: 'teal', margin: '0 0 1em 0', textAlign: 'center'}} />
                    <Form.Group inline>
                      <label>Can you attend?</label>
                      <Form.Radio label='Yes' value='yes' checked={attendance === 'yes'} onChange={this.handleAttendance} />
                      <Form.Radio label='No' value='no' checked={attendance === 'no'} onChange={this.handleAttendance} />
                    </Form.Group>
                    <Form.Group grouped>
                      <label>Do you have any dietery requirements?</label>
                      <Form.Checkbox label='I love seafood!' />
                      <Form.Checkbox label='I do not eat fish or seafood' />
                      <Form.Checkbox label='I am vegetarian' />
                    </Form.Group>
                    {/* <Form.TextArea label='Any other comments or information?' placeholder='Please enlighten us...' /> */}
                    <Form.Button>Submit</Form.Button>
                    <Image src={seahorses} size='small' centered style={{padding: '1em 0em'}}/>
                    {/* <Segment
                      inverted
                      textAlign='center'
                      style={{minHeight: '10vh', padding: '1em 0em', background: `#000 url('${seahorses}') center center `}}
                      vertical
                      raised
                    >
                    </Segment> */}
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
 
  
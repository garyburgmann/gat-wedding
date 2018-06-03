import axios from 'axios';
import {API_URL} from '../settings';


class EmailService {

  apiUrl = API_URL;

  sendRSVP = (form, header = 'New', subject = 'RSVP - GAT WEDDING') => {
    const url = `${this.apiUrl}email`;

    const attendanceString = form.attendance ?
      `I/We look forward to coming along to help celebrate your big day. <br /> ` :
      `So sorry but we won't be able to make it along for your big day. <br /> <br />`;

    let textString = `<h1>${header} RSVP Submitted for Gat Wedding :) </h1> <br />
                      <p>Dear Gary and Kat,
                      <br /> <br />
                        ${attendanceString}`;

    if (form.attendance) {
      const seafood = form.seafood ?
        `I/We love eating seafood!` :
        `I/We aren't seafood mad.`;

      const noSeafood = form.noSeafood ?
        `I/We don't eat seafood at all.` :
        `I/We will eat seafood.`;

      const vegetarian = form.vegetarian ?
        `I/We are vegetarian too like that totally awesome dude Gary.` :
        `I/We are meatosaruses.`;

      const specialDietary = `I/We require: ${form.specialDietary}`;

      textString += `<ul>
                       <li> ${seafood} </li>
                       <li> ${noSeafood} </li>
                       <li> ${vegetarian} </li>
                       <li> ${specialDietary} </li>
                     </ul>
                     <br />`;

    }

    const extraNotes = `<b>Extra notes: </b> ${form.extraNotes}
                        <br /> <br />`;

    textString += extraNotes;

    textString += `Kind regards,
                   <br />
                   ${form.names}
                   <br />
                   ${form.phone}`;

    const addresses = ['gatpad5@gmail.com', form.email];

    const data = {
      to: addresses,
      subject: subject,
      text: textString
    }

    return axios.post(url, data)
      .then((res) => {
        console.log('EMAIL RES: ', res.data)
        return res;
      })
      .catch((err) => {
        console.log("EMAIL ERR: ", err);
        return err;
      });

  }
}

export default EmailService;

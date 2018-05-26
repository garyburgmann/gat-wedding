import axios from 'axios';
import {API_URL} from '../settings';


class RSVPService {

  apiUrl = API_URL;

  createRSVP = (data) => {
    const url = `${this.apiUrl}rsvp`;

    return axios.post(url, data);
  }

  updateRSVP = (data, id) => {
    const url = `${this.apiUrl}rsvp/${id}`;

    return axios.put(url, data);
  }
}

export default RSVPService;

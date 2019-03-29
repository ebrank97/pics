import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 17471eba3e48d376439629457f13557c8354ffb3fb691b86ae62c07578d79d31'
  }
});

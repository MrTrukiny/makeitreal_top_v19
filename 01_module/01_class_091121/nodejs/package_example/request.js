import axios from 'axios';

axios
  .get('https://www.google.com')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
  .then(() => {
    console.log('All done!');
  });

// async / await 
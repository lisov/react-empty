import ReactDOM   from 'react-dom';
import axios      from 'axios';

import App        from './components/App';


// axios.get('')
//   .then((response) => {
    
//     store.dispatch({type: "GET_USERS_DATA", payload: usersArr});
//   })
//   .catch(function (err) {
//     console.log(err);
//   });



ReactDOM.render(
  <App />,
  document.getElementById('app')
);


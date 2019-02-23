import React from 'react';
import {  withRouter } from "react-router-dom";

import NetWork from './network';

//import {history} from './BrowserRouter';


const fetchdata = async ()=> {
    console.log('check if I am authorised.');
    let result = await NetWork();

    console.log('result: ', result);
};

const Home = ({history}) =>(
    <div>
    <h2>Welcome Home Page</h2>

    <button onClick={()=>{
        console.log('should go to private page.');
        history.push('/private', { some: 'state' });
        }}>go to private page</button>

    <button onClick={()=>{
        fetchdata();
        }}>check if I am authorised</button>
    </div>
);


// export default Home;
 export default withRouter(Home);
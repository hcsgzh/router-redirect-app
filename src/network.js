import {history} from './BrowserRouter';

/**
 * this is a fake network fetch function for checking if I am authorised.
 */

const NetWork = (opt) =>{

    return new Promise( function(resolve, reject){
        try{
            if(opt){
                resolve({status: 200, data:'some data from a server.'});
            }else{

                console.log('401 : ', history);
                
                // here try to redirect to access denied page.
                //resolve({status: 401, data:'you are not authorised.'});
                history.push('/accessdenied');
            }
        }catch (err) {
            reject(err);
        }

    });

};


export default NetWork;
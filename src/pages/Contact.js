import { useState, useEffect } from 'react'
import firebase from '../config'
import {Link} from 'react-router-dom'

const Contact = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        let newData = []
        let ref = firebase.database().ref("contacts");
        ref.on('value',  function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                 let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                let contact = {
                    name: childData.name,
                    email: childData.email,
                    msg: childData.msg,
                    id: childKey
                }
                newData.push(contact);
                setData([...newData,newData]);
            });

        })
       
        //console.log(newdata)
    }
    useEffect(() => {
        getData()
        console.log(data);
    }, [])
    return ( <>
            <h1>Contact</h1>
            <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                <th scope="col">view</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((contact,index)=>{
           return (<tr key={index}> 
                <th scope="row">{index+1}</th>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.msg}</td>
                <Link id="viewBtn"  to ={`/contacts/${contact.id}`}>{`>>`}</Link>
           </tr>
           )
        }) }
            </tbody>
          </table>
    </> );
}
 
export default Contact;
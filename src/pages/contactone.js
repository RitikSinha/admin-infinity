import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import firebase from '../config'

const ContactOne = () => {
    const [data, setData] = useState('');
    let {uid} = useParams();
    const getData = async () => {
       
        let ref = firebase.database().ref("contacts");
        ref.child(uid).on('value',  function (snapshot) {
            console.log(snapshot.val())
            setData(snapshot.val());
        })
       
        //console.log(newdata)
    }
    useEffect(() => {
        getData()
        console.log(data);
    }, [])
    return ( <>
            <h2>Contact Page</h2>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
            <p>{data.msg}</p>
    
    </> );
}
 
export default ContactOne;
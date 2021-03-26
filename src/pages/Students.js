import { useState, useEffect } from 'react'
import firebase from '../config'
import {Link} from 'react-router-dom'

const Student = () => {
    const [data, setData] = useState([]);
    

    const getData = async () => {
        let newData = []
        let ref = firebase.database().ref("users");
        ref.on('value',  function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                 let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                let user = {
                    phone: childData.phone,
                    name: childData.firstname,
                    class: childData.studentclass,
                    id: childKey

                }
                newData.push(user);
                setData([...newData,newData]);
            });

        })
       
        //console.log(newdata)
    }
    useEffect(() => {
        getData()
        console.log(data);
    }, [])


    return (<div className="container">
         <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone no</th>
                <th scope="col">Class</th>
                <th scope="col">view</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((user,index)=>{
           return (<tr key={index}> 
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.class}</td>
                <Link id="viewBtn"  to ={`/student/${user.id}`}>{`>>`}</Link>
           </tr>
           )
        }) }
            </tbody>
          </table>
    </div>);


}

export default Student;
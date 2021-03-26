import { useState, useEffect } from 'react'
import firebase from '../config'


const Feedback = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        let newData = []
        let ref = firebase.database().ref("feedback");
        ref.on('value',  function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                 let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                let feedback = {
                    subject: childData.subject,
                    message: childData.message,
                    id: childKey
                }
                newData.push(feedback);
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
    <h1>Feedback</h1>
    <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((feedback,index)=>{
           return (<tr key={index}> 
                <th scope="row">{index+1}</th>
                <td>{feedback.subject}</td>
                <td>{feedback.message}</td>
           </tr>
           )
        }) }
            </tbody>
          </table>
     </> );
}
 
export default Feedback;
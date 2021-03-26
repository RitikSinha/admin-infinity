import { useState, useEffect } from 'react'
import firebase from '../config'
import { v4 as uuidv4 } from 'uuid';

const Notice = () => {
    const [message,setMessage] = useState('');
const [subject, setSubject] = useState('');
const [data, setData] = useState([]);
const [deleted,setDeleted] = useState([])

    const writeData = (e,subject,message)=>{
        e.preventDefault();
        if(subject!=''&& message!=''){
            firebase.database().ref('notice/'+uuidv4()).update({
                subject:subject,
                message:message,
               }).then(()=>{
                   setMessage('')
                   setSubject('')
                   getData()
               })
               
        }
            
        
    }

    const getData = async () => {
        let newData = []
        let ref = firebase.database().ref("notice");
        ref.on("value",  function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                 let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                let notice = {
                    ...childData,id:childKey
                }
                newData.push(notice);
                setData([...newData,newData]);
            });

        })
       
        //console.log(newdata)
    }

    const deleteOne = async (id)=>{
        alert("do you want to delete this?");
        let ref = firebase.database().ref("notice/"+id);
        ref.remove((e)=>{
            setDeleted('deleted'+uuidv4())
            
        })

    }
    useEffect(() => {
        getData()
        console.log(data);
    }, [deleted])
    return ( <>
    <div class="container">
               <div class="signup-content">
                   <div class="signup-form">
                       <form method="POST" class="register-form" id="register-form">
                           <h2>Post Notice</h2>                 
                           <div class="form-group">
                               <label for="address">Subject :</label>
                               <input value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" name="address" id="address" required/>
                           </div> 
                                
                           <label for="address">Message:</label>
                           <div class="form-group">
                               
                               <textarea value={message} onChange={(e)=>setMessage(e.target.value)} style={{width:400,height:200}}type="text" name="address" id="address" required/>
                           </div> 
                           <button className="btn btn-primary" onClick={(e)=>writeData(e,subject,message,)}>Post Notice</button>                   
                       </form>
                   </div>
               </div>
           </div>
           <h1> notices</h1>
           <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((notice,index)=>{
           return (<tr key={index}> 
                <th scope="row">{index+1}</th>
                <td>{notice.subject}</td>
                <td>{notice.message}</td>
                <td onClick={()=>deleteOne(notice.id)}>x</td>
           </tr>
           )
        }) }
            </tbody>
          </table>
    </> );
}
 
export default Notice;
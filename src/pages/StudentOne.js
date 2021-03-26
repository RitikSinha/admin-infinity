import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import firebase from '../config'

const StudentOne = () => {
    const [data, setData] = useState('');
    let {uid} = useParams();
    const getData = async () => {
       
        let ref = firebase.database().ref("users");
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
            <header className="ScriptHeader">
    <div className="rt-container">
    	<div className="col-rt-12">
        	<div className="rt-heading">
            	<h1>Infinity Insitute Barh</h1>
                <p>Opposite Savita Cinema Hall, N.H.-31,BARH (PATNA)</p>
            </div>
        </div>
    </div>
</header>
<section>
    <div className="rt-container">
          <div className="col-rt-12">
              <div className="Scriptcontent">
              

<div className="student-profile py-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent text-center">
            <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp"/>
            <h3>PERSONAL DETAILS</h3>
          </div>
          <div className="card-body">
            <p className="mb-0"><strong className="pr-1">FIRST NAME:</strong>{data.firstname}</p>
            <p className="mb-0"><strong className="pr-1">LAST NAME:</strong>{data.lastName}</p>
            <p className="mb-0"><strong className="pr-1">FATHER'S NAME:</strong>{data.fathername}</p>
            <p className="mb-0"><strong className="pr-1">OCCUPATION:</strong>{data.foccupation}</p>
            <p className="mb-0"><strong className="pr-1">MOTHER'S NAME:</strong>{data.mothername}</p>
            <p className="mb-0"><strong className="pr-1">OCCUPATION:</strong>{data.moccupation}</p>
            <p className="mb-0"><strong className="pr-1">GENDER:</strong>{data.gender}</p>
            
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Information</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
              <tr>
                <th width="30%">RESIDENCE ADDRESS</th>
                <td width="2%">:</td>
                <td>{data.raddress}</td>
              </tr>
              <tr>
                <th width="30%">PERMANENT ADDRESS</th>
                <td width="2%">:</td>
                <td>{data.paddress}</td>
              </tr>
              <tr>
                <th width="30%">NATIONALITY</th>
                <td width="2%">:</td>
                <td>{data.nationality}</td>
              </tr>
              <tr>
                <th width="30%">AADHAR CARD NO</th>
                <td width="2%">:</td>
                <td>{data.aadhaar}</td>
              </tr>
              <tr>
                <th width="30%">CATEOGRY</th>
                <td width="2%">:</td>
                <td>{data.category}</td>
              </tr>
              <tr>
                <th width="30%">STATE</th>
                <td width="2%">:</td>
                <td>{data.state}</td>
              </tr>

              <tr>
                <th width="30%">BLOOD GROUP </th>

                <td width="2%">:</td>
                <td>{data.bloodgroup}</td>
              </tr>
              <tr>
                <th width="30%">DOB</th>
                <td width="2%">:</td>
                <td>{data.dob}</td>
              </tr>
              <tr>
                <th width="30%">Pincode</th>
                <td width="2%">:</td>
                <td>{data.pincode}</td>
              </tr>
              <tr>
                <th width="30%">EMAIL</th>
                <td width="2%">:</td>
                <td>{data.email}</td>
              </tr>
            </table>
          </div>
        </div>
        
          <div style={{height: 26}}></div>
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>EDUCATIONAL DETAILS</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
              <tr>
                <th width="30%">STUDENT CLASS</th>
                <td width="2%">:</td>
                <td>{data.studentclass}</td>
              </tr>
              <tr>
                <th width="30%">SCHOOL/ COLLEGE ADDRESS</th>
                <td width="2%">:</td>
                <td>{data.schoolAddress}</td>
              </tr>
              <tr>
                <th width="30%">MARKS OBTAINED</th>
                <td width="2%">:</td>
                <td>{data.marks}</td>
              </tr>
              <tr>
                <th width="30%">HOW DID YOU REACH WITH US?</th>
                <td width="2%">:</td>
                <td>{data.reach}</td>
              </tr>
           
                
            </table>
          </div>
        </div>
        
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

           
    		</div>
		
</section>

    </> );
}
 
export default StudentOne;



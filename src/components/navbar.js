import {Link} from 'react-router-dom';
const NavBar = ({activeNav}) => {
    return ( <>
     <div class={`side-navbar ${activeNav} d-flex justify-content-between flex-wrap flex-column`} id="sidebar">
    <ul class="nav flex-column text-white w-100">
      <Link to="/" id="admin" class=" h3 text-white my-2">
       <h3> Admin Panel</h3>
        <p>Infinity Insitute Barh</p>
      </Link>
      <Link to="/" class="nav-link">
        <i class="bx bxs-dashboard"></i>
        <span class="mx-2">Home</span>
      </Link>
      <Link to="/notice" class="nav-link">
        <i class="bx bx-conversation"></i>
        <span class="mx-2">Notice</span>
      </Link>
      <Link to="/students" class="nav-link">
        <i class="bx bx-user-check"></i>
        <span class="mx-2">Students</span>
      </Link>
      <Link to="/feedback" class="nav-link">
        <i class="bx bx-conversation"></i>
        <span class="mx-2">Feedback</span>
      </Link>

      <Link to="/contact" class="nav-link">
        <i class="bx bx-conversation"></i>
        <span class="mx-2">Contact</span>
      </Link>

      <Link to="/gallery" class="nav-link">
        <i class="bx bx-conversation"></i>
        <span class="mx-2">Gallery</span>
      </Link>
      <Link to="/payment" class="nav-link">
        <i class="bx bx-conversation"></i>
        <span class="mx-2">Payment</span>
      </Link>
      <Link  class="nav-link">
        <i class="bx bx-conversation"></i>
        <span class="mx-2">Logout</span>
      </Link>

    </ul>

    <span href="#" class="nav-link h4 w-100 mb-5">
      <a href=""><i class="bx bxl-instagram-alt text-white"></i></a>
      <a href=""><i class="bx bxl-twitter px-2 text-white"></i></a>
      <a href=""><i class="bx bxl-facebook text-white"></i></a>
    </span>
  </div>

    </> );
}
 
export default NavBar;
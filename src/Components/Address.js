import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "../CSS-Files/Address.css"
import { useStateValue } from '../StateProvider';


function Address() {

    const [{},dispatch] = useStateValue();

  const [address, setaddress] = useState("");

  const addAddress = (event) => {
    
    dispatch({
        type: "SET_ADDRESS",
        city: address
    });

  }

  return (
    <div className='address'>
      <Link to="/">
          <img
            className='address__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png'
          />
        </Link> 
        <div className='address__container'>
          <h1>Set Address</h1>
          <form>
            <h5>Address</h5>
            <input/>
            <h5>City</h5>
            <input value={address} onChange={event =>setaddress(event.target.value)}/>
            <Link to="/">
                <button onClick={addAddress} className='address__signinButton'>Add</button>
            </Link>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          </form>
        </div>
    </div>
  )
}

export default Address

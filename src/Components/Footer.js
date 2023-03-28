import React from 'react'
import '../CSS-Files/Footer.css'


function scrollToTop(){
    
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });

}

function Footer() {
  return (
    <div className='footer'>
        <button className="scrollToTop" onClick={scrollToTop}>Back To Top</button>
        <div className='footer_cc'>
        <p>Conditions of Use & Sale
        Privacy Notice
        Interest-Based Ads</p>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}

export default Footer

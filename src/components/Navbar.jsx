import React from 'react'

function Navbar() {
  return (
    <div className='nav'>
       <div id='menu'>
           <i class="fa-solid fa-bars"></i>
       </div>
       
      <img id='img' src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="" />

      <div className='cate'>
      <p id='cat'>Categories</p>
      <div className='catec'>
        <p>Development</p>
        <p>Business</p>
        <p>Finance & Accounting</p>
        <p>IT & Software</p>
        <p>Office Productivity</p>
        <p>Personal Development</p>
        <p>Design</p>
        <p>Marketing</p>
        <p>Lifestyle</p>
        <p>Photography & Video</p>
        <p>Health & Fitness</p>
        <p>Music</p>
        <p>Teaching & Academics</p>

      </div>
      </div>

      

      <div className="search-div">
      <i id='search-icon' class="fa-solid fa-magnifying-glass"></i>
        <input id='input-search' type='text' ></input>
      </div>

      <div className='ub'>
      <a className='one' href=''>Udemy Business</a>
      <div className='ubc'>
        <h2>Get your team access to <br />over 25,000 top Udemy <br /> courses, anytime,<br /> anywhere.</h2>
        <button>Try Udemy Business</button>
        </div>
      </div>

      <div className='tou'>
      <a className='one' href=''>Teach On Udemy</a>
      <div className='touc'>
        <h2>Turn what you know into an <br /> opportunity and reach <br />millions around the world.</h2>
        <button>Learn More</button>
        </div>
      </div>

      <div className='kart'>
      <i id='cart' class="fa-solid fa-cart-shopping"></i>
        <div className='kartc'>
              
               <p> Your cart is empty.</p>
               <a href=''>Keep Shopping</a>

        
        </div>
      </div>
      

      
      

      

      <div className='log'>
        <a href='#'>Log in</a>
        
      </div>
      <div className='sign'>
      <a href='#'>Sign up</a>
      </div>

     <div id='globe'><i  class="fa-solid fa-globe"></i></div>  
        
      <div>
      
      </div>
    
    </div>
   
    
  )
}

export default Navbar
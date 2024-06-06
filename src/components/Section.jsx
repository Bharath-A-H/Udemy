import React from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'

function Section() {
  return (
    <div className='section'>
         <div className="bg-img">
            <div className="container">
                <h1>Last day to see where the deals lead</h1>
                <p>Save on courses from just ₹399 today. Discover new possibilities tomorrow.</p>
            </div>
         </div>
        <div className='text'>
          <h1>All the skills you need in one place</h1>
          <p>From critical skills to technical topics, Udemy supports your professional development.</p>     
        </div>

        <div className="card-img">
          <div className="card">

            <img src={img1} alt="" />  
            <div className='posi'>
             <h3>The Complete 2024 Web Development Bootcamp</h3>
             <p>Dr.agela u</p>

             <p><b>4.7</b>  <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> (378,123) </p>
             <p><b>₹499</b> <span id='dash'> ₹3099</span></p>
             <h5 id='bs'>Bestseller</h5>
            </div>
            <div className='card1'>
              <h2>The Complete 2024 Web <br /> Development Bootcamp</h2>
              <h6>Bestseller</h6>
              <p>61.5 total hours All Levels Subtitles</p>
              <p>Become a Full-Stack Web Developer with just  ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
             <div className='ctxt'> 
             <p><b>✔️</b> Build 16 web development projects for <br />     your portfolio, ready to apply for junior <br /> developer jobs. </p>
              <p><b>✔️</b>Learn the latest technologies, including <br /> Javascript, React, Node and even Web3 <br /> development.</p>
              <p><b>✔️</b>After the course you will be able to build <br /> ANY website you want.</p>
             </div>
             <div className='btn'>
              <button>Add to cart</button>
              <h5>❤️</h5>
              </div>
            </div>
          </div>
          
          <div className="card">

            <img src={img2} alt="" />  
            <div className='posi'>
            <h3>The Web Developer Bootcamp Code 2024</h3>
            <p>Colt Steele</p>

            <p><b>4.7</b>  <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> (25,867) </p>
            <p><b>₹449</b> <span id='dash'> ₹3099</span></p>
            </div>

            <div className='card1'>
              <h2>The web Developer Bootcamp <br />2024</h2>
              <h6>Bestseller</h6>
              <p>74 total hours All Levels Subtitles</p>
              <p>10 Hours of React just added. Become a <br /> Developer With ONE course - HTML, CSS,<br /> JavaScript, React, Node, MongoDB and More!</p>
             <div className='ctxt'> 
             <p><b>✔️</b> The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021 </p>
              <p><b>✔️</b>Make REAL web applications using cutting-edge technologies</p>
              <p><b>✔️</b>Create responsive, accessible, and beautiful layouts</p>
             </div>
             <div className='btn'>
              <button>Add to cart</button>
              <h5>❤️</h5>
              </div>
            </div>
          </div>
          
          

          <div className="card">

            <img src={img3} alt="" />  
            <div className='posi'>
            <h3>Web Development Masterclass - Online Certification Course</h3>
            <p>YouAccel Training</p>

            <p><b>4.7</b>  <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> (210,095) </p>
            <p><b>₹499</b> <span id='dash'> ₹3099</span></p>
            </div>

            <div className='card1'>
              <h2>The web Development Masterclass <br />Online Certification course</h2>
              
              <p>26 total hours All Levels Subtitles</p>
              <p>Cloud Computing | Web Apps | Linux | Web <br /> Servers | DBMS | LAMP Stack | HTML | CSS <br /> | JavaScript | PHP | + More</p>
             <div className='ctxt'> 
             <p><b>✔️</b> Understand the essentials of Local and Wide Area Networks </p>
              <p><b>✔️</b>Setup a basic network.</p>
              <p><b>✔️</b>Register a domain name with Domain Privacy</p>
             </div>
             <div className='btn'>
              <button>Add to cart</button>
              <h5>❤️</h5>
              </div>
            </div>
          </div>
          

          <div className="card">

            <img src={img4} alt="" />  
            <div className='posi'>
            <h3>Practical Web Development: 22 Courses in 1</h3>
            <p>Creative Online Class</p>

            <p><b>4.7</b>  <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> (9,846) </p>
            <p><b>₹549</b> <span id='dash'> ₹3299</span></p>
            </div>

            <div className='card4'>
              <h2>Practical Web Development:22 <br />Courses in 1</h2>
              
              <p>11.5 total hours All Levels Subtitles</p>
              <p>Learn PHP, Apache, MySQL, MongoDB,<br /> Python, JavaScript, XML, JSON, HTML, CSS,<br /> WordPress and more. With practical examples</p>
             <div className='ctxt'> 
             <p><b>✔️</b> In depth working knowledge in HTML, CSS, Javascript, XML, JSON, Git and more.</p>
              <p><b>✔️</b>Basic & Advanced Operations using PHP, practical projects with PHP</p>
              <p><b>✔️</b>In depth working experience on Basic & Advanced MySQL</p>
             </div>
             <div className='btn'>
              <button>Add to cart</button>
              <h5>❤️</h5>
              </div>
            </div>
          </div>
        </div>

    <div className='footer'>
      <div className='txte'>
        <div id='t'>
        <p>Top companies choose <a href=''>Udemy Business</a> to build in-demand career skills.</p>
        </div>
        <div id='img'>
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
        </div>
      </div>
     

      <div className='ftxt'>
       <div className='one'>
          <li><a href="">Udemy Business</a></li>
          <li><a href="">Teach on Udemy</a></li>
          <li><a href="">Get the app</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Contact us</a></li>
          
          </div>

        <div className='one'>
          <li><a href="">Careers</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Help and Support</a></li>
          <li><a href="">Affiliate</a></li>
          <li><a href="">Investors</a></li>
          
          </div>
          <div className='one'>
          <li><a href="">Terms</a></li>
          <li><a href="">Privacy policy</a></li>
          <li><a href="">Cookie setting</a></li>
          <li><a href="">Sitemap</a></li>
          <li><a href="">Accessibility statement</a></li>
          
        </div>

        <div className='wld'>
          <p>🌐</p>
          <h5>English</h5>
        </div>
        
        
        
      
        </div >
        

        <div className='fimg'>
        <img  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" />


        </div>
       
         </div>
         
      </div>
      
      
       
  
  )
}

export default Section
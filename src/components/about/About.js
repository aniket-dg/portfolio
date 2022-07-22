import React, { Component } from 'react'
import './About.css';
export class About extends Component {
  imgStyle = {
   
  }
  
  render() {
    
    return (
      <>
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>A passionate programmer and quick learner who is always excited to learn new technologies and contribute to the society for social impact. I have strong hands on Python-Django framework. Always looking for opportunities to boost my passion.
&nbsp;My areas of interest are Backend Development, DevOps, Blockchain.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img.png" style={this.imgStyle} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Backend Developer &amp; Devops Engineer.</h3>
            {/* <p className="fst-italic"> */}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore */}
              {/* magna aliqua. */}
            {/* </p> */}
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>25 December, 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9322861739</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune, India</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>aniket.dg25@gmail.com</span></li>

                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Engineering (Pursuing)</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Specialization:</strong> <span>Information Technology</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            {/* <p> */}
              {/* Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. */}
              {/* Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores. */}
            {/* </p> */}
          </div>
        </div>

      </div>
    </section>
      </>
    )
  }
}

export default About
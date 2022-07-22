import React, { Component } from 'react'

export class Resume extends Component {
  render() {
    return (
      <div>
        <section id="resume" className="resume">
          <div className="container">

            <div className="section-title">
              <h2>Resume</h2>
              {/* <p>quidem hic quas.</p> */}
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Aniket Gavali</h4>
                  <p><em>Passionate and innovative Information Technology Student with 1+ years of experience designing and developing efficient backend for various web based applications.</em></p>
                  <ul>
                    <li>Pune, Maharashtra</li>
                    <li>(91) 9322861739</li>
                    <li>aniket.dg25@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Experience</h3>
                <div className="resume-item">
                  <h4>Siteguide Pvt. Ltd.</h4>
                  <h5>April 2021 - Jun 2022</h5>
                  <p><em>Jalgaon, Maharashtra</em></p>
                  <ul>
                    <li>Optimized the execution of application for maximum
                      speed and scalability using effective database query, etc.
                      <b>to minimize application load time by 70%</b></li>
                    <li>Convert old projects and apply<b> OOP’s concept and
                      Django class-based views, DRY principle</b> for better
                      reusability</li>
                    <li>Built reusable code and libraries for future use which
                      <b>covered other project 20% work.</b></li>
                    <li>Deployment of project on Cloud like<b> AWS, Google
                      Cloud, VPS</b>, etc.</li>
                    <li>Implemented key features for security and protection of
                      data like<b> 2-factor authentication, OTP authentication.</b></li>
                  </ul>

                </div>
                <div className="resume-item">
                  <h4>D'n'D Rodhak</h4>
                  <h5>Jul 2022 - Present</h5>
                  <p><em>Mandi, Himachal Pradesh</em></p>
                  <ul>
                    <li>
                      Managing Backend of Application on AWS EC2 instance and <b>making application more efficient</b> by efficient data fetching, <b>increasing user experience</b>
                    </li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor of Engineering Information Technology</h4>
                  <h5>Jun 2020 - May 2023 (Pursuing)</h5>
                  <p><em>Sinhgad Institute of Technology and Science, CGPA: 9.64</em></p>
                </div>
                <div className="resume-item">
                  <h4>Diploma in Computer Technology</h4>
                  <h5>Aug 2017 - May 2020</h5>
                  <p><em>Government Polytechnic Nashik | Percentage: 88.00%</em></p>
                </div>
                <div className="resume-item">
                  <h4>10th Maharashtra State Board</h4>
                  <h5>Mar 2017</h5>
                  <p><em>Maharana Pratap Vidyalaya, Bhusawal | Percentage: 91.20%</em></p>
                </div>
                

                <h3 className="resume-title">ACHIEVEMENTS</h3>
                <div className="resume-item">
                  <h4>Winner - Mindquisitive Hackathon</h4>
                  <h5>Mar 2022</h5>
                  <p><em>Mindquisitive Hackathon among <b>75+ groups</b></em></p>
                </div>
                <div className="resume-item">
                  <h4>Winner - Internal Smart India Hackathon</h4>
                  <h5>April 2022</h5>
                  <p><em>held in College for nominating teams for Smart India Hackathon 2022</em></p>
                </div>

              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Projects</h3>
                <div className="resume-item">
                  <h4>MahaSIG Portal</h4>
                  <h5>Jan 2022 - Mar 2022</h5>
                  <p><em>Group Project - Project for Mindquisitive Hackathon</em></p>
                  <ul>
                    <li>Maha Student-Industry-Government portal.
                      Developed a full-stack web application with
                      4 different dashboards SuperAdmin, Admin,
                      Industry User, Alumni User</li>
                    <li>P2p Chat and Group Chat System</li>
                    <li>Engineered features such as OTP verification
                      and automated password reset mails
                      from scratch</li>
                    <li>Enhanced Student List Data Creation using
                      in-built spreadsheet and pdf generation
                      and download</li>
                    <li>Deployed and maintained Azure Vm instance
                      for 10 days</li>
                    <li>Python | Django | Channels | Redis |
                      PostgreSQL | Bootstrap | JS | Ajax</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Stellar AI</h4>
                  <h5>Nov 2021 - Mar 2022</h5>
                  {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                  <ul>
                    <li>A Stellar AI Code-room is unique environment
                      where you can do <b>collaborative real time
                        coding </b>with anyone you are friends on Stellar
                      AI Ecosystem</li>
                    <li>Python | Django | REST API | Web Socket |
                      Jupyter Notebook | AJAX | AWS</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Vowsnviews</h4>
                  <h5>Sept 2021 - Nov 2021</h5>
                  {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                  <ul>
                    <li>Vow’sn Views is an Indian Wedding Planning
                      Web Application where vendors come
                      together and serve their services and normal
                      user can use them</li>
                    <li>Python | Django | REST API | AJAX | AWS Cloud</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Golden Nest</h4>
                  <h5>Jun 2021 - Aug 2021</h5>
                  {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                  <ul>
                    <li>GoldenNest is web application for
                      restaurant which is capable of room
                      booking, ordering food, premium users
                      operation, etc.</li>
                    <li>Python | Django | REST API | AJAX | AWS Cloud</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>The Eye (Facial Recognition) </h4>
                  <h5>Aug 2019 - Jan 2020</h5>
                  {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                  <ul>
                    <li>· This project was sponsored project by Police Commissioner Office (Nashik). Project was developed in python
                      web framework.</li>
                    <li>App takes one image from user and map out and extract facial features like ears, eyes, etc. and search values in
                      the database and show result</li>
                    <li>Python | Flask | HTML | Bootstrap | CSS | Electron</li>
                  </ul>
                </div>



                <h3 className="resume-title">COMPETITIVE CODING</h3>
                <div className="resume-item">
                  <h4>Leetcode</h4>
                  <h5>2021 - Current</h5>
                  {/* <p><em>Mindquisitive Hackathon among <b>75+ groups</b></em></p> */}
                  <ul>
                    <li>Currently solved 200+ problems</li>
                    <li>Golbal Rank - 221,847</li>
                    <li>Highest Contest Rating - 1497</li>
                    <li>Top - 62.16 %</li>
                  </ul>
                </div>
                
              </div>

              

            



            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default Resume
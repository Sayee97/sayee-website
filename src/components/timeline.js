import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Development Intern, Amazon Web Services, Seattle, Washington, USA<span> June 2020 - August 2020</span> </h2> 
                        <ul>
                        <li>AWS Control Tower is a service that is intended for organizations with multiple accounts and teams who are looking for the easiest way to set up their new multi-account AWS environment and govern at scale. </li>
                        <li> Developed a feature on Control Tower Dashboard in an intent to make it more customizable. </li>
                        <li>Managed to integrate both the front end as well as backend for the project using React, Typescript, Guice, Java and used various underlying AWS services to serve the purpose.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Student Researcher, Spatial Computing Lab, USC<span> October 2019 - Present </span><a href= "https://spatial-computing.github.io/#people"><u className="icon-monitor">Website</u></a></h2> 
                        <ul>
                        <li>I work on the Jonsnow Project which aims at predicting Air Quality Index in Los Angeles.</li>
                        <li>Handled backend of the website using MongoDB, REST APIs</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Summer Research Fellow, IIT Delhi, India <span>May 2018 - July 2018</span></h2>
                        <ul>
                        <li>I worked on the project “Analysis of Human Development using Satellite Data”.</li>
                        <li>This project aimed to predict socio-economic parameters in census data by using satellite imagery of Landsat.</li>
                        <li> Transfer Learning methods were used for ImageNet architecture in which 1,97,000 images of villages of 6 states were trained to predict socio-economic parameters achieving an average accuracy of 79%. </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Development Intern, L&T Infotech, India<span> May 2017 - July 2017</span></h2>


                        <ul>
                        <li>I worked on the project “Poster CinemAR”.</li>
                        <li>Using Wikitude AR, built an android application coupled with augmented reality </li>
                        <li>Movie posters were scanned and recognized using Image recognition API of Wikitude SDK and movie related dashboard was overlayed as AR</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>

      <section class="colorlib-education" data-section="education">
        <div class="colorlib-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta">Education</span>
              <h2 class="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div class="fancy-collapse-panel">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master's in Computer Science, University of Southern California
                              </a>
                          </h4>
                      </div>
                      <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                           <div class="panel-body">
                              <div class="row">
                              <div class="col-md-6">
                                <p>Fall 2019 - Present </p>
                              </div>
                              <div class="col-md-6">
                                <p>Courses: CSCI 544, CSCI 585, CSCI 570, CSCI 561</p>
                              </div>
                            </div>
                           </div>
                      </div>
                  </div>
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                          <h4 class="panel-title">
                              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">B.Tech in Computer Engineering, NIT Surat, India 
                              </a>
                          </h4>
                      </div>
                      <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                              <div class="row">
                              <div class="col-md-6">
                                <p>2015 - 2019 </p>
                              </div>
                              <div class="col-md-6">
                                <p> CGPA 8.98/10 </p>
                                <p>Courses: Algorithms, Machine Learning, Data Science </p>
                              </div>
                            </div>
                           </div>
                      </div>
                  </div>
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                          <h4 class="panel-title">
                              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">HSC (10+2 school) 
                              </a>
                          </h4>
                      </div>
                      <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                              <div class="row">
                              <div class="col-md-6">
                                <p>2013 - 2015</p>
                              </div>
                              <div class="col-md-6">
                                <p> 94.8%</p>
                                <p>Secured rank in 0.5% in my country amongst 1.5 million students</p>
                              </div>
                            </div>
                           </div>
                      </div>
                  </div>
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingFour">
                          <h4 class="panel-title">
                              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">10th
                              </a>
                          </h4>
                      </div>
                      <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                          <div class="panel-body">
                              <p> 2013 batch, 96% </p>
                          </div>
                      </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    )
  }
}
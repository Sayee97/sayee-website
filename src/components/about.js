import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p> I am a Master's student at University of Southern California. All of my experiences in life have reinforced my belief that the Computer Science is a field that holds an exceptional captivation to my heart, and that to develop answers for masses is my calling. </p>

                    <p> I love to explore new technologies and can adopt to new ones easily!</p>
                    <p> I am a quick learner and I believe that one's will and hardwork will make that person achieve all the dreams and turn them into reality </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>





        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my explored domains I love working on...</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Data Structures - Algorithms</h3>
                    <p>Every CS person ought to be well versed with it! </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>Implemented many projects like Digit Classification, Spam Classifier and more!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Android App Development</h3>
                    <p>Using Java, Firebase I have created end to end Android Applications</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Deep Learning</h3>
                    <p>Object Detection using YOLO, VGG Net. Analysed geospatial data using Google Earth Engine</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>Built REST APIs using Flask. Worked with React to build web apps like online bookstore, trip planner</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-database" />
                </span>
                <div className="desc">
                    <h3>AWS Cloud Computing</h3>
                    <p>Worked with AWS services like S3, EC2, Sagemaker. Well versed with NoSQL and SQL databases</p>
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

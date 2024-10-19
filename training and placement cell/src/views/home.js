import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Oily Parallel Quetzal</title>
        <meta property="og:title" content="Oily Parallel Quetzal" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text10 thq-body-small">
              Discover the latest placement opportunities.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Join Now</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">
              /about-us
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13 thq-body-large">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text14 thq-link thq-body-small">/home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text15 thq-body-large">
              Placement Opportunities
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text16 thq-body-large">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17 thq-link thq-body-small">
              /placement-opportunities
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text18 thq-body-small">
              Welcome to the SLRTCE Training and Placement Cell.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text19 thq-body-small">
              Learn more about the SLRTCE Training and Placement Cell.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20 thq-link thq-body-small">
              /training-programs
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text21 thq-body-large">
              Training Programs
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Explore our various training programs.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text23">Apply Now</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text24 thq-body-small">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text25 thq-body-small">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26 thq-heading-1">
              Welcome to SLRTCE Training and Placement Cell
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text27 thq-body-large">
              Empowering students to achieve their career goals
            </span>
          </Fragment>
        }
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text28 thq-body-small">
              Placement Assistance
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text29 thq-heading-2">Career Support</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text30 thq-body-small">
              Skill Development Workshops
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text31 thq-heading-2">
              Professional Training
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text32 thq-body-small">
              Enhance Your Skills with Professional Training Sessions
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text33 thq-heading-2">
              Hands-on Workshops
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text34 thq-heading-2">
              Get in touch with us
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text35 thq-body-large">
              Contact us for more information about our training and placement
              services.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text36">Contact Us</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text37 thq-body-small">
              We provide career guidance sessions to help students make informed
              decisions about their future endeavors.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              We offer a wide range of training programs to enhance the skills
              and knowledge of our students.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text39 thq-heading-2">
              Placement Assistance
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text40 thq-heading-2">Training Programs</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text41 thq-body-small">
              Our dedicated placement cell provides assistance to students in
              securing job opportunities in reputed companies.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text42 thq-heading-2">Career Guidance</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1549192477-af32a8750404?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzk2NzA0Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Features25>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text43 thq-body-small">
              Discover various job opportunities and internships aligned with
              your skills and interests.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Receive personalized support and guidance for resume building,
              interview preparation, and job search strategies.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text45 thq-heading-2">
              Enhance Your Skills
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text46 thq-body-small">
              Participate in skill development workshops and training sessions
              to enhance your capabilities.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text47 thq-heading-2">
              Explore Opportunities
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text48 thq-heading-2">
              Get Placement Support
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text49 thq-body-small">
              Utilize the resources and connections provided by the training and
              placement cell to secure your desired job or internship.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text50 thq-heading-2">
              Secure Your Dream Job
            </span>
          </Fragment>
        }
        rootClassName="steps2root-class-name"
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text51 thq-body-small">Data Analyst</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text52 thq-body-small">
              Software Engineer
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text53 thq-body-large">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text54 thq-body-large">Michael Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text55 thq-body-small">
              SLRTCE not only helped me enhance my technical skills but also
              provided me with interview preparation sessions that boosted my
              confidence. I landed a job at my dream company, all thanks to
              them.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text56 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text57 thq-body-small">UX Designer</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text58 thq-body-large">Emily Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text59 thq-body-small">
              I am grateful to the training and placement cell at SLRTCE for
              helping me secure a job at a leading tech company. Their guidance
              and support were invaluable.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text60 thq-body-small">Web Developer</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text61 thq-body-small">
              The training provided by SLRTCE was top-notch and directly
              applicable to the industry. I would highly recommend their
              services to anyone looking to kickstart their career.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text62 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text63 thq-body-small">
              The placement cell at SLRTCE went above and beyond to connect me
              with potential employers. Their dedication and personalized
              approach made all the difference in my job search journey.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text64 thq-body-small">
              I can&apos;t thank SLRTCE enough for their continuous support and
              mentorship. They not only helped me secure a job but also provided
              valuable insights into the industry trends.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text65 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text66 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text67 thq-heading-2">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text68 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text69 thq-heading-3">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text70 thq-heading-3">Cluj - Napoca</span>
          </Fragment>
        }
        rootClassName="contact10root-class-name"
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text71 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text72 thq-body-small">Events</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text73 thq-body-small">
              Training Programs
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text74 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text75 thq-body-small">
              Placement Services
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text76 thq-body-small">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text77 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text78 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home

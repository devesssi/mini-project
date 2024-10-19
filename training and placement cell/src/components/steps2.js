import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div
      className={`steps2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text29 thq-heading-2">
                      Explore Opportunities
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text25 thq-body-small">
                      Discover various job opportunities and internships aligned
                      with your skills and interests.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text27 thq-heading-2">
                      Enhance Your Skills
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text28 thq-body-small">
                      Participate in skill development workshops and training
                      sessions to enhance your capabilities.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text30 thq-heading-2">
                      Get Placement Support
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text26 thq-body-small">
                      Receive personalized support and guidance for resume
                      building, interview preparation, and job search
                      strategies.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text32 thq-heading-2">
                      Secure Your Dream Job
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text31 thq-body-small">
                      Utilize the resources and connections provided by the
                      training and placement cell to secure your desired job or
                      internship.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step4Title: undefined,
  rootClassName: '',
}

Steps2.propTypes = {
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step4Title: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Steps2

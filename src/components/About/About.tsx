import React from 'react';
import { BoldHeading } from '../utils/Text';
import myPicture from './../../images/my picture.png'
import graduationHat from './graduation-hat.png'

const About = () => {
    return (
        <div className="section pt-5 mt-5 mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <img src={myPicture} />
                    </div>
                    <div className="col">
                        <BoldHeading>
                            I recently graduated with a bachelor's degree in computer science.
                        </BoldHeading>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="py-4">
                                <b>CGPA: 3.38</b> <br />
                                <span>Comsats University, Islamabad</span>
                            </p>
                            <div className="ml-5" style={{ width: "256px", transform: "rotate(45deg)" }}>
                                <img src={graduationHat} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About
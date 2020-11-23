import React from 'react'
import { BoldHeading, SubHeading } from '../utils/Text'

const Hero = () => {
    return (
        <div className="section py-5 bg-light-pink">
            <div className="container d-flex justify-content-between">
                <div className="flex-grow-1">

                    <SubHeading>
                        Hey there, I am <span className='text-dark-pink'>Arbaz Ajaz</span>.
                    </SubHeading>
                    <BoldHeading>
                        MERN Stack & <br />
                        Wordpress Developer.
                    </BoldHeading>
                    <p>Started coding when I was in 9th Grade and have not stopped since.</p>
                    <a href="/Resume - Arbaz Ajz.pdf" download className="btn btn-dark rounded-0">Download Resume</a>

                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Hero
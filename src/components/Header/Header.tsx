import React from 'react';
import { AiOutlineGithub, AiFillMediumSquare } from 'react-icons/ai'
import { ImLinkedin, ImDribbble } from 'react-icons/im'
const Header = () => {
    return (
        <header className='section py-3 bg-light-pink'>
            <div className="container">
                <div className="row">

                    <nav className='col text-left d-flex align-items-center'>
                        <a href="#" className="mx-2 small text-dark font-weight-bolder">About</a>
                        <a href="#" className="mx-2 small text-dark font-weight-bolder">Portfolio</a>
                        <a href="#" className="mx-2 small text-dark font-weight-bolder">Contact</a>
                    </nav>
                    <nav className='col d-flex justify-content-end'>
                        <a target="_blank" href="https://dribbble.com/zabarsabar" className="px-3 text-dark"><ImDribbble size={18} /></a>
                        <a target="_blank" href="https://arbaz5256.medium.com" className="px-3 text-dark"><AiFillMediumSquare size={18} /></a>
                        <a target="_blank" href="https://github.com/arbaz52" className="px-3 text-dark"><AiOutlineGithub size={18} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/arbaz-ajaz" className="px-3 text-dark"><ImLinkedin size={18} /></a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
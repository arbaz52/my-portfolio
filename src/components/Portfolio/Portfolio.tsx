import React, { useEffect, useRef, useState } from 'react';
import { BoldHeading, SubHeading } from '../utils/Text';
import ThumbnailEventFlow from './thumbnails/thumbnail-event-flow.png';
import ThumbnailInteriorDesign from './thumbnails/thumbnail-interior-design.png';
import ThumbnailKarmaFairy from './thumbnails/thumbnail-karma-fairy.png';
import ThumbnailLitsPay from './thumbnails/thumbnail-lits-pay.png';
import ThumbnailShopee from './thumbnails/thumbnail-shopee.png';

import SnapEventFlow from './wordpress/event-flow.png';
import SnapInteriorDesign from './wordpress/interior-design.png';
import SnapKarmaFairy from './wordpress/karma-fairy.png';
import SnapLitsPay from './wordpress/lits-pay.png';
import SnapShopee from './wordpress/shopee.png';

import background from './background.png'
import { AnimatePresence, motion } from 'framer-motion';


const Portfolio = () => {
    return (
        <div className="section py-5" style={{ background: `url("${background}")`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <WordpressPortfolio />
            <ReactPortfolio />
        </div>
    )
}



const WordpressPortfolio = () => {
    const wordpressProjects = [
        {
            imageSrc: ThumbnailEventFlow,
            siteUrl: "",
            snapSrc: SnapEventFlow
        },
        {
            imageSrc: ThumbnailInteriorDesign,
            siteUrl: "",
            snapSrc: SnapInteriorDesign
        },
        {
            imageSrc: ThumbnailKarmaFairy,
            siteUrl: "",
            snapSrc: SnapKarmaFairy
        },
        {
            imageSrc: ThumbnailLitsPay,
            siteUrl: "",
            snapSrc: SnapLitsPay
        },
        {
            imageSrc: ThumbnailShopee,
            siteUrl: "",
            snapSrc: SnapShopee
        },
    ]
    const [currentlyViewing, setCurrentlyViewing] = useState<false | number>(false)

    const viewThis = (i: number) => {
        setCurrentlyViewing(i)
    }
    const closeViewer = () => {
        setCurrentlyViewing(false)
    }
    console.log(typeof currentlyViewing === 'number', typeof currentlyViewing)

    return (
        <div className="container py-5">
            <ViewWordpressProject
                setVisible={closeViewer}
                isVisible={typeof currentlyViewing === 'number'}
                snapSrc={wordpressProjects[currentlyViewing || 0].snapSrc} />
            <SubHeading>
                Take a look at my work
            </SubHeading>
            <BoldHeading>
                Portfolio
            </BoldHeading>
            <p className="mb-5">
                These are some of the Wordpress websites I have created in the past few months.
            </p>
            <div className="row">
                {
                    wordpressProjects.map((project, i) => {
                        const { imageSrc } = project
                        return (
                            <div className="col-md-4 col-sm-6 col-xs-12 mb-5">
                                <motion.img
                                    onClick={e => viewThis(i)}
                                    whileHover={{ scale: 1.05, y: -16 }}
                                    whileTap={{ scale: 0.95 }}
                                    src={imageSrc}
                                    alt=""
                                    className="shadow img-fluid" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

interface ViewWordpressProjectProps {
    snapSrc: string;
    siteUrl?: string;
    isVisible?: any;
    setVisible?: () => void;
}
const ViewWordpressProject = (props: ViewWordpressProjectProps) => {
    const imageRef = useRef<HTMLImageElement>(null)
    const [imageHeight, setImageHeight] = useState(0)
    useEffect(() => {
        updateImageHeight()
    }, [imageRef, imageRef.current, props.isVisible])

    const updateImageHeight = () => {
        console.log(imageRef, imageRef.current)
        if (imageRef.current) {
            let node = imageRef.current
            let height = node.offsetHeight
            console.log("HEIGHT IS: " + height)
            setImageHeight(height)
        } else {
            console.log("ELSE")
        }
    }

    return (
        <AnimatePresence>
            {
                props.isVisible &&
                <motion.div
                    exit={{ opacity: 0, top: 500 }}
                    initial={{ top: 500, opacity: 0 }}
                    animate={{ top: 0, opacity: 1 }}
                    style={{ position: "fixed", zIndex: 24, top: 0, width: "100%", height: "100vh", left: 0, overflow: "hidden" }}>
                    <div
                        onClick={props.setVisible}
                        className="bg"
                        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: 'rgba(0, 0, 0, 0.5)', zIndex: -1 }}></div>
                    <div className="container py-5 px-0" style={{maxWidth: "80%"}}>
                        <motion.img onLoad={updateImageHeight} ref={imageRef} drag="y" dragConstraints={{ bottom: 0, top: -(imageHeight - 300) }} className="img-fluid" src={props.snapSrc} />
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}




const ReactPortfolio = () => {
    const reactProjects = [
        {
            title: "Estori",
            tags: ['stripe', 'react-redux', 'bootstrap', 'heroku'],
            description: "Developed a dummy E-commerce store using React-Redux for state Management, Designed using Bootstrap, integrated payment using Stripe and Deployed on Heroku.",
            githubLink: "https://github.com/arbaz52/next-with-stripe",
            liveDemoLink: "https://rstorer.herokuapp.com/"
        },
        {
            title: "Taskr",
            tags: ['react-beautiful-dnd', 'heroku', 'typescript', 'chakra'],
            description: "Developed a Trello clone using React.js and Typescript. Users can drag and drop columns, create new columns. Drag and drop tasks and create or delete tasks. It supports dragging from one source and dropping at another sourcetarget.",
            githubLink: "https://github.com/arbaz52/taskr-react-ts-with-dnd",
            liveDemoLink: "https://taskrrrr.herokuapp.com/"
        },
        {
            title: "QAVM",
            tags: ['Audio Video Call', 'Heroku', 'bootstrap', 'heroku'],
            description: "Abbreviation for Quick Audio Video Meetings. Zoom clone which does not require user to login in order to host or join a meeting. Implemented Audio/Video Communication by consuming Daily.co REST API.",
            githubLink: "https://github.com/arbaz52/qavm-react",
            liveDemoLink: "https://qavm.herokuapp.com/"
        }
    ]

    return (
        <div className="container py-5">
            <SubHeading>
                Hand picked best applications I've created, you can find the rest on Github
            </SubHeading>
            <BoldHeading>
                <span className="text-dark-pink">React.js</span> Applications
            </BoldHeading>
            <p className="">
                MongoDB, Express.js, React.js, Node.js, Redux, Chakra UI, Bootstrap.
            </p>
            <a href="https://github.com/arbaz52" className="btn btn-primary rounded-0 mb-5">View My Github</a>

            <div className="row">
                {
                    reactProjects.map(reactProject => {
                        const { title, tags, description, githubLink, liveDemoLink } = reactProject
                        return (
                            <div className="col-lg-6 col-sm-12 col-xs-12 mb-5">
                                <ReactProject
                                    title={title}
                                    tags={tags}
                                    description={description}
                                    githubLink={githubLink}
                                    liveDemoLink={liveDemoLink}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

interface ReactProjectProps {
    title: string;
    tags: string[];
    description: string;
    githubLink?: string;
    liveDemoLink?: string;
}
const ReactProject = (props: ReactProjectProps) => {
    return (
        <div className="react-project">
            <div className="d-flex align-items-center">
                <h3 className="m-0 font-weight-bold">{props.title}</h3>
                <div className="flex-grow-1 ml-1 text-right">
                    {
                        props.tags.map(
                            tag => {
                                return (
                                    <span className="small text-info mx-1">{tag}</span>
                                )
                            }
                        )
                    }
                </div>
            </div>
            <p className="my-2 text-muted small">
                {props.description}
            </p>
            <nav className="small">
                {props.githubLink && <a target="_blank" className="mr-2 btn btn-sm bg-dark-pink text-light rounded-0" href={props.githubLink}><small>Source Code</small></a>}
                {props.liveDemoLink && <a target="_blank" className="mr-2 btn btn-sm bg-dark-pink text-light rounded-0" href={props.liveDemoLink}><small>Live Demo</small></a>}
            </nav>
        </div>
    )
}


export default Portfolio
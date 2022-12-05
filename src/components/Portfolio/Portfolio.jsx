import React from 'react';
import {projects} from './projects'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { ShowComponent } from '../ShowComponent/ShowComponent'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <ShowComponent>
            <div className="portF-container" id="/portfolio">
                <h1>My Projects</h1>
                <div className="card-body">
                    {projects.map(({title, description, image, tags, source, visit, id}) => (
                        <div className='card-main'>
                            <div className='IMG-container'>
                                <img className='card-IMG' src={image} alt={`project-png-${id}`} loading='lazy' />
                            </div>
                            <div className='card-title'>
                                <h3 title='true'>{title}</h3>
                                <hr />
                            </div>
                            <div className='card-info'>
                                <ReactReadMoreReadLess
                                charLimit={10}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                >
                                {description}
                                </ReactReadMoreReadLess>
                            </div>
                            <div className='card-title'>
                                <h4 >stack</h4>
                                <ul className='card-tech'>
                                    {tags.map((tag, i) =>(
                                        <li className='tech' key={i}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <ul class='card-links'>
                                <a className='link' href={source} target='_blank' rel='noreferrer'>source code</a>
                                <a className='link' href={visit} target='_blank' rel='noreferrer'>live site</a>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </ShowComponent>
    )
}

export default Portfolio;
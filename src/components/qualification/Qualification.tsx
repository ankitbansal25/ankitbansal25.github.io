import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div 
                    className={ toggleState === 1 ?"qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                    onClick = {() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div 
                    className={ toggleState === 2 ?"qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={ toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">NIT Kurukshetra</h3>
                                <span className="qualification__subtitle">B.Tech (ECE) <br/>8.85</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2011 - 2015
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Sanatan Dharam Public School</h3>
                                <span className="qualification__subtitle">12th <br/> 93.6%</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2010 - 2011
                                </div>
                            </div>   
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Sanatan Dharam Public School</h3>
                                <span className="qualification__subtitle">10th <br/>88.2%</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2008 - 2009
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>


                    <div className={ toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Microsoft</h3>
                                <span className="qualification__subtitle">Software Engineer II</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Mar 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Autodesk</h3>
                                <span className="qualification__subtitle">Senior Software Engineer</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Oct 2018 - Mar 2022
                                </div>
                            </div>   
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Philips</h3>
                                <span className="qualification__subtitle">Senior Software Engineer</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr 2017 - Sept 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Philips</h3>
                                <span className="qualification__subtitle">Software Engineer</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jun 2015 - Mar 2017
                                </div>
                            </div>   
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Qualification;

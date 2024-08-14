"use client";

import styles from "./index.module.css";
import Image from 'next/image'
import profile from "@/../public/profile.png"

import reactIcon from "@/../public/reactIcon.png"
import nextjsIcon from "@/../public/nextjsIcon.svg"
import htmlIcon from "@/../public/htmlIcon.png"
import cssIcon from "@/../public/cssIcon.png"
import javascriptIcon from "@/../public/javascriptIcon.png"
import typescriptIcon from "@/../public/typescriptIcon.png"

import pythonIcon from "@/../public/pythonIcon.png"
import yoloIcon from "@/../public/yoloIcon.webp"
import opencvIcon from "@/../public/opencvIcon.png"

import arduinoIcon from "@/../public/arduinoIcon.png"
import raspberrypiIcon from "@/../public/raspberrypiIcon.png"
import cIcon from "@/../public/cIcon.png"
import ubuntuIcon from "@/../public/ubuntuIcon.png"

import githubIcon from "@/../public/githubIcon.png"
import linkedinIcon from "@/../public/linkedinIcon.png"
import emailIcon from "@/../public/emailIcon.png"

import arrowIcon from "@/../public/arrowIcon.png"

import hyphen from "@/../public/projectPreview/hyphen.png"
import daechelin from "@/../public/projectPreview/daechelin.png"
import lessflow from "@/../public/projectPreview/lessflow.png"
import ida from "@/../public/projectPreview/ida.png"

import * as TEXT from "./text"

const Main = () => {

    return(
        <main className={styles.main}>
            <section className={styles.firstScreen}>
                <section>
                    <section>
                        <h1 className={styles.name}>Sue-Hyun Jo</h1>
                        <p className={styles.job}>Junior Frontend Engineer</p>
                        <p className={styles.introduction}>{TEXT.INTRODUCTION}</p>
                    </section>

                    <section className={styles.skills}>
                        <h3>SKILLS</h3>
                        <section className={styles.frontendSkills}>
                            <h5>FRONTEND</h5>

                            <section className={styles.skillsIconWrapper}>
                                <Image src={reactIcon} alt=""/>
                                <Image src={nextjsIcon} alt=""/>
                                <Image src={typescriptIcon} alt=""/>
                                <Image src={javascriptIcon} alt=""/>
                                <Image src={htmlIcon} alt=""/>
                                <Image src={cssIcon} alt=""/>
                            </section>
                        </section>

                        <section className={styles.embeddedSkills}>
                            <h5>EMBEDDED SOFTWARE</h5>

                            <section className={styles.skillsIconWrapper}>
                                <Image src={arduinoIcon} alt="" className={styles.arduinoIcon}/>
                                <Image src={raspberrypiIcon} alt=""/>
                                <Image src={cIcon} alt=""/>
                                <Image src={ubuntuIcon} alt=""/>
                            </section>
                        </section>

                        <section className={styles.aiSkills}>
                            <h5>AI</h5>

                            <section className={styles.skillsIconWrapper}>
                                <Image src={pythonIcon} alt=""/>
                                <Image src={opencvIcon} alt=""/>
                                <Image src={yoloIcon} alt="" className={styles.yoloIcon}/>
                            </section>
                        </section>

                    </section>
                </section>
                
                <section className={styles.profileSection}>
                    <Image src={profile} alt={"profile"} className={styles.profile}/>

                    <section className={styles.contants}>

                        <section className={styles.contactsIconWrapper}>
                            <a href="https://github.com/sueeeeh">
                                <Image src={githubIcon} alt="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/su-hyeon-cho/">
                                <Image src={linkedinIcon} alt="linkedin"/>
                            </a>
                            <div onClick={() => {alert("suehyun51@gmail.com")}}>
                                <Image src={emailIcon} alt="email"/>
                            </div>
                        </section>
                    </section>
                </section>

                <div className={styles.toNextPageArrowBox}>
                    <p>Projects</p>
                    <Image src={arrowIcon} alt=""/>
                </div>

            </section>

            <section className={styles.secondScreen}>

                <div className={styles.projectBox}>
                    <Image src={hyphen} alt="hyphen"/>

                    <div className={styles.projectInfoWrapper}>
                        <div className={styles.projectUrlWrapper}>
                            <a href="https://hyphen-frontend.vercel.app/" target="_blank" className={styles.projectlUrl}>
                                <h3>Hyphen</h3>
                                <Image src={arrowIcon} alt="go to" className={styles.projectUrlArrow}/>
                            </a>
                        </div>
                        <h5 className={styles.projectIntroduction}>{TEXT.HYPHENINTRODUCTION}</h5>

                        <p>
                            {TEXT.HYPHENIWHATIDO}
                            <a href="https://github.com/Juchayeossda/hyphen-frontend" target="_blank" className={styles.projectGithubUrl}>
                                <p>- Source Code</p>
                                <Image src={arrowIcon} alt="go to" className={styles.projectGithubArrow}/>
                            </a>
                        </p>
                    </div>
                </div>

                <div className={styles.projectBox}>
                    <Image src={daechelin} alt="Daechelin-Guide"/>

                    <div className={styles.projectInfoWrapper}>
                        <div className={styles.projectUrlWrapper}>
                            <a href="https://daechelin-guide-web.vercel.app/ranking" target="_blank" className={styles.projectlUrl}>
                                <h3>Daechelin Guide</h3>
                                <Image src={arrowIcon} alt="go to" className={styles.projectUrlArrow}/>
                            </a>
                        </div>
                        <h5 className={styles.projectIntroduction}>{TEXT.DAECHELININTRODUCTION}</h5>

                        <p>
                            {TEXT.DAECHELINWHATIDO}
                            <a href="https://github.com/Daechelin-Guide/Daechelin-Guide-Web" target="_blank" className={styles.projectGithubUrl}>
                                <p>- Source Code</p>
                                <Image src={arrowIcon} alt="go to" className={styles.projectGithubArrow}/>
                            </a>
                        </p>
                    </div>
                </div>

                <div className={styles.projectBox}>
                    <Image src={lessflow} alt="Daechelin-Guide"/>

                    <div className={styles.projectInfoWrapper}>
                        <div className={styles.projectUrlWrapper}>
                            <a href="https://lessflow-frontend-v2.vercel.app/" target="_blank" className={styles.projectlUrl}>
                                <h3>lessf!ow v2</h3>
                                <Image src={arrowIcon} alt="go to" className={styles.projectUrlArrow}/>
                            </a>
                        </div>
                        <h5 className={styles.projectIntroduction}>{TEXT.LESSFLOWINTRODUCTION}</h5>

                        <p>
                            {TEXT.LESSFLOWWHATIDO}
                            <a href="https://github.com/EntryCNS/lessflow-frontend-v2" target="_blank" className={styles.projectGithubUrl}>
                                <p>- Source Code</p>
                                <Image src={arrowIcon} alt="go to" className={styles.projectGithubArrow}/>
                            </a>
                        </p>
                    </div>
                </div>

                <div className={styles.projectBox}>
                    <Image src={ida} alt="Daechelin-Guide"/>

                    <div className={styles.projectInfoWrapper}>
                        <div className={styles.projectUrlWrapper}>
                            <h3>Ida v2</h3>
                        </div>
                        <h5 className={styles.projectIntroduction}>{TEXT.IDAINTRODUCTION}</h5>

                        <p>
                            {TEXT.IDAWHATIDO}
                        </p>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Main;
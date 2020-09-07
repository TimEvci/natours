import React from "react";
import nat_1_lg from "../img/nat-1-large.jpg";
import nat_2_lg from "../img/nat-2-large.jpg";
import nat_3_lg from "../img/nat-3-large.jpg";

const Main = () => {

    return (
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            You're going to fall in love with nature
                        </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda deleniti dolor
                            dolore
                            dolorem dolores ipsam, quia quidem ratione reprehenderit, ullam unde, veniam? Nesciunt nulla
                            porro,
                            repellendus tempora totam voluptatem.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Live adventures like you never have before
                        </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequatur
                            consequuntur, culpa distinctio error fuga harum magni nisi.
                        </p>
                        <a href="#" className="btn-text">
                            Learn more &rarr;
                        </a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={nat_1_lg} alt="Photo 1"
                                 className="composition__photo composition__photo--p1"/>
                            <img src={nat_2_lg} alt="Photo 2"
                                 className="composition__photo composition__photo--p2"/>
                            <img src={nat_3_lg} alt="Photo 3"
                                 className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-features">
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"/>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Explore the world
                            </h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nostrum, voluptas?
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-compass"/>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Meet Nature
                            </h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis expedita, itaque!
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-map"/>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Find your way
                            </h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, totam, ut?
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-heart"/>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Live a healthier life
                            </h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, est, labore.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Most popular tours
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <div className="card__heading">

                                </div>
                                <div className="card__details">

                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                Card text
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <div className="card__heading">

                                </div>
                                <div className="card__details">

                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                Card text
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <div className="card__heading">

                                </div>
                                <div className="card__details">

                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                Card text
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )

}

export default Main;
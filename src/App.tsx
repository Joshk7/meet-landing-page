import "./App.css";
import { Button } from "./components/button/Button";
import { Number } from "./components/number/Number";

const App = () => {
    return (
        <>
            <header>
                <nav>
                    <img
                        className="nav__img"
                        alt="Meet Logo"
                        src="/assets/logo.svg"
                        height={28}
                        width={118}
                    />
                </nav>
            </header>
            <section className="hero">
                <picture className="hero__banner">
                    <img
                        className="hero__img"
                        src="/assets/tablet/image-hero.png"
                        alt="Banner"
                    />
                </picture>
                <div className="hero__container">
                    <picture className="hero__left">
                        <img
                            className="hero__left--img"
                            src="/assets/desktop/image-hero-left.png"
                            alt="Banner Left"
                        />
                    </picture>
                    <div className="hero__text">
                        <h1 className="hero__text--title">
                            Group Chat <br />
                            for Everyone
                        </h1>
                        <p className="hero__text--description">
                            Meet makes it easy to connect with others
                            face-to-face virtually and collaborate across any
                            device.
                        </p>
                        <div className="hero__buttons">
                            <Button color="cyan">
                                Download <span>v1.3</span>
                            </Button>
                            <Button>What is it?</Button>
                        </div>
                    </div>
                    <picture className="hero__right">
                        <img
                            className="hero__right--img"
                            src="/assets/desktop/image-hero-right.png"
                            alt="Banner Right"
                        />
                    </picture>
                </div>
            </section>
            <main className="center">
                <div className="center__container">
                    <Number>01</Number>
                    <ul className="center__list">
                        <li className="center__list--item">
                            <img
                                className="center__list--img"
                                src="/assets/desktop/image-woman-in-videocall.jpg"
                                alt="Woman in video call"
                            />
                        </li>
                        <li className="center__list--item">
                            <img
                                className="center__list--img"
                                src="/assets/desktop/image-women-videochatting.jpg"
                                alt="Women video chatting"
                            />
                        </li>
                        <li className="center__list--item">
                            <img
                                className="center__list--img"
                                src="/assets/desktop/image-men-in-meeting.jpg"
                                alt="Men in meeting"
                            />
                        </li>
                        <li className="center__list--item">
                            <img
                                className="center__list--img"
                                src="/assets/desktop/image-man-texting.jpg"
                                alt="Man texting"
                            />
                        </li>
                    </ul>
                    <div className="center__text">
                        <div className="center__heading">
                            <span className="center__heading--span">
                                Built for modern use
                            </span>
                            <h2 className="center__heading--title">
                                Smarter meetings, all in one place
                            </h2>
                        </div>
                        <p className="center__description">
                            Send messages, share files, show your screen, and
                            record your meetings — all in one workspace. Control
                            who can join with invite-only team access, data
                            encryption, and data export.
                        </p>
                    </div>
                </div>
            </main>
            <footer>
                <div className="footer__overlay">
                    <Number>02</Number>
                </div>
                <div className="footer__container">
                    <picture className="footer__picture">
                        <source
                            srcSet="/assets/desktop/image-footer.jpg"
                            media="(min-width: 56.25rem)"
                        />
                        <source
                            srcSet="/assets/tablet/image-footer.jpg"
                            media="(min-width: 31.25rem)"
                        />
                        <img
                            className="footer__img"
                            src="/assets/mobile/image-footer.jpg"
                            alt="Woman on Laptop"
                        />
                    </picture>
                    <div className="footer__background" />
                    <ul className="footer__list">
                        <li className="footer__list--item first">
                            <h2 className="footer__header">
                                Experience more together
                            </h2>
                        </li>
                        <li className="footer__list--item second">
                            <p className="footer__description">
                                Stay connected with reliable HD meetings and
                                unlimited one-on-one and group video sessions.
                            </p>
                        </li>
                        <li className="footer__list--item third">
                            <Button>
                                Download <span>v1.3</span>
                            </Button>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default App;

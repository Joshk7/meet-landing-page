import "./App.css";
import { Logo } from "./components/logo/Logo";
import { Button } from "./components/button/Button";
import { Number } from "./components/number/Number";

const App = () => {
    return (
        <>
            <header>
                <Logo />
            </header>
            <section className="hero">
                <div className="container">
                    <div className="hero__banner-container">
                        <img
                            className="banner-img"
                            src="/assets/tablet/image-hero.png"
                            alt="Banner"
                        />
                    </div>
                    <div className="hero__text-container">
                        <h1>
                            Group Chat <br />
                            for Everyone
                        </h1>
                        <p>
                            Meet makes it easy to connect with others
                            face-to-face virtually and collaborate across any
                            device.
                        </p>
                        <div className="hero__button-container">
                            <Button color="cyan">Download v1.3</Button>
                            <Button>What is it?</Button>
                        </div>
                    </div>
                </div>
            </section>
            <main className="main-content">
                <div className="container main-container">
                    <Number>01</Number>
                    <div className="customer-grid">
                        <img
                            className="grid-img"
                            src="/assets/desktop/image-woman-in-videocall.jpg"
                            alt="Woman in video call"
                        />
                        <img
                            className="grid-img"
                            src="/assets/desktop/image-women-videochatting.jpg"
                            alt="Women video chatting"
                        />
                        <img
                            className="grid-img"
                            src="/assets/desktop/image-men-in-meeting.jpg"
                            alt="Men in meeting"
                        />
                        <img
                            className="grid-img"
                            src="/assets/desktop/image-man-texting.jpg"
                            alt="Man texting"
                        />
                    </div>
                    <div className="main-content__text">
                        <div className="main-content__heading">
                            <span className="main-content__title">
                                Built for modern use
                            </span>
                            <h2 className="main-content__header">
                                Smarter meetings, all in one place
                            </h2>
                        </div>
                        <p className="main-content__description">
                            Send messages, share files, show your screen, and
                            record your meetings — all in one workspace. Control
                            who can join with invite-only team access, data
                            encryption, and data export.
                        </p>
                    </div>
                </div>
            </main>
            <footer>
                <div className="container overlay">
                    <Number>02</Number>
                </div>
                <div className="footer-container">
                    <div className="footer-content">
                        <h2 className="footer-header">
                            Experience more together
                        </h2>
                        <p className="footer-description">
                            Stay connected with reliable HD meetings and
                            unlimited one-on-one and group video sessions.
                        </p>
                        <Button>Download v1.3</Button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default App;

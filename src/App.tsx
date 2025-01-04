import "./App.css";
import { Logo } from "./components/logo/Logo";

const App = () => {
    return (
        <>
            <header>
                <Logo />
            </header>
            <section className="hero">
                <div className="container">
                    <div className="banner-container">
                        <img
                            className="banner-img"
                            src="/public/assets/tablet/image-hero.png"
                            alt="Banner"

                        />
                    </div>
                </div>
                Meet makes it easy to connect with others face-to-face virtually
                and collaborate across any device. Download v1.3 What is it?
            </section>
            <main className="main-content">
                <div className="container"></div>
                01 Built for modern use Smarter meetings, all in one place Send
                messages, share files, show your screen, and record your
                meetings — all in one workspace. Control who can join with
                invite-only team access, data encryption, and data export.
            </main>
            <footer>
                02 Experience more together Stay connected with reliable HD
                meetings and unlimited one-on-one and group video sessions.
                Download v1.3
            </footer>
        </>
    );
};

export default App;

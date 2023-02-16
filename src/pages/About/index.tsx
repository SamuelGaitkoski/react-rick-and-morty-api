import './styles.scss';
import { Header } from '../../components/Header/index';
import { Footer } from '../../components/Footer';

export const About = () => {
    return (
        <>
            <Header />
            <div className="about">       
                <h1>About</h1>
                <div className="a-what-is-this">
                    <h3>What is this?</h3>
                    <p className="text-content-right-side">The Rick and Morty API is a REST(ish) and GraphQL API based on the television show <a href="" className="link-content-right-side">Rick and Morty</a>. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.</p>
                    <a href="" className="link-content-right-side">Check out the documentation to get started</a>
                </div>
                <div className="a-who-are-you">
                    <h3>Who are you?</h3>
                    <p className="text-content-right-side">We are <a href="" className="link-content-right-side">Axel Fuhrmann</a>, a guy who likes to develop things and <a href="" className="link-content-right-side">Talita</a>, the "Rick and Morty data scientist" and hardcore fan.</p>
                </div>
                <div className="a-why-did-you-build-this">
                    <h3>Why did you build this?</h3>
                    <p className="text-content-right-side">Because we were really interested in the idea of writing an open source project and also because Rick and Morty is our favorite show at that moment, so why not?</p>
                </div>
                <div className="a-technical-stuff">
                    <h3>Technical stuff?</h3>
                    <p className="text-content-right-side">The entire project is hosted on <a href="" className="link-content-right-side">Digital Ocean</a> and <a href="" className="link-content-right-side">Netlify</a>. GraphQL cache is handled through <a href="" className="link-content-right-side">Stellate</a>. We use <a href="" className="link-content-right-side">Node</a> and <a href="" className="link-content-right-side">MongoDB</a> to serve the API.</p>
                </div>
                <div className="a-contribute-project">
                    <h3>How can I contribute to the project?</h3>
                    <p className="text-content-right-side">You can <a href="" className="link-content-right-side">help us to keep the project alive</a> and you can also contribute on <a href="" className="link-content-right-side">GitHub</a>.</p>
                </div>
                <div className="a-copyright">
                    <h3>Copyright?</h3>
                    <p className="text-content-right-side">Rick and Morty is created by Justin Roiland and Dan Harmon for <a href="" className="link-content-right-side">Adult Swim</a>. The data and images are used without claim of ownership and belong to their respective owners.</p>
                    <p className="text-content-right-side">This API is open source and uses a BSD license.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
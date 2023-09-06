import Nav from './components/common/Nav';
import Hero from './components/Hero';
import Skills from './components/home-page/Skills';
import Scene from './components/Scene';
import Projects from './components/home-page/Projects';
import Contact from './components/home-page/Contact';
import Footer from './components/common/Footer';

export default function Page() {

    return (
        <>
            <Nav />
            <Scene />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

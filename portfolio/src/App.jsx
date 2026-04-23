import './App.css'
import './components/css/App.css.additions.css'

import { useRef } from "react";

import {Hero} from "./components/jsx/Hero.jsx";
import {InformacionGeneral} from "./components/jsx/InformacionGeneral.jsx";
import {Carousel} from "./components/jsx/Carousel.jsx";
import {Habilidades} from "./components/jsx/Habilidades.jsx";
import {Contacto} from "./components/jsx/Contacto.jsx";
import { FloatingControls } from "./components/jsx/FloatingControls.jsx";
import {AppProvider} from "@/components/jsx/AppContext.jsx";


function App() {
    const scrollerRef = useRef(null);

  return (
    <>
        <AppProvider>
            <section className={"scroller"} ref={scrollerRef}>
                <article id={"seccion1"}>
                    <Hero></Hero>
                </article>
                <article id={"seccion2"}>
                    <InformacionGeneral></InformacionGeneral>
                </article>
                <article id={"seccion3"}>
                    <Carousel></Carousel>
                </article>
                <article id={"seccion4"}>
                    <Habilidades></Habilidades>
                </article>
                <article id={"seccion5"}>
                    <Contacto></Contacto>
                </article>
            </section>

            <FloatingControls
                scrollerRef={scrollerRef}
                whatsappNumber="50685550293"
            />
        </AppProvider>
    </>
  )
}

export default App

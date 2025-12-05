import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Parallax() {

    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const mountain3 = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const header = useRef(null);
    const cardStack = useRef(null);
    const floatingDiceLeft = useRef(null);
    const floatingDiceLeftAlt = useRef(null);
    const floatingDiceRight = useRef(null);
    const magicContent = useRef(null);
    const magicChipLeft = useRef(null);
    const magicChipRight = useRef(null);
    const introTitle = useRef(null);
    const stagePanel = useRef(null);
    const copy = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                mountain3.current,
                {
                    y: "-=80",
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: "-=30",
                },
                0
            );
            tl.to(
                mountain1.current,
                {
                    y: "+=50",
                },
                0
            );
            tl.to(
                header.current,
                {
                    opacity: 0,
                    filter: "blur(8px)",
                },
                0.15
            );
            tl.to(
                stars.current,
                {
                    top: 0,
                },
                0.5
            );
            tl.to(
                cloudsBottom.current,
                {
                    opacity: 0,
                    duration: 0.5
                },
                0
            );
            tl.to(
                cloudsLeft.current,
                {
                    x: "-20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                cloudsRight.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                cardStack.current,
                {
                    y: "+=320",
                    rotate: -18,
                    scale: 0.8,
                    opacity: 0,
                },
                0
            );
            tl.to(
                floatingDiceLeft.current,
                {
                    x: "-=120",
                    y: "+=160",
                    rotate: 18,
                    opacity: 0,
                },
                0
            );
            tl.to(
                floatingDiceLeftAlt.current,
                {
                    x: "+=80",
                    y: "+=200",
                    rotate: -24,
                    scale: 0.9,
                    opacity: 0,
                },
                0.15
            );
            tl.to(
                floatingDiceRight.current,
                {
                    x: "+=140",
                    y: "+=200",
                    rotate: -16,
                    scale: 0.88,
                    opacity: 0,
                },
                0.1
            );
            tl.fromTo(
                introTitle.current,
                {
                    opacity: 1,
                    scale: 1.2,
                    y: 0,
                    filter: "blur(0px)",
                },
                {
                    opacity: 0,
                    scale: 0.65,
                    y: -60,
                    filter: "blur(10px)",
                    duration: 0.8,
                },
                0.12
            );
            tl.fromTo(
                stagePanel.current,
                {
                    opacity: 0,
                    scale: 0.6,
                    y: 240,
                    filter: "blur(12px)",
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 40,
                    filter: "blur(0px)",
                    duration: 1.2,
                },
                0.5
            );
            tl.fromTo(
                magicContent.current,
                {
                    opacity: 0,
                    y: 140,
                },
                {
                    opacity: 1,
                    y: -40,
                    duration: 1.2,
                },
                0.55
            );
            tl.fromTo(
                magicChipLeft.current,
                {
                    opacity: 0,
                    scale: 0.7,
                    x: 0,
                    y: 140,
                    rotate: -6,
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: -280,
                    y: -80,
                    rotate: -18,
                    duration: 1.4,
                },
                0.52
            );
            tl.fromTo(
                magicChipRight.current,
                {
                    opacity: 0,
                    scale: 0.7,
                    x: 0,
                    y: 140,
                    rotate: 8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: 260,
                    y: -40,
                    rotate: 22,
                    duration: 1.4,
                },
                0.56
            );
            tl.to(
                copy.current,
                {
                    y: "-40%",
                    opacity: 1
                },
                0.6
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="parallax-outer">
            <div
                id="show"
                ref={parallaxRef}
                style={{ background: `linear-gradient(#7EC8FF, #A9C7FF ${background}%, #F6C4DF, #FDF49B)` }}
                className='parallax'
            >
                <header ref={header} className="site-header">
                    <div className="logo">DAVID DE LA TORRE</div>
                    <nav>
                        <a href="#show">Seccion 1</a>
                        <a href="#about">Seccion 2</a>
                        <a href="#contact">Seccion 3</a>
                    </nav>
                </header>
                <img ref={mountain3} className='mountain-3' src="/parallax/mountain-3.svg" />
                <img ref={mountain2} className='mountain-2' src="/parallax/mountain-2.svg" />
                <img ref={mountain1} className='mountain-1' src="/parallax/mountain-1.svg" />
                <div ref={introTitle} className="intro-title">
                    <h2>DAVID<br />DE LA<br />TORRE</h2>
                </div>
                <div ref={cardStack} className='card-stack'>
                    <img className='card-layer layer-01' src="/parallax/layer-01-290x460.png" />
                    <img className='card-layer layer-02' src="/parallax/layer-02-375x500.png" />
                </div>
                <img ref={floatingDiceLeft} className='floating-dice floating-dice-left' src="/parallax/layer-06-130x120.png" />
                <img ref={floatingDiceLeftAlt} className='floating-dice floating-dice-left-2' src="/parallax/layer-06-130x120.png" />
                <img ref={floatingDiceRight} className='floating-dice floating-dice-right' src="/parallax/layer-06-130x120.png" />
                <img ref={cloudsBottom} className='clouds-bottom' src="/parallax/cloud-bottom.svg" />
                <img ref={cloudsLeft} className='clouds-left' src="/parallax/clouds-left.svg" />
                <img ref={cloudsRight} className='clouds-right' src="/parallax/clouds-right.svg" />
                <img ref={stars} className='stars' src="/parallax/stars.svg" />
                <div ref={stagePanel} className="stage-panel">
                    <h3>Acto secreto</h3>
                    <p>Un destello recorre las dunas; las sombras guardan la siguiente ilusión.</p>
                </div>
                
                <div ref={magicContent} className="magic-content">
                    <p>Cuando la noche cae, la magia empieza a flotar. Respira hondo.</p>
                    <div className="magic-chips">
                        <img ref={magicChipLeft} className="magic-chip chip-left" src="/parallax/layer-03-215x150.png" />
                        <img ref={magicChipRight} className="magic-chip chip-right" src="/parallax/layer-04-215x150.png" />
                    </div>
                </div>
                <div ref={copy} className="copy">
                    <h1>Mago e Ilusionista</h1>
                </div>
            </div>
        </div>
    )
}

export default Parallax

import { useState, useEffect, useRef, useCallback } from "react";
import "../css/Carousel.css";

import coinnectImg from "../../img/coinnect.png";
import demoImg from "../../img/demo_juego.png";

const PROJECTS = [
    {
        id: 1,
        title: "Coinnect",
        description: "Plataforma de ecommerce con pasarela de pago con criptomonedas y manejo de inventario",
        image: coinnectImg,
        tag: "Web App",
        repository: "https://github.com/dfallasm1804/coinnect"
    },
    {
        id: 2,
        title: "Demo de juego generación procedural",
        description: "Demo de un juego implementando patrones de diseño y generación procedural.",
        image: demoImg,
        tag: "Video juego",
        repository: "https://github.com/dfallasm1804/proyecto_patrones"
    }
];

export function Carousel() {
    const [active, setActive] = useState(0);
    const trackRef = useRef(null);
    const dragRef = useRef({ dragging: false, startX: 0, moved: 0 });
    const total = PROJECTS.length;

    const getCardVw = () => window.innerWidth <= 768 ? 0.85 : 0.7;
    const getCardW = () => window.innerWidth * getCardVw() + 24;

    const getOffset = useCallback((idx) => {
        const vw = window.innerWidth;
        const cardVw = getCardVw();
        const cardW = getCardW();
        const trackPadding = vw <= 768 ? 20 : 40;
        return -(idx * cardW) + vw / 2 - (vw * cardVw) / 2 - trackPadding;
    }, []);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${getOffset(active)}px)`;
        }
    }, [active, getOffset]);

    // Recalculate on resize
    useEffect(() => {
        const handleResize = () => {
            if (trackRef.current) {
                trackRef.current.style.transform = `translateX(${getOffset(active)}px)`;
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [active, getOffset]);

    const prev = () => setActive((a) => Math.max(0, a - 1));
    const next = () => setActive((a) => Math.min(total - 1, a + 1));

    // Keyboard nav
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    // Drag-to-navigate
    const onPointerDown = (e) => {
        dragRef.current = { dragging: true, startX: e.clientX, moved: 0 };
    };
    const onPointerMove = (e) => {
        if (!dragRef.current.dragging) return;
        dragRef.current.moved = e.clientX - dragRef.current.startX;
    };
    const onPointerUp = () => {
        if (!dragRef.current.dragging) return;
        dragRef.current.dragging = false;
        const moved = dragRef.current.moved;
        if (moved < -60) next();
        else if (moved > 60) prev();
    };

    const progress = ((active + 1) / total) * 100;

    return (
        <div className="pc-root">
            {/* Header */}
            <div className="pc-header">
                <div className="pc-title-group">
                    <h1 className="pc-title">Proyectos destacados</h1>
                </div>
                <p className="pc-counter">
                    <span>{String(active + 1).padStart(2, "0")}</span>
                    {" / "}
                    {String(total).padStart(2, "0")}
                </p>
            </div>

            {/* Carousel */}
            <div
                className="pc-viewport"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
            >
                <div className="pc-track" ref={trackRef}>
                    {PROJECTS.map((p, i) => (
                        <div
                            key={p.id}
                            className={`pc-card${i === active ? " active" : ""}`}
                            onClick={() => i === active ? window.open(p.repository, "_blank") : setActive(i)}
                        >
                            {i === active && (
                                <div className="pc-progress">
                                    <div className="pc-progress-fill" style={{ width: `${progress}%` }} />
                                </div>
                            )}
                            <img className="pc-card-img" src={p.image} alt={p.title} draggable={false} />
                            <div className="pc-card-overlay" />
                            <div className="pc-card-body">
                                <span className="pc-tag">{p.tag}</span>
                                <h2 className="pc-card-title">{p.title}</h2>
                                <p className="pc-card-desc">{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="pc-controls">
                <button className="pc-btn" onClick={prev} disabled={active === 0} aria-label="Previous">
                    &#8592;
                </button>
                <div className="pc-dots">
                    {PROJECTS.map((_, i) => (
                        <div
                            key={i}
                            className={`pc-dot${i === active ? " active" : ""}`}
                            onClick={() => setActive(i)}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>
                <button className="pc-btn" onClick={next} disabled={active === total - 1} aria-label="Next">
                    &#8594;
                </button>
            </div>
        </div>
    );
}
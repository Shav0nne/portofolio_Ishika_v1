import { useEffect, useState } from "react";

// Hook voor fade-in animatie
export function useFadeIn(delay = 0) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isVisible;
}

// Component voor fade-in secties
export function FadeInSection({ children, delay = 0, className = "" }) {
    const isVisible = useFadeIn(delay);

    return (
        <div
            className={`transition-all duration-700 transform ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            } ${className}`}
        >
            {children}
        </div>
    );
}

// Component voor fade-in van links
export function FadeInLeft({ children, delay = 0, className = "" }) {
    const isVisible = useFadeIn(delay);

    return (
        <div
            className={`transition-all duration-700 transform ${
                isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
            } ${className}`}
        >
            {children}
        </div>
    );
}

// Component voor fade-in van rechts
export function FadeInRight({ children, delay = 0, className = "" }) {
    const isVisible = useFadeIn(delay);

    return (
        <div
            className={`transition-all duration-700 transform ${
                isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
            } ${className}`}
        >
            {children}
        </div>
    );
}

// Component voor fade-in met schaal
export function FadeInScale({ children, delay = 0, className = "" }) {
    const isVisible = useFadeIn(delay);

    return (
        <div
            className={`transition-all duration-700 transform ${
                isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
            } ${className}`}
        >
            {children}
        </div>
    );
}

// Floating animatie class
export const floatAnimation = "animate-float";
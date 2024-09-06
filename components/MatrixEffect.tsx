'use client';

import { useEffect, useRef } from 'react';
import styles from './MatrixEffect.module.scss';

const MatrixEffect: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
    let divs: HTMLParagraphElement[] = [];
    let tops: { [key: number]: number } = {};
    let heights: { [key: number]: number | undefined } = {};
    let velocities: { [key: number]: number | undefined } = {};

    function randomInteger(a: number, b: number): number {
        return Math.floor(Math.random() * a) + b;
    }

    function randomText(): string {
        let text = '';
        for (let i = 0; i < 50; i++) {
            text += chars.charAt(randomInteger(chars.length, 0));
        }
        return text;
    }

    function changeText() {
        let index = 0;
        for (let e of divs) {
            index++;
            tops[index] = tops[index] === undefined ? 0 : tops[index] + 1;
            heights[index] = heights[index] ?? randomInteger(20, 3);
            velocities[index] = velocities[index] ?? randomInteger(5, 1);
            let text = randomText();
            text = text.slice(0, tops[index] * velocities[index]!) + '<span>' + chars.charAt(randomInteger(chars.length, 0)) + '</span>' + ' '.repeat(tops[index] < heights[index]! ? tops[index] : heights[index]!) + text.slice(tops[index] * velocities[index]!);
            e.innerHTML = text;
            if (text.endsWith(' ')) {
                tops[index] = 0;
                heights[index] = undefined;
                velocities[index] = undefined;
                e.style.color = Math.random() < 0.6 ? 'darkgreen' : 'limegreen';
            }
        }
    }

    function createDivs() {
        if (containerRef.current) {
            for (let i = 0; i < 45; i++) {
                let p = document.createElement('p');
                containerRef.current.append(p);
                divs.push(p);
            }
        }
    }

    useEffect(() => {
        createDivs();
        const interval = setInterval(changeText, 80);
        return () => clearInterval(interval);
    }, []);

    return <div className={styles.container + " w-full"} ref={containerRef}></div>;
};

export default MatrixEffect;
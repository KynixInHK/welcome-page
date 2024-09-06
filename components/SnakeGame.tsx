'use client';
import React, { useState, useEffect, useRef } from 'react';
import './SnakeGame.scss';
import {useSnapshot} from "valtio/react";
import {snakeStore} from "@/store/modules/snake";
import OldButton from "@/components/OldButton";

const SnakeGame: React.FC = () => {
    const boardSize = 20;
    const initialSnake = [{ x: 10, y: 10 }];
    const initialFood = { x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) };
    const [snake, setSnake] = useState(initialSnake);
    const [food, setFood] = useState(initialFood);
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const boardRef = useRef<HTMLDivElement>(null);
    const { isSnake, setIsSnake } = useSnapshot(snakeStore)

    const moveSnake = () => {
        if (gameOver) return;

        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        switch (direction) {
            case 'UP':
                head.y -= 1;
                break;
            case 'DOWN':
                head.y += 1;
                break;
            case 'LEFT':
                head.x -= 1;
                break;
            case 'RIGHT':
                head.x += 1;
                break;
            default:
                break;
        }

        // Check collision with wall or itself
        if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize || checkCollision(newSnake, head)) {
            setGameOver(true);
            return;
        }

        newSnake.unshift(head);

        // Check if food is eaten
        if (head.x === food.x && head.y === food.y) {
            setFood({ x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) });
            setScore(score + 1);
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    };

    const checkCollision = (snake: { x: number; y: number }[], head: { x: number; y: number }) => {
        return snake.some((segment) => segment.x === head.x && segment.y === head.y);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowUp':
                if (direction !== 'DOWN') setDirection('UP');
                break;
            case 'ArrowDown':
                if (direction !== 'UP') setDirection('DOWN');
                break;
            case 'ArrowLeft':
                if (direction !== 'RIGHT') setDirection('LEFT');
                break;
            case 'ArrowRight':
                if (direction !== 'LEFT') setDirection('RIGHT');
                break;
            case 'q':
                setIsSnake(false)
                break;
            default:
                break;
        }
    };

    const restartGame = () => {
        setSnake(initialSnake);
        setFood({ x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) });
        setDirection('RIGHT');
        setGameOver(false);
        setScore(0);
    };

    useEffect(() => {
        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [snake, direction, moveSnake]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [direction, handleKeyDown]);

    return (
        <div className="snake-game" ref={boardRef}>
            {gameOver ? (
                <div className="game-over">
                    <h1>Game Over</h1>
                    <p>Score: {score}</p>
                    <OldButton onClick={restartGame}>[ Restart ]</OldButton>
                </div>
            ) : (
                <div className="board">
                    {[...Array(boardSize)].map((_, row) => (
                        <div key={row} className="row">
                            {[...Array(boardSize)].map((_, col) => (
                                <div
                                    key={col}
                                    className={`cell ${
                                        snake.some((segment) => segment.x === col && segment.y === row) ? 'snake' : ''
                                    } ${food.x === col && food.y === row ? 'food' : ''}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SnakeGame;
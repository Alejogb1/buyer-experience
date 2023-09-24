import { useEffect, useRef, useCallback, useState } from "react";
// Concurrent users = Hourly Sessions x Avg. Session Duration (in minutes)/60 
// Concurrent users = Number of expected visits per minute * Visit Duration (in minutes)

// Define the function with TypeScript types for the parameters
export function randomTimeFromInterval(min: number, max: number): number {
    // min and max included
    return (Math.floor(Math.random() * (max - min + 1) + min) * 6000) / 6;
}

// Utility helper for random number generation
const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

// Define types for the useRandomInterval hook
type CallbackFunction = () => void;

const useRandomInterval = (callback: CallbackFunction, minDelay: number, maxDelay: number): (() => void) => {
    const timeoutId = useRef<number | null>(null);
    const savedCallback = useRef<CallbackFunction>(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = random(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current();
                    handleTick();
                }, nextTickAt);
            };
            handleTick();
        }

        return () => window.clearTimeout(timeoutId.current || undefined);
    }, [minDelay, maxDelay]);

    const cancel = useCallback(function () {
        window.clearTimeout(timeoutId.current || undefined);
    }, []);

    return cancel;
};

export default useRandomInterval

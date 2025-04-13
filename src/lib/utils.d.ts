import { MirtOptions } from '../Mirt';
export declare const toSeconds: (milliseconds: number) => number;
export declare const debounce: (fn: Function, ms?: number) => (this: any, ...args: any[]) => void;
export declare const getMinValue: (fineTuning: number, fineTuningResolution: number, duration: number) => number;
export declare const getMaxValue: (fineTuning: number, fineTuningResolution: number, duration: number) => number;
export declare const getStartHandleValue: (position: number, fineTuning: number, fineTuningResolution: number, duration: number) => string;
export declare const getRawData: (file: File) => Promise<Float32Array<ArrayBuffer>>;
export declare const getEndHandleValue: (position: number, fineTuning: number, fineTuningResolution: number, duration: number) => string;
export declare const getWaveformData: (rawData: Float32Array, canvas: HTMLCanvasElement, fineTuning: number, fineTuningResolution: number, duration: number, config: MirtOptions) => Promise<number[]>;

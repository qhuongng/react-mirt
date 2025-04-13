import React from 'react';
import { MirtOptions } from '../Mirt';
export interface MirtWaveformProps {
    file: File | null;
    fineTuning: number;
    fineTuningResolution: number;
    duration: number;
    config: MirtOptions;
    handleWaveformLoaded: () => void;
}
declare const Waveform: ({ file, fineTuning, fineTuningResolution, duration, config, handleWaveformLoaded, }: MirtWaveformProps) => React.JSX.Element;
export default Waveform;

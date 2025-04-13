import React from 'react';
export interface MirtProps {
    className?: string;
    style?: React.CSSProperties;
    file: File | null;
    onChange?: ({ start, current, end }: {
        start: number;
        current: number;
        end: number;
    }) => void;
    onAudioLoaded?: (audio: HTMLAudioElement) => void;
    onWaveformLoaded?: () => void;
    onError?: (error: Error) => void;
    start?: number;
    end?: number;
    options?: Partial<MirtOptions>;
}
export interface MirtOptions {
    showButton: boolean;
    waveformColor: string;
    waveformBlockWidth: number;
    waveformBarWidth: number;
    waveformLoading: boolean;
    fineTuningDelay: number;
    fineTuningScale: number;
}
declare const Mirt: ({ className, style, file, onChange, onAudioLoaded, onWaveformLoaded, onError, start: startValueOverwrite, end: endValueOverwrite, options, }: MirtProps) => React.JSX.Element;
export default Mirt;

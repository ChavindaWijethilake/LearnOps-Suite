'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: number[]) => void;
  defaultValue?: number[];
  value?: number[];
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, onValueChange, defaultValue, value, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange?.([parseFloat(e.target.value)])
    }

    const val = value?.[0] ?? defaultValue?.[0] ?? 0;

    return (
      <div className={cn('relative flex w-full touch-none select-none items-center py-4', className)}>
        <input
          type="range"
          ref={ref}
          className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
          onChange={handleChange}
          value={val}
          {...props}
        />
        <style jsx>{`
          input[type='range']::-webkit-slider-thumb {
            appearance: none;
            width: 18px;
            height: 18px;
            background: #10b981;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid #fff;
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
            transition: all 0.2s;
          }
          input[type='range']::-webkit-slider-thumb:hover {
            transform: scale(1.1);
          }
        `}</style>
      </div>
    )
  }
)
Slider.displayName = 'Slider'

export { Slider }

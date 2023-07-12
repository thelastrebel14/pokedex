import React from 'react';
import './Chip.css'
import { IChipProps, CHIP_BACKGROUND_COLOR } from './Chip.definitions';

const Chip = (props: IChipProps) => {
    const {label} = props;
    

    type ChipLabel = keyof typeof CHIP_BACKGROUND_COLOR;
    const chipColorClass = CHIP_BACKGROUND_COLOR[label as ChipLabel] || 'grey';
    console.log({chipColorClass});
    return (
      <div className='chip' style={{backgroundColor: chipColorClass}}>
        <span className='chip-label'>{label}</span>
      </div>
    );
}

export default Chip;
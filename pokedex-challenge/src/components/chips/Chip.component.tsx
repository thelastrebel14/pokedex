import React from 'react';
import './Chip.css'
import { IChipProps } from './Chip.definitions';

const Chip = (props: IChipProps) => {
    const {label} = props;
    return (
      <div className='chip'>
        <span className='chip-label'>{label}</span>
      </div>
    );
}

export default Chip;
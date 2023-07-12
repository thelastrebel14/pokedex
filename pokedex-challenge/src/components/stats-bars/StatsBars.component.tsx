import React from 'react';
import './StatsBars.css'
import { IStatsBar } from './StatsBars.definitions';
import { IStats } from '../Pokemon.definitions';

const StatsBars = (props: IStatsBar) => {
    const {pokemonStats} = props;
    return (
      <div className='stats-bars-container'>
        <span className='stats-bars-label'>Stats</span>
        <div className='stats-bar-list'>
            {pokemonStats?.map((pokemonStat: IStats) => {
                return (
                    <div key={pokemonStat.statName} className='stats-bar-element'>
                        <span className='stat-label'>{pokemonStat.statName}</span>
                        <div>
                            <div className="progress">
                                <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={pokemonStat.baseStat}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{width:`${pokemonStat.baseStat}%`}}
                                >
                                    <span className="sr-only">{pokemonStat.baseStat}</span>
                                </div>
                            </div>  
                        </div>
                    </div> 
                )
            })}
            </div>
      </div>
    );
}

export default StatsBars;
import Chip from "./components/chips/Chip.component";

export const getChipsList = (chipsLabels: Array<string>, chipsType: string) => {
    const chipsList = chipsLabels.map((label: string) => {
        return (
            <Chip
                label={label}
            />
        );
    })

    return (
        <div className="chips-list-container">
            <span className="chips-list-label">{chipsType}</span>
            <div className='chips-container'>
                {chipsList}
            </div>
        </div>
        
    )
}
import Chip from "./components/chips/Chip.component";

export const getChipsList = (chipsLabels: Array<string>) => {
    const chipsList = chipsLabels.map((label: string) => {
        return (
            <Chip
                label={label}
            />
        );
    })

    return (
        <div className='chips-container'>
            {chipsList}
        </div>
    )
}
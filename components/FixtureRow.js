
const FixtureRow = ({home, homeIcon, matchDate, matchTime, away, awayIcon}) => {

    return (
        <div className="w-full mx-auto">
            <div className="my-4 py-4 px-6 bg-slate-900 flex justify-between items-center space-x-6 border-transparent rounded-lg">
                <div className="flex flex-1 items-center space-x-4">
                    <p className="text-lg font-semibold">{home}</p> <span> {homeIcon} </span>
                </div>
                <div className="flex flex-2 flex-col space-y-2">
                    <ul>
                        <li>{matchTime}</li>
                        <li>{matchDate}</li>
                    </ul>
                </div>
                <div className="flex flex-1 justify-end items-center space-x-4">
                     <span> {awayIcon} </span> <p className="text-lg font-semibold"> {away}</p>
                </div>
            </div>
        </div>
    )
}

export default FixtureRow;

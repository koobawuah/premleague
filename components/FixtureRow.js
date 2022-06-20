
const FixtureRow = ({home, homeIcon, matchDate, matchTime, away, awayIcon}) => {

    return (
        <div className="w-full mx-auto">
            <div className="my-4 py-4 px-6 bg-slate-900 flex justify-between items-center space-x-6 border-transparent rounded-lg">
                <div className="flex flex-1 justify-between items-center space-x-4">
                    <p className="text-lg font-semibold">{home}</p> 
                    <span><img src={homeIcon} width={50} height={50} /></span>
                </div>
                <div className="flex flex-2 flex-col space-y-2">
                    <ul>
                        <li className="text-center text-xl text-red-500 font-bold">{matchTime}</li>
                        <li className="uppercase text-center text-xl font-semibold">{matchDate}</li>
                    </ul>
                </div>
                <div className="flex flex-1 justify-between items-center space-x-4">
                    <span><img src={awayIcon} width={50} height={50}/> </span>
                    <p className="text-lg font-semibold"> {away}</p>
                </div>
            </div>
        </div>
    )
}

export default FixtureRow;

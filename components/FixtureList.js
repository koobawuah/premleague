import React, { useState } from 'react'
import { dateDay, timeDay } from '../atoms/atoms'
import { FixtureCol } from '../components'

const FixtureList = ({data, teamsData}) => {

    const [selectedTeamId, setTeamId] = useState('2022')
    const teamFixtrues = data.filter( t => t.teams.home.id == selectedTeamId || t.teams.away.id == selectedTeamId)

    return (
        <div className="w-full mx-auto px-2">       
            <div>
                <select className="w-full py-5 px-3 text-lg font-medium bg-slate-800" 
                        onChange={(e) => {setTeamId(e.target.value); } } >
                        
                    <option value="2022"> All League Fixtures </option>
                    {
                        teamsData && teamsData.sort((a, b) => { 
                            let fa = a.team.name, fb = b.team.name;

                            if (fa < fb) { return -1; }
                            if (fa > fb) { return 1; }
                            return 0;

                        }).map( (item, index) => {
                            return <option key={index} value={item.team.id}>{item.team.name}</option>
                        })
                    }
                </select>
            </div>
        <div>
            {
                selectedTeamId == '2022'
                ? (data.map( (item, index) => (
                    <FixtureCol 
                        key={index} 
                        home={item.teams.home.name}
                        homeIcon={item.teams.home.logo}
                        matchDate={dateDay(item.fixture.date)} 
                        matchTime={timeDay(item.fixture.date)} 
                        away={item.teams.away.name} 
                        awayIcon={item.teams.away.logo}
                    />
                ))
                )
                : ( teamFixtrues.map((item, index) => (
                    <FixtureCol 
                        key={index} 
                        home={item.teams.home.name}
                        homeIcon={item.teams.home.logo}
                        matchDate={dateDay(item.fixture.date)} 
                        matchTime={timeDay(item.fixture.date)} 
                        away={item.teams.away.name} 
                        awayIcon={item.teams.away.logo}
                    />
                )) )
            }
        </div> 

        </div>
    )
}

export default FixtureList;

import {useState} from 'react'

function Clubs(){
    // 2. Internal State
        const [clubs, setClub] = useState(0);
        const [dummyState, setDummyState] = useState({})
        const fetchData = ()=>{
            fetch('https://school-api-2wqk.onrender.com/api/clubs/')
            .then(response => response.json)
            .then(data => {console.log(data)});
        }

        React.useEffect(()=>{
            fetchClubData();
        }, []);
    
    // 4. Fetchers
    /* async function getClubs(){
        let response = await fetch(
            'https://school-api-2wqk.onrender.com/api/clubs/',
            .then(response => response.json)
            .then()
            {
                'headers': {'Accept': 'application/json'}
            }
            )
        let staffs = await response.json();
        console.log(staffs);
    } */
    getClubs();

    // 1. Content to be rendered
        return Objects.keys(clubs).length > 0? (
            // JSX = JS + HTML + XML
            <div>
                <h3>club.results[0].club_name</h3>
                {/* {} shows a switch to JS */}
                <form>
                    <label> Enter club name:
                        <input type="text" />
                    </label>
                    <label> Enter head of club:
                        <input type="text" />
                    </label>
                </form>
                <button>Submit</button>
            </div>
        ) : (
            <h3>no data to load</h3>
        )
}

export default Clubs;

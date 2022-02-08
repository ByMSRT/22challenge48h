import api from 'axios'

export default{ 
    async apiGetPlanets(){
        return await api.get("https://swapi.dev/api/",
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    }
    ,Planets, Spaceships, Vehicles, People, Films, Species
}
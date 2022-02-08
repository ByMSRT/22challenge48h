import api from 'axios'

export default{ 
    async apiGetPlanets(endUrl){
        return await api.get(`https://swapi.dev/api/planets/${endUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetStarships(enUrl){
        return await api.get(`https://swapi.dev/api/starships/${enUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetVehicles(enUrl){
        return await api.get(`https://swapi.dev/api/vehicles/${enUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetPeople(enUrl){
        return await api.get(`https://swapi.dev/api/people/${enUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetFilms(enUrl){
        return await api.get(`https://swapi.dev/api/films/${enUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetSpecies(enUrl){
        return await api.get(`https://swapi.dev/api/species/${enUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    }
}
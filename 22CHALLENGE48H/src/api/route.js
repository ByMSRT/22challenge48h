import api from 'axios'

export default{ 
    async apiGetPlanets(){
        return await api.get("https://swapi.dev/api/planets",
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetPlanetsById(id){
        return await api.get(`https://swapi.dev/api/planets/${id}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetSpaceships(){
        return await api.get("https://swapi.dev/api/spaceships",
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetSpaceshipsById(id){
        return await api.get(`https://swapi.dev/api/spaceships/${id}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetVehicles(){
        return await api.get("https://swapi.dev/api/vehicles",
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetVehiclesById(id){
        return await api.get(`https://swapi.dev/api/vehicles/${id}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetPeople(){
        return await api.get("https://swapi.dev/api/people",
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetPeopleById(id){
        return await api.get(`https://swapi.dev/api/people/${id}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetFilms(){
        return await api.get("https://swapi.dev/api/films",
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetFilmsById(id){
        return await api.get(`https://swapi.dev/api/films/${id}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetSpecies(){
        return await api.get("https://swapi.dev/api/species",
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async apiGetSpeciesById(id){
        return await api.get(`https://swapi.dev/api/species/${id}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    }
}
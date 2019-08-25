import { Place } from './place'
import { Country } from './country'

export const Countries: Country[] = [
    {
        name: "Peru",
        date: "August 2019",
        plan: "../assets/travel/peru/plan.svg",
        places: [
            new Place ("Lima", "cap", ""),
            new Place ("Paracas", "", ""),
            new Place ("Huacachina", "", ""),
            new Place ("Cusco", "", ""),
            new Place ("Aguas Calientes", "", ""),
            new Place ("Machu Picchu", "", ""),
        ],
    },
]
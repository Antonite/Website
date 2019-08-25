import { Place } from './place'
import { Country } from './country'

export const Countries: Country[] = [
    {
        name: "Peru",
        date: "August 2019",
        plan: "../assets/travel/peru/plan.svg",
        places: [
            new Place ("Lima", "Lima is the current capital of Peru. We spent a day here taking a four hour tour of the city, followed by random exploring. The weather wasn't great, so the highlight was actually the amazing peruvian lunch at Papachos restaurant.", "", "right"),
            new Place ("Paracas", "After a six hour bus ride, we stopped at a small city of Paracas. Only having a couple of hours here, we went straight for the National Reserve - the place where the desert meets the sea. The views were truly unbelievably stunning. I hope my memory will stay true as no picture can do it justice.", "../assets/travel/peru/paracas.jpg", "left"),
            new Place ("Huacachina", "Two short hours of bus ride later, we stopped at Huacachina for the night. This was a natural oasis within the desert. We had complete freedom to hike up the enormous sand dunes, which were much larger than I have imagined before. Pro tip: do not get scammed into riding the touristy buggies offered at the oasis. If you climb the dunes on foot, you can see that the buggies actually just make a small circle around the base.", "", "right"),
            new Place ("Cusco", "We spent about four days total here. Cusco was the historic capital of the Inca Empire until the Spanish Conquest, but in current age, the city basically runs on tourism. We spent most of the time exploring the city by foot and trying to get to the bottom of the whole 'baby alpaca wool industry'. Not surprisingly, the major highlight was accidentally running into a local alpaca farmer on the outskirts of the city. They always smile!", "../assets/travel/peru/alpacas.jpg", "left"),
            new Place ("Aguas Calientes", "We took a four hour train to get here. The city is essentially a small pack of hotels and restaurants in a very beautiful location surrounded by mountains. This is the basecamp right below Machu Picchu.", "", "right"),
            new Place ("Machu Picchu", "We took a 30 minute bus to the top at 6:20am (lines start at around 5am for this). The actual archaeological site was pretty cool, but the views were simply astonishing. Make sure to get here early as the morning fog adds a whole new mythical personality!", "", "left"),
        ],
    },
]
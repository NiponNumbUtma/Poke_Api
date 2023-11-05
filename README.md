# React + Vite + POKE-API a bref view about some Pokémon. 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Learn more about Poke-Api in his web site: https://pokeapi.co/docs/v2

Information
This is a consumption-only API — only the HTTP GET method is available on resources.

No authentication is required to access this API, and all resources are fully open and available. Since the move to static hosting in November 2018, rate limiting has been removed entirely, but we still encourage you to limit the frequency of requests to limit our hosting costs.

Named (endpoint)
GET https://pokeapi.co/api/v2/{endpoint}/

{
  "count": 248,
  "next": "https://pokeapi.co/api/v2/ability/?limit=20&offset=20",
  "previous": null,
  "results": [
    {
      "name": "stench",
      "url": "https://pokeapi.co/api/v2/ability/1/"
    }
  ]
}
 View raw JSON (0.213 kB, 11 lines)
NamedAPIResourceList (type)
Name	Description	Type
count	
The total number of resources available from this API.

integer
next	
The URL for the next page in the list.

string
previous	
The URL for the previous page in the list.

string

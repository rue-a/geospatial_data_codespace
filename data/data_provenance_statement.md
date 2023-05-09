Monastery data was retrieved from [Wikidata](https://query.wikidata.org/) with the query

```sparql
SELECT DISTINCT  ?monastery ?location ?foundingYear ?wikidata_entry WHERE {
  ?wikidata_entry wdt:P31/wdt:P279* wd:Q44613 .
  ?wikidata_entry wdt:P17 wd:Q183 .
  ?wikidata_entry wdt:P625 ?location .
  ?wikidata_entry wdt:P571 ?foundingDate .
  BIND(year(?foundingDate) AS ?foundingYear)  
  ?wikidata_entry rdfs:label ?monastery .
  FILTER(lang(?monastery) = "de" )
}
```

Brewery data was retrieved from [Wikidata](https://query.wikidata.org/) with the query

```sparql
SELECT DISTINCT ?brewery ?geometry ?foundingYear ?wikidata_entry WHERE {
  ?wikidata_entry wdt:P31/wdt:P279* wd:Q131734 .
  ?wikidata_entry wdt:P17 wd:Q183 .
  {
    ?wikidata_entry wdt:P625 ?geometry .
  } 
  OPTIONAL {
    ?wikidata_entry wdt:P159 ?headquarters .
    ?headquarters wdt:P625 ?geometry .
  } OPTIONAL {
    ?wikidata_entry wdt:P131 ?adminEntity .
    ?adminEntity wdt:P625 ?geomerty .
  }
  OPTIONAL {
    ?wikidata_entry wdt:P571 ?foundingDate .
    BIND(year(?foundingDate) AS ?foundingYear)
  }
  ?wikidata_entry rdfs:label ?brewery .
  FILTER(lang(?brewery) = "de")
}
```


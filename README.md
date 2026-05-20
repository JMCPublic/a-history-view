# A History View Prototype

Open `index.html` in a browser to try the first working version.

This prototype includes:

- A timeline slider from 1000 to 1500 in 10-year bands
- Five side-by-side civilization comparison panels designed to read across the page
- Selectors for changing each panel
- Starter data for England, France, China, Japan, the Islamic world, Byzantium, the Mongol Empire, the Aztec Empire, and Mali
- Ruler, dynasty/state, government, main event, and "why it mattered" fields
- Pressure and momentum tags for historical drivers
- Pin buttons for comparison cards
- Source links for each civilization
- A schematic world map that updates approximate historical extents from the selected panels and year
- Hoverable/focusable map extents and legend keys with a small inspector panel

This is intentionally a small browser-only MVP. The app is still using local JavaScript data so it can be shaped quickly before moving to a database.

## Data direction

The current data already maps cleanly to future Supabase tables:

- `civilizations`: name, region, type, summary
- `periods`: civilization id, start year, end year, ruler, dynasty/state, government
- `events`: period id, title, description, importance
- `drivers`: period id, label, effect type
- `sources`: civilization id or period id, title, url
- `map_extents`: civilization id, start year, end year, label, geometry

The next natural step is to separate the data from `app.js` into a JSON file, then expand it with more periods and sources before creating Supabase tables.

The current map layer is deliberately approximate. It proves the interaction model first; proper historical borders would later need curated GIS-style data.

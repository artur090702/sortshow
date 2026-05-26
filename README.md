# sortshow

Interactive visualisation of common sorting algorithms.

**Live demo:** http://34.36.60.191/sortshow/

## Algorithms

- Quicksort
- Merge sort
- Heapsort
- Bubble sort
- Gnome sort
- Cocktail shaker sort
- Bogosort

## Controls

- **Number of bars** — 3 to 300
- **Visualisation height** — adjustable
- **Animation speed** — adjustable delay

## Stack

Vanilla JavaScript, HTML5, CSS3 — no frameworks or build tools. Deployed with Docker/Nginx on GCP via Cloud Build CI/CD.

## Run locally

```bash
docker build -t sortshow .
docker run -p 8080:8080 sortshow
```

Open http://localhost:8080/sortshow/

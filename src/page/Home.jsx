import { useMemo, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Modal } from "../components/Modal.jsx";
import { useMovie } from "../context/MovieContext.jsx";
import { Movie } from "../components/Movie.jsx";
import { HomeHeader, SortOrder } from "../components/HomeHeader.jsx";

export const FilterType = Object.freeze({
  ALL: "all",
  SEARCH: "search",
});

export function Home() {
  const { searchQuery ,moviesData} = useMovie();

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(SortOrder.ASCENDING);
  
  const filterType =
    !searchQuery || !searchQuery.trim() ? FilterType.ALL : FilterType.SEARCH;

  const filterMovies = useMemo(() => {
    if (filterType === FilterType.ALL) {
      return moviesData;
    }
    return moviesData.filter((movie) =>
      movie.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [filterType, searchQuery, moviesData]);

  const movies = useMemo(() => {
    return [...filterMovies].sort((a, b) => {
      if (sortOrder === SortOrder.ASCENDING) {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
  }, [filterMovies, sortOrder]);

  const handleOpen = (movie) => {
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMovie(null);
  };

  return (
    <Box sx={{ p: 2 }} id="home">
      <HomeHeader movies={movies} onSort={setSortOrder} />

      <Grid container spacing={4} justifyContent="center">
        {movies?.length === 0 && (
          <Grid xs={12}>
            <Typography variant="h6" align="center">
              Movies Not Found
            </Typography>
          </Grid>
        )}

        {movies.map((movie) => (
          <Grid key={movie.id}>
            <Movie movie={movie} onClick={handleOpen} />
          </Grid>
        ))}
      </Grid>

      {selectedMovie && (
        <Modal open={open} onClose={handleClose} movie={selectedMovie} />
      )}
    </Box>
  );
}

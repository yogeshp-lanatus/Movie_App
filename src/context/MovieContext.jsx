import { createContext, useState, useContext, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import movies from "../Movies";

export const ThemeMode = {
  LIGHT: "light",
  DARK: "dark",
};

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || ThemeMode.LIGHT;
  });
  const [moviesData, setMovieData] = useState(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) return JSON.parse(storedMovies);
    localStorage.setItem("movies", JSON.stringify(movies));
    return movies;
  });

  const [searchQuery, setSearchQuery] = useState();

  const setModeAndPersist = (newMode) => {
    localStorage.setItem("themeMode", newMode);
    setMode(newMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === ThemeMode.DARK ? blue[200] : blue[700],
          },
        },
      }),
    [mode],
  );

  return (
    <MovieContext.Provider
      value={{
        mode,
        setMode: setModeAndPersist,
        searchQuery,
        setSearchQuery,
        moviesData,
        setMovieData,
      }}
    >
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </MovieContext.Provider>
  );
}

export function useMovie() {
  return useContext(MovieContext);
}

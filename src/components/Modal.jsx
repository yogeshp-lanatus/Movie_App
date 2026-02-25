import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { MovieDetailRow } from "../UI/MovieDetailRow";
export function Modal({ movie, open, onClose }) {
  if (!movie) {
    return null;
  }

  const releaseDate = new Date(movie.releaseDate).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <Box className="flex-space-between">
        <DialogTitle maxWidth="md">{movie.name}</DialogTitle>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </Box>

      <Divider />
      <DialogContent
        sx={{
          maxHeight: "70vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none", // IE & Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        <Grid container spacing={2}>
          <Grid key={movie.id}>
            <Stack sx={{ alignItems: "center" }}>
              <CardMedia
                component="img"
                image={movie.image}
                alt={movie.name}
                sx={{ borderRadius: 2, height: "50%", width: "50%" }}
              />
            </Stack>
            <Grid>
              <MovieDetailRow label="Description" value={movie.description} />
              <MovieDetailRow label="Duration" value={movie.duration} />
              <MovieDetailRow label="Cast" value={movie.cast} />
              <MovieDetailRow label="Release Date" value={releaseDate} />
              <MovieDetailRow label="Rating" value={movie.rating} />
              <MovieDetailRow label="Director" value={movie.director} />
              <MovieDetailRow label="Producer" value={movie.producer} />

              <Box className="flex-end">
                <Button
                  sx={{
                    mt: 2,
                    px: 3,
                    border: (theme) => `1px solid ${theme.palette.info.light}`,
                    "&:hover": { backgroundColor: "info.light" },
                  }}
                  onClick={() => window.open(movie.officialUrl, "_blank")}
                >
                  Trailer <ArrowRightIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

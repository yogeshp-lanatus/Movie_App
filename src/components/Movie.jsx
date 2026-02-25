import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

export function Movie({ movie, onClick }) {
  const theme = useTheme();
  const cardBg = theme.palette.background.paper;
  const textColor = theme.palette.text.primary;
  return (
    <Card
      sx={{
        p: 2,
        height: "100%",
        width: 260,
        bgcolor: cardBg,
        color: textColor,
      }}
      onClick={() => onClick(movie)}
    >
      <CardMedia
        component="img"
        height="300"
        image={movie.image}
        alt={movie.name}
      />

      <CardContent>
        <Typography
          variant="body1"
          fontWeight={theme.typography.fontWeightBold}
          gutterBottom
        >
          {movie.name}
        </Typography>

        <Box className="flex-center" sx={{ gap: 1.5 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: theme.typography.fontWeightMedium }}
          >
            {new Date(movie.releaseDate).getFullYear()}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: theme.typography.fontWeightMedium }}
          >
            ● {movie.duration}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: theme.typography.fontWeightMedium }}
          >
            ● {movie.rating}
          </Typography>
        </Box>

        <Box>
          <Typography variant="caption" sx={{ mt: 2 }}>
            {movie.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

export const SortOrder = Object.freeze({
  ASCENDING: "ascending",
  DESCENDING: "descending",
});

export function HomeHeader({ onSort }) {
  const theme = useTheme();
  return (
    <Box className="flex-space-between flex-center" sx={{ mb: 2 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: theme.typography.fontWeightBold }}
      >
        Explore Movies
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => onSort(SortOrder.ASCENDING)}>
          A-Z
        </Button>
        <Button variant="outlined" onClick={() => onSort(SortOrder.DESCENDING)}>
          Z-A
        </Button>
      </Stack>
    </Box>
  );
}

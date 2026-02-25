import { Box, Typography } from "@mui/material";

export const MovieDetailRow = ({ label, value }) => {
  return (
    <Typography
      component="div"
      variant="body2"
      sx={{ lineHeight: 1.8, mt: 0.5 }}
    >
      <Box component="span" fontWeight="bold">
        {label}:
      </Box>
      {value}
    </Typography>
  );
};

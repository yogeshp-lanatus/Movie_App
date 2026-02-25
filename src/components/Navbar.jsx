import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  FormControl,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import BedtimeTwoToneIcon from "@mui/icons-material/BedtimeTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import { ThemeMode, useMovie } from "../context/MovieContext";
import { Search } from "../UI/Search";

export function Navbar() {
  const { mode, setMode } = useMovie();
  const navigate = useNavigate();
  const location = useLocation();

  const isEditPage = location.pathname === "/edit";

  if (!mode) return null;
  const handleThemeChange = () => {
    if (mode === ThemeMode.LIGHT) {
      setMode(ThemeMode.DARK);
    } else {
      setMode(ThemeMode.LIGHT);
    }
  };
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img
          src="/logo.png"
          alt="MovieApp Logo"
          style={{ height: "30px", marginRight: "10px" }}
        />
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          MovieApp
        </Typography>

        {/* for Search  */}
        {!isEditPage && <Search />}

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/edit")}>
            Edit
          </Button>
        </Box>
        <FormControl>
          <Button onClick={handleThemeChange}>
            {mode === ThemeMode.LIGHT ? (
              <BedtimeTwoToneIcon sx={{ color: "info.light" }} />
            ) : (
              <WbSunnyTwoToneIcon sx={{ color: "warning.main" }} />
            )}
          </Button>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
}

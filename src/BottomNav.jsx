import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CssBaseline from "@mui/material/CssBaseline";
import { Paper } from "@mui/material";
import { AutoStoriesOutlined, Search } from "@mui/icons-material";

export default function FixedBottomNavigation() {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Search" icon={<Search />} />
          <BottomNavigationAction label="Read" icon={<AutoStoriesOutlined />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

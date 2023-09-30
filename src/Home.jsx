import "./App.css";
import Layout from "Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Button, TextField } from "@mui/material";

function Home() {
  return (
    <Layout>
      <Box
        style={{ display: "flex", justifyContent: "center", marginTop: "55px" }}
      >
        <TextField
          id="standard-basic"
          label="Search a verse"
          variant="standard"
        />
        <Button variant="contained" size="medium" style={{ margin: "10px" }}>
          Search
        </Button>
      </Box>
    </Layout>
  );
}

export default Home;

/* eslint-disable no-console */
import "./App.css";
import Layout from "Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Button, Container, TextField } from "@mui/material";
import { searchVerse } from "services/api-requests";
import { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [resultVerse, setResultVerse] = useState("");

  return (
    <Layout>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "55px",
          paddingBottom: "10px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Search a verse"
          variant="standard"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          sx={{ m: 1 }}
        />
        <Button
          onClick={async () => {
            const result = await searchVerse(searchInput);
            setResultVerse(result);
            console.log(result);
            console.log(resultVerse);
          }}
          variant="contained"
          size="medium"
          style={{ margin: "10px" }}
        >
          Search
        </Button>
      </Box>
      <Container fixed>{resultVerse}</Container>
    </Layout>
  );
}

export default Search;

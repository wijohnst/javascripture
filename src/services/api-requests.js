/* eslint-disable no-console */
import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;

export async function searchVerse(searchedVerse) {
  try {
    if (!url || !apiKey) {
      throw new Error("missing api key or url");
    }
    const response = await axios.get(url, {
      params: {
        q: searchedVerse,
      },
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    });

    return response.data.passages;
  } catch (error) {
    console.error("Error:", error);
  }
}

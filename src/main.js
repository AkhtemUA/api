import { Client } from 'node-appwrite';
import axios from 'axios';
// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  try {
    const response = await axios.get('https://ru.live.javhdporn.net/api/front/models?limit=60&offset=0&primaryTag=couples&filterGroupTags=%5B%5B%22tagLanguageUkrainian%22%5D%5D&sortBy=stripRanking&parentTag=tagLanguageUkrainian&userRole=guest&uniq=aoq7mwz4xvchnp3y');
    return res.json(response.data);
  } catch (error) {
    console.error(error);
  }

};

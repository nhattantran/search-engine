import axios from "axios";

class SearchController {
  async Search(req, res, next) {
    if (req.query.text === undefined)
      return res.status(400).send({
        message: "No query text found",
      });
    const options = {
      method: "GET",
      url: "https://duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com/",
      params: {
        q: req.query.text,
        callback: "process_duckduckgo",
        no_html: "1",
        no_redirect: "1",
        skip_disambig: "1",
        format: "json",
      },
      headers: {
        "X-RapidAPI-Key": "a4f60c37ebmsh3a9b6d8dee9cd4fp11d669jsn2ca5b125fe91",
        "X-RapidAPI-Host":
          "duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com",
      },
    };
    const queryData = await axios.request(options);
	if (queryData.data === undefined) return res.status(500).send({
		message: 'Internal server error',
	})
	const result = queryData.data.substring(19, queryData.data.length - 2);
	res.send(JSON.parse(result).RelatedTopics)
  }
}

const SearchClass = new SearchController();

export default SearchClass;

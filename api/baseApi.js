import superagent from "superagent";

class BaseAPI {
  async GET(url) {
    console.log(`sending GET request to ${url}`);
    return await superagent.get(url);
  }
  async POST(url, data) {
    console.log(`sending POST request to ${url}`);
    return await superagent.post(url).send(data);
  }
  async PUT(url) {
    console.log(`sending PUT request to ${url}`);
    return await superagent.put(url);
  }
  async DELETE(url) {
    console.log(`sending DELETE request to ${url}`);
    return await superagent.delete(url);
  }
}

export default new BaseAPI();

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} resp A response from a network request
 *
 * @return {object} The parsed JSON, status from the response
 */
export default resp => resp
  .json()
  .then(json => ({ status: resp.status, ok: resp.ok, json }))
  .then((response) => {
    if (response.ok === false) {
      return Promise.reject(response.json);
    }

    return response.json;
  });

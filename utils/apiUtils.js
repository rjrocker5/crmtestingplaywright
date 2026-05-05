/**
 * API utility functions using Playwright request context
 */

/**
 * Make a GET request
 * @param {APIRequestContext} request - Playwright request context
 * @param {string} url - API endpoint URL
 * @param {object} options - Additional request options (headers, params, etc.)
 * @returns {Promise<APIResponse>} Response object
 */
export async function getRequest(request, url, options = {}) {
  return await request.get(url, options);
}

/**
 * Make a POST request
 * @param {APIRequestContext} request - Playwright request context
 * @param {string} url - API endpoint URL
 * @param {object} data - Request body data
 * @param {object} options - Additional request options (headers, etc.)
 * @returns {Promise<APIResponse>} Response object
 */
export async function postRequest(request, url, data, options = {}) {
  return await request.post(url, {
    data,
    ...options
  });
}

/**
 * Make a PUT request
 * @param {APIRequestContext} request - Playwright request context
 * @param {string} url - API endpoint URL
 * @param {object} data - Request body data
 * @param {object} options - Additional request options (headers, etc.)
 * @returns {Promise<APIResponse>} Response object
 */
export async function putRequest(request, url, data, options = {}) {
  return await request.put(url, {
    data,
    ...options
  });
}

/**
 * Make a PATCH request
 * @param {APIRequestContext} request - Playwright request context
 * @param {string} url - API endpoint URL
 * @param {object} data - Request body data
 * @param {object} options - Additional request options (headers, etc.)
 * @returns {Promise<APIResponse>} Response object
 */
export async function patchRequest(request, url, data, options = {}) {
  return await request.patch(url, {
    data,
    ...options
  });
}

/**
 * Make a DELETE request
 * @param {APIRequestContext} request - Playwright request context
 * @param {string} url - API endpoint URL
 * @param {object} options - Additional request options (headers, etc.)
 * @returns {Promise<APIResponse>} Response object
 */
export async function deleteRequest(request, url, options = {}) {
  return await request.delete(url, options);
}

/**
 * Parse JSON response
 * @param {APIResponse} response - API response object
 * @returns {Promise<object>} Parsed JSON response
 */
export async function getResponseJson(response) {
  return await response.json();
}

/**
 * Get response status code
 * @param {APIResponse} response - API response object
 * @returns {number} HTTP status code
 */
export function getResponseStatus(response) {
  return response.status();
}

/**
 * Verify API response is successful
 * @param {APIResponse} response - API response object
 * @param {number} expectedStatus - Expected status code (default: 200)
 * @returns {boolean} True if response status matches expected
 */
export function isResponseSuccessful(response, expectedStatus = 200) {
  return response.status() === expectedStatus;
}

/**
 * Get response headers
 * @param {APIResponse} response - API response object
 * @returns {object} Response headers
 */
export function getResponseHeaders(response) {
  return response.headers();
}

/**
 * Make a GET request and return JSON
 * @param {APIRequestContext} request - Playwright request context
 * @param {string} url - API endpoint URL
 * @param {object} options - Additional request options
 * @returns {Promise<object>} Parsed JSON response
 */
export async function getRequestJson(request, url, options = {}) {
  const response = await getRequest(request, url, options);
  return await getResponseJson(response);
}

/**
 * Make a POST request and return JSON
 * @param {APIRequestContext} request - Playwright request context
 * @param {string} url - API endpoint URL
 * @param {object} data - Request body data
 * @param {object} options - Additional request options
 * @returns {Promise<object>} Parsed JSON response
 */
export async function postRequestJson(request, url, data, options = {}) {
  const response = await postRequest(request, url, data, options);
  return await getResponseJson(response);
}

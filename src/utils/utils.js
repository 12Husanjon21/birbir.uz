// utils.js
import axios from "axios";

/**
 * Axios instance with base config
 */
const JWT = JSON.parse(localStorage.getItem("JWT"));

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache", // <- cache ishlatilmaydi
    Authorization: `Bearer ${JWT}`,
  },
});

/**
 * GET request
 * @param {string} url - Endpoint to fetch from
 * @param {object} params - Query params
 */
export const getData = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * POST request
 * @param {string} url - Endpoint to post to
 * @param {object} body - Request payload
 */
export const postData = async (url, body = {}) => {
  try {
    const response = await api.post(url, body);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * PUT request
 */
export const putData = async (url, body = {}) => {
  try {
    const response = await api.put(url, body);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * DELETE request
 */
export const deleteData = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Handle API errors
 */
const handleApiError = (error) => {
  console.error("API Error:", error.response?.data || error.message);
  throw error;
};

/* ---------------- Storage Utils ---------------- */

/**
 * Save data to localStorage
 */
export const setStorage = (key, value, isLocal) => {
  if (isLocal) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

/**
 * Get data from localStorage
 */
export const getStorage = (key, isLocal) => {
  if (isLocal) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } else {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
};

// const token = getStorage("JWT", true);

// const tokenSession = getStorage("JWT", false);
/**
 * Remove item from localStorage
 */
export const removeStorage = (key, isLocal) => {
  if (isLocal) {
    localStorage.removeItem(key);
  } else {
    sessionStorage.removeItem(key);
  }
};

/**
 * Clear all localStorage
 */
export const clearStorage = (isLocal) => {
  if (isLocal) {
    localStorage.clear();
  } else {
    sessionStorage.clear();
  }
};

// bu funksiya login qilmagan bo'lsa auth botga yuboradi
export const redirectToAuthPage = () => {
  const sendToAuthBot = (sessionToken) => {
    window.open(
      `https://t.me/toparmoncombot?start=${sessionToken}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  getData("/api/auth/telegram/session").then((data) => {
    const token = data?.sessionToken;
    if (data?.sessionToken) {
      setStorage("sessionToken", token, false);
      sendToAuthBot(token);
      postData("/api/auth/telegram/complete", { sessionToken: token }).then(
        (data) => {
          console.log(data);
          setStorage("JWT", data?.jwt, true);
        }
      );
    }
  });
};

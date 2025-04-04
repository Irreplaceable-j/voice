const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const API_KEY = 'KakaoAK 02c3dacbea90742588bc5639d9bf19ce';

const api = async params => {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(API_URL+queryString, {
    headers: {Authorization: API_KEY}
  });

  return response.json();
}

export default api;



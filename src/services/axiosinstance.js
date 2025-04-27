import axios from "axios";

export const a = axios.create({
  baseURL: "https://677b1268987f3893.mokky.dev",
});

a.get('/products') // ← замени на своё имя коллекции
  .then(res => console.log(res.data))
  .catch(err => {
    console.error('Ошибка:', err.message);
    console.error('Код:', err.response?.status);
    console.error('URL:', err.config?.url);
  });
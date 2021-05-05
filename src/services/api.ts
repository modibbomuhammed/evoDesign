import axios from "axios";

const HEADER_URL = `https://evoteam-verasoft.github.io/data/summary.json`;
const ORDERS_URL = `https://evoteam-verasoft.github.io/data/orders.json`;

export const getUser = async () => {
  const { data } = await axios.get(HEADER_URL);
  return data;
};

export const getOrders = async () => {
  const { data } = await axios.get(ORDERS_URL);
  return data;
};

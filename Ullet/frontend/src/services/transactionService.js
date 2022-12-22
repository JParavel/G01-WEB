import { API_URL } from "./api";

export async function getTransactions(token) {
  const res = await fetch(API_URL + "/api/transaction", {
    headers: {
      token: token,
    },
  });

  if (res.ok) {
    const documents = res.json();
    return documents;
  } else {
    return [];
  }
}

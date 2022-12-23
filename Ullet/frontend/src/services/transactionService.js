const TRANSACTION_SERVICE_API = import.meta.env.TRANSACTION_SERVICE_API;

export async function getTransactions(token) {
  const res = await fetch(TRANSACTION_SERVICE_API + "/api/transaction", {
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

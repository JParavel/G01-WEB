export async function getTransactions(token) {
  const res = await fetch("http://localhost:8080/api/transaction", {
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

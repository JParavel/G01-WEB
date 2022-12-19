export async function login(name, password) {
  const res = await fetch("http://localhost:8080/api/login", {
    method: "GET",
    headers: {
      name: name,
      password: password,
    },
  });

  if (!res.ok) return null;

  const document = await res.json();
  return document.token;
}

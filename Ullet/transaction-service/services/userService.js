import dotenv from "dotenv";
dotenv.config();

const USER_SERVICE_API = process.env.USER_SERVICE_API;

export async function getUser(token) {
  try {
    console.log("Obteniendo Usuario");
    const res = await fetch(USER_SERVICE_API + "/api/user", {
      headers: {
        token: token,
      },
    });
    console.log("fetch done");
    const document = await res.json();
    return document;
  } catch (error) {
    console.log(error);
  }
}

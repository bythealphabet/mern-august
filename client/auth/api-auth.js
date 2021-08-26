async function signin(user) {
  console.log("user", user);
  try {
    let response = await fetch("/auth/signin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

async function signout() {
  try {
    let response = await fetch("/auth/signout/", { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

const confirmation = ({ token }) => {
  return fetch("/api/confirmation/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { signin, signout, confirmation };

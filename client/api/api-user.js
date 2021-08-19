async function create(user) {
  try {
    let response = await fetch("/api/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (err) {
    console.log("ERROR:", err);
  }
}

async function list(signal) {
  try {
    let response = await fetch("/api/users/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log("ERROR:", err);
  }
}

async function read(params, credentials, signal) {
  try {
    let response = await fetch(`/api/users/${params.userId}`, {
      method: "GET",
      signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials.t}`,
      },
    });

    return await response.json();
  } catch (err) {
    console.log("ERROR:", err);
  }
}

async function update(params, credentials, user) {
  try {
    let response = await fetch(`/api/users/${params.userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials.t}`,
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log("ERROR:", err);
  }
}

async function remove(params, credentials) {
  try {
    let response = await fetch(`/api/users/${params.userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials.t}`,
      },
    });
    return await response.json();
  } catch (err) {
    console.log("ERROR:", err);
  }
}

export { create, list, read, update, remove };

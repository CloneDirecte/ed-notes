import axios from "axios";

export default async function edNotes(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    return "Nom d'utilisateur ou mot de passe n'est pas une chaîne de caractères ";
  } else {
    var rawLogin = `data={\n	\"identifiant\": \"${username}\",\n	\"motdepasse\": \"${password}\"\n}`;
    var configLogin = {
      method: "post",
      url: "https://api.ecoledirecte.com/v3/login.awp",
      headers: {},
      data: rawLogin,
    };
    const responseLogin = await axios(configLogin);
    if (responseLogin.data.code !== 200) {
      return responseLogin.data.message;
    } else {
      const token = responseLogin.data.token;
      const accountId = responseLogin.data.data.accounts[0].id;
      var data = `data={\n\t"token": "${token}"\n}`;
      var config = {
        method: "post",
        url: `https://api.ecoledirecte.com/v3/eleves/${accountId}/notes.awp?verbe=get`,
        headers: {},
        data: data,
      };

      const response = await axios(config);
      if (response.data.code !== 200) {
        return "An error occured";
      } else {
        return response.data;
      }
    }
  }
}

export async function login(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    return "Nom d'utilisateur ou mot de passe n'est pas une chaîne de caractères ";
  } else {
    var raw = `data={\n	\"identifiant\": \"${username}\",\n	\"motdepasse\": \"${password}\"\n}`;
    var config = {
      method: "post",
      url: "https://api.ecoledirecte.com/v3/login.awp",
      headers: {},
      data: raw,
    };
    const response = await axios(config);
    if (response.data.code !== 200) {
      return response.data.message;
    } else {
      return response.data;
    }
  }
}

export async function notes(token, accountId) {
  var data = `data={\n\t"token": "${token}"\n}`;
  var config = {
    method: "post",
    url: `https://api.ecoledirecte.com/v3/eleves/${accountId}/notes.awp?verbe=get`,
    headers: {},
    data: data,
  };

  const response = await axios(config);
  if (response.data.code !== 200) {
    return response.data.message;
  } else {
    return response.data;
  }
}

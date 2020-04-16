async function getToken() {
  const request = await fetch("/account/character");
  let htmlObject = document.createElement("div");
  htmlObject.innerHTML = await request.text();
  let token = htmlObject.querySelector("input[name='_token']").value;
  return token;
}

async function createCharacter() {
  const alfabeto = "abcdefghijlmnopqrstuv".split('');
  const random = Math.floor(Math.random() * (alfabeto.length))
  const letra = alfabeto[random];
  const form = document.createElement("form");
  form.style = "display: none";
  form.method = "POST";
  form.action = "/account/character";

  const inputName = document.createElement("input");
  inputName.name = "name";
  inputName.value = "Andrey Beijo" + letra;
  const inputToken = document.createElement("input");
  const token = await getToken();
  inputToken.name = "_token";
  inputToken.value = token;

  const inputGender = document.createElement("input");
  inputGender.name = "gender";
  inputGender.value = 0;

  form.append(inputName);
  form.append(inputToken);
  form.append(inputGender);

  document.body.append(form);
  form.submit();
}

createCharacter();

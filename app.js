const numberCheckbox = document.querySelector("#number");
const letterCheckbox = document.querySelector("#lowCaseLetter");
const specCharCheckbox = document.querySelector("#specChar");
const inputLength = document.querySelector(".form__input");
const genBtn = document.querySelector(".form__btn");
const outputField = document.querySelector(".content__outputText");
const copyBtn = document.querySelector(".content__copyText");
let passwd;

const symbols = {
  num: "1234567890",
  letter: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specCharacter: "!#$%&()*+-/<=>?@[]^_{|}~",
};

const generatePassword = () => {
  let passwordLength = inputLength.value;
  let resultString = "";
  let readyString = "";

  if (numberCheckbox.checked) {
    readyString += symbols.num;
  }
  if (letterCheckbox.checked) {
    readyString += symbols.letter;
  }
  if (specCharCheckbox.checked) {
    readyString += symbols.specCharacter;
  }
  if (readyString === "") {
    alert("Выбор не сделан");
  }

  for (let i = 0; i < passwordLength; i++) {
    resultString += readyString[getRandom(i, readyString.length - 1)];
  }

  return (outputField.value = resultString);
};

function getRandom(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

genBtn.addEventListener("click", (event) => {
  event.preventDefault();
  generatePassword();
  passwd = outputField.value;
});

copyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  navigator.clipboard
    .writeText(passwd)
    .then(() => {
      alert(`Password is copy`);
    })
    .catch((error) => {
      alert("Password is not a copy");
    });
});

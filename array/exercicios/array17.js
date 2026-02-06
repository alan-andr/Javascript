const userRegister = {
  userName: "dev_explorer",
  email: "",
  password: "123",
  country: "Brazil",
};

let keys = Object.keys(userRegister);
let values = Object.values(userRegister);

for (let i = 0; i < keys.length; i++) {
  if (values[i] === "") {
    console.log(`\nError: Field ${keys[i]} is empty`);
  } else {
    console.log(`\nField: ${keys[i]}, Value: ${values[i]}`);
  }
}

import axios from "axios";

const postUserData = () => {
  let firstNameFieldValue = document.getElementById("firstName").value;
  let lastNameFieldValue = document.getElementById("lastName").value;
  let emailFieldValue = document.getElementById("email").value;
  let passwordFieldValue = document.getElementById("password").value;
  let confirmPasswordFieldValue =
    document.getElementById("confirmPassword").value;
  if (passwordFieldValue === confirmPasswordFieldValue) {
    axios
      .post("http://localhost:9000", {
        firstName: firstNameFieldValue,
        lastName: lastNameFieldValue,
        email: emailFieldValue,
        password: passwordFieldValue,
        confirmPassword: confirmPasswordFieldValue,
      })
      .then((res) => {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    console.log("password incorrect");
  }
};


export default postUserData;

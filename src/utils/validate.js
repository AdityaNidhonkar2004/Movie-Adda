const checkValidateData = (email, password, user) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isUserValid = /^[a-z ,.'-]+$/i.test(user);
  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";
  // if (!isUserValid) return "User name not valid ";
  else return null;
};

export default checkValidateData;

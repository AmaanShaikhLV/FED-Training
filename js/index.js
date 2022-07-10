function validation() {
  var userid = document.main_form.user_id.value;
  var password = document.main_form.password.value;

  if (userid == null || userid == "") {
    window.alert("Enter Valid Username");
    return false;
  } else if (password == "" || password == null) {
    window.alert("Enter Valid Password");
    return false;
  }
}

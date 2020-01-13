document.getelementbyid("redbtn").addEventListener("Click".creatRedbox); function createRedBox() {
  var newRedbox = document.createElement("div");
  newRedbox.className="result-box red"
  document.getelementbyid("landingbox").appendchild(newRedbox);
}

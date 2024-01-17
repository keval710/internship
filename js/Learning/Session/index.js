// let Clicked = () => {
//   let Name = document.getElementById("name").value;
//   let Email = document.getElementById("email").value;

//   let id = Math.floor(Math.random() * 1000000000);

//   let obj = {
//     Name: Name,
//     Email: Email,
//   };

//   let id1 = id.toString();

//   localStorage.setItem(id1, JSON.stringify(obj));
// };

// let obj2 = localStorage.getItem(id1);
// console.log(obj2);
// setTimeout(function () {
//   localStorage.clear();
// }, 1000);

function registerHandlers() {
  var as = document.getElementsByTagName("a");
  for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
      alert(i);
      return false;
    };
  }
}

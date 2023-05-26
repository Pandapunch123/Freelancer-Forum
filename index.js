const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const root = document.getElementById("root");

  const header = document.createElement("h1");
  header.innerHTML = "Freelancer Forum";
  root.appendChild(header);

  const userList = document.createElement("ul");

  //userList.classList.add("container");
  userList.classList.add("list");

  for (let i = 0; i < users.length; i++) {
    const listElement = document.createElement("li");

    listElement.classList.add("container");

    const currentUser = users[i];
    listElement.innerHTML = `Name: <b>${currentUser.name}</b>, Age: <b>${currentUser.age}</b>, Occupation: <b>${currentUser.occupation}</b>`;

    console.log(listElement);
    userList.appendChild(listElement);
  }
  console.log(userList);
  root.appendChild(userList);
}
console.log("I'm tired right now");

//call the main function
main();

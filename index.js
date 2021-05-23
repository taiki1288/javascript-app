const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", async function () {
    // データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    //DOM操作
    users.forEach(function(user) {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    });
});
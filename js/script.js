var users = [{ 'name': 'abc', 'age': 20, 'education': 'b.tech', 'id': 0 }, { 'name': 'abc1', 'age': 21, 'education': 'b.tech0', 'id': 1 }, { 'name': 'abc2', 'age': 22, 'education': 'b.tech7', 'id': 2 }, { 'name': 'abc3', 'age': 22, 'education': 'b.tech', 'id': 3 }, { 'name': 'abc4', 'age': 24, 'education': 'b.tech9', 'id': 4 }]

const readUsers = () => {
    var element = document.getElementById("table")
    element.innerHTML = users.map((user) => {
        document.getElementById("fname").value = user.name;
        document.getElementById("age").value = user.age;
        document.getElementById("education").value = user.education;
        return `<tr><td>${user.name}</td>
    <td>${user.age}</td><td>${user.education}</td>
    <td><i class="fas fa-edit actions-menu" onclick="editUser(${user.id})"></i></td>
    <td><i class="fas fa-trash-alt actions-menu" onclick="deleteUser(${user.id})"></i></td></tr>`
    })
}
readUsers();

const createUser = () => {
    document.getElementById("fname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("education").value = "";
    document.getElementById("save").style.display = "none";
    document.getElementById("create").style.display = "block";
    $('#createModal').modal('show').on("click", "#create", () => {
        let name = document.getElementById("fname").value;
        let age = document.getElementById("age").value;
        let education = document.getElementById("education").value;
        let user = {
            'name': name,
            'age': age,
            'education': education
        }
        users.push(user);
        $('#createModal').modal('hide').off("click", "#create");
        readUsers();
    })
}

const deleteUser = (id) => {
    $('#deleteModal').modal('toggle').on("click", "#confirmDelete", () => {
        users.map((user) => {
            if (user.id == id) {
                users.splice(users.indexOf(user), 1);
                $('#deleteModal').modal('hide');
                readUsers();
            }
        })
    })
    // $("#confirmDelete").click(() => {
    //     users.map((user) => {
    //         if (user.id == id) {
    //             users.splice(users.indexOf(user), 1);
    //             $('#deleteModal').modal('hide');
    //             readUsers();
    //         }
    //     })
    // })
}
const editUser = (id) => {
    document.getElementById("create").style.display = "none";
    document.getElementById("save").style.display = "block";
    const selectedUser = users.find((user) => user.id == id)
    // let selectedUser = users.filter((user) => {
    //     if (id == user.id) {
    //         return user;
    //     }
    // })
    // document.getElementById("fname").value = selectedUser[0].name;
    // document.getElementById("age").value = selectedUser[0].age;
    // document.getElementById("education").value = selectedUser[0].education;
    document.getElementById("fname").value = selectedUser.name;
    document.getElementById("age").value = selectedUser.age;
    document.getElementById("education").value = selectedUser.education;
    $('#createModal').modal('toggle').on("click", "#save", () => {
        // users.map((user) => {
        //     if (id == user.id) {
        //         users.splice(users.indexOf(user), 1)
        //     }
        // })
        // users.splice(users.indexOf(selectedUser), 1);
        // selectedUser[0].name = document.getElementById("fname").value;
        // selectedUser[0].age = document.getElementById("age").value;
        // selectedUser[0].education = document.getElementById("education").value;
        selectedUser.name = document.getElementById("fname").value;
        selectedUser.age = document.getElementById("age").value;
        selectedUser.education = document.getElementById("education").value;
        // let editedUser = {
        //     'name': selectedUser[0].name,
        //     'age': selectedUser[0].age,
        //     'education': selectedUser[0].education
        // }
        // users.push(editedUser)
        $('#createModal').modal('hide').off("click", "#save");
        readUsers();
    })
}

// var userElement = document.getElementById("user")
// userElement.innerHTML = users.map((user) => {
//     console.log("user", user.name)
//     return `<h1>${user.name}</h1>`;
// })
// var ageElement = document.getElementById("age")
// ageElement.innerHTML = users.map((user) => {
//     console.log("user", user.age)
//     return user.age;
// })
// var educationElement = document.getElementById("education")
// educationElement.innerHTML = users.map((user) => {
//     console.log("user", user.education)
//     return user.education;
// })

// var t = document.getElementById("etc"),
// d = t.getElementsByTagName("tr")[1],
//     r = d.getElementsByTagName("td")[0];
//     console.log("r", r, d, t)
//     r.innerHTML = users.map((user) => {
//         console.log("user", user.name)
//         return user.name;
//     })

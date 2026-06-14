const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const imageUrlInput = document.getElementById("imageUrl");
const usersContainer = document.getElementById("usersContainer");
const submitBtn = document.getElementById("submitBtn");
const userCount = document.getElementById("userCount");

let users = [];
let editIndex = null;

// Form Submit
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const image = imageUrlInput.value.trim();

  if (!name || !email || !image) {
    alert("Please fill all fields");
    return;
  }

  const user = {
    name,
    email,
    image,
  };

  // Edit User
  if (editIndex !== null) {
    users[editIndex] = user;
    editIndex = null;
    submitBtn.textContent = "Add User";
  } else {
    // Add User
    users.push(user);
  }

  userForm.reset();
  renderUsers();
});

// Render Users
function renderUsers() {
  usersContainer.innerHTML = "";

  userCount.textContent = `${users.length} User${
    users.length !== 1 ? "s" : ""
  }`;

  if (users.length === 0) {
    usersContainer.innerHTML = `
      <div class="col-span-full text-center py-10">
        <h3 class="text-2xl font-semibold text-gray-400">
          No Users Found
        </h3>
        <p class="text-gray-500 mt-2">
          Add your first user above
        </p>
      </div>
    `;
    return;
  }

  users.forEach((user, index) => {
    const card = document.createElement("div");

    card.className =
      "bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300";

    card.innerHTML = `
      <div class="flex flex-col items-center text-center">

        <img
          src="${user.image}"
          alt="${user.name}"
          class="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(
            user.name,
          )}&background=2563eb&color=fff'"
        />

        <h3 class="text-xl font-bold mt-4">
          ${user.name}
        </h3>

        <p class="text-gray-400 mt-1 break-all">
          ${user.email}
        </p>

        <div class="flex gap-3 mt-6 w-full">

          <button
            onclick="editUser(${index})"
            class="flex-1 bg-amber-500 hover:bg-amber-600 py-2 rounded-xl font-semibold transition"
          >
            Edit
          </button>

          <button
            onclick="deleteUser(${index})"
            class="flex-1 bg-red-500 hover:bg-red-600 py-2 rounded-xl font-semibold transition"
          >
            Delete
          </button>

        </div>

      </div>
    `;

    usersContainer.appendChild(card);
  });
}

// Edit User
function editUser(index) {
  const user = users[index];

  nameInput.value = user.name;
  emailInput.value = user.email;
  imageUrlInput.value = user.image;

  editIndex = index;
  submitBtn.textContent = "Update User";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Delete User
function deleteUser(index) {
  const confirmDelete = confirm(`Delete ${users[index].name}?`);

  if (!confirmDelete) return;

  users.splice(index, 1);

  renderUsers();
}

// Initial Render
renderUsers();

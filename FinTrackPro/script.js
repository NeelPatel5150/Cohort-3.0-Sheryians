let chartObj = null;
let users = {};
let currentEmail = "";
let current = null;
let transactions = [];
let activeType = "all";

let authWrap = document.getElementById("authWrap");
let appWrap = document.getElementById("appWrap");

let loginTab = document.getElementById("loginTab");
let registerTab = document.getElementById("registerTab");
let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");

let loginEmail = document.getElementById("loginEmail");
let loginPass = document.getElementById("loginPass");
let regName = document.getElementById("regName");
let regEmail = document.getElementById("regEmail");
let regPass = document.getElementById("regPass");
let regPass2 = document.getElementById("regPass2");

let helloName = document.getElementById("helloName");
let goDash = document.getElementById("goDash");
let goSettings = document.getElementById("goSettings");
let logoutBtn = document.getElementById("logoutBtn");

let dashPage = document.getElementById("dashPage");
let settingsPage = document.getElementById("settingsPage");

let openAdd = document.getElementById("openAdd");
let txModal = document.getElementById("txModal");
let modalInner = document.getElementById("modalInner");
let closeModal = document.getElementById("closeModal");
let modalTitle = document.getElementById("modalTitle");

let txForm = document.getElementById("txForm");
let editId = document.getElementById("editId");
let type = document.getElementById("type");
let note = document.getElementById("note");
let amount = document.getElementById("amount");
let date = document.getElementById("date");
let category = document.getElementById("category");
let saveBtn = document.getElementById("saveBtn");
let cancelEdit = document.getElementById("cancelEdit");

let allBtn = document.getElementById("allBtn");
let incBtn = document.getElementById("incBtn");
let expBtn = document.getElementById("expBtn");
let search = document.getElementById("search");
let filterMonth = document.getElementById("filterMonth");
let clearFilter = document.getElementById("clearFilter");

let tbody = document.getElementById("tbody");
let emptyText = document.getElementById("emptyText");

let balanceText = document.getElementById("balance");
let incomeText = document.getElementById("income");
let expenseText = document.getElementById("expense");
let txCount = document.getElementById("txCount");

let profileName = document.getElementById("profileName");
let currencySel = document.getElementById("currency");
let darkToggle = document.getElementById("darkToggle");
let saveProfile = document.getElementById("saveProfile");
let clearData = document.getElementById("clearData");

startApp();
bindEvents();

function startApp() {
	loadUsers();

	let savedSession = localStorage.getItem("ft_session");
	if (savedSession && users[savedSession]) {
		currentEmail = savedSession;
		current = users[currentEmail];
		afterLogin();
	} else {
		showAuth();
	}
}

function bindEvents() {
	loginTab.addEventListener("click", function () {
		showLoginTab();
	});

	registerTab.addEventListener("click", function () {
		showRegisterTab();
	});

	loginForm.addEventListener("submit", function (e) {
		e.preventDefault();
		doLogin();
	});

	registerForm.addEventListener("submit", function (e) {
		e.preventDefault();
		doRegister();
	});

	goDash.addEventListener("click", function () {
		showPage("dash");
	});

	goSettings.addEventListener("click", function () {
		showPage("settings");
	});

	logoutBtn.addEventListener("click", function () {
		localStorage.removeItem("ft_session");
		currentEmail = "";
		current = null;
		transactions = [];
		if (chartObj) {
			chartObj.destroy();
			chartObj = null;
		}
		showAuth();
	});

	openAdd.addEventListener("click", function () {
		openModal(false, "");
	});

	closeModal.addEventListener("click", function () {
		closeModalBox();
	});

	txModal.addEventListener("click", function (e) {
		if (e.target === txModal) {
			closeModalBox();
		}
	});

	cancelEdit.addEventListener("click", function () {
		closeModalBox();
	});

	txForm.addEventListener("submit", function (e) {
		e.preventDefault();
		saveTransaction();
	});

	allBtn.addEventListener("click", function () {
		activeType = "all";
		updateTypeButtons();
		refreshAll();
	});

	incBtn.addEventListener("click", function () {
		activeType = "income";
		updateTypeButtons();
		refreshAll();
	});

	expBtn.addEventListener("click", function () {
		activeType = "expense";
		updateTypeButtons();
		refreshAll();
	});

	search.addEventListener("input", function () {
		refreshAll();
	});

	filterMonth.addEventListener("change", function () {
		refreshAll();
	});

	clearFilter.addEventListener("click", function () {
		activeType = "all";
		search.value = "";
		filterMonth.value = "all";
		updateTypeButtons();
		refreshAll();
	});

	currencySel.addEventListener("change", function () {
		current.currency = currencySel.value;
		saveUsers();
		refreshAll();
	});

	darkToggle.addEventListener("change", function () {
		current.dark = darkToggle.checked;
		applyTheme();
		saveUsers();
	});

	saveProfile.addEventListener("click", function () {
		let name = profileName.value.trim();
		if (name === "") {
			alert("Name is required");
			return;
		}

		current.name = name;
		helloName.innerText = "Welcome, " + current.name;
		saveUsers();
		alert("Profile updated");
	});

	clearData.addEventListener("click", function () {
		let ok = confirm("Reset all your transactions?");
		if (!ok) {
			return;
		}

		current.transactions = [];
		transactions = [];
		saveUsers();
		refreshAll();
	});
}

function showLoginTab() {
	loginTab.classList.add("active");
	registerTab.classList.remove("active");
	registerTab.classList.add("ghost");
	loginTab.classList.remove("ghost");
	loginForm.classList.remove("hidden");
	registerForm.classList.add("hidden");
}

function showRegisterTab() {
	registerTab.classList.add("active");
	loginTab.classList.remove("active");
	loginTab.classList.add("ghost");
	registerTab.classList.remove("ghost");
	registerForm.classList.remove("hidden");
	loginForm.classList.add("hidden");
}

function doRegister() {
	let name = regName.value.trim();
	let email = regEmail.value.trim().toLowerCase();
	let pass = regPass.value;
	let pass2 = regPass2.value;

	if (name === "" || email === "" || pass === "" || pass2 === "") {
		alert("Fill all register fields");
		return;
	}

	if (pass !== pass2) {
		alert("Passwords do not match");
		return;
	}

	if (users[email]) {
		alert("Account already exists");
		return;
	}

	users[email] = {
		name: name,
		email: email,
		pass: pass,
		currency: "INR",
		dark: false,
		transactions: []
	};

	saveUsers();
	alert("Register done. Please login.");

	registerForm.reset();
	showLoginTab();
	loginEmail.value = email;
}

function doLogin() {
	let email = loginEmail.value.trim().toLowerCase();
	let pass = loginPass.value;

	if (!users[email]) {
		alert("No account found. Register first.");
		return;
	}

	if (users[email].pass !== pass) {
		alert("Wrong password");
		return;
	}

	currentEmail = email;
	current = users[currentEmail];
	localStorage.setItem("ft_session", currentEmail);
	afterLogin();
}

function afterLogin() {
	showApp();
	helloName.innerText = "Welcome, " + current.name;
	profileName.value = current.name;
	currencySel.value = current.currency || "INR";
	darkToggle.checked = !!current.dark;

	transactions = current.transactions || [];
	setToday();
	updateMonthOptions();
	updateTypeButtons();
	applyTheme();
	showPage("dash");
	refreshAll();
}

function showAuth() {
	authWrap.classList.remove("hidden");
	appWrap.classList.add("hidden");
	txModal.classList.add("hidden");
	document.body.classList.remove("dark");
}

function showApp() {
	authWrap.classList.add("hidden");
	appWrap.classList.remove("hidden");
}

function showPage(name) {
	if (name === "settings") {
		settingsPage.classList.remove("hidden");
		dashPage.classList.add("hidden");
		goSettings.classList.add("active");
		goDash.classList.remove("active");
	} else {
		dashPage.classList.remove("hidden");
		settingsPage.classList.add("hidden");
		goDash.classList.add("active");
		goSettings.classList.remove("active");
	}
}

function openModal(isEdit, id) {
	txModal.classList.remove("hidden");

	if (isEdit) {
		modalTitle.innerText = "Edit Transaction";
		saveBtn.innerText = "Update";
		editId.value = id;
		fillEditData(id);
	} else {
		modalTitle.innerText = "Add Transaction";
		saveBtn.innerText = "Save";
		resetForm();
		editId.value = "";
	}
}

function closeModalBox() {
	txModal.classList.add("hidden");
	resetForm();
}

function saveTransaction() {
	let title = note.value.trim();
	let amt = parseFloat(amount.value);

	if (title === "" || isNaN(amt) || amt <= 0 || date.value === "") {
		alert("Please fill all fields correctly");
		return;
	}

	if (editId.value === "") {
		let obj = {
			id: String(Date.now()),
			type: type.value,
			title: title,
			amount: amt,
			date: date.value,
			category: category.value
		};
		transactions.push(obj);
	} else {
		let i;
		for (i = 0; i < transactions.length; i++) {
			if (transactions[i].id === editId.value) {
				transactions[i].type = type.value;
				transactions[i].title = title;
				transactions[i].amount = amt;
				transactions[i].date = date.value;
				transactions[i].category = category.value;
				break;
			}
		}
	}

	persistTransactions();
	closeModalBox();
	refreshAll();
}

function fillEditData(id) {
	let i;
	for (i = 0; i < transactions.length; i++) {
		if (transactions[i].id === id) {
			type.value = transactions[i].type;
			note.value = transactions[i].title;
			amount.value = transactions[i].amount;
			date.value = transactions[i].date;
			category.value = transactions[i].category;
			break;
		}
	}
}

function deleteOne(id) {
	let ok = confirm("Delete this transaction?");
	if (!ok) {
		return;
	}

	let list = [];
	let i;
	for (i = 0; i < transactions.length; i++) {
		if (transactions[i].id !== id) {
			list.push(transactions[i]);
		}
	}

	transactions = list;
	persistTransactions();
	refreshAll();
}

function getFilteredList() {
	let text = search.value.trim().toLowerCase();
	let month = filterMonth.value;

	let list = [];
	let i;
	for (i = 0; i < transactions.length; i++) {
		let item = transactions[i];
		let ok = true;

		if (activeType !== "all" && item.type !== activeType) {
			ok = false;
		}

		if (ok && text !== "" && item.title.toLowerCase().indexOf(text) === -1) {
			ok = false;
		}

		if (ok && month !== "all" && item.date.slice(0, 7) !== month) {
			ok = false;
		}

		if (ok) {
			list.push(item);
		}
	}

	return list;
}

function refreshAll() {
	updateCards();
	showTable();
	drawChart();
}

function updateCards() {
	let totalIncome = 0;
	let totalExpense = 0;

	let i;
	for (i = 0; i < transactions.length; i++) {
		if (transactions[i].type === "income") {
			totalIncome += Number(transactions[i].amount);
		} else {
			totalExpense += Number(transactions[i].amount);
		}
	}

	let bal = totalIncome - totalExpense;

	incomeText.innerText = money(totalIncome);
	expenseText.innerText = money(totalExpense);
	balanceText.innerText = money(bal);
	txCount.innerText = transactions.length;
}

function showTable() {
	let list = getFilteredList();
	tbody.innerHTML = "";

	if (list.length === 0) {
		emptyText.style.display = "block";
	} else {
		emptyText.style.display = "none";
	}

	let i;
	for (i = list.length - 1; i >= 0; i--) {
		let item = list[i];
		let tr = document.createElement("tr");

		tr.innerHTML = ""
			+ "<td>" + item.date + "</td>"
			+ "<td>" + safe(item.title) + "</td>"
			+ "<td>" + safe(item.category) + "</td>"
			+ "<td class='amount " + item.type + "'>" + money(item.amount) + "</td>"
			+ "<td><button class='small editBtn' data-id='" + item.id + "'>Edit</button><button class='small del delBtn' data-id='" + item.id + "'>Delete</button></td>";

		tbody.appendChild(tr);
	}

	bindTableButtons();
}

function bindTableButtons() {
	let editBtns = document.querySelectorAll(".editBtn");
	let delBtns = document.querySelectorAll(".delBtn");

	let i;
	for (i = 0; i < editBtns.length; i++) {
		editBtns[i].addEventListener("click", function () {
			let id = this.getAttribute("data-id");
			openModal(true, id);
		});
	}

	for (i = 0; i < delBtns.length; i++) {
		delBtns[i].addEventListener("click", function () {
			let id = this.getAttribute("data-id");
			deleteOne(id);
		});
	}
}

function drawChart() {
	if (typeof Chart === "undefined") {
		return;
	}

	let list = getFilteredList();
	let incomeMap = {};
	let expenseMap = {};
	let i;

	for (i = 0; i < list.length; i++) {
		let key = list[i].date;
		if (!incomeMap[key]) {
			incomeMap[key] = 0;
		}
		if (!expenseMap[key]) {
			expenseMap[key] = 0;
		}

		if (list[i].type === "income") {
			incomeMap[key] += Number(list[i].amount);
		} else {
			expenseMap[key] += Number(list[i].amount);
		}
	}

	let labels = Object.keys(incomeMap).sort();
	let inData = [];
	let exData = [];

	for (i = 0; i < labels.length; i++) {
		inData.push(incomeMap[labels[i]] || 0);
		exData.push(expenseMap[labels[i]] || 0);
	}

	if (chartObj) {
		chartObj.destroy();
	}

	let ctx = document.getElementById("chart");
	chartObj = new Chart(ctx, {
		type: "bar",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Income",
					data: inData,
					backgroundColor: "rgba(18, 128, 58, 0.7)"
				},
				{
					label: "Expense",
					data: exData,
					backgroundColor: "rgba(195, 31, 31, 0.7)"
				}
			]
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					display: true
				}
			},
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
}

function updateMonthOptions() {
	let old = filterMonth.value;
	let map = {};
	let i;

	for (i = 0; i < transactions.length; i++) {
		if (transactions[i].date) {
			map[transactions[i].date.slice(0, 7)] = true;
		}
	}

	filterMonth.innerHTML = "<option value='all'>All Months</option>";

	let keys = Object.keys(map).sort();
	for (i = 0; i < keys.length; i++) {
		let op = document.createElement("option");
		op.value = keys[i];
		op.innerText = keys[i];
		filterMonth.appendChild(op);
	}

	if (old && map[old]) {
		filterMonth.value = old;
	}
}

function updateTypeButtons() {
	allBtn.classList.remove("active");
	incBtn.classList.remove("active");
	expBtn.classList.remove("active");

	if (activeType === "income") {
		incBtn.classList.add("active");
	} else if (activeType === "expense") {
		expBtn.classList.add("active");
	} else {
		allBtn.classList.add("active");
	}
}

function setToday() {
	if (date.value === "") {
		let now = new Date();
		let m = String(now.getMonth() + 1).padStart(2, "0");
		let d = String(now.getDate()).padStart(2, "0");
		date.value = now.getFullYear() + "-" + m + "-" + d;
	}
}

function resetForm() {
	txForm.reset();
	editId.value = "";
	saveBtn.innerText = "Save";
	modalTitle.innerText = "Add Transaction";
	type.value = "income";
	setToday();
}

function money(num) {
	let code = current ? current.currency : "INR";
	let sym = "Rs";

	if (code === "USD") {
		sym = "$";
	} else if (code === "EUR") {
		sym = "EUR";
	} else if (code === "GBP") {
		sym = "GBP";
	} else if (code === "JPY") {
		sym = "JPY";
	}

	return sym + " " + Number(num).toFixed(2);
}

function applyTheme() {
	if (current && current.dark) {
		document.body.classList.add("dark");
	} else {
		document.body.classList.remove("dark");
	}
}

function persistTransactions() {
	current.transactions = transactions;
	saveUsers();
	updateMonthOptions();
}

function loadUsers() {
	if (localStorage.getItem("ft_users")) {
		users = JSON.parse(localStorage.getItem("ft_users"));
	} else {
		users = {};
	}
}

function saveUsers() {
	localStorage.setItem("ft_users", JSON.stringify(users));
}

function safe(text) {
	return String(text)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.disabled = true;

input.onkeyup = () => {
	if (input.value.length > 0) {
		btn.disabled = false;
	}else{
		btn.disabled = true
	}
}

form.addEventListener("submit", e => {
	e.preventDefault();

	const userInput = input.value;
	const newList = document.createElement("li");
	list.append(newList);
	const containerList = document.createElement("div");
	newList.append(containerList);
	containerList.classList.add('itemList');
	const titleList = document.createElement('h4');
	titleList.innerHTML = `- ${userInput}`;
	containerList.append(titleList)


	const editBtn = document.createElement("button");
	const deleteBtn = document.createElement("button");
	editBtn.innerHTML = "Edit"
	deleteBtn.innerHTML = "Delete"
	
	containerList.append(editBtn);
	containerList.append(deleteBtn);
	btn.disabled = true;
	input.value = "";

	const updateInput = document.createElement('input');
	const saveBtn = document.createElement("button");
	const cancelBtn = document.createElement("button");
	saveBtn.innerHTML = "Save"
	cancelBtn.innerHTML = "Cancel"

	editBtn.addEventListener('click', () => {
		editBtn.classList.add('isHidden');
		deleteBtn.classList.add('isHidden');
		newList.append(updateInput);
		newList.append(saveBtn);
		newList.append(cancelBtn);
			

	});

	deleteBtn.addEventListener('click', () => {
		newList.remove();
	});

	saveBtn.addEventListener('click', () => {
		titleList.innerHTML = `- ${updateInput.value}`;
		editBtn.classList.remove('isHidden');
		deleteBtn.classList.remove('isHidden');
		updateInput.remove();
		saveBtn.remove();
		cancelBtn.remove();
		updateInput.value = "";
	});


	cancelBtn.addEventListener('click', () => {
		editBtn.classList.remove('isHidden');
		deleteBtn.classList.remove('isHidden');
		updateInput.remove();
		saveBtn.remove();
		cancelBtn.remove();
	})

});

function item(userInput) {
	
}

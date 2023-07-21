const editInputEmployeeUid = document.querySelector("#edit-input-employee-uid");
const editInputEmployeeFirstName = document.querySelector("#edit-input-employee-first-name");
const editInputEmployeeLastName = document.querySelector("#edit-input-employee-last-name");

function setEditInputValue(uid, firstName, lastName) {
    editInputEmployeeUid.value = uid;
    editInputEmployeeFirstName.value = firstName;
    editInputEmployeeLastName.value = lastName;
}
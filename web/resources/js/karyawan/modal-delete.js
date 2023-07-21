const deleteInputEmployeeUid = document.querySelector("#delete-input-employee-uid");
const deleteInputEmployeeFirstName = document.querySelector("#delete-input-employee-first-name");
const deleteInputEmployeeLastName = document.querySelector("#delete-input-employee-last-name");

function setDeleteInputValue(uid, firstName, lastName) {
    deleteInputEmployeeUid.value = uid;
    deleteInputEmployeeFirstName.value = firstName;
    deleteInputEmployeeLastName.value = lastName;
}
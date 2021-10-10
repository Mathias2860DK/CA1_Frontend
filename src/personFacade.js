//http://localhost:8080/devops_starter_war_exploded/
const URL = "http://localhost:8080/devops_starter_war_exploded/api/xxx";

function getPersons(){
return fetch(URL + "/all")
.then(res => res.json())
}

function getPersonsByHobby(hobby){
return fetch(URL + "/hobby/" + hobby)
.then(res => res.json())
}

function getpersonsByZipFetch(zip){
return fetch(URL + "/city/" + zip)
.then(res => res.json())
}

function getPersonByPhone(phone){
return fetch(URL + "/phone/" + phone)
.then(res => res.json())
}
/*
.then(persons =>{
  const personRows = persons.map(person =>`
<tr>
<td>${person.firstName}</td>
<td>${person.lastName}</td>
<td>${person.email}</td>
</tr>
  `)
  const userRowsAsString = personRows.join('');
  document.getElementById("allUserRows").innerHTML = userRowsAsString;
})

*/

function findPersonByPhone(){
const phone = document.getElementById("findPersonByPhoneText").value;
  getPersonByPhone(phone)
    .then(person =>{

        const personRows = 
            `<tr>
<td>${person.firstName}</td>
<td>${person.lastName}</td>
<td>${person.email}</td>
<td>${person.phones.map(phone => `<span>${phone.phoneNumber}</span><br>`).join()}</td>
<td>${person.hobbies.map(hobby => `<span>${hobby.name}</span><br>`).join()}</td>
</tr>
        `;
  document.getElementById("allUserRows").innerHTML = personRows;

})
}

function findPersonsByZip(){
const zip = document.getElementById("findPersonByZipText").value;
  getpersonsByZipFetch(zip)
    .then(persons =>{
        const personRows = persons.map(person =>
            `<tr>
<td>${person.firstName}</td>
<td>${person.lastName}</td>
<td>${person.email}</td>
<td>${person.phones.map(phone => `<span>${phone.phoneNumber}</span><br>`).join()}</td>
<td>${person.hobbies.map(hobby => `<span>${hobby.name}</span><br>`).join()}</td>
</tr>
        `);
        const userRowsAsString = personRows.join('');
  document.getElementById("allUserRows").innerHTML = userRowsAsString;

})
}

function findPersonsByHobby()
{
  const hobby = document.getElementById("findPersonByHobbyText").value;
  getPersonsByHobby(hobby)
    .then(persons =>{

        const personRows = persons.map(person => 
            `<tr>
<td>${person.firstName}</td>
<td>${person.lastName}</td>
<td>${person.email}</td>
<td>${person.phones.map(phone => `<span>${phone.phoneNumber}</span><br>`).join()}</td>
<td>${person.hobbies.map(hobby => `<span>${hobby.name}</span><br>`).join()}</td>
</tr>
        `)
        const userRowsAsString = personRows.join('');
  document.getElementById("allUserRows").innerHTML = userRowsAsString;

})
}

function getUser(id) {
    return fetch(URL + '/' + id)
        .then(res => handleHttpErrors(res))
}

function getPersonToAdd(){
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("mail").value;
    const street = document.getElementById("street").value;
    const zipCode = document.getElementById("zip_code").value;
    const city = document.getElementById("city").value;


    const cityInfo = {
        "zipCode" : zipCode,
        "city" : city
    }
    const address = {
        "street" : street,
        "additionalInfo" : "",
        "cityInfo" : cityInfo
    }
    const person = {
        "firstName" : firstName,
        "lastName" : lastName,
        "email" : email,
        "address" : address

    }
    //adds person through rest endpoint
    addPerson(person);
    getAllPersons();
}

function getAllPersons(){
getPersons()
.then(persons =>{
  const personRows = persons.map(person =>`
<tr>
<td>${person.id}</td>
<td>${person.firstName}</td>
<td>${person.lastName}</td>
<td>${person.email}</td>
<td>${person.phones.map(phone => `<span>${phone.phoneNumber}</span><br>`).join()}</td>
<td>${person.hobbies.map(hobby => `<span>${hobby.name}</span><br>`).join()}</td>
</tr>
  `)
  const userRowsAsString = personRows.join('');
  document.getElementById("allUserRows").innerHTML = userRowsAsString;
})
}
function addPerson(person) {
    const options = makeOptions('POST', person)
    return fetch(URL + "/", options)
        .then(res => handleHttpErrors(res))
}




function editUser(user){
    
}

function deleteUser(id){
    
}

const personFacade = {
    getPersons,
    getPersonsByHobby,
    findPersonsByHobby,
    getUser,
    addPerson,
    editUser,
    getPersonToAdd,
    findPersonByPhone,
    findPersonsByZip,
    deleteUser
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

export default personFacade;
import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import "./personFacade"
import jokeFacade from "./jokeFacade"
import personFacade from "./personFacade"

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */


/* JS For Exercise-2 below */



/* JS For Exercise-3 below */

//Edit person

function getAllPersons(){
personFacade.getPersons()
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
getAllPersons()//test data


//find persons by hobby
document.getElementById("findPersonByHobbyButton").addEventListener('click', event => personFacade.findPersonsByHobby());

//Find persons all hobbies
document.getElementById("findAllPersonsButton").addEventListener('click', event => getAllPersons());

//Find persons by zip
document.getElementById("findPersonByZipButton").addEventListener('click', event => personFacade.findPersonsByZip());


document.getElementById("findPersonByPhoneButton").addEventListener('click', event => personFacade.findPersonByPhone());

document.getElementById("submitForm").addEventListener('click', event => personFacade.getPersonToAdd());
/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");




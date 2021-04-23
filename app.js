"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      promptFor("Do you know any traits about this person? Enter 'weight', 'height', 'dob', 'occupation', 'eye color', or 'no.").toLowerCase();
      // TODO: search by traits
      searchResults = searchTraits(people);
      switch(searchType){
      case 'weight':
        searchResults = searchWeight(people);
        break;
      case 'height' :
        searchResults = searchHeight(people);
        break;
      case 'dob':
        searchResults = searchDob(people);
        break;
      case 'occupation':
        searchResults = searchOccupation(people);
        break;
      case 'eye color':
        searchResults = searchEyeColor(people);
        break;
      case 'no':
        prompt("Sorry. We can't just vaguely search based on a feeling.")
        default:
        app(people);
        break;
      }

      function searchByName(people){
        let firstName = promptFor("Person's first name?", chars);
        let lastName = promptFor("Person's last name?", chars);

        let foundPerson = people.filter(function(person){
          if(person.firstName === firstName && person.lastName === lastName){
            return true;
          }
          else{
            return false;
          }
        })
        return foundPerson[0];
      }


    

  
      

      //what color eyes? etc
      //switch case for searchbyTrait instead of single function

      break;
      default:
    app(people); // restart app
      break;
  }
  
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info

    //display all available info

    break;
    case "family":
    // TODO: get person's family
    //display only known relatives
    break;
    case "descendants":
    // TODO: get person's descendants
    //display only children
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


function findKids(personWithChildren, people){
  let children = people.filter(function(person){
    if(person.parents[0] == personWithChildren.id){
      return true;
    }
    else{
      return false;
    }
  })
  for(let i = 0; i < children.count; i++){
    let kid = children[i];
  }
  displayPeople(children);
}


function searchWeight(people)
{
  
  var weight;
  
  weight = prompt("How much does this person weigh?");
  let foundPerson = people.filter(function(person)
  {
    if (person.weight == weight)
    {
      return true;
    }
    else 
    {
      console.log("Sorry. No matches on that weight.");
      return false;
    }
  })
   return foundPerson;
  
}
function searchHeight(people)
{
  
  var height;
  
  height = prompt("How much tall is this person?");
  let foundPerson = people.filter(function(person)
  {
    if (person.height === height)
    {
      return true;
    }
    else 
    {
      console.log("Sorry. No matches on that height.");
      return false;
    }
  })
   return foundPerson;
  
}
function searchDob(people)
{
  
  var dob;
  
  dob = prompt("What is this person's date of birth? (mm/dd/yyyy, if single digit, just put single digit. i.e. January first = 1/1/yyyy");
  let foundPerson = people.filter(function(person)
  {
    if (person.dob == dob)
    {
      return true;
    }
    else 
    {
      console.log("Sorry. No one at that age in here.");
      return false;
    }
  })
   return foundPerson;
  
}
function searchOccupation(people)
{
  
  var occupation;
  
  occupation = prompt("What does this person do for a living?");
  let foundPerson = people.filter(function(person)
  {
    if (person.occupation === occupation)
    {
      return true;
    }
    else 
    {
      console.log("No matches with that occupation.");
      return false;
    }
  })
   return foundPerson;
  
}
function searchEyeColor(people)
{
  
  var eyeColor;
  
  eyeColor = prompt("What color eyes does this person have?");
  let foundPerson = people.filter(function(person)
  {
    if (person.eyeColor === eyeColor)
    {
      return true;
    }
    else 
    {
      console.log("No one on this registry has that eye color.");
      return false;
    }
  })
   return foundPerson;
  
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Age: " + person.age + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Eye color: " + person.eyeColor + "\n";

  // TODO: finish getting the rest of the information to display
  //populate a field with all necessary tidbits
  return person(list);


  alert(personInfo);
}

function findParents(person, people){
  let parents = people.filter(function(parent){
    if(person.parents[0] == parent.id){
      return true;
    }
    else if(person.parents[1] == parent.id){
      return true;
    }
    else{
      return false;
    }
  })
  let theParents = (parents.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
  return theParents;
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

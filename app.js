'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    firstNameInput = firstNameInput.charAt(0).toUpperCase() + firstNameInput.slice(1);
    lastNameInput = lastNameInput.charAt(0).toUpperCase() + lastNameInput.slice(1);
        // firstNameInput = firstNameInput.toLowerCase()

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}


function generateTableHead(){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text)
        row.appendChild(th);
    }
}
function generateTableContents(){
    for (let person of data){
        let row = table.insertRow();
        for (let key in person){
            if(key === 'firstName'){
                let cell = row.insertCell();
                let text = document.createTextNode(person[key]);
                cell.appendChild(text)}
            if(key === 'lastName'){
                let cell = row.insertCell();
                let text = document.createTextNode(person[key]);
                cell.appendChild(text)}
                if(key === 'gender'){
                    let cell = row.insertCell();
                    let text = document.createTextNode(person[key]);
                    cell.appendChild(text)}
                    if(key === 'dob'){
                        let cell = row.insertCell();
                        let text = document.createTextNode(person[key]);
                        cell.appendChild(text)}
                        if(key === 'height'){
                            let cell = row.insertCell();
                            let text = document.createTextNode(person[key]);
                            cell.appendChild(text)}
                            if(key === 'weight'){
                                let cell = row.insertCell();
                                let text = document.createTextNode(person[key]);
                                cell.appendChild(text)}
                                if(key === 'eyeColor'){
                                    let cell = row.insertCell();
                                    let text = document.createTextNode(person[key]);
                                    cell.appendChild(text)}
                                    if(key === 'occupation'){
                                        let cell = row.insertCell();
                                        let text = document.createTextNode(person[key]);
                                        cell.appendChild(text)}
                                        if(key === 'parents'){
                                            let parentsFound = person[key]
                                            if(parentsFound.length === 0){
                                                parentsFound = 'None'
                                            }
                                            if(parentsFound.length === 1){
                                                let parentFiltered =people.filter(function(person){
                                                    if(person.id === parentsFound[0])
                                                    parentsFound[0] = person.firstName + ' ' + person.lastName
                                                    })
                                            }
                                            if(parentsFound.length === 2){
                                                let parentFiltered =people.filter(function(person){
                                                    if(person.id === parentsFound[0])
                                                    parentsFound[0] = person.firstName + ' ' + person.lastName
                                                    })
                                                    let parentsFiltered =people.filter(function(person){
                                                        if(person.id === parentsFound[1])
                                                        parentsFound[1] = person.firstName + ' ' + person.lastName
                                                        })
                                            }
                                            let cell = row.insertCell();
                                            let text = document.createTextNode(parentsFound);
                                            cell.appendChild(text)
                                        }                                            
                                        if(key === 'currentSpouse'){
                                         let spouseFound = person[key]
                                             if(spouseFound == null){
                                                 spouseFound = 'N/A'
                                         }
                                        let spouseFiltered =people.filter(function(person){
                                        if(person.id === spouseFound)
                                        spouseFound = person.firstName + ' ' + person.lastName
                                        })
                                        let cell = row.insertCell();
                                        let text = document.createTextNode(spouseFound);
                                        cell.appendChild(text)
                                        }
                                        }
                                        }
                                        }
                                    
            //addition statement for key being parents or spouse
                                        
                
                
             
 
let table = document.querySelector("table");
let data = Object.keys(personTable[0]);
generateTableHead(table, data);
data = people
generateTableContents(table, people);

//function that takes in id and gives back person's name

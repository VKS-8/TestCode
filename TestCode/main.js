const mainContainer = document.querySelector('#main-container');
console.log(mainContainer);const sectionOne = document.querySelector('#section1');
console.log('sectionOne ' + sectionOne);
const articleOne = document.querySelector('#article1');
console.log('articleOne ' + articleOne);
const divOne = document.querySelector('#div1');
console.log('div1 ' + div1);

const newText = `Hi, I'm new <span style='background: purple'>text in the newPTag</span>`;
console.log('newText = ' + newText);
const newTextInnerHTML = newText.innerHTML;
console.log('innerHTML ' + newTextInnerHTML);
// console.log('innerText ' + newText.innerText);
// console.log('textContent ' + newText.textContent);
// console.log('outerHTML ' + newText.outerHTML);

const newSectionTag = document.createElement('section');
console.log('newSectionTag ' + newSectionTag);
const newArticleTag = document.createElement('article');
console.log('newArticleTage ' + newArticleTag);
const newDivTag = document.createElement('div');
console.log('newDivTag ' + newDivTag);
const newPTag = document.createElement('p');
console.log('newPTag ' + newPTag);

// Probably should create a conditional or switch statement
// to choose the action to take based on the target clicked
// instead of all of these individual 
const buttonAdd = document.querySelector('#buttonAdd');
console.log('I have been added ' + buttonAdd);
const buttonRemove = document.querySelector('#buttonRemove');
console.log('I have been removed ' + buttonRemove);

const buttonAddSection = document.querySelector('#buttonAddSection');
console.log('Section has been added ' + buttonAddSection);
const buttonRemoveSection = document.querySelector('#buttonRemoveSection');
console.log('Section has been removed ' + buttonRemoveSection);

const buttonAddArticle = document.querySelector('#buttonAddArticle');
console.log('Article has been added ' + buttonAddArticle);
const buttonRemoveArticle = document.querySelector('#buttonRemoveArticle');
console.log('Article has been removed ' + buttonRemoveArticle);

const buttonAddDiv = document.querySelector('#buttonAddDiv');
console.log('Div has been added ' + buttonAddDiv);
const buttonRemoveDiv = document.querySelector('#buttonRemoveDiv');
console.log('Div has been removed ' + buttonRemoveDiv);

const buttonAddPara = document.querySelector('#buttonAddPara');
console.log('Para has been added ' + buttonAddPara);
const buttonRemovePara = document.querySelector('#buttonRemovePara');
console.log('Para has been removed ' + buttonRemovePara);

const buttonAddText = document.querySelector('#buttonAddText');
console.log('Text has been added ' + buttonAddText);
const buttonRemoveText = document.querySelector('#buttonRemoveText');
console.log('Text has been removed ' + buttonRemoveText);


// buttonAdd.addEventListener('click', () => {
//     divOne.appendChild(newPTag);
//     console.log('added newPTag to divOne ' + divOne);
// })

// buttonRemove.addEventListener('click', () => {
//     divOne.removeChild(newPTag);
//     console.log('removed divOne ' + divOne);
// })

buttonAddSection.addEventListener('click', () => {
    mainContainer.appendChild(newSectionTag);
    console.log('New section has been added ' + mainContainer);
})

buttonRemoveSection.addEventListener('click', () => {
    mainContainer.removeChild(newSectionTag);
    console.log('Section has been removed ' + mainContainer);
})

buttonAddArticle.addEventListener('click', () => {
    sectionOne.appendChild(newArticleTag);
    console.log('New articleOne has been added ' + articleOne);
})

buttonRemoveArticle.addEventListener('click', () => {
    sectionOne.removeChild(newArticleTag);
    console.log('articleOne has been removed ' + articleOne);
})

buttonAddDiv.addEventListener('click', () => {
    articleOne.appendChild(newDivTag);
    console.log('New div has been added to sectionOne ' + articleOne);
})

buttonRemoveDiv.addEventListener('click', () => {
    articleOne.removeChild(newDivTag);
    console.log('Div has been removed from sectionOne ' + articleOne);
})

buttonAddPara.addEventListener('click', () => {
    divOne.appendChild(newPTag);
    console.log('New paragraph has been added to divOne ' + divOne);
})

buttonRemovePara.addEventListener('click', () => {
    divOne.removeChild(newPTag);
    console.log('Paragraph has been removed from divOne ' + divOne);
})

buttonAddText.addEventListener('click', () => {
    newPTag.appendChild = newText;
    console.log('added new text to newPTag ' + newPTag);
})

buttonRemoveText.addEventListener('click', () => {
    newPTag.textContent = '';
    console.log('Removed new text from newPTag ' + newPTag);
})


// function / method to update id for appended elements 
//when added to the DOM
//for now I will just layout the idea and then refine later

//function () {
    //first would need to get the id from the last child of the
    //parent element

    //then would need to slice or splice in order to get the last char
    //the character would then need to be converted to an int

    //this int would need to be incremented then the outerHTML
    //then it would need to be converted back into a string and
    //would need to be added to the outerHTML for the newly appended
    //element to update the id

    //the class would be more likely added from a list of the classList 
    //object to the outerHTML of each append action based on conditions
//}

// study this: 
// https://www.w3schools.com/jsref/prop_html_id.asp
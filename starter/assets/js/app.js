let addButton = document.getElementById("add-btn");
let recipent = document.getElementById("recipient-name");
let description = document.getElementById("message-text");
// let containerTasks = document.querySelector(".tasks");
let closeBtn = document.getElementById("close-modal");
let inputRadio = document.querySelector(".input-radio");
let inputDate = document.getElementById("date");
let selectOption = document.getElementById("inputGroupSelect");
let selectPriority = document.querySelector(".select-priority");



var tasks = [
    {
        'title'         :   'Keep all the updated requirements in one place',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.`,
        'id': '',
    },
    {
        'title'         :   'Consider creating an acceptance criteria list',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `Descriptive requirements are very helpful when it comes to understanding the context of a problem, yet finally it is good to precisely specify what is expected. Thus the developer will not have to look for the actual requirements in a long, descriptive text but he will be able to easily get to the essence. One might find that sometimes — when acceptance criteria are well defined — there is little or no need for any additional information. Example:
        a) User navigates to “/accounts” and clicks on red download CSV button
        b) Popup appears with two buttons: “This year” and “Last year”
        c) If user clicked on “Last year” download is initiated
        d) CSV downloaded includes following columns…`,
        'id': '',
    },
    {
        'title'         :   'Provide mockups',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `A textual requirements description is essential in most cases, but an image is often worth more than a thousand words. Even a simple mockup can limit misunderstandings by a great factor. There are many apps out there that might be helpful here, like Balsamiq, InVision or Mockingbird, but manipulating screenshots of an existing app also works.`,
        'id': '',
    },
    {
        'title'         :   'Provide examples, credentials, etc',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `If the expectation is to process or generate some file — attach an example of such a file. If the goal is to integrate what is being developed with some service, ensure your devs have access to this service and its documentation. This list could go on and on — the bottom line is — if there is something that our developer might make use of, try to foresee it and provide them with (access to) it.`,
        'id': '',
    },
    {
        'title'         :   'Annotate',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `The mockup provided can sometimes be confusing for developers. Especially if it contains much more content than the scope of the task described. Drop a couple of arrows, outlines and annotations here and there to emphasize what are the important parts of the mockup from the task requirements perspective.`,
        'id': '',
    },
    {
        'title'         :   'Use charts and diagrams',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `While it is not always necessary, sometimes it might be beneficial to prepare a flowchart, a block diagram or some other kind of concept visualization that will render it easy for the developer to comprehend the task and its scope.`,
        'id': '',
    },
    {
        'title'         :   'Spoil your developers with details',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `It is always safer to assume less rather than more domain knowledge in the dev team. Therefore following the KISS principle and augmenting each description or acceptance criteria list with contextual/domain knowledge and details that might become relevant is highly recommended.`,
        'id': '',
    },
    {
        'title'         :   'Describe edge cases and provide constraints',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `Hardly any developer likes constraints, but if there are some, let them be communicated early. Do we need to support some specific browsers? Does this script need to run below a specific amount of time? Is it crucial for this endpoint to respond in no more than n milliseconds? If there are some such concerns, make sure they are included in your descriptions. Also describing any edge cases might be beneficial. Maybe we have some query limit on a given service? If you have such knowledge it is always beneficial for your devs to know about it upfront.`,
        'id': '',
    },
    {
        'title'         :   'Provide a copy',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `If there is a long message to be displayed, just provide a copy for it somewhere in the description. Do not place it on mockups as it is always slower and more error-prone to re-type it than to copy-paste it.`,
        'id': '',
    },
    
    {
        'title'         :   'Describe steps to reproduce an issue',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `including as many details as possible. `,
        'id': '',
    },
    {
        'title'         :   'Provide access',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `to the affected account and services if possible. It might be hard to reproduce the exact environment on a local machine.`,
        'id': '',
    },
    {
        'title'         :   'Provide environment information',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `i.e., browser version, operating system version etc. Sometimes a list of installed browser plugins and extensions might be helpful as well.`,
        'id': '',
    },
    {
        'title'         :   'Provide a link to an exception and/or a stack trace',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `as investigating those is usually the first step to take in resolving the problem.`,
        'id': '',
    },
    {
        'title'         :   'Provide access to logs',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `as they can be helpful in reproducing the steps that caused the problem in the first place.`,
        'id': '',
    },
    {
        'title'         :   'Provide access to the affected server or database dump',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `If it is possible and when it does not violate security policies, it is usually helpful for the developer to access the original data that might have played a role in the problem.`,
        'id': '',
    },
    {
        'title'         :   'Make a screencast',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `It is not always necessary, but many times a short screencast (or at least a screenshot) says more than a thousand words. While working on MacOS you can use QuickTime Player for the purpose but there are plenty of tools available for other operating systems as well.`,
        'id': '',
    },
    {
        'title'         :   'Provide contact information',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `of the person that reported the bug. This will not always be possible, but in some cases it might be advantageous and most effective if a developer can have a chat with a person that actually experienced the bug, especially if the steps to reproduce a problem are not deterministic.`,
        'id': '',
    },
];
var countTodo = 0;
    var countProgresse = 0;
    var countDone = 0;

readData();


function readData(){
    let todoTasksBtn = document.querySelector("#to-do-tasks");
    todoTasksBtn.innerHTML = "";
    let progresseTaskBtn = document.querySelector("#progresse-tasks");
    progresseTaskBtn.innerHTML = "";
    let doneTaskBtn = document.querySelector("#done-tasks");
    doneTaskBtn.innerHTML = "";

    var countTask = 0;

    

    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].status == "To Do"){
            countTodo++;
            countTask++;
            todoTasksBtn.innerHTML += `
            <button class="rounded-top" data-id="${i}">
            <div class="icon">
                <i class="fa-regular fa-circle-question fa-1x"></i>
                <span class="btn text-white bg-danger rounded-pill" id="delete" onclick="deleteTaskWith(${i})"><i class="fa-solid fa-trash"></i></span>
            </div>
            <div class="modal-card text-start">
                <div class="title-one">${tasks[i].title}</div>
                <div class="">
                    <div class="creation"><span id="order-card-todo">#${countTask}</span> created in ${tasks[i].date}</div>
                    <div class="having my-1">${tasks[i].description}</div>
                </div>
                <div class="buttons my-1 d-flex justify-content-between">
                    <span class="btn text-white bg-primary">${tasks[i].type}</span>
                    <span class="btn  bg-light">${tasks[i].priority}</span>
                    <span class="btn text-white bg-info rounded-pill" id="modify"><i class="fa-sharp fa-solid fa-user-pen"></i></span>
                </div>
            </div>
            </button>
       `
       tasks[i].id = i;
    }else if(tasks[i].status == "In Progress"){
        countProgresse++;
        countTask++;
        document.querySelector("#progresse-tasks").innerHTML += `
        <button class="rounded-top" data-id="${i}">
        <div class="icon">
            <i class="fa-regular fa-circle-question fa-1x"></i>
            <span class="btn text-white bg-danger rounded-pill" id="delete" onclick="deleteTaskWith(${i})"><i class="fa-solid fa-trash"></i></span>
        </div>
        <div class="modal-card text-start">
            <div class="title-one">${tasks[i].title}</div>
            <div class="">
                <div class="creation"><span id="order-card-progress">#${countTask}</span> created in ${tasks[i].date}</div>
                <div class="having my-1">${tasks[i].description}</div>
            </div>
            <div class="buttons my-1 d-flex justify-content-between">
                <span class="btn text-white bg-primary">${tasks[i].type}</span>
                <span class="btn  bg-light">${tasks[i].priority}</span>
                <span class="btn text-white bg-info rounded-pill" id="modify"><i class="fa-sharp fa-solid fa-user-pen"></i></span>
                <span class="btn text-white bg-danger rounded-pill" id="delete"><i class="fa-solid fa-trash"></i></span>
            </div>
        </div>
        </button>
   `
   tasks[i].id = i;
    }else{
        countDone++;
        countTask++;
        document.querySelector("#done-tasks").innerHTML += `
        <button class="rounded-top" data-id="${i}">
        <div class="icon">
            <i class="fa-regular fa-circle-question fa-1x"></i>
            <span class="btn text-white bg-danger rounded-pill" id="delete" onclick="deleteTaskWith(${i})"><i class="fa-solid fa-trash"></i></span>
        </div>
        <div class="modal-card text-start">
            <div class="title-one">${tasks[i].title}</div>
            <div class="">
                <div class="creation"><span id="order-card-done">#${countTask}</span> created in ${tasks[i].date}</div>
                <div class="having my-1">${tasks[i].description}</div>
            </div>
            <div class="buttons my-1 d-flex justify-content-between">
                <span class="btn text-white bg-primary">${tasks[i].type}</span>
                <span class="btn  bg-light">${tasks[i].priority}</span>
                <span class="btn text-white bg-info rounded-pill" id="modify"><i class="fa-sharp fa-solid fa-user-pen"></i></span>
                <span class="btn text-white bg-danger rounded-pill" id="delete"><i class="fa-solid fa-trash"></i></span>
                
            </div>
        </div>
        </button>
   `
   tasks[i].id = i;
  

// Example without using template literalals (ecmaScript6)
   // main container     
//    let mainButton = document.createElement("button");
//    mainButton.classList.add('rounded-top');

//    // container of icon
//    let containerIcon = document.createElement("div");
//    let icon = document.createElement("i");
//    containerIcon.classList.add('icon');
//    icon.classList.add('fa-regular', 'fa-circle-question', 'fa-1x');
//    containerIcon.appendChild(icon);
//    mainButton.appendChild(containerIcon); 

//    // create title
//    let title = document.createElement("div");
//    title.classList.add('title-one');
//    let titleText = document.createTextNode(tasks[i].title);

//     // create container of card body
//    let card = document.createElement("div");
//    card.classList.add('modal-card', 'text-start');

//    // add text to title
//    title.appendChild(titleText);
//     // add ttile to button container
//     card.appendChild(title);

//     // creat container of date and description
//     let div = document.createElement("div");
//     let creation = document.createElement("div");
//     creation.classList.add('creation');
//     let creationText = document.createTextNode(tasks[i].date);
//     creation.appendChild(creationText);
//     div.appendChild(creation);
//     card.appendChild(div);



//     let description = document.createElement("div");
//     description.classList.add('having', 'my-1');
//     let descriptionText = document.createTextNode(tasks[i].description);
//     description.appendChild(descriptionText);
//     card.appendChild(description);

//     mainButton.appendChild(card);
//     document.querySelector("#done-tasks").appendChild(mainButton);
//     console.log(mainButton);




    
    }
    
    }
   
}
function clearFormData() {
    recipent.value = '';
    selectPriority.value = '';
    selectOption.value = '';
    inputDate.value = '';
    description.value = '';
}
// counter  tasks in different status
let todoStatus = document.getElementById("to-do-tasks-count");
todoStatus.innerHTML = countTodo;
let progresseStatus = document.getElementById("progresse-tasks-count");
progresseStatus.textContent = countProgresse;
let doneStatus = document.getElementById("done-tasks-count");
doneStatus.innerText = countDone;

function addTask() {
    closeBtn.click();
    const newTasks = {
        title: recipent.value,
        type: inputRadio.value,
        priority: selectPriority.value,
        status: selectOption.value,
        date: inputDate.value,
        description: description.value,
    }
    console.log(tasks);
    if(newTasks.status == "To Do"){
        todoStatus.innerHTML = parseInt(todoStatus.innerHTML) + 1;
    }else if(newTasks.status == "In Progress"){
        progresseStatus.textContent = parseInt(progresseStatus.textContent) + 1;
    }else{
        doneStatus.innerText = parseInt(doneStatus.innerText) + 1;
    }
    tasks.push(newTasks);

    readData();

    clearFormData();
   
}

let modifyBtn = document.getElementById("modify");
let deleteBtn = document.getElementById("delete");

// modifyBtn.addEventListener("click", (e) =>{
//     console.log(e.target.parentElement.parentElement.parentElement.parentElement);
// });

function deleteTaskWith(id) {
    for(let i = 0; i < tasks.length; i++){
        if(id == tasks[i].id){
            tasks.splice(id, 1);
            if(tasks[i].status == "To Do"){
                todoStatus.innerHTML = parseInt(todoStatus.innerHTML) - 1;
            }else if(tasks[i].status == "In Progress"){
                progresseStatus.textContent = parseInt(progresseStatus.textContent) - 1;
            }else{
                doneStatus.innerText = parseInt(doneStatus.innerText) - 1;
            }
            readData();
        }
    }

}


console.log(tasks);
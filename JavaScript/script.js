


function loadProjects(){
  fetch("./project.json")
  .then (res => res.json())
  .then (data => displayProjects(data))
}

loadProjects();



const displayProjects = (data) => {
  const seeDetails = document.getElementById("project")
  for (const project of data){
    console.log(project);
    const div =document.createElement('div');

 
    div.innerHTML =`
     <img src="${project.image}" class="img-fluid mb-4 w-full  rounded" alt=""/>
    <h3>${project.name}</h3>
    <p>${project.skills}</p>
    <span><a href="${project.github}"target="_blank"><i class="fa-solid fa-plus"></i></a></span>><button>See Details</a>
    `;
    div.classList.add('pro')
    seeDetails.appendChaild(div);

  }

  
}


// -----------------CONTACT area start----------------------

const form = document.querySelector("form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#E-mail");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#Enter-password");


form.addEventListener("submit", formHandler);

function formHandler(e){

e.preventDefault();

  const formInfo = {
    fullName: fullName.value,
    email: email.value,
    phoneemailNumber: phoneNumber.value,
    password: password.value

  }


console.log( formInfo);


}

// CONTACT area end

// // Hide the completed projects section by default
// document.querySelector('.completed-projects').style.display = 'none';

// // When the "Completed Projects" button is clicked, toggle the display of the completed projects section
// document.querySelector('.completed-projects-btn').addEventListener('click', function() {
//   var completedProjects = document.querySelector('.completed-projects');
//   if (completedProjects.style.display === 'none') {
//     completedProjects.style.display = 'block';
//     this.textContent = 'Hide Completed Projects';
//   } else {
//     completedProjects.style.display = 'none';
//     this.textContent = 'Show Completed Projects';
//   }
// });

// // When a vacancy announcement form is submitted, add the new announcement to the list
// document.querySelector('.vacancy form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   var title = this.querySelector('input[name="title"]').value;
//   var description = this.querySelector('input[name="description"]').value;
//   var announcements = this.parentNode.querySelector('ul');
//   announcements.innerHTML += '<li>' + title + ' - ' + description + '</li>';
//   this.reset();
// });

// // When a project form is submitted, add the new project to the list
// document.querySelector('.projects form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   var title = this.querySelector('input[name="title"]').value;
//   var description = this.querySelector('input[name="description"]').value;
//   var projects = this.parentNode.querySelector('ul');
//   projects.innerHTML += '<li>' + title + ' - ' + description + '</li>';
//   this.reset();
// });

// // When a performance review form is submitted, display a success message
// document.querySelector('.performance form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   alert('Performance review submitted successfully!');
//   this.reset();
// });

// // When the attendance table is clicked, highlight the selected cell
// document.querySelector('.attendance table').addEventListener('click', function(event) {
//   if (event.target.tagName === 'TD') {
//     var selectedCell = document.querySelector('.attendance .selected');
//     if (selectedCell) {
//       selectedCell.classList.remove('selected');
//     }
//     event.target.classList.add('selected');
//   }
// });



// Form submit event listeners
const vacancyForm = document.querySelector('.vacancy form');
const projectForm = document.querySelector('.projects form');
const performanceForm = document.querySelector('.performance form');

vacancyForm.addEventListener('submit', addVacancy);
projectForm.addEventListener('submit', addProject);
performanceForm.addEventListener('submit', addPerformance);

// Add Vacancy
function addVacancy(event) {
  event.preventDefault();

  const title = event.target.title.value;
  const description = event.target.description.value;

  const vacancyList = document.querySelector('.vacancy ul');
  const li = document.createElement('li');
  li.textContent = `${title} - ${description}`;
  vacancyList.appendChild(li);

  event.target.title.value = '';
  event.target.description.value = '';
}

// Add Project
function addProject(event) {
  event.preventDefault();

  const title = event.target.title.value;
  const description = event.target.description.value;

  const projectList = document.querySelector('.projects ul');
  const li = document.createElement('li');
  li.textContent = `${title} - ${description}`;
  projectList.appendChild(li);

  event.target.title.value = '';
  event.target.description.value = '';
}

// Add Performance
function addPerformance(event) {
  event.preventDefault();

  const employee = event.target.employee.value;
  const reviewer = event.target.reviewer.value;
  const feedback = event.target.feedback.value;

  console.log(`Employee: ${employee}`);
  console.log(`Reviewer: ${reviewer}`);
  console.log(`Feedback: ${feedback}`);
}

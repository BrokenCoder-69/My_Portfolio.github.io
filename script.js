/* 
   Dark Mode 
 */
   const darkMode = document.getElementById("darkMode");
   darkMode.addEventListener("click", function() {
       document.body.classList.toggle("dark-mode");
   });
   
 /* 
      Last Modified Date
*/
   document.getElementById("lastModified").textContent = document.lastModified;
   
   /* 
      Scroll Animation for Sections
*/
   document.addEventListener("scroll", function() {
       let sections = document.querySelectorAll("section");
       sections.forEach(section => {
           let rect = section.getBoundingClientRect();
           if (rect.top < window.innerHeight - 100) {
               section.classList.add("visible");
           }
       });
   });
   

   

//animatinh the progress bars 
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
      const targetProgress = bar.getAttribute('data-progress');
      bar.style.width = targetProgress + '%';
    });
  });
  
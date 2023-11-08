// // const value= document.querySelector(".value");
// // console.log(value);

// // const button = document.querySelector("button");
// // console.log(button);

// // const space = document.querySelector(".area");
// // console.log(space);

// // const stat = document.querySelector("div > .stat");
// // console.log(stat);

// // const hello = document.querySelector(".hello");
// // console.log(hello);

// // const heading3List = document.querySelectorAll("h3");

// // // Iterate over the list and print each one
// // for (let element of heading3List.values()) {
// //   console.log(element);
// // }

// // const ratings = document.querySelectorAll(".rating-display > .value");
// // console.log(ratings);

// // for (let element of ratings.values()) {
// //     let rates = parseFloat(element.innerText);
// //     if (rates > 4.7) {
// //         rates.classList.add("bold");
// //         rates.classList.remove("#3ba17c");
// //     }
   
    
// // }

// // const area = document.querySelectorAll(".area-display > div");
// // console.log(area);

// // for (let i = 0 ; i < area.length ; i++) {
// //     const element = area[i];
// //     console.log(element);
// // } 

// // const descriptions = document.querySelectorAll(".description-display");

// // for (let desc of descriptions.values()) {
// //     let content = desc.innerText;
// //     if (content.length > 250){
// //         content = content.slice(0, 250);
// //         content = content + '<a href="#">...</a>';
// //     }

// //     desc.innerHTML = content
// //   }

// const parks = document.querySelectorAll(".park-display");
// const newElement = document.createElement("div");
// const header = document.querySelector("header");
// const numberParks = parks.length;

// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");
// header.appendChild(newElement);

// // Get the parent element of all parks
// const main = document.querySelector("main");

// // Select a single park
// const park = main.querySelector(".park-display");

// // Remove that park
// main.removeChild(park);


// /**
//   Write the `addheadings()` function here
// */
// function addHeadings() {
//     const articles = document.querySelectorAll("article");
//     for (let article of articles) {
//       const content = article.innerHTML;
//       article.innerHTML = `<h2>${content}</h2>`;
//     }
//   }
  
//   /**
//     Write the `styleTutorialsAndArticles()` function here
//   */
//   function styleTutorialsAndArticles() {
//     const articles = document.querySelectorAll("article");
//     for (let article of articles) {
//       if (article.innerHTML.includes("Article")) {
//         article.classList.add("article");
//       }
//       if (article.innerHTML.includes("Tutorial")) {
//         article.classList.add("tutorial");
//       }
//     }
//   }

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (effect) => {
//   console.log("You clicked the button", effect);
// })
  
// const allBtns = document.querySelectorAll(".rate-button");
// //select section and manipulating 
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (effect) => {
//     const park = effect.target.parentNode;
//     park.style.backgroundColor = "#c8e6c9"
//   });

// });
  

// // Select the `nameSorter` link
// const nameSorter = document.querySelector("#name-sorter");

// // Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();

//   // 1. Get the main element
//   const main = document.querySelector("main");

//   // 2. Get the list of parks
//   const parksList = main.querySelectorAll(".park-display");

//   // 3. Empty the main element
//   main.innerHTML = "";

//   // 4. Create an array
//   const parksArray = Array.from(parksList);

//   // 5. Sort the array
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// });

// select the "ratingSorter" link
// const ratingSorter = document.querySelector("#rating-sorter");

// ratingSorter.addEventListener("click", (event) => {
//   event.preventDefault();
//   //console.log("You clicked the name rating");
//   //getting the main tag
//   const main = document.querySelector("main");

//   //get the nodelist of main
//   const parkList = main.querySelectorAll('.park-display');
//   console.log(parkList);
//   //empty the main element
//   main.innerHTML= "";

//   //creating an array with Array.from
//   const parksArray = Array.from(parkList);

//   // Sort the array with innerText
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector(".value1").innerText;
//     const parkBName = parkB.querySelector(".value1").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park)
//   })

// });


console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

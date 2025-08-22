'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const selects = document.querySelectorAll("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Add click event to all select dropdowns
selects.forEach(select => {
  select.addEventListener("click", function () { elementToggleFunc(this); });
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase().replace(/\s+/g, '-');
    
    // Find the parent select dropdown and its corresponding select value
    const parentSelect = this.closest('.filter-select-box');
    const selectValue = parentSelect ? parentSelect.querySelector("[data-select-value]") : null;
    const select = parentSelect ? parentSelect.querySelector("[data-select]") : null;
    
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
    if (select) {
      elementToggleFunc(select);
    }
    
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (filterItems[i].dataset.category && filterItems[i].dataset.category.includes(selectedValue)) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
// Track last clicked button for each filter section
let lastClickedBtns = {};

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase().replace(/\s+/g, '-');
    
    // Find the parent section to update the correct select value
    const parentSection = this.closest('.projects, .pill-cloud');
    const selectValue = parentSection ? parentSection.querySelector("[data-select-value]") : null;
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
    
    filterFunc(selectedValue);

    // Find the filter list this button belongs to
    const filterList = this.closest('.filter-list');
    const filterListId = filterList ? Array.from(document.querySelectorAll('.filter-list')).indexOf(filterList) : 0;
    
    // Remove active class from last clicked button in this section
    if (lastClickedBtns[filterListId]) {
      lastClickedBtns[filterListId].classList.remove("active");
    }
    
    // Add active class to current button
    this.classList.add("active");
    lastClickedBtns[filterListId] = this;

  });

}

// Function to reset all filters to "All"
function resetFiltersToAll() {
  // Reset all filter items to active (show all)
  filterFunc("all");
  
  // Reset all filter buttons to show "All" as active
  const allFilterLists = document.querySelectorAll('.filter-list');
  allFilterLists.forEach((filterList, listIndex) => {
    const buttons = filterList.querySelectorAll('[data-filter-btn]');
    buttons.forEach((button, buttonIndex) => {
      if (button.innerText.toLowerCase() === 'all') {
        button.classList.add('active');
        lastClickedBtns[listIndex] = button;
      } else {
        button.classList.remove('active');
      }
    });
  });
  
  // Reset all select dropdowns to show "Select category"
  const allSelectValues = document.querySelectorAll('[data-select-value]');
  allSelectValues.forEach(selectValue => {
    selectValue.innerText = 'Select category';
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

    // Reset all filters to "All" when navigating between pages
    resetFiltersToAll();

  });
}
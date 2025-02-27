const searchInput = document.querySelector(".residency-search-input");
const searchFlag = document.querySelector(".residency-search-flag");
const countryOptions = document.querySelectorAll(".residency-country-option");

// Update input and flag on country selection
countryOptions.forEach(option => {
  option.addEventListener("click", () => {
    const flag = option.getAttribute("data-flag");
    const name = option.getAttribute("data-name");

    // Update the search input and flag
    searchInput.value = name;
    searchFlag.src = flag;
    searchFlag.classList.remove("hidden");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const nationalityInput = document.getElementById('nationality-drop-input');
  const nationalityList = document.getElementById('nationality-drop-list');
  const nationalityFlag = document.getElementById('nationality-flag');
  const dropdownButton = document.getElementById('dropdown-button');
  const dropdownIcon = document.getElementById('dropdown-icon');

  // Function to toggle dropdown and icon rotation
  function toggleDropdown() {
    nationalityList.classList.toggle('hidden');
    dropdownIcon.classList.toggle('rotate-180');
  }

  // Show or hide the dropdown when input or icon is clicked
  nationalityInput.addEventListener('click', toggleDropdown);
  dropdownButton.addEventListener('click', toggleDropdown);

  // Select nationality and update input/flag
  window.selectNationality = function (name, flagPath) {
    nationalityInput.value = name;
    nationalityFlag.src = flagPath;
    nationalityFlag.classList.remove('hidden');
    nationalityList.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
  };

  // Filter nationalities based on input
  nationalityInput.addEventListener('input', function () {
    const filter = nationalityInput.value.toLowerCase();
    const items = nationalityList.querySelectorAll('li');

    items.forEach(item => {
      const text = item.textContent || item.innerText;
      item.style.display = text.toLowerCase().includes(filter) ? "flex" : "none";
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function (event) {
    if (!nationalityList.contains(event.target) && event.target !== nationalityInput && event.target !== dropdownIcon && event.target !== dropdownButton) {
      nationalityList.classList.add('hidden');
      dropdownIcon.classList.remove('rotate-180');
    }
  });
});

const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');

burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  burgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Toggle dropdown visibility
  dropdown.classList.toggle('hidden');

  // Adjust the icon's rotation
  if (!dropdown.classList.contains('hidden')) {
    dropdownIcon.classList.add('rotate-180');
  } else {
    dropdownIcon.classList.remove('rotate-180');
  }
}

function selectCurrency(flagUrl, currencyCode) {
  const flagElement = document.getElementById('selected-flag');
  const currencyElement = document.getElementById('selected-currency');
  const dropdown = document.getElementById('currency-dropdown');
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Update selected flag and currency
  flagElement.src = flagUrl;
  currencyElement.textContent = currencyCode;

  // Close dropdown
  dropdown.classList.add('hidden');

  // Reset the icon's rotation
  dropdownIcon.classList.remove('rotate-180');
}

function selectRecipientCurrency(flagUrl, currencyCode) {
  const flagElement = document.getElementById('recipient-flag');
  const currencyElement = document.getElementById('recipient-currency');
  const dropdown = document.getElementById('recipient-currency-dropdown');
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Update selected flag and currency
  flagElement.src = flagUrl;
  currencyElement.textContent = currencyCode;

  // Close dropdown
  dropdown.classList.add('hidden');

  // Reset the icon's rotation
  dropdownIcon.classList.remove('rotate-180');
}

function filterDropdown(listId, searchId) {
  const dropdown = document.getElementById(listId);
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');
  const searchInput = document.getElementById(searchId).value.toLowerCase();
  const items = dropdown.querySelectorAll('li');

  // Filter dropdown items
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(searchInput) ? '' : 'none';
  });

  // Keep dropdown icon rotated while searching
  if (!dropdown.classList.contains('hidden')) {
    dropdownIcon.classList.add('rotate-180');
  } else {
    dropdownIcon.classList.remove('rotate-180');
  }
}


let activeCategory = 'money'; // Default active category

function showCategory(category) {
  const categories = document.querySelectorAll('.faq-category');
  categories.forEach(cat => {
    if (cat.dataset.category === category) {
      cat.classList.remove('hidden');
    } else {
      cat.classList.add('hidden');
    }
  });

  // Update active button styling
  document.querySelectorAll('.filter-button').forEach(button => {
    button.classList.remove('bg-blue-500', 'text-white');
    button.classList.add('bg-gray-200');
  });
  const activeButton = document.getElementById(category + '-button');
  activeButton.classList.add('bg-blue-500', 'text-white');
  activeButton.classList.remove('bg-gray-200');

  activeCategory = category;
}

function toggleFAQ(faq) {
  const content = document.getElementById(faq);
  const arrow = document.querySelector(`[data-arrow="${faq}"]`);
  content.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
}

window.onload = () => {
  showCategory(activeCategory);
};



function togglePassword(fieldId, iconId, imgId) {
  const input = document.getElementById(fieldId);
  const eyeIcon = document.getElementById(imgId);

  if (input.type === 'password') {
    input.type = 'text';
    eyeIcon.src = '../images/signup/visible.png';
  } else {
    input.type = 'password';
    eyeIcon.src = '../images/signup/hide.png';
  }
}









// Toggle the country code list dropdown
function toggleCountryCodeList(event) {
  event.stopPropagation();
  const countryCodeList = document.getElementById('country-code-list');
  countryCodeList.classList.toggle('hidden');
}

// Filter country codes based on search input
function filterCountryCodes(event) {
  const searchValue = event.target.value.toLowerCase();
  const options = document.querySelectorAll('#country-code-options li');

  options.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      option.classList.remove('hidden');
    } else {
      option.classList.add('hidden');
    }
  });
}

// Select country code and update the flag and code (only on button)
function selectCountryCode(element) {
  const phoneFlag = document.getElementById('phone-flag');
  const countryCode = document.getElementById('country-code');

  const flagSrc = element.getAttribute('data-flag');
  const code = element.getAttribute('data-code');

  phoneFlag.src = flagSrc;
  countryCode.textContent = code;

  // Close the dropdown after selection
  const countryCodeList = document.getElementById('country-code-list');
  countryCodeList.classList.add('hidden');
}

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
  const countryCodeList = document.getElementById('country-code-list');
  const dropdownButton = event.target.closest('button');

  if (!countryCodeList.classList.contains('hidden') && !dropdownButton) {
    countryCodeList.classList.add('hidden');
  }
});


// *********** slider  **************************** 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 4,
      },
  },
});

// *********** box-input  **************************** 
function moveFocus(event, inputIndex) {
  const inputs = document.querySelectorAll('#pin-input-container input');
  if (event.inputType === 'deleteContentBackward') {
      // Focus previous input if exists when backspace is pressed
      if (inputIndex > 0) inputs[inputIndex - 1]?.focus();
  } else {
      // Move focus to next input if character is entered and not a backspace
      if (event.target.value.length === 1 && inputIndex < inputs.length - 1) {
          inputs[inputIndex + 1].focus();
      }
  }
}

// *********** filter for Account  **************************** 
function showForm(formId, element) {
  // Hide all forms
  document.getElementById('personalForm').classList.add('hidden');
  document.getElementById('businessForm').classList.add('hidden');

  // Remove active style from all links
  document.querySelectorAll('.flex > a').forEach(a => {
      a.children[0].style.backgroundColor = ''; // Reset background color
  });

  // Show the selected form and add active style
  document.getElementById(formId).classList.remove('hidden');
  element.children[0].style.backgroundColor = '#8B1EC4'; // Custom purple color for active state
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  const personalLink = document.getElementById('personalLink');
  showForm('personalForm', personalLink);
});



// *********** Payment Method **************************** 
function togglePaymentMethodDropdown(event) {
  const dropdown = document.getElementById('payment-method-dropdown');
  const icon = document.getElementById('payment-method-icon');
  dropdown.classList.toggle('hidden'); // Toggle visibility
  icon.classList.toggle('rotate-180'); // Rotate the icon
  event.stopPropagation(); // Prevent click event from bubbling up
}

function selectPaymentMethod(code, flagPath) {
  const codeElement = document.getElementById('payment-method-code');
  const flagElement = document.getElementById('payment-method-flag');
  const icon = document.getElementById('payment-method-icon');
  codeElement.textContent = code;
  flagElement.src = flagPath;
  document.getElementById('payment-method-dropdown').classList.add('hidden');
  icon.classList.remove('rotate-180'); // Reset the icon rotation
}

// Click outside the payment method dropdown to close it and reset the icon rotation
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('payment-method-dropdown');
  const icon = document.getElementById('payment-method-icon');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
    icon.classList.remove('rotate-180'); // Reset the icon rotation
  }
});

// *********** Account Transfer **************************** 
function toggleAccountTransferDropdown(event) {
  const dropdown = document.getElementById('account-transfer-dropdown');
  const icon = document.getElementById('account-transfer-icon');
  dropdown.classList.toggle('hidden'); // Toggle visibility
  icon.classList.toggle('rotate-180'); // Rotate the icon
  event.stopPropagation(); // Prevent click event from bubbling up
}

function selectAccountTransferMethod(code, flagPath) {
  const codeElement = document.getElementById('account-transfer-code');
  const flagElement = document.getElementById('account-transfer-flag');
  const icon = document.getElementById('account-transfer-icon');
  codeElement.textContent = code;
  flagElement.src = flagPath;
  document.getElementById('account-transfer-dropdown').classList.add('hidden');
  icon.classList.remove('rotate-180'); // Reset the icon rotation
}

// Click outside the account transfer dropdown to close it and reset the icon rotation
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('account-transfer-dropdown');
  const icon = document.getElementById('account-transfer-icon');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
    icon.classList.remove('rotate-180'); // Reset the icon rotation
  }
});




document.addEventListener("DOMContentLoaded", function() {
  const forms = document.querySelectorAll('.form-content');
  forms.forEach(form => form.style.display = 'none'); // Initially hide all forms

  window.showForm = function(formId, element) {
      forms.forEach(form => {
          if(form.id === formId) {
              form.style.display = 'block'; // Show the clicked form
          } else {
              form.style.display = 'none'; // Hide other forms
          }
      });
  };
});


function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"; // Hide all tab content
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("bg-white", "bg-gray-300"); // Revert all tabs to grey
  }
  document.getElementById(tabName).style.display = "block"; // Show the current tab content
  event.currentTarget.className = event.currentTarget.className.replace("bg-gray-300", "bg-white"); // Set the clicked tab to white
}

// Function to initialize the page with the 'General' tab open
function initTab() {
  document.getElementById('defaultOpen').click();
}
// Navigation handling
document.getElementById('home-btn').addEventListener('click', function() {
    showContent('home-content');
});

document.getElementById('ticketing-btn').addEventListener('click', function() {
    showContent('schedule-content');
});

document.getElementById('bracketing-btn').addEventListener('click', function() {
    showContent('bracketing-content');
});

function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}
// Bracketing
document.getElementById('bracketing-btn').addEventListener('click', function() {
    showContent('bracketing-content');
});

function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}

// for showing and hiding sections
document.getElementById('home-btn').addEventListener('click', function() {
    showContent('home-content');
});

document.getElementById('ticketing-btn').addEventListener('click', function() {
    showContent('schedule-content'); 
});

document.getElementById('bracketing-btn').addEventListener('click', function() {
    showContent('bracketing-content');
});

function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-sidebar-btn');
    const wrapper = document.querySelector('.wrapper');

    // Toggle sidebar visibility on button click
    toggleBtn.addEventListener('click', () => {
        wrapper.classList.toggle('sidebar-open');
    });

    // Close sidebar when a link is clicked on mobile
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                wrapper.classList.remove('sidebar-open');
            }
        });
    });
});

// Navigation handling for content display
function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}

document.getElementById('home-btn').addEventListener('click', function() {
    showContent('home-content');
});

document.getElementById('ticketing-btn').addEventListener('click', function() {
    showContent('schedule-content');
});

document.getElementById('bracketing-btn').addEventListener('click', function() {
    showContent('bracketing-content');
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-sidebar-btn');
    const wrapper = document.querySelector('.wrapper');
    const homeBtn = document.getElementById('home-btn');
    const ticketingBtn = document.getElementById('ticketing-btn');
    const bracketingBtn = document.getElementById('bracketing-btn');

    // Toggle sidebar visibility on mobile
    toggleBtn.addEventListener('click', () => {
        wrapper.classList.toggle('sidebar-open');
    });

    // Close sidebar when clicking a link on mobile
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                wrapper.classList.remove('sidebar-open');
            }
        });
    });

    // Navigation functions
    homeBtn.addEventListener('click', () => showContent('home-content'));
    ticketingBtn.addEventListener('click', () => showContent('schedule-content'));
    bracketingBtn.addEventListener('click', () => showContent('bracketing-content'));

    function showContent(contentId) {
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => content.style.display = 'none');
        document.getElementById(contentId).style.display = 'block';
    }
});


function advanceTeam(selectedTeam) {
    // Get the text (team name) of the selected team
    const teamName = selectedTeam.textContent;

    // Determine the next round
    const currentMatch = selectedTeam.parentElement;
    const currentRound = currentMatch.parentElement;

    let nextRound;
    if (currentRound.id === 'quarter-finals') {
        nextRound = document.getElementById('semi-finals');
    } else if (currentRound.id === 'semi-finals') {
        nextRound = document.getElementById('finals');
    } else if (currentRound.id === 'finals') {
        nextRound = document.getElementById('champion');
    }

    // Find the next available slot in the next round
    if (nextRound) {
        const nextMatch = Array.from(nextRound.getElementsByClassName('team')).find(team => team.textContent === "");
        if (nextMatch) {
            nextMatch.textContent = teamName;
        }
    }
}

// Function to show content by ID, PURCHASE INFO
function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}

// Set up event listeners for sidebar navigation
document.getElementById('home-btn').addEventListener('click', () => showContent('home-content'));
document.getElementById('ticketing-btn').addEventListener('click', () => showContent('schedule-content'));
document.getElementById('bracketing-btn').addEventListener('click', () => showContent('bracketing-content'));

// Event listener for schedule items to display the purchase form
const scheduleItems = document.querySelectorAll('.schedule-item');
scheduleItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedMatch = this.dataset.match;
        document.getElementById('selected-match-details').textContent = `You selected: ${selectedMatch}`;
        showContent('purchase-content');
    });
});

// Sidebar toggle for mobile view
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-sidebar-btn');
    const wrapper = document.querySelector('.wrapper');

    toggleBtn.addEventListener('click', () => {
        wrapper.classList.toggle('sidebar-open');
    });

    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                wrapper.classList.remove('sidebar-open');
            }
        });
    });
});

//NEW
// Navigate to seat selection page after filling out purchase form
function goToSeatSelection() {
    showContent('seat-selection-content');
}

// Calculate total based on seat type and quantity
function calculateTotal() {
    const seatType = document.getElementById('seat-type').value;
    const seatQuantity = parseInt(document.getElementById('seat-quantity').value, 10);
    const totalAmount = seatType && seatQuantity ? seatType * seatQuantity : 0;
    document.getElementById('total-amount').textContent = `P ${totalAmount}`;
}

// Increment seat quantity
function incrementQuantity() {
    const quantityInput = document.getElementById('seat-quantity');
    quantityInput.value = parseInt(quantityInput.value, 10) + 1;
    calculateTotal();
}

// Decrement seat quantity
function decrementQuantity() {
    const quantityInput = document.getElementById('seat-quantity');
    if (parseInt(quantityInput.value, 10) > 0) {
        quantityInput.value = parseInt(quantityInput.value, 10) - 1;
        calculateTotal();
    }
}

// Proceed to QR code page after selecting seats
function calculateTotal() {
    const seatType = document.getElementById("seat-type").value;
    const quantity = parseInt(document.getElementById("seat-quantity").value, 10);
    const totalAmount = seatType ? seatType * quantity : 0;

    document.getElementById("total-amount").textContent = `P ${totalAmount.toLocaleString()}`;
    return totalAmount;
}

function proceedToPayment() {
    const seatTypeElement = document.getElementById("seat-type");
    const seatTypeText = seatTypeElement.options[seatTypeElement.selectedIndex].text;
    const quantity = document.getElementById("seat-quantity").value;
    const totalAmount = calculateTotal();

    const purchaseInfo = `Seat Type: ${seatTypeText}\nQuantity: ${quantity}\nTotal Amount: P ${totalAmount.toLocaleString()}`;
    
    console.log(purchaseInfo)
    // Show the QR Code content and generate the QR code
    showContent('qr-code-content');
    generateQRCode(purchaseInfo);
}

function generateQRCode(text) {
    const qrCodeContainer = document.getElementById("qr-code");

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;
    qrCodeContainer.src = apiUrl;

}

// Function to show specific content based on the ID passed
function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}

// Function to proceed to payment, generate QR code, and show the QR code content
function proceedToPayment() {
    // Customize the ticket information to be encoded in the QR code
    const ticketInfo = "Barangay Guadalupe Gym\nUpperbox - ₱750\nLowerbox - ₱850\nShow this at the ticketing booth";

    // Generate the QR code with ticket details
    generateQRCode(ticketInfo);

    // Show the QR code content
    showContent('qr-code-content');
}

// Event listener to navigate to seat selection on form submission
document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    goToSeatSelection(); 
});

// Function to go to seat selection and enable the "Next" button to proceed to payment
function goToSeatSelection() {
    // Show the seat selection content
    showContent('seat-selection-content');
}


// Default admin credentials
const adminUsername = "admin";
const adminPassword = "password123";

// Select modal elements
const adminLoginIcon = document.getElementById("admin-login-icon");
const adminLoginModal = document.getElementById("admin-login-modal");
const closeModalButton = document.querySelector(".close");
const loginForm = document.getElementById("admin-login-form");
const loginMessage = document.getElementById("login-message");

// Show modal on icon click
adminLoginIcon.addEventListener("click", () => {
    adminLoginModal.style.display = "flex";
});

// Hide modal on close button click
closeModalButton.addEventListener("click", () => {
    adminLoginModal.style.display = "none";
    loginMessage.textContent = ""; // Clear message
});

// Hide modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === adminLoginModal) {
        adminLoginModal.style.display = "none";
        loginMessage.textContent = ""; // Clear message
    }
});

// Handle login form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === adminUsername && password === adminPassword) {
        alert("Login successful! Welcome, Admin.");
        adminLoginModal.style.display = "none";
        loginMessage.textContent = ""; // Clear any previous message
        // Additional actions for admin access can go here
    } else {
        loginMessage.textContent = "Invalid username or password";
    }

    // Clear form fields
    loginForm.reset();
});


function showPage(pageId) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none'; // Hide all containers
    });
    document.querySelector(`#${pageId}`).style.display = 'flex'; // Show selected container
}

// Initial page load
showPage('main-page'); // Show the main page initially

document.querySelectorAll('.btn button').forEach(button => {
    button.addEventListener('click', function() {
        const targetPage = this.getAttribute('data-target'); // Get the target page ID
        if (targetPage) {
            showPage(targetPage);
        }
    });
});

// Random movement for the "No" button on the last page
const moveRandom = document.querySelector("#move-random");
moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

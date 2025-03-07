
const classData = {
    home: ['Basic', 'Names English to Hindi', 'Word Power', 'कौन हूं मैं'],
    class34: ['Grammar', 'Math'],
    /*
    class56: ['Sports', 'Civics', 'Art'],
    class78: ['Sports', 'Civics', 'Art'],
    class9th: ['Sports', 'Civics', 'Art'],
    class10th: ['Sports', 'Civics', 'Art'],
    class11th: ['Sports', 'Civics', 'Art'],
    class12th: ['Sports', 'Civics', 'Art'],*/
};

const classDropdown = document.getElementById('classDropdown');
const subjectContainer = document.getElementById('subjectList');

// Populate subjects based on the selected class
// Populate subjects based on the selected class
classDropdown.addEventListener('change', () => {
    const selectedClass = classDropdown.value;
    const subjects = classData[selectedClass] || [];

    // Clear existing subjects
    subjectContainer.innerHTML = '';

    subjects.forEach((subject, index) => {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject';
        subjectDiv.textContent = subject;

        subjectDiv.addEventListener('click', () => {
            // Remove the active background color from all subjects
            document.querySelectorAll('.subject').forEach(div => {
                div.style.backgroundColor = ''; // Reset background color
            });

            // Set the background color of the clicked subject
            subjectDiv.style.backgroundColor = '#a90000';

            // Call the loadScript function with selectedClass and subject
            loadScript(selectedClass, subject);

            sidebar.innerHTML = '';
        });

        // Append the subject to the container
        subjectContainer.appendChild(subjectDiv);

        // Automatically select the first subject
        if (index === 0) {
            setTimeout(() => subjectDiv.click(), 0); // Delay to ensure it triggers after all subjects are appended
        }
    });
});

//  

// Function to dynamically load the script file
function loadScript(className, subjectName) {
    const scriptName = `${className.toLowerCase()}${subjectName.toLowerCase().replace(/\s+/g, '')}`;
    const script = document.createElement('script');
    script.src = `${scriptName}.js`;
    script.type = 'text/javascript';
    script.onload = () => {
        console.log(`Loaded ${scriptName}.js successfully`);

    };
    script.onerror = () => {
        console.error(`Failed to load ${scriptName}.js`);
    };

    // Remove existing script if any
    const existingScript = document.querySelector(`script[src="${scriptName}.js"]`);
    if (existingScript) {
        existingScript.remove();
    }

    document.body.appendChild(script);

}
// Toggle the visibility of the search input and button on smaller screens
function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = searchInput.nextElementSibling;

    if (searchInput.style.display === 'block') {
        searchInput.style.display = 'none';
        searchButton.style.display = 'none';
        classDropdown.style.display = 'block';
    } else {
        searchInput.style.display = 'block';
        searchButton.style.display = 'block';

        classDropdown.style.display = 'none';
    }
}
// Trigger the initial population
classDropdown.dispatchEvent(new Event('change'));





























//selecting JS file--------------------------

// Variables for Drag Scrolling
let isDown = false;
let startX;
let scrollLeft;

// Mouse Down
subjectContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    subjectContainer.classList.add('active');
    startX = e.pageX - subjectContainer.offsetLeft;
    scrollLeft = subjectContainer.scrollLeft;
});

// Mouse Leave
subjectContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

// Mouse Up
subjectContainer.addEventListener('mouseup', () => {
    isDown = false;
});

// Mouse Move (Drag Scrolling)
subjectContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - subjectContainer.offsetLeft;
    const walk = (x - startX) * 1; // Adjust multiplier for speed
    subjectContainer.scrollLeft = scrollLeft - walk;
});

// Touch Gesture Scrolling
subjectContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - subjectContainer.offsetLeft;
    scrollLeft = subjectContainer.scrollLeft;
});

subjectContainer.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - subjectContainer.offsetLeft;
    const walk = (x - startX) * 1;
    subjectContainer.scrollLeft = scrollLeft - walk;
});

// Mouse Wheel Scrolling (Horizontal)
subjectContainer.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent default vertical scroll
    subjectContainer.scrollLeft += e.deltaY * 2; // Scroll horizontally
});







const sidebar = document.getElementById("sidebar");

const main = document.getElementById("main");
function toggleSidebar() {
    sidebar.classList.toggle("hidden");
}
if (window.innerWidth >= 700) {
    sidebar.classList.remove('hidden');
} else {
    sidebar.classList.add('hidden');
}
window.addEventListener('resize', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = searchInput.nextElementSibling;
    if (window.innerWidth >= 700) {
        sidebar.classList.remove('hidden');
        searchInput.style.display = 'block';
        searchButton.style.display = 'block';
        classDropdown.style.display = 'block';
    } else {
        sidebar.classList.add('hidden');
        searchInput.style.display = 'none';
        searchButton.style.display = 'none';
    }

});

// Function to generate sidebar content
function generateSidebar() {
    let firstTopicDiv = null; // Store the first topic div
    let firstSubtopicDiv = null; // Store the first subtopic div for the first topic

    for (const [topic, subtopics] of Object.entries(data)) {
        // Create topic div
        const topicDiv = document.createElement("div");
        topicDiv.classList.add("topic");
        topicDiv.textContent = topic;

        // Subtopics container
        const subtopicsContainer = document.createElement("div");
        subtopicsContainer.classList.add("subtopics");

        let isFirstSubtopic = true; // Flag to identify the first subtopic of each topic

        // Add subtopics
        for (const [subtopic, explanation] of Object.entries(subtopics)) {
            const subtopicDiv = document.createElement("div");
            subtopicDiv.classList.add("subtopic");
            subtopicDiv.textContent = subtopic;

            // Click event for subtopic
            subtopicDiv.addEventListener("click", (e) => {

                // new add for automatic hide sidebar, valid in phone
                if (window.innerWidth < 700) {
                    if (subtopicDiv.classList.contains("active")) {
                        sidebar.classList.add('hidden');
                    } else {
                        setTimeout(() => sidebar.classList.add('hidden'), 900);
                    }
                } // 16/02/25 

                e.stopPropagation(); // Prevent triggering topic click
                clearActiveClasses("subtopic");
                subtopicDiv.classList.add("active");
                clearActiveClasses("topic");
                topicDiv.classList.add("active");
                displayContent(topic, subtopics);
                const targetElement = document.getElementById(subtopic);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }


            });

            // Store the first subtopic div for the first topic
            if (!firstSubtopicDiv && isFirstSubtopic) {
                firstSubtopicDiv = subtopicDiv;
            }

            // Automatically select the first subtopic of the current topic when clicked
            if (isFirstSubtopic) {
                topicDiv.addEventListener("click", () => {
                    subtopicDiv.click(); // Simulate click on the first subtopic
                });
                isFirstSubtopic = false; // Ensure only the first subtopic is selected
            }

            subtopicsContainer.appendChild(subtopicDiv);
        }

        // Store the first topic div
        if (!firstTopicDiv) {
            firstTopicDiv = topicDiv;
        }
        sidebar.appendChild(topicDiv);
        sidebar.appendChild(subtopicsContainer);



    }

    // Automatically click the first topic and its first subtopic
    if (firstTopicDiv) {
        firstTopicDiv.click(); // Simulate click on the first topic
    }
    if (firstSubtopicDiv) {
        setTimeout(() => firstSubtopicDiv.click(), 0); // Simulate click on the first subtopic
    }
    const space = document.createElement('div');
    space.classList.add('side-space');
    sidebar.appendChild(space);

    const help = document.createElement('div');
    help.classList.add('help');
    help.innerHTML = `
        <button class="button" onclick="makeCall()">Pay</button>
        <button class="button"  onclick="openWhatsApp()" ><span>Help</span></button>`
    sidebar.appendChild(help);
}
function makeCall() {
    window.location.href = "tel:+6387851637";
}

function openWhatsApp(){
    var phoneNumber = "+6387851637";  // यहां अपना नंबर डालो
    var message = encodeURIComponent("Hello user"); // मैसेज को URL-friendly बनाना जरूरी है
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
}


// Function to display content in the main area
function displayContent(topic, subtopics) {
    main.innerHTML = `<h2>${topic}</h2>`;
    for (const [subtopic, explanation] of Object.entries(subtopics)) {
        main.innerHTML += `<div id="${subtopic}" class="content-section"><div style="height:100px;"></div>${explanation}</div>
        `;
    }
}

// Function to clear active classes
function clearActiveClasses(type) {
    const elements = document.querySelectorAll(`.${type}`);
    elements.forEach(el => el.classList.remove("active"));
}

// Initialize sidebar






// start Toggle full-screen mode

const fullscreenBtn = document.getElementById("fullscreen-btn");
const fullscreenIcon = document.getElementById("fullscreen-icon");

// Toggle full-screen mode when the button is clicked
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
            .then(() => {
                updateButton(true);
            })
            .catch(err => {
                alert(`Error trying to enable full-screen mode: ${err.message}`);
            });
    } else {
        document.exitFullscreen()
            .then(() => {
                updateButton(false);
            })
            .catch(err => {
                alert(`Error trying to exit full-screen mode: ${err.message}`);
            });
    }
});

// Listen for the fullscreenchange event
document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        updateButton(true); // Full-screen mode
    } else {
        updateButton(false); // Not in full-screen mode
    }
});

function updateButton(isFullscreen) {
    if (isFullscreen) {
        fullscreenIcon.src = "image/cross.png"; // Icon for exiting full screen
        fullscreenBtn.classList.add("fullscreen");
        fullscreenBtn.title = "Exit Full Screen"; // Update tooltip
    } else {
        fullscreenIcon.src = "image/full.png"; // Icon for entering full screen
        fullscreenBtn.classList.remove("fullscreen");
        fullscreenBtn.title = "Go Full Screen"; // Update tooltip
    }
}

// end  Toggle full-screen mode


// start 𓆩⚝𓆪 मैं कौन हूँ?

function showAnswer(id, answer, btn) {
    document.getElementById(id).innerText = answer;
    // btn.style.display = "none"; // बटन छुपाना
}


let pages = [
    "home",
    "Dashboard",
    "workoutGuides",
    "Statistics",
    "Profile"
];

let navigation = document.getElementById("navigation");
let menuButton = document.getElementById("menuButton");
let navLinks = navigation.getElementsByTagName("a");

function showPage(index) {
    for (let i = 0; i < pages.length; i++) {
        let section = document.getElementById(pages[i]);
        if (section) {
            section.style.display = "none";
        }
    }

    let targetSection = document.getElementById(pages[index]);
    if (targetSection) {
        targetSection.style.display = "block";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("active");
    }

    if (navLinks[index]) {
        navLinks[index].classList.add("active");
    }

    navigation.style.display = "none";
}

menuButton.onclick = function() {
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "flex";
    }
};

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function(event) {
        event.preventDefault();
        showPage(i);
    };
}

$(document).ready(function() {
    let images = [
        "photos/home1.jpg",
        "photos/home2.jpg",
        "photos/home3.jpg",
        "photos/home4.jpg",
        "photos/home5.jpg"
    ];

    let currentImage = 0;

    function showPhoto() {
        $("#slide").attr("src", images[currentImage]);
    }

    $("#nextButton").click(function() {
        currentImage++;
        if (currentImage >= images.length) {
            currentImage = 0;
        }
        showPhoto();
    });

    $("#prevButton").click(function() {
        currentImage--;
        if (currentImage < 0) {
            currentImage = images.length - 1;
        }
        showPhoto();
    });
});

let bmiButton = document.getElementById("btn");
if (bmiButton) {
    bmiButton.addEventListener("click", calculateBMI);
}

function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let result = document.getElementById("result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Provide a valid height!";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Provide a valid weight!";
    } else {
        let bmi = weight / ((height * height) / 10000);
        bmi = Math.round(bmi * 100) / 100;

        if (bmi < 18.5) {
            result.innerHTML = "Underweight: " + bmi;
        } else if (bmi < 24.9) {
            result.innerHTML = "Normal: " + bmi;
        } else {
            result.innerHTML = "Overweight: " + bmi;
        }
    }
}

let water = 0;

function addGlass() {
    water++;
    document.getElementById("numberOfGlasses").innerHTML = water;
    document.getElementById("resultWater").innerHTML = "";
}

function removeGlass() {
    if (water > 0) {
        water--;
    }
    document.getElementById("numberOfGlasses").innerHTML = water;
    document.getElementById("resultWater").innerHTML = "";
}

function waterIntakeCheck() {
    let resultWater = document.getElementById("resultWater");
    if (water >= 8) {
        resultWater.innerHTML = "GOOD!";
    } else if (water >= 5) {
        resultWater.innerHTML = "DRINK A FEW MORE GLASSES OF WATER";
    } else {
        resultWater.innerHTML = "DRINK MORE WATER";
    }
}

let addButton = document.getElementById("addGlass");
let removeButton = document.getElementById("removeGlass");
let waterButton = document.getElementById("waterCheck");

if (addButton) {
    addButton.addEventListener("click", addGlass);
}
if (removeButton) {
    removeButton.addEventListener("click", removeGlass);
}
if (waterButton) {
    waterButton.addEventListener("click", waterIntakeCheck);
}

let fullbody = [
    "Jumping Jacks - 30 seconds",
    "Squats - 12 reps",
    "Push-ups - 10 reps",
    "Lunges - 10 reps",
    "Plank - 30 seconds"
];

let arms = [
    "Push-ups - 10 reps",
    "Tricep Dips - 12 reps",
    "Arm Circles - 30 seconds",
    "Shoulder Taps - 12 reps",
    "Plank - 30 seconds"
];

let legs = [
    "Squats - 15 reps",
    "Lunges - 12 reps",
    "Glute Bridges - 15 reps",
    "Calf Raises - 20 reps",
    "Wall Sit - 30 seconds"
];

let core = [
    "Plank - 30 seconds",
    "Crunches - 15 reps",
    "Leg Raises - 10 reps",
    "Russian Twists - 15 reps",
    "Mountain Climbers - 30 seconds"
];

let cardio = [
    "Jumping Jacks - 30 seconds",
    "High Knees - 30 seconds",
    "Mountain Climbers - 30 seconds",
    "Butt Kicks - 30 seconds",
    "Burpees - 10 reps"
];

function generateWorkout() {
    let workout = document.getElementById("workout").value;
    let difficulty = document.getElementById("difficulty").value;
    let result = document.getElementById("resultWorkout");

    if (difficulty == "") {
        alert("Please select a difficulty.");
        return;
    }

    if (workout == "") {
        alert("Please select a workout.");
        return;
    }

    let exercises;
    if (workout == "fullbody") {
        exercises = fullbody;
    } else if (workout == "arms") {
        exercises = arms;
    } else if (workout == "legs") {
        exercises = legs;
    } else if (workout == "core") {
        exercises = core;
    } else {
        exercises = cardio;
    }

    result.innerHTML = "";
    result.innerHTML += "<h2>Your Workout</h2>";
    result.innerHTML += "<p>Difficulty: " + difficulty + "</p>";

    for (let i = 0; i < exercises.length; i++) {
        result.innerHTML += "<div class='exercise'>" + exercises[i] + "</div>";
    }
}

let generateButton = document.getElementById("generate");
if (generateButton) {
    generateButton.addEventListener("click", generateWorkout);
}

showPage(0);

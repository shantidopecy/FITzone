let navigation = document.getElementById("navigation");
let menuButton = document.getElementById("menuButton");
let navLinks = document.querySelectorAll(".nav-link");
let pages = document.querySelectorAll(".page");

function showPage(targetId) {
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    let targetPage = document.getElementById(targetId);

    if (targetPage) {
        targetPage.style.display = "block";
    }

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("active");

        if (navLinks[i].getAttribute("data-target") === targetId) {
            navLinks[i].classList.add("active");
        }
    }

    navigation.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

menuButton.onclick = function () {
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "flex";
    }
};

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function (event) {
        event.preventDefault();

        let target = navLinks[i].getAttribute("data-target");

        showPage(target);
    };
}

showPage("home");

let currentSlide = 0;
let slides = document.querySelector(".slides");
let slideImages = document.querySelectorAll(".slides img");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let sliderDots = document.getElementById("sliderDots");

for (let i = 0; i < slideImages.length; i++) {
    let dot = document.createElement("button");

    dot.className = "slider-dot";

    dot.onclick = function () {
        showSlide(i);
    };

    sliderDots.appendChild(dot);
}

let dots = document.querySelectorAll(".slider-dot");

function showSlide(index) {

    if (index >= slideImages.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slideImages.length - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform =
        "translateX(-" + (currentSlide * 100) + "%)";

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    dots[currentSlide].classList.add("active");
}

nextButton.onclick = function () {
    showSlide(currentSlide + 1);
};

prevButton.onclick = function () {
    showSlide(currentSlide - 1);
};

showSlide(0);

let bmiButton = document.getElementById("btn");

bmiButton.addEventListener("click", calculateBMI);

function calculateBMI() {

    let height = parseFloat(
        document.getElementById("height").value
    );

    let weight = parseFloat(
        document.getElementById("weight").value
    );

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

    if (water >= 8) {
        document.getElementById("resultWater").innerHTML = "GOOD!";
    } else if (water >= 5) {
        document.getElementById("resultWater").innerHTML =
            "DRINK A FEW MORE GLASSES OF WATER";
    } else {
        document.getElementById("resultWater").innerHTML =
            "DRINK MORE WATER";
    }
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

    result.innerHTML +=
        "<p>Difficulty: " + difficulty + "</p>";

    for (let i = 0; i < exercises.length; i++) {

        result.innerHTML +=
            "<div class='exercise'>" +
            exercises[i] +
            "</div>";
    }
}

document.getElementById("generate").onclick = generateWorkout;

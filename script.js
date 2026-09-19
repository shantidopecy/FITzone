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

        showPage(i);
    };
}

showPage(0);

let images = [
    "photos/workout1.jpg",
    "photos/workout2.jpg",
    "photos/workout3.jpg",
    "photos/workout4.jpg",
    "photos/workout5.jpg"
];

let i = 0;

function next() {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    document.getElementById("slide").src = images[i];
}

function prev() {
    if (i > 0) {
        i--;
    } else {
        i = images.length - 1;
    }

    document.getElementById("slide").src = images[i];
}

let bmiButton = document.getElementById("btn");

if (bmiButton) {
    bmiButton.addEventListener("click", calculateBMI);
}

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

    }

    else if (isNaN(weight) || weight <= 0) {

        result.innerHTML = "Provide a valid weight!";

    }

    else {

        let bmi = weight / ((height * height) / 10000);

        bmi = Math.round(bmi * 100) / 100;

        if (bmi < 18.5) {

            result.innerHTML =
                "Underweight: " + bmi;

        }

        else if (bmi < 24.9) {

            result.innerHTML =
                "Normal: " + bmi;

        }

        else {

            result.innerHTML =
                "Overweight: " + bmi;
        }
    }
}

let water = 0;

function addGlass() {

    water++;

    document.getElementById(
        "numberOfGlasses"
    ).innerHTML = water;

    document.getElementById(
        "resultWater"
    ).innerHTML = "";
}

function removeGlass() {

    if (water > 0) {
        water--;
    }

    document.getElementById(
        "numberOfGlasses"
    ).innerHTML = water;

    document.getElementById(
        "resultWater"
    ).innerHTML = "";
}

function waterIntakeCheck() {

    if (water >= 8) {

        document.getElementById(
            "resultWater"
        ).innerHTML = "GOOD!";

    }

    else if (water >= 5) {

        document.getElementById(
            "resultWater"
        ).innerHTML =
            "DRINK A FEW MORE GLASSES OF WATER";

    }

    else {

        document.getElementById(
            "resultWater"
        ).innerHTML =
            "DRINK MORE WATER";
    }
}

var fullbody = [
    "Jumping Jacks - 30 seconds",
    "Squats - 12 reps",
    "Push-ups - 10 reps",
    "Lunges - 10 reps",
    "Plank - 30 seconds"
];

var arms = [
    "Push-ups - 10 reps",
    "Tricep Dips - 12 reps",
    "Arm Circles - 30 seconds",
    "Shoulder Taps - 12 reps",
    "Plank - 30 seconds"
];

var legs = [
    "Squats - 15 reps",
    "Lunges - 12 reps",
    "Glute Bridges - 15 reps",
    "Calf Raises - 20 reps",
    "Wall Sit - 30 seconds"
];

var core = [
    "Plank - 30 seconds",
    "Crunches - 15 reps",
    "Leg Raises - 10 reps",
    "Russian Twists - 15 reps",
    "Mountain Climbers - 30 seconds"
];

var cardio = [
    "Jumping Jacks - 30 seconds",
    "High Knees - 30 seconds",
    "Mountain Climbers - 30 seconds",
    "Butt Kicks - 30 seconds",
    "Burpees - 10 reps"
];

function generateWorkout() {

    var workout = document.getElementById("workout").value;
    var difficulty = document.getElementById("difficulty").value;
    var result = document.getElementById("resultWorkout");

    if (difficulty == "") {

        alert("Please select a difficulty.");

        return;
    }

    if (workout == "") {

        alert("Please select a workout.");

        return;
    }

    var exercises;

    if (workout == "fullbody") {

        exercises = fullbody;

    }

    else if (workout == "arms") {

        exercises = arms;

    }

    else if (workout == "legs") {

        exercises = legs;

    }

    else if (workout == "core") {

        exercises = core;

    }

    else {

        exercises = cardio;
    }

    result.innerHTML = "";

    result.innerHTML += "<h2>Your Workout</h2>";

    result.innerHTML +=
        "<p>Difficulty: " + difficulty + "</p>";

    for (var i = 0; i < exercises.length; i++) {

        result.innerHTML +=
            "<div class='exercise'>" +
            exercises[i] +
            "</div>";
    }
}

let generateButton = document.getElementById("generate");

if (generateButton) {
    generateButton.onclick = generateWorkout;
}

let pages = [
    "Home",
    "Dashboard",
    "workoutGuides",
    "Statistics",
    "Profile"
];

let pageNames = [
    "Home",
    "BMI Calculator",
    "Workout Guides",
    "Workout Generator",
    "Profile"
];

let navigation = document.getElementById("navigation");
let menuButton = document.getElementById("menuButton");

for (let i = 0; i < pages.length; i++) {

    let button = document.createElement("button");

    button.innerHTML = pageNames[i];
    button.className = "nav-button";

    navigation.appendChild(button);

    button.onclick = function () {
        showPage(i);
    };
}

function showPage(number) {

    for (let i = 0; i < pages.length; i++) {
        document.getElementById(pages[i]).style.display = "none";

    }

    document.getElementById(pages[number]).style.display = "block";

    navigation.style.display = "none";
}

menuButton.onclick = function () {
    if (navigation.style.display == "block") {
        navigation.style.display = "none";

    } else {
        navigation.style.display = "block";
    }
};

showPage(0);

function showPage(number) {

    for (let i = 0; i < pages.length; i++) {

        document.getElementById(pages[i]).style.display = "none";

    }

    document.getElementById(pages[number]).style.display = "block";
    navigation.style.display = "none";
}

function changePage(number) {

    let buttons = navigation.children;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "nav-button";
    }

    buttons[number].className = "nav-button active";

    navigation.style.display = "none";

    if (number == 0) {
        document.getElementById("Home").scrollIntoView({
            behavior: "smooth"
        });
    }

    else if (number == 1) {
        document.getElementById("Dashboard").scrollIntoView({
            behavior: "smooth"
        });
    }

    else if (number == 2) {
        document.getElementById("Workout Guides").scrollIntoView({
            behavior: "smooth"
        });
    }

    else if (number == 3) {
        document.getElementById("Workout Generator").scrollIntoView({
            behavior: "smooth"
        });
    }

    else if (number == 4) {
        document.getElementById("Profile").scrollIntoView({
            behavior: "smooth"
        });
    }
}

menuButton.onclick = function () {
    if (navigation.style.display == "block") {
        navigation.style.display = "none";
    } 

    else {
        navigation.style.display = "block";
    }
};

showPage(0);

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

    }

    else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Provide a valid weight!";

    }

    else {
        let bmi = weight / ((height * height) / 10000);
        bmi = Math.round(bmi * 100) / 100;

        if (bmi < 18.5) {

            result.innerHTML =
                `Underweight: ${bmi}`;

        }

        else if (bmi < 24.9) {

            result.innerHTML =
                `Normal: ${bmi}`;

        }

        else {
            result.innerHTML =
                `Overweight: ${bmi}`;
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
        ).innerHTML = "DRINK A FEW MORE GLASSES OF WATER";
    }

    else {
        document.getElementById(
            "resultWater"
        ).innerHTML = "DRINK MORE WATER";
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
    result.innerHTML += "<p>Difficulty: " + difficulty + "</p>";

    for (var i = 0; i < exercises.length; i++) {

        result.innerHTML +=
            "<div class='exercise'>" +
            exercises[i] +
            "</div>";
    }
}

document.getElementById("generate").onclick = generateWorkout;
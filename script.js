let pages = [
    "home",
    "Dashboard",
    "workoutGuides",
    "Statistics",
    "Profile"
];

let navigation = $("#navigation");
let menuButton = $("#menuButton");
let navLinks = $(".nav-link");

function showPage(index) {

    $(".page").hide();

    $("#" + pages[index]).show();

    navLinks.removeClass("active");

    $(navLinks[index]).addClass("active");

    navigation.hide();

    window.scrollTo(0, 0);
}

menuButton.click(function() {

    navigation.toggle();

});

navLinks.click(function(event) {

    event.preventDefault();

    let index = navLinks.index(this);

    showPage(index);

});


let images = [
    "photos/home.jpg",
    "photos/home2.jpg",
    "photos/home3.jpg"
];

let currentImage = 0;

function showPhoto() {

    $("#slide").attr("src", images[currentImage]);

}

$("#nextButton").click(function() {

    if (currentImage < images.length - 1) {

        currentImage++;

    } else {

        currentImage = 0;

    }

    showPhoto();

});


$("#prevButton").click(function() {

    if (currentImage > 0) {

        currentImage--;

    } else {

        currentImage = images.length - 1;

    }

    showPhoto();

});


$("#btn").click(function() {

    let height = parseFloat($("#height").val());

    let weight = parseFloat($("#weight").val());

    if (isNaN(height) || height <= 0) {

        $("#result").html("Provide a valid height!");

    }

    else if (isNaN(weight) || weight <= 0) {

        $("#result").html("Provide a valid weight!");

    }

    else {

        let bmi = weight / ((height * height) / 10000);

        bmi = Math.round(bmi * 100) / 100;

        if (bmi < 18.5) {

            $("#result").html("Underweight: " + bmi);

        }

        else if (bmi < 24.9) {

            $("#result").html("Normal: " + bmi);

        }

        else {

            $("#result").html("Overweight: " + bmi);

        }

    }

});


let water = 0;


$("#addGlass").click(function() {

    water++;

    $("#numberOfGlasses").html(water);

    $("#resultWater").html("");

});


$("#removeGlass").click(function() {

    if (water > 0) {

        water--;

    }

    $("#numberOfGlasses").html(water);

    $("#resultWater").html("");

});


$("#waterCheck").click(function() {

    if (water >= 8) {

        $("#resultWater").html("GOOD!");

    }

    else if (water >= 5) {

        $("#resultWater").html(
            "DRINK A FEW MORE GLASSES OF WATER"
        );

    }

    else {

        $("#resultWater").html(
            "DRINK MORE WATER"
        );

    }

});


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


$("#generate").click(function() {

    let workout = $("#workout").val();

    let difficulty = $("#difficulty").val();

    let exercises;


    if (difficulty == "") {

        alert("Please select a difficulty.");

        return;

    }


    if (workout == "") {

        alert("Please select a workout.");

        return;

    }


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


    $("#resultWorkout").html("");

    $("#resultWorkout").append(
        "<h2>Your Workout</h2>"
    );

    $("#resultWorkout").append(
        "<p>Difficulty: " + difficulty + "</p>"
    );


    for (let i = 0; i < exercises.length; i++) {

        $("#resultWorkout").append(
            "<div class='exercise'>" +
            exercises[i] +
            "</div>"
        );

    }

});


showPage(0);

$(document).ready(function () {
    let classroom;
    let current;

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    if (localStorage.getItem("classroom") != null) {
        classroom = JSON.parse(localStorage.getItem("classroom"));
        current = parseInt(localStorage.getItem("current"));
        $("#random").hide();
        $("#student").text(classroom[current]);
    }else{
        classroom = ["Abdul Barre", "Alex Griep", "Ashley Wegwerth", "Aubrey Koski", "Balaji Manoharan", "Baraka Ibrahim",
        "Bashir Raghe", "Ben Honken", "Blake Pierce", "Brennan Spicer", "Brooke Kumar", "Bryan Iund", "Colin Kramer", "Elizabeth O'Leary",
        "Hamza Abdikarim", "Henry Johnson", "Issa Issa", "Jacob Rosenbaum", "James Botham", "James Caples", "Johnny Yang", "Ka Vang",
        "Kayla Kuhlman", "Keith Kleinschmidt", "Kyle Betlach", "Mai Xiong", "Mauricio gomez", "Mohamed Abdi", "Mohamed Ahmed",
        "Ranji Ramroop", "Tasha Tran", "Terri Decaire", "Tim Scheve", "Yogeeta Gajway", "Zhen yong Chen"];
        current = 0;
    }
    $("#random").click(function () {
        current = 0;
        shuffle(classroom);
        console.log(classroom);
        $("#student").text(classroom[current]);
        $("#random").hide();
    })

    $("#student").click(function () {
        if (current >= classroom.length) {
            current = 0;
            shuffle(classroom);
            console.log(classroom);
            $("#student").text("Start");
            localStorage.setItem("classroom", JSON.stringify(classroom));
            localStorage.setItem("current", JSON.stringify(current));
        } 
        else {
            current++;
            $("#student").text(classroom[current]);
            localStorage.setItem("classroom", JSON.stringify(classroom));
            localStorage.setItem("current", JSON.stringify(current));
        }


    });

});
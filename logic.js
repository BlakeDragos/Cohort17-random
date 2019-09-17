$(document).ready(function () {
    const classroom = ["Abdul Barre", "Alex Griep", "Ashley Wegwerth", "Aubrey Koski", "Balaji Manoharan", "Baraka Ibrahim",
        "Bashir Raghe", "Ben Honken", "Blake Pierce", "Brennan Spicer", "Brooke Kumar", "Bryan Iund", "Colin Kramer", "Elizabeth O'Leary",
        "Hamza Abdikarim", "Henry Johnson", "Issa Issa", "Jacob Rosenbaum", "James Botham", "James Caples", "Johnny Yang", "Ka Vang",
        "Kayla Kuhlman", "Keith Kleinschmidt", "Kyle Betlach", "Mai Xiong", "Mauricio Fuentes gomez", "Mohamed Abdi", "Mohamed Ahmed",
        "Ranji Ramroop", "Tasha Tran", "Terri Decaire", "Tim Scheve", "Yogeeta Gajway", "Zhen yong Chen"];
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    let current = 0;
    $("#random").click(function(){
        current = 0;
        shuffle(classroom);
        console.log(classroom);
        $("#student").text("Start");
    })
    console.log(classroom.length);
    $("#student").click(function () {
        $("#student").text(classroom[current]);
        current++;
        if (current > classroom.length) {
            current = 0;
            $("#student").text(classroom[current]);
        }

    })

});
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
        $("#student").text(classroom[current] + ": " + (current + 1));
    } else {
        classroom = [
            "Abdul Barre", 
            "Alex Griep", 
            "Ashley Wegwerth", 
            "Aubrey Koski", 
            "Balaji Manoharan", 
            "Baraka Ibrahim",
            "Bashir Raghe", 
            "Ben Honken", 
            "Blake Pierce", 
            "B Spice", 
            "Brooke Kumar", 
            "Bryan Iund", 
            "Colin Kramer", 
            "Elizabeth O'Leary",
            "Hamza Abdikarim", 
            "Henry Johnson", 
            "Issa Issa", 
            "Jacob Rosenbaum", 
            "Jonathan Carrasco", 
            "Elia Facundo Orta Carrasco", 
            "James Botham", 
            "James Caples", 
            "Johnny Yang", 
            "Ka Vang",
            "Kayla Kuhlman", 
            "Keith Kleinschmidt", 
            "Kyle Betlach", 
            "Mai Xiong", 
            "Mauricio Gomez", 
            "Mohamed Abdi", 
            "Haylee Thomas-Kuhlmann", 
            "Mohamed Ahmed",
            "Ranji Ramroop", 
            "Tasha Tran", 
            "Tim Scheve", 
            "Richard Tshabalala", 
            "Yogeeta Gajway", 
            "Zhen yong Chen",
            "Abdullahi Hassans"];
        current = 0;
        console.log(classroom)
    }
    $("#random").click(function () {
        current = 0;
        shuffle(classroom);
        console.log(classroom);
        $("#student").text(classroom[current] + ": " + current + 1);
        $("#random").addClass('animated bounceOutUp');
        setTimeout(function () {
            $("#random").hide();
        }, 1000)
    })

    $("#student").click(function () {
        if (current === classroom.length - 1) {
            $("#student").addClass('animated bounceOutRight');
            current = 0;
            shuffle(classroom);
            console.log(classroom);
            localStorage.setItem("classroom", JSON.stringify(classroom));
            localStorage.setItem("current", JSON.stringify(current));
            setTimeout(function () {
                $("#student").removeClass('animated bounceOutRight');
                $("#student").text(classroom[current] + ": " + (current + 1));
                $("#student").addClass('animated bounceInLeft');
                setTimeout(function () {
                    $("#student").removeClass('animated bounceInLeft');
                }, 2000)
            }, 350);
        }
        else {
            current++;
            $("#student").text(classroom[current] + ": " + (current + 1));
            localStorage.setItem("classroom", JSON.stringify(classroom));
            localStorage.setItem("current", JSON.stringify(current));
        }


    });

});
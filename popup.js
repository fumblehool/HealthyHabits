document.addEventListener('DOMContentLoaded', function() {
    var getHabitButton = document.getElementById('getHabit');
    var count = 0;
    getHabitButton.addEventListener('click', function() {
        var data = {
            "habits":[
                {"habit":"Eat Breakfast Every Morning"},
                {"habit":"Add Fish & Omega-3 Fatty Acids To Your Diet"},
                {"habit":"Get Enough Sleep"},
                {"habit":"Make Social Connections"},
                {"habit":"Exercise For Better Health"},
                {"habit":"Practice Dental Hygiene"},
                {"habit":"Take Up A Hobby"},
                {"habit":"Protect Your Skin"},
                {"habit":"Snack The Healthy Way"},
                {"habit":"Drink Water & Eat Dairy"},
                {"habit":"Drink Tea"},
                {"habit":"Take A Daily Walk"},
                {"habit":"Plan"}
            ]
        }
        document.getElementById('habit').innerHTML =
            data.habits[count%13].habit;
        count = count +1;
  }, false);
}, false);
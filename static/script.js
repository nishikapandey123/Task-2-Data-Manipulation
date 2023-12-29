// Data Preparation
var persons = [
    {"name": "Nishika", "age": 30, "city": "Indore"},
    {"name": "Ishika", "age": 23, "city": "Indore"},
    {"name": "Kanha", "age": 25, "city": "Ratlam"}
];

document.addEventListener("DOMContentLoaded", function () {
    // Check if the data is already appended
    if (document.getElementById("output-container").innerHTML === "") {
        // Filtering
        var filteredPersons = persons.filter(function (person) {
            return person.age >= 25;
        });

        // Sorting
        var sortedPersons = filteredPersons.sort(function (a, b) {
            return a.city.localeCompare(b.city);
        });

        // Output
        var outputContainer = document.getElementById("output-container");
        sortedPersons.forEach(function (person) {
            var personInfo = document.createElement("p");
            personInfo.textContent = "Name: " + person.name + ", Age: " + person.age + ", City: " + person.city;
            outputContainer.appendChild(personInfo);
        });
    }
});

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Data Preparation
    persons = [
        {"name": "Nishika", "age": 30, "city": "Indore"},
        {"name": "Ishika", "age": 23, "city": "Indore"},
        {"name": "Kanha", "age": 25, "city": "Ratlam"}
    ]

    # Filtering
    filteredPersons = [person for person in persons if person["age"] >= 30]

    # Sorting
    sortedPersons = sorted(filteredPersons, key=lambda x: x["city"])

    return render_template('index.html', persons=sortedPersons)

if __name__ == '__main__':
    app.run(debug=True)

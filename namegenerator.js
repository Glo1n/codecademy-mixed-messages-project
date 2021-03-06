let arrNames = [
    "Jezus Christ", "Napoleon Bonaparte", "William Shakespeare", "Abraham Lincoln",
    "George Washington", "Adolf Hitler", "King Henry VIII", "Charles Darwin", "Queen Elizabeth I",
    "Karl Marx", "Julius Caesar", "Queen Victoria", "Martin Luther King", "Joseph Stalin",
    "Albert Einstein", "Christopher Columbus", "Isaac Newton", "Wolfgang Amadeus Mozart", 
    "King Louis XIV", "Ludwig von Beethoven", "Leonardo da Vinci", "Michelangelo", "Mother Teresa",
    "Vincent van Gogh", "Rembrandt van Rijn", "Pablo Picasso", "Mark Twain", "Edgar Allan Poe",
    "Jane Austen", "George Orwell", "Marilyn Monroe", "Nelson Mandela", "John F. Kennedy",
    "Queen Elizabeth II", "Winston Churchill", "Donald Trump", "Bill Gates", "Muhammed Ali",
    "Mahatma Gandhi", "Elvis Presley", "Rosa Parks", "Oprah Winfrey", "Desmond Tutu", 
    "Neil Armstrong", "Walt Disney", "Barack Obama", "Malcolm X", "J.K. Rowling", "Angelina Jolie",
    "John Lennon", "Vladimir Lenin", "Fidel Castro", "Amelia Earhart", "Mary Magdalene", "Michael Jackson",
    "Madonna", "Mata Hari", "Cleopatra", "Grace Kelly", "Lionel Messi", "Sigmund Freud", "Kim Kardashian",
    "J.R.R. Tolkien", "Margaret Thatcher", "Anne Frank", "Queen Marie Antoinette", "Christiano Ronaldo",
    "Simon Bolivar", "Florence Nightingale", "Marie Curie", "Shakira", "Lance Armstrong", "Brad Pitt",
    "Sacha Baron Cohen", "Ted Bundy", "Jack the Ripper", "Jeffrey Dahmer", "Charles Manson"
]

const nameGenerator = () => {

    const name1 = arrNames[Math.floor(Math.random() * arrNames.length)];

    const arrNames2 = arrNames.filter(a => a !== name1);

    const name2 = arrNames2[Math.floor(Math.random() * arrNames2.length)];

    const arrNames3 = arrNames2.filter(b => b !== name2);

    const name3 = arrNames3[Math.floor(Math.random() * arrNames3.length)];

    let kiss = `You have to kiss ${name1}.`;
    let marry = `You have to marry ${name2}.`;
    let kill = `And you have to kill ${name3}.`;
    let bye = `Have fun!`;

    document.getElementById("kiss").innerHTML = kiss;
    document.getElementById("marry").innerHTML = marry;
    document.getElementById("kill").innerHTML = kill;
    document.getElementById("bye").innerHTML = bye;
    document.getElementById("1")
    document.getElementById("2")
    document.getElementById("3")
}
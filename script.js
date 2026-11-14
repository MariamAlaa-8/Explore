const destinations = [
    {
        country: "FRANCE",
        city: "Paris",
        description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        image: "https://images.unsplash.com/photo-1633632859220-2688037177d5?auto=format&fit=crop&w=1200&q=80"
    },
    {
        country: "JAPAN",
        city: "Tokyo",
        description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80"
    },
    {
        country: "ITALY",
        city: "Rome",
        description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        image: "https://v.wpimg.pl/NTU3Njk5YTU0UThZRE5sIHcJbAMCF2J2IBF0SER6YWVgA34SWgV-ZHpXYB0bXCMze0MiRV8CeGFjA3leWBhjZW0Ee19ZAH5jZBwlBQdaPTEgXm4YEUwjCxhSPAMCVG4TOl8hHAJUID86Ex0CHkE6MSdAOgUIXmA-JVRsFw"
    },
    {
        country: "EGYPT",
        city: "Cairo",
        description: "Cairo is a vibrant city famous for its ancient history, rich culture and beautiful views of the Nile River.",
        continent: "Africa",
        food: "Koshary, Ful Medames",
        place: "Pyramids of Giza",
        language: "Arabic",
        image: "https://images.unsplash.com/photo-1720400995876-506098f4c238?auto=format&fit=crop&w=1200&q=80"
    }
];

let currentIndex = 0;

const country = document.getElementById("country");
const city = document.getElementById("city");
const description = document.getElementById("description");
const continent = document.getElementById("continent");
const food = document.getElementById("food");
const place = document.getElementById("place");
const language = document.getElementById("language");
const destinationImage = document.getElementById("destinationImage");
const currentNumber = document.getElementById("currentNumber");
const imageNumber = document.getElementById("imageNumber");
const dots = document.querySelectorAll(".dot");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

function showDestination(index) {
    const destination = destinations[index];

    country.textContent = destination.country;
    city.textContent = destination.city;
    description.textContent = destination.description;
    continent.textContent = destination.continent;
    food.textContent = destination.food;
    place.textContent = destination.place;
    language.textContent = destination.language;
    destinationImage.src = destination.image;
    destinationImage.alt = destination.city;

    const number = String(index + 1).padStart(2, "0");

    currentNumber.textContent = number;
    imageNumber.textContent = number;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    previousBtn.disabled = index === 0;
    nextBtn.disabled = index === destinations.length - 1;
}

function nextDestination() {
    if (currentIndex < destinations.length - 1) {
        currentIndex++;
        showDestination(currentIndex);
    }
}

function previousDestination() {
    if (currentIndex > 0) {
        currentIndex--;
        showDestination(currentIndex);
    }
}

function goToDestination(index) {
    currentIndex = index;
    showDestination(currentIndex);
}

function scrollToDestinations() {
    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });
}

function exploreMore() {
    alert("More information about " + destinations[currentIndex].city);
}

showDestination(0);
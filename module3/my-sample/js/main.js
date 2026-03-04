// Class with public fields
class App {
    appName = "ES2025 Demo";

    constructor(user) {
        this.user = user;
    }

    getDisplayName() {
        // Optional chaining + nullish coalescing
        return this.user?.name ?? "Guest";
    }
}

// Async function
const fetchUser = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            // resolve({ name: "Joseph" });
            resolve({ name: null });
        }, 500);
    });
};

// Top-level await
const user = await fetchUser();

// structuredClone
const clonedUser = structuredClone(user);

const app = new App(clonedUser);

const messageEl = document.getElementById("message");
const btn = document.getElementById("btn");

const updateMessage = () => {
    const time = new Intl.DateTimeFormat("en-PH", {
        dateStyle: "medium",
        timeStyle: "medium"
    }).format(new Date());

    messageEl.textContent =
        `Hello, ${ app.getDisplayName() }! Current time: ${ time }`;
};

updateMessage();

btn.addEventListener("click", updateMessage);
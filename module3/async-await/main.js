function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: "Data fetched successfully!" });
        }, 2000);
    });
}
async function displayData() {
    console.log("Fetching data...");
    try {
        const data = await fetchData();
        console.log("Success:", data.message);
    } catch (error) {
        console.error("Error:", error);
    }
}
displayData();

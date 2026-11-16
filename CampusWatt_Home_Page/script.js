const searchInput = document.getElementById("classroomSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const classroomCards = document.querySelectorAll(".classroom-card");
const noResults = document.getElementById("noResults");

let currentFilter = "all";

function filterClassrooms() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    classroomCards.forEach(card => {
        const roomText = card.innerText.toLowerCase();
        const status = card.dataset.status || "";

        const matchesSearch = roomText.includes(searchText);
        const matchesFilter =
            currentFilter === "all" || status.includes(currentFilter);

        if (matchesSearch && matchesFilter) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
}

searchInput.addEventListener("input", filterClassrooms);

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterClassrooms();
    });
});
// ================================
// ADMIN DASHBOARD
// ================================

function turnOffAppliances(room) {
    const fan = document.getElementById("fan" + room);
    const light = document.getElementById("light" + room);
    const status = document.getElementById("status" + room);
    const button = document.getElementById("turnOff" + room);
    const successMessage = document.getElementById("successMessage");

    fan.textContent = "OFF";
    light.textContent = "OFF";

    fan.className = "device-off";
    light.className = "device-off";

    status.textContent = "Energy Saving";
    status.className = "table-status saving-status";

    button.textContent = "Optimized";
    button.disabled = true;

    successMessage.style.display = "block";

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 4000);
}
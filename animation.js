const progress = document.getElementById("progressBar");
const percent = document.getElementById("percent");
const status = document.getElementById("status");

const messages = [
    "Đang Truy Cập...",
    "Đang tải...",
    "Chuẩn bị...",
    "Preparing DATA...",
    "Đang thiết lập giao diện...",
    "Sắp vào web rồi ! ..."
];

// ======= URL WEBSITE CHÍNH =======
const TARGET_URL = "https://anovbl.vercel.app";
// ================================

const TOTAL_TIME = 12000; // 12 giây
const FPS = 60;

let current = 0;

const interval = TOTAL_TIME / 100;

const timer = setInterval(() => {

    current++;

    progress.style.width = current + "%";
    percent.textContent = current + "%";

    if (current < 15)
        status.textContent = messages[0];
    else if (current < 35)
        status.textContent = messages[1];
    else if (current < 55)
        status.textContent = messages[2];
    else if (current < 75)
        status.textContent = messages[3];
    else if (current < 95)
        status.textContent = messages[4];
    else
        status.textContent = messages[5];

    if (current >= 100) {

        clearInterval(timer);

        status.textContent = "Welcome!";

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.replace(TARGET_URL);

        }, 800);

    }

}, interval);

/* Chống click chọn chữ */

document.addEventListener("selectstart", e => e.preventDefault());

document.addEventListener("dragstart", e => e.preventDefault());

/* Chống kéo ảnh */

document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
});

/* Hiệu ứng title */

const titles = [
    "Ani-BL • Loading",
    "Preparing Movies...",
    "Almost Ready..."
];

let index = 0;

setInterval(() => {

    document.title = titles[index];

    index++;

    if(index >= titles.length)
        index = 0;

}, 1500);

/* ESC bỏ qua loading */

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        window.location.replace(TARGET_URL);

    }

});

/* Click card tăng glow */

const card = document.querySelector(".loading-card");

card.addEventListener("mouseenter",()=>{

    card.style.boxShadow =
    "0 25px 70px rgba(0,0,0,.55),0 0 40px rgba(0,255,255,.18)";

});

card.addEventListener("mouseleave",()=>{

    card.style.boxShadow =
    "0 20px 60px rgba(0,0,0,.45),0 0 25px rgba(0,255,255,.05)";

});
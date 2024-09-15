document.addEventListener("DOMContentLoaded", () => {
    const hour = document.querySelector("#hour span");
    const minute = document.querySelector("#minute span");
    const second = document.querySelector("#second span");

    const updateScreen = () => {
        const date = new Date();
        const hourValue = String(date.getHours()).padStart(2, "0");
        const minutesValue = String(date.getMinutes()).padStart(2, "0");
        const secondsValue = String(date.getSeconds()).padStart(2, "0");

        flip(hour, hourValue);
        flip(minute, minutesValue);
        flip(second, secondsValue);
    }

    const flip = (element: HTMLElement, newValue: string) => {
        element.classList.add("active");
        setTimeout(() => {
            element.textContent = newValue;
            element.classList.remove("active");
        }, 600);
    }

    setInterval(updateScreen, 1000);
});

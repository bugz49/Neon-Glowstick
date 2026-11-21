const btn = document.getElementById("powerBtn");
let isOn = false;

btn.addEventListener("click", () => {
    isOn = !isOn; 

    if (isOn) {
        
        gsap.to(".bulb", {
            backgroundColor: "#39ff14",
            borderColor: "#aaff80",
            boxShadow: "0 0 35px #39ff14, 0 0 70px #39ff14",
            duration: 0.3
        });

        gsap.to(".glare", {
            backgroundColor: "rgba(255, 255, 255, 0.65)",
            duration: 0.3
        });

        gsap.to(".led1, .led2", {
            backgroundColor: "#ff073a",
            boxShadow: "0 0 15px #ff073a, 0 0 30px #ff073a",
            duration: 0.3
        });

        gsap.to(".dial", {
            backgroundColor: "#ff073a",
            boxShadow: "0 0 12px #ff073a",
            duration: 0.3
        });

        gsap.to(".heading", {
            color: "#39ff14",
            textShadow: "0 0 15px #39ff14",
            duration: 0.3
        });

    } else {
        
        gsap.to(".bulb", {
            backgroundColor: "#0f2e0f",
            borderColor: "#1b4d1b",
            boxShadow: "none",
            duration: 0.3
        });

        gsap.to(".glare", {
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            duration: 0.3
        });

        gsap.to(".led1, .led2", {
            backgroundColor: "#4a0000",
            boxShadow: "none",
            duration: 0.3
        });

        gsap.to(".dial", {
            backgroundColor: "#4a0000",
            boxShadow: "none",
            duration: 0.3
        });

        gsap.to(".heading", {
            color: "#222",
            textShadow: "none",
            duration: 0.3
        });
    }
});
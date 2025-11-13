
    const signInBtn = document.getElementById("signInBtn");
    const welcomeMessage = document.getElementById('welcomeMessage');

    signInBtn.addEventListener('click', () => {
      welcomeMessage.textContent = ("Welcome");
      welcomeMessage.classList.add("welcome");
    });
  
const events = [
  {
    name: "අලුත් අවුරුදු උදාව",
    targetTime: "2026-04-14T09:32:00",
    details: "අප්‍රේල් මස 14 වන අඟහරුවාදා දින පූර්වභාග 09.32 ට සිංහල අලුත් අවුරුද්ද උදා වෙයි."
  },
  {
    name: "පුණ්‍ය කාලය ආරම්භය",
    targetTime: "2026-04-14T03:08:00",
    details: "අප්‍රේල් මස 14 වන අඟහරුවාදා පූර්වභාග 03.08 සිට එමදා අපරභාග 03.56 දක්වා පුණ්‍ය කාලය බැවින් ඊට පලමුව ආහාර පාන ගෙන සියලු වැඩ අතහැර ආගමික වතාවත්,අධ්‍යාත්මික කටයුතු,දානමය පුණ්‍ය ක්‍රියා සහ පුණ්‍යකාල චාරිත්‍රයන්හි නිරතවීමත් ආහාර පිසීම,අනුභවය,වැඩ ඇල්ලීම හා ගණුදෙනු කිරීම ආදී නැකත් චාරිත්‍ර ඉටුකිරීම මැනවි."
  },
  {
    name: "ආහාර පිසීම",
    targetTime: "2026-04-14T10:51:00",
    details: "අප්‍රේල් මස 14 වන අඟහරුවාදා පූර්වභාග 10.51 ට <span class='red-text'>රක්ත</span> වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා ලිප් බැඳ ගිනි මොළවා කිරිබතක් ද කැවිලි වර්ගයක්ද දී කිරි සහ විළඳ ද පිළියෙල කර ගැනීම මැනවි."
  },
  {
    name: "වැඩ ඇල්ලීම,ගණුදෙනු කිරීම සහ ආහාර අනුභවය",
    targetTime: "2026-04-14T12:06:00",
    details: "අප්‍රේල් මස 14 වන අඟහරුවාදා අපරභාග 12.06 ට <span class='red-text'>රක්ත</span> වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා සියලු වැඩ අල්ලා ගනුදෙනු කොට ආහාර අනුභව කිරීම මැනවි."
  },
  {
    name: "හිසතෙල් ගෑම",
    targetTime: "2026-04-15T06:55:00",
    details: "අප්‍රේල් මස 15 වන බදාදා පූර්වභාග 06.55 ට <span class='green-text'>කොළ</span> පැහැති වස්ත්‍රාභරණයෙන් සැරසී නැගෙනහිර දිශාව බලා හිසට කොහොඹපත් ද පයට කොළොන් පත් ද තබා කොහොඹපත් මිශ්‍ර නානු හා තෙල් ගා ස්නානය කිරීම මැනවි."
  },
  {
    name:"රැකී රක්ෂා සඳහා පිටත්ව යෑමේ පලමු නැකත",
    targetTime:"2026-04-20T06:27:00",
    details:"අප්‍රේල් මස 20 වන සඳුදා පූර්වභාග 06.27 ට <span class='white-text'>ස්වේත</span> වර්ණ වස්ත්‍රාභරණයෙන් සැරසී කිරි බතක්ද එලකිරි මිශ්‍ර කැවිලි වර්ගයක්ද අනුභව කර දකුණු දිශාව බලා පිටත්ව යෑම මැනවි."
  },
  {
    name:"රැකී රක්ෂා සඳහා පිටත්ව යෑමේ දෙවන නැකත",
    targetTime:"2026-04-20T06:50:00",
    details:"අප්‍රේල් මස 20 වන සඳුදා පූර්වභාග 06.50 ට <span class='white-text'>ස්වේත</span> වර්ණ වස්ත්‍රාභරණයෙන් සැරසී ගිතෙල් හා තල මිශ්‍ර කිරි බතක්ද දී කිරි සහ අග්ගලා සමග කැවිලි වර්ගයක්ද අනුභව කර නැගෙනහිර දිශාව බලා පිටත්ව යෑම මැනවි."
  },
  {
    name:"පැළ සිටුවීම",
    targetTime:"2026-04-23T09:01:00",
    details:"අප්‍රේල් මස 23 වන බ්‍රහස්පතිනදා පූර්වභාග 09.01ට <span class='gold-text'>රන්වන්</span> පැහැති වස්ත්‍රාබරණයෙන් සැරසී උතුරු දිශාව බලා පැළ සිටුවීම මැනවි."
  }
];

let currentEventIndex = 0;
let countdownInterval;
let soundPlayedForCurrentEvent = false;
let autoNextTimeout = null;
let activeToast = null;
let activeToastTimeout = null;


// Elements
const eventTitle = document.getElementById("eventTitle");
const eventDetails = document.getElementById("eventDetails");
const nextEventName = document.getElementById("nextEventName");
const nextEventTime = document.getElementById("nextEventTime");
const nextEventDate = document.getElementById("nextEventDate");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const countdown = document.getElementById("countdown");
const happeningNow = document.getElementById("happeningNow");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const menuLinks = document.getElementById("menuLinks");

const eventSound = document.getElementById("eventSound");
const pauseSoundBtn = document.getElementById("pauseSoundBtn");

const sinhalaMonths = [
  "ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්",
  "මැයි", "ජූනි", "ජූලි", "අගෝස්තු",
  "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"
];

// Format time in 12-hour style
function format12Hour(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}


//format date in Sinhala month
function formatDate(dateString) {
  const date = new Date(dateString);

  const month = sinhalaMonths[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}`;
}


// Update screen with selected event
function renderEvent(index) {
  hideMessage();

  const now = new Date().getTime();

  // skip already passed events
  while (
    index < events.length - 1 &&
    new Date(events[index].targetTime).getTime() <= now
  ) {
    index++;
  }

  currentEventIndex = index;

  const event = events[currentEventIndex];
  const nextEvent = events[currentEventIndex + 1];

  eventTitle.textContent = `${event.name},`;
  eventDetails.innerHTML = event.details;

  if (nextEvent) {
    nextEventName.textContent = nextEvent.name;
    nextEventDate.textContent = formatDate(nextEvent.targetTime);
    nextEventTime.textContent = format12Hour(nextEvent.targetTime);
  } else {
    nextEventName.textContent = "මෙය අලුත් අවුරුද්දේ අවසන් නැකතයි.";
    nextEventDate.textContent = "ඔබ සියලු දෙනාටම සුභ අලුත් අවුරුද්දක් වේවා....!";
    nextEventTime.textContent = "";
  }

  prevBtn.style.visibility = currentEventIndex === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentEventIndex === events.length - 1 ? "hidden" : "visible";

  eventSound.pause();
  eventSound.currentTime = 0;
  pauseSoundBtn.classList.add("hidden");
  soundPlayedForCurrentEvent = false;

  clearTimeout(autoNextTimeout);

  countdown.classList.remove("hidden");
  happeningNow.classList.add("hidden");
  pauseSoundBtn.classList.add("hidden");

  startCountdown(event.targetTime);
}

// Countdown logic
function startCountdown(targetTime) {
  clearInterval(countdownInterval);

  const now = new Date().getTime();
  const target = new Date(targetTime).getTime();
  const gap = target - now;

  if (gap > 0) {
    countdown.classList.remove("hidden");
    happeningNow.classList.add("hidden");
    pauseSoundBtn.classList.add("hidden");
  }

  const activeEventIndex = currentEventIndex;

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const target = new Date(targetTime).getTime();
    const gap = target - now;

    if (activeEventIndex !== currentEventIndex) {
      clearInterval(countdownInterval);
      return;
    }

    if (gap <= 0) {
      countdown.classList.add("hidden");
      happeningNow.classList.remove("hidden");

      if (!soundPlayedForCurrentEvent) {
        eventSound.play().catch((error) => {
          console.log("Audio play blocked:", error);
        });

        pauseSoundBtn.classList.remove("hidden");
        soundPlayedForCurrentEvent = true;

        if (currentEventIndex < events.length - 1) {
          autoNextTimeout = setTimeout(() => {
            const nextIndex = getNextValidEventIndex();

            if (nextIndex !== null) {
              currentEventIndex = nextIndex;
              renderEvent(currentEventIndex);
            }
          }, 30000);
        }
      }

      clearInterval(countdownInterval);
      return;
    }

    countdown.classList.remove("hidden");
    happeningNow.classList.add("hidden");
    pauseSoundBtn.classList.add("hidden");

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);
    const seconds = Math.floor((gap / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }, 1000);
}

// Prev / Next buttons

//Create previous valid finder
function getPreviousValidEventIndex() {
  const now = new Date().getTime();

  for (let i = currentEventIndex - 1; i >= 0; i--) {
    const eventTime = new Date(events[i].targetTime).getTime();

    // allow only events not too old (optional logic)
    if (eventTime > now - 60000) { // 1 min tolerance
      return i;
    }
  }

  return null;
}

prevBtn.addEventListener("click", () => {
  const prevIndex = getPreviousValidEventIndex();

  if (prevIndex !== null) {
    hideMessage();
    currentEventIndex = prevIndex;
    renderEvent(currentEventIndex);
  } else {
    showMessage("පසුගිය නැකත් දැනට පෙන්විය නොහැක."); // Sinhala message
  }
});

//show massage function
function showMessage(text) {
  // remove old toast first
  if (activeToast) {
    activeToast.remove();
    activeToast = null;
  }

  if (activeToastTimeout) {
    clearTimeout(activeToastTimeout);
    activeToastTimeout = null;
  }

  const msg = document.createElement("div");
  msg.className = "toast-message";
  msg.textContent = text;

  document.body.appendChild(msg);
  activeToast = msg;

  activeToastTimeout = setTimeout(() => {
    if (activeToast) {
      activeToast.remove();
      activeToast = null;
    }
    activeToastTimeout = null;
  }, 1500);
}

function hideMessage() {
  if (activeToast) {
    activeToast.remove();
    activeToast = null;
  }

  if (activeToastTimeout) {
    clearTimeout(activeToastTimeout);
    activeToastTimeout = null;
  }
}


nextBtn.addEventListener("click", () => {
  if (currentEventIndex < events.length - 1) {
    hideMessage();
    currentEventIndex++;
    renderEvent(currentEventIndex);
  }
});

// Menu open/close
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
}

// Build menu buttons
function buildMenu() {
  menuLinks.innerHTML = "";

  events.forEach((event, index) => {
    const btn = document.createElement("button");
    btn.textContent = event.name;
    btn.addEventListener("click", () => {
  const now = new Date().getTime();
  const eventTime = new Date(events[index].targetTime).getTime();

  // allow:
  // 1. future events
  // 2. events within 1-minute tolerance
  if (eventTime > now || eventTime > now - 60000) {
    hideMessage();
    currentEventIndex = index;
    renderEvent(currentEventIndex);
  } else {
    showMessage("පසුගිය නැකත් වෙත යා නොහැක");
  }

  closeMenu();
});
    menuLinks.appendChild(btn);
  });
}

//Sound Pause button
pauseSoundBtn.addEventListener("click", () => {
  eventSound.pause();
  eventSound.currentTime = 0;
  pauseSoundBtn.classList.add("hidden");
});

//if next event already passed → skip it ,go to the next valid future event
function getNextValidEventIndex() {
  const now = new Date().getTime();

  for (let i = currentEventIndex + 1; i < events.length; i++) {
    const eventTime = new Date(events[i].targetTime).getTime();

    if (eventTime > now) {
      return i;
    }
  }

  return null;
}


// Initial load
buildMenu();

const firstValidIndex = getNextValidEventIndex();
if (firstValidIndex !== null) {
  currentEventIndex = firstValidIndex;
}

renderEvent(currentEventIndex);
let correctCount = 0;
let incorrectCount = 0;

// Array to store images and their correct options
const imageOptions = [
  {image: "https://i.imgur.com/Hmjf9Ac.png",
    correctOptions: {
		primary: "105",
		secondary: "133",
		tertiary: "122",}},
  {image: "https://i.imgur.com/SWhJY2N.png",
    correctOptions: {
		primary: "96",
		secondary: "102",
		tertiary: "117",}},
  {image: "https://i.imgur.com/nQwJ2PM.png",
    correctOptions: {
		primary: "120",
		secondary: "135",
		tertiary: "131",}},
  {image: "https://i.imgur.com/3waZ0qv.png",
    correctOptions: {
		primary: "63",
		secondary: "17",
		tertiary: "75",}},
  {image: "https://i.imgur.com/MlOO0zQ.png",
    correctOptions: {
		primary: "104",
		secondary: "134",
		tertiary: "140",}},
  {image: "https://i.imgur.com/qZyhx4N.png",
    correctOptions: {
		primary: "39",
		secondary: "5",
		tertiary: "106",}},
  {image: "https://i.imgur.com/9yqFB6D.png",
    correctOptions: {
		primary: "80",
		secondary: "87",
		tertiary: "155",}},
  {image: "https://i.imgur.com/pVSZtZz.png",
    correctOptions: {
		primary: "77",
		secondary: "92",
		tertiary: "139",}},
  {image: "https://i.imgur.com/LVkmAAn.png",
    correctOptions: {
		primary: "112",
		secondary: "175",
		tertiary: "29",}},
  {image: "https://i.imgur.com/P6ADRcB.png",
    correctOptions: {
		primary: "126",
		secondary: "19",
		tertiary: "3",}},
  {image: "https://i.imgur.com/cpHFVx5.png",
    correctOptions: {
		primary: "170",
		secondary: "31",
		tertiary: "46",}},
  {image: "https://i.imgur.com/ZJED96t.png",
    correctOptions: {
		primary: "78",
		secondary: "43",
		tertiary: "78",}},
  {image: "https://i.imgur.com/5PXlyxD.png",
    correctOptions: {
		primary: "23",
		secondary: "136",
		tertiary: "57",}},
  {image: "https://i.imgur.com/tMbaLEM.png",
    correctOptions: {
		primary: "124",
		secondary: "56",
		tertiary: "112",}},
  {image: "https://i.imgur.com/kf3X8il.png",
    correctOptions: {
		primary: "30",
		secondary: "91",
		tertiary: "129",}},
  {image: "https://i.imgur.com/aWp2oYH.png",
    correctOptions: {
		primary: "15",
		secondary: "67",
		tertiary: "97",}},
  {image: "https://i.imgur.com/p7sLTUt.png",
    correctOptions: {
		primary: "119",
		secondary: "41",
		tertiary: "36",}},
  {image: "https://i.imgur.com/LHUJPns.png",
    correctOptions: {
		primary: "160",
		secondary: "34",
		tertiary: "35",}},
  {image: "https://i.imgur.com/Oc992xS.png",
    correctOptions: {
		primary: "108",
		secondary: "51",
		tertiary: "60",}},
  {image: "https://i.imgur.com/to07Hjp.png",
    correctOptions: {
		primary: "64",
		secondary: "164",
		tertiary: "55",}},
  {image: "https://i.imgur.com/XntmM2G.png",
    correctOptions: {
		primary: "46",
		secondary: "82",
		tertiary: "59",}},
  {image: "https://i.imgur.com/4DIteEN.png",
    correctOptions: {
		primary: "62",
		secondary: "17",
		tertiary: "117",}},
  {image: "https://i.imgur.com/pARQEG8.png",
    correctOptions: {
		primary: "26",
		secondary: "123",
		tertiary: "138",}},
  {image: "https://i.imgur.com/bC3Ho1q.png",
    correctOptions: {
		primary: "160",
		secondary: "101",
		tertiary: "132",}},
  {image: "https://i.imgur.com/aYloFqD.png",
    correctOptions: {
		primary: "50",
		secondary: "69",
		tertiary: "55",}},
  {image: "https://i.imgur.com/prWiQZL.png",
    correctOptions: {
		primary: "108",
		secondary: "49",
		tertiary: "41",}},
  {image: "https://i.imgur.com/b7AaBK1.png",
    correctOptions: {
		primary: "41",
		secondary: "154",
		tertiary: "146",}},
  {image: "https://i.imgur.com/EqvDCjK.png",
    correctOptions: {
		primary: "8",
		secondary: "94",
		tertiary: "14",}},
  {image: "https://i.imgur.com/HClDQSX.png",
    correctOptions: {
		primary: "8",
		secondary: "117",
		tertiary: "82",}},
  {image: "https://i.imgur.com/iQnms1n.png",
    correctOptions: {
		primary: "1",
		secondary: "149",
		tertiary: "75",}},
  {image: "https://i.imgur.com/T3lF2A5.png",
    correctOptions: {
		primary: "96",
		secondary: "80",
		tertiary: "37",}},
  {image: "https://i.imgur.com/QxuQpT2.png",
    correctOptions: {
		primary: "152",
		secondary: "139",
		tertiary: "46",}},
  {image: "https://i.imgur.com/o0cntQY.png",
    correctOptions: {
		primary: "9",
		secondary: "155",
		tertiary: "160",}},
  {image: "https://i.imgur.com/UCc39yi.png",
    correctOptions: {
		primary: "40",
		secondary: "7",
		tertiary: "54",}},
  {image: "https://i.imgur.com/OMeSWF8.png",
    correctOptions: {
		primary: "14",
		secondary: "168",
		tertiary: "90",}},
  {image: "https://i.imgur.com/LdexuxH.png",
    correctOptions: {
		primary: "104",
		secondary: "107",
		tertiary: "174",}},
  {image: "https://i.imgur.com/qgtoLoG.png",
    correctOptions: {
		primary: "81",
		secondary: "87",
		tertiary: "84",}},
  {image: "https://i.imgur.com/mHMKbeg.png",
    correctOptions: {
		primary: "23",
		secondary: "20",
		tertiary: "74",}},
  {image: "https://i.imgur.com/6KnML2b.png",
    correctOptions: {
		primary: "124",
		secondary: "53",
		tertiary: "97",}},
  {image: "https://i.imgur.com/Mkqi365.png",
    correctOptions: {
		primary: "44",
		secondary: "4",
		tertiary: "129",}},
  {image: "https://i.imgur.com/yPnksJv.png",
    correctOptions: {
		primary: "13",
		secondary: "127",
		tertiary: "168",}},
  {image: "https://i.imgur.com/iDkSWWv.png",
    correctOptions: {
		primary: "158",
		secondary: "52",
		tertiary: "130",}},
  {image: "https://i.imgur.com/nM1JSgz.png",
    correctOptions: {
		primary: "147",
		secondary: "33",
		tertiary: "3",}},
  {image: "https://i.imgur.com/wlOE6pB.png",
    correctOptions: {
		primary: "137",
		secondary: "140",
		tertiary: "103",}},
  {image: "https://i.imgur.com/xN6Tgiq.png",
    correctOptions: {
		primary: "173",
		secondary: "83",
		tertiary: "108",}},
  {image: "https://i.imgur.com/dnCezKi.png",
    correctOptions: {
		primary: "145",
		secondary: "93",
		tertiary: "163",}},
  {image: "https://i.imgur.com/jmLGjgk.png",
    correctOptions: {
		primary: "63",
		secondary: "120",
		tertiary: "99",}},
  {image: "https://i.imgur.com/SbXQ99I.png",
    correctOptions: {
		primary: "113",
		secondary: "98",
		tertiary: "88",}},
  {image: "https://i.imgur.com/mEuT9BE.png",
    correctOptions: {
		primary: "144",
		secondary: "153",
		tertiary: "148",}},
  {image: "https://i.imgur.com/4aHYGsk.png",
    correctOptions: {
		primary: "69",
		secondary: "114",
		tertiary: "175",}},
  {image: "https://i.imgur.com/pgCNWdw.png",
    correctOptions: {
		primary: "78",
		secondary: "132",
		tertiary: "111",}},
  {image: "https://i.imgur.com/xsinVTc.png",
    correctOptions: {
		primary: "60",
		secondary: "127",
		tertiary: "124",}},
  {image: "https://i.imgur.com/ma9u8HL.png",
    correctOptions: {
		primary: "36",
		secondary: "146",
		tertiary: "70",}},
  {image: "https://i.imgur.com/PMYot6J.png",
    correctOptions: {
		primary: "43",
		secondary: "169",
		tertiary: "91",}},
  {image: "https://i.imgur.com/wLRrrbq.png",
    correctOptions: {
		primary: "79",
		secondary: "159",
		tertiary: "15",}},
  {image: "https://i.imgur.com/RMNEtRn.png",
    correctOptions: {
		primary: "93",
		secondary: "1",
		tertiary: "102",}},
  {image: "https://i.imgur.com/UYAlq5o.png",
    correctOptions: {
		primary: "119",
		secondary: "56",
		tertiary: "54",}},
  {image: "https://i.imgur.com/ZucvjEs.png",
    correctOptions: {
		primary: "68",
		secondary: "126",
		tertiary: "146",}},
  {image: "https://i.imgur.com/soEM56S.png",
    correctOptions: {
		primary: "20",
		secondary: "86",
		tertiary: "58",}},
  {image: "https://i.imgur.com/Kr8z5o7.png",
    correctOptions: {
		primary: "120",
		secondary: "120",
		tertiary: "87",}},
  {image: "https://i.imgur.com/8KzGx7Y.png",
    correctOptions: {
		primary: "141",
		secondary: "161",
		tertiary: "105",}},
  {image: "https://i.imgur.com/H15oOuM.png",
    correctOptions: {
		primary: "145",
		secondary: "74",
		tertiary: "135",}},
  {image: "https://i.imgur.com/TPulXhW.png",
    correctOptions: {
		primary: "67",
		secondary: "99",
		tertiary: "2",}},
  {image: "https://i.imgur.com/HyfTCKH.png",
    correctOptions: {
		primary: "66",
		secondary: "140",
		tertiary: "67",}},
  {image: "https://i.imgur.com/kP8EF5s.png",
    correctOptions: {
		primary: "14",
		secondary: "17",
		tertiary: "113",}},
  {image: "https://i.imgur.com/SVsjdwJ.png",
    correctOptions: {
		primary: "51",
		secondary: "96",
		tertiary: "166",}},
  {image: "https://i.imgur.com/Kqe1QM3.png",
    correctOptions: {
		primary: "49",
		secondary: "38",
		tertiary: "101",}},
  {image: "https://i.imgur.com/gqASP1B.png",
    correctOptions: {
		primary: "94",
		secondary: "9",
		tertiary: "50",}},
  {image: "https://i.imgur.com/qRHQ2l0.png",
    correctOptions: {
		primary: "30",
		secondary: "29",
		tertiary: "87",}},
  {image: "https://i.imgur.com/vhKkmUb.png",
    correctOptions: {
		primary: "142",
		secondary: "138",
		tertiary: "5",}},
  {image: "https://i.imgur.com/4hYoz6O.png",
    correctOptions: {
		primary: "64",
		secondary: "52",
		tertiary: "52",}},
  {image: "https://i.imgur.com/FEJF6rH.png",
    correctOptions: {
		primary: "121",
		secondary: "174",
		tertiary: "28",}},
  {image: "https://i.imgur.com/91DLMod.png",
    correctOptions: {
		primary: "151",
		secondary: "162",
		tertiary: "21",}},
  {image: "https://i.imgur.com/barEWUS.png",
    correctOptions: {
		primary: "118",
		secondary: "125",
		tertiary: "51",}},
  {image: "https://i.imgur.com/0qMQJ4c.png",
    correctOptions: {
		primary: "54",
		secondary: "88",
		tertiary: "81",}},
  {image: "https://i.imgur.com/Hj21elN.png",
    correctOptions: {
		primary: "101",
		secondary: "130",
		tertiary: "133",}},
  {image: "https://i.imgur.com/BEacQIg.png",
    correctOptions: {
		primary: "59",
		secondary: "55",
		tertiary: "6",}},
  {image: "https://i.imgur.com/nMGd1Qu.png",
    correctOptions: {
		primary: "94",
		secondary: "26",
		tertiary: "128",}},
  {image: "https://i.imgur.com/s1xHme2.png",
    correctOptions: {
		primary: "10",
		secondary: "10",
		tertiary: "10",}},
  {image: "https://i.imgur.com/cg3meWG.png",
    correctOptions: {
		primary: "3",
		secondary: "81",
		tertiary: "9",}},
  {image: "https://i.imgur.com/csEgBLD.png",
    correctOptions: {
		primary: "168",
		secondary: "173",
		tertiary: "63",}},
  {image: "https://i.imgur.com/RKFhnzi.png",
    correctOptions: {
		primary: "143",
		secondary: "57",
		tertiary: "58",}},
  {image: "https://i.imgur.com/olRudtp.png",
    correctOptions: {
		primary: "55",
		secondary: "72",
		tertiary: "76",}},
  {image: "https://i.imgur.com/L1Myufh.png",
    correctOptions: {
		primary: "149",
		secondary: "139",
		tertiary: "86",}},
  {image: "https://i.imgur.com/JUcGkzt.png",
    correctOptions: {
		primary: "125",
		secondary: "113",
		tertiary: "52",}},
  {image: "https://i.imgur.com/c08CEZc.png",
    correctOptions: {
		primary: "33",
		secondary: "34",
		tertiary: "54",}},
  {image: "https://i.imgur.com/FznU4nZ.png",
    correctOptions: {
		primary: "96",
		secondary: "100",
		tertiary: "172",}},
  {image: "https://i.imgur.com/jk3z96k.png",
    correctOptions: {
		primary: "141",
		secondary: "113",
		tertiary: "49",}},
  {image: "https://i.imgur.com/hMwWdvD.png",
    correctOptions: {
		primary: "176",
		secondary: "83",
		tertiary: "39",}},
  {image: "https://i.imgur.com/Iwe6nE0.png",
    correctOptions: {
		primary: "31",
		secondary: "150",
		tertiary: "31",}},
  {image: "https://i.imgur.com/3uorEdm.png",
    correctOptions: {
		primary: "2",
		secondary: "120",
		tertiary: "170",}},
  {image: "https://i.imgur.com/mkNSjfX.png",
    correctOptions: {
		primary: "158",
		secondary: "136",
		tertiary: "43",}},
  {image: "https://i.imgur.com/xWIp5Yg.png",
    correctOptions: {
		primary: "16",
		secondary: "8",
		tertiary: "42",}},
  {image: "https://i.imgur.com/Gwth0wW.png",
    correctOptions: {
		primary: "80",
		secondary: "5",
		tertiary: "45",}},
  {image: "https://i.imgur.com/kts9TNz.png",
    correctOptions: {
		primary: "167",
		secondary: "6",
		tertiary: "43",}},
  {image: "https://i.imgur.com/oe0i4nr.png",
    correctOptions: {
		primary: "75",
		secondary: "44",
		tertiary: "104",}},
  {image: "https://i.imgur.com/WrIqZSW.png",
    correctOptions: {
		primary: "5",
		secondary: "81",
		tertiary: "78",}},
  {image: "https://i.imgur.com/KtLHdvt.png",
    correctOptions: {
		primary: "67",
		secondary: "154",
		tertiary: "44",}},
  {image: "https://i.imgur.com/k5uPciy.png",
    correctOptions: {
		primary: "20",
		secondary: "83",
		tertiary: "124",}},
  {image: "https://i.imgur.com/nBUBJVx.png",
    correctOptions: {
		primary: "146",
		secondary: "170",
		tertiary: "89",}},
  {image: "https://i.imgur.com/9AzFHiB.png",
    correctOptions: {
		primary: "171",
		secondary: "109",
		tertiary: "138",}},
  {image: "https://i.imgur.com/cbCggrc.png",
    correctOptions: {
		primary: "164",
		secondary: "76",
		tertiary: "157",}},
  {image: "https://i.imgur.com/mMmhKSt.png",
    correctOptions: {
		primary: "109",
		secondary: "78",
		tertiary: "25",}},
  {image: "https://i.imgur.com/xX51SUh.png",
    correctOptions: {
		primary: "133",
		secondary: "58",
		tertiary: "67",}},
  {image: "https://i.imgur.com/fom0m9R.png",
    correctOptions: {
		primary: "49",
		secondary: "29",
		tertiary: "66",}},
  {image: "https://i.imgur.com/85pnixE.png",
    correctOptions: {
		primary: "171",
		secondary: "30",
		tertiary: "15",}},
  {image: "https://i.imgur.com/Lf0DWs5.png",
    correctOptions: {
		primary: "102",
		secondary: "177",
		tertiary: "9",}},
  {image: "https://i.imgur.com/Z0X0fzM.png",
    correctOptions: {
		primary: "106",
		secondary: "34",
		tertiary: "67",}},
  {image: "https://i.imgur.com/BvQ7W8l.png",
    correctOptions: {
		primary: "64",
		secondary: "159",
		tertiary: "30",}},
  {image: "https://i.imgur.com/O5MJ9tj.png",
    correctOptions: {
		primary: "61",
		secondary: "163",
		tertiary: "98",}},
  {image: "https://i.imgur.com/O0NRbxm.png",
    correctOptions: {
		primary: "19",
		secondary: "59",
		tertiary: "128",}},
  {image: "https://i.imgur.com/mwYU3Vn.png",
    correctOptions: {
		primary: "136",
		secondary: "134",
		tertiary: "73",}},
  {image: "https://i.imgur.com/7Dsk1e4.png",
    correctOptions: {
		primary: "11",
		secondary: "71",
		tertiary: "165",}},
  {image: "https://i.imgur.com/uoY3SZA.png",
    correctOptions: {
		primary: "172",
		secondary: "114",
		tertiary: "36",}},
  {image: "https://i.imgur.com/Z8r4Aat.png",
    correctOptions: {
		primary: "13",
		secondary: "121",
		tertiary: "158",}},
  {image: "https://i.imgur.com/TdY6bFS.png",
    correctOptions: {
		primary: "131",
		secondary: "140",
		tertiary: "35",}},
  {image: "https://i.imgur.com/ipskDaw.png",
    correctOptions: {
		primary: "68",
		secondary: "57",
		tertiary: "14",}},
];

// Select the HTML elements
const dragonImage = document.getElementById("dragon-image");
const primaryDropdown = document.getElementById("primary");
const secondaryDropdown = document.getElementById("secondary");
const tertiaryDropdown = document.getElementById("tertiary");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("score"); // This line is necessary to reference the score display element
const feedbackPrimary = document.getElementById("feedback-primary");
const feedbackSecondary = document.getElementById("feedback-secondary");
const feedbackTertiary = document.getElementById("feedback-tertiary");

// Function to load a random image and store its correct answers
let currentCorrectOptions = {};
function loadRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageOptions.length);
  const selectedImage = imageOptions[randomIndex];
  dragonImage.src = selectedImage.image; // Set the image source
  dragonImage.alt = "Dragon Image"; // Set alt text
  currentCorrectOptions = selectedImage.correctOptions; // Store the correct options for each dropdown
}

// Function to check if all selected options are correct
function checkAnswer() {
  const primaryAnswer = primaryDropdown.value;
  const secondaryAnswer = secondaryDropdown.value;
  const tertiaryAnswer = tertiaryDropdown.value;

 if (primaryAnswer === currentCorrectOptions.primary) {
    feedbackPrimary.textContent = "Correct!";
    feedbackPrimary.className = "feedback-box correct"; // Green box
  } else {
    feedbackPrimary.textContent = "Incorrect!";
    feedbackPrimary.className = "feedback-box incorrect"; // Red box
  }

  // Check secondary dropdown
  if (secondaryAnswer === currentCorrectOptions.secondary) {
    feedbackSecondary.textContent = "Correct!";
    feedbackSecondary.className = "feedback-box correct"; // Green box
  } else {
    feedbackSecondary.textContent = "Incorrect!";
    feedbackSecondary.className = "feedback-box incorrect"; // Red box
  }

  // Check tertiary dropdown
  if (tertiaryAnswer === currentCorrectOptions.tertiary) {
    feedbackTertiary.textContent = "Correct!";
    feedbackTertiary.className = "feedback-box correct"; // Green box
  } else {
    feedbackTertiary.textContent = "Incorrect!";
    feedbackTertiary.className = "feedback-box incorrect"; // Red box
  }

  // Update score
  if (
    primaryAnswer === currentCorrectOptions.primary &&
    secondaryAnswer === currentCorrectOptions.secondary &&
    tertiaryAnswer === currentCorrectOptions.tertiary
  ) {
    correctCount++;
  } else {
    incorrectCount++;
  }

let totalCount = incorrectCount + correctCount;
let scoreRate = (correctCount/totalCount)*100;
let percentage = scoreRate.toFixed(1);
scoreDisplay.textContent = `Score: ${correctCount}/${totalCount} - ${percentage}%`;

  // Show feedback boxes
  feedbackPrimary.style.display = "block";
  feedbackSecondary.style.display = "block";
  feedbackTertiary.style.display = "block";
  
    // Load the next question by showing a new random image
  loadRandomImage();
 // Reset the dropdowns to default values (no selection)
  primaryDropdown.value = "0";
  secondaryDropdown.value = "0";
  tertiaryDropdown.value = "0";
}


// Event listeners
window.onload = loadRandomImage; // Load a random image when the page loads
submitButton.addEventListener("click", checkAnswer); // Check the answers on button click

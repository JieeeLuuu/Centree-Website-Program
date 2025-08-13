// 护眼模式
function eyeProtectMode() {
  document.body.style.background = "linear-gradient(#408559, #f2e2c9)";
  let btn= document.getElementById('mode');
  btn.dataset.modeType = "eye protect mode";
}

function eyeProtector() {
  let btn= document.getElementById('mode');
  if (btn.dataset.modeType == "orginal mode") {
    eyeProtectMode();
  } else {
    document.body.style.background = "linear-gradient(#048A81, #ffffff)";
    btn.dataset.modeType = "orginal mode";
  }
}

let modeBtn= document.getElementById('mode');
modeBtn.addEventListener("click", eyeProtector);

// logo change
function changeLogo() {
  let logo = document.getElementById('logo');
  if (logo.src.includes("Group")) {
    logo.src = "green logo.svg";
  } else {
    logo.src = "Group 3.svg";
  }
}

let theLogo = document.getElementById('logo');
theLogo.addEventListener("click", changeLogo);
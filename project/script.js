function navigateTo(url) {
  window.location.href = url;
}

/*menu1 : 나에게 맞는 한국 드라마 찾기*/
document.getElementById('m1').addEventListener('click', function() {
  navigateTo('menu1.html');
});

/*menu2 : 전체 추천 목록*/
document.getElementById('m2').addEventListener('click', function() {
  navigateTo('menu2.html');
});

/*menu2 전체 추천 목록에서 이미지 누르면 드라마 소개로 이동*/
document.getElementById('img1').addEventListener('click', function() {
  navigateTo('drama1.html');
});
document.getElementById('img2').addEventListener('click', function() {
  navigateTo('drama2.html');
});
document.getElementById('img3').addEventListener('click', function() {
  navigateTo('drama3.html');
});
document.getElementById('img4').addEventListener('click', function() {
  navigateTo('drama4.html');
});
document.getElementById('img5').addEventListener('click', function() {
  navigateTo('drama5.html');
});
document.getElementById('img6').addEventListener('click', function() {
  navigateTo('drama6.html');
});
document.getElementById('img7').addEventListener('click', function() {
  navigateTo('drama7.html');
});
document.getElementById('img8').addEventListener('click', function() {
  navigateTo('drama8.html');
});
document.getElementById('img9').addEventListener('click', function() {
  navigateTo('drama9.html');
});
document.getElementById('img10').addEventListener('click', function() {
  navigateTo('drama10.html');
});

/*menu3 : 나의 인생 드라마*/
document.getElementById('m3').addEventListener('click', function() {
  navigateTo('menu3.html');
});

/*menu4 : 2024 하반기 방영 예정작*/
document.getElementById('m4').addEventListener('click', function() {
  navigateTo('menu4.html');
});

/*menu5 : 나의 위시리스트*/
document.getElementById('m5').addEventListener('click', function() {
  navigateTo('menu5.html');
});

/*menu6 : 제보하기*/
document.getElementById('m6').addEventListener('click', function() {
  navigateTo('menu6.html');
});


// 쿠키에 이름 저장하기
function saveNameToCookie(name) {
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); 
  document.cookie = "name=" + encodeURIComponent(name) + "; expires=" + expirationDate.toUTCString();
}

// 쿠키에서 이름 가져오기
function getNameFromCookie() {
  let name = null;
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith("name=")) {
      name = decodeURIComponent(cookie.substring(5));
      break;
    }
  }
  return name;
}

// welcome message 업데이트
function updateWelcomeMessage(name) {
  let welcomeMessage = document.querySelector(".welcome-message");

  if (!welcomeMessage) {
    welcomeMessage = document.createElement("div");
    welcomeMessage.classList.add("welcome-message");
    document.body.appendChild(welcomeMessage);
  }

  welcomeMessage.innerHTML = name + "님";
}

// 이름 저장 및 화면 업데이트
function saveAndUpdateName() {
  let nameInput = document.getElementById("nameInput");
  let name = nameInput.value.trim();

  if (name !== "") {
    saveNameToCookie(name);
    updateWelcomeMessage(name);
    nameInput.style.display = "none";
    document.getElementById("namebtn").style.display = "none";
  }
}

// 페이지 로드 시 welcome message 표시 및 입력 필드/버튼 상태 제어
window.onload = function() {
  let savedName = getNameFromCookie();
  if (savedName) {
    updateWelcomeMessage(savedName);
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("namebtn").style.display = "none";
  } else {
    document.getElementById("nameInput").style.display = "block";
    document.getElementById("namebtn").style.display = "inline-block";
  }
};

// 버튼 클릭 이벤트 리스너 추가
document.getElementById("namebtn").addEventListener("click", saveAndUpdateName);
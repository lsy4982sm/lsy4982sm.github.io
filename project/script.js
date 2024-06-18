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


//회원 가입 창 띄우기
const signupBtn = document.getElementById('signup-btn');
const signupModal = document.getElementById('signup-modal');
const signupForm = document.getElementById('signup-form');

signupBtn.addEventListener('click', () => {
  window.open('signup.html', '_blank');
});


signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // 여기에 사용자 정보를 저장하는 로직을 추가하세요.
  console.log('사용자 정보:', { username, password, name, email });

  signupModal.style.display = 'none';
  signupForm.reset();
});
const elInputUsername = document.querySelector('#username');
const elFailureMessage = document.querySelector('.failure-message');
const elSuccessMessage = document.querySelector('.success-message');

// 비밀번호 관련 요소
const elPassword = document.querySelector('#password');
const elPwFailure = document.querySelector('.pw-failure');

// 비밀번호 재입력 관련 요소
const elPasswordRetype = document.querySelector('#password-retype');
const elPwMismatch = document.querySelector('.pw-mismatch');

// 아이디 입력 이벤트
elInputUsername.onkeyup = function () {
  const value = elInputUsername.value;
  if (isMoreThan4Length(value) && onlyNumberAndEnglish(value)) {
    elSuccessMessage.classList.remove('hide');
    elFailureMessage.classList.add('hide');
  } else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
};

// 비밀번호 강도 검사
elPassword.onkeyup = function () {
  const value = elPassword.value;
  if (strongPassword(value)) {
    elPwFailure.classList.add('hide');
  } else {
    elPwFailure.classList.remove('hide');
  }
};

// 비밀번호 일치 확인
elPasswordRetype.onkeyup = function () {
  if (isMatch(elPassword.value, elPasswordRetype.value)) {
    elPwMismatch.classList.add('hide');
  } else {
    elPwMismatch.classList.remove('hide');
  }

elFailureMessage.style.display = 'none';
elFailureMessage.classList.remove('hide')
};

elInputUsername.onkeyup = function () {
  const value = elInputUsername.value;


  if (isMoreThan4Length(value) && onlyNumberAndEnglish(value)) {
    elSuccessMessage.classList.remove('hide');
    elFailureMessage.classList.add('hide');
  } else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
    elFailureMessage.style.display = 'block'; // 추가
  }
};
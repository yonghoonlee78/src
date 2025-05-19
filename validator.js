function isMoreThan4Length(str) {
  return str.length >= 4;
}

function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

function isMatch(str1, str2) {
  return str1 === str2;
}

// 주석을 제거하고, 유효성 검증 함수를 테스트 해보세요

// console.log('`rocketboost`는 영어만 포함하므로', onlyNumberAndEnglish('rocketboost'))
// console.log('`elice킴`은 영어 외의 다른 글자도 포함하므로', onlyNumberAndEnglish('elice킴'))
// console.log('`엘리스킴`은 영어 외의 다른 글자도 포함하므로', onlyNumberAndEnglish('엘리스킴'))
// console.log('`qwerty`는 충분히 강력하지 않은 암호이므로', strongPassword('qwerty'))
// console.log('`q1w2e3r4`는 특수문자를 포함하지 않으므로', strongPassword('q1w2e3r4'))
// console.log('`q1w2e3r4!`는 조건을 충족하므로', strongPassword('q1w2e3r4!'))

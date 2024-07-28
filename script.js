document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm'); // 폼 요소 가져오기
    const nameInput = document.getElementById('name'); // 이름 입력 필드 가져오기
    const usernameInput = document.getElementById('username'); // 아이디 입력 필드 가져오기
    const emailInput = document.getElementById('email'); // 이메일 입력 필드 가져오기
    const contactInput = document.getElementById('contact'); // 연락처 입력 필드 가져오기
    const passwordInput = document.getElementById('password'); // 패스워드 입력 필드 가져오기
    const confirmPasswordInput = document.getElementById('confirm_password'); // 패스워드 확인 필드 가져오기
    const productTypeInputs = document.querySelectorAll('input[name="product_type"]'); // 제품 유형 입력 필드 가져오기
    const quantitySelect = document.getElementById('quantity_select'); // 수량 선택 필드 가져오기
    const quantityInput = document.getElementById('quantity_input'); // 수량 입력 필드 가져오기
    const privacyAgreement = document.getElementById('privacy_agreement'); // 개인정보 수집 및 이용 동의 필드 가져오기
    const serviceAgreement = document.getElementById('service_agreement'); // 서비스 이용 약관 동의 필드 가져오기

    form.addEventListener('submit', function(event) {
        // 이름 필드가 비어있는 경우
        if (nameInput.value.trim() === '') {
            alert('이름을 입력해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 이름 필드가 유효하지 않은 경우
        const nameRegex = /^[가-힣]{2,}$/; // 한국어 이름 2글자 이상
        if (!nameRegex.test(nameInput.value)) {
            alert('유효하지 않은 이름입니다.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 아이디 필드가 비어있는 경우
        if (usernameInput.value.trim() === '') {
            alert('아이디를 입력해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 아이디 필드가 유효하지 않은 경우
        const usernameRegex = /^[A-Za-z0-9]{4,12}$/; // 영문 대소문자+숫자 조합 4~12자
        if (!usernameRegex.test(usernameInput.value)) {
            alert('아이디는 4~12자의 대소문자 영문과 숫자 조합만 가능합니다.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 이메일 필드가 비어있는 경우
        if (emailInput.value.trim() === '') {
            alert('이메일을 입력해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 이메일 필드가 유효하지 않은 경우
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|kr)$/; // 이메일 정규식
        if (!emailRegex.test(emailInput.value)) {
            alert('유효하지 않은 이메일 주소입니다.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 연락처 필드가 비어있는 경우
        if (contactInput.value.trim() === '') {
            alert('연락처를 입력해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 연락처 필드가 유효하지 않은 경우
        const contactRegex = /^[0-9]{10,11}$/; // 연락처 정규식, 숫자만 10~11자
        if (!contactRegex.test(contactInput.value)) {
            alert('연락처는 - 기호 제외하고 작성해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 패스워드 필드가 비어있는 경우
        if (passwordInput.value.trim() === '') {
            alert('패스워드를 입력해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 패스워드 필드가 유효하지 않은 경우
        const passwordRegex = /^[A-Za-z0-9]{4,12}$/; // 패스워드 정규식, 영문 대소문자+숫자 조합 4~12자
        if (!passwordRegex.test(passwordInput.value)) {
            alert('패스워드는 4~12자의 대소문자 영문과 숫자 조합만 가능합니다.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 패스워드 확인 필드가 비어있는 경우
        if (confirmPasswordInput.value.trim() === '') {
            alert('패스워드 확인을 입력해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 패스워드와 패스워드 확인 필드가 일치하지 않는 경우
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('비밀번호가 일치하지 않습니다.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 제품 유형 필드가 선택되지 않은 경우
        let productTypeSelected = false;
        for (const productTypeInput of productTypeInputs) {
            if (productTypeInput.checked) {
                productTypeSelected = true;
                break;
            }
        }
        if (!productTypeSelected) {
            alert('제품을 선택해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 주문 수량 필드가 선택되지 않은 경우
        if (quantitySelect.value === "" && quantityInput.value.trim() === "") {
            alert('수량을 입력해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 필수 약관이 체크되지 않은 경우
        if (!privacyAgreement.checked || !serviceAgreement.checked) {
            alert('필수 약관에 동의해주세요.');
            event.preventDefault(); // 폼 제출을 막음
            return;
        }

        // 모든 유효성 검사를 통과한 경우
        alert('정상적으로 신청되었습니다.');
        location.href = 'https://trailhead.salesforce.com/ko/today'; // 링크로 리디렉션
    });
});

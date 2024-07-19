function validateForm() {
    const name = document.getElementById('name').value.trim();
    const namePattern = /^[가-힣]{2,}$/;

    if (name === "") {
        alert("이름을 입력해주세요");
        return false;
    }

    if (!namePattern.test(name)) {
        alert("유효하지 않은 이름입니다.");
        return false;
    }

    return true;
}
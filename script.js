document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm'); 

    form.addEventListener('submit', function(event) {
        //이름
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
    
        //아이디
        const userid = document.getElementById('userid').value.trim();
        const useridPattern = /^(?=.*[A-Z])[a-zA-Z0-9]{4,12}$/;
        if (userid === "") {
            alert('아이디를 입력해주세요');
            return false;
        }
        if (!useridPattern.test(userid)) {
            alert('아이디는 4~12자의 대소문자 영문과 숫자 조합만 가능합니다.');
            return false;
        }
    
        //이메일
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
        if (email === "") {
            alert('이메일을 입력해주세요');
            return false;
        }
        if (!emailPattern.test(email)) {
            alert('유효하지 않은 이메일 형식입니다.');
            return false;
        }
    
        return true;
    
    });

});
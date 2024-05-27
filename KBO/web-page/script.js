document.getElementById('baseball-field').addEventListener('click', function(event) {
    var baseball = document.createElement('img');
    baseball.src = 'image/baseball.png';
    baseball.style.width = '50px';
    baseball.style.height = '50px';
    baseball.style.position = 'absolute';
    
    // #baseball-field의 왼쪽 상단 모서리로부터의 상대적 위치를 계산
    var rect = this.getBoundingClientRect();
    var x = event.clientX - rect.left - 25; // 클릭 위치에서 요소의 왼쪽 상단 모서리까지의 거리 계산
    var y = event.clientY - rect.top - 25; // 클릭 위치에서 요소의 상단 모서리까지의 거리 계산

    baseball.style.left = `${x}px`; // 야구공 이미지의 left 위치 조정
    baseball.style.top = `${y}px`; // 야구공 이미지의 top 위치 조정

    this.appendChild(baseball);
});
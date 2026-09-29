
// 파일 : main.js
// 1. Tweakpane 모듈 가져오기 . CDN 연결방식
import { Pane } from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/dist/tweakpane.min.js';

// 2. 컨트롤할 데이터 오브젝트 만들기
const CONFIG = {
    speed: 0.5,
    color: '#ff00ee',
    theme: 'Dark'
};

// 3. Tweakpane 인스턴스 생성
const pane = new Pane({
    title: '설정창',
});

// 4. UI 요소 바인딩 및 이벤트 연결
pane.addBinding(CONFIG, 'speed', { min: 0, max: 1 }).on('change', (ev) => {
    console.log('속도 변경됨:', ev.value);
});

pane.addBinding(CONFIG, 'color');

pane.addBinding(CONFIG, 'theme', {
    options: { Light: 'Light', Dark: 'Dark' }
});


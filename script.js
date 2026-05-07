const wordsData = [
    { id: 1, word: "소개", meaning: "таныстыру / знакомство", example: "저는 자기소개를 해요." },
    { id: 2, word: "이름", meaning: "есім / имя", example: "제 이름은 다미르예요." },
    { id: 3, word: "국적", meaning: "ұлт / национальность", example: "제 국적은 카자흐스탄이에요." },
    { id: 4, word: "학생", meaning: "студент / студент", example: "저는 학생이에요." },
    { id: 5, word: "친구", meaning: "дос / друг", example: "친구가 있어요." },
    { id: 6, word: "학교", meaning: "мектеп / школа", example: "학교에 가요." },
    { id: 7, word: "교실", meaning: "сынып / класс", example: "교실에 있어요." },
    { id: 8, word: "도서관", meaning: "кітапхана / библиотека", example: "도서관에 가요." },
    { id: 9, word: "운동장", meaning: "спорт алаңы / спортплощадка", example: "운동장에서 운동해요." },
    { id: 10, word: "수업", meaning: "сабақ / урок", example: "수업이 있어요." },
    { id: 11, word: "아침", meaning: "таң / утро", example: "아침에 밥을 먹어요." },
    { id: 12, word: "저녁", meaning: "кеш / вечер", example: "저녁에 쉬어요." },
    { id: 13, word: "공부", meaning: "оқу / учёба", example: "공부해요." },
    { id: 14, word: "숙제", meaning: "үй жұмысы / домашка", example: "숙제를 해요." },
    { id: 15, word: "피곤", meaning: "шаршау / усталый", example: "저는 피곤해요." },
    { id: 16, word: "월요일", meaning: "дүйсенбі / понедельник", example: "월요일에 학교에 가요." },
    { id: 17, word: "화요일", meaning: "сейсенбі / вторник", example: "화요일에 운동해요." },
    { id: 18, word: "수요일", meaning: "сәрсенбі / среда", example: "수요일에 공부해요." },
    { id: 19, word: "목요일", meaning: "бейсенбі / четверг", example: "목요일에 쇼핑해요." },
    { id: 20, word: "금요일", meaning: "жұма / пятница", example: "금요일에 쉬어요." },
    { id: 21, word: "토요일", meaning: "сенбі / суббота", example: "토요일에 친구를 만나요." },
    { id: 22, word: "일요일", meaning: "жексенбі / воскресенье", example: "일요일에 집에 있어요." },
    { id: 23, word: "시작", meaning: "бастау / начало", example: "수업이 시작해요." },
    { id: 24, word: "끝", meaning: "аяқтау / конец", example: "수업이 끝나요." },
    { id: 25, word: "주말", meaning: "демалыс / выходные", example: "주말에 쉬어요." },
    { id: 26, word: "영화", meaning: "фильм / фильм", example: "영화를 봐요." },
    { id: 27, word: "약속", meaning: "кездесу / встреча", example: "약속이 있어요." },
    { id: 28, word: "외출", meaning: "сыртқа шығу / выходить", example: "외출해요." },
    { id: 29, word: "선생님", meaning: "мұғалім / учитель", example: "선생님이 있어요." },
    { id: 30, word: "책", meaning: "кітап / книга", example: "책을 읽어요." },
    { id: 31, word: "축구", meaning: "футбол / футбол", example: "축구를 해요." },
    { id: 32, word: "농구", meaning: "баскетбол / баскетбол", example: "농구를 해요." },
    { id: 33, word: "활동", meaning: "әрекет / активность", example: "활동을 해요." },
    { id: 34, word: "조용", meaning: "тыныш / тихо", example: "도서관은 조용해요." },
    { id: 35, word: "시간표", meaning: "расписание / кесте", example: "시간표를 봐요." },
    { id: 36, word: "과목", meaning: "пән / предмет", example: "과목이 많아요." },
    { id: 37, word: "오전", meaning: "таңертең / до обеда", example: "오전에 공부해요." },
    { id: 38, word: "오후", meaning: "түстен кейін / после обеда", example: "오후에 쉬어요." },
    { id: 39, word: "과제", meaning: "тапсырма / задание", example: "과제를 해요." },
    { id: 40, word: "발표", meaning: "презентация / выступление", example: "발표를 해요." },
    { id: 41, word: "준비", meaning: "дайындық / подготовка", example: "준비해요." },
    { id: 42, word: "평가", meaning: "бағалау / оценка", example: "평가가 있어요." },
    { id: 43, word: "쉬다", meaning: "демалу / отдыхать", example: "집에서 쉬어요." },
    { id: 44, word: "집", meaning: "үй / дом", example: "집에 있어요." },
    { id: 45, word: "날씨", meaning: "ауа райы / погода", example: "날씨가 좋아요." },
    { id: 46, word: "비", meaning: "жаңбыр / дождь", example: "비가 와요." },
    { id: 47, word: "우산", meaning: "қолшатыр / зонт", example: "우산을 써요." },
    { id: 48, word: "밖", meaning: "сырт / улица", example: "밖에 나가요." },
    { id: 49, word: "교통", meaning: "көлік / транспорт", example: "교통이 많아요." },
    { id: 50, word: "버스", meaning: "автобус / автобус", example: "버스를 타요." },
    { id: 51, word: "지하철", meaning: "метро / metro", example: "지하철을 타요." },
    { id: 52, word: "택시", meaning: "такси / такси", example: "택시를 타요." },
    { id: 53, word: "정류장", meaning: "аялдама / остановка", example: "정류장에 있어요." },
    { id: 54, word: "여행", meaning: "саяхат / путешествие", example: "여행해요." },
    { id: 55, word: "계획", meaning: "жоспар / план", example: "계획이 있어요." },
    { id: 56, word: "가족", meaning: "отбасы / семья", example: "가족이 있어요." },
    { id: 57, word: "즐겁다", meaning: "көңілді / весело", example: "즐거워요." },
    { id: 58, word: "점심", meaning: "түскі ас / обед", example: "점심을 먹어요." },
    { id: 59, word: "휴식", meaning: "демалыс / отдых", example: "휴식해요." },
    { id: 60, word: "음악", meaning: "музыка / музыка", example: "음악을 들어요." },
    { id: 61, word: "산책", meaning: "серуен / прогулка", example: "산책해요." },
    { id: 62, word: "카페", meaning: "кафе / кафе", example: "카페에 가요." },
    { id: 63, word: "운동", meaning: "жаттығу / спорт", example: "운동해요." },
    { id: 64, word: "부모님", meaning: "ата-ана / родители", example: "부모님이 있어요." },
    { id: 65, word: "동생", meaning: "іні/қарындас / младший", example: "동생이 있어요." },
    { id: 66, word: "형제", meaning: "бауыр / братья", example: "형제가 있어요." },
    { id: 67, word: "아버지", meaning: "әке / отец", example: "아버지가 있어요." },
    { id: 68, word: "어머니", meaning: "ана / мать", example: "어머니가 있어요." },
    { id: 69, word: "식사", meaning: "тамақ / еда", example: "식사를 해요." },
    { id: 70, word: "도와주다", meaning: "көмектесу / помогать", example: "도와줘요." },
    { id: 71, word: "형", meaning: "аға / старший брат", example: "형이 있어요." },
    { id: 72, word: "누나", meaning: "әпке / старшая сестра", example: "누나가 있어요." },
    { id: 73, word: "선물", meaning: "сыйлық / подарок", example: "선물을 받아요." },
    { id: 74, word: "생일", meaning: "туған күн / день рождения", example: "생일이에요." },
    { id: 75, word: "할머니", meaning: "әже / бабушка", example: "할머니가 있어요." },
    { id: 76, word: "할아버지", meaning: "ата / дедушка", example: "할아버지가 있어요." },
    { id: 77, word: "방문", meaning: "бару / визит", example: "방문해요." },
    { id: 78, word: "이야기", meaning: "әңгіме / разговор", example: "이야기해요." },
    { id: 79, word: "밥", meaning: "күріш / рис", example: "밥을 먹어요." },
    { id: 80, word: "김치", meaning: "кимчи / кимчи", example: "김치를 먹어요." },
    { id: 81, word: "국", meaning: "сор파 / суп", example: "국을 먹어요." },
    { id: 82, word: "반찬", meaning: "гарнир / гарнир", example: "반찬을 먹어요." },
    { id: 83, word: "맛있다", meaning: "дәмді / вкусно", example: "맛있어요." },
    { id: 84, word: "과일", meaning: "жеміс / фрукты", example: "과일을 먹어요." },
    { id: 85, word: "사과", meaning: "алма / яблоко", example: "사과를 먹어요." },
    { id: 86, word: "바나나", meaning: "바난 / банан", example: "바나나를 먹어요." },
    { id: 87, word: "딸기", meaning: "құлпынай / клубника", example: "딸기를 먹어요." },
    { id: 88, word: "시장", meaning: "базар / рынок", example: "시장에 가요." },
    { id: 89, word: "가게", meaning: "дүкен / магазин", example: "가게에 가요." },
    { id: 90, word: "옷", meaning: "киім / одежда", example: "옷을 사요." },
    { id: 91, word: "가격", meaning: "баға / цена", example: "가격이 비싸요." },
    { id: 92, word: "세일", meaning: "жеңілдік / скидка", example: "세일해요." },
    { id: 93, word: "계산", meaning: "төлеу / оплата", example: "계산해요." },
    { id: 94, word: "비행기", meaning: "ұшақ / самолёт", example: "비행기를 타요." },
    { id: 95, word: "숙소", meaning: "тұратын жер / жильё", example: "숙소에 있어요." },
    { id: 96, word: "지도", meaning: "карта / карта", example: "지도를 봐요." },
    { id: 97, word: "관광", meaning: "туризм / туризм", example: "관광해요." },
    { id: 98, word: "호텔", meaning: "қонақ үй / отель", example: "호텔에 가요." },
    { id: 99, word: "체크인", meaning: "тіркелу / чек-ин", example: "체크인해요." },
    { id: 100, word: "짐", meaning: "жүк / багаж", example: "짐이 있어요." },
    { id: 101, word: "교통", meaning: "көлік қозғалысы / транспортное движение", example: "교통이 많아요." },
    { id: 102, word: "하루일과", meaning: "күн тәртібі / распорядок дня", example: "하루일과가 바빠요." },
    { id: 103, word: "예약", meaning: "бронь / бронирование", example: "예약했어요." },
    { id: 104, word: "눈", meaning: "қар / снег", example: "눈이 와요." },
    { id: 105, word: "바람", meaning: "жел / ветер", example: "바람이 불어요." },
    { id: 106, word: "맑다", meaning: "ашық / ясно", example: "날씨가 맑아요." },
    { id: 107, word: "교통카드", meaning: "транспорт картасы / транспортная карта", example: "교통카드를 써요." },
    { id: 108, word: "파티", meaning: "кеш / вечеринка", example: "파티에 가요." },
    { id: 109, word: "전화", meaning: "телефон / звонок", example: "전화해요." },
    { id: 110, word: "메시지", meaning: "хабарлама / сообщение", example: "메시지를 보내요." },
    { id: 111, word: "연락", meaning: "байланыс / связь", example: "친구에게 연락해요." },
    { id: 112, word: "손님", meaning: "қонақ / гость", example: "손님이 와요." },
    { id: 113, word: "노래", meaning: "ән / песня", example: "노래를 들어요." },
    { id: 114, word: "악기", meaning: "музыкалық аспап / музыкальный инструмент", example: "악기를 연습해요." },
    { id: 115, word: "연습", meaning: "жаттығу / практика", example: "매일 연습해요." },
    { id: 116, word: "공연", meaning: "концерт / выступление", example: "공연을 봐요." },
    { id: 117, word: "그림", meaning: "сурет / рисунок", example: "그림을 그려요." },
    { id: 118, word: "사진", meaning: "фото / фотография", example: "사진을 찍어요." },
    { id: 119, word: "취미", meaning: "хобби / хобби", example: "제 취미는 독서예요." },
    { id: 120, word: "축하", meaning: "құттықтау / поздравление", example: "생일을 축하해요." },
    { id: 121, word: "편리", meaning: "ыңғайлы / удобно", example: "지하철은 편리해요." },
    { id: 122, word: "공원", meaning: "саябақ / парк", example: "공원에 가요." },
    { id: 123, word: "티켓", meaning: "билет / билет", example: "티켓을 사요." },
    { id: 124, word: "쇼핑", meaning: "шопинг / покупки", example: "쇼핑해요." },
    { id: 125, word: "재미있다", meaning: "қызық / интересно", example: "영화가 재미있어요." },
    { id: 126, word: "독서", meaning: "кітап оқу / чтение", example: "독서를 좋아해요." },
    { id: 127, word: "집중", meaning: "концентрация / сосредоточенность", example: "공부에 집중해요." },
    { id: 128, word: "젖다", meaning: "сулану / намокнуть", example: "비 때문에 옷이 젖었어요." },
    { id: 129, word: "길", meaning: "жол / дорога", example: "길이 길어요." },
    { id: 130, word: "이동", meaning: "қозғалу / передвижение", example: "버스로 이동해요." },
    { id: 131, word: "장식", meaning: "әшекей / украшение", example: "방을 장식해요." },
    { id: 132, word: "반찬", meaning: "гарнир / закуска к рису", example: "반찬을 먹어요." }
];

let memorizedIds = JSON.parse(localStorage.getItem('memorizedIds')) || [];
let currentFilter = 'all';
let searchQuery = '';

// Quiz State
let quizMode = false;
let currentQuestionIndex = 0;
let quizQuestions = [];
let score = 0;

const wordsContainer = document.getElementById('words-container');
const searchInput = document.getElementById('search-input');
const shuffleBtn = document.getElementById('shuffle-btn');
const themeToggle = document.getElementById('theme-toggle');
const statsText = document.getElementById('stats-text');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize Theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
}

function renderWords() {
    if (quizMode) return;
    wordsContainer.innerHTML = '';
    
    let filtered = wordsData.filter(item => {
        const matchesSearch = item.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             item.example.toLowerCase().includes(searchQuery.toLowerCase());
        
        const isMemorized = memorizedIds.includes(item.id);
        
        if (currentFilter === 'learned') return matchesSearch && isMemorized;
        if (currentFilter === 'not-learned') return matchesSearch && !isMemorized;
        return matchesSearch;
    });

    filtered.forEach((item, index) => {
        const isMemorized = memorizedIds.includes(item.id);
        const card = document.createElement('div');
        card.classList.add('word-card');
        if (isMemorized) card.classList.add('memorized');
        
        card.style.animationDelay = `0s`;
        
        card.innerHTML = `
            <div class="word-number">#${item.id}</div>
            <div class="korean-word">${item.word}</div>
            <div class="word-meaning">${item.meaning}</div>
            <div class="korean-example">${item.example}</div>
            <div class="card-actions">
                <button class="action-btn speak-btn" title="Тыңдау">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 10 0 0 1 0 7.07"></path></svg>
                </button>
                <button class="action-btn check-btn ${isMemorized ? 'active' : ''}" title="${isMemorized ? 'Жатталды' : 'Жаттау'}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </button>
            </div>
        `;
        
        card.querySelector('.speak-btn').addEventListener('click', () => speak(`${item.word}. ${item.example}`));
        card.querySelector('.check-btn').addEventListener('click', () => toggleMemorized(item.id));

        wordsContainer.appendChild(card);
    });

    updateStats();
}

function toggleMemorized(id) {
    if (memorizedIds.includes(id)) {
        memorizedIds = memorizedIds.filter(mid => mid !== id);
    } else {
        memorizedIds.push(id);
    }
    localStorage.setItem('memorizedIds', JSON.stringify(memorizedIds));
    renderWords();
}

function updateStats() {
    const total = wordsData.length;
    const learned = memorizedIds.length;
    statsText.innerText = `${learned} / ${total} жатталды`;
}

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

// Quiz Logic
function startQuiz() {
    quizMode = true;
    currentQuestionIndex = 0;
    score = 0;
    // Shuffling ALL words for the test
    quizQuestions = [...wordsData].sort(() => Math.random() - 0.5);
    
    document.querySelector('.app-header').style.display = 'none';
    wordsContainer.classList.add('quiz-mode'); // Fix for layout
    renderQuestion();
}

function renderQuestion() {
    wordsContainer.innerHTML = '';
    const word = quizQuestions[currentQuestionIndex];
    
    // Generate options
    let options = [word.meaning];
    while(options.length < 4) {
        const randomWord = wordsData[Math.floor(Math.random() * wordsData.length)];
        if (!options.includes(randomWord.meaning)) {
            options.push(randomWord.meaning);
        }
    }
    options.sort(() => Math.random() - 0.5);

    const quizCard = document.createElement('div');
    quizCard.classList.add('quiz-card');
    
    // Calculate progress percentage
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    quizCard.innerHTML = `
        <div class="quiz-header">
            <div class="quiz-progress-wrapper">
                <div class="quiz-progress-bar" style="width: ${progress}%"></div>
            </div>
            <div class="quiz-progress-text">Сұрақ ${currentQuestionIndex + 1} / ${quizQuestions.length}</div>
        </div>
        <div class="quiz-content">
            <div class="quiz-question">${word.word}</div>
            <div class="quiz-example-hint">${word.example}</div>
            <div class="quiz-options">
                ${options.map((opt, i) => `
                    <button class="quiz-opt-btn" style="animation-delay: ${0.1 + i * 0.1}s">
                        <span class="opt-label">${String.fromCharCode(65 + i)}</span>
                        <span class="opt-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="quiz-footer">
            <button id="exit-quiz" class="exit-quiz-btn">🏠 Тестті тоқтату</button>
        </div>
    `;

    wordsContainer.appendChild(quizCard);

    quizCard.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const isCorrect = btn.querySelector('.opt-text').innerText === word.meaning;
            
            // Disable all buttons after click
            quizCard.querySelectorAll('.quiz-opt-btn').forEach(b => b.style.pointerEvents = 'none');

            if (isCorrect) {
                btn.classList.add('correct');
                score++;
                speak(word.word); // Speak on correct answer
            } else {
                btn.classList.add('wrong');
                // Highlight correct one
                quizCard.querySelectorAll('.quiz-opt-btn').forEach(b => {
                    if (b.querySelector('.opt-text').innerText === word.meaning) b.classList.add('correct');
                });
            }

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < quizQuestions.length) {
                    renderQuestion();
                } else {
                    showResult();
                }
            }, 1200);
        });
    });

    document.getElementById('exit-quiz').addEventListener('click', () => {
        if(confirm("Тестті шынымен тоқтатқыңыз келе ме?")) {
            quizMode = false;
            wordsContainer.classList.remove('quiz-mode');
            document.querySelector('.app-header').style.display = 'block';
            renderWords();
        }
    });
}

function showResult() {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let emoji = percentage > 80 ? '👑' : percentage > 50 ? '👏' : '📚';
    let message = percentage > 80 ? 'Керемет нәтиже!' : percentage > 50 ? 'Жақсы, бірақ әлі де оқу керек.' : 'Қайтадан көріңіз, сәттілік!';

    wordsContainer.innerHTML = `
        <div class="quiz-card result-card">
            <div class="result-emoji">${emoji}</div>
            <h2>Тест аяқталды!</h2>
            <div class="score-display">${score} / ${quizQuestions.length}</div>
            <div class="percentage-bar-wrapper">
                <div class="percentage-bar" style="width: ${percentage}%"></div>
            </div>
            <p class="result-message">${message}</p>
            <div class="result-actions">
                <button onclick="startQuiz()" class="filter-btn active">Қайталау</button>
                <button id="finish-quiz" class="filter-btn">Басты бетке</button>
            </div>
        </div>
    `;
    document.getElementById('finish-quiz').addEventListener('click', () => {
        quizMode = false;
        wordsContainer.classList.remove('quiz-mode');
        document.querySelector('.app-header').style.display = 'block';
        renderWords();
    });
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderWords();
});

shuffleBtn.addEventListener('click', () => {
    wordsData.sort(() => Math.random() - 0.5);
    renderWords();
});

themeToggle.addEventListener('click', () => {
    const isDark = document.body.hasAttribute('data-theme');
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderWords();
    });
});

// Initial Start
renderWords();

// Add a global handler to stop default form submissions or navigation on button clicks
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    e.preventDefault(); // Prevent any default navigation/reload
  }
});

// Add Test Button to Header logic
const testBtn = document.createElement('button');
// Ensure it does not act as a submit button
testBtn.type = 'button';
testBtn.innerText = "🔥 Тест тапсыру (132 сөз)";
testBtn.className = "filter-btn quiz-start-btn";
testBtn.onclick = startQuiz;
document.querySelector('.filters').appendChild(testBtn);

// Back to Top Logic
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400 && !quizMode) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const baseVocab = [
    { en: "accept", zh: "接受", pinyin: "jiē shòu", zhuyin: "ㄐㄧㄝ ㄕㄡˋ", my: "လက်ခံသည်", emoji: "🤝", ex: "I accept your idea." },
    { en: "achieve", zh: "達成", pinyin: "dá chéng", zhuyin: "ㄉㄚˊ ㄔㄥˊ", my: "အောင်မြင်ရရှိသည်", emoji: "🏆", ex: "Work hard to achieve your goals." },
    { en: "brave", zh: "勇敢的", pinyin: "yǒng gǎn de", zhuyin: "ㄩㄥˇ ㄍㄢˇ ㄉㄜ˙", my: "ရဲရင့်သော", emoji: "🦁", ex: "She is very brave." },
    { en: "create", zh: "創造", pinyin: "chuàng zào", zhuyin: "ㄔㄨㄤˋ ㄗㄠˋ", my: "ဖန်တီးသည်", emoji: "🎨", ex: "Let's create something amazing." },
    { en: "diligent", zh: "勤奮的", pinyin: "qín fèn de", zhuyin: "ㄑㄧㄣˊ ㄈㄣˋ ㄉㄜ˙", my: "ကြိုးစားအားထုတ်သော", emoji: "🐝", ex: "He is a diligent student." },
    { en: "explore", zh: "探索", pinyin: "tàn suǒ", zhuyin: "ㄊㄢˋ ㄙㄨㄛˇ", my: "စူးစမ်းရှာဖွေသည်", emoji: "🧭", ex: "We love to explore new places." },
    { en: "focus", zh: "專注", pinyin: "zhuān zhù", zhuyin: "ㄓㄨㄢ ㄓㄨˋ", my: "အာရုံစိုက်သည်", emoji: "🎯", ex: "Stay focused on your studies." },
    { en: "grateful", zh: "感激的", pinyin: "gǎn jī de", zhuyin: "ㄍㄢˇ ㄐㄧ ㄉㄜ˙", my: "ကျေးဇူးတင်သော", emoji: "🙏", ex: "I am grateful for your help." },
    { en: "harmony", zh: "和諧", pinyin: "hé xié", zhuyin: "ㄏㄜˊ ㄒㄧㄝˊ", my: "သဟဇာတဖြစ်မှု", emoji: "🕊️", ex: "Live together in harmony." },
    { en: "inspire", zh: "啟發", pinyin: "qǐ fā", zhuyin: "ㄑㄧˇ ㄈㄚ", my: "စိတ်ဓာတ်ခွန်အားပေးသည်", emoji: "✨", ex: "Good teachers inspire students." }
];

const levelsData = {};
for (let lvl = 1; lvl <= 50; lvl++) {
    levelsData[lvl] = [];
    for (let i = 0; i < 5; i++) {
        const item = baseVocab[(lvl + i) % baseVocab.length];
        levelsData[lvl].push({ ...item, id: `${lvl}-${i}` });
    }
}

const defaultReviews = [
    {
        rating: "⭐⭐⭐⭐⭐",
        name: "Student",
        message: "Super helpful for learning Chinese & Burmese together! 🎀"
    }
];

let state = JSON.parse(localStorage.getItem('vocabhub_state')) || {
    xp: 0,
    unlockedFlashcardLevel: 1,
    unlockedDrillLevel: 1,
    completedLevels: [],
    starred: [],
    remainingMistakes: [],
    practicedMistakes: [],
    theme: 'light',
    ttsRate: 0.95,
    reviews: defaultReviews,
    userNote: ''
};

if (Array.isArray(state.mistakes) && state.mistakes.length > 0 && !Array.isArray(state.remainingMistakes)) {
    state.remainingMistakes = [...state.mistakes];
}
if (!Array.isArray(state.remainingMistakes)) state.remainingMistakes = [];
if (!Array.isArray(state.practicedMistakes)) state.practicedMistakes = [];
if (!state.unlockedFlashcardLevel) state.unlockedFlashcardLevel = 1;
if (!state.unlockedDrillLevel) state.unlockedDrillLevel = 1;
if (typeof state.ttsRate !== 'number' || Number.isNaN(state.ttsRate)) state.ttsRate = 0.95;
if (!Array.isArray(state.reviews) || state.reviews.length === 0) state.reviews = [...defaultReviews];

let currentMode = 'flashcards';
let currentLevel = 1;
let currentIndex = 0;
let currentWords = [];
let quizScore = 0;
let timerInterval = null;
let timeLeft = 15;
let selectedStars = 5;
let currentTypingDirection = 'en-to-zh';
let isPracticingMistakesMode = false;

let spkScore = 0;
let currentSpkItem = null;
let activeRecognition = null;
let triedChineseFallback = false;

let activeUtterance = null;
let cachedVoices = [];

function loadVoicesList() {
    if (!('speechSynthesis' in window)) return [];
    const list = window.speechSynthesis.getVoices();
    if (list && list.length > 0) cachedVoices = list;
    return cachedVoices;
}

if ('speechSynthesis' in window) {
    loadVoicesList();
    window.speechSynthesis.onvoiceschanged = () => loadVoicesList();
}

function stopVoiceRecognition() {
    if (activeRecognition) {
        try {
            activeRecognition.onresult = null;
            activeRecognition.onerror = null;
            activeRecognition.onend = null;
            activeRecognition.abort();
        } catch (e) {}
        activeRecognition = null;
    }
}

function stopAllAudioAndMic() {
    stopVoiceRecognition();
    try {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } catch (e) {}
    activeUtterance = null;
}

window.addEventListener('pagehide', stopAllAudioAndMic);
window.addEventListener('beforeunload', stopAllAudioAndMic);
document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAllAudioAndMic();
});

function setSpeechRate(rate) {
    const num = parseFloat(rate);
    if (Number.isNaN(num)) return;
    state.ttsRate = Math.min(1.8, Math.max(0.5, Number(num.toFixed(2))));
    saveState();
    updateRateUI();
}

function updateRateUI() {
    const label = document.getElementById('speed-rate-label');
    if (label) label.innerText = `${state.ttsRate.toFixed(2)}x`;

    document.querySelectorAll('[data-rate]').forEach(btn => {
        const r = parseFloat(btn.getAttribute('data-rate'));
        const isActive = Math.abs(r - state.ttsRate) < 0.03;
        btn.classList.toggle('ring-2', isActive);
        btn.classList.toggle('ring-pink-500', isActive);
        btn.classList.toggle('font-extrabold', isActive);
    });
}

window.onload = () => {
    setTheme(state.theme);
    updateUIStats();
    updateRateUI();
    renderReviews();
    setupStarSelector();
    setupFeedbackForm();
    document.getElementById('user-note-area').value = state.userNote || '';
};

function saveState() {
    localStorage.setItem('vocabhub_state', JSON.stringify(state));
    updateUIStats();
}

function updateUIStats() {
    document.getElementById('xp-display').innerText = `${state.xp} XP`;
    document.getElementById('lb-user-xp').innerText = `${state.xp} XP`;
    document.getElementById('unlocked-display').innerText = `FC Lv.${state.unlockedFlashcardLevel} • Drill Lv.${state.unlockedDrillLevel}`;
    document.getElementById('stat-completed').innerText = state.completedLevels.length;
    document.getElementById('stat-starred').innerText = state.starred.length;
    document.getElementById('mistakes-count').innerText = `${state.remainingMistakes.length} remaining`;

    const fcPct = Math.max(2, (state.unlockedFlashcardLevel / 50) * 100);
    const drPct = Math.max(2, (state.unlockedDrillLevel / 50) * 100);
    document.getElementById('prog-fc-txt').innerText = `${state.unlockedFlashcardLevel}/50`;
    document.getElementById('prog-fc-bar').style.width = `${fcPct}%`;
    document.getElementById('prog-qz-txt').innerText = `${state.unlockedDrillLevel}/50`;
    document.getElementById('prog-qz-bar').style.width = `${drPct}%`;
}

function saveUserNote() {
    state.userNote = document.getElementById('user-note-area').value;
    saveState();
    closeModal('note-modal');
}

function clearUserNote() {
    document.getElementById('user-note-area').value = '';
    state.userNote = '';
    saveState();
}

function setStarValue(count) {
    selectedStars = count;
    document.getElementById('fb-rating').value = '⭐'.repeat(count);
    document.getElementById('star-count-label').innerText = `${count} / 5 Stars`;

    document.querySelectorAll('.star-btn').forEach(btn => {
        const val = Number(btn.getAttribute('data-star'));
        if (val <= count) {
            btn.classList.remove('text-gray-300');
            btn.classList.add('text-amber-400');
        } else {
            btn.classList.remove('text-amber-400');
            btn.classList.add('text-gray-300');
        }
    });
}

function setupStarSelector() {
    document.querySelectorAll('.star-btn').forEach(btn => {
        btn.addEventListener('click', () => setStarValue(Number(btn.getAttribute('data-star'))));
    });
    setStarValue(5);
}

function renderReviews() {
    const list = document.getElementById('reviews-list');
    if (!list) return;
    list.innerHTML = '';
    state.reviews.forEach(rev => {
        const p = document.createElement('p');
        p.className = 'p-2 rounded-xl bg-pink-50/60';
        p.innerHTML = `${escapeHtml(rev.rating)} "${escapeHtml(rev.message)}" - <b>${escapeHtml(rev.name)}</b>`;
        list.appendChild(p);
    });
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function setupFeedbackForm() {
    const form = document.getElementById('feedback-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        const rating = document.getElementById('fb-rating').value || '⭐⭐⭐⭐⭐';
        const name = document.getElementById('fb-name').value.trim();
        const message = document.getElementById('fb-message').value.trim();
        if (!name || !message) return;

        state.reviews.unshift({ rating, name, message });
        if (state.reviews.length > 10) state.reviews.pop();
        saveState();
        renderReviews();

        e.preventDefault();
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).catch(() => {});

        form.reset();
        setStarValue(5);
        closeModal('feedback-modal');
    });
}

function setTheme(mode) {
    document.body.classList.remove('light-mode', 'reading-mode', 'dark-mode');
    document.body.classList.add(`${mode}-mode`);
    state.theme = mode;
    localStorage.setItem('vocabhub_state', JSON.stringify(state));
}

function getActiveSection() {
    const sections = ['home-section', 'levels-section', 'starred-section', 'flashcards-section', 'quiz-section', 'speaking-section', 'mistakes-section'];
    for (const id of sections) {
        const el = document.getElementById(id);
        if (el && !el.classList.contains('hidden')) return id;
    }
    return 'home-section';
}

function goBackSection() {
    const active = getActiveSection();
    if (active === 'quiz-section') exitQuiz();
    else if (active !== 'home-section') showSection('home');
}

function showSection(secName) {
    stopAllAudioAndMic();
    ['home-section', 'levels-section', 'starred-section', 'flashcards-section', 'quiz-section', 'speaking-section', 'mistakes-section'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(`${secName}-section`).classList.remove('hidden');
    if (secName === 'starred') renderStarred();
    if (secName === 'mistakes') renderMistakesManager();
}

function openLevelSelect(mode) {
    currentMode = mode;
    const titles = {
        flashcards: '📚 Flashcards • Choose Level',
        quiz: '🧠 Speed Quiz (15s) • Choose Level',
        arcade: '🎮 Vocab Arcade • Choose Level',
        typing: '⌨️ Typing Drill • Choose Level'
    };
    document.getElementById('level-mode-title').innerText = titles[mode];
    document.getElementById('level-rule-hint').innerText = mode === 'flashcards'
        ? 'Finish a Flashcards level to unlock the next Flashcards level & unlock that level in Speed Quiz / Vocab Arcade / Typing!'
        : 'Complete Flashcards for a level first to unlock that level in Speed Quiz / Vocab Arcade / Typing!';

    const maxUnlocked = (mode === 'flashcards') ? state.unlockedFlashcardLevel : state.unlockedDrillLevel;
    const grid = document.getElementById('levels-grid');
    grid.innerHTML = '';

    for (let i = 1; i <= 50; i++) {
        const isUnlocked = i <= maxUnlocked;
        const btn = document.createElement('button');
        btn.className = `p-3 rounded-2xl font-bold text-xs border transition flex flex-col items-center justify-center gap-1 ${
            isUnlocked
                ? 'bg-pink-50 border-pink-300 text-pink-700 hover:bg-pink-500 hover:text-white cursor-pointer shadow-sm'
                : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
        }`;
        btn.innerHTML = `<span>Level ${i}</span><span>${isUnlocked ? '🎀' : '🔒'}</span>`;
        if (isUnlocked) btn.onclick = () => startLevel(i);
        grid.appendChild(btn);
    }
    showSection('levels');
}

function startLevel(lvl) {
    isPracticingMistakesMode = false;
    currentLevel = lvl;
    currentWords = levelsData[lvl];
    currentIndex = 0;

    if (currentMode === 'flashcards') {
        document.getElementById('fc-level-title').innerText = `Level ${lvl}`;
        renderFlashcard();
        showSection('flashcards');
    } else {
        quizScore = 0;
        const modeLabels = { quiz: 'Speed Quiz (15s)', arcade: 'Vocab Arcade', typing: 'Typing Drill' };
        document.getElementById('quiz-title').innerText = `${modeLabels[currentMode]} • Level ${lvl}`;
        showSection('quiz');
        loadQuizQuestion();
    }
}

function renderFlashcard() {
    const word = currentWords[currentIndex];
    document.getElementById('fc-emoji').innerText = word.emoji;
    document.getElementById('fc-en').innerText = word.en;
    document.getElementById('fc-zh').innerText = word.zh;
    document.getElementById('fc-pinyin').innerText = `${word.pinyin} | ${word.zhuyin}`;
    document.getElementById('fc-my').innerText = word.my;
    document.getElementById('fc-ex').innerText = `"${word.ex}"`;
    document.getElementById('fc-counter').innerText = `${currentIndex + 1} / ${currentWords.length}`;
    document.getElementById('fc-star-btn').innerText = state.starred.some(w => w.en === word.en) ? '⭐' : '☆';
}

function nextCard() {
    if (currentIndex < currentWords.length - 1) {
        currentIndex++;
        renderFlashcard();
    } else {
        completeFlashcardLevel(currentLevel, 20);
        alert(`🎉 Flashcards Level ${currentLevel} done! Drills Lv.${currentLevel} & Flashcards Lv.${Math.min(50, currentLevel + 1)} unlocked! +20 XP`);
        openLevelSelect('flashcards');
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        renderFlashcard();
    }
}

function toggleStarCurrent() {
    const word = currentWords[currentIndex];
    const idx = state.starred.findIndex(w => w.en === word.en);
    if (idx > -1) state.starred.splice(idx, 1);
    else state.starred.push(word);
    saveState();
    renderFlashcard();
}

function renderStarred() {
    const container = document.getElementById('starred-list');
    container.innerHTML = state.starred.length === 0
        ? '<p class="col-span-full text-center opacity-70 py-10">No starred words yet. Click ☆ on flashcards to save!</p>'
        : '';
    state.starred.forEach(w => {
        container.innerHTML += `
            <div class="card-box p-4 rounded-2xl border border-amber-200 shadow-sm">
                <div class="text-2xl mb-1">${w.emoji || '⭐'}</div>
                <h4 class="font-black text-lg text-pink-600">${w.en}</h4>
                <p class="font-bold">${w.zh} <span class="text-xs opacity-70">(${w.pinyin})</span></p>
                <p class="text-sm opacity-90">${w.my}</p>
            </div>
        `;
    });
}

function loadQuizQuestion() {
    clearInterval(timerInterval);
    if (currentIndex >= currentWords.length) {
        if (!isPracticingMistakesMode) completeDrillLevel(currentLevel, quizScore * 10);
        alert(`🏆 Finished! Score: ${quizScore}/${currentWords.length}`);
        showSection(isPracticingMistakesMode ? 'mistakes' : 'home');
        return;
    }

    const word = currentWords[currentIndex];
    document.getElementById('quiz-q-num').innerText = `QUESTION ${currentIndex + 1} / ${currentWords.length}`;
    document.getElementById('quiz-score').innerText = `Score: ${quizScore}`;
    document.getElementById('quiz-feedback').innerText = '';
    document.getElementById('quiz-subprompt').classList.add('hidden');

    const timerBadge = document.getElementById('quiz-timer');
    const optionsDiv = document.getElementById('quiz-options');
    const typingDiv = document.getElementById('typing-area');

    if (currentMode === 'quiz') {
        timeLeft = 15;
        timerBadge.classList.remove('hidden');
        timerBadge.innerText = `⏱️ ${timeLeft}s`;
        timerInterval = setInterval(() => {
            timeLeft--;
            timerBadge.innerText = `⏱️ ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleWrongAnswer(word);
            }
        }, 1000);
    } else {
        timerBadge.classList.add('hidden');
    }

    if (currentMode === 'typing') {
        optionsDiv.classList.add('hidden');
        typingDiv.classList.remove('hidden');
        const inputEl = document.getElementById('typing-input');
        inputEl.value = '';
        setTimeout(() => inputEl.focus(), 50);

        currentTypingDirection = (currentIndex % 2 === 0) ? 'en-to-zh' : 'zh-to-en';
        if (currentTypingDirection === 'en-to-zh') {
            document.getElementById('quiz-prompt-label').innerText = 'English given -> Type 中文 (Traditional Chinese) ONLY';
            document.getElementById('quiz-word').innerText = word.en;
            inputEl.placeholder = '中文သက်သက် ရိုက်ထည့်ပါ (ဥပမာ: 接受)';
        } else {
            document.getElementById('quiz-prompt-label').innerText = '中文 given -> Type ENGLISH ONLY';
            document.getElementById('quiz-word').innerText = `${word.zh} (${word.pinyin})`;
            inputEl.placeholder = 'Type English word ONLY (e.g. accept)';
        }
    } else if (currentMode === 'arcade') {
        typingDiv.classList.add('hidden');
        optionsDiv.classList.remove('hidden');
        optionsDiv.innerHTML = '';
        document.getElementById('quiz-prompt-label').innerText = '🎮 Arcade Match: Pick the exact icon & meaning!';
        document.getElementById('quiz-word').innerText = `${word.en} • ${word.my}`;

        let choices = [word];
        while (choices.length < 4) {
            const rand = baseVocab[Math.floor(Math.random() * baseVocab.length)];
            if (!choices.some(c => c.en === rand.en)) choices.push(rand);
        }
        choices.sort(() => Math.random() - 0.5);

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'p-4 rounded-2xl border-2 border-purple-200 hover:border-purple-500 font-bold text-center transition flex flex-col items-center gap-1 bg-purple-50/40';
            btn.innerHTML = `<span class="text-3xl">${choice.emoji}</span><span class="text-sm">${choice.zh}</span>`;
            btn.onclick = () => {
                if (choice.en === word.en) handleCorrectAnswer(word, 15);
                else handleWrongAnswer(word);
            };
            optionsDiv.appendChild(btn);
        });
    } else {
        typingDiv.classList.add('hidden');
        optionsDiv.classList.remove('hidden');
        optionsDiv.innerHTML = '';
        document.getElementById('quiz-prompt-label').innerText = '⚡ 15s Speed Quiz: Choose the exact meaning!';
        document.getElementById('quiz-word').innerText = word.en;

        let choices = [word];
        while (choices.length < 4) {
            const rand = baseVocab[Math.floor(Math.random() * baseVocab.length)];
            if (!choices.some(c => c.en === rand.en)) choices.push(rand);
        }
        choices.sort(() => Math.random() - 0.5);

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'p-3.5 rounded-2xl border-2 border-amber-200 hover:border-amber-500 font-bold text-xs transition text-left';
            btn.innerHTML = `<div class="font-extrabold text-sm">${choice.zh} (${choice.pinyin})</div><div class="opacity-80 mt-0.5">${choice.my}</div>`;
            btn.onclick = () => {
                clearInterval(timerInterval);
                if (choice.en === word.en) handleCorrectAnswer(word, 10);
                else handleWrongAnswer(word);
            };
            optionsDiv.appendChild(btn);
        });
    }
}

function containsChinese(text) {
    return /[\u4e00-\u9fff]/.test(text);
}

function containsEnglish(text) {
    return /[a-zA-Z]/.test(text);
}

function checkTypingAnswer() {
    const word = currentWords[currentIndex];
    const inputEl = document.getElementById('typing-input');
    const raw = inputEl.value.trim();

    if (!raw && document.getElementById('quiz-feedback').innerText.trim() !== '') {
        clearInterval(timerInterval);
        currentIndex++;
        loadQuizQuestion();
        return;
    }
    if (!raw) return;

    if (currentTypingDirection === 'en-to-zh') {
        if (containsEnglish(raw) || !containsChinese(raw)) {
            document.getElementById('quiz-feedback').innerHTML = '<span class="text-rose-500">⚠️ 中文 (တရုတ်စာ) နဲ့သာ ဖြေပါ! English နဲ့ ဖြေလို့မရပါ။</span>';
            return;
        }
        if (raw === word.zh) handleCorrectAnswer(word, 15);
        else handleWrongAnswer(word);
    } else {
        if (containsChinese(raw) || !containsEnglish(raw)) {
            document.getElementById('quiz-feedback').innerHTML = '<span class="text-rose-500">⚠️ English နဲ့သာ ဖြေပါ! 中文 နဲ့ ဖြေလို့မရပါ။</span>';
            return;
        }
        if (raw.toLowerCase() === word.en.toLowerCase()) handleCorrectAnswer(word, 15);
        else handleWrongAnswer(word);
    }
}

function handleCorrectAnswer(word, xpGain) {
    quizScore++;
    state.xp += xpGain;
    const remIdx = state.remainingMistakes.findIndex(m => m.en === word.en);
    if (remIdx > -1) {
        state.remainingMistakes.splice(remIdx, 1);
        if (!state.practicedMistakes.some(m => m.en === word.en)) state.practicedMistakes.push(word);
    }
    saveState();
    document.getElementById('quiz-feedback').innerHTML = `<span class="text-emerald-500">✅ Correct! +${xpGain} XP</span>`;
    setTimeout(() => { currentIndex++; loadQuizQuestion(); }, 850);
}

function handleWrongAnswer(word) {
    document.getElementById('quiz-feedback').innerHTML = `<span class="text-rose-500">❌ Answer: ${word.en} / ${word.zh} (${word.my})</span>`;
    if (!state.remainingMistakes.some(m => m.en === word.en)) state.remainingMistakes.push(word);
    state.practicedMistakes = state.practicedMistakes.filter(m => m.en !== word.en);
    saveState();
    setTimeout(() => { currentIndex++; loadQuizQuestion(); }, 1250);
}

function openMistakesHub() {
    renderMistakesManager();
    showSection('mistakes');
}

function renderMistakesManager() {
    const remList = document.getElementById('remaining-mistakes-list');
    const pracList = document.getElementById('practiced-mistakes-list');

    document.getElementById('remaining-badge').innerText = state.remainingMistakes.length;
    document.getElementById('practiced-badge').innerText = state.practicedMistakes.length;

    remList.innerHTML = state.remainingMistakes.length === 0
        ? '<p class="text-gray-400 py-4 text-center">No unpracticed mistakes remaining! 🎉</p>'
        : '';

    state.remainingMistakes.forEach(w => {
        remList.innerHTML += `
            <div class="p-3 rounded-2xl bg-rose-50/70 border border-rose-100 flex justify-between items-center">
                <div>
                    <span class="font-extrabold text-rose-700">${w.emoji || '⚠️'} ${w.en}</span>
                    <span class="ml-2 font-bold">${w.zh}</span>
                    <p class="opacity-75">${w.my}</p>
                </div>
                <span class="text-[11px] font-bold text-rose-500">Unpracticed</span>
            </div>
        `;
    });

    pracList.innerHTML = state.practicedMistakes.length === 0
        ? '<p class="text-gray-400 py-4 text-center">No practiced mistakes yet.</p>'
        : '';

    state.practicedMistakes.forEach(w => {
        pracList.innerHTML += `
            <div class="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex justify-between items-center">
                <div>
                    <span class="font-extrabold text-emerald-700">${w.emoji || '✅'} ${w.en}</span>
                    <span class="ml-2 font-bold">${w.zh}</span>
                    <p class="opacity-75">${w.my}</p>
                </div>
                <span class="text-[11px] font-bold text-emerald-600">Practiced ✓</span>
            </div>
        `;
    });
}

function practiceRemainingMistakes() {
    if (state.remainingMistakes.length === 0) {
        alert('🎉 All missed words have already been practiced!');
        return;
    }
    isPracticingMistakesMode = true;
    currentMode = 'quiz';
    currentWords = [...state.remainingMistakes];
    currentIndex = 0;
    quizScore = 0;
    document.getElementById('quiz-title').innerText = '🔴 Unpracticed Mistakes Drill (15s)';
    showSection('quiz');
    loadQuizQuestion();
}

function exitQuiz() {
    clearInterval(timerInterval);
    stopAllAudioAndMic();
    showSection(isPracticingMistakesMode ? 'mistakes' : 'home');
}

function completeFlashcardLevel(lvl, earnedXp) {
    state.xp += earnedXp;
    if (lvl > state.unlockedDrillLevel) state.unlockedDrillLevel = Math.min(50, lvl);
    if (lvl >= state.unlockedFlashcardLevel && state.unlockedFlashcardLevel < 50) {
        state.unlockedFlashcardLevel = lvl + 1;
    }
    saveState();
}

function completeDrillLevel(lvl, earnedXp) {
    state.xp += earnedXp;
    const key = `${currentMode}-${lvl}`;
    if (!state.completedLevels.includes(key)) state.completedLevels.push(key);
    saveState();
}

function startSpeakingTest() {
    spkScore = 0;
    document.getElementById('spk-score').innerText = `Score: ${spkScore}`;
    showSection('speaking');
    nextSpeakingWord();
}

function nextSpeakingWord() {
    stopVoiceRecognition();
    triedChineseFallback = false;
    const word = baseVocab[Math.floor(Math.random() * baseVocab.length)];
    const isChinese = Math.random() < 0.5;

    currentSpkItem = {
        word,
        lang: isChinese ? 'zh-TW' : 'en-US',
        targetText: isChinese ? word.zh : word.en
    };

    document.getElementById('spk-emoji').innerText = word.emoji;
    document.getElementById('spk-lang-badge').innerText = isChinese ? '🇨🇳 中文 Only Mode' : '🇺🇸 English Only Mode';
    document.getElementById('spk-target').innerText = currentSpkItem.targetText;
    document.getElementById('spk-rule-text').innerText = isChinese
        ? 'တရုတ်လိုသာ မှန်အောင်ပြောပါ (Chinese pronunciation only)'
        : 'အင်္ဂလိပ်လိုသာ မှန်အောင်ပြောပါ (English pronunciation only)';
    document.getElementById('spk-sub').innerText = isChinese
        ? `English: ${word.en} • ${word.my}`
        : `中文: ${word.zh} (${word.pinyin}) • ${word.my}`;
    document.getElementById('spk-heard').innerText = '—';
    document.getElementById('spk-result').innerText = '';
}

function listenTargetWord() {
    if (!currentSpkItem) return;
    speakWord(currentSpkItem.targetText, currentSpkItem.lang);
}

function startVoiceRecognition(overrideLang = null) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        document.getElementById('spk-result').innerHTML = '<span class="text-rose-500">⚠️ Use Google Chrome or Microsoft Edge for voice recognition.</span>';
        return;
    }

    if (!currentSpkItem) {
        nextSpeakingWord();
    }

    const langToUse = overrideLang || currentSpkItem.lang || 'en-US';
    if (!overrideLang) {
        triedChineseFallback = false;
    }

    stopVoiceRecognition();

    const recognition = new SpeechRecognition();
    activeRecognition = recognition;
    recognition.lang = langToUse;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    document.getElementById('spk-heard').innerText = '—';
    document.getElementById('spk-result').innerHTML = `<span class="text-amber-600">🎙️ Listening (${langToUse})...</span>`;

    recognition.onresult = (event) => {
        const res0 = event.results && event.results[0] && event.results[0][0];
        const transcript = (res0 && res0.transcript ? res0.transcript : '').trim();
        document.getElementById('spk-heard').innerText = transcript || '—';

        if (!transcript) {
            document.getElementById('spk-result').innerHTML = '<span class="text-rose-500">⚠️ အသံဖမ်းမမိပါ၊ ပြန်ပြောကြည့်ပါ။</span>';
            return;
        }

        if (currentSpkItem.lang === 'zh-TW') {
            if (!containsChinese(transcript)) {
                document.getElementById('spk-result').innerHTML = `<span class="text-rose-500">⚠️ တရုတ်စာလုံးသံ (中文) နဲ့သာ ပြောရပါမယ်! (Heard: "${escapeHtml(transcript)}")</span>`;
                return;
            }
            const cleanHeard = transcript.replace(/[^\u4e00-\u9fff]/g, '');
            if (cleanHeard.includes(currentSpkItem.targetText) || currentSpkItem.targetText.includes(cleanHeard)) {
                spkScore++;
                state.xp += 15;
                saveState();
                document.getElementById('spk-score').innerText = `Score: ${spkScore}`;
                document.getElementById('spk-result').innerHTML = '<span class="text-emerald-500">✅ Great 中文 pronunciation! +15 XP</span>';
            } else {
                document.getElementById('spk-result').innerHTML = `<span class="text-rose-500">❌ Try saying "${escapeHtml(currentSpkItem.targetText)}"</span>`;
            }
        } else {
            if (containsChinese(transcript) || !containsEnglish(transcript)) {
                document.getElementById('spk-result').innerHTML = '<span class="text-rose-500">⚠️ English အသံထွက်နဲ့သာ ပြောရပါမယ်!</span>';
                return;
            }
            const expected = currentSpkItem.targetText.toLowerCase();
            const heard = transcript.toLowerCase().replace(/[^a-z\s]/g, '').trim();
            if (heard.includes(expected) || expected.includes(heard)) {
                spkScore++;
                state.xp += 15;
                saveState();
                document.getElementById('spk-score').innerText = `Score: ${spkScore}`;
                document.getElementById('spk-result').innerHTML = '<span class="text-emerald-500">✅ Great English pronunciation! +15 XP</span>';
            } else {
                document.getElementById('spk-result').innerHTML = `<span class="text-rose-500">❌ Try saying "${escapeHtml(currentSpkItem.targetText)}"</span>`;
            }
        }
    };

    recognition.onerror = (event) => {
        const errCode = (event && event.error) ? event.error : 'unknown';

        // If zh-TW fails with language-not-supported or audio error once, try zh-CN fallback
        if (
            currentSpkItem.lang === 'zh-TW' &&
            langToUse === 'zh-TW' &&
            !triedChineseFallback &&
            (errCode === 'language-not-supported' || errCode === 'audio-capture' || errCode === 'not-allowed')
        ) {
            triedChineseFallback = true;
            startVoiceRecognition('zh-CN');
            return;
        }

        const errMessages = {
            'no-speech': '⚠️ အသံမကြားရပါ (no-speech) — Mic နားနည်းနည်းကပ်ပြီး ပြတ်ပြတ်သားသား ပြန်ပြောကြည့်ပါ။',
            'audio-capture': '⚠️ Microphone ဖမ်းလို့မရပါ (audio-capture) — Mic ချိတ်ထားမထား စစ်ပါ။',
            'not-allowed': '⚠️ Microphone ခွင့်ပြုချက် လိုပါတယ် (not-allowed) — Browser address bar ဘေးက icon မှာ Allow ပေးပါ။',
            'language-not-supported': '⚠️ Browser/System မှာ Chinese speech model မရှိပါ (language-not-supported)။',
            'network': '⚠️ Network error ဖြစ်နေပါတယ် (network) — Internet connection စစ်ပါ။'
        };
        const msg = errMessages[errCode] || `⚠️ Voice error (${escapeHtml(errCode)}) — တရုတ်လို ဖမ်းမရရင် Browser/System language settings စစ်ပါ။`;
        document.getElementById('spk-result').innerHTML = `<span class="text-rose-500">${msg}</span>`;
    };

    recognition.onend = () => {
        if (activeRecognition === recognition) {
            activeRecognition = null;
        }
    };

    try {
        recognition.start();
    } catch (e) {
        activeRecognition = null;
        document.getElementById('spk-result').innerHTML = '<span class="text-rose-500">⚠️ Could not start microphone.</span>';
    }
}

function pickBestVoice(lang) {
    const voices = loadVoicesList();
    if (!voices.length) return null;

    const target = lang.toLowerCase();
    const prefix = target.split('-')[0];

    let found = voices.find(v => v.lang && v.lang.toLowerCase() === target);
    if (found) return found;

    if (prefix === 'zh') {
        found = voices.find(v => v.lang && /^(zh|cmn)/i.test(v.lang));
        if (found) return found;
    }

    found = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(prefix));
    return found || null;
}

function speakWord(text, lang = 'en-US') {
    if (!text || !('speechSynthesis' in window)) return;

    try {
        window.speechSynthesis.cancel();
    } catch (e) {}

    const utterance = new SpeechSynthesisUtterance(text);
    activeUtterance = utterance;

    const chosenVoice = pickBestVoice(lang);
    if (chosenVoice) {
        utterance.voice = chosenVoice;
        utterance.lang = chosenVoice.lang;
    } else {
        utterance.lang = lang;
    }

    utterance.rate = state.ttsRate || 0.95;
    utterance.pitch = 1;

    utterance.onend = () => { activeUtterance = null; };
    utterance.onerror = () => { activeUtterance = null; };

    setTimeout(() => {
        try {
            window.speechSynthesis.speak(utterance);
        } catch (e) {}
    }, 60);
}

function speakCurrent(lang) {
    const word = currentWords[currentIndex];
    if (!word) return;
    speakWord(lang === 'zh-TW' ? word.zh : word.en, lang);
}

function goNextByShortcut() {
    const activeSec = getActiveSection();
    if (activeSec === 'flashcards-section') {
        nextCard();
    } else if (activeSec === 'speaking-section') {
        nextSpeakingWord();
    } else if (activeSec === 'quiz-section') {
        if (currentMode === 'typing') {
            checkTypingAnswer();
        } else {
            clearInterval(timerInterval);
            currentIndex++;
            loadQuizQuestion();
        }
    }
}

document.addEventListener('keydown', (e) => {
    const target = e.target;
    const isTypingField = target && (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable
    );

    if (e.key === 'Escape') {
        ['note-modal', 'feedback-modal', 'shortcut-modal', 'stats-modal', 'leaderboard-modal'].forEach(id => {
            const modal = document.getElementById(id);
            if (modal && !modal.classList.contains('hidden')) closeModal(id);
        });
        return;
    }

    const activeSec = getActiveSection();

    if (e.key === 'Enter' && activeSec === 'quiz-section' && currentMode === 'typing') {
        if (target && target.id === 'typing-input') {
            e.preventDefault();
            checkTypingAnswer();
            return;
        }
    }

    if (isTypingField) return;

    if (e.key === 'Enter') {
        if (activeSec === 'flashcards-section' || activeSec === 'speaking-section' || activeSec === 'quiz-section') {
            e.preventDefault();
            goNextByShortcut();
            return;
        }
    }

    if (activeSec === 'flashcards-section') {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextCard();
            return;
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevCard();
            return;
        }
    }

    if ((e.altKey && e.key === 'ArrowLeft') || e.key === 'Backspace') {
        if (activeSec !== 'home-section') {
            e.preventDefault();
            goBackSection();
        }
    }
});

function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('flex');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
    document.getElementById(id).classList.remove('flex');
}

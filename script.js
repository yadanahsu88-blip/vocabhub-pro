const baseVocab = [
    // ==================== 1. GREETINGS & DAILY (50 words) ====================
    { topic: "Greetings & Daily", en: "hello", zh: "你好", pinyin: "nǐ hǎo", zhuyin: "ㄋㄧˇ ㄏㄠˇ", my: "မင်္ဂလာပါ", emoji: "👋", ex: "Hello! How is your day going?" },
    { topic: "Greetings & Daily", en: "hi", zh: "嗨", pinyin: "hāi", zhuyin: "ㄏㄞ", my: "ဟိုင်း", emoji: "🙋", ex: "Hi there! Are you ready?" },
    { topic: "Greetings & Daily", en: "good morning", zh: "早安", pinyin: "zǎo ān", zhuyin: "ㄗㄠˇ ㄢ", my: "မင်္ဂလာနံနက်ခင်းပါ", emoji: "🌅", ex: "Good morning! Time to wake up." },
    { topic: "Greetings & Daily", en: "good afternoon", zh: "午安", pinyin: "wǔ ān", zhuyin: "ㄨˇ ㄢ", my: "မင်္ဂလာနေ့လယ်ခင်းပါ", emoji: "☀️", ex: "Good afternoon! Did you eat lunch?" },
    { topic: "Greetings & Daily", en: "good evening", zh: "晚安 / 傍晚好", pinyin: "wǎn ān / bàng wǎn hǎo", zhuyin: "ㄨㄢˇ ㄢ / ㄅㄤˋ ㄨㄢˇ ㄏㄠˇ", my: "မင်္ဂလာညနေခင်းပါ", emoji: "🌆", ex: "Good evening! The sky looks orange." },
    { topic: "Greetings & Daily", en: "good night", zh: "晚安", pinyin: "wǎn ān", zhuyin: "ㄨㄢˇ ㄢ", my: "ကောင်းသောညပါ", emoji: "🌙", ex: "Good night! Sleep well tonight." },
    { topic: "Greetings & Daily", en: "goodbye", zh: "再見", pinyin: "zài jiàn", zhuyin: "ㄗㄞˋ ㄐㄧㄢˋ", my: "နှုတ်ဆက်ပါတယ် / တာ့တာ", emoji: "🖐️", ex: "Goodbye! See you next week." },
    { topic: "Greetings & Daily", en: "please", zh: "請", pinyin: "qǐng", zhuyin: "ㄑㄧㄥˇ", my: "ကျေးဇူးပြု၍", emoji: "🙂", ex: "Please open the window a bit." },
    { topic: "Greetings & Daily", en: "thank you", zh: "謝謝", pinyin: "xiè xie", zhuyin: "ㄒㄧㄝˋ ˙ㄒㄧㄝ", my: "ကျေးဇူးတင်ပါတယ်", emoji: "💖", ex: "Thank you for your kind help." },
    { topic: "Greetings & Daily", en: "thanks", zh: "感謝", pinyin: "gǎn xiè", zhuyin: "ㄍㄢˇ ㄒㄧㄝˋ", my: "ကျေးဇူးပဲ", emoji: "✨", ex: "Thanks for saving my seat!" },
    { topic: "Greetings & Daily", en: "sorry", zh: "對不起", pinyin: "duì bù qǐ", zhuyin: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ", my: "တောင်းပန်ပါတယ်", emoji: "🙇", ex: "Sorry for replying so late." },
    { topic: "Greetings & Daily", en: "excuse me", zh: "不好意思 / 請問", pinyin: "bù hǎo yì si / qǐng wèn", zhuyin: "ㄅㄨˋ ㄏㄠˇ ㄧˋ ˙ㄙ / ㄑㄧㄥˇ ㄨㄣˋ", my: "ခွင့်ပြုပါ / မေးခွင့်ပြုပါ", emoji: "🙋‍♀️", ex: "Excuse me, where is the exit?" },
    { topic: "Greetings & Daily", en: "welcome", zh: "歡迎", pinyin: "huān yíng", zhuyin: "ㄏㄨㄢ ㄧㄥˊ", my: "ကြိုဆိုပါတယ်", emoji: "🎉", ex: "Welcome to our study group!" },
    { topic: "Greetings & Daily", en: "yes", zh: "是的", pinyin: "shì de", zhuyin: "ㄕˋ ㄉㄜ˙", my: "ဟုတ်ကဲ့", emoji: "⭕", ex: "Yes, I finished the task." },
    { topic: "Greetings & Daily", en: "no", zh: "不是 / 不", pinyin: "bù shì / bù", zhuyin: "ㄅㄨˋ ㄕˋ / ㄅㄨˋ", my: "မဟုတ်ပါဘူး / မဟုတ်ဘူး", emoji: "✖️", ex: "No, I do not need extra help." },
    { topic: "Greetings & Daily", en: "okay", zh: "好的 / 可以", pinyin: "hǎo de / kě yǐ", zhuyin: "ㄏㄠˇ ㄉㄜ˙ / ㄎㄜˇ ㄧˇ", my: "အိုကေ / ရတယ်", emoji: "👌", ex: "Okay, let's meet at four." },
    { topic: "Greetings & Daily", en: "help", zh: "幫助", pinyin: "bāng zhù", zhuyin: "ㄅㄤ ㄓㄨˋ", my: "ကူညီသည်", emoji: "🛟", ex: "Can you help me fix this?" },
    { topic: "Greetings & Daily", en: "wait", zh: "等一下", pinyin: "děng yí xià", zhuyin: "ㄉㄥˇ ㄧˊ ㄒㄧㄚˋ", my: "ခဏစောင့်ပါ", emoji: "⏳", ex: "Wait a moment, I am packing." },
    { topic: "Greetings & Daily", en: "today", zh: "今天", pinyin: "jīn tiān", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ", my: "ဒီနေ့", emoji: "📅", ex: "Today feels warm and sunny." },
    { topic: "Greetings & Daily", en: "tomorrow", zh: "明天", pinyin: "míng tiān", zhuyin: "ㄇㄧㄥˊ ㄊㄧㄢ", my: "မနက်ဖြန်", emoji: "⏭️", ex: "We have a quiz tomorrow." },
    { topic: "Greetings & Daily", en: "yesterday", zh: "昨天", pinyin: "zuó tiān", zhuyin: "ㄗㄨㄛˊ ㄊㄧㄢ", my: "မနေ့က", emoji: "⏮️", ex: "Yesterday I practiced speaking." },
    { topic: "Greetings & Daily", en: "now", zh: "現在", pinyin: "xiàn zài", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ", my: "အခု", emoji: "⏱️", ex: "I am doing my notes now." },
    { topic: "Greetings & Daily", en: "later", zh: "晚一點 / 之後", pinyin: "wǎn yì diǎn / zhī hòu", zhuyin: "ㄨㄢˇ ㄧˋ ㄉㄧㄢˇ / ㄓ ㄏㄡˋ", my: "နောက်မှ", emoji: "🕒", ex: "Let's talk later after dinner." },
    { topic: "Greetings & Daily", en: "early", zh: "早", pinyin: "zǎo", zhuyin: "ㄗㄠˇ", my: "စောစော", emoji: "🐦", ex: "Try to arrive early at school." },
    { topic: "Greetings & Daily", en: "late", zh: "晚 / 遲到", pinyin: "wǎn / chí dào", zhuyin: "ㄨㄢˇ / ㄔˊ ㄉㄠˋ", my: "နောက်ကျသော / နောက်ကျသည်", emoji: "🐢", ex: "Do not stay up too late." },
    { topic: "Greetings & Daily", en: "morning", zh: "早上", pinyin: "zǎo shang", zhuyin: "ㄗㄠˇ ˙ㄕㄤ", my: "မနက်ခင်း", emoji: "🌄", ex: "I review vocab in the morning." },
    { topic: "Greetings & Daily", en: "afternoon", zh: "下午", pinyin: "xià wǔ", zhuyin: "ㄒㄧㄚˋ ㄨˇ", my: "နေ့လယ်ခင်း / မွန်းလွဲ", emoji: "🌤️", ex: "The afternoon breeze is nice." },
    { topic: "Greetings & Daily", en: "evening", zh: "晚上 / 傍晚", pinyin: "wǎn shang / bàng wǎn", zhuyin: "ㄨㄢˇ ˙ㄕㄤ / ㄅㄤˋ ㄨㄢˇ", my: "ညနေခင်း", emoji: "🌇", ex: "We walk around in the evening." },
    { topic: "Greetings & Daily", en: "night", zh: "夜晚", pinyin: "yè wǎn", zhuyin: "ㄧㄝˋ ㄨㄢˇ", my: "ည", emoji: "🌌", ex: "Stars shine bright at night." },
    { topic: "Greetings & Daily", en: "home", zh: "家", pinyin: "jiā", zhuyin: "ㄐㄧㄚ", my: "အိမ်", emoji: "🏠", ex: "I head home after class." },
    { topic: "Greetings & Daily", en: "room", zh: "房間", pinyin: "fáng jiān", zhuyin: "ㄈㄤˊ ㄐㄧㄢ", my: "အခန်း", emoji: "🚪", ex: "Keep your room clean and bright." },
    { topic: "Greetings & Daily", en: "door", zh: "門", pinyin: "mén", zhuyin: "ㄇㄣˊ", my: "တံခါး", emoji: "🚪", ex: "Please close the door softly." },
    { topic: "Greetings & Daily", en: "window", zh: "窗戶", pinyin: "chuāng hù", zhuyin: "ㄔㄨㄤ ㄏㄨˋ", my: "ပြတင်းပေါက်", emoji: "🪟", ex: "Open the window for fresh air." },
    { topic: "Greetings & Daily", en: "key", zh: "鑰匙", pinyin: "yào shi", zhuyin: "ㄧㄠˋ ˙ㄕ", my: "သော့", emoji: "🔑", ex: "Did you put your key in your bag?" },
    { topic: "Greetings & Daily", en: "bag", zh: "包包", pinyin: "bāo bāo", zhuyin: "ㄅㄠ ㄅㄠ", my: "အိတ်", emoji: "🎒", ex: "My bag is on the chair." },
    { topic: "Greetings & Daily", en: "clothes", zh: "衣服", pinyin: "yī fu", zhuyin: "ㄧ ˙ㄈㄨ", my: "အဝတ်အစား", emoji: "👕", ex: "Fold your clothes before sleeping." },
    { topic: "Greetings & Daily", en: "shoes", zh: "鞋子", pinyin: "xié zi", zhuyin: "ㄒㄧㄝˊ ˙ㄗ", my: "ဖိနပ်", emoji: "👟", ex: "Put on comfortable shoes to walk." },
    { topic: "Greetings & Daily", en: "clean", zh: "乾淨的 / 打掃", pinyin: "gān jìng de / dǎ sǎo", zhuyin: "ㄍㄢ ㄐㄧㄥˋ ㄉㄜ˙ / ㄉㄚˇ ㄙㄠˇ", my: "သန့်ရှင်းသော / သန့်ရှင်းရေးလုပ်သည်", emoji: "🧹", ex: "Clean the desk before starting." },
    { topic: "Greetings & Daily", en: "open", zh: "打開", pinyin: "dǎ kāi", zhuyin: "ㄉㄚˇ ㄎㄞ", my: "ဖွင့်သည်", emoji: "🔓", ex: "Open the box carefully." },
    { topic: "Greetings & Daily", en: "close", zh: "關上", pinyin: "guān shàng", zhuyin: "ㄍㄨㄢ ㄕㄤˋ", my: "ပိတ်သည်", emoji: "🔒", ex: "Close your eyes and rest." },
    { topic: "Greetings & Daily", en: "start", zh: "開始", pinyin: "kāi shǐ", zhuyin: "ㄎㄞ ㄕˇ", my: "စတင်သည်", emoji: "▶️", ex: "Let's start with level one." },
    { topic: "Greetings & Daily", en: "finish", zh: "完成 / 結束", pinyin: "wán chéng / jié shù", zhuyin: "ㄨㄢˊ ㄔㄥˊ / ㄐㄧㄝˊ ㄕㄨˋ", my: "ပြီးဆုံးသည်", emoji: "🏁", ex: "I finish my chores on time." },
    { topic: "Greetings & Daily", en: "try", zh: "嘗試", pinyin: "cháng shì", zhuyin: "ㄔㄤˊ ㄕˋ", my: "ကြိုးစားကြည့်သည်", emoji: "🌱", ex: "Try speaking without fear." },
    { topic: "Greetings & Daily", en: "need", zh: "需要", pinyin: "xū yào", zhuyin: "ㄒㄩ ㄧㄠˋ", my: "လိုအပ်သည်", emoji: "📌", ex: "I need a quiet place to read." },
    { topic: "Greetings & Daily", en: "want", zh: "想要", pinyin: "xiǎng yào", zhuyin: "ㄒㄧㄤˇ ㄧㄠˋ", my: "လိုချင်သည်", emoji: "💭", ex: "I want to learn new words." },
    { topic: "Greetings & Daily", en: "have", zh: "有", pinyin: "yǒu", zhuyin: "ㄧㄡˇ", my: "ရှိသည်", emoji: "🤲", ex: "We have ten minutes left." },
    { topic: "Greetings & Daily", en: "see", zh: "看見", pinyin: "kàn jiàn", zhuyin: "ㄎㄢˋ ㄐㄧㄢˋ", my: "မြင်သည်", emoji: "👀", ex: "See you tomorrow morning!" },
    { topic: "Greetings & Daily", en: "hear", zh: "聽見", pinyin: "tīng jiàn", zhuyin: "ㄊㄧㄥ ㄐㄧㄢˋ", my: "ကြားသည်", emoji: "👂", ex: "Can you hear the audio clearly?" },
    { topic: "Greetings & Daily", en: "say", zh: "說", pinyin: "shuō", zhuyin: "ㄕㄨㄛ", my: "ပြောသည်", emoji: "🗣️", ex: "Say the word out loud." },
    { topic: "Greetings & Daily", en: "name", zh: "名字", pinyin: "míng zi", zhuyin: "ㄇㄧㄥˊ ˙ㄗ", my: "နာမည်", emoji: "🏷️", ex: "What is your favorite character's name?" },

    // ==================== 2. SCHOOL & STUDY (50 words) ====================
    { topic: "School & Study", en: "school", zh: "學校", pinyin: "xué xiào", zhuyin: "ㄒㄩㄝˊ ㄒㄧㄠˋ", my: "ကျောင်း", emoji: "🏫", ex: "School starts early in the morning." },
    { topic: "School & Study", en: "class", zh: "班級 / 課程", pinyin: "bān jí / kè chéng", zhuyin: "ㄅㄢ ㄐㄧˊ / ㄎㄜˋ ㄔㄥˊ", my: "အတန်း / သင်ခန်းစာ", emoji: "📚", ex: "Our class is full of energy." },
    { topic: "School & Study", en: "teacher", zh: "老師", pinyin: "lǎo shī", zhuyin: "ㄌㄠˇ ㄕ", my: "ဆရာ / ဆရာမ", emoji: "👩‍🏫", ex: "The teacher explains grammar clearly." },
    { topic: "School & Study", en: "student", zh: "學生", pinyin: "xué shēng", zhuyin: "ㄒㄩㄝˊ ㄕㄥ", my: "ကျောင်းသား / ကျောင်းသူ", emoji: "🧑‍🎓", ex: "Every student brings fresh ideas." },
    { topic: "School & Study", en: "book", zh: "書本", pinyin: "shū běn", zhuyin: "ㄕㄨ ㄅㄣˇ", my: "စာအုပ်", emoji: "📘", ex: "This book has great examples." },
    { topic: "School & Study", en: "notebook", zh: "筆記本", pinyin: "bǐ jì běn", zhuyin: "ㄅㄧˇ ㄐㄧˋ ㄅㄣˇ", my: "မှတ်စုစာအုပ်", emoji: "📓", ex: "Write new words in your notebook." },
    { topic: "School & Study", en: "pen", zh: "原子筆 / 筆", pinyin: "yuán zǐ bǐ / bǐ", zhuyin: "ㄩㄢˊ ㄗˇ ㄅㄧˇ / ㄅㄧˇ", my: "ဘောပင် / ဘောလ်ပင်", emoji: "🖊️", ex: "Keep an extra pen in your case." },
    { topic: "School & Study", en: "pencil", zh: "鉛筆", pinyin: "qiān bǐ", zhuyin: "ㄑㄧㄢ ㄅㄧˇ", my: "ခဲတံ", emoji: "✏️", ex: "Use a pencil for rough sketches." },
    { topic: "School & Study", en: "eraser", zh: "橡皮擦", pinyin: "xiàng pí cā", zhuyin: "ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ", my: "ခဲဖျက်", emoji: "🧽", ex: "An eraser fixes small mistakes." },
    { topic: "School & Study", en: "ruler", zh: "尺", pinyin: "chǐ", zhuyin: "ㄔˇ", my: "ပေတံ", emoji: "📏", ex: "Draw a straight line with a ruler." },
    { topic: "School & Study", en: "desk", zh: "書桌", pinyin: "shū zhuō", zhuyin: "ㄕㄨ ㄓㄨㄛ", my: "စာရေးစားပွဲ", emoji: "🪑", ex: "My notes are neatly on the desk." },
    { topic: "School & Study", en: "chair", zh: "椅子", pinyin: "yǐ zi", zhuyin: "ㄧˇ ˙ㄗ", my: "ကုလားထိုင်", emoji: "💺", ex: "Push the chair in before leaving." },
    { topic: "School & Study", en: "board", zh: "黑板 / 白板", pinyin: "hēi bǎn / bái bǎn", zhuyin: "ㄏㄟ ㄅㄢˇ / ㄅㄞˊ ㄅㄢˇ", my: "ကျောက်သင်ပုန်း / ဘုတ်ပြား", emoji: "📋", ex: "Copy the key points from the board." },
    { topic: "School & Study", en: "page", zh: "頁", pinyin: "yè", zhuyin: "ㄧㄝˋ", my: "စာမျက်နှာ", emoji: "📄", ex: "Turn to page twenty-four." },
    { topic: "School & Study", en: "word", zh: "單字 / 字詞", pinyin: "dān zì / zì cí", zhuyin: "ㄉㄢ ㄗˋ / ㄗˋ ㄘˊ", my: "စကားလုံး", emoji: "🔤", ex: "Learn five new words a day." },
    { topic: "School & Study", en: "sentence", zh: "句子", pinyin: "jù zi", zhuyin: "ㄐㄩˋ ˙ㄗ", my: "ဝါကျ", emoji: "💬", ex: "Make a short sentence with this word." },
    { topic: "School & Study", en: "meaning", zh: "意思 / 意義", pinyin: "yì si / yì yì", zhuyin: "ㄧˋ ˙ㄙ / ㄧˋ ㄧˋ", my: "အဓိပ္ပာယ်", emoji: "💡", ex: "Look up the meaning in context." },
    { topic: "School & Study", en: "pronounce", zh: "發音", pinyin: "fā yīn", zhuyin: "ㄈㄚ ㄧㄣ", my: "အသံထွက်သည်", emoji: "🎙️", ex: "Listen and pronounce it slowly." },
    { topic: "School & Study", en: "read", zh: "閱讀", pinyin: "yuè dú", zhuyin: "ㄩㄝˋ ㄉㄨˊ", my: "ဖတ်သည်", emoji: "📖", ex: "Read the passage twice for details." },
    { topic: "School & Study", en: "write", zh: "寫", pinyin: "xiě", zhuyin: "ㄒㄧㄝˇ", my: "ရေးသည်", emoji: "✍️", ex: "Write your ideas down quickly." },
    { topic: "School & Study", en: "listen", zh: "聆聽", pinyin: "líng tīng", zhuyin: "ㄌㄧㄥˊ ㄊㄧㄥ", my: "နားထောင်သည်", emoji: "🎧", ex: "Listen to native audio every day." },
    { topic: "School & Study", en: "speak", zh: "說 / 講話", pinyin: "shuō / jiǎng huà", zhuyin: "ㄕㄨㄛ / ㄐㄧㄤˇ ㄏㄨㄚˋ", my: "ပြောဆိုသည်", emoji: "🎤", ex: "Speak clearly during the test." },
    { topic: "School & Study", en: "learn", zh: "學習", pinyin: "xué xí", zhuyin: "ㄒㄩㄝˊ ㄒㄧˊ", my: "သင်ယူသည်", emoji: "🌱", ex: "We learn faster when we enjoy it." },
    { topic: "School & Study", en: "study", zh: "讀書 / 學習", pinyin: "dú shū / xué xí", zhuyin: "ㄉㄨˊ ㄕㄨ / ㄒㄩㄝˊ ㄒㄧˊ", my: "စာကျက်သည် / လေ့လာသည်", emoji: "🕯️", ex: "Study in short focused blocks." },
    { topic: "School & Study", en: "review", zh: "複習", pinyin: "fù xí", zhuyin: "ㄈㄨˋ ㄒㄧˊ", my: "ပြန်လည်လေ့လာသည် / ပြန်နွှေးသည်", emoji: "🔁", ex: "Review flashcards before bed." },
    { topic: "School & Study", en: "practice", zh: "練習", pinyin: "liàn xí", zhuyin: "ㄌㄧㄢˋ ㄒㄧˊ", my: "လေ့ကျင့်သည်", emoji: "🎯", ex: "Practice makes skills smoother." },
    { topic: "School & Study", en: "homework", zh: "作業", pinyin: "zuò yè", zhuyin: "ㄗㄨㄛˋ ㄧㄝˋ", my: "အိမ်စာ", emoji: "📝", ex: "Finish homework before playing games." },
    { topic: "School & Study", en: "project", zh: "專題 / 計畫", pinyin: "zhuān tí / jì huà", zhuyin: "ㄓㄨㄢ ㄊㄧˊ / ㄐㄧˋ ㄏㄨㄚˋ", my: "ပရောဂျက် / စီမံကိန်း", emoji: "🛠️", ex: "Our group project looks awesome." },
    { topic: "School & Study", en: "question", zh: "問題", pinyin: "wèn tí", zhuyin: "ㄨㄣˋ ㄊㄧˊ", my: "မေးခွန်း", emoji: "❓", ex: "Ask a question if anything is unclear." },
    { topic: "School & Study", en: "answer", zh: "答案 / 回答", pinyin: "dá àn / huí dá", zhuyin: "ㄉㄚˊ ㄢˋ / ㄏㄨㄟˊ ㄉㄚˊ", my: "အဖြေ / ဖြေသည်", emoji: "✅", ex: "Check your answer before submitting." },
    { topic: "School & Study", en: "exam", zh: "考試", pinyin: "kǎo shì", zhuyin: "ㄎㄠˇ ㄕˋ", my: "စာမေးပွဲ", emoji: "📊", ex: "Stay calm during the exam." },
    { topic: "School & Study", en: "test", zh: "測驗", pinyin: "cè yàn", zhuyin: "ㄘㄜˋ ㄧㄢˋ", my: "စာမေးပွဲ / စမ်းသပ်ချက်", emoji: "🧪", ex: "This speaking test checks your voice." },
    { topic: "School & Study", en: "quiz", zh: "小考", pinyin: "xiǎo kǎo", zhuyin: "ㄒㄧㄠˇ ㄎㄠˇ", my: "ဉာဏ်စမ်း / အတန်းတွင်းစစ်", emoji: "⚡", ex: "A quick quiz wakes up your brain." },
    { topic: "School & Study", en: "score", zh: "分數", pinyin: "fēn shù", zhuyin: "ㄈㄣ ㄕㄨˋ", my: "ရမှတ် / အမှတ်", emoji: "🏅", ex: "Your score goes up with practice." },
    { topic: "School & Study", en: "mistake", zh: "錯誤", pinyin: "cuò wù", zhuyin: "ㄘㄨㄛˋ ㄨˋ", my: "အမှား", emoji: "⚠️", ex: "Every mistake teaches a lesson." },
    { topic: "School & Study", en: "correct", zh: "正確的", pinyin: "zhèng què de", zhuyin: "ㄓㄥˋ ㄑㄩㄝˋ ㄉㄜ˙", my: "မှန်ကန်သော", emoji: "✔️", ex: "That is the correct spelling." },
    { topic: "School & Study", en: "remember", zh: "記得", pinyin: "jì de", zhuyin: "ㄐㄧˋ ㄉㄜ˙", my: "မှတ်မိသည်", emoji: "📌", ex: "Remember to save your progress." },
    { topic: "School & Study", en: "forget", zh: "忘記", pinyin: "wàng jì", zhuyin: "ㄨㄤˋ ㄐㄧˋ", my: "မေ့သည်", emoji: "🍃", ex: "Do not forget your student card." },
    { topic: "School & Study", en: "understand", zh: "理解 / 懂", pinyin: "lǐ jiě / dǒng", zhuyin: "ㄌㄧˇ ㄐㄧㄝˇ / ㄉㄨㄥˇ", my: "နားလည်သည်", emoji: "🧠", ex: "Now I understand how it works." },
    { topic: "School & Study", en: "explain", zh: "解釋", pinyin: "jiě shì", zhuyin: "ㄐㄧㄝˇ ㄕˋ", my: "ရှင်းပြသည်", emoji: "🗣️", ex: "Can you explain this step again?" },
    { topic: "School & Study", en: "example", zh: "例子", pinyin: "lì zi", zhuyin: "ㄌㄧˋ ˙ㄗ", my: "ဥပမာ", emoji: "📎", ex: "Read the example carefully." },
    { topic: "School & Study", en: "dictionary", zh: "字典", pinyin: "zì diǎn", zhuyin: "ㄗˋ ㄉㄧㄢˇ", my: "အဘိဓာန်", emoji: "📕", ex: "A dictionary helps check new words." },
    { topic: "School & Study", en: "library", zh: "圖書館", pinyin: "tú shū guǎn", zhuyin: "ㄊㄨˊ ㄕㄨ ㄍㄨㄢˇ", my: "စာကြည့်တိုက်", emoji: "🏛️", ex: "The library is quiet for studying." },
    { topic: "School & Study", en: "subject", zh: "科目", pinyin: "kē mù", zhuyin: "ㄎㄜ ㄇㄨˋ", my: "ဘာသာရပ်", emoji: "🗂️", ex: "Languages are my favorite subject." },
    { topic: "School & Study", en: "language", zh: "語言", pinyin: "yǔ yán", zhuyin: "ㄩˇ ㄧㄢˊ", my: "ဘာသာစကား", emoji: "🌐", ex: "Learning a new language opens doors." },
    { topic: "School & Study", en: "english", zh: "英文", pinyin: "yīng wén", zhuyin: "ㄧㄥ ㄨㄣˊ", my: "အင်္ဂလိပ်စာ", emoji: "🅰️", ex: "English is useful worldwide." },
    { topic: "School & Study", en: "chinese", zh: "中文", pinyin: "zhōng wén", zhuyin: "ㄓㄨㄥ ㄨㄣˊ", my: "တရုတ်စာ / တရုတ်ဘာသာ", emoji: "🀄", ex: "Chinese tones take fun practice." },
    { topic: "School & Study", en: "burmese", zh: "緬甸文", pinyin: "miǎn diàn wén", zhuyin: "ㄇㄧㄢˇ ㄉㄧㄢˋ ㄨㄣˊ", my: "မြန်မာစာ / မြန်မာဘာသာ", emoji: "🇲🇲", ex: "Burmese script has round graceful letters." },
    { topic: "School & Study", en: "focus", zh: "專注", pinyin: "zhuān zhù", zhuyin: "ㄓㄨㄢ ㄓㄨˋ", my: "အာရုံစိုက်သည်", emoji: "🎯", ex: "Focus on one task at a time." },
    { topic: "School & Study", en: "smart", zh: "聰明的", pinyin: "cōng míng de", zhuyin: "ㄘㄨㄥ ㄇㄧㄥˊ ㄉㄜ˙", my: "ဉာဏ်ကောင်းသော / ထက်မြက်သော", emoji: "🦊", ex: "Smart study beats late cramming." },

    // ==================== 3. FOOD & DRINKS (50 words) ====================
    { topic: "Food & Drinks", en: "food", zh: "食物", pinyin: "shí wù", zhuyin: "ㄕˊ ㄨˋ", my: "အစားအစာ", emoji: "🍽️", ex: "Good food makes everyone smile." },
    { topic: "Food & Drinks", en: "water", zh: "水", pinyin: "shuǐ", zhuyin: "ㄕㄨㄟˇ", my: "ရေ", emoji: "💧", ex: "Keep a water bottle nearby." },
    { topic: "Food & Drinks", en: "rice", zh: "米飯", pinyin: "mǐ fàn", zhuyin: "ㄇㄧˇ ㄈㄢˋ", my: "ထမင်း / ဆန်", emoji: "🍚", ex: "Steamed rice goes with many dishes." },
    { topic: "Food & Drinks", en: "noodles", zh: "麵條", pinyin: "miàn tiáo", zhuyin: "ㄇㄧㄢˋ ㄊㄧㄠˊ", my: "ခေါက်ဆွဲ", emoji: "🍜", ex: "Warm noodles hit the spot." },
    { topic: "Food & Drinks", en: "soup", zh: "湯", pinyin: "tāng", zhuyin: "ㄊㄤ", my: "ဟင်းချို / စွပ်ပြုတ်", emoji: "🥣", ex: "Hot soup feels comforting." },
    { topic: "Food & Drinks", en: "bread", zh: "麵包", pinyin: "miàn bāo", zhuyin: "ㄇㄧㄢˋ ㄅㄠ", my: "ပေါင်မုန့်", emoji: "🍞", ex: "Toast bread for a quick bite." },
    { topic: "Food & Drinks", en: "egg", zh: "蛋", pinyin: "dàn", zhuyin: "ㄉㄢˋ", my: "ကြက်ဥ / ဘဲဥ", emoji: "🥚", ex: "An egg is a simple protein." },
    { topic: "Food & Drinks", en: "meat", zh: "肉", pinyin: "ròu", zhuyin: "ㄖㄡˋ", my: "အသား", emoji: "🥩", ex: "Slice the meat thin before cooking." },
    { topic: "Food & Drinks", en: "chicken", zh: "雞肉", pinyin: "jī ròu", zhuyin: "ㄐㄧ ㄖㄡˋ", my: "ကြက်သား", emoji: "🍗", ex: "Grilled chicken is super tasty." },
    { topic: "Food & Drinks", en: "fish", zh: "魚", pinyin: "yú", zhuyin: "ㄩˊ", my: "ငါး", emoji: "🐟", ex: "Fresh fish cooks quickly." },
    { topic: "Food & Drinks", en: "vegetable", zh: "蔬菜", pinyin: "shū cài", zhuyin: "ㄕㄨ ㄘㄞˋ", my: "ဟင်းသီးဟင်းရွက်", emoji: "🥦", ex: "Eat colorful vegetables daily." },
    { topic: "Food & Drinks", en: "fruit", zh: "水果", pinyin: "shuǐ guǒ", zhuyin: "ㄕㄨㄟˇ ㄍㄨㄛˇ", my: "သစ်သီး", emoji: "🍓", ex: "Fruit is a sweet healthy snack." },
    { topic: "Food & Drinks", en: "apple", zh: "蘋果", pinyin: "píng guǒ", zhuyin: "ㄆㄧㄥˊ ㄍㄨㄛˇ", my: "ပန်းသီး", emoji: "🍎", ex: "A crisp apple refreshes you." },
    { topic: "Food & Drinks", en: "banana", zh: "香蕉", pinyin: "xiāng jiāo", zhuyin: "ㄒㄧㄤ ㄐㄧㄠ", my: "ငှက်ပျောသီး", emoji: "🍌", ex: "Bananas give quick energy." },
    { topic: "Food & Drinks", en: "mango", zh: "芒果", pinyin: "máng guǒ", zhuyin: "ㄇㄤˊ ㄍㄨㄛˇ", my: "သရက်သီး", emoji: "🥭", ex: "Sweet mango smells so good." },
    { topic: "Food & Drinks", en: "orange", zh: "柳丁 / 橘子", pinyin: "liǔ dīng / jú zi", zhuyin: "ㄌㄧㄡˇ ㄉㄧㄥ / ㄐㄩˊ ˙ㄗ", my: "လိမ္မော်သီး", emoji: "🍊", ex: "Oranges are juicy and fresh." },
    { topic: "Food & Drinks", en: "milk", zh: "牛奶", pinyin: "niú nǎi", zhuyin: "ㄋㄧㄡˊ ㄋㄞˇ", my: "နွားနို့", emoji: "🥛", ex: "Warm milk helps you relax." },
    { topic: "Food & Drinks", en: "tea", zh: "茶", pinyin: "chá", zhuyin: "ㄔㄚˊ", my: "လက်ဖက်ရည် / လက်ဖက်ခြောက်", emoji: "🍵", ex: "Green tea tastes light and clean." },
    { topic: "Food & Drinks", en: "milk tea", zh: "奶茶", pinyin: "nǎi chá", zhuyin: "ㄋㄞˇ ㄔㄚˊ", my: "နို့လက်ဖက်ရည်", emoji: "🧋", ex: "I order milk tea with less ice." },
    { topic: "Food & Drinks", en: "coffee", zh: "咖啡", pinyin: "kā fēi", zhuyin: "ㄎㄚ ㄈㄟ", my: "ကော်ဖီ", emoji: "☕", ex: "Coffee has a strong aroma." },
    { topic: "Food & Drinks", en: "juice", zh: "果汁", pinyin: "guǒ zhī", zhuyin: "ㄍㄨㄛˇ ㄓ", my: "သစ်သီးဖျော်ရည်", emoji: "🧃", ex: "Cold juice feels great in summer." },
    { topic: "Food & Drinks", en: "snack", zh: "點心 / 零食", pinyin: "diǎn xīn / líng shí", zhuyin: "ㄉㄧㄢˇ ㄒㄧㄣ / ㄌㄧㄥˊ ㄕˊ", my: "မုန့် / သရေစာ", emoji: "🍿", ex: "Grab a small snack during break." },
    { topic: "Food & Drinks", en: "cake", zh: "蛋糕", pinyin: "dàn gāo", zhuyin: "ㄉㄢˋ ㄍㄠ", my: "ကိတ်မုန့်", emoji: "🍰", ex: "Share the cake with friends." },
    { topic: "Food & Drinks", en: "ice cream", zh: "冰淇淋", pinyin: "bīng qí lín", zhuyin: "ㄅㄧㄥ ㄑㄧˊ ㄌㄧㄣˊ", my: "ရေခဲမုန့်", emoji: "🍨", ex: "Ice cream is a fun treat." },
    { topic: "Food & Drinks", en: "breakfast", zh: "早餐", pinyin: "zǎo cān", zhuyin: "ㄗㄠˇ ㄘㄢ", my: "မနက်စာ", emoji: "🥐", ex: "Breakfast fuels your morning." },
    { topic: "Food & Drinks", en: "lunch", zh: "午餐", pinyin: "wǔ cān", zhuyin: "ㄨˇ ㄘㄢ", my: "နေ့လယ်စာ", emoji: "🍱", ex: "We eat lunch at noon." },
    { topic: "Food & Drinks", en: "dinner", zh: "晚餐", pinyin: "wǎn cān", zhuyin: "ㄨㄢˇ ㄘㄢ", my: "ညစာ", emoji: "🍲", ex: "Dinner time is relaxing." },
    { topic: "Food & Drinks", en: "hungry", zh: "肚子餓", pinyin: "dù zi è", zhuyin: "ㄉㄨˋ ˙ㄗ ㄜˋ", my: "ဗိုက်ဆာသည်", emoji: "😋", ex: "I feel hungry right now." },
    { topic: "Food & Drinks", en: "full", zh: "飽了", pinyin: "bǎo le", zhuyin: "ㄅㄠˇ ˙ㄌㄜ", my: "ဗိုက်ပြည့်ပြီ", emoji: "😌", ex: "I am full after that meal." },
    { topic: "Food & Drinks", en: "thirsty", zh: "口渴", pinyin: "kǒu kě", zhuyin: "ㄎㄡˇ ㄎㄜˇ", my: "ရေငတ်သည်", emoji: "💦", ex: "Drink water when thirsty." },
    { topic: "Food & Drinks", en: "delicious", zh: "好吃的", pinyin: "hǎo chī de", zhuyin: "ㄏㄠˇ ㄔ ㄉㄜ˙", my: "အရသာရှိသော", emoji: "🤤", ex: "This dish is super delicious!" },
    { topic: "Food & Drinks", en: "sweet", zh: "甜的", pinyin: "tián de", zhuyin: "ㄊㄧㄢˊ ㄉㄜ˙", my: "ချိုသော", emoji: "🍬", ex: "Sweet desserts make me happy." },
    { topic: "Food & Drinks", en: "spicy", zh: "辣的", pinyin: "là de", zhuyin: "ㄌㄚˋ ㄉㄜ˙", my: "စပ်သော", emoji: "🌶️", ex: "Be careful if you hate spicy food." },
    { topic: "Food & Drinks", en: "sour", zh: "酸的", pinyin: "suān de", zhuyin: "ㄙㄨㄢ ㄉㄜ˙", my: "ချဉ်သော", emoji: "🍋", ex: "Lemon juice tastes very sour." },
    { topic: "Food & Drinks", en: "salty", zh: "鹹的", pinyin: "xián de", zhuyin: "ㄒㄧㄢˊ ㄉㄜ˙", my: "ငန်သော", emoji: "🧂", ex: "Add a pinch of salt if needed." },
    { topic: "Food & Drinks", en: "hot", zh: "熱的 / 燙的", pinyin: "rè de / tàng de", zhuyin: "ㄖㄜˋ ㄉㄜ˙ / ㄊㄤˋ ㄉㄜ˙", my: "ပူသော", emoji: "🔥", ex: "Blow gently on hot food." },
    { topic: "Food & Drinks", en: "cold", zh: "冰的 / 冷的", pinyin: "bīng de / lěng de", zhuyin: "ㄅㄧㄥ ㄉㄜ˙ / ㄌㄥˇ ㄉㄜ˙", my: "အေးသော", emoji: "🧊", ex: "Cold drinks are nice in heat." },
    { topic: "Food & Drinks", en: "eat", zh: "吃", pinyin: "chī", zhuyin: "ㄔ", my: "စားသည်", emoji: "🍴", ex: "Eat slowly and enjoy food." },
    { topic: "Food & Drinks", en: "drink", zh: "喝", pinyin: "hē", zhuyin: "ㄏㄜ", my: "သောက်သည်", emoji: "🥤", ex: "Drink plenty of plain water." },
    { topic: "Food & Drinks", en: "cook", zh: "煮 / 烹飪", pinyin: "zhǔ / pēng rèn", zhuyin: "ㄓㄨˇ / ㄆㄥ ㄖㄣˋ", my: "ချက်ပြုတ်သည်", emoji: "🍳", ex: "Cooking at home can be fun." },
    { topic: "Food & Drinks", en: "order", zh: "點餐", pinyin: "diǎn cān", zhuyin: "ㄉㄧㄢˇ ㄘㄢ", my: "မှာယူသည်", emoji: "🧾", ex: "Let's order what we want." },
    { topic: "Food & Drinks", en: "menu", zh: "菜單", pinyin: "cài dān", zhuyin: "ㄘㄞˋ ㄉㄢ", my: "ဟင်းလျာစာရင်း / မီနူး", emoji: "📜", ex: "Check the menu for prices." },
    { topic: "Food & Drinks", en: "bowl", zh: "碗", pinyin: "wǎn", zhuyin: "ㄨㄢˇ", my: "ပန်းကန်လုံး", emoji: "🥣", ex: "Pass me a clean bowl." },
    { topic: "Food & Drinks", en: "cup", zh: "杯子", pinyin: "bēi zi", zhuyin: "ㄅㄟ ˙ㄗ", my: "ခွက်", emoji: "🥛", ex: "Pour water into the cup." },
    { topic: "Food & Drinks", en: "spoon", zh: "湯匙", pinyin: "tāng chí", zhuyin: "ㄊㄤ ㄔˊ", my: "ဇွန်း", emoji: "🥄", ex: "Use a spoon for soup." },
    { topic: "Food & Drinks", en: "chopsticks", zh: "筷子", pinyin: "kuài zi", zhuyin: "ㄎㄨㄞˋ ˙ㄗ", my: "တူ", emoji: "🥢", ex: "Practice using chopsticks smoothly." },
    { topic: "Food & Drinks", en: "share", zh: "分享", pinyin: "fēn xiǎng", zhuyin: "ㄈㄣ ㄒㄧㄤˇ", my: "မျှဝေသည်", emoji: "🍰", ex: "Share snacks with your friends." },
    { topic: "Food & Drinks", en: "fresh", zh: "新鮮的", pinyin: "xīn xiān de", zhuyin: "ㄒㄧㄣ ㄒㄧㄢ ㄉㄜ˙", my: "လတ်ဆတ်သော", emoji: "🌿", ex: "Fresh ingredients taste better." },
    { topic: "Food & Drinks", en: "recipe", zh: "食譜", pinyin: "shí pǔ", zhuyin: "ㄕˊ ㄆㄨˇ", my: "ချက်နည်း", emoji: "📖", ex: "Follow a simple recipe first." },
    { topic: "Food & Drinks", en: "flavor", zh: "味道 / 風味", pinyin: "wèi dào / fēng wèi", zhuyin: "ㄨㄟˋ ㄉㄠˋ / ㄈㄥ ㄨㄟˋ", my: "အရသာ", emoji: "✨", ex: "That flavor is unique." },

    // ==================== 4. FEELINGS & VIBE (50 words) ====================
    { topic: "Feelings & Vibe", en: "happy", zh: "開心的", pinyin: "kāi xīn de", zhuyin: "ㄎㄞ ㄒㄧㄣ ㄉㄜ˙", my: "ပျော်ရွှင်သော", emoji: "😄", ex: "Good news makes me happy." },
    { topic: "Feelings & Vibe", en: "sad", zh: "難過的", pinyin: "nán guò de", zhuyin: "ㄋㄢˊ ㄍㄨㄛˋ ㄉㄜ˙", my: "ဝမ်းနည်းသော", emoji: "😢", ex: "It is okay to feel sad sometimes." },
    { topic: "Feelings & Vibe", en: "angry", zh: "生氣的", pinyin: "shēng qì de", zhuyin: "ㄕㄥ ㄑㄧˋ ㄉㄜ˙", my: "စိတ်ဆိုးသော / ဒေါသထွက်သော", emoji: "😠", ex: "Take a breath before speaking when angry." },
    { topic: "Feelings & Vibe", en: "excited", zh: "興奮的", pinyin: "xīng fèn de", zhuyin: "ㄒㄧㄥ ㄈㄣˋ ㄉㄜ˙", my: "စိတ်လှုပ်ရှားပျော်ရွှင်သော", emoji: "🤩", ex: "I am excited for the weekend!" },
    { topic: "Feelings & Vibe", en: "nervous", zh: "緊張的", pinyin: "jǐn zhāng de", zhuyin: "ㄐㄧㄣˇ ㄓㄤ ㄉㄜ˙", my: "စိတ်လှုပ်ရှားထိတ်လန့်သော", emoji: "😬", ex: "Feeling nervous before speaking is normal." },
    { topic: "Feelings & Vibe", en: "scared", zh: "害怕的", pinyin: "hài pà de", zhuyin: "ㄏㄞˋ ㄆㄚˋ ㄉㄜ˙", my: "ကြောက်ရွံ့သော", emoji: "😨", ex: "Do not be scared to ask." },
    { topic: "Feelings & Vibe", en: "tired", zh: "累的", pinyin: "lèi de", zhuyin: "ㄌㄟˋ ㄉㄜ˙", my: "မောပန်းသော", emoji: "😴", ex: "Rest well when you feel tired." },
    { topic: "Feelings & Vibe", en: "sleepy", zh: "想睡覺的", pinyin: "xiǎng shuì jiào de", zhuyin: "ㄒㄧㄤˇ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄉㄜ˙", my: "အိပ်ချင်သော", emoji: "🥱", ex: "I feel sleepy after a long day." },
    { topic: "Feelings & Vibe", en: "bored", zh: "無聊的", pinyin: "wú liáo de", zhuyin: "ㄨˊ ㄌㄧㄠˊ ㄉㄜ˙", my: "ပျင်းရိသော", emoji: "😐", ex: "Try a quiz when you feel bored." },
    { topic: "Feelings & Vibe", en: "calm", zh: "冷靜的", pinyin: "lěng jìng de", zhuyin: "ㄌㄥˇ ㄐㄧㄥˋ ㄉㄜ˙", my: "တည်ငြိမ်အေးဆေးသော", emoji: "🧘", ex: "A calm mind thinks clearer." },
    { topic: "Feelings & Vibe", en: "relaxed", zh: "放鬆的", pinyin: "fàng sōng de", zhuyin: "ㄈㄤˋ ㄙㄨㄥ ㄉㄜ˙", my: "စိတ်အေးလက်အေးဖြစ်သော", emoji: "☕", ex: "Music helps me feel relaxed." },
    { topic: "Feelings & Vibe", en: "confident", zh: "有自信的", pinyin: "yǒu zì xìn de", zhuyin: "ㄧㄡˇ ㄗˋ ㄒㄧㄣˋ ㄉㄜ˙", my: "ယုံကြည်မှုရှိသော", emoji: "✨", ex: "You look confident on stage." },
    { topic: "Feelings & Vibe", en: "proud", zh: "驕傲的 / 自豪的", pinyin: "jiāo ào de / zì háo de", zhuyin: "ㄐㄧㄠ ㄠˋ ㄉㄜ˙ / ㄗˋ ㄏㄠˊ ㄉㄜ˙", my: "ဂုဏ်ယူသော", emoji: "🏅", ex: "Be proud of every small step." },
    { topic: "Feelings & Vibe", en: "grateful", zh: "感激的", pinyin: "gǎn jī de", zhuyin: "ㄍㄢˇ ㄐㄧ ㄉㄜ˙", my: "ကျေးဇူးတင်သော", emoji: "🙏", ex: "I am grateful for good friends." },
    { topic: "Feelings & Vibe", en: "surprised", zh: "驚訝的", pinyin: "jīng yà de", zhuyin: "ㄐㄧㄥ ㄧㄚˋ ㄉㄜ˙", my: "အံ့အားသင့်သော", emoji: "😮", ex: "We were surprised by the score." },
    { topic: "Feelings & Vibe", en: "confused", zh: "困惑的", pinyin: "kùn huò de", zhuyin: "ㄎㄨㄣˋ ㄏㄨㄛˋ ㄉㄜ˙", my: "စိတ်ရှုပ်ထွေးသော / ဝေခွဲမရဖြစ်သော", emoji: "😵‍💫", ex: "Ask when a rule feels confused." },
    { topic: "Feelings & Vibe", en: "worried", zh: "擔心的", pinyin: "dān xīn de", zhuyin: "ㄉㄢ ㄒㄧㄣ ㄉㄜ˙", my: "စိုးရိမ်သော", emoji: "😟", ex: "Do not worry too much ahead." },
    { topic: "Feelings & Vibe", en: "hopeful", zh: "抱有希望的", pinyin: "bào yǒu xī wàng de", zhuyin: "ㄅㄠˋ ㄧㄡˇ ㄒㄧ ㄨㄤˋ ㄉㄜ˙", my: "မျှော်လင့်ချက်ရှိသော", emoji: "🌅", ex: "Stay hopeful about tomorrow." },
    { topic: "Feelings & Vibe", en: "lonely", zh: "孤單的", pinyin: "gū dān de", zhuyin: "ㄍㄨ ㄉㄢ ㄉㄜ˙", my: "အထီးကျန်သော", emoji: "🌧️", ex: "Send a message when feeling lonely." },
    { topic: "Feelings & Vibe", en: "loved", zh: "被愛的", pinyin: "bèi ài de", zhuyin: "ㄅㄟˋ ㄞˋ ㄉㄜ˙", my: "ချစ်ခင်ခံရသော", emoji: "💞", ex: "Kindness makes people feel loved." },
    { topic: "Feelings & Vibe", en: "shy", zh: "害羞的", pinyin: "hài xiū de", zhuyin: "ㄏㄞˋ ㄒㄧㄡ ㄉㄜ˙", my: "ရှက်တတ်သော", emoji: "🙈", ex: "It is fine to be shy at first." },
    { topic: "Feelings & Vibe", en: "curious", zh: "好奇的", pinyin: "hào qí de", zhuyin: "ㄏㄠˋ ㄑㄧˊ ㄉㄜ˙", my: "စပ်စုလိုစိတ်ရှိသော / သိချင်စိတ်ပြင်းပြသော", emoji: "🔎", ex: "Curious learners discover more." },
    { topic: "Feelings & Vibe", en: "jealous", zh: "忌妒的", pinyin: "jì dù de", zhuyin: "ㄐㄧˋ ㄉㄨˋ ㄉㄜ˙", my: "မနာလိုသော / ဝန်တိုသော", emoji: "😒", ex: "Turn envy into your own motivation." },
    { topic: "Feelings & Vibe", en: "annoyed", zh: "煩躁的", pinyin: "fán zào de", zhuyin: "ㄈㄢˊ ㄗㄠˋ ㄉㄜ˙", my: "စိတ်ညစ်စရာကောင်းသော / စိတ်တိုသော", emoji: "🙄", ex: "Do not let noise make you annoyed." },
    { topic: "Feelings & Vibe", en: "stressed", zh: "有壓力的", pinyin: "yǒu yā lì de", zhuyin: "ㄧㄡˇ ㄧㄚ ㄌㄧˋ ㄉㄜ˙", my: "စိတ်ဖိစီးမှုရှိသော", emoji: "🌀", ex: "Take a short walk when stressed." },
    { topic: "Feelings & Vibe", en: "cheerful", zh: "愉快的", pinyin: "yú kuài de", zhuyin: "ㄩˊ ㄎㄨㄞˋ ㄉㄜ˙", my: "ကြည်နူးရွှင်လန်းသော", emoji: "☀️", ex: "A cheerful greeting brightens days." },
    { topic: "Feelings & Vibe", en: "peaceful", zh: "平靜的", pinyin: "píng jìng de", zhuyin: "ㄆㄧㄥˊ ㄐㄧㄥˋ ㄉㄜ˙", my: "ငြိမ်းချမ်းအေးဆေးသော", emoji: "🕊️", ex: "Evening light feels peaceful." },
    { topic: "Feelings & Vibe", en: "comfortable", zh: "舒服的 / 自在的", pinyin: "shū fu de / zì zài de", zhuyin: "ㄕㄨ ˙ㄈㄨ ㄉㄜ˙ / ㄗˋ ㄗㄞˋ ㄉㄜ˙", my: "သက်သောင့်သက်သာရှိသော", emoji: "🛋️", ex: "Wear comfortable clothes to study." },
    { topic: "Feelings & Vibe", en: "motivated", zh: "有動力的", pinyin: "yǒu dòng lì de", zhuyin: "ㄧㄡˇ ㄉㄨㄥˋ ㄌㄧˋ ㄉㄜ˙", my: "စိတ်အားထက်သန်သော", emoji: "🔥", ex: "Small rewards keep you motivated." },
    { topic: "Feelings & Vibe", en: "inspired", zh: "受啟發的", pinyin: "shòu qǐ fā de", zhuyin: "ㄕㄡˋ ㄑㄧˇ ㄈㄚ ㄉㄜ˙", my: "စိတ်ကူးစိတ်သန်းရသော", emoji: "💫", ex: "Great stories leave me inspired." },
    { topic: "Feelings & Vibe", en: "amazed", zh: "驚嘆的", pinyin: "jīng tàn de", zhuyin: "ㄐㄧㄥ ㄊㄢˋ ㄉㄜ˙", my: "အံ့ဩမိသော", emoji: "🤯", ex: "I am amazed by the view." },
    { topic: "Feelings & Vibe", en: "disappointed", zh: "失望的", pinyin: "shī wàng de", zhuyin: "ㄕ ㄨㄤˋ ㄉㄜ˙", my: "စိတ်ပျက်သော", emoji: "😞", ex: "Do not quit if you feel disappointed." },
    { topic: "Feelings & Vibe", en: "relieved", zh: "鬆了一口氣的", pinyin: "sōng le yì kǒu qì de", zhuyin: "ㄙㄨㄥ ˙ㄌㄜ ㄧˋ ㄎㄡˇ ㄑㄧˋ ㄉㄜ˙", my: "စိတ်သက်သာရာရသော", emoji: "😮‍💨", ex: "I felt relieved after finishing." },
    { topic: "Feelings & Vibe", en: "guilty", zh: "內疚的", pinyin: "nèi jiù de", zhuyin: "ㄋㄟˋ ㄐㄧㄡˋ ㄉㄜ˙", my: "အပြစ်ရှိသလိုခံစားရသော", emoji: "😔", ex: "Apologize honestly if you feel guilty." },
    { topic: "Feelings & Vibe", en: "playful", zh: "愛玩的 / 俏皮的", pinyin: "ài wán de / qiào pí de", zhuyin: "ㄞˋ ㄨㄢˊ ㄉㄜ˙ / ㄑㄧㄠˋ ㄆㄧˊ ㄉㄜ˙", my: "ပျော်တတ်သော / မြူးတူးသော", emoji: "😜", ex: "Playful energy makes team games fun." },
    { topic: "Feelings & Vibe", en: "serious", zh: "認真的 / 嚴肅的", pinyin: "rèn zhēn de / yán sù de", zhuyin: "ㄖㄣˋ ㄓㄣ ㄉㄜ˙ / ㄧㄢˊ ㄙㄨˋ ㄉㄜ˙", my: "လေးနက်သော / တည်ကြည်သော", emoji: "🧐", ex: "Be serious when checking rules." },
    { topic: "Feelings & Vibe", en: "warm", zh: "溫暖的", pinyin: "wēn nuǎn de", zhuyin: "ㄨㄣ ㄋㄨㄢˇ ㄉㄜ˙", my: "နွေးထွေးသော", emoji: "☀️", ex: "A warm smile helps anyone." },
    { topic: "Feelings & Vibe", en: "cozy", zh: "溫馨舒適的", pinyin: "wēn xīn shū shì de", zhuyin: "ㄨㄣ ㄒㄧㄣ ㄕㄨ ㄕˋ ㄉㄜ˙", my: "နွေးနွေးထွေးထွေး သက်တောင့်သက်သာရှိသော", emoji: "🧸", ex: "A cozy corner is great for reading." },
    { topic: "Feelings & Vibe", en: "fresh", zh: "精神清爽的", pinyin: "jīng shén qīng shuǎng de", zhuyin: "ㄐㄧㄥ ㄕㄣˊ ㄑㄧㄥ ㄕㄨㄤˇ ㄉㄜ˙", my: "လန်းဆန်းသော", emoji: "🍃", ex: "Washing your face makes you fresh." },
    { topic: "Feelings & Vibe", en: "empty", zh: "空虛的 / 空的", pinyin: "kōng xū de / kōng de", zhuyin: "ㄎㄨㄥ ㄒㄩ ㄉㄜ˙ / ㄎㄨㄥ ㄉㄜ˙", my: "ဗလာဖြစ်သော / အလွတ်ဖြစ်သော", emoji: "🫙", ex: "Never keep a notebook empty." },
    { topic: "Feelings & Vibe", en: "full of energy", zh: "充滿活力的", pinyin: "chōng mǎn huó lì de", zhuyin: "ㄔㄨㄥ ㄇㄢˇ ㄏㄨㄛˊ ㄌㄧˋ ㄉㄜ˙", my: "တက်ကြွအားအင်ပြည့်ဝသော", emoji: "⚡", ex: "Morning stretches make me full of energy." },
    { topic: "Feelings & Vibe", en: "mood", zh: "心情", pinyin: "xīn qíng", zhuyin: "ㄒㄧㄣ ㄑㄧㄥˊ", my: "စိတ်အခြေအနေ / စိတ်ခံစားချက်", emoji: "🎭", ex: "Good music lifts my mood." },
    { topic: "Feelings & Vibe", en: "vibe", zh: "氛圍 / 感覺", pinyin: "fēn wéi / gǎn jué", zhuyin: "ㄈㄣ ㄨㄟˊ / ㄍㄢˇ ㄐㄩㄝˊ", my: "ခံစားချက် / အငွေ့အသက်", emoji: "🌈", ex: "This place has a chill vibe." },
    { topic: "Feelings & Vibe", en: "emotion", zh: "情緒", pinyin: "qíng xù", zhuyin: "ㄑㄧㄥˊ ㄒㄩˋ", my: "စိတ်ခံစားမှု", emoji: "❤️‍🔥", ex: "Naming your emotion helps you cope." },
    { topic: "Feelings & Vibe", en: "smile", zh: "微笑", pinyin: "wēi xiào", zhuyin: "ㄨㄟ ㄒㄧㄠˋ", my: "ပြုံးသည် / အပြုံး", emoji: "😊", ex: "A smile goes a long way." },
    { topic: "Feelings & Vibe", en: "cry", zh: "哭", pinyin: "kū", zhuyin: "ㄎㄨ", my: "ငိုသည်", emoji: "😭", ex: "Crying can release heavy feelings." },
    { topic: "Feelings & Vibe", en: "laugh", zh: "大笑", pinyin: "dà xiào", zhuyin: "ㄉㄚˋ ㄒㄧㄠˋ", my: "ရယ်မောသည်", emoji: "😂", ex: "We laughed until our sides hurt." },
    { topic: "Feelings & Vibe", en: "breathe", zh: "呼吸", pinyin: "hū xī", zhuyin: "ㄏㄨ ㄒㄧ", my: "အသက်ရှူသည်", emoji: "🌬️", ex: "Breathe in slowly and relax." },
    { topic: "Feelings & Vibe", en: "care", zh: "在乎 / 關心", pinyin: "zài hū / guān xīn", zhuyin: "ㄗㄞˋ ㄏㄨ / ㄍㄨㄢ ㄒㄧㄣ", my: "ဂရုစိုက်သည်", emoji: "💗", ex: "Show that you care through actions." },
    { topic: "Feelings & Vibe", en: "feel", zh: "感覺", pinyin: "gǎn jué", zhuyin: "ㄍㄢˇ ㄐㄩㄝˊ", my: "ခံစားရသည်", emoji: "🤍", ex: "How do you feel about the plan?" },

    // ==================== 5. FRIENDS & SOCIAL (50 words) ====================
    { topic: "Friends & Social", en: "friend", zh: "朋友", pinyin: "péng you", zhuyin: "ㄆㄥˊ ˙ㄧㄡ", my: "သူငယ်ချင်း", emoji: "🫶", ex: "Good friends stand by each other." },
    { topic: "Friends & Social", en: "best friend", zh: "摯友 / 死黨", pinyin: "zhì yǒu / sǐ dǎng", zhuyin: "ㄓˋ ㄧㄡˇ / ㄙˇ ㄉㄤˇ", my: "အချစ်ဆုံးသူငယ်ချင်း", emoji: "👯‍♀️", ex: "My best friend knows my habits." },
    { topic: "Friends & Social", en: "classmate", zh: "同學", pinyin: "tóng xué", zhuyin: "ㄊㄨㄥˊ ㄒㄩㄝˊ", my: "အတန်းဖော်", emoji: "🧑‍🤝‍🧑", ex: "Help your classmate when stuck." },
    { topic: "Friends & Social", en: "teammate", zh: "隊友", pinyin: "duì yǒu", zhuyin: "ㄉㄨㄟˋ ㄧㄡˇ", my: "အသင်းဖော်", emoji: "🤝", ex: "Good teammates communicate well." },
    { topic: "Friends & Social", en: "family", zh: "家人 / 家庭", pinyin: "jiā rén / jiā tíng", zhuyin: "ㄐㄧㄚ ㄖㄣˊ / ㄐㄧㄚ ㄊㄧㄥˊ", my: "မိသားစု", emoji: "🏡", ex: "Family time keeps us grounded." },
    { topic: "Friends & Social", en: "neighbor", zh: "鄰居", pinyin: "lín jū", zhuyin: "ㄌㄧㄣˊ ㄐㄩ", my: "အိမ်နီးချင်း", emoji: "🏘️", ex: "Say hello to friendly neighbors." },
    { topic: "Friends & Social", en: "group", zh: "小組 / 團體", pinyin: "xiǎo zǔ / tuán tǐ", zhuyin: "ㄒㄧㄠˇ ㄗㄨˇ / ㄊㄨㄢˊ ㄊㄧˇ", my: "အဖွဲ့ / အုပ်စု", emoji: "👥", ex: "Our group works smoothly together." },
    { topic: "Friends & Social", en: "partner", zh: "夥伴", pinyin: "huǒ bàn", zhuyin: "ㄏㄨㄛˇ ㄅㄢˋ", my: "လုပ်ဖော်ကိုင်ဖက် / အဖော်", emoji: "🧩", ex: "Practice speaking with a partner." },
    { topic: "Friends & Social", en: "together", zh: "一起", pinyin: "yì qǐ", zhuyin: "ㄧˋ ㄑㄧˇ", my: "အတူတကွ", emoji: "✨", ex: "We walk home together." },
    { topic: "Friends & Social", en: "meet", zh: "見面 / 遇見", pinyin: "jiàn miàn / yù jiàn", zhuyin: "ㄐㄧㄢˋ ㄇㄧㄢˋ / ㄩˋ ㄐㄧㄢˋ", my: "တွေ့ဆုံသည်", emoji: "👋", ex: "Let's meet near the entrance." },
    { topic: "Friends & Social", en: "talk", zh: "聊天 / 談話", pinyin: "liáo tiān / tán huà", zhuyin: "ㄌㄧㄠˊ ㄊㄧㄢ / ㄊㄢˊ ㄏㄨㄚˋ", my: "စကားပြောသည်", emoji: "💬", ex: "We talk about music and books." },
    { topic: "Friends & Social", en: "chat", zh: "閒聊", pinyin: "xián liáo", zhuyin: "ㄒㄧㄢˊ ㄌㄧㄠˊ", my: "စကားစမြည်ပြောသည်", emoji: "🗨️", ex: "Chatting after class helps unwind." },
    { topic: "Friends & Social", en: "listen", zh: "傾聽", pinyin: "qīng tīng", zhuyin: "ㄑㄧㄥ ㄊㄧㄥ", my: "နားထောင်ပေးသည်", emoji: "👂", ex: "Listening is a great social skill." },
    { topic: "Friends & Social", en: "invite", zh: "邀請", pinyin: "yāo qǐng", zhuyin: "ㄧㄠ ㄑㄧㄥˇ", my: "ဖိတ်ကြားသည် / ဖိတ်ခေါ်သည်", emoji: "✉️", ex: "Invite them to join the game." },
    { topic: "Friends & Social", en: "join", zh: "加入 / 參加", pinyin: "jiā rù / cān jiā", zhuyin: "ㄐㄧㄚ ㄖㄨˋ / ㄘㄢ ㄐㄧㄚ", my: "ပါဝင်သည် / ဝင်ရောက်သည်", emoji: "➕", ex: "Anyone can join the club." },
    { topic: "Friends & Social", en: "welcome", zh: "歡迎", pinyin: "huān yíng", zhuyin: "ㄏㄨㄢ ㄧㄥˊ", my: "ကြိုဆိုသည်", emoji: "🤗", ex: "Welcome new members warmly." },
    { topic: "Friends & Social", en: "friendly", zh: "友善的", pinyin: "yǒu shàn de", zhuyin: "ㄧㄡˇ ㄕㄢˋ ㄉㄜ˙", my: "ဖော်ရွေသော", emoji: "😊", ex: "Friendly people make new places easy." },
    { topic: "Friends & Social", en: "kind", zh: "善良的", pinyin: "shàn liáng de", zhuyin: "ㄕㄢˋ ㄌㄧㄤˊ ㄉㄜ˙", my: "ကြင်နာတတ်သော", emoji: "🌷", ex: "Kind words brighten someone's day." },
    { topic: "Friends & Social", en: "polite", zh: "有禮貌的", pinyin: "yǒu lǐ mào de", zhuyin: "ㄧㄡˇ ㄌㄧˇ ㄇㄠˋ ㄉㄜ˙", my: "ယဉ်ကျေးသော", emoji: "🙇‍♂️", ex: "Polite manners show respect." },
    { topic: "Friends & Social", en: "respect", zh: "尊重", pinyin: "zūn zhòng", zhuyin: "ㄗㄨㄣ ㄓㄨㄥˋ", my: "လေးစားသည်", emoji: "🕊️", ex: "Respect every person's boundaries." },
    { topic: "Friends & Social", en: "honest", zh: "誠實的", pinyin: "chéng shí de", zhuyin: "ㄔㄥˊ ㄕˊ ㄉㄜ˙", my: "ရိုးသားသော", emoji: "💎", ex: "Honest friends build real trust." },
    { topic: "Friends & Social", en: "trust", zh: "信任", pinyin: "xìn rèn", zhuyin: "ㄒㄧㄣˋ ㄖㄣˋ", my: "ယုံကြည်မှု / ယုံကြည်သည်", emoji: "🔐", ex: "Trust grows over time." },
    { topic: "Friends & Social", en: "support", zh: "支持", pinyin: "zhī chí", zhuyin: "ㄓ ㄔˊ", my: "ထောက်ခံသည် / အားပေးကူညီသည်", emoji: "📣", ex: "Support your friends' goals." },
    { topic: "Friends & Social", en: "encourage", zh: "鼓勵", pinyin: "gǔ lì", zhuyin: "ㄍㄨˇ ㄌㄧˋ", my: "အားပေးသည်", emoji: "🌟", ex: "Encourage shy classmates gently." },
    { topic: "Friends & Social", en: "forgive", zh: "原諒", pinyin: "yuán liàng", zhuyin: "ㄩㄢˊ ㄌㄧㄤˋ", my: "ခွင့်လွှတ်သည်", emoji: "🤍", ex: "Forgiving helps friendships heal." },
    { topic: "Friends & Social", en: "apologize", zh: "道歉", pinyin: "dào qiàn", zhuyin: "ㄉㄠˋ ㄑㄧㄢˋ", my: "တောင်းပန်သည်", emoji: "🙏", ex: "Apologize sincerely when wrong." },
    { topic: "Friends & Social", en: "promise", zh: "承諾", pinyin: "chéng nuò", zhuyin: "ㄔㄥˊ ㄋㄨㄛˋ", my: "ကတိပေးသည်", emoji: "🤞", ex: "Keep a promise once made." },
    { topic: "Friends & Social", en: "agree", zh: "同意", pinyin: "tóng yì", zhuyin: "ㄊㄨㄥˊ ㄧˋ", my: "သဘောတူသည်", emoji: "👍", ex: "We agree on the schedule." },
    { topic: "Friends & Social", en: "disagree", zh: "不同意", pinyin: "bù tóng yì", zhuyin: "ㄅㄨˋ ㄊㄨㄥˊ ㄧˋ", my: "သဘောမတူပါ", emoji: "🙅", ex: "Disagree politely and calmly." },
    { topic: "Friends & Social", en: "discuss", zh: "討論", pinyin: "tǎo lùn", zhuyin: "ㄊㄠˇ ㄌㄨㄣˋ", my: "ဆွေးနွေးသည်", emoji: "🗣️", ex: "Discuss ideas before voting." },
    { topic: "Friends & Social", en: "advice", zh: "建議", pinyin: "jiàn yì", zhuyin: "ㄐㄧㄢˋ ㄧˋ", my: "အကြံဉာဏ် / အကြံပေးချက်", emoji: "💡", ex: "Good advice can save time." },
    { topic: "Friends & Social", en: "gift", zh: "禮物", pinyin: "lǐ wù", zhuyin: "ㄌㄧˇ ㄨˋ", my: "လက်ဆောင်", emoji: "🎁", ex: "Handmade gifts feel extra special." },
    { topic: "Friends & Social", en: "thank", zh: "感謝", pinyin: "gǎn xiè", zhuyin: "ㄍㄢˇ ㄒㄧㄝˋ", my: "ကျေးဇူးတင်သည်", emoji: "💖", ex: "Thank someone who helps you." },
    { topic: "Friends & Social", en: "celebrate", zh: "慶祝", pinyin: "qìng zhù", zhuyin: "ㄑㄧㄥˋ ㄓㄨˋ", my: "ဂုဏ်ပြုပွဲကျင်းပသည် / အောင်ပွဲခံသည်", emoji: "🥳", ex: "Celebrate small wins together." },
    { topic: "Friends & Social", en: "birthday", zh: "生日", pinyin: "shēng rì", zhuyin: "ㄕㄥ ㄖˋ", my: "မွေးနေ့", emoji: "🎂", ex: "Wish your friend a happy birthday!" },
    { topic: "Friends & Social", en: "visit", zh: "拜訪 / 參觀", pinyin: "bài fǎng / cān guān", zhuyin: "ㄅㄞˋ ㄈㄤˇ / ㄘㄢ ㄍㄨㄢ", my: "လည်ပတ်သည် / သွားရောက်တွေ့ဆုံသည်", emoji: "🚪", ex: "Visit on Sunday afternoon." },
    { topic: "Friends & Social", en: "borrow", zh: "借入", pinyin: "jiè rù", zhuyin: "ㄐㄧㄝˋ ㄖㄨˋ", my: "ငှားယူသည်", emoji: "📚", ex: "Return borrowed items on time." },
    { topic: "Friends & Social", en: "lend", zh: "借出", pinyin: "jiè chū", zhuyin: "ㄐㄧㄝˋ ㄔㄨ", my: "ငှားပေးသည်", emoji: "🤲", ex: "I can lend you my notes." },
    { topic: "Friends & Social", en: "secret", zh: "秘密", pinyin: "mì mì", zhuyin: "ㄇㄧˋ ㄇㄧˋ", my: "လျှို့ဝှက်ချက်", emoji: "🤫", ex: "Keep a friend's secret safe." },
    { topic: "Friends & Social", en: "joke", zh: "笑話 / 開玩笑", pinyin: "xiào huà / kāi wán xiào", zhuyin: "ㄒㄧㄠˋ ㄏㄨㄚˋ / ㄎㄞ ㄨㄢˊ ㄒㄧㄠˋ", my: "ဟာသ / နောက်ပြောင်သည်", emoji: "😄", ex: "A light joke breaks tension." },
    { topic: "Friends & Social", en: "hug", zh: "擁抱", pinyin: "yǒng bào", zhuyin: "ㄩㄥˇ ㄅㄠˋ", my: "ဖက်သည်", emoji: "🤗", ex: "A warm hug feels reassuring." },
    { topic: "Friends & Social", en: "wave", zh: "揮手", pinyin: "huī shǒu", zhuyin: "ㄏㄨㄟ ㄕㄡˇ", my: "လက်ပြသည်", emoji: "👋", ex: "Wave goodbye at the station." },
    { topic: "Friends & Social", en: "smile", zh: "微笑", pinyin: "wēi xiào", zhuyin: "ㄨㄟ ㄒㄧㄠˋ", my: "ပြုံးပြသည်", emoji: "😊", ex: "Smile when greeting someone." },
    { topic: "Friends & Social", en: "miss", zh: "想念 / 錯過", pinyin: "xiǎng niàn / cuò guò", zhuyin: "ㄒㄧㄤˇ ㄋㄧㄢˋ / ㄘㄨㄛˋ ㄍㄨㄛˋ", my: "လွမ်းသည် / လွတ်သွားသည်", emoji: "💭", ex: "I miss our old study spot." },
    { topic: "Friends & Social", en: "care", zh: "關心", pinyin: "guān xīn", zhuyin: "ㄍㄨㄢ ㄒㄧㄣ", my: "ဂရုစိုက်သည်", emoji: "💞", ex: "Check in when a friend is quiet." },
    { topic: "Friends & Social", en: "company", zh: "陪伴 / 公司", pinyin: "péi bàn / gōng sī", zhuyin: "ㄆㄟˊ ㄅㄢˋ / ㄍㄨㄥ ㄙ", my: "အဖော်ပြုခြင်း / ကုမ္ပဏီ", emoji: "🧑‍🤝‍🧑", ex: "Good company makes trips nicer." },
    { topic: "Friends & Social", en: "friendship", zh: "友誼", pinyin: "yǒu yì", zhuyin: "ㄧㄡˇ ㄧˋ", my: "ခင်မင်ရင်းနှီးမှု / သူငယ်ချင်းသံယောဇဉ်", emoji: "🎀", ex: "True friendship lasts through change." },
    { topic: "Friends & Social", en: "teamwork", zh: "團隊合作", pinyin: "tuán duì hé zuò", zhuyin: "ㄊㄨㄢˊ ㄉㄨㄟˋ ㄏㄜˊ ㄗㄨㄛˋ", my: "အသင်းလိုက်ပူးပေါင်းဆောင်ရွက်မှု", emoji: "🏆", ex: "Teamwork makes big tasks easier." },
    { topic: "Friends & Social", en: "harmony", zh: "和諧", pinyin: "hé xié", zhuyin: "ㄏㄜˊ ㄒㄧㄝˊ", my: "သဟဇာတဖြစ်မှု", emoji: "🕊️", ex: "Respect brings harmony to teams." },
    { topic: "Friends & Social", en: "generous", zh: "慷慨的", pinyin: "kāng kǎi de", zhuyin: "ㄎㄤ ㄎㄞˇ ㄉㄜ˙", my: "ရက်ရောသော", emoji: "🎁", ex: "Generous people share knowledge freely." },

    // ==================== 6. TRAVEL & PLACES (50 words) ====================
    { topic: "Travel & Places", en: "travel", zh: "旅行", pinyin: "lǚ xíng", zhuyin: "ㄌㄩˇ ㄒㄧㄥˊ", my: "ခရီးသွားသည် / ခရီးသွားခြင်း", emoji: "🧳", ex: "Traveling lets you see new worlds." },
    { topic: "Travel & Places", en: "trip", zh: "旅程 / 出遊", pinyin: "lǚ chéng / chū yóu", zhuyin: "ㄌㄩˇ ㄔㄥˊ / ㄔㄨ ㄧㄡˊ", my: "ခရီးစဉ်", emoji: "🎒", ex: "Plan your weekend trip early." },
    { topic: "Travel & Places", en: "journey", zh: "旅程", pinyin: "lǚ chéng", zhuyin: "ㄌㄩˇ ㄔㄥˊ", my: "ခရီးစဉ်", emoji: "🛤️", ex: "Every journey has memories." },
    { topic: "Travel & Places", en: "station", zh: "車站", pinyin: "chē zhàn", zhuyin: "ㄔㄜ ㄓㄢˋ", my: "ဘူတာရုံ", emoji: "🚉", ex: "Walk to the station in ten minutes." },
    { topic: "Travel & Places", en: "train", zh: "火車 / 捷運", pinyin: "huǒ chē / jié yùn", zhuyin: "ㄏㄨㄛˇ ㄔㄜ / ㄐㄧㄝˊ ㄩㄣˋ", my: "ရထား", emoji: "🚆", ex: "The train arrives right on time." },
    { topic: "Travel & Places", en: "bus", zh: "公車", pinyin: "gōng chē", zhuyin: "ㄍㄨㄥ ㄔㄜ", my: "ဘတ်စ်ကား", emoji: "🚌", ex: "Check the bus route before boarding." },
    { topic: "Travel & Places", en: "subway", zh: "地鐵 / 捷運", pinyin: "dì tiě / jié yùn", zhuyin: "ㄉㄧˋ ㄊㄧㄝˇ / ㄐㄧㄝˊ ㄩㄣˋ", my: "မြေအောက်ရထား / မက်ထရို", emoji: "🚇", ex: "Subway rides are fast in the city." },
    { topic: "Travel & Places", en: "taxi", zh: "計程車", pinyin: "jì chéng chē", zhuyin: "ㄐㄧˋ ㄔㄥˊ ㄔㄜ", my: "တက္ကစီ", emoji: "🚕", ex: "Take a taxi when carrying heavy bags." },
    { topic: "Travel & Places", en: "airport", zh: "機場", pinyin: "jī chǎng", zhuyin: "ㄐㄧ ㄔㄤˇ", my: "လေဆိပ်", emoji: "🛫", ex: "Arrive at the airport early." },
    { topic: "Travel & Places", en: "ticket", zh: "車票 / 門票", pinyin: "chē piào / mén piào", zhuyin: "ㄔㄜ ㄆㄧㄠˋ / ㄇㄣˊ ㄆㄧㄠˋ", my: "လက်မှတ်", emoji: "🎟️", ex: "Keep your ticket handy." },
    { topic: "Travel & Places", en: "map", zh: "地圖", pinyin: "dì tú", zhuyin: "ㄉㄧˋ ㄊㄨˊ", my: "မြေပုံ", emoji: "🗺️", ex: "Use a map to find the street." },
    { topic: "Travel & Places", en: "address", zh: "地址", pinyin: "dì zhǐ", zhuyin: "ㄉㄧˋ ㄓˇ", my: "လိပ်စာ", emoji: "📍", ex: "Write down the exact address." },
    { topic: "Travel & Places", en: "street", zh: "街道", pinyin: "jiē dào", zhuyin: "ㄐㄧㄝ ㄉㄠˋ", my: "လမ်းမ", emoji: "🛣️", ex: "The street is lined with trees." },
    { topic: "Travel & Places", en: "road", zh: "道路 / 路", pinyin: "dào lù / lù", zhuyin: "ㄉㄠˋ ㄌㄨˋ / ㄌㄨˋ", my: "လမ်း", emoji: "🛤️", ex: "Stay on the safe path." },
    { topic: "Travel & Places", en: "corner", zh: "轉角 / 角落", pinyin: "zhuǎn jiǎo / jiǎo luò", zhuyin: "ㄓㄨㄢˇ ㄐㄧㄠˇ / ㄐㄧㄠˇ ㄌㄨㄛˋ", my: "လမ်းထောင့် / ထောင့်", emoji: "↩️", ex: "Turn left at the corner." },
    { topic: "Travel & Places", en: "left", zh: "左邊", pinyin: "zuǒ biān", zhuyin: "ㄗㄨㄛˇ ㄅㄧㄢ", my: "ဘယ်ဘက်", emoji: "⬅️", ex: "The shop is on your left." },
    { topic: "Travel & Places", en: "right", zh: "右邊", pinyin: "yòu biān", zhuyin: "ㄧㄡˋ ㄅㄧㄢ", my: "ညာဘက်", emoji: "➡️", ex: "Turn right after the traffic light." },
    { topic: "Travel & Places", en: "straight", zh: "直走", pinyin: "zhí zǒu", zhuyin: "ㄓˊ ㄗㄡˇ", my: "တည့်တည့်သွားသည်", emoji: "⬆️", ex: "Go straight ahead for two blocks." },
    { topic: "Travel & Places", en: "near", zh: "附近的 / 靠近", pinyin: "fù jìn de / kào jìn", zhuyin: "ㄈㄨˋ ㄐㄧㄣˋ ㄉㄜ˙ / ㄎㄠˋ ㄐㄧㄣˋ", my: "နီးသော / အနီးအနား", emoji: "📌", ex: "Find a quiet stay near campus." },
    { topic: "Travel & Places", en: "far", zh: "遠的", pinyin: "yuǎn de", zhuyin: "ㄩㄢˇ ㄉㄜ˙", my: "ဝေးသော", emoji: "🔭", ex: "It is not too far by bus." },
    { topic: "Travel & Places", en: "arrive", zh: "到達", pinyin: "dào dá", zhuyin: "ㄉㄠˋ ㄉㄚˊ", my: "ရောက်ရှိသည်", emoji: "🏁", ex: "We will arrive before sunset." },
    { topic: "Travel & Places", en: "leave", zh: "離開 / 出發", pinyin: "lí kāi / chū fā", zhuyin: "ㄌㄧˊ ㄎㄞ / ㄔㄨ ㄈㄚ", my: "ထွက်ခွာသည် / ထားခဲ့သည်", emoji: "🚶", ex: "Leave early to avoid traffic." },
    { topic: "Travel & Places", en: "return", zh: "返回 / 回來", pinyin: "fǎn huí / huí lái", zhuyin: "ㄈㄢˇ ㄏㄨㄟˊ / ㄏㄨㄟˊ ㄌㄞˊ", my: "ပြန်လာသည်", emoji: "🔙", ex: "Return safely before night." },
    { topic: "Travel & Places", en: "explore", zh: "探索", pinyin: "tàn suǒ", zhuyin: "ㄊㄢˋ ㄙㄨㄛˇ", my: "စူးစမ်းရှာဖွေသည်", emoji: "🧭", ex: "Explore local food stalls." },
    { topic: "Travel & Places", en: "hotel", zh: "飯店 / 旅館", pinyin: "fàn diàn / lǚ guǎn", zhuyin: "ㄈㄢˋ ㄉㄧㄢˋ / ㄌㄩˇ ㄍㄨㄢˇ", my: "ဟိုတယ် / တည်းခိုခန်း", emoji: "🏨", ex: "Check in at the hotel at three." },
    { topic: "Travel & Places", en: "hostel", zh: "青年旅館 / 旅舍", pinyin: "qīng nián lǚ guǎn", zhuyin: "ㄑㄧㄥ ㄋㄧㄢˊ ㄌㄩˇ ㄍㄨㄢˇ", my: "တည်းခိုရိပ်သာ / ဟော့စတယ်", emoji: "🛏️", ex: "Check if a private room is available." },
    { topic: "Travel & Places", en: "market", zh: "市集 / 市場", pinyin: "shì jí / shì chǎng", zhuyin: "ㄕˋ ㄐㄧˊ / ㄕˋ ㄔㄤˇ", my: "ဈေး", emoji: "🛍️", ex: "Night markets are lively and fun." },
    { topic: "Travel & Places", en: "restaurant", zh: "餐廳", pinyin: "cān tīng", zhuyin: "ㄘㄢ ㄊㄧㄥ", my: "စားသောက်ဆိုင်", emoji: "🍽️", ex: "We found a cozy restaurant." },
    { topic: "Travel & Places", en: "cafe", zh: "咖啡廳", pinyin: "kā fēi tīng", zhuyin: "ㄎㄚ ㄈㄟ ㄊㄧㄥ", my: "ကော်ဖီဆိုင်", emoji: "☕", ex: "Sit by the window in a cafe." },
    { topic: "Travel & Places", en: "park", zh: "公園", pinyin: "gōng yuán", zhuyin: "ㄍㄨㄥ ㄩㄢˊ", my: "ပန်းခြံ", emoji: "🌳", ex: "Walk in the park for fresh air." },
    { topic: "Travel & Places", en: "beach", zh: "海灘", pinyin: "hǎi tān", zhuyin: "ㄏㄞˇ ㄊㄢ", my: "ကမ်းခြေ", emoji: "🏖️", ex: "Waves sound calm at the beach." },
    { topic: "Travel & Places", en: "mountain", zh: "山", pinyin: "shān", zhuyin: "ㄕㄢ", my: "တောင်", emoji: "⛰️", ex: "Mountain air feels cool and crisp." },
    { topic: "Travel & Places", en: "city", zh: "城市", pinyin: "chéng shì", zhuyin: "ㄔㄥˊ ㄕˋ", my: "မြို့", emoji: "🏙️", ex: "City lights glow at night." },
    { topic: "Travel & Places", en: "country", zh: "國家 / 鄉村", pinyin: "guó jiā / xiāng cūn", zhuyin: "ㄍㄨㄛˊ ㄐㄧㄚ / ㄒㄧㄤ ㄘㄨㄣ", my: "နိုင်ငံ / ကျေးလက်", emoji: "🌍", ex: "Every country has traditions." },
    { topic: "Travel & Places", en: "building", zh: "建築物", pinyin: "jiàn zhú wù", zhuyin: "ㄐㄧㄢˋ ㄓㄨˊ ㄨˋ", my: "အဆောက်အဦး", emoji: "🏢", ex: "That building has modern glass." },
    { topic: "Travel & Places", en: "bridge", zh: "橋", pinyin: "qiáo", zhuyin: "ㄑㄧㄠˊ", my: "တံတား", emoji: "🌉", ex: "Cross the bridge over the river." },
    { topic: "Travel & Places", en: "river", zh: "河流", pinyin: "hé liú", zhuyin: "ㄏㄜˊ ㄌㄧㄡˊ", my: "မြစ်", emoji: "🏞️", ex: "A river flows past the town." },
    { topic: "Travel & Places", en: "weather", zh: "天氣", pinyin: "tiān qì", zhuyin: "ㄊㄧㄢ ㄑㄧˋ", my: "ရာသီဥတု", emoji: "🌦️", ex: "Check the weather before packing." },
    { topic: "Travel & Places", en: "sunny", zh: "晴朗的", pinyin: "qíng lǎng de", zhuyin: "ㄑㄧㄥˊ ㄌㄤˇ ㄉㄜ˙", my: "နေသာသော", emoji: "☀️", ex: "Sunny days are great for photos." },
    { topic: "Travel & Places", en: "rainy", zh: "下雨的", pinyin: "xià yǔ de", zhuyin: "ㄒㄧㄚˋ ㄩˇ ㄉㄜ˙", my: "မိုးရွာသော", emoji: "🌧️", ex: "Bring an umbrella on rainy days." },
    { topic: "Travel & Places", en: "umbrella", zh: "雨傘", pinyin: "yǔ sǎn", zhuyin: "ㄩˇ ㄙㄢˇ", my: "ထီး", emoji: "☂️", ex: "An umbrella protects from rain and sun." },
    { topic: "Travel & Places", en: "luggage", zh: "行李", pinyin: "xíng lǐ", zhuyin: "ㄒㄧㄥˊ ㄌㄧˇ", my: "ခရီးဆောင်အိတ်", emoji: "🧳", ex: "Pack only what you need in luggage." },
    { topic: "Travel & Places", en: "photo", zh: "照片", pinyin: "zhào piàn", zhuyin: "ㄓㄠˋ ㄆㄧㄢˋ", my: "ဓာတ်ပုံ", emoji: "📸", ex: "Capture favorite views in photos." },
    { topic: "Travel & Places", en: "souvenir", zh: "紀念品", pinyin: "jì niàn pǐn", zhuyin: "ㄐㄧˋ ㄋㄧㄢˋ ㄆㄧㄣˇ", my: "အမှတ်တရပစ္စည်း", emoji: "🎐", ex: "Pick a small souvenir to remember." },
    { topic: "Travel & Places", en: "entrance", zh: "入口", pinyin: "rù kǒu", zhuyin: "ㄖㄨˋ ㄎㄡˇ", my: "ဝင်ပေါက်", emoji: "🚪", ex: "Wait near the main entrance." },
    { topic: "Travel & Places", en: "exit", zh: "出口", pinyin: "chū kǒu", zhuyin: "ㄔㄨ ㄎㄡˇ", my: "ထွက်ပေါက်", emoji: "⏏️", ex: "Follow the green exit sign." },
    { topic: "Travel & Places", en: "schedule", zh: "行程表 / 時間表", pinyin: "xíng chéng biǎo / shí jiān biǎo", zhuyin: "ㄒㄧㄥˊ ㄔㄥˊ ㄅㄧㄠˇ / ㄕˊ ㄐㄧㄢ ㄅㄧㄠˇ", my: "အချိန်ဇယား / ခရီးစဉ်ဇယား", emoji: "🗓️", ex: "Keep a flexible travel schedule." },
    { topic: "Travel & Places", en: "adventure", zh: "冒險", pinyin: "mào xiǎn", zhuyin: "ㄇㄠˋ ㄒㄧㄢˇ", my: "စွန့်စားခန်း / စွန့်စားခြင်း", emoji: "⛰️", ex: "Trying new places feels like adventure." },
    { topic: "Travel & Places", en: "safe", zh: "安全的", pinyin: "ān quán de", zhuyin: "ㄢ ㄑㄩㄢˊ ㄉㄜ˙", my: "လုံခြုံသော / ဘေးကင်းသော", emoji: "🛡️", ex: "Stay safe and watch your step." },
    { topic: "Travel & Places", en: "view", zh: "景色 / 視野", pinyin: "jǐng sè / shì yě", zhuyin: "ㄐㄧㄥˇ ㄙㄜˋ / ㄕˋ ㄧㄝˇ", my: "ရှုခင်း / မြင်ကွင်း", emoji: "🌄", ex: "The view from up here is stunning." },

    // ==================== 7. HOBBIES & FUN (50 words) ====================
    { topic: "Hobbies & Fun", en: "hobby", zh: "嗜好 / 興趣", pinyin: "shì hào / xìng qù", zhuyin: "ㄕˋ ㄏㄠˋ / ㄒㄧㄥˋ ㄑㄩˋ", my: "ဝါသနာ", emoji: "🎨", ex: "A fun hobby helps you recharge." },
    { topic: "Hobbies & Fun", en: "music", zh: "音樂", pinyin: "yīn yuè", zhuyin: "ㄧㄣ ㄩㄝˋ", my: "ဂီတ", emoji: "🎵", ex: "Music sets a great mood." },
    { topic: "Hobbies & Fun", en: "song", zh: "歌曲", pinyin: "gē qǔ", zhuyin: "ㄍㄜ ㄑㄩˇ", my: "သီချင်း", emoji: "🎶", ex: "This song has a strong beat." },
    { topic: "Hobbies & Fun", en: "dance", zh: "跳舞", pinyin: "tiào wǔ", zhuyin: "ㄊㄧㄠˋ ㄨˇ", my: "ကသည် / အက", emoji: "💃", ex: "Dancing feels freeing and energetic." },
    { topic: "Hobbies & Fun", en: "rhythm", zh: "節奏", pinyin: "jié zòu", zhuyin: "ㄐㄧㄝˊ ㄗㄡˋ", my: "စည်းချက်", emoji: "🥁", ex: "Feel the rhythm and move smoothly." },
    { topic: "Hobbies & Fun", en: "draw", zh: "畫畫", pinyin: "huà huà", zhuyin: "ㄏㄨㄚˋ ㄏㄨㄚˋ", my: "ပုံဆွဲသည်", emoji: "🖌️", ex: "Draw ideas straight from imagination." },
    { topic: "Hobbies & Fun", en: "paint", zh: "繪畫 / 上色", pinyin: "huì huà / shàng sè", zhuyin: "ㄏㄨㄟˋ ㄏㄨㄚˋ / ㄕㄤˋ ㄙㄜˋ", my: "ဆေးခြယ်သည်", emoji: "🎨", ex: "Soft colors make art pop." },
    { topic: "Hobbies & Fun", en: "craft", zh: "手作 / 工藝", pinyin: "shǒu zuò / gōng yì", zhuyin: "ㄕㄡˇ ㄗㄨㄛˋ / ㄍㄨㄥ ㄧˋ", my: "လက်မှုပညာ / လက်မှုအလုပ်", emoji: "🧶", ex: "Handmade crafts take patience and care." },
    { topic: "Hobbies & Fun", en: "game", zh: "遊戲", pinyin: "yóu xì", zhuyin: "ㄧㄡˊ ㄒㄧˋ", my: "ဂိမ်း", emoji: "🎮", ex: "Word games make learning lively." },
    { topic: "Hobbies & Fun", en: "play", zh: "玩 / 演奏", pinyin: "wán / yǎn zòu", zhuyin: "ㄨㄢˊ / ㄧㄢˇ ㄗㄡˋ", my: "ကစားသည် / တီးခတ်သည်", emoji: "🕹️", ex: "Play fair and enjoy the match." },
    { topic: "Hobbies & Fun", en: "movie", zh: "電影", pinyin: "diàn yǐng", zhuyin: "ㄉㄧㄢˋ ㄧㄥˇ", my: "ရုပ်ရှင်", emoji: "🎬", ex: "Watch a good movie on Friday." },
    { topic: "Hobbies & Fun", en: "drama", zh: "戲劇 / 劇集", pinyin: "xì jù / jù jí", zhuyin: "ㄒㄧˋ ㄐㄩˋ / ㄐㄩˋ ㄐㄧˊ", my: "ဒရာမာ / ဇာတ်လမ်းတွဲ", emoji: "🎭", ex: "Historical stories have cool costumes." },
    { topic: "Hobbies & Fun", en: "story", zh: "故事", pinyin: "gù shi", zhuyin: "ㄍㄨˋ ˙ㄕ", my: "ဇာတ်လမ်း", emoji: "📖", ex: "Every character has a story." },
    { topic: "Hobbies & Fun", en: "comic", zh: "漫畫", pinyin: "màn huà", zhuyin: "ㄇㄢˋ ㄏㄨㄚˋ", my: "ကာတွန်း / မန်ဂါ", emoji: "💬", ex: "Comics are fun to read quickly." },
    { topic: "Hobbies & Fun", en: "sing", zh: "唱歌", pinyin: "chàng gē", zhuyin: "ㄔㄤˋ ㄍㄜ", my: "သီချင်းဆိုသည်", emoji: "🎤", ex: "Sing along to your favorite track." },
    { topic: "Hobbies & Fun", en: "create", zh: "創造", pinyin: "chuàng zào", zhuyin: "ㄔㄨㄤˋ ㄗㄠˋ", my: "ဖန်တီးသည်", emoji: "✨", ex: "Create something unique today." },
    { topic: "Hobbies & Fun", en: "design", zh: "設計", pinyin: "shè jì", zhuyin: "ㄕㄜˋ ㄐㄧˋ", my: "ဒီဇိုင်းဆွဲသည် / ဒီဇိုင်း", emoji: "📐", ex: "Clean design is easy on the eyes." },
    { topic: "Hobbies & Fun", en: "style", zh: "風格", pinyin: "fēng gé", zhuyin: "ㄈㄥ ㄍㄜˊ", my: "စတိုင် / ဟန်", emoji: "🕶️", ex: "Find a style that fits you." },
    { topic: "Hobbies & Fun", en: "color", zh: "顏色", pinyin: "yán sè", zhuyin: "ㄧㄢˊ ㄙㄜˋ", my: "အရောင်", emoji: "🌈", ex: "Pastel colors look soft and sweet." },
    { topic: "Hobbies & Fun", en: "fun", zh: "有趣的 / 樂趣", pinyin: "yǒu qù de / lè qù", zhuyin: "ㄧㄡˇ ㄑㄩˋ ㄉㄜ˙ / ㄌㄜˋ ㄑㄩˋ", my: "ပျော်စရာ / ပျော်စရာကောင်းသော", emoji: "🎉", ex: "Learning should feel fun." },
    { topic: "Hobbies & Fun", en: "enjoy", zh: "享受", pinyin: "xiǎng shòu", zhuyin: "ㄒㄧㄤˇ ㄕㄡˋ", my: "ပျော်ရွှင်ခံစားသည်", emoji: "🌟", ex: "Enjoy the process as you grow." },
    { topic: "Hobbies & Fun", en: "relax", zh: "放鬆", pinyin: "fàng sōng", zhuyin: "ㄈㄤˋ ㄙㄨㄥ", my: "အနားယူစိတ်လျှော့သည်", emoji: "🍃", ex: "Take time to relax your mind." },
    { topic: "Hobbies & Fun", en: "weekend", zh: "週末", pinyin: "zhōu mò", zhuyin: "ㄓㄡ ㄇㄛˋ", my: "စနေတနင်္ဂနွေ / သီတင်းကျွတ်အားလပ်ရက်", emoji: "📅", ex: "Recharge your energy on weekends." },
    { topic: "Hobbies & Fun", en: "club", zh: "社團", pinyin: "shè tuán", zhuyin: "ㄕㄜˋ ㄊㄨㄢˊ", my: "ကလပ် / အသင်း", emoji: "🏫", ex: "Join a club you truly like." },
    { topic: "Hobbies & Fun", en: "stage", zh: "舞台", pinyin: "wǔ tái", zhuyin: "ㄨˇ ㄊㄞˊ", my: "စင်မြင့်", emoji: "🌟", ex: "Practice before stepping on stage." },
    { topic: "Hobbies & Fun", en: "performance", zh: "演出 / 表演", pinyin: "yǎn chū / biǎo yǎn", zhuyin: "ㄧㄢˇ ㄔㄨ / ㄅㄧㄠˇ ㄧㄢˇ", my: "ဖျော်ဖြေမှု", emoji: "🎭", ex: "A good performance takes rehearsal." },
    { topic: "Hobbies & Fun", en: "sound", zh: "聲音 / 音效", pinyin: "shēng yīn / yīn xiào", zhuyin: "ㄕㄥ ㄧㄣ / ㄧㄣ ㄒㄧㄠˋ", my: "အသံ", emoji: "🔊", ex: "Good sound makes videos cooler." },
    { topic: "Hobbies & Fun", en: "video", zh: "影片", pinyin: "yǐng piàn", zhuyin: "ㄧㄥˇ ㄆㄧㄢˋ", my: "ဗီဒီယို", emoji: "🎥", ex: "Short videos tell quick stories." },
    { topic: "Hobbies & Fun", en: "scene", zh: "場景 / 畫面", pinyin: "chǎng jǐng / huà miàn", zhuyin: "ㄔㄤˇ ㄐㄧㄥˇ / ㄏㄨㄚˋ ㄇㄧㄢˋ", my: "မြင်ကွင်း / ဇာတ်ဝင်ခန်း", emoji: "🎞️", ex: "Plan each scene clearly." },
    { topic: "Hobbies & Fun", en: "idea", zh: "想法 / 點子", pinyin: "xiǎng fǎ / diǎn zi", zhuyin: "ㄒㄧㄤˇ ㄈㄚˇ / ㄉㄧㄢˇ ˙ㄗ", my: "အကြံအဉာဏ် / စိတ်ကူး", emoji: "💡", ex: "Write down sudden ideas fast." },
    { topic: "Hobbies & Fun", en: "imagination", zh: "想像力", pinyin: "xiǎng xiàng lì", zhuyin: "ㄒㄧㄤˇ ㄒㄧㄤˋ ㄌㄧˋ", my: "စိတ်ကူးစိတ်သန်း / စိတ်ကူးဉာဏ်", emoji: "☁️", ex: "Imagination powers creative work." },
    { topic: "Hobbies & Fun", en: "magic", zh: "魔法 / 魔力", pinyin: "mó fǎ / mó lì", zhuyin: "ㄇㄛˊ ㄈㄚˇ / ㄇㄛˊ ㄌㄧˋ", my: "မှော် / မှော်ပညာ", emoji: "🪄", ex: "Effort turns ideas into magic." },
    { topic: "Hobbies & Fun", en: "surprise", zh: "驚喜", pinyin: "jīng xǐ", zhuyin: "ㄐㄧㄥ ㄒㄧˇ", my: "အံ့ဩစရာ / ဆန်းကြယ်မှု", emoji: "🎁", ex: "A small surprise brings joy." },
    { topic: "Hobbies & Fun", en: "puzzle", zh: "拼圖 / 謎題", pinyin: "pīn tú / mí tí", zhuyin: "ㄆㄧㄣ ㄊㄨˊ / ㄇㄧˊ ㄊㄧˊ", my: "ပဟေဠိ / ဂျစ်ဆောပဟေဠိ", emoji: "🧩", ex: "Puzzles train sharp thinking." },
    { topic: "Hobbies & Fun", en: "collection", zh: "收藏", pinyin: "shōu cáng", zhuyin: "ㄕㄡ ㄘㄤˊ", my: "စုဆောင်းမှု", emoji: "🗂️", ex: "Keep your collection organized." },
    { topic: "Hobbies & Fun", en: "sticker", zh: "貼紙", pinyin: "tiē zhǐ", zhuyin: "ㄊㄧㄝ ㄓˇ", my: "စတစ်ကာ", emoji: "🏷️", ex: "Cute stickers decorate notebooks." },
    { topic: "Hobbies & Fun", en: "poster", zh: "海報", pinyin: "hǎi bào", zhuyin: "ㄏㄞˇ ㄅㄠˋ", my: "ပိုစတာ", emoji: "🖼️", ex: "Clear text makes a poster readable." },
    { topic: "Hobbies & Fun", en: "camera", zh: "相機", pinyin: "xiàng jī", zhuyin: "ㄒㄧㄤˋ ㄐㄧ", my: "ကင်မရာ", emoji: "📷", ex: "Hold the camera steady." },
    { topic: "Hobbies & Fun", en: "headphones", zh: "耳機", pinyin: "ěr jī", zhuyin: "ㄦˇ ㄐㄧ", my: "နားကြပ်", emoji: "🎧", ex: "Headphones help block distractions." },
    { topic: "Hobbies & Fun", en: "beats", zh: "節拍 / 伴奏", pinyin: "jié pāi / bàn zòu", zhuyin: "ㄐㄧㄝˊ ㄆㄞ / ㄅㄢˋ ㄗㄡˋ", my: "စည်းချက် / ဂီတစည်းချက်", emoji: "🎚️", ex: "Strong beats keep the energy up." },
    { topic: "Hobbies & Fun", en: "lyrics", zh: "歌詞", pinyin: "gē cí", zhuyin: "ㄍㄜ ㄘˊ", my: "သီချင်းစာသား", emoji: "📜", ex: "Reading lyrics helps listening." },
    { topic: "Hobbies & Fun", en: "genre", zh: "類型 / 曲風", pinyin: "lèi xíng / qǔ fēng", zhuyin: "ㄌㄟˋ ㄒㄧㄥˊ / ㄑㄩˇ ㄈㄥ", my: "အမျိုးအစား / ဂီတပုံစံ", emoji: "🎼", ex: "Mix genres for a fresh sound." },
    { topic: "Hobbies & Fun", en: "mashup", zh: "混搭 / 串燒", pinyin: "hùn dā / chuàn shāo", zhuyin: "ㄏㄨㄣˋ ㄉㄚ / ㄔㄨㄢˋ ㄕㄠ", my: "ပေါင်းစပ်ဖန်တီးမှု", emoji: "🎛️", ex: "A mashup blends smooth transitions." },
    { topic: "Hobbies & Fun", en: "cheer", zh: "歡呼 / 加油", pinyin: "huān hū / jiā yóu", zhuyin: "ㄏㄨㄢ ㄏㄨ / ㄐㄧㄚ ㄧㄡˊ", my: "အားပေးကြွေးကြော်သည်", emoji: "📣", ex: "Cheer for your friends!" },
    { topic: "Hobbies & Fun", en: "winner", zh: "勝利者 / 贏家", pinyin: "shèng lì zhě / yíng jiā", zhuyin: "ㄕㄥˋ ㄌㄧˋ ㄓㄜˇ / ㄧㄥˊ ㄐㄧㄚ", my: "အနိုင်ရသူ", emoji: "🥇", ex: "Every player learns something." },
    { topic: "Hobbies & Fun", en: "champion", zh: "冠軍", pinyin: "guàn jūn", zhuyin: "ㄍㄨㄢˋ ㄐㄩㄣ", my: "ချန်ပီယံ", emoji: "🏆", ex: "Practice daily like a champion." },
    { topic: "Hobbies & Fun", en: "fun time", zh: "歡樂時光", pinyin: "huān lè shí guāng", zhuyin: "ㄏㄨㄢ ㄌㄜˋ ㄕˊ ㄍㄨㄤ", my: "ပျော်ရွှင်ဖွယ်အချိန်", emoji: "🎈", ex: "Enjoy every bit of fun time." },
    { topic: "Hobbies & Fun", en: "activity", zh: "活動", pinyin: "huó dòng", zhuyin: "ㄏㄨㄛˊ ㄉㄨㄥˋ", my: "လှုပ်ရှားမှု", emoji: "🧩", ex: "Group activities build bonds." },
    { topic: "Hobbies & Fun", en: "free time", zh: "空閒時間", pinyin: "kòng xián shí jiān", zhuyin: "ㄎㄨㄥˋ ㄒㄧㄢˊ ㄕˊ ㄐㄧㄢ", my: "အားလပ်ချိန်", emoji: "⏳", ex: "Use free time in your own way." },
    { topic: "Hobbies & Fun", en: "enjoyment", zh: "享受 / 快樂", pinyin: "xiǎng shòu / kuài lè", zhuyin: "ㄒㄧㄤˇ ㄕㄡˋ / ㄎㄨㄞˋ ㄌㄜˋ", my: "ပျော်ရွှင်ကျေနပ်မှု", emoji: "🌸", ex: "Joy comes from genuine enjoyment." },

    // ==================== 8. GOALS & GROWTH (50 words) ====================
    { topic: "Goals & Growth", en: "goal", zh: "目標", pinyin: "mù biāo", zhuyin: "ㄇㄨˋ ㄅㄧㄠ", my: "ပန်းတိုင် / ရည်မှန်းချက်", emoji: "🎯", ex: "Write down a clear goal." },
    { topic: "Goals & Growth", en: "dream", zh: "夢想", pinyin: "mèng xiǎng", zhuyin: "ㄇㄥˋ ㄒㄧㄤˇ", my: "အိပ်မက်", emoji: "🌙", ex: "Big dreams start with small steps." },
    { topic: "Goals & Growth", en: "plan", zh: "計畫", pinyin: "jì huà", zhuyin: "ㄐㄧˋ ㄏㄨㄚˋ", my: "အစီအစဉ်", emoji: "📋", ex: "A simple plan keeps you on track." },
    { topic: "Goals & Growth", en: "step", zh: "步驟 / 步伐", pinyin: "bù zhòu / bù fá", zhuyin: "ㄅㄨˋ ㄓㄡˋ / ㄅㄨˋ ㄈㄚˊ", my: "ခြေလှမ်း / အဆင့်", emoji: "👣", ex: "Take it one step at a time." },
    { topic: "Goals & Growth", en: "progress", zh: "進步 / 進度", pinyin: "jìn bù / jìn dù", zhuyin: "ㄐㄧㄣˋ ㄅㄨˋ / ㄐㄧㄣˋ ㄉㄨˋ", my: "တိုးတက်မှု", emoji: "📈", ex: "Progress matters more than speed." },
    { topic: "Goals & Growth", en: "improve", zh: "改進 / 提升", pinyin: "gǎi jìn / tí shēng", zhuyin: "ㄍㄞˇ ㄐㄧㄣˋ / ㄊㄧˊ ㄕㄥ", my: "တိုးတက်ကောင်းမွန်စေသည်", emoji: "⬆️", ex: "Reviewing helps you improve fast." },
    { topic: "Goals & Growth", en: "grow", zh: "成長", pinyin: "chéng zhǎng", zhuyin: "ㄔㄥˊ ㄓㄤˇ", my: "ကြီးထွားသည် / ဖွံ့ဖြိုးတိုးတက်သည်", emoji: "🌱", ex: "Challenges help you grow stronger." },
    { topic: "Goals & Growth", en: "achieve", zh: "達成", pinyin: "dá chéng", zhuyin: "ㄉㄚˊ ㄔㄥˊ", my: "အောင်မြင်ရရှိသည်", emoji: "🏅", ex: "Achieve your goals steadily." },
    { topic: "Goals & Growth", en: "succeed", zh: "成功", pinyin: "chéng gōng", zhuyin: "ㄔㄥˊ ㄍㄨㄥ", my: "အောင်မြင်သည်", emoji: "🌟", ex: "Consistency helps you succeed." },
    { topic: "Goals & Growth", en: "effort", zh: "努力", pinyin: "nǔ lì", zhuyin: "ㄋㄨˇ ㄌㄧˋ", my: "ကြိုးစားအားထုတ်မှု", emoji: "💪", ex: "Real effort always leaves a mark." },
    { topic: "Goals & Growth", en: "habit", zh: "習慣", pinyin: "xí guàn", zhuyin: "ㄒㄧˊ ㄍㄨㄢˋ", my: "အလေ့အကျင့်", emoji: "🔁", ex: "Daily habits shape your future." },
    { topic: "Goals & Growth", en: "routine", zh: "日常作息", pinyin: "rì cháng zuò xí", zhuyin: "ㄖˋ ㄔㄤˊ ㄗㄨㄛˋ ㄒㄧˊ", my: "နေ့စဉ်လုပ်ရိုးလုပ်စဉ်", emoji: "🕰️", ex: "A steady routine saves mental energy." },
    { topic: "Goals & Growth", en: "discipline", zh: "自律", pinyin: "zì lǜ", zhuyin: "ㄗˋ ㄌㄩˋ", my: "စည်းကမ်းလိုက်နာမှု / ကိုယ့်ကိုယ်ကိုယ်ထိန်းချုပ်မှု", emoji: "🧭", ex: "Self-discipline unlocks freedom." },
    { topic: "Goals & Growth", en: "patient", zh: "有耐心的", pinyin: "yǒu nài xīn de", zhuyin: "ㄧㄡˇ ㄋㄞˋ ㄒㄧㄣ ㄉㄜ˙", my: "သည်းခံစိတ်ရှည်သော", emoji: "⏳", ex: "Be patient while learning skills." },
    { topic: "Goals & Growth", en: "brave", zh: "勇敢的", pinyin: "yǒng gǎn de", zhuyin: "ㄩㄥˇ ㄍㄢˇ ㄉㄜ˙", my: "ရဲရင့်သော", emoji: "🦁", ex: "Be brave and try new challenges." },
    { topic: "Goals & Growth", en: "courage", zh: "勇氣", pinyin: "yǒng qì", zhuyin: "ㄩㄥˇ ㄑㄧˋ", my: "သတ္တိ", emoji: "🔥", ex: "It takes courage to start fresh." },
    { topic: "Goals & Growth", en: "confidence", zh: "自信", pinyin: "zì xìn", zhuyin: "ㄗˋ ㄒㄧㄣˋ", my: "ယုံကြည်မှု", emoji: "✨", ex: "Confidence grows through action." },
    { topic: "Goals & Growth", en: "inspire", zh: "啟發", pinyin: "qǐ fā", zhuyin: "ㄑㄧˇ ㄈㄚ", my: "စိတ်ဓာတ်ခွန်အားပေးသည်", emoji: "💫", ex: "Your work can inspire others." },
    { topic: "Goals & Growth", en: "challenge", zh: "挑戰", pinyin: "tiǎo zhàn", zhuyin: "ㄊㄧㄠˇ ㄓㄢˋ", my: "စိန်ခေါ်မှု", emoji: "🏔️", ex: "Treat challenges as training." },
    { topic: "Goals & Growth", en: "decide", zh: "決定", pinyin: "jué dìng", zhuyin: "ㄐㄩㄝˊ ㄉㄧㄥˋ", my: "ဆုံးဖြတ်သည်", emoji: "✔️", ex: "Decide what matters most today." },
    { topic: "Goals & Growth", en: "choice", zh: "選擇", pinyin: "xuǎn zé", zhuyin: "ㄒㄩㄢˇ ㄗㄜˊ", my: "ရွေးချယ်မှု", emoji: "🔀", ex: "Every choice leads somewhere." },
    { topic: "Goals & Growth", en: "chance", zh: "機會", pinyin: "jī huì", zhuyin: "ㄐㄧ ㄏㄨㄟˋ", my: "အခွင့်အရေး", emoji: "🍀", ex: "Prepare well for your chance." },
    { topic: "Goals & Growth", en: "future", zh: "未來", pinyin: "wèi lái", zhuyin: "ㄨㄟˋ ㄌㄞˊ", my: "အနာဂတ်", emoji: "🚀", ex: "Build your future day by day." },
    { topic: "Goals & Growth", en: "past", zh: "過去", pinyin: "guò qù", zhuyin: "ㄍㄨㄛˋ ㄑㄩˋ", my: "အတိတ်", emoji: "⏪", ex: "Learn from the past and move on." },
    { topic: "Goals & Growth", en: "present", zh: "現在 / 當下", pinyin: "xiàn zài / dāng xià", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ / ㄉㄤ ㄒㄧㄚˋ", my: "ပစ္စုပ္ပန် / အခုအချိန်", emoji: "📍", ex: "Stay present in what you do." },
    { topic: "Goals & Growth", en: "skill", zh: "技能", pinyin: "jì néng", zhuyin: "ㄐㄧˋ ㄋㄥˊ", my: "ကျွမ်းကျင်မှု / စွမ်းရည်", emoji: "🛠️", ex: "Build useful skills over time." },
    { topic: "Goals & Growth", en: "talent", zh: "天賦 / 才華", pinyin: "tiān fù / cái huá", zhuyin: "ㄊㄧㄢ ㄈㄨˋ / ㄘㄞˊ ㄏㄨㄚˊ", my: "ပါရမီ / ထူးချွန်မှု", emoji: "🌟", ex: "Practice shapes raw talent." },
    { topic: "Goals & Growth", en: "knowledge", zh: "知識", pinyin: "zhī shi", zhuyin: "ㄓ ˙ㄕ", my: "ဗဟုသုတ / အသိပညာ", emoji: "📚", ex: "Knowledge grows when shared." },
    { topic: "Goals & Growth", en: "experience", zh: "經驗", pinyin: "jīng yàn", zhuyin: "ㄐㄧㄥ ㄧㄢˋ", my: "အတွေ့အကြုံ", emoji: "🎒", ex: "Every experience adds value." },
    { topic: "Goals & Growth", en: "lesson", zh: "教訓 / 課程", pinyin: "jiào xùn / kè chéng", zhuyin: "ㄐㄧㄠˋ ㄒㄩㄣˋ / ㄎㄜˋ ㄔㄥˊ", my: "သင်ခန်းစာ", emoji: "📝", ex: "Turn every lesson into wisdom." },
    { topic: "Goals & Growth", en: "mistake", zh: "錯誤", pinyin: "cuò wù", zhuyin: "ㄘㄨㄛˋ ㄨˋ", my: "အမှား", emoji: "✏️", ex: "Mistakes show where to practice." },
    { topic: "Goals & Growth", en: "fix", zh: "修復 / 改正", pinyin: "xiū fù / gǎi zhèng", zhuyin: "ㄒㄧㄡ ㄈㄨˋ / ㄍㄞˇ ㄓㄥˋ", my: "ပြင်ဆင်သည် / ပြုပြင်သည်", emoji: "🔧", ex: "Fix bugs one by one calmly." },
    { topic: "Goals & Growth", en: "prepare", zh: "準備", pinyin: "zhǔn bèi", zhuyin: "ㄓㄨㄣˇ ㄅㄟˋ", my: "ပြင်ဆင်သည်", emoji: "🎒", ex: "Prepare ahead so you feel calm." },
    { topic: "Goals & Growth", en: "ready", zh: "準備好的", pinyin: "zhǔn bèi hǎo de", zhuyin: "ㄓㄨㄣˇ ㄅㄟˋ ㄏㄠˇ ㄉㄜ˙", my: "အဆင်သင့်ဖြစ်သော", emoji: "✅", ex: "Take a breath and get ready." },
    { topic: "Goals & Growth", en: "start over", zh: "重新開始", pinyin: "chóng xīn kāi shǐ", zhuyin: "ㄔㄨㄥˊ ㄒㄧㄣ ㄎㄞ ㄕˇ", my: "ပြန်စသည်", emoji: "🔄", ex: "You can start over anytime." },
    { topic: "Goals & Growth", en: "keep going", zh: "繼續加油 / 堅持下去", pinyin: "jì xù jiā yóu", zhuyin: "ㄐㄧˋ ㄒㄩˋ ㄐㄧㄚ ㄧㄡˊ", my: "ဆက်လက်ကြိုးစားသည်", emoji: "🏃‍♀️", ex: "Keep going even on slow days." },
    { topic: "Goals & Growth", en: "never give up", zh: "永不放棄", pinyin: "yǒng bù fàng qì", zhuyin: "ㄩㄥˇ ㄅㄨˋ ㄈㄤˋ ㄑㄧˋ", my: "ဘယ်တော့မှ အရှုံးမပေးနဲ့", emoji: "🛡️", ex: "Never give up on your vision." },
    { topic: "Goals & Growth", en: "value", zh: "價值", pinyin: "jià zhí", zhuyin: "ㄐㄧㄚˋ ㄓˊ", my: "တန်ဖိုး", emoji: "💎", ex: "Know your own value." },
    { topic: "Goals & Growth", en: "purpose", zh: "目的 / 目標", pinyin: "mù dì / mù biāo", zhuyin: "ㄇㄨˋ ㄉㄧˋ / ㄇㄨˋ ㄅㄧㄠ", my: "ရည်ရွယ်ချက်", emoji: "🎯", ex: "A clear purpose guides action." },
    { topic: "Goals & Growth", en: "hope", zh: "希望", pinyin: "xī wàng", zhuyin: "ㄒㄧ ㄨㄤˋ", my: "မျှော်လင့်ချက်", emoji: "🌅", ex: "Hope keeps hearts bright." },
    { topic: "Goals & Growth", en: "belief", zh: "信念 / 信仰", pinyin: "xìn niàn / xìn yǎng", zhuyin: "ㄒㄧㄣˋ ㄋㄧㄢˋ / ㄒㄧㄣˋ ㄧㄤˇ", my: "ယုံကြည်ချက်", emoji: "🤍", ex: "Strong belief moves you forward." },
    { topic: "Goals & Growth", en: "focus", zh: "專注", pinyin: "zhuān zhù", zhuyin: "ㄓㄨㄢ ㄓㄨˋ", my: "အာရုံစိုက်သည်", emoji: "🎧", ex: "Focus brings deeper results." },
    { topic: "Goals & Growth", en: "balance", zh: "平衡", pinyin: "píng héng", zhuyin: "ㄆㄧㄥˊ ㄏㄥˊ", my: "မျှတမှု / ဟန်ချက်ညီမှု", emoji: "⚖️", ex: "Balance study, rest, and fun." },
    { topic: "Goals & Growth", en: "wise", zh: "明智的 / 睿智的", pinyin: "míng zhì de / ruì zhì de", zhuyin: "ㄇㄧㄥˊ ㄓˋ ㄉㄜ˙ / ㄖㄨㄟˋ ㄓˋ ㄉㄜ˙", my: "ပညာရှိသော / ဆင်ခြင်တုံတရားရှိသော", emoji: "🦉", ex: "Wise choices save future stress." },
    { topic: "Goals & Growth", en: "creative", zh: "有創意的", pinyin: "yǒu chuàng yì de", zhuyin: "ㄧㄡˇ ㄔㄨㄤˋ ㄧˋ ㄉㄜ˙", my: "ဖန်တီးနိုင်စွမ်းရှိသော", emoji: "🎨", ex: "Creative minds find fresh paths." },
    { topic: "Goals & Growth", en: "independent", zh: "獨立的", pinyin: "dú lì de", zhuyin: "ㄉㄨˊ ㄌㄧˋ ㄉㄜ˙", my: "ရပ်တည်နိုင်သော / လွတ်လပ်သော", emoji: "🦅", ex: "Being independent builds pride." },
    { topic: "Goals & Growth", en: "responsible", zh: "有責任感的", pinyin: "yǒu zé rèn gǎn de", zhuyin: "ㄧㄡˇ ㄗㄜˊ ㄖㄣˋ ㄍㄢˇ ㄉㄜ˙", my: "တာဝန်ယူတတ်သော", emoji: "📌", ex: "Responsible habits earn trust." },
    { topic: "Goals & Growth", en: "improve self", zh: "自我提升", pinyin: "zì wǒ tí shēng", zhuyin: "ㄗˋ ㄨㄛˇ ㄊㄧˊ ㄕㄥ", my: "ကိုယ့်ကိုယ်ကိုယ် တိုးတက်အောင်လုပ်ခြင်း", emoji: "🌱", ex: "Self-improvement is a lifelong journey." },
    { topic: "Goals & Growth", en: "shine", zh: "發光 / 出色", pinyin: "fā guāng / chū sè", zhuyin: "ㄈㄚ ㄍㄨㄤ / ㄔㄨ ㄙㄜˋ", my: "ထွန်းလင်းသည် / ထူးချွန်သည်", emoji: "✨", ex: "Let your own light shine." },
    { topic: "Goals & Growth", en: "victory", zh: "勝利", pinyin: "shèng lì", zhuyin: "ㄕㄥˋ ㄌㄧˋ", my: "အောင်ပွဲ", emoji: "🏆", ex: "Sweet victory follows hard work." },

    // ==================== 9. HEALTH & FITNESS (50 words) ====================
    { topic: "Health & Fitness", en: "health", zh: "健康", pinyin: "jiàn kāng", zhuyin: "ㄐㄧㄢˋ ㄎㄤ", my: "ကျန်းမာရေး", emoji: "🩺", ex: "Health comes before everything." },
    { topic: "Health & Fitness", en: "healthy", zh: "健康的", pinyin: "jiàn kāng de", zhuyin: "ㄐㄧㄢˋ ㄎㄤ ㄉㄜ˙", my: "ကျန်းမာသော", emoji: "🥗", ex: "Healthy habits feel great long term." },
    { topic: "Health & Fitness", en: "fitness", zh: "健身 / 體能", pinyin: "jiàn shēn / tǐ néng", zhuyin: "ㄐㄧㄢˋ ㄕㄣ / ㄊㄧˇ ㄋㄥˊ", my: "ကိုယ်ကာယကြံ့ခိုင်မှု / ကြံ့ခိုင်ရေး", emoji: "💪", ex: "Fitness builds daily stamina." },
    { topic: "Health & Fitness", en: "exercise", zh: "運動 / 鍛鍊", pinyin: "yùn dòng / duàn liàn", zhuyin: "ㄩㄣˋ ㄉㄨㄥˋ / ㄉㄨㄢˋ ㄌㄧㄢˋ", my: "လေ့ကျင့်ခန်းလုပ်သည် / လေ့ကျင့်ခန်း", emoji: "🏋️", ex: "Light exercise wakes up your body." },
    { topic: "Health & Fitness", en: "gym", zh: "健身房", pinyin: "jiàn shēn fáng", zhuyin: "ㄐㄧㄢˋ ㄕㄣ ㄈㄤˊ", my: "အားကစားရုံ / ဂျင်မ်", emoji: "🏢", ex: "Bring water and a towel to the gym." },
    { topic: "Health & Fitness", en: "walk", zh: "走路 / 散步", pinyin: "zǒu lù / sàn bù", zhuyin: "ㄗㄡˇ ㄌㄨˋ / ㄙㄢˋ ㄅㄨˋ", my: "လမ်းလျှောက်သည်", emoji: "🚶‍♀️", ex: "A short walk clears your head." },
    { topic: "Health & Fitness", en: "run", zh: "跑步", pinyin: "pǎo bù", zhuyin: "ㄆㄠˇ ㄅㄨˋ", my: "ပြေးသည်", emoji: "🏃‍♂️", ex: "Run at a pace you can keep." },
    { topic: "Health & Fitness", en: "stretch", zh: "伸展", pinyin: "shēn zhǎn", zhuyin: "ㄕㄣ ㄓㄢˇ", my: "ဆန့်ထုတ်သည် / အကြောဆန့်သည်", emoji: "🧘‍♀️", ex: "Stretch gently before and after." },
    { topic: "Health & Fitness", en: "warm up", zh: "暖身", pinyin: "nuǎn shēn", zhuyin: "ㄋㄨㄢˇ ㄕㄣ", my: "သွေးပူလေ့ကျင့်ခန်းလုပ်သည်", emoji: "🔥", ex: "Warm up so muscles stay safe." },
    { topic: "Health & Fitness", en: "sleep", zh: "睡覺 / 睡眠", pinyin: "shuì jiào / shuì mián", zhuyin: "ㄕㄨㄟˋ ㄐㄧㄠˋ / ㄕㄨㄟˋ ㄇㄧㄢˊ", my: "အိပ်သည် / အိပ်စက်ခြင်း", emoji: "😴", ex: "Good sleep helps your brain remember." },
    { topic: "Health & Fitness", en: "rest", zh: "休息", pinyin: "xiū xi", zhuyin: "ㄒㄧㄡ ˙ㄒㄧ", my: "အနားယူသည်", emoji: "🛋️", ex: "Rest days are part of training." },
    { topic: "Health & Fitness", en: "energy", zh: "精力 / 能量", pinyin: "jīng lì / néng liàng", zhuyin: "ㄐㄧㄥ ㄌㄧˋ / ㄋㄥˊ ㄌㄧㄤˋ", my: "စွမ်းအင် / အားအင်", emoji: "⚡", ex: "Good food and sleep boost energy." },
    { topic: "Health & Fitness", en: "strength", zh: "力量 / 肌力", pinyin: "lì liàng / jī lì", zhuyin: "ㄌㄧˋ ㄌㄧㄤˋ / ㄐㄧ ㄌㄧˋ", my: "အင်အား / ကြံ့ခိုင်မှု", emoji: "🏋️‍♀️", ex: "Strength builds up gradually." },
    { topic: "Health & Fitness", en: "strong", zh: "強壯的 / 堅強的", pinyin: "qiáng zhuàng de / jiān qiáng de", zhuyin: "ㄑㄧㄤˊ ㄓㄨㄤˋ ㄉㄜ˙ / ㄐㄧㄢ ㄑㄧㄤˊ ㄉㄜ˙", my: "သန်မာသော / ကြံ့ခိုင်သော", emoji: "💪", ex: "Stay strong through busy weeks." },
    { topic: "Health & Fitness", en: "weak", zh: "虛弱的 / 弱的", pinyin: "xū ruò de / ruò de", zhuyin: "ㄒㄩ ㄖㄨㄛˋ ㄉㄜ˙ / ㄖㄨㄛˋ ㄉㄜ˙", my: "အားနည်းသော", emoji: "🪫", ex: "Eat well if you feel weak." },
    { topic: "Health & Fitness", en: "hydrate", zh: "補充水分", pinyin: "bǔ chōng shuǐ fèn", zhuyin: "ㄅㄨˇ ㄔㄨㄥ ㄕㄨㄟˇ ㄈㄣˋ", my: "ရေဓာတ်ဖြည့်သည်", emoji: "💧", ex: "Hydrate throughout the day." },
    { topic: "Health & Fitness", en: "weight", zh: "體重 / 重量", pinyin: "tǐ zhòng / zhòng liàng", zhuyin: "ㄊㄧˇ ㄓㄨㄥˋ / ㄓㄨㄥˋ ㄌㄧㄤˋ", my: "ကိုယ်အလေးချိန် / အလေးချိန်", emoji: "⚖️", ex: "Healthy weight comes from steady habits." },
    { topic: "Health & Fitness", en: "body", zh: "身體", pinyin: "shēn tǐ", zhuyin: "ㄕㄣ ㄊㄧˇ", my: "ခန္ဓာကိုယ်", emoji: "🧍", ex: "Listen to what your body needs." },
    { topic: "Health & Fitness", en: "mind", zh: "心靈 / 頭腦", pinyin: "xīn líng / tóu nǎo", zhuyin: "ㄒㄧㄣ ㄌㄧㄥˊ / ㄊㄡˊ ㄋㄠˇ", my: "စိတ် / ဉာဏ်", emoji: "🧠", ex: "Care for both mind and body." },
    { topic: "Health & Fitness", en: "heart", zh: "心臟 / 內心", pinyin: "xīn zàng / nèi xīn", zhuyin: "ㄒㄧㄣ ㄗㄤˋ / ㄋㄟˋ ㄒㄧㄣ", my: "နှလုံး / စိတ်နှလုံး", emoji: "❤️", ex: "Cardio gets your heart pumping." },
    { topic: "Health & Fitness", en: "skin", zh: "皮膚", pinyin: "pí fū", zhuyin: "ㄆㄧˊ ㄈㄨ", my: "အရေပြား", emoji: "✨", ex: "Gentle cleansing and moisture help skin." },
    { topic: "Health & Fitness", en: "hair", zh: "頭髮", pinyin: "tóu fa", zhuyin: "ㄊㄡˊ ˙ㄈㄚ", my: "ဆံပင်", emoji: "💇‍♀️", ex: "Be gentle with wet hair." },
    { topic: "Health & Fitness", en: "face", zh: "臉 / 臉部", pinyin: "liǎn / liǎn bù", zhuyin: "ㄌㄧㄢˇ / ㄌㄧㄢˇ ㄅㄨˋ", my: "မျက်နှာ", emoji: "🧴", ex: "Wash your face morning and night." },
    { topic: "Health & Fitness", en: "sunscreen", zh: "防曬乳", pinyin: "fáng shài rǔ", zhuyin: "ㄈㄤˊ ㄕㄞˋ ㄖㄨˇ", my: "နေရောင်ကာခရင်မ်", emoji: "☀️", ex: "Apply sunscreen before going out." },
    { topic: "Health & Fitness", en: "cleanliness", zh: "清潔 / 衛生", pinyin: "qīng jié / wèi shēng", zhuyin: "ㄑㄧㄥ ㄐㄧㄝˊ / ㄨㄟˋ ㄕㄥ", my: "သန့်ရှင်းရေး / ကျန်းမာရေးအသိ", emoji: "🧼", ex: "Cleanliness keeps germs away." },
    { topic: "Health & Fitness", en: "wash", zh: "洗", pinyin: "xǐ", zhuyin: "ㄒㄧˇ", my: "ဆေးကြောသည် / လျှော်သည်", emoji: "🚿", ex: "Wash your hands before eating." },
    { topic: "Health & Fitness", en: "brush", zh: "刷 / 刷子", pinyin: "shuā / shuā zi", zhuyin: "ㄕㄨㄚ / ㄕㄨㄚ ˙ㄗ", my: "တိုက်သည် / ဖြီးသည် / ဘရပ်ရှ်", emoji: "🪥", ex: "Brush teeth twice every day." },
    { topic: "Health & Fitness", en: "sick", zh: "生病的", pinyin: "shēng bìng de", zhuyin: "ㄕㄥ ㄅㄧㄥˋ ㄉㄜ˙", my: "နေမကောင်းသော / ဖျားနာသော", emoji: "🤒", ex: "Stay home and rest when sick." },
    { topic: "Health & Fitness", en: "fever", zh: "發燒", pinyin: "fā shāo", zhuyin: "ㄈㄚ ㄕㄠ", my: "ဖျားသည် / အဖျားတက်သည်", emoji: "🌡️", ex: "Check temperature if you feel feverish." },
    { topic: "Health & Fitness", en: "cough", zh: "咳嗽", pinyin: "ké sou", zhuyin: "ㄎㄜˊ ㄙㄡ", my: "ချောင်းဆိုးသည်", emoji: "😷", ex: "Cover your mouth when coughing." },
    { topic: "Health & Fitness", en: "headache", zh: "頭痛", pinyin: "tóu tòng", zhuyin: "ㄊㄡˊ ㄊㄨㄥˋ", my: "ခေါင်းကိုက်ခြင်း / ခေါင်းကိုက်သည်", emoji: "🤕", ex: "Screen breaks help prevent headache." },
    { topic: "Health & Fitness", en: "hurt", zh: "受傷 / 疼痛", pinyin: "shòu shāng / téng tòng", zhuyin: "ㄕㄡˋ ㄕㄤ / ㄊㄥˊ ㄊㄨㄥˋ", my: "နာကျင်သည် / ထိခိုက်ဒဏ်ရာရသည်", emoji: "🩹", ex: "Stop if a joint starts to hurt." },
    { topic: "Health & Fitness", en: "heal", zh: "癒合 / 治癒", pinyin: "yù hé / zhì yù", zhuyin: "ㄩˋ ㄏㄜˊ / ㄓˋ ㄩˋ", my: "အနာကျက်သည် / ပြန်ကောင်းလာသည်", emoji: "🌿", ex: "Give your body time to heal." },
    { topic: "Health & Fitness", en: "medicine", zh: "藥 / 藥物", pinyin: "yào / yào wù", zhuyin: "ㄧㄠˋ / ㄧㄠˋ ㄨˋ", my: "ဆေးဝါး", emoji: "💊", ex: "Follow advice when taking medicine." },
    { topic: "Health & Fitness", en: "hospital", zh: "醫院", pinyin: "yī yuàn", zhuyin: "ㄧ ㄩㄢˋ", my: "ဆေးရုံ", emoji: "🏥", ex: "Visit a clinic or hospital if needed." },
    { topic: "Health & Fitness", en: "fresh air", zh: "新鮮空氣", pinyin: "xīn xiān kōng qì", zhuyin: "ㄒㄧㄣ ㄒㄧㄢ ㄎㄨㄥ ㄑㄧˋ", my: "လေကောင်းလေသန့်", emoji: "🍃", ex: "Step out for fresh air." },
    { topic: "Health & Fitness", en: "posture", zh: "姿勢", pinyin: "zī shì", zhuyin: "ㄗ ㄕˋ", my: "ကိုယ်နေဟန်ထား", emoji: "🪑", ex: "Sit with good posture while typing." },
    { topic: "Health & Fitness", en: "balance diet", zh: "均衡飲食", pinyin: "jūn héng yǐn shí", zhuyin: "ㄐㄩㄣ ㄏㄥˊ ㄧㄣˇ ㄕˊ", my: "မျှတသောအာဟာရ / အစားအစာ", emoji: "🥗", ex: "A balanced diet supports growth." },
    { topic: "Health & Fitness", en: "protein", zh: "蛋白質", pinyin: "dàn bái zhì", zhuyin: "ㄉㄢˋ ㄅㄞˊ ㄓˋ", my: "ပရိုတင်း / အသားဓာတ်", emoji: "🥚", ex: "Protein helps repair muscles." },
    { topic: "Health & Fitness", en: "vitamin", zh: "維他命 / 維生素", pinyin: "wéi tā mìng / wéi shēng sù", zhuyin: "ㄨㄟˊ ㄊㄚ ㄇㄧㄥˋ / ㄨㄟˊ ㄕㄥ ㄙㄨˋ", my: "ဗီတာမင်", emoji: "🍊", ex: "Fruits provide helpful vitamins." },
    { topic: "Health & Fitness", en: "sugar", zh: "糖", pinyin: "táng", zhuyin: "ㄊㄤˊ", my: "သကြား / အချိုဓာတ်", emoji: "🍬", ex: "Cut back on too much sugar." },
    { topic: "Health & Fitness", en: "calm down", zh: "冷靜下來", pinyin: "lěng jìng xià lái", zhuyin: "ㄌㄥˇ ㄐㄧㄥˋ ㄒㄧㄚˋ ㄌㄞˊ", my: "စိတ်ငြိမ်အောင်ထားသည်", emoji: "🌊", ex: "Slow breathing helps calm down." },
    { topic: "Health & Fitness", en: "energetic", zh: "精力充沛的", pinyin: "jīng lì chōng pèi de", zhuyin: "ㄐㄧㄥ ㄌㄧˋ ㄔㄨㄥ ㄆㄟˋ ㄉㄜ˙", my: "တက်ကြွလန်းဆန်းသော", emoji: "⚡", ex: "Sleep makes me feel energetic." },
    { topic: "Health & Fitness", en: "active", zh: "活躍的 / 積極運動的", pinyin: "huó yuè de", zhuyin: "ㄏㄨㄛˊ ㄩㄝˋ ㄉㄜ˙", my: "လှုပ်ရှားတက်ကြွသော", emoji: "🏃", ex: "Stay active each week." },
    { topic: "Health & Fitness", en: "safe habit", zh: "安全習慣", pinyin: "ān quán xí guàn", zhuyin: "ㄢ ㄑㄩㄢˊ ㄒㄧˊ ㄍㄨㄢˋ", my: "ဘေးကင်းသောအလေ့အကျင့်", emoji: "🛡️", ex: "Good habits protect your health." },
    { topic: "Health & Fitness", en: "recovery", zh: "恢復", pinyin: "huī fù", zhuyin: "ㄏㄨㄟ ㄈㄨˋ", my: "ပြန်လည်ကောင်းမွန်လာခြင်း / ပြန်လည်နာလန်ထူခြင်း", emoji: "🔋", ex: "Sleep is key for recovery." },
    { topic: "Health & Fitness", en: "wellness", zh: "身心健康 / 康樂", pinyin: "shēn xīn jiàn kāng", zhuyin: "ㄕㄣ ㄒㄧㄣ ㄐㄧㄢˋ ㄎㄤ", my: "ကောင်းမွန်သော ကျန်းမာရေးအခြေအနေ", emoji: "🌸", ex: "Wellness covers body and mind." },
    { topic: "Health & Fitness", en: "deep breath", zh: "深呼吸", pinyin: "shēn hū xī", zhuyin: "ㄕㄣ ㄏㄨ ㄒㄧ", my: "အသက်ပြင်းပြင်းရှူခြင်း", emoji: "🌬️", ex: "Take a deep breath before starting." },
    { topic: "Health & Fitness", en: "towel", zh: "毛巾", pinyin: "máo jīn", zhuyin: "ㄇㄠˊ ㄐㄧㄣ", my: "မျက်နှာသုတ်ပဝါ", emoji: "🧻", ex: "Pack a clean towel in your bag." },
    { topic: "Health & Fitness", en: "alive", zh: "活著的 / 有生氣的", pinyin: "huó zhe de", zhuyin: "ㄏㄨㄛˊ ˙ㄓㄜ ㄉㄜ˙", my: "အသက်ရှင်သော / တက်ကြွသော", emoji: "🌿", ex: "Fresh mornings feel so alive." },

    // ==================== 10. TECH & MEDIA (50 words) ====================
    { topic: "Tech & Media", en: "computer", zh: "電腦", pinyin: "diàn nǎo", zhuyin: "ㄉㄧㄢˋ ㄋㄠˇ", my: "ကွန်ပျူတာ", emoji: "💻", ex: "I code on my laptop computer." },
    { topic: "Tech & Media", en: "laptop", zh: "筆記型電腦", pinyin: "bǐ jì xíng diàn nǎo", zhuyin: "ㄅㄧˇ ㄐㄧˋ ㄒㄧㄥˊ ㄉㄧㄢˋ ㄋㄠˇ", my: "လက်ပ်တော့", emoji: "💻", ex: "Carry your laptop in a padded sleeve." },
    { topic: "Tech & Media", en: "phone", zh: "手機", pinyin: "shǒu jī", zhuyin: "ㄕㄡˇ ㄐㄧ", my: "ဖုန်း", emoji: "📱", ex: "Put your phone on silent to focus." },
    { topic: "Tech & Media", en: "screen", zh: "螢幕", pinyin: "yíng mù", zhuyin: "ㄧㄥˊ ㄇㄨˋ", my: "ဖန်သားပြင် / စခရင်", emoji: "🖥️", ex: "Adjust screen brightness for comfort." },
    { topic: "Tech & Media", en: "keyboard", zh: "鍵盤", pinyin: "jiàn pán", zhuyin: "ㄐㄧㄢˋ ㄆㄢˊ", my: "ကီးဘုတ်", emoji: "⌨️", ex: "Shortcuts make keyboard work fast." },
    { topic: "Tech & Media", en: "mouse", zh: "滑鼠", pinyin: "huá shǔ", zhuyin: "ㄏㄨㄚˊ ㄕㄨˇ", my: "မောက်စ်", emoji: "🖱️", ex: "A smooth mouse helps precise edits." },
    { topic: "Tech & Media", en: "internet", zh: "網路 / 網際網路", pinyin: "wǎng lù / wǎng jì wǎng lù", zhuyin: "ㄨㄤˇ ㄌㄨˋ / ㄨㄤˇ ㄐㄧˋ ㄨㄤˇ ㄌㄨˋ", my: "အင်တာနက်", emoji: "🌐", ex: "Search carefully on the internet." },
    { topic: "Tech & Media", en: "website", zh: "網站", pinyin: "wǎng zhàn", zhuyin: "ㄨㄤˇ ㄓㄢˋ", my: "ဝဘ်ဆိုက်", emoji: "🕸️", ex: "This website runs smoothly in Chrome." },
    { topic: "Tech & Media", en: "app", zh: "應用程式", pinyin: "yìng yòng chéng shì", zhuyin: "ㄧㄥˋ ㄩㄥˋ ㄔㄥˊ ㄕˋ", my: "အက်ပ်", emoji: "📲", ex: "A good app makes daily tasks easy." },
    { topic: "Tech & Media", en: "code", zh: "程式碼 / 寫程式", pinyin: "chéng shì mǎ / xiě chéng shì", zhuyin: "ㄔㄥˊ ㄕˋ ㄇㄚˇ / ㄒㄧㄝˇ ㄔㄥˊ ㄕˋ", my: "ကုဒ် / ပရိုဂရမ်ရေးသည်", emoji: "👨‍💻", ex: "Clean code is easier to maintain." },
    { topic: "Tech & Media", en: "file", zh: "檔案", pinyin: "dàng àn", zhuyin: "ㄉㄤˋ ㄢˋ", my: "ဖိုင်", emoji: "📁", ex: "Save your file before closing." },
    { topic: "Tech & Media", en: "folder", zh: "資料夾", pinyin: "zī liào jiā", zhuyin: "ㄗ ㄌㄧㄠˋ ㄐㄧㄚ", my: "ဖိုဒါ", emoji: "📂", ex: "Organize projects into folders." },
    { topic: "Tech & Media", en: "save", zh: "儲存", pinyin: "chǔ cún", zhuyin: "ㄔㄨˇ ㄘㄨㄣˊ", my: "သိမ်းဆည်းသည် / Save လုပ်သည်", emoji: "💾", ex: "Save changes often while editing." },
    { topic: "Tech & Media", en: "upload", zh: "上傳", pinyin: "shàng chuán", zhuyin: "ㄕㄤˋ ㄔㄨㄢˊ", my: "တင်သည် / Upload လုပ်သည်", emoji: "⬆️", ex: "Upload the finished file on time." },
    { topic: "Tech & Media", en: "download", zh: "下載", pinyin: "xià zǎi", zhuyin: "ㄒㄧㄚˋ ㄗㄞˇ", my: "ဒေါင်းလုဒ်လုပ်သည်", emoji: "⬇️", ex: "Download files from trusted sites." },
    { topic: "Tech & Media", en: "search", zh: "搜尋", pinyin: "sōu xún", zhuyin: "ㄙㄡ ㄒㄩㄣˊ", my: "ရှာဖွေသည်", emoji: "🔍", ex: "Search with clear keywords." },
    { topic: "Tech & Media", en: "link", zh: "連結", pinyin: "lián jié", zhuyin: "ㄌㄧㄢˊ ㄐㄧㄝˊ", my: "လင့်ခ် / ချိတ်ဆက်မှု", emoji: "🔗", ex: "Check the link before sharing." },
    { topic: "Tech & Media", en: "message", zh: "訊息", pinyin: "xùn xí", zhuyin: "ㄒㄩㄣˋ ㄒㄧˊ", my: "မက်ဆေ့ချ် / သတင်းစကား", emoji: "✉️", ex: "Send a clear message." },
    { topic: "Tech & Media", en: "notification", zh: "通知", pinyin: "tōng zhī", zhuyin: "ㄊㄨㄥ ㄓ", my: "အသိပေးချက် / Notification", emoji: "🔔", ex: "Mute notifications when focusing." },
    { topic: "Tech & Media", en: "password", zh: "密碼", pinyin: "mì mǎ", zhuyin: "ㄇㄧˋ ㄇㄚˇ", my: "စကားဝှက်", emoji: "🔑", ex: "Keep your password private." },
    { topic: "Tech & Media", en: "account", zh: "帳號", pinyin: "zhàng hào", zhuyin: "ㄓㄤˋ ㄏㄠˋ", my: "အကောင့်", emoji: "👤", ex: "Log in to your account safely." },
    { topic: "Tech & Media", en: "setting", zh: "設定", pinyin: "shè dìng", zhuyin: "ㄕㄜˋ ㄉㄧㄥˋ", my: "ဆက်တင် / ချိန်ညှိချက်", emoji: "⚙️", ex: "Check microphone permission in settings." },
    { topic: "Tech & Media", en: "dark mode", zh: "深色模式", pinyin: "shēn sè mó shì", zhuyin: "ㄕㄣ ㄙㄜˋ ㄇㄛˊ ㄕˋ", my: "Dark Mode (အမှောင်မုဒ်)", emoji: "🌙", ex: "Dark mode feels soft at night." },
    { topic: "Tech & Media", en: "light mode", zh: "淺色模式", pinyin: "qiǎn sè mó shì", zhuyin: "ㄑㄧㄢˇ ㄙㄜˋ ㄇㄛˊ ㄕˋ", my: "Light Mode (အလင်းမုဒ်)", emoji: "☀️", ex: "Light mode is crisp in daylight." },
    { topic: "Tech & Media", en: "button", zh: "按鈕", pinyin: "àn niǔ", zhuyin: "ㄢˋ ㄋㄧㄡˇ", my: "ခလုတ်", emoji: "🔘", ex: "Click the button to start." },
    { topic: "Tech & Media", en: "icon", zh: "圖示", pinyin: "tú shì", zhuyin: "ㄊㄨˊ ㄕˋ", my: "အိုင်ကွန် / ပုံသင်္ကေတ", emoji: "💠", ex: "Clear icons guide users easily." },
    { topic: "Tech & Media", en: "audio", zh: "音訊 / 聲音", pinyin: "yīn xùn / shēng yīn", zhuyin: "ㄧㄣ ㄒㄩㄣˋ / ㄕㄥ ㄧㄣ", my: "အသံဖိုင် / အသံ", emoji: "🔊", ex: "Adjust audio speed to your level." },
    { topic: "Tech & Media", en: "voice", zh: "語音 / 聲音", pinyin: "yǔ yīn / shēng yīn", zhuyin: "ㄩˇ ㄧㄣ / ㄕㄥ ㄧㄣ", my: "အသံ", emoji: "🎙️", ex: "Speak clearly for voice tests." },
    { topic: "Tech & Media", en: "microphone", zh: "麥克風", pinyin: "mài kè fēng", zhuyin: "ㄇㄞˋ ㄎㄜˋ ㄈㄥ", my: "မိုက်ခရိုဖုန်း", emoji: "🎤", ex: "Allow microphone access for speaking." },
    { topic: "Tech & Media", en: "volume", zh: "音量", pinyin: "yīn liàng", zhuyin: "ㄧㄣ ㄌㄧㄤˋ", my: "အသံအတိုးအကျယ်", emoji: "🔉", ex: "Turn volume up to hear better." },
    { topic: "Tech & Media", en: "speed", zh: "速度", pinyin: "sù dù", zhuyin: "ㄙㄨˋ ㄉㄨˋ", my: "အမြန်နှုန်း", emoji: "⚡", ex: "Start at a comfortable speed." },
    { topic: "Tech & Media", en: "shortcut", zh: "快捷鍵", pinyin: "kuài jié jiàn", zhuyin: "ㄎㄨㄞˋ ㄐㄧㄝˊ ㄐㄧㄢˋ", my: "ဖြတ်လမ်းခလုတ် / Shortcut", emoji: "⌨️", ex: "Keyboard shortcuts save time." },
    { topic: "Tech & Media", en: "bug", zh: "程式錯誤 / 蟲子", pinyin: "chéng shì cuò wù", zhuyin: "ㄔㄥˊ ㄕˋ ㄘㄨㄛˋ ㄨˋ", my: "ကုဒ်အမှား / Bug", emoji: "🐛", ex: "Test carefully to spot bugs." },
    { topic: "Tech & Media", en: "update", zh: "更新", pinyin: "gēn xīn", zhuyin: "ㄍㄣ ㄒㄧㄣ", my: "အပ်ဒိတ်လုပ်သည် / အသစ်ပြင်သည်", emoji: "🔄", ex: "Update your browser for best support." },
    { topic: "Tech & Media", en: "refresh", zh: "重新整理", pinyin: "chóng xīn zhěng lǐ", zhuyin: "ㄔㄨㄥˊ ㄒㄧㄣ ㄓㄥˇ ㄌㄧˇ", my: "ပြန်လည်ဆန်းသစ်သည် / Refresh", emoji: "🔃", ex: "Refresh the page if needed." },
    { topic: "Tech & Media", en: "scroll", zh: "捲動", pinyin: "juǎn dòng", zhuyin: "ㄐㄩㄢˇ ㄉㄨㄥˋ", my: "အောက်သို့ဆွဲချသည် / Scroll", emoji: "🖱️", ex: "Scroll down to see more." },
    { topic: "Tech & Media", en: "click", zh: "點擊", pinyin: "diǎn jī", zhuyin: "ㄉㄧㄢˇ ㄐㄧ", my: "နှိပ်သည် / Click", emoji: "👆", ex: "Click to open the menu." },
    { topic: "Tech & Media", en: "copy", zh: "複製", pinyin: "fù zhì", zhuyin: "ㄈㄨˋ ㄓˋ", my: "ကူးယူသည် / Copy", emoji: "📋", ex: "Copy the text into your editor." },
    { topic: "Tech & Media", en: "paste", zh: "貼上", pinyin: "tiē shàng", zhuyin: "ㄊㄧㄝ ㄕㄤˋ", my: "ပြန်ထည့်သည် / Paste", emoji: "📌", ex: "Paste carefully in the right spot." },
    { topic: "Tech & Media", en: "delete", zh: "刪除", pinyin: "shān chú", zhuyin: "ㄕㄢ ㄔㄨˊ", my: "ဖျက်သည် / Delete", emoji: "🗑️", ex: "Double check before deleting." },
    { topic: "Tech & Media", en: "edit", zh: "編輯", pinyin: "biān jí", zhuyin: "ㄅㄧㄢ ㄐㄧˊ", my: "ပြင်ဆင်တည်းဖြတ်သည် / Edit", emoji: "✂️", ex: "Edit text until it reads smoothly." },
    { topic: "Tech & Media", en: "preview", zh: "預覽", pinyin: "yù lǎn", zhuyin: "ㄧˋ ㄌㄢˇ", my: "ကြိုတင်ကြည့်ရှုခြင်း / Preview", emoji: "👁️", ex: "Preview your page on screen." },
    { topic: "Tech & Media", en: "publish", zh: "發布", pinyin: "fā bù", zhuyin: "ㄈㄚ ㄅㄨˋ", my: "ထုတ်ဝေသည် / တင်သည်", emoji: "🚀", ex: "Publish when your project is ready." },
    { topic: "Tech & Media", en: "data", zh: "資料 / 數據", pinyin: "zī liào / shù jù", zhuyin: "ㄗ ㄌㄧㄠˋ / ㄕㄨˋ ㄐㄩˋ", my: "ဒေတာ / အချက်အလက်", emoji: "📊", ex: "Local storage keeps study data." },
    { topic: "Tech & Media", en: "memory", zh: "記憶體 / 記憶", pinyin: "jì yì tǐ / jì yì", zhuyin: "ㄐㄧˋ ㄧˋ ㄊㄧˇ / ㄐㄧˋ ㄧˋ", my: "မှတ်ဉာဏ် / Memory", emoji: "🧠", ex: "Close unused tabs to save memory." },
    { topic: "Tech & Media", en: "battery", zh: "電池 / 電量", pinyin: "diàn chí / diàn liàng", zhuyin: "ㄉㄧㄢˋ ㄔˊ / ㄉㄧㄢˋ ㄌㄧㄤˋ", my: "ဘက်ထရီ", emoji: "🔋", ex: "Charge your battery before trips." },
    { topic: "Tech & Media", en: "signal", zh: "訊號", pinyin: "xùn hào", zhuyin: "ㄒㄩㄣˋ ㄏㄠˋ", my: "ဆစ်ဂနယ် / လိုင်း", emoji: "📶", ex: "Strong signal helps fast loading." },
    { topic: "Tech & Media", en: "tool", zh: "工具", pinyin: "gōng jù", zhuyin: "ㄍㄨㄥ ㄐㄩˋ", my: "ကိရိယာ", emoji: "🧰", ex: "Use the right tool for each job." },
    { topic: "Tech & Media", en: "ai", zh: "人工智慧", pinyin: "rén gōng zhì huì", zhuyin: "ㄖㄣˊ ㄍㄨㄥ ㄓˋ ㄏㄨㄟˋ", my: "ဉာဏ်ရည်တု / AI", emoji: "🤖", ex: "AI can help brainstorm ideas." },
    { topic: "Tech & Media", en: "creative tech", zh: "創意科技", pinyin: "chuàng yì kē jì", zhuyin: "ㄔㄨㄤˋ ㄧˋ ㄎㄜ ㄐㄧˋ", my: "ဖန်တီးမှုနည်းပညာ", emoji: "✨", ex: "Creative tech blends art and code." }
];

const levelsData = {};
const wordsPerLevel = 10;
for (let lvl = 1; lvl <= 50; lvl++) {
    levelsData[lvl] = [];
    for (let i = 0; i < wordsPerLevel; i++) {
        const globalIndex = ((lvl - 1) * wordsPerLevel + i) % baseVocab.length;
        const item = baseVocab[globalIndex];
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
        const topicName = currentWords[0]?.topic ? ` • ${currentWords[0].topic}` : '';
        document.getElementById('fc-level-title').innerText = `Level ${lvl}${topicName}`;
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
            inputEl.placeholder = '中文သက်သက် ရိုက်ထည့်ပါ (ဥပမာ: 你好)';
        } else {
            document.getElementById('quiz-prompt-label').innerText = '中文 given -> Type ENGLISH ONLY';
            document.getElementById('quiz-word').innerText = `${word.zh} (${word.pinyin})`;
            inputEl.placeholder = 'Type English word ONLY (e.g. hello)';
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
        const validZh = word.zh.split('/').map(s => s.trim());
        if (validZh.includes(raw) || raw === word.zh) handleCorrectAnswer(word, 15);
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
    const primaryZh = word.zh.split('/')[0].trim();

    currentSpkItem = {
        word,
        lang: isChinese ? 'zh-TW' : 'en-US',
        targetText: isChinese ? primaryZh : word.en,
        allZhVariants: word.zh.split('/').map(s => s.trim())
    };

    document.getElementById('spk-emoji').innerText = word.emoji;
    document.getElementById('spk-lang-badge').innerText = isChinese ? `🇨🇳 中文 Only Mode • ${word.topic}` : `🇺🇸 English Only Mode • ${word.topic}`;
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
            const variants = currentSpkItem.allZhVariants || [currentSpkItem.targetText];
            const isMatch = variants.some(v => cleanHeard.includes(v) || v.includes(cleanHeard));

            if (isMatch) {
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
    const textToSpeak = lang === 'zh-TW' ? word.zh.split('/')[0].trim() : word.en;
    speakWord(textToSpeak, lang);
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

// -----------------------------
// QUESTIONS DATA
// -----------------------------
const questions = {
    math:[
        {q:"5 + 3 = ?", options:["6","7","8","9"], answer:2},
        {q:"10 * 2 = ?", options:["20","12","18","22"], answer:0},
        {q:"9 - 4 = ?", options:["3","5","6","7"], answer:1},
        {q:"7 + 6 = ?", options:["12","13","14","15"], answer:1},
        {q:"8 / 2 = ?", options:["2","3","4","5"], answer:2},
        {q:"15 - 7 = ?", options:["7","8","9","6"], answer:1},
        {q:"3 * 3 = ?", options:["6","8","9","7"], answer:2},
        {q:"12 + 5 = ?", options:["16","17","18","19"], answer:1},
        {q:"20 / 4 = ?", options:["4","5","6","7"], answer:1},
        {q:"14 - 6 = ?", options:["7","8","9","10"], answer:1}
    ],
    science:[
        {q:"H2O is ?", options:["Oxygen","Water","Hydrogen","Helium"], answer:1},
        {q:"Sun is ?", options:["Planet","Star","Moon","Comet"], answer:1},
        {q:"Gravity discovered by?", options:["Newton","Einstein","Galileo","Tesla"], answer:0},
        {q:"Boiling point of water?", options:["90°C","100°C","120°C","80°C"], answer:1},
        {q:"Earth revolves around?", options:["Moon","Sun","Mars","Venus"], answer:1},
        {q:"Light travels fastest in?", options:["Water","Air","Vacuum","Glass"], answer:2},
        {q:"Photosynthesis occurs in?", options:["Roots","Stem","Leaves","Flowers"], answer:2},
        {q:"Human blood color?", options:["Red","Green","Blue","Yellow"], answer:0},
        {q:"Oxygen symbol?", options:["O","H","C","N"], answer:0},
        {q:"Periodic table invented by?", options:["Mendeleev","Newton","Einstein","Bohr"], answer:0}
    ],
    history:[
        {q:"Who discovered America?", options:["Columbus","Newton","Einstein","Gandhi"], answer:0},
        {q:"World War II ended in?", options:["1945","1939","1918","1965"], answer:0},
        {q:"First President of USA?", options:["Lincoln","Washington","Adams","Jefferson"], answer:1},
        {q:"Fall of Rome?", options:["476 AD","500 AD","410 AD","450 AD"], answer:0},
        {q:"French Revolution year?", options:["1789","1799","1800","1776"], answer:0},
        {q:"Industrial Revolution started in?", options:["France","USA","Britain","Germany"], answer:2},
        {q:"Renaissance began in?", options:["Italy","France","Germany","Spain"], answer:0},
        {q:"Genghis Khan was?", options:["Chinese","Mongol","Indian","Persian"], answer:1},
        {q:"Magna Carta signed in?", options:["1215","1315","1415","1515"], answer:0},
        {q:"Cold War started in?", options:["1945","1939","1950","1960"], answer:0}
    ],
    movies:[
        {q:"Titanic released in?", options:["1995","1997","2000","1990"], answer:1},
        {q:"Oscar Best Picture 2020?", options:["Parasite","1917","Joker","Ford v Ferrari"], answer:0},
        {q:"Iron Man actor?", options:["Chris Evans","Robert Downey Jr","Chris Hemsworth","Mark Ruffalo"], answer:1},
        {q:"Avatar released in?", options:["2005","2009","2009","2010"], answer:2},
        {q:"Star Wars creator?", options:["Lucas","Spielberg","Cameron","Nolan"], answer:0},
        {q:"Harry Potter author?", options:["Tolkien","Rowling","Lewis","Martin"], answer:1},
        {q:"Matrix lead actor?", options:["Keanu Reeves","Will Smith","Tom Cruise","Brad Pitt"], answer:0},
        {q:"Lord of the Rings director?", options:["Jackson","Spielberg","Cameron","Fincher"], answer:0},
        {q:"Inception director?", options:["Nolan","Scott","Bay","Spielberg"], answer:0},
        {q:"Gladiator actor?", options:["Russell Crowe","Brad Pitt","Tom Hanks","Leonardo"], answer:0}
    ],
    geography:[
        {q:"Capital of France?", options:["Berlin","Madrid","Paris","Rome"], answer:2},
        {q:"Largest continent?", options:["Africa","Asia","Europe","America"], answer:1},
        {q:"Longest river?", options:["Amazon","Nile","Yangtze","Mississippi"], answer:1},
        {q:"Highest mountain?", options:["Everest","K2","Kangchenjunga","Lhotse"], answer:0},
        {q:"Desert in Africa?", options:["Sahara","Gobi","Kalahari","Arabian"], answer:0},
        {q:"Ocean between Africa & Australia?", options:["Atlantic","Indian","Pacific","Arctic"], answer:1},
        {q:"Country with largest population?", options:["USA","China","India","Russia"], answer:1},
        {q:"Capital of Japan?", options:["Beijing","Seoul","Tokyo","Bangkok"], answer:2},
        {q:"River in Egypt?", options:["Nile","Amazon","Ganges","Yangtze"], answer:0},
        {q:"Country famous for tulips?", options:["Netherlands","France","Italy","Germany"], answer:0}
    ],
    computers:[
        {q:"HTML stands for?", options:["Hyper Text Markup Language","Hot Mail","Home Tool","None"], answer:0},
        {q:"CPU stands for?", options:["Central Processing Unit","Computer Power Unit","Control Process Unit","Central Program Unit"], answer:0},
        {q:"RAM full form?", options:["Random Access Memory","Read Access Memory","Rapid Array Memory","Run Access Memory"], answer:0},
        {q:"Software is?", options:["Hardware","Program","Peripheral","Processor"], answer:1},
        {q:"First computer?", options:["ENIAC","Mac","PC","UNIVAC"], answer:0},
        {q:"Binary system uses?", options:["0 & 1","1 & 2","0 & 2","1 & 3"], answer:0},
        {q:"OS full form?", options:["Operating System","Open Source","Online Server","Output System"], answer:0},
        {q:"GPU stands for?", options:["Graphics Processing Unit","General Processing Unit","Graphic Power Unit","Global Processing Unit"], answer:0},
        {q:"HTTP stands for?", options:["Hyper Text Transfer Protocol","Hyperlink Text Transfer Protocol","Hyper Text Tool Protocol","Hyper Text Transport Protocol"], answer:0},
        {q:"SSD full form?", options:["Solid State Drive","Super Speed Disk","Solid Storage Device","Solid System Drive"], answer:0}
    ]
};

// -----------------------------
// GLOBAL VARIABLES
// -----------------------------
let selectedTopic = null;
let currentQuestions = [];
let currentQ = 0;
let score = 0;
let wrong = 0;

// -----------------------------
// HELPER: Shuffle Array
// -----------------------------
function shuffleArray(array){
    return array.sort(()=>Math.random()-0.5);
}

// -----------------------------
// TOPIC SELECTION
// -----------------------------
const topicCards = document.querySelectorAll('.topic-card');
topicCards.forEach(card=>{
    card.addEventListener('click', ()=>{
        selectedTopic = card.dataset.topic;
        topicCards.forEach(c=>{
    if(c.dataset.topic !== selectedTopic){
        c.classList.add('hide');   // smoothly hide
    }else{
        c.classList.add('selected'); // size increase
    }
});

        document.getElementById('start-quiz').style.display='inline-block';
        document.getElementById('message').style.display='none';
    });
});


// -----------------------------
// START QUIZ
// -----------------------------
document.getElementById('start-quiz').addEventListener('click', ()=>{
    if(!selectedTopic){
        const msg=document.getElementById('message');
        msg.innerText="Select a topic first!";
        msg.style.display="block";
        return;
    }
    document.getElementById('front-page').style.display='none';
    document.getElementById('quiz-page').style.display='flex';
    startQuiz(selectedTopic);
});

// -----------------------------
// START QUIZ FUNCTION
// -----------------------------
function startQuiz(topic){
    const topicQuestions = questions[topic] || [];
    if(topicQuestions.length===0){
        const msg=document.getElementById('message');
        msg.innerText="Questions not available for this topic!";
        msg.style.display="block";
        return;
    }

    // Shuffle & repeat to make 10 questions
    currentQuestions=[];
    while(currentQuestions.length<10){
        currentQuestions.push(...shuffleArray([...topicQuestions]));
    }
    currentQuestions=currentQuestions.slice(0,10);

    currentQ=0; score=0; wrong=0;
    document.getElementById('quiz-topic').innerText=topic.toUpperCase();
    document.getElementById('total-q').innerText=currentQuestions.length;
    updateStats();
    showQuestion();
}

// -----------------------------
// UPDATE STATS
// -----------------------------
function updateStats(){
    document.getElementById('current-q').innerText=currentQ;
    document.getElementById('correct-q').innerText=score;
    document.getElementById('wrong-q').innerText=wrong;
}

// -----------------------------
// SHOW QUESTION
// -----------------------------
function showQuestion(){
    if (currentQ >= currentQuestions.length) {

    // 🔥 quiz-page poora hide
    document.getElementById("quiz-page").style.display = "none";

    // 🔥 result-page show
    const resultPage = document.getElementById("result-page");
    resultPage.style.display = "flex";

    resultPage.innerHTML = `
        <div class="result-container">
            <div class="result-card">
                <h2>Quiz Over!</h2>

                <p class="result correct">
                    ✅ Correct: <span>${score}</span>
                </p>

                <p class="result wrong">
                    ❌ Wrong: <span>${wrong}</span>
                </p>

                <button class="restart-btn" onclick="location.reload()">
                    Restart Quiz
                </button>
            </div>
        </div>
    `;
    return;
}



    const qObj = currentQuestions[currentQ];
    document.getElementById('question-text').innerText = qObj.q;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML='';

    qObj.options.forEach((opt,i)=>{
        const btn=document.createElement('button');
        btn.className='option-btn';
        btn.innerText=opt;
        btn.addEventListener('click', ()=>{
            if(i===qObj.answer) score++; else wrong++;
            currentQ++;
            updateStats();
            showQuestion();
        });
        optionsContainer.appendChild(btn);
    });
}

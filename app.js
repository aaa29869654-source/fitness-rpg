
const EMBEDDED_DATA = {
  exercises: [{"id": "chair-squat", "name": "椅子深蹲", "cue": "臀部向後找椅子，膝蓋朝腳尖方向，起身時踩穩地面。", "instructions": "站在椅子前，雙腳約與肩同寬。控制下降直到輕碰椅面，再平穩站起。", "mistakes": "膝蓋明顯內夾、快速跌坐、腳跟離地。", "breathing": "下降吸氣，站起時吐氣。", "regression": "使用較高椅面或扶穩固定物。", "progression": "徒手深蹲或抱輕啞鈴深蹲。"}, {"id": "incline-pushup", "name": "斜板伏地挺身", "cue": "身體保持一直線，胸口靠近支撐面，肩膀不要聳起。", "instructions": "雙手放在穩固桌面或牆面，核心收緊，彎肘降低身體後推回。", "mistakes": "腰部下沉、頭向前伸、手肘過度張開。", "breathing": "下降吸氣，推起吐氣。", "regression": "改用更高的牆面。", "progression": "使用較低支撐面，之後進階地板伏地挺身。"}, {"id": "glute-bridge", "name": "臀橋", "cue": "腳跟踩地，骨盆平穩抬起，不要用腰部過度拱起。", "instructions": "仰躺屈膝，收緊臀部抬高骨盆，到肩、髖、膝大致成一直線。", "mistakes": "膝蓋外翻或內夾、腰部過伸、用腳尖推。", "breathing": "抬起吐氣，下降吸氣。", "regression": "縮小抬起幅度。", "progression": "單腳臀橋或增加輕阻力。"}, {"id": "bird-dog", "name": "鳥狗式", "cue": "骨盆保持水平，手腳伸長而不是抬得很高。", "instructions": "四足跪姿，慢慢伸出對側手腳，停留後回到起始。", "mistakes": "腰部旋轉、抬腿過高、速度太快。", "breathing": "伸出時吐氣，回程吸氣。", "regression": "只伸手或只伸腳。", "progression": "延長停留時間。"}, {"id": "supported-split-squat", "name": "扶握分腿蹲", "cue": "扶穩固定物，身體向下而不是向前衝。", "instructions": "採前後站姿，扶住穩固物，雙膝彎曲下降，再由前腳推回。", "mistakes": "前膝內夾、步距太窄、失去平衡。", "breathing": "下降吸氣，起身吐氣。", "regression": "減少深度。", "progression": "不扶握或手持輕啞鈴。"}, {"id": "band-row", "name": "彈力帶划船", "cue": "肩胛骨向後下方靠攏，手肘貼近身體。", "instructions": "將彈力帶固定於安全位置，拉向身體兩側並控制回程。", "mistakes": "聳肩、身體後仰、回程失控。", "breathing": "拉回吐氣，放回吸氣。", "regression": "使用較輕阻力或毛巾等長拉。", "progression": "增加阻力或停留時間。"}, {"id": "hip-hinge", "name": "髖關節折疊", "cue": "臀部向後推，脊柱保持自然，感受大腿後側張力。", "instructions": "雙腳站穩，膝微彎，臀部向後移，軀幹前傾後站回。", "mistakes": "彎腰駝背、膝蓋變成深蹲、重心跑到腳尖。", "breathing": "下降吸氣，站起吐氣。", "regression": "臀部觸牆練習。", "progression": "抱輕重量羅馬尼亞硬舉。"}, {"id": "dead-bug", "name": "死蟲式", "cue": "下背保持穩定，手腳慢慢遠離身體。", "instructions": "仰躺抬起手腳，交替伸出對側手腳，保持軀幹不晃動。", "mistakes": "下背拱起、憋氣、動作太快。", "breathing": "伸出時長吐氣，回程吸氣。", "regression": "腳跟點地。", "progression": "延長槓桿或加入輕阻力。"}, {"id": "brisk-walk", "name": "快走", "cue": "保持能說完整句子的速度，步伐自然。", "instructions": "在安全平坦處持續步行，逐步增加時間而不是突然衝速度。", "mistakes": "一開始太快、忽略環境安全、疼痛仍勉強持續。", "breathing": "自然規律呼吸。", "regression": "輕鬆步行並分段完成。", "progression": "增加時間、坡度或短暫較快區間。"}, {"id": "calf-stretch", "name": "小腿伸展", "cue": "後腳跟貼地，膝蓋朝前。", "instructions": "扶牆採弓箭步，後腿伸直並保持腳跟落地。", "mistakes": "腳尖外轉、彈震式拉伸。", "breathing": "緩慢自然呼吸。", "regression": "縮小步距。", "progression": "後膝微彎，改變伸展位置。"}, {"id": "march", "name": "原地踏步", "cue": "軀幹直立，擺臂自然。", "instructions": "以舒服速度原地踏步，逐步提高體溫。", "mistakes": "憋氣、聳肩、動作過猛。", "breathing": "自然呼吸。", "regression": "扶椅慢速踏步。", "progression": "提高膝蓋或加快節奏。"}, {"id": "wall-slide", "name": "牆面滑手", "cue": "肋骨不要外翻，在無痛範圍滑動手臂。", "instructions": "背靠牆，手臂沿牆慢慢向上滑，再回到起點。", "mistakes": "為追求高度而拱腰、肩部疼痛仍勉強。", "breathing": "上滑吐氣，下降吸氣。", "regression": "縮小範圍。", "progression": "離牆站立控制肩胛。"}, {"id": "cat-cow", "name": "貓牛式", "cue": "緩慢分節活動脊柱，不要甩動。", "instructions": "四足跪姿，交替溫和拱背與伸展。", "mistakes": "速度太快、頸部過度仰伸。", "breathing": "拱背吐氣，伸展吸氣。", "regression": "縮小活動幅度。", "progression": "增加停留和控制。"}, {"id": "hip-flexor-stretch", "name": "髖屈肌伸展", "cue": "骨盆微後傾，不用大幅向前壓。", "instructions": "半跪姿，收緊後側臀部並輕微前移。", "mistakes": "腰部過度拱起、彈震。", "breathing": "緩慢自然呼吸。", "regression": "站姿版本。", "progression": "同側手臂上舉。"}, {"id": "easy-walk", "name": "輕鬆散步", "cue": "保持舒服、能輕鬆交談的速度。", "instructions": "在安全環境散步，目的為促進活動與恢復。", "mistakes": "把恢復日做成高強度訓練。", "breathing": "自然呼吸。", "regression": "分成兩段各 5 分鐘。", "progression": "僅在感覺良好時稍微增加時間。"}, {"id": "box-breathing", "name": "方形呼吸", "cue": "吸、停、吐、停，各自維持相近時間。", "instructions": "以舒服節奏進行，例如每階段 4 秒；不需勉強憋氣。", "mistakes": "呼吸過深造成頭暈、強迫延長閉氣。", "breathing": "依方形節奏。", "regression": "取消停頓，改為慢吸慢吐。", "progression": "延長吐氣但仍保持舒適。"}, {"id": "gentle-mobility", "name": "溫和全身活動", "cue": "肩、髖、踝在無痛範圍緩慢活動。", "instructions": "選擇 3–4 個舒服的關節活動，每個約 30 秒。", "mistakes": "追求極端角度、彈震。", "breathing": "自然呼吸。", "regression": "坐姿活動。", "progression": "增加控制而非硬拉幅度。"}],
  worlds: [{"name": "覺醒村", "focus": "建立規律運動", "boss": "怠惰史萊姆"}, {"name": "翠影森林", "focus": "全身基礎肌力", "boss": "姿勢魔像"}, {"name": "核心神殿", "focus": "軀幹穩定", "boss": "搖晃守衛"}, {"name": "鐵脊山岳", "focus": "下肢力量", "boss": "岩石巨人"}, {"name": "潮汐海港", "focus": "心肺耐力", "boss": "窒息海獸"}, {"name": "赤砂荒原", "focus": "飲食與能量管理", "boss": "暴食巨人"}, {"name": "霜息冰原", "focus": "睡眠與恢復", "boss": "熬夜女巫"}, {"name": "雲端城邦", "focus": "肌肉量與訓練量", "boss": "風暴騎士"}, {"name": "力量帝國", "focus": "進階力量", "boss": "鋼鐵將軍"}, {"name": "深淵競技場", "focus": "綜合體能", "boss": "疲勞吞噬者"}, {"name": "魔王城", "focus": "習慣整合", "boss": "放棄之王"}, {"name": "光明神殿", "focus": "長期自主訓練", "boss": "昨日的自己"}],
  academy: [{"id": "safety", "title": "辨識安全訊號", "summary": "分辨正常用力、延遲性痠痛與需要停止的警訊。"}, {"id": "warmup", "title": "暖身不是儀式", "summary": "用漸進活動提高體溫，並排練今天會用到的動作。"}, {"id": "effort", "title": "保留餘力", "summary": "新手多數訓練不必做到力竭，先維持穩定技術。"}, {"id": "progression", "title": "如何安全進步", "summary": "先增加穩定性與次數，再逐步增加阻力或難度。"}, {"id": "recovery", "title": "恢復也是訓練", "summary": "疲勞、睡眠與疼痛會影響課表；降低負荷不代表失敗。"}, {"id": "consistency", "title": "長期一致性", "summary": "可持續的少量訓練，通常勝過偶爾一次過量訓練。"}]
};


const STORAGE_KEY = "fitnessOdysseyV7Build1";
const $ = (s) => document.querySelector(s);
const view = $("#view");
const title = $("#page-title");
const modal = $("#modal");
const modalContent = $("#modal-content");

const defaultState = {
  createdAt: new Date().toISOString(),
  day: 1,
  week: 1,
  route: "today",
  onboardingDone: false,
  profile: { name: "新英雄", goal: "健康強健", level: "beginner", minutes: 25, equipment: "bodyweight" },
  readiness: { energy: 3, soreness: 1, sleep: 3 },
  completedToday: [],
  history: [],
  xp: 0,
  streak: 0,
  stats: { strength: 8, endurance: 8, core: 8, mobility: 8, recovery: 8 },
  unlockedWorld: 1,
  academyCompleted: [],
  lastDate: null
};

let state = loadState();
let db = { exercises: [], worlds: [], academy: [] };
let deferredPrompt = null;

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? {...defaultState, ...JSON.parse(raw)} : structuredClone(defaultState);
  }catch{
    return structuredClone(defaultState);
  }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function todayKey(){ return new Date().toISOString().slice(0,10); }

async function loadData(){ db = EMBEDDED_DATA; }

function normalizeDay(){
  const tk = todayKey();
  if(state.lastDate && state.lastDate !== tk){
    state.day += 1;
    state.week = Math.min(52, Math.ceil(state.day / 7));
    state.completedToday = [];
  }
  state.lastDate = tk;
  saveState();
}

function esc(v=""){ return String(v).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c])); }
function pct(n,max=100){ return Math.max(0,Math.min(100,Math.round(n/max*100))); }

function chooseWorkout(){
  const lowReadiness = state.readiness.energy <= 1 || state.readiness.soreness >= 4 || state.readiness.sleep <= 1;
  if(lowReadiness) return makeRecovery();
  const pattern = (state.day - 1) % 7;
  if(pattern === 0 || pattern === 3) return makeStrength(pattern === 0 ? "A" : "B");
  if(pattern === 1 || pattern === 5) return makeCardio();
  if(pattern === 2) return makeMobility();
  return makeRecovery();
}
function phase(){
  if(state.week <= 4) return {name:"適應期", sets:2, reps:"6–10", seconds:15};
  if(state.week <= 8) return {name:"基礎期", sets:3, reps:"8–12", seconds:25};
  return {name:"強化期", sets:3, reps:"10–15", seconds:35};
}
function ex(id){ return db.exercises.find(x=>x.id===id); }
function item(id, sets, target){ return {...ex(id), sets, target}; }

function makeStrength(type){
  const p = phase();
  const ids = type==="A"
    ? ["chair-squat","incline-pushup","glute-bridge","bird-dog"]
    : ["supported-split-squat","band-row","hip-hinge","dead-bug"];
  const exercises = ids.map((id,i)=>item(id,p.sets,i===3?`${p.seconds} 秒`:`${p.reps} 次`));
  return {type:"肌力", icon:"🛡️", name:`全身肌力 ${type}`, phase:p.name, minutes:state.profile.minutes,
    purpose:"練習推、拉、蹲、髖與核心控制。動作品質優先，不必做到力竭。",
    exercises};
}
function makeCardio(){
  const p = phase();
  const mins = Math.max(12, Math.min(35, 12 + (state.week-1)*2));
  return {type:"心肺", icon:"❤️", name:"談話速度有氧", phase:p.name, minutes:mins,
    purpose:"維持可說完整句子的強度；感覺約 10 分中的 4–6 分。",
    exercises:[item("brisk-walk",1,`${mins} 分鐘`),item("calf-stretch",1,"左右各 30 秒")]};
}
function makeMobility(){
  return {type:"活動度", icon:"🧘", name:"關節活動與核心控制", phase:phase().name, minutes:18,
    purpose:"用舒服的範圍練習，不追求疼痛或極端拉伸。",
    exercises:["march","wall-slide","cat-cow","dead-bug","hip-flexor-stretch"].map(id=>item(id,2,id==="dead-bug"?"左右各 6–8 次":"30–45 秒"))};
}
function makeRecovery(){
  return {type:"恢復", icon:"🌿", name:"主動恢復日", phase:phase().name, minutes:15,
    purpose:"疲勞高時降低負荷。恢復不是偷懶，而是訓練計畫的一部分。",
    exercises:[item("easy-walk",1,"10 分鐘"),item("box-breathing",1,"3 分鐘"),item("gentle-mobility",1,"2 分鐘")]};
}

function dailyTasks(workout){
  return [
    {id:"readiness", name:"完成今日狀態檢查", meta:"精神、痠痛、睡眠"},
    {id:"warmup", name:"暖身", meta:"約 5 分鐘"},
    {id:"workout", name:workout.name, meta:`${workout.minutes} 分鐘 · ${workout.type}`},
    {id:"cooldown", name:"收操與呼吸", meta:"約 3–5 分鐘"}
  ];
}

function render(){
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.route===state.route));
  const titles={today:"今日主線",world:"世界地圖",academy:"英雄學院",hero:"英雄能力",journal:"命運之書",settings:"設定"};
  title.textContent=titles[state.route]||"Fitness Odyssey";
  ({today:renderToday,world:renderWorld,academy:renderAcademy,hero:renderHero,journal:renderJournal,settings:renderSettings}[state.route]||renderToday)();
}
function renderToday(){
  const workout=chooseWorkout();
  const tasks=dailyTasks(workout);
  const done=tasks.filter(t=>state.completedToday.includes(t.id)).length;
  const bossHp=Math.round((1-done/tasks.length)*100);
  view.innerHTML=`
    <section class="card hero-card">
      <div class="row between">
        <div><span class="badge">第 ${state.day} 天 · 第 ${state.week} 週</span><h2 style="margin:12px 0 5px">${workout.icon} ${esc(workout.name)}</h2><p class="muted">${esc(workout.phase)} · ${workout.minutes} 分鐘</p></div>
        <div style="text-align:right"><div class="big-number">${done}/${tasks.length}</div><small class="muted">主線完成</small></div>
      </div>
      <div class="progress"><span style="width:${pct(done,tasks.length)}%"></span></div>
    </section>

    <section class="card">
      <div class="row between"><h2>怠惰史萊姆</h2><strong class="${bossHp===0?"green":"danger"}">${bossHp===0?"已擊敗":`HP ${bossHp}%`}</strong></div>
      <div class="progress"><span style="width:${bossHp}%;background:linear-gradient(90deg,#ff7185,#ffb35c)"></span></div>
      <p class="muted" style="margin:10px 0 0">每完成一個真實訓練階段，Boss 才會受到傷害。</p>
    </section>

    <section class="card">
      <div class="row between"><h2>今日任務</h2><button class="btn secondary" onclick="openReadiness()">狀態檢查</button></div>
      ${tasks.map(t=>`
        <div class="quest ${state.completedToday.includes(t.id)?"done":""}">
          <button class="quest-check" onclick="toggleTask('${t.id}')">${state.completedToday.includes(t.id)?"✓":""}</button>
          <div><div class="quest-name">${esc(t.name)}</div><div class="quest-meta">${esc(t.meta)}</div></div>
          ${t.id==="workout"?`<button class="btn secondary" onclick="openWorkout()">查看</button>`:""}
        </div>`).join("")}
    </section>

    <section class="card">
      <h2>教練判斷</h2>
      <p>${esc(workout.purpose)}</p>
      <div class="notice">出現胸痛、暈眩、呼吸異常或尖銳疼痛時，請停止運動並尋求專業協助。一般肌肉用力感不等於疼痛。</div>
    </section>`;
}
function renderWorld(){
  view.innerHTML=`<section class="card"><h2>十二王國</h2><p class="muted">每個王國代表一段真實的體能養成階段。Build 1 已建立完整地圖與解鎖框架。</p></section>
  <div class="world">${db.worlds.map((w,i)=>{
    const unlocked=i<state.unlockedWorld;
    return `<article class="world-node ${unlocked?"unlocked":"locked"}">
      <div class="row between"><strong>${i+1}. ${esc(w.name)}</strong><span>${unlocked?"已解鎖":"🔒"}</span></div>
      <div class="muted">${esc(w.focus)} · Boss：${esc(w.boss)}</div>
    </article>`;
  }).join("")}</div>`;
}
function renderAcademy(){
  view.innerHTML=`<section class="card"><h2>英雄學院</h2><p class="muted">先學會安全訓練，再追求更高強度。</p></section>
  ${db.academy.map((l,i)=>`
    <article class="lesson">
      <div class="row between"><div><span class="badge">課程 ${i+1}</span><h3 style="margin:10px 0 4px">${esc(l.title)}</h3><p class="muted">${esc(l.summary)}</p></div>
      <button class="btn ${state.academyCompleted.includes(l.id)?"secondary":""}" onclick="completeLesson('${l.id}')">${state.academyCompleted.includes(l.id)?"已完成":"學習"}</button></div>
    </article>`).join("")}`;
}
function renderHero(){
  const s=state.stats;
  const stats=[["力量",s.strength],["耐力",s.endurance],["核心",s.core],["活動度",s.mobility],["恢復",s.recovery]];
  view.innerHTML=`
  <section class="card hero-card"><div class="row between"><div><span class="badge">${esc(state.profile.goal)}</span><h2 style="margin:12px 0 4px">${esc(state.profile.name)}</h2><p class="muted">${esc(state.profile.level)} · ${state.xp} XP</p></div><div class="big-number">${state.streak}</div></div><small class="muted">目前連續完成天數</small></section>
  <section class="card"><h2>真實能力趨勢</h2>${stats.map(([n,v])=>`<div class="bar-label"><span>${n}</span><strong>${v}</strong></div><div class="progress"><span style="width:${v}%"></span></div>`).join("")}</section>
  <section class="card"><h2>設計原則</h2><p class="muted">能力值來自完成課程與長期一致性，不鼓勵為了遊戲數字過度訓練。</p></section>`;
}
function renderJournal(){
  view.innerHTML=`<section class="card"><div class="row between"><h2>訓練紀錄</h2><span class="badge">${state.history.length} 筆</span></div>
  ${state.history.length?state.history.slice().reverse().map(h=>`<div class="lesson"><strong>${esc(h.title)}</strong><div class="muted">${esc(h.date)} · ${esc(h.detail)}</div></div>`).join(""):`<p class="muted">完成今天全部主線後，第一頁故事就會寫入這裡。</p>`}</section>`;
}
function renderSettings(){
  view.innerHTML=`<section class="card"><h2>英雄設定</h2>
    <label><span>名稱</span><input id="name-input" value="${esc(state.profile.name)}"></label>
    <label><span>主要目標</span><select id="goal-input"><option>健康強健</option><option>建立習慣</option><option>提升肌力</option><option>改善心肺</option><option>體態管理</option></select></label>
    <label><span>平常可訓練時間</span><select id="minutes-input"><option value="15">15 分鐘</option><option value="25">25 分鐘</option><option value="40">40 分鐘</option></select></label>
    <button class="btn full" onclick="saveSettings()">儲存設定</button>
  </section>
  <section class="card"><h2>資料管理</h2><div class="grid"><button class="btn secondary" onclick="exportData()">匯出紀錄</button><button class="btn danger" onclick="resetData()">重設資料</button></div></section>
  <section class="card"><h2>版本</h2><p class="muted">App V7.0 Build 1 · Program 2026.1 · Exercise DB 1.0</p></section>`;
  setTimeout(()=>{
    $("#goal-input").value=state.profile.goal;
    $("#minutes-input").value=String(state.profile.minutes);
  },0);
}

window.toggleTask=(id)=>{
  const exists=state.completedToday.includes(id);
  state.completedToday=exists?state.completedToday.filter(x=>x!==id):[...state.completedToday,id];
  if(!exists){
    if(id==="workout"){ state.stats.strength=Math.min(100,state.stats.strength+1); state.stats.core=Math.min(100,state.stats.core+1); }
    if(id==="cooldown"){ state.stats.mobility=Math.min(100,state.stats.mobility+1); state.stats.recovery=Math.min(100,state.stats.recovery+1); }
  }
  const all=["readiness","warmup","workout","cooldown"].every(x=>state.completedToday.includes(x));
  if(all && !state.history.some(h=>h.date===todayKey())){
    state.xp+=100; state.streak+=1;
    state.history.push({date:todayKey(),title:`第 ${state.day} 天主線完成`,detail:chooseWorkout().name});
    if(state.day%7===0) state.unlockedWorld=Math.min(12,state.unlockedWorld+1);
  }
  saveState(); render();
};
window.openReadiness=()=>{
  modalContent.innerHTML=`<h2>Hero Compass</h2><p class="muted">請依今天狀態回答，系統會降低或調整課程負荷。</p>
  <label><span>精神（1 很差－5 很好）</span><input id="energy" type="number" min="1" max="5" value="${state.readiness.energy}"></label>
  <label><span>全身痠痛（1 很少－5 很高）</span><input id="soreness" type="number" min="1" max="5" value="${state.readiness.soreness}"></label>
  <label><span>睡眠（1 很差－5 很好）</span><input id="sleep" type="number" min="1" max="5" value="${state.readiness.sleep}"></label>
  <button class="btn full" onclick="saveReadiness()">套用並重新排課</button>`;
  modal.showModal();
};
window.saveReadiness=()=>{
  state.readiness={energy:+$("#energy").value,soreness:+$("#soreness").value,sleep:+$("#sleep").value};
  if(!state.completedToday.includes("readiness")) state.completedToday.push("readiness");
  saveState(); modal.close(); render();
};
window.openWorkout=()=>{
  const w=chooseWorkout();
  modalContent.innerHTML=`<h2>${w.icon} ${esc(w.name)}</h2><p class="muted">${esc(w.purpose)}</p>
  ${w.exercises.map((e,i)=>`<article class="lesson"><div class="row between"><strong>${i+1}. ${esc(e.name)}</strong><span class="badge">${e.sets} 組 · ${esc(e.target)}</span></div><p class="muted">${esc(e.cue)}</p><div class="exercise-actions"><button class="btn ghost" onclick="showExercise('${e.id}')">技術與替代動作</button></div></article>`).join("")}
  <div class="notice">每組保留約 2–4 次餘力。動作失去控制、出現尖銳疼痛或不適時立即停止。</div>`;
  modal.showModal();
};
window.showExercise=(id)=>{
  const e=ex(id);
  if(!e) return;
  modalContent.innerHTML=`<h2>${esc(e.name)}</h2><p>${esc(e.instructions)}</p>
  <h3>常見錯誤</h3><p class="muted">${esc(e.mistakes)}</p>
  <h3>呼吸</h3><p class="muted">${esc(e.breathing)}</p>
  <h3>較簡單替代</h3><p class="muted">${esc(e.regression)}</p>
  <h3>較進階版本</h3><p class="muted">${esc(e.progression)}</p>`;
};
window.completeLesson=(id)=>{
  if(!state.academyCompleted.includes(id)){state.academyCompleted.push(id);state.xp+=20;}
  saveState(); render();
};
window.saveSettings=()=>{
  state.profile.name=$("#name-input").value.trim()||"新英雄";
  state.profile.goal=$("#goal-input").value;
  state.profile.minutes=+$("#minutes-input").value;
  saveState(); render();
};
window.exportData=()=>{
  const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="fitness-odyssey-save.json";a.click();URL.revokeObjectURL(a.href);
};
window.resetData=()=>{
  if(confirm("確定要清除所有本機進度嗎？")){
    localStorage.removeItem(STORAGE_KEY);state=structuredClone(defaultState);normalizeDay();render();
  }
};

document.querySelectorAll(".bottom-nav button").forEach(btn=>btn.addEventListener("click",()=>{state.route=btn.dataset.route;saveState();render();}));
$("#modal-close").addEventListener("click",()=>modal.close());
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#install-btn").classList.remove("hidden");});
$("#install-btn").addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#install-btn").classList.add("hidden");});

(async function init(){
  try{
    await loadData();
    normalizeDay();
    render();
    if("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js");
  }catch(err){
    view.innerHTML=`<section class="card"><h2>載入失敗</h2><p class="danger">${esc(err.message)}</p><p class="muted">請確認所有 data 資料夾檔案已一起上傳。</p></section>`;
  }
})();

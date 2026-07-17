
const DATA = {
  exercises: [{"id": "chair-squat", "name": "椅子深蹲", "cue": "臀部向後找椅子，膝蓋朝腳尖方向。", "instructions": "站在椅子前，控制下降直到輕碰椅面，再平穩站起。", "mistakes": "膝內夾、跌坐、腳跟離地。", "breathing": "下降吸氣，站起吐氣。", "regression": "較高椅面或扶穩固定物。", "progression": "徒手深蹲或抱輕啞鈴。"}, {"id": "bodyweight-squat", "name": "徒手深蹲", "cue": "腳掌踩穩，膝蓋與腳尖同向。", "instructions": "雙腳約肩寬，臀部向後下方移動，再站回。", "mistakes": "膝內夾、腰背失去控制。", "breathing": "下降吸氣，站起吐氣。", "regression": "椅子深蹲。", "progression": "高腳杯深蹲。"}, {"id": "incline-pushup", "name": "斜板伏地挺身", "cue": "身體保持一直線，胸口靠近支撐面。", "instructions": "雙手放穩固桌面或牆面，彎肘降低身體後推回。", "mistakes": "腰下沉、頭前伸、手肘過度張開。", "breathing": "下降吸氣，推起吐氣。", "regression": "牆面伏地挺身。", "progression": "較低支撐面或地板伏地挺身。"}, {"id": "wall-pushup", "name": "牆面伏地挺身", "cue": "全身成一直線，胸口靠近牆面。", "instructions": "雙手撐牆，彎肘靠近後推回。", "mistakes": "腰部下沉、聳肩。", "breathing": "靠近吸氣，推回吐氣。", "regression": "縮短距離。", "progression": "斜板伏地挺身。"}, {"id": "knee-pushup", "name": "跪姿伏地挺身", "cue": "膝蓋到頭保持穩定直線。", "instructions": "跪姿支撐，胸口下降後推起。", "mistakes": "臀部翹高、腰下沉。", "breathing": "下降吸氣，推起吐氣。", "regression": "斜板伏地挺身。", "progression": "標準伏地挺身。"}, {"id": "glute-bridge", "name": "臀橋", "cue": "腳跟踩地，骨盆平穩抬起。", "instructions": "仰躺屈膝，收緊臀部抬高骨盆。", "mistakes": "膝內夾、腰過度拱起。", "breathing": "抬起吐氣，下降吸氣。", "regression": "縮小幅度。", "progression": "單腳臀橋。"}, {"id": "single-leg-bridge", "name": "單腳臀橋", "cue": "骨盆保持水平。", "instructions": "一腳踩地，另一腳抬起，臀部發力抬高。", "mistakes": "骨盆旋轉、腰代償。", "breathing": "抬起吐氣。", "regression": "雙腳臀橋。", "progression": "加停留或阻力。"}, {"id": "bird-dog", "name": "鳥狗式", "cue": "骨盆保持水平，手腳伸長。", "instructions": "四足跪姿，伸出對側手腳後回位。", "mistakes": "腰旋轉、抬腿過高。", "breathing": "伸出吐氣，回程吸氣。", "regression": "只伸手或只伸腳。", "progression": "延長停留。"}, {"id": "dead-bug", "name": "死蟲式", "cue": "下背保持穩定。", "instructions": "仰躺抬手腳，交替伸出對側手腳。", "mistakes": "下背拱起、憋氣。", "breathing": "伸出時長吐氣。", "regression": "腳跟點地。", "progression": "延長槓桿。"}, {"id": "plank", "name": "前臂棒式", "cue": "頭到腳跟保持一直線。", "instructions": "前臂與腳尖支撐，收緊臀部與腹部。", "mistakes": "腰下沉、憋氣。", "breathing": "持續自然呼吸。", "regression": "膝蓋著地。", "progression": "延長時間或變化式。"}, {"id": "side-plank-knee", "name": "跪姿側棒式", "cue": "肩、髖、膝保持穩定。", "instructions": "前臂與膝蓋支撐，抬高骨盆。", "mistakes": "肩膀聳起、骨盆後倒。", "breathing": "自然呼吸。", "regression": "縮短時間。", "progression": "腳掌支撐側棒式。"}, {"id": "supported-split-squat", "name": "扶握分腿蹲", "cue": "身體向下，不要向前衝。", "instructions": "前後站姿扶穩固定物，雙膝彎曲下降。", "mistakes": "前膝內夾、步距太窄。", "breathing": "下降吸氣，起身吐氣。", "regression": "減少深度。", "progression": "不扶握或持啞鈴。"}, {"id": "reverse-lunge", "name": "後跨弓步", "cue": "前腳踩穩，後腳輕落地。", "instructions": "向後跨一步下降，再由前腳推回。", "mistakes": "前膝內夾、步幅失控。", "breathing": "下降吸氣，起身吐氣。", "regression": "扶握分腿蹲。", "progression": "持啞鈴。"}, {"id": "step-up", "name": "登階", "cue": "整個腳掌踩穩台階。", "instructions": "踩上穩固低台階，再控制下降。", "mistakes": "用後腳蹬太多、膝內夾。", "breathing": "上階吐氣。", "regression": "降低台階。", "progression": "提高台階或加負重。"}, {"id": "calf-raise", "name": "提踵", "cue": "腳掌平均受力，緩慢抬起腳跟。", "instructions": "扶穩物體，抬高腳跟再控制下降。", "mistakes": "左右晃動、快速彈動。", "breathing": "抬起吐氣。", "regression": "雙腳扶握。", "progression": "單腳提踵。"}, {"id": "hip-hinge", "name": "髖關節折疊", "cue": "臀部向後推，脊柱自然。", "instructions": "膝微彎，臀部向後移，軀幹前傾後站回。", "mistakes": "彎腰駝背、變成深蹲。", "breathing": "下降吸氣，站起吐氣。", "regression": "臀部觸牆。", "progression": "啞鈴羅馬尼亞硬舉。"}, {"id": "db-rdl", "name": "啞鈴羅馬尼亞硬舉", "cue": "重量貼近腿，臀部向後。", "instructions": "手持啞鈴，保持脊柱自然，髖折疊下降。", "mistakes": "啞鈴離身體太遠、腰背失控。", "breathing": "下降吸氣，站起吐氣。", "regression": "髖折疊。", "progression": "增加重量。"}, {"id": "band-row", "name": "彈力帶划船", "cue": "肩胛向後下，手肘貼近身體。", "instructions": "安全固定彈力帶，拉向身體兩側。", "mistakes": "聳肩、身體後仰。", "breathing": "拉回吐氣。", "regression": "較輕阻力。", "progression": "增加阻力或停留。"}, {"id": "one-arm-db-row", "name": "單臂啞鈴划船", "cue": "軀幹穩定，手肘往髖部方向拉。", "instructions": "一手支撐穩固物，另一手持啞鈴划船。", "mistakes": "旋轉身體、聳肩。", "breathing": "拉起吐氣。", "regression": "彈力帶划船。", "progression": "增加重量。"}, {"id": "band-pulldown", "name": "彈力帶下拉", "cue": "肋骨保持穩定，手肘往下。", "instructions": "高處安全固定彈力帶，向下拉至胸側。", "mistakes": "後仰、聳肩。", "breathing": "下拉吐氣。", "regression": "較輕阻力。", "progression": "增加阻力。"}, {"id": "db-floor-press", "name": "啞鈴地板臥推", "cue": "肩胛穩定，手腕中立。", "instructions": "仰躺地面，手持啞鈴推起再控制下降。", "mistakes": "手肘過度張開、手腕折彎。", "breathing": "下降吸氣，推起吐氣。", "regression": "單顆輕啞鈴。", "progression": "增加重量。"}, {"id": "db-shoulder-press", "name": "啞鈴肩推", "cue": "肋骨不要外翻。", "instructions": "坐姿或站姿，將啞鈴由肩上方推起。", "mistakes": "腰過度拱起、聳肩。", "breathing": "推起吐氣。", "regression": "單手輕重量。", "progression": "增加重量。"}, {"id": "band-pull-apart", "name": "彈力帶拉開", "cue": "肩膀放鬆，肩胛後收。", "instructions": "雙手持帶平舉，向兩側拉開。", "mistakes": "聳肩、肋骨外翻。", "breathing": "拉開吐氣。", "regression": "較輕阻力。", "progression": "增加阻力。"}, {"id": "brisk-walk", "name": "快走", "cue": "維持能說完整句子的速度。", "instructions": "在安全平坦處持續步行。", "mistakes": "一開始太快、忽略疼痛。", "breathing": "自然規律呼吸。", "regression": "輕鬆步行並分段。", "progression": "增加時間或坡度。"}, {"id": "easy-walk", "name": "輕鬆散步", "cue": "保持舒服節奏。", "instructions": "在安全環境散步，作為恢復。", "mistakes": "把恢復日做成高強度。", "breathing": "自然呼吸。", "regression": "分兩段完成。", "progression": "僅稍增時間。"}, {"id": "march", "name": "原地踏步", "cue": "軀幹直立，擺臂自然。", "instructions": "以舒服速度原地踏步。", "mistakes": "憋氣、聳肩。", "breathing": "自然呼吸。", "regression": "扶椅慢速。", "progression": "提高膝蓋或節奏。"}, {"id": "low-step-cardio", "name": "低台階踏步", "cue": "腳掌踩穩，節奏可控。", "instructions": "在穩固低台階反覆上下。", "mistakes": "台階太高、速度失控。", "breathing": "自然呼吸。", "regression": "原地踏步。", "progression": "延長時間。"}, {"id": "wall-slide", "name": "牆面滑手", "cue": "肋骨不要外翻。", "instructions": "背靠牆，手臂沿牆慢慢向上滑。", "mistakes": "拱腰、肩痛仍勉強。", "breathing": "上滑吐氣。", "regression": "縮小範圍。", "progression": "離牆控制。"}, {"id": "cat-cow", "name": "貓牛式", "cue": "緩慢分節活動脊柱。", "instructions": "四足跪姿交替拱背與伸展。", "mistakes": "速度太快、甩動。", "breathing": "拱背吐氣。", "regression": "縮小幅度。", "progression": "增加停留。"}, {"id": "hip-flexor-stretch", "name": "髖屈肌伸展", "cue": "骨盆微後傾。", "instructions": "半跪姿，收緊後側臀部並輕微前移。", "mistakes": "腰過度拱起。", "breathing": "自然呼吸。", "regression": "站姿版本。", "progression": "同側手臂上舉。"}, {"id": "calf-stretch", "name": "小腿伸展", "cue": "後腳跟貼地。", "instructions": "扶牆採弓箭步，後腿伸直。", "mistakes": "腳尖外轉、彈震。", "breathing": "自然呼吸。", "regression": "縮小步距。", "progression": "後膝微彎。"}, {"id": "thoracic-rotation", "name": "胸椎旋轉", "cue": "骨盆保持穩定。", "instructions": "四足跪姿，一手放頭後，胸口旋轉開啟。", "mistakes": "腰部代償、硬扭。", "breathing": "開啟吸氣，回程吐氣。", "regression": "縮小範圍。", "progression": "延長停留。"}, {"id": "ankle-rock", "name": "踝關節前移", "cue": "腳跟保持貼地。", "instructions": "膝蓋朝腳尖方向前移，再回來。", "mistakes": "腳跟抬起、膝蓋內夾。", "breathing": "自然呼吸。", "regression": "縮小幅度。", "progression": "增加控制。"}, {"id": "box-breathing", "name": "方形呼吸", "cue": "吸、停、吐、停時間接近。", "instructions": "採舒服節奏，例如每階段 4 秒。", "mistakes": "過度深呼吸造成頭暈。", "breathing": "依節奏進行。", "regression": "取消停頓。", "progression": "延長吐氣。"}, {"id": "gentle-mobility", "name": "溫和全身活動", "cue": "在無痛範圍緩慢活動。", "instructions": "選肩、髖、踝等 3–4 個動作。", "mistakes": "追求極端角度。", "breathing": "自然呼吸。", "regression": "坐姿活動。", "progression": "增加控制。"}, {"id": "balance-stand", "name": "單腳平衡", "cue": "扶穩物體，骨盆保持水平。", "instructions": "單腳站立 10–30 秒，必要時輕扶。", "mistakes": "閉眼過早、站在危險處。", "breathing": "自然呼吸。", "regression": "雙腳窄站。", "progression": "減少扶握。"}],
  worlds: [{"name": "覺醒村", "focus": "建立規律運動", "boss": "怠惰史萊姆", "story": "村莊被怠惰霧籠罩。每次完成真實訓練，霧就消散一點。"}, {"name": "翠影森林", "focus": "全身基礎肌力", "boss": "姿勢魔像", "story": "森林考驗你的動作品質，而不是蠻力。"}, {"name": "核心神殿", "focus": "軀幹穩定", "boss": "搖晃守衛", "story": "只有能穩定控制身體的人，才看得見神殿入口。"}, {"name": "鐵脊山岳", "focus": "下肢力量", "boss": "岩石巨人", "story": "山路陡峭，雙腿與髖部是你的真正裝備。"}, {"name": "潮汐海港", "focus": "心肺耐力", "boss": "窒息海獸", "story": "學會控制節奏，比一開始衝太快更重要。"}, {"name": "赤砂荒原", "focus": "飲食與能量管理", "boss": "暴食巨人", "story": "補給不是懲罰，也不是放縱，而是支持旅程。"}, {"name": "霜息冰原", "focus": "睡眠與恢復", "boss": "熬夜女巫", "story": "在冰原，懂得恢復的人才能繼續前進。"}, {"name": "雲端城邦", "focus": "肌肉量與訓練量", "boss": "風暴騎士", "story": "穩定累積訓練量，身體才會真正改變。"}, {"name": "力量帝國", "focus": "進階力量", "boss": "鋼鐵將軍", "story": "力量來自技術、耐心與逐步負荷。"}, {"name": "深淵競技場", "focus": "綜合體能", "boss": "疲勞吞噬者", "story": "真正的強者知道何時推進、何時保留。"}, {"name": "魔王城", "focus": "習慣整合", "boss": "放棄之王", "story": "最後的敵人不是重量，而是中斷後不再回來。"}, {"name": "光明神殿", "focus": "長期自主訓練", "boss": "昨日的自己", "story": "終點不是完美，而是能自己照顧身體。"}],
  academy: [{"id": "safety", "title": "辨識安全訊號", "summary": "分辨正常用力、延遲性痠痛與需要停止的警訊。"}, {"id": "warmup", "title": "暖身不是儀式", "summary": "用漸進活動提高體溫，並排練今天會用到的動作。"}, {"id": "effort", "title": "保留餘力", "summary": "多數新手訓練不必做到力竭，先維持穩定技術。"}, {"id": "progression", "title": "如何安全進步", "summary": "先增加穩定性與次數，再逐步增加阻力或難度。"}, {"id": "recovery", "title": "恢復也是訓練", "summary": "疲勞、睡眠與疼痛會影響課表；降低負荷不代表失敗。"}, {"id": "consistency", "title": "長期一致性", "summary": "可持續的少量訓練，通常勝過偶爾一次過量訓練。"}]
};

const STORAGE_KEY="fitnessOdysseyV7Build2";
const $=s=>document.querySelector(s);
const view=$("#view"),title=$("#page-title"),modal=$("#modal"),modalContent=$("#modal-content");
const defaultState={
  createdAt:new Date().toISOString(),day:1,week:1,route:"today",
  profile:{name:"新英雄",goal:"健康強健",level:"未評估",minutes:25,equipment:"bodyweight"},
  readiness:{energy:3,soreness:1,sleep:3,time:25,location:"home"},
  assessment:null,completedToday:[],history:[],xp:0,streak:0,
  stats:{strength:8,endurance:8,core:8,mobility:8,recovery:8},
  unlockedWorld:1,academyCompleted:[],lastDate:null,baseLevel:1,storyUnlocked:[1]
};
let state=load();
let deferredPrompt=null;
function load(){try{return {...defaultState,...JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}}catch{return structuredClone(defaultState)}}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function key(){return new Date().toISOString().slice(0,10)}
function esc(v=""){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function pct(n,m=100){return Math.max(0,Math.min(100,Math.round(n/m*100)))}
function normalize(){
  const t=key();
  if(state.lastDate&&state.lastDate!==t){state.day++;state.week=Math.min(52,Math.ceil(state.day/7));state.completedToday=[]}
  state.lastDate=t;save()
}
function ex(id){return DATA.exercises.find(x=>x.id===id)}
function item(id,sets,target){return {...ex(id),sets,target}}
function phase(){
  if(state.week<=4)return {name:"適應期",sets:2,reps:"6–10",sec:15};
  if(state.week<=8)return {name:"基礎期",sets:3,reps:"8–12",sec:25};
  return {name:"強化期",sets:3,reps:"10–15",sec:35}
}
function assessmentLevel(){
  if(!state.assessment)return "beginner";
  const s=state.assessment;
  const score=(s.squat||0)+(s.push||0)+(s.plank||0)+(s.walk||0)+(s.balance||0);
  return score>=20?"intermediate":score>=12?"novice":"beginner";
}
function chooseWorkout(){
  const low=state.readiness.energy<=1||state.readiness.soreness>=4||state.readiness.sleep<=1;
  if(low)return recovery();
  const pattern=(state.day-1)%7;
  if(pattern===0||pattern===3)return strength(pattern===0?"A":"B");
  if(pattern===1||pattern===5)return cardio();
  if(pattern===2)return mobility();
  return recovery();
}
function strength(type){
  const p=phase(),lvl=assessmentLevel();
  const beginnerA=["chair-squat","incline-pushup","glute-bridge","bird-dog"];
  const beginnerB=["supported-split-squat","band-row","hip-hinge","dead-bug"];
  const noviceA=["bodyweight-squat","knee-pushup","db-rdl","plank"];
  const noviceB=["reverse-lunge","one-arm-db-row","db-floor-press","side-plank-knee"];
  const intA=["bodyweight-squat","incline-pushup","db-rdl","plank"];
  const intB=["reverse-lunge","one-arm-db-row","db-shoulder-press","dead-bug"];
  let ids=lvl==="beginner"?(type==="A"?beginnerA:beginnerB):lvl==="novice"?(type==="A"?noviceA:noviceB):(type==="A"?intA:intB);
  const exercises=ids.map((id,i)=>item(id,p.sets,i===3?`${p.sec} 秒`:`${p.reps} 次`));
  return {type:"肌力",icon:"🛡️",name:`全身肌力 ${type}`,phase:p.name,minutes:state.readiness.time||state.profile.minutes,purpose:"練習全身主要動作模式。每組保留約 2–4 次餘力，動作品質優先。",exercises}
}
function cardio(){
  const mins=Math.max(12,Math.min(35,12+(state.week-1)*2));
  return {type:"心肺",icon:"❤️",name:"談話速度有氧",phase:phase().name,minutes:Math.min(mins,state.readiness.time||mins),purpose:"維持能說完整句子的強度，感覺約 10 分中的 4–6 分。",exercises:[item("brisk-walk",1,`${Math.min(mins,state.readiness.time||mins)} 分鐘`),item("calf-stretch",1,"左右各 30 秒")]}
}
function mobility(){
  return {type:"活動度",icon:"🧘",name:"關節活動與核心控制",phase:phase().name,minutes:18,purpose:"用舒服範圍練習，不追求疼痛或極端拉伸。",exercises:["march","wall-slide","cat-cow","dead-bug","hip-flexor-stretch"].map(id=>item(id,2,id==="dead-bug"?"左右各 6–8 次":"30–45 秒"))}
}
function recovery(){
  return {type:"恢復",icon:"🌿",name:"主動恢復日",phase:phase().name,minutes:15,purpose:"疲勞高時降低負荷。恢復不是偷懶，而是計畫的一部分。",exercises:[item("easy-walk",1,"10 分鐘"),item("box-breathing",1,"3 分鐘"),item("gentle-mobility",1,"2 分鐘")]}
}
function tasks(w){return[
{id:"readiness",name:"Hero Compass 狀態檢查",meta:"睡眠、精神、痠痛、時間與地點"},
{id:"warmup",name:"暖身",meta:"約 5 分鐘"},
{id:"workout",name:w.name,meta:`${w.minutes} 分鐘 · ${w.type}`},
{id:"cooldown",name:"收操與呼吸",meta:"約 3–5 分鐘"}]}
function render(){
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.route===state.route));
  const names={today:"今日主線",world:"世界地圖",academy:"英雄學院",base:"英雄基地",hero:"英雄能力",journal:"命運之書",settings:"設定"};
  title.textContent=names[state.route]||"Fitness Odyssey";
  ({today:renderToday,world:renderWorld,academy:renderAcademy,base:renderBase,hero:renderHero,journal:renderJournal,settings:renderSettings}[state.route]||renderToday)()
}
function renderToday(){
  const w=chooseWorkout(),ts=tasks(w),done=ts.filter(t=>state.completedToday.includes(t.id)).length,bossHp=Math.round((1-done/ts.length)*100);
  view.innerHTML=`
  ${!state.assessment?`<section class="card"><h2>先完成英雄評估</h2><p class="muted">評估會決定起始難度，不是比賽，也不需要做到極限。</p><button class="btn full" onclick="openAssessment()">開始評估</button></section>`:""}
  <section class="card hero-card"><div class="row between"><div><span class="badge">第 ${state.day} 天 · 第 ${state.week} 週</span><h2 style="margin:12px 0 5px">${w.icon} ${esc(w.name)}</h2><p class="muted">${esc(w.phase)} · ${w.minutes} 分鐘 · ${assessmentLevel()}</p></div><div style="text-align:right"><div class="big-number">${done}/${ts.length}</div><small class="muted">主線完成</small></div></div><div class="progress"><span style="width:${pct(done,ts.length)}%"></span></div></section>
  <section class="card boss" id="boss-card"><div class="row between"><h2>怠惰史萊姆</h2><strong class="${bossHp===0?"green":"danger"}">${bossHp===0?"已擊敗":`HP ${bossHp}%`}</strong></div><div class="progress"><span style="width:${bossHp}%;background:linear-gradient(90deg,#ff7185,#ffb35c)"></span></div><div class="story">${bossHp===0?"村口的霧散開了。老教官點頭說：『你不是靠意志爆發，而是靠今天真的完成了訓練。』":"史萊姆盤踞在村口。只有完成真實訓練，它才會受傷。"}</div></section>
  <section class="card"><div class="row between"><h2>今日任務</h2><button class="btn secondary" onclick="openReadiness()">狀態檢查</button></div>
  ${ts.map(t=>`<div class="quest ${state.completedToday.includes(t.id)?"done":""}"><button class="quest-check" onclick="toggleTask('${t.id}')">${state.completedToday.includes(t.id)?"✓":""}</button><div><div class="quest-name">${esc(t.name)}</div><div class="quest-meta">${esc(t.meta)}</div></div>${t.id==="workout"?`<button class="btn secondary small" onclick="openWorkout()">查看</button>`:""}</div>`).join("")}
  </section>
  <section class="card"><h2>今日教練判斷</h2><p>${esc(w.purpose)}</p><div class="notice">胸痛、暈眩、異常呼吸困難或尖銳疼痛時，請停止運動並尋求專業協助。</div></section>`
}
function renderWorld(){
  view.innerHTML=`<section class="card"><h2>十二王國</h2><p class="muted">每個王國對應一段真實體能成長。每完成一週主線，就逐步解鎖下一區。</p></section><div class="world">${DATA.worlds.map((w,i)=>{const u=i<state.unlockedWorld;return `<article class="world-node ${u?"unlocked":"locked"}"><div class="row between"><strong>${i+1}. ${esc(w.name)}</strong><span>${u?"已解鎖":"🔒"}</span></div><div class="muted">${esc(w.focus)} · Boss：${esc(w.boss)}</div>${u?`<p style="margin:8px 0 0">${esc(w.story)}</p>`:""}</article>`}).join("")}</div>`
}
function renderAcademy(){
  view.innerHTML=`<section class="card"><h2>英雄學院</h2><p class="muted">學會安全與進步原則，再追求更高強度。</p></section>${DATA.academy.map((l,i)=>`<article class="lesson"><div class="row between"><div><span class="badge">課程 ${i+1}</span><h3 style="margin:10px 0 4px">${esc(l.title)}</h3><p class="muted">${esc(l.summary)}</p></div><button class="btn ${state.academyCompleted.includes(l.id)?"secondary":""}" onclick="completeLesson('${l.id}')">${state.academyCompleted.includes(l.id)?"已完成":"學習"}</button></div></article>`).join("")}`
}
function renderBase(){
  const levels=[["破舊木屋","🏚️",0],["穩固小屋","🏡",300],["勇者宅邸","🏠",700],["守護城堡","🏰",1400],["英雄之城","🌆",2500]];
  let idx=0;levels.forEach((x,i)=>{if(state.xp>=x[2])idx=i});state.baseLevel=idx+1;
  const cur=levels[idx],next=levels[idx+1];
  view.innerHTML=`<section class="card hero-card"><h2>英雄基地</h2><div class="base-art">${cur[1]}</div><h3 style="text-align:center">${cur[0]}</h3><p class="muted" style="text-align:center">基地只會因真實完成訓練而升級。</p>${next?`<div class="bar-label"><span>前往 ${next[0]}</span><strong>${state.xp}/${next[2]} XP</strong></div><div class="progress"><span style="width:${pct(state.xp,next[2])}%"></span></div>`:`<p class="green" style="text-align:center">基地已達最高等級</p>`}</section><section class="card"><h2>居民留言</h2><div class="story">${state.streak>=3?"村民開始相信，你真的會持續回來。":"教官說：『不要急著證明自己。先證明你明天還會回來。』"}</div></section>`
}
function renderHero(){
  const s=state.stats,arr=[["力量",s.strength],["耐力",s.endurance],["核心",s.core],["活動度",s.mobility],["恢復",s.recovery]];
  view.innerHTML=`<section class="card hero-card"><div class="row between"><div><span class="badge">${esc(state.profile.goal)}</span><h2 style="margin:12px 0 4px">${esc(state.profile.name)}</h2><p class="muted">${assessmentLevel()} · ${state.xp} XP</p></div><div class="big-number">${state.streak}</div></div><small class="muted">目前連續完成天數</small></section><section class="card"><h2>真實能力趨勢</h2>${arr.map(([n,v])=>`<div class="bar-label"><span>${n}</span><strong>${v}</strong></div><div class="progress"><span style="width:${v}%"></span></div>`).join("")}</section><section class="card"><h2>評估結果</h2>${state.assessment?`<div class="grid three">${Object.entries(state.assessment).map(([k,v])=>`<div class="stat"><span>${({squat:"深蹲",push:"推力",plank:"核心",walk:"心肺",balance:"平衡"})[k]}</span><strong>${v}/5</strong></div>`).join("")}</div>`:`<p class="muted">尚未完成英雄評估。</p>`}</section>`
}
function renderJournal(){
  view.innerHTML=`<section class="card"><div class="row between"><h2>訓練紀錄</h2><span class="badge">${state.history.length} 筆</span></div>${state.history.length?state.history.slice().reverse().map(h=>`<div class="lesson"><strong>${esc(h.title)}</strong><div class="muted">${esc(h.date)} · ${esc(h.detail)}</div></div>`).join(""):`<p class="muted">完成今天全部主線後，第一頁故事就會寫入這裡。</p>`}</section>`
}
function renderSettings(){
  view.innerHTML=`<section class="card"><h2>英雄設定</h2><label><span>名稱</span><input id="name-input" type="text" value="${esc(state.profile.name)}"></label><label><span>主要目標</span><select id="goal-input"><option>健康強健</option><option>建立習慣</option><option>提升肌力</option><option>改善心肺</option><option>體態管理</option></select></label><label><span>平常可訓練時間</span><select id="minutes-input"><option value="15">15 分鐘</option><option value="25">25 分鐘</option><option value="40">40 分鐘</option></select></label><button class="btn full" onclick="saveSettings()">儲存設定</button></section><section class="card"><h2>資料管理</h2><div class="grid"><button class="btn secondary" onclick="exportData()">匯出紀錄</button><button class="btn danger" onclick="resetData()">重設資料</button></div></section><section class="card"><h2>版本</h2><p class="muted">App V7.0 Build 2 · Program 2026.2 · Exercise DB 2.0</p></section>`;
  setTimeout(()=>{$("#goal-input").value=state.profile.goal;$("#minutes-input").value=String(state.profile.minutes)},0)
}
window.openAssessment=()=>{
  modalContent.innerHTML=`<h2>英雄能力評估</h2><p class="muted">每項選 1–5 分，依「可安全、穩定完成」評分，不要測到力竭。</p>
  ${[["squat","深蹲控制"],["push","推力能力"],["plank","核心穩定"],["walk","快走耐力"],["balance","平衡"]].map(([id,n])=>`<div class="assessment-item"><label><span>${n}</span><select id="a-${id}"><option value="1">1 · 需要大量協助</option><option value="2">2 · 可完成簡化版本</option><option value="3">3 · 可穩定完成基礎版本</option><option value="4">4 · 可完成進階基礎版本</option><option value="5">5 · 控制良好且有餘力</option></select></label></div>`).join("")}
  <button class="btn full" onclick="saveAssessment()">儲存評估</button>`;modal.showModal()
}
window.saveAssessment=()=>{state.assessment={squat:+$("#a-squat").value,push:+$("#a-push").value,plank:+$("#a-plank").value,walk:+$("#a-walk").value,balance:+$("#a-balance").value};state.profile.level=assessmentLevel();save();modal.close();render()}
window.openReadiness=()=>{
  modalContent.innerHTML=`<h2>Hero Compass 2.0</h2><label><span>精神（1 很差－5 很好）</span><input id="energy" type="number" min="1" max="5" value="${state.readiness.energy}"></label><label><span>全身痠痛（1 很少－5 很高）</span><input id="soreness" type="number" min="1" max="5" value="${state.readiness.soreness}"></label><label><span>睡眠（1 很差－5 很好）</span><input id="sleep" type="number" min="1" max="5" value="${state.readiness.sleep}"></label><label><span>今天可運動時間</span><select id="time"><option value="15">15 分鐘</option><option value="25">25 分鐘</option><option value="40">40 分鐘</option></select></label><label><span>地點</span><select id="location"><option value="home">家中</option><option value="gym">健身房</option><option value="outdoor">戶外</option></select></label><button class="btn full" onclick="saveReadiness()">套用並重新排課</button>`;modal.showModal();setTimeout(()=>{$("#time").value=String(state.readiness.time);$("#location").value=state.readiness.location},0)
}
window.saveReadiness=()=>{state.readiness={energy:+$("#energy").value,soreness:+$("#soreness").value,sleep:+$("#sleep").value,time:+$("#time").value,location:$("#location").value};if(!state.completedToday.includes("readiness"))state.completedToday.push("readiness");save();modal.close();render()}
window.openWorkout=()=>{
  const w=chooseWorkout();modalContent.innerHTML=`<h2>${w.icon} ${esc(w.name)}</h2><p class="muted">${esc(w.purpose)}</p>${w.exercises.map((e,i)=>`<article class="lesson"><div class="row between"><strong>${i+1}. ${esc(e.name)}</strong><span class="badge">${e.sets} 組 · ${esc(e.target)}</span></div><p class="muted">${esc(e.cue)}</p><div class="exercise-actions"><button class="btn ghost small" onclick="showExercise('${e.id}')">技術與替代動作</button></div></article>`).join("")}<div class="notice">每組保留約 2–4 次餘力。動作失去控制、出現尖銳疼痛或不適時立即停止。</div>`;modal.showModal()
}
window.showExercise=id=>{const e=ex(id);if(!e)return;modalContent.innerHTML=`<h2>${esc(e.name)}</h2><p>${esc(e.instructions)}</p><h3>常見錯誤</h3><p class="muted">${esc(e.mistakes)}</p><h3>呼吸</h3><p class="muted">${esc(e.breathing)}</p><h3>較簡單替代</h3><p class="muted">${esc(e.regression)}</p><h3>較進階版本</h3><p class="muted">${esc(e.progression)}</p>`}
window.toggleTask=id=>{
  const exists=state.completedToday.includes(id);
  state.completedToday=exists?state.completedToday.filter(x=>x!==id):[...state.completedToday,id];
  if(!exists){const card=$("#boss-card");if(card){card.classList.add("boss-hit");setTimeout(()=>card.classList.remove("boss-hit"),350)}if(id==="workout"){state.stats.strength=Math.min(100,state.stats.strength+1);state.stats.core=Math.min(100,state.stats.core+1)}if(id==="cooldown"){state.stats.mobility=Math.min(100,state.stats.mobility+1);state.stats.recovery=Math.min(100,state.stats.recovery+1)}}
  const all=["readiness","warmup","workout","cooldown"].every(x=>state.completedToday.includes(x));
  if(all&&!state.history.some(h=>h.date===key())){state.xp+=100;state.streak+=1;state.history.push({date:key(),title:`第 ${state.day} 天主線完成`,detail:chooseWorkout().name});if(state.day%7===0)state.unlockedWorld=Math.min(12,state.unlockedWorld+1)}
  save();render()
}
window.completeLesson=id=>{if(!state.academyCompleted.includes(id)){state.academyCompleted.push(id);state.xp+=20}save();render()}
window.saveSettings=()=>{state.profile.name=$("#name-input").value.trim()||"新英雄";state.profile.goal=$("#goal-input").value;state.profile.minutes=+$("#minutes-input").value;save();render()}
window.exportData=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="fitness-odyssey-save.json";a.click();URL.revokeObjectURL(a.href)}
window.resetData=()=>{if(confirm("確定要清除所有本機進度嗎？")){localStorage.removeItem(STORAGE_KEY);state=structuredClone(defaultState);normalize();render()}}
document.querySelectorAll(".bottom-nav button").forEach(btn=>btn.addEventListener("click",()=>{state.route=btn.dataset.route;save();render()}));
$("#modal-close").addEventListener("click",()=>modal.close());
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#install-btn").classList.remove("hidden")});
$("#install-btn").addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#install-btn").classList.add("hidden")});
normalize();render();if("serviceWorker"in navigator)navigator.serviceWorker.register("./service-worker.js");

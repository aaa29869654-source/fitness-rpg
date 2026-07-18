const $ = (s) => document.querySelector(s);
const KEY = 'fitness_odyssey_solo_61';
const old = JSON.parse(localStorage.getItem('fitness_odyssey_solo_60') || '{}');
const defaults = {
  route:'today', audio:true, onboardingDone:false, xp:old.xp||0, streak:old.streak||0,
  completed:[], today:'', history:old.history||[], pullup:old.pullup||{max:1,hang:15}
};
let state = {...defaults, ...JSON.parse(localStorage.getItem(KEY)||'{}')};
let active = null, timerId = null;
const todayKey = () => new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const exercises = [
 {id:'warmup',name:'動態熱身',plan:'3 分鐘',sets:1,reps:'3 分鐘',seconds:180,xp:20,img:'images/warmup.svg',steps:['原地踏步 30 秒，讓身體暖起來。','雙臂向前畫圈 10 次，再向後 10 次。','左右轉動上半身，動作放慢，不要甩腰。'],cue:'保持自然呼吸，肩膀放鬆。',beginner:'第一次可先做 90 秒。'},
 {id:'push',name:'跪姿伏地挺身',plan:'3 組 × 15 下',sets:3,reps:15,seconds:45,xp:35,img:'images/push.svg',steps:['雙手比肩膀略寬，膝蓋著地。','從頭到膝蓋保持一直線，肚子收緊。','彎手肘讓胸口靠近地面，再推回起始位置。'],cue:'手肘約朝後 45 度，不要聳肩或塌腰。',beginner:'做不到 15 下時，每組先做 8–10 下。'},
 {id:'plank',name:'平板撐',plan:'3 組 × 20–25 秒',sets:3,reps:'25 秒',seconds:25,xp:35,img:'images/plank.svg',steps:['手肘放在肩膀正下方。','腳尖踩地，頭、背、臀、腿保持直線。','收緊腹部與臀部，穩定呼吸。'],cue:'腰不要下沉，也不要把臀部抬太高。',beginner:'可改成膝蓋著地，每組 15 秒。'},
 {id:'bridge',name:'臀橋',plan:'3 組 × 15 下',sets:3,reps:15,seconds:45,xp:30,img:'images/bridge.svg',steps:['仰躺屈膝，雙腳踩地，腳跟靠近臀部。','收緊腹部，臀部向上抬。','肩膀到膝蓋成一直線，停 1 秒後慢慢下降。'],cue:'力量來自臀部，不要用腰硬頂。',beginner:'幅度不必太高，腰無不適最重要。'},
 {id:'deadbug',name:'Dead Bug',plan:'3 組 × 左右各 10 下',sets:3,reps:20,seconds:60,xp:35,img:'images/deadbug.svg',steps:['仰躺，手臂朝上，髖與膝彎曲 90 度。','腰部輕貼地面，慢慢伸直右手與左腳。','回到中央，再換左手與右腳。'],cue:'只伸到腰不會拱起的範圍。',beginner:'腳跟輕點地即可，不必完全伸直。'},
 {id:'curl',name:'二頭彎舉',plan:'3 組 × 10 下',sets:3,reps:10,seconds:45,xp:30,img:'images/curl.svg',steps:['站直，手持水瓶或啞鈴，掌心朝前。','手肘貼近身體並固定。','前臂向上彎舉，再用 2 秒慢慢放下。'],cue:'身體不要前後搖晃，重量過重就減輕。',beginner:'先用裝半瓶水的寶特瓶。'},
 {id:'hang',name:'懸垂 Hang',plan:'2 組力竭 · 目標 15 秒',sets:2,reps:'15 秒',seconds:15,xp:40,img:'images/hang.svg',steps:['雙手正握單槓，握距比肩略寬。','腳離地後先讓身體穩定。','肩膀稍微下沉，不要完全卡在耳朵旁。'],cue:'手掌疼痛或肩膀刺痛立即停止。',beginner:'腳尖可輕踩椅子分擔重量。'}
];
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function rollover(){const t=todayKey();if(state.today!==t){state.today=t;state.completed=[];save();}}
function speak(text){if(!state.audio || !('speechSynthesis' in window)) return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text);u.lang='zh-TW';u.rate=.92;u.pitch=1.05;speechSynthesis.speak(u);}
function beep(){if(!state.audio)return;const A=window.AudioContext||window.webkitAudioContext;if(!A)return;const c=new A(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=740;g.gain.value=.05;o.start();g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.15);o.stop(c.currentTime+.15);}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),1800);}
function render(){rollover();document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.route===state.route));$('#page-title').textContent={today:'今日訓練',learn:'動作教學',progress:'訓練進度',settings:'系統設定'}[state.route];({today:renderToday,learn:renderLearn,progress:renderProgress,settings:renderSettings}[state.route])();}
function renderToday(){const done=state.completed.length,p=Math.round(done/exercises.length*100);$('#view').innerHTML=`
<section class="hero card"><span class="badge">新手互動模式</span><h2>今天跟著教練一步一步做</h2><p>每個動作都有圖片、做法、語音提示與組間休息，不需要自己猜。</p><button class="btn full start-main" onclick="startWorkout()">▶ ${done?'繼續今日訓練':'開始今日訓練'}</button><button class="btn secondary full mt" onclick="openBeginner()">❓ 第一次使用？先看操作</button></section>
<section class="card"><div class="section-title"><div><h2>今日進度</h2><small>${done}/${exercises.length} 個動作完成</small></div><strong>${p}%</strong></div><div class="progress"><span style="width:${p}%"></span></div></section>
<section class="card"><h2>今日任務</h2>${exercises.map((e,i)=>`<article class="exercise-row ${state.completed.includes(e.id)?'done':''}" onclick="openGuide('${e.id}')"><img src="${e.img}" alt="${e.name}動作示意"><div><b>${i+1}. ${e.name}</b><small>${e.plan}</small><span>${state.completed.includes(e.id)?'✓ 已完成':'查看教學與開始'}</span></div><button aria-label="開啟">›</button></article>`).join('')}</section>`;}
function renderLearn(){$('#view').innerHTML=`<section class="card"><h2>動作圖解教室</h2><p class="muted">先看圖、再讀重點，按「聽教練說明」可播放語音。</p></section>${exercises.map(e=>`<section class="lesson-card card"><img src="${e.img}" alt="${e.name}"><div><h2>${e.name}</h2><p>${e.plan}</p><button class="btn full" onclick="openGuide('${e.id}')">查看完整教學</button></div></section>`).join('')}`;}
function renderProgress(){const total=state.history.length;$('#view').innerHTML=`<section class="card"><h2>目前成果</h2><div class="stats"><div><strong>${state.xp}</strong><span>總 XP</span></div><div><strong>${state.streak}</strong><span>連續天數</span></div><div><strong>${state.pullup?.max||1}</strong><span>引體向上</span></div></div></section><section class="card"><h2>完成紀錄</h2>${total?state.history.slice().reverse().map(x=>`<div class="history"><b>${x.date}</b><span>${x.text}</span></div>`).join(''):'<p class="muted">完成第一個動作後，紀錄會出現在這裡。</p>'}</section>`;}
function renderSettings(){$('#view').innerHTML=`<section class="card"><h2>語音教練</h2><p>目前：<b>${state.audio?'開啟':'關閉'}</b></p><button class="btn full" onclick="toggleAudio()">${state.audio?'關閉語音':'開啟語音'}</button><button class="btn secondary full mt" onclick="testVoice()">播放測試語音</button></section><section class="card"><h2>新手說明</h2><button class="btn secondary full" onclick="openBeginner()">重新查看操作教學</button></section><section class="card"><h2>進度資料</h2><button class="btn danger full" onclick="resetData()">清除所有進度</button></section>`;}
window.openBeginner=()=>show(`<div class="onboarding"><div class="big-icon">🧭</div><h2>第一次使用只要 3 步</h2><div class="stepbox"><b>1. 按「開始今日訓練」</b><span>系統會自動帶你進入第一個動作。</span></div><div class="stepbox"><b>2. 先看圖片與注意事項</b><span>準備好再按開始，不會突然倒數。</span></div><div class="stepbox"><b>3. 跟著語音完成每一組</b><span>每組結束會自動進入休息，再提示下一組。</span></div><button class="btn full" onclick="closeModal();startWorkout()">我知道了，開始訓練</button></div>`);
window.openGuide=(id)=>{const e=exercises.find(x=>x.id===id);show(`<div class="guide"><img src="${e.img}" alt="${e.name}"><span class="badge">${e.plan}</span><h2>${e.name}</h2><ol>${e.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="tip"><b>教練提醒</b><p>${e.cue}</p></div><div class="tip beginner"><b>新手簡化</b><p>${e.beginner}</p></div><button class="btn secondary full" onclick="speakGuide('${e.id}')">🔊 聽教練說明</button><button class="btn full mt" onclick="beginExercise('${e.id}')">▶ 準備好了，開始</button></div>`);};
window.speakGuide=(id)=>{const e=exercises.find(x=>x.id===id);speak(`${e.name}。${e.steps.join('')}。注意，${e.cue}`);};
window.startWorkout=()=>{const next=exercises.find(e=>!state.completed.includes(e.id))||exercises[0];openGuide(next.id);};
window.beginExercise=(id)=>{const e=exercises.find(x=>x.id===id);active={e,set:1,left:e.seconds,phase:'work'};renderCoach();setTimeout(()=>speak(`準備開始${e.name}，第1組。三、二、一，開始。`),250);startClock();};
function renderCoach(){const {e,set,left,phase}=active;const isRest=phase==='rest';$('#modal-content').innerHTML=`<div class="coach ${isRest?'resting':''}"><img src="${e.img}" alt="${e.name}"><span class="badge">${isRest?'組間休息':`第 ${set} / ${e.sets} 組`}</span><h2>${isRest?'休息一下':e.name}</h2><div class="countdown">${format(left)}</div><p>${isRest?'放鬆手腳，慢慢呼吸。':`目標：${e.reps}　｜　${e.cue}`}</p><div class="coach-actions"><button class="btn secondary" onclick="pauseClock()">暫停</button><button class="btn" onclick="finishPhase()">${isRest?'跳過休息':'這組完成'}</button></div></div>`;}
function startClock(){clearInterval(timerId);timerId=setInterval(()=>{if(!active)return;active.left--;if(active.left===3)speak('三');if(active.left===2)speak('二');if(active.left===1)speak('一');if(active.left<=0)finishPhase();else renderCoach();},1000);}
window.pauseClock=()=>{if(timerId){clearInterval(timerId);timerId=null;toast('已暫停');const b=document.querySelector('.coach-actions .secondary');if(b){b.textContent='繼續';b.onclick=()=>{startClock();toast('繼續');};}}};
window.finishPhase=()=>{if(!active)return;clearInterval(timerId);timerId=null;const {e,set,phase}=active;if(phase==='work'){
 if(set>=e.sets){completeExercise(e);return;}
 active.phase='rest';active.left=30;renderCoach();speak(`第${set}組完成，休息三十秒。`);startClock();
 }else{active.phase='work';active.set++;active.left=e.seconds;renderCoach();speak(`準備第${active.set}組，三、二、一，開始。`);startClock();}};
function completeExercise(e){if(!state.completed.includes(e.id)){state.completed.push(e.id);state.xp+=e.xp;state.history.push({date:state.today,text:`完成 ${e.name}，獲得 ${e.xp} XP`});if(state.completed.length===exercises.length)state.streak++;save();}beep();speak(`${e.name}完成，做得很好。`);const next=exercises.find(x=>!state.completed.includes(x.id));$('#modal-content').innerHTML=`<div class="complete"><div class="big-icon">🏆</div><h2>${e.name}完成！</h2><p>獲得 +${e.xp} XP</p>${next?`<button class="btn full" onclick="openGuide('${next.id}')">下一個：${next.name}</button>`:`<p class="success">今日訓練全部完成！</p><button class="btn full" onclick="closeModal()">完成今日冒險</button>`}</div>`;render();}
function format(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
function show(html){clearInterval(timerId);timerId=null;active=null;$('#modal-content').innerHTML=html;$('#modal').showModal();}
window.closeModal=()=>{$('#modal').close();speechSynthesis?.cancel();clearInterval(timerId);timerId=null;active=null;};
window.toggleAudio=()=>{state.audio=!state.audio;save();$('#audio-btn').textContent=state.audio?'🔊':'🔇';render();toast(state.audio?'語音已開啟':'語音已關閉');};
window.testVoice=()=>speak('語音教練已啟動。訓練時我會提示開始、休息與下一組。');
window.resetData=()=>{if(confirm('確定清除所有進度？')){localStorage.removeItem(KEY);location.reload();}};
$('#modal-close').onclick=closeModal;
$('#audio-btn').onclick=toggleAudio;
$('#audio-btn').textContent=state.audio?'🔊':'🔇';
document.querySelectorAll('.bottom-nav button').forEach(b=>b.onclick=()=>{state.route=b.dataset.route;save();render();});
let deferredPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#install-btn').classList.remove('hidden');});$('#install-btn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#install-btn').classList.add('hidden');}};
rollover();render();save();if(!state.onboardingDone){state.onboardingDone=true;save();setTimeout(openBeginner,400);}if('serviceWorker' in navigator)navigator.serviceWorker.register('./service-worker.js');

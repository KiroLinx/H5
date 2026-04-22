/* ======================================
 * 曼谷5日游 · 应用逻辑
 * ====================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderDayTabs();
  renderDay(0);
  renderSpots();
  renderFoods();
  renderBudget();
  renderTips();
  renderTransports();
  renderPhrases();
  bindScrollEffects();
  bindShare();
});

/* ---------- 1. 行程 Tabs ---------- */
function renderDayTabs() {
  const tabs = document.getElementById('dayTabs');
  tabs.innerHTML = ITINERARY.map((d, i) => `
    <div class="day-tab ${i === 0 ? 'active' : ''}" data-index="${i}">
      <div class="day-label">${d.day.split(' · ')[0]}</div>
      <div class="day-date">${d.date}</div>
    </div>
  `).join('');

  tabs.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const idx = parseInt(tab.dataset.index);
      tabs.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderDay(idx);
    });
  });
}

function renderDay(index) {
  const day = ITINERARY[index];
  const container = document.getElementById('dayContent');
  container.innerHTML = `
    <div class="fade-in visible">
      <!-- 当日头卡 -->
      <div class="rounded-3xl p-5 text-white shadow-lg mb-4"
           style="background: linear-gradient(135deg, ${day.theme}, ${day.theme}dd);">
        <div class="flex items-start justify-between">
          <div>
            <div class="text-xs opacity-80">${day.day}</div>
            <div class="text-lg font-bold mt-1 leading-snug">${day.title}</div>
            <div class="text-xs opacity-85 mt-1">${day.subtitle}</div>
          </div>
          <div class="text-right">
            <div class="text-3xl font-black font-display">D${index + 1}</div>
            <div class="text-[10px] opacity-80 mt-0.5">${day.items.length} 个行程</div>
          </div>
        </div>
      </div>

      <!-- 时间轴 -->
      <div class="pl-1">
        ${day.items.map(item => `
          <div class="timeline-item">
            <span class="timeline-dot" style="border-color:${day.theme}"></span>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-14 pt-1">
                <div class="text-xs font-bold" style="color:${day.theme}">${item.time}</div>
              </div>
              <div class="flex-1 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
                <div class="flex items-center gap-1.5 text-thai-dark font-bold text-sm">
                  <i class="${item.icon}" style="color:${day.theme}"></i>
                  <span>${item.title}</span>
                </div>
                <p class="text-xs text-gray-500 mt-1.5 leading-relaxed">${item.desc}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ---------- 2. 景点 TOP6 ---------- */
function renderSpots() {
  const list = document.getElementById('spotList');
  list.innerHTML = SPOTS.map(s => `
    <div class="spot-card shadow-md" data-spot="${s.name}">
      <div class="spot-img" style="background-image:url('${s.img}')"></div>
      <div class="spot-overlay"></div>
      <div class="rank-badge">${s.rank}</div>
      <div class="spot-info">
        <div class="flex items-center gap-1 mb-1">
          <span class="chip" style="background:rgba(255,178,41,0.95);color:#1A1423">${s.tag}</span>
        </div>
        <div class="font-bold text-base leading-tight">${s.name}</div>
        <div class="text-[10px] opacity-80 mt-0.5">${s.en}</div>
        <div class="flex items-center justify-between mt-1.5">
          <div class="flex items-center gap-1 text-thai-gold text-[11px]">
            <i class="ri-star-fill"></i>
            <span>${s.rating}</span>
          </div>
          <span class="text-[10px] text-white/70">${s.tip}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---------- 3. 美食 ---------- */
function renderFoods() {
  const list = document.getElementById('foodList');
  list.innerHTML = FOODS.map(f => `
    <div class="food-card">
      <div class="food-thumb" style="background-image:url('${f.img}')"></div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between">
          <div class="font-bold text-sm">${f.name}</div>
          <div class="text-thai-gold font-bold text-sm">${f.price}</div>
        </div>
        <div class="text-[10px] text-white/50 mt-0.5">${f.en}</div>
        <div class="flex gap-1 mt-2">
          ${f.taste.map(t => `<span class="chip" style="background:rgba(255,107,53,0.2);color:#FFB088">${t}</span>`).join('')}
        </div>
        <p class="text-[11px] text-white/70 mt-2 leading-relaxed line-clamp-2">${f.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ---------- 4. 预算 ---------- */
function renderBudget() {
  const list = document.getElementById('budgetList');
  list.innerHTML = BUDGET.map(b => `
    <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
      <div class="flex items-center justify-between">
        <div class="font-semibold text-sm text-thai-dark">${b.name}</div>
        <div class="font-bold text-thai-teal">¥${b.amount}</div>
      </div>
      <div class="budget-bar-track">
        <div class="budget-bar-fill" data-percent="${b.percent}"></div>
      </div>
      <div class="flex items-center justify-between mt-2">
        <p class="text-[11px] text-gray-500">${b.note}</p>
        <span class="text-[11px] font-bold text-gray-400">${b.percent}%</span>
      </div>
    </div>
  `).join('');

  // 进度条动画
  setTimeout(() => {
    list.querySelectorAll('.budget-bar-fill').forEach(el => {
      el.style.width = el.dataset.percent + '%';
    });
  }, 300);
}

/* ---------- 5. Tips ---------- */
function renderTips() {
  const list = document.getElementById('tipList');
  list.innerHTML = TIPS.map(t => `
    <div class="tip-card ${t.type}">
      <div class="text-2xl flex-shrink-0">${t.icon}</div>
      <div class="flex-1">
        <div class="font-bold text-sm text-thai-dark">${t.title}</div>
        <p class="text-xs text-gray-500 mt-1 leading-relaxed">${t.text}</p>
      </div>
    </div>
  `).join('');
}

/* ---------- 6. 交通 ---------- */
function renderTransports() {
  const list = document.getElementById('transportList');
  list.innerHTML = TRANSPORTS.map(t => `
    <div class="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-2" style="background:${t.color}">
        <i class="${t.icon} text-lg"></i>
      </div>
      <div class="font-bold text-sm text-thai-dark">${t.name}</div>
      <div class="text-[11px] text-gray-500 mt-0.5">${t.desc}</div>
      <div class="mt-2 text-[11px] font-bold" style="color:${t.color}">${t.price}</div>
    </div>
  `).join('');
}

/* ---------- 7. 泰语 ---------- */
function renderPhrases() {
  const list = document.getElementById('phraseList');
  list.innerHTML = PHRASES.map(p => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-thai-orange to-thai-red text-white flex items-center justify-center font-bold text-xs">
          ${p.zh}
        </div>
        <div>
          <div class="text-sm font-bold text-thai-dark">${p.th}</div>
          <div class="text-[11px] text-gray-400 mt-0.5">${p.pron}</div>
        </div>
      </div>
      <button class="w-8 h-8 rounded-full bg-thai-orange/10 text-thai-orange flex items-center justify-center active:scale-90 transition" onclick="speak('${p.th}')">
        <i class="ri-volume-up-line"></i>
      </button>
    </div>
  `).join('');
}

/* ---------- 语音播放 ---------- */
function speak(text) {
  try {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'th-TH';
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  } catch(e) {}
}

/* ---------- 滚动效果 ---------- */
function bindScrollEffects() {
  const toTop = document.getElementById('toTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // IntersectionObserver 淡入
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('section').forEach(s => {
    s.classList.add('fade-in');
    io.observe(s);
  });
}

/* ---------- 分享 ---------- */
function bindShare() {
  const btn = document.getElementById('shareBtn');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const shareData = {
      title: '🇹🇭 曼谷5日游攻略 · 五一限定',
      text: '4.29-5.3 五一假期, 一起去曼谷!',
      url: location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(location.href);
        toast('链接已复制,快去分享吧 ✨');
      }
    } catch(e) {}
  });
}

/* ---------- Toast ---------- */
function toast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `
    position: fixed; top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,0.8); color: #fff;
    padding: 10px 18px; border-radius: 24px;
    font-size: 13px; z-index: 999;
    backdrop-filter: blur(10px);
  `;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}

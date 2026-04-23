/* ======================================
 * 曼谷5日游数据（2026 五一 · 根据最新行程规划重构）
 * ====================================== */

// 图片URL常量（CDN）
const IMG = {
  grandPalace1: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/f8faf9cf-7d32-4693-8930-fcbf9658faca/image_1776766039_2_1.jpg',
  grandPalace2: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/77a8eac2-4394-4139-9391-6abb946d61ea/image_1776766039_1_3.jpg',
  watArun: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/9f1deb41-c9a2-4b25-938c-a7ef72d664a7/image_1776766066_1_1.jpg',
  watPho: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/9d67daa2-51a8-4889-9bef-6613f33454ad/image_1776766072_1_1.jpg',
  chinatown: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/91715816-6d80-4bd0-b319-9b0d682fbc6f/image_1776766078_1_3.jpg',
  chatuchak: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/d4b7ade3-cf64-4102-bb67-55d923af9be1/image_1776766111_1_1.jpg',
  damnoen: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/3ff3827d-820c-4b83-83d6-0cd16183e2ae/image_1776766115_1_1.jpg',
  ayutthaya: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/2f8956d9-de1b-465e-b1a4-ff6ba00cf7b2/image_1776766120_1_1.jpg',
  tomYum: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/6b2b6100-ec41-4bf9-a380-8b4ce4a8e9bd/image_1776766129_1_1.jpg',
  mangoRice: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/c816659b-ec66-41d1-9695-9784df55f0a6/image_1776766138_1_1.jpg',
  padThai: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/f78b2adf-b786-44ea-aba9-9520d09cd8ae/image_1776766182_1_1.jpg',
  bangkokNight: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/27f546fd-86f0-4dca-a916-6c2c9a7dbec0/image_1776766213_1_1.jpg',
  siamParagon: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/6e77d8a6-4f33-4744-9502-f4bb8e7d9ae2/image_1776766219_1_1.jpg',
  khaoSan: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/4ce9fdbc-72a4-4acf-a12e-b3122263589a/image_1776846312_1_1.jpg',
  // 塔罗牌书店 Asia Books（用户实拍）
  tarotBooks: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/7a52b440-97ef-4831-ab31-b13f5931bde7/image.png',
  // 酒店封面
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  // Jodd Fairs DanNeramit 乔德夜市（神奇之地）
  joddFairs: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/755070b2-43d4-4a71-88d8-a63704f14bd5/image_1776846223_1_3.jpg',
  // 水门寺大佛 Wat Paknam
  watPaknam: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/736b181e-3d04-482a-9b95-38bff7bf405d/image_1776846238_1_3.jpg',
  // 四面佛 Erawan Shrine
  erawan: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/8348514d-aac1-453c-9eae-f11b99b3f5d8/image_1776846248_1_1.jpg',
  // ICONSIAM 暹罗天地
  iconSiam: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/a367b6a0-ba7c-489c-afd8-741bb7085e70/image_1776846292_1_3.jpg',
  // Khlong Bang Luang 空叻曼路水上人家
  klongBangLuang: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/29d82a73-278c-4a80-af68-cd64a009c78c/image_1776846302_1_3.jpg',
  // 🆕 Dib Bangkok 当代艺术博物馆
  dibBangkok: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/fb74ef57-fd16-47a7-94f0-cc06c39c6031/image_1776935224_2_3.jpg',
  // 🆕 Pop Mart ICONSIAM 泡泡玛特全球旗舰店
  popMart: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/79f642f9-fe1b-49a4-a4ac-30c88a3e2f05/image_1776935232_1_3.jpg',
  // 🆕 Thong Lor / Ekkamai 街区
  thongLor: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/dc12d494-c707-4a8f-9aab-8e33316dcb91/image_1776935249_2_3.jpg'
};

/* ======================================
 * 🏨 下榻酒店信息
 * ====================================== */
const HOTEL = {
  nameZh: 'UHG 四分之一拉查约廷酒店',
  nameEn: 'The Quarter Ratchayothin by UHG',
  area: '拉查约廷 Ratchayothin · 曼谷北部',
  address: 'Phahon Yothin Road, Chatuchak District, Bangkok',
  img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  nearestBts: 'BTS Ratchayothin 站 (N13)',
  btsWalk: '步行 3-5 分钟',
  rating: 4.5,
  highlights: [
    { icon: 'ri-train-line', text: 'BTS 绿线直达暹罗仅 20 分钟' },
    { icon: 'ri-restaurant-line', text: '楼下即 Jodd Fairs DanNeramit 夜市' },
    { icon: 'ri-shopping-cart-line', text: '步行可达恰图恰周末市场' }
  ]
};

/* ======================================
 * 📅 5日行程（严格按最新规划）
 * ====================================== */
const ITINERARY = [
  {
    date: '4/29',
    day: 'D1 · 周三',
    title: '抵达与初见',
    subtitle: '落地 · 乔德夜市开场',
    theme: '#FF6B35',
    items: [
      { time: '18:00', icon: 'ri-plane-fill', title: '抵达 BKK 素万那普机场', desc: '建议打车 Grab/Bolt 直达酒店,车程约 45-60 分钟,费用 350-450฿; 机场办 SIM 卡+换泰铢' },
      { time: '20:00', icon: 'ri-hotel-line', title: '办理入住 · The Quarter Ratchayothin', desc: 'UHG 四分之一拉查约廷酒店 · 位于 BTS N13 站旁,放下行李小憩换上轻便装束' },
      { time: '21:00', icon: 'ri-restaurant-line', title: '🌃 晚餐:Jodd Fairs DanNeramit', desc: '乔德夜市「神奇之地」· 就在酒店附近,步行或 BTS 仅一站; 标志性欧洲城堡建筑氛围宽敞舒适,必尝「水果山海鲜」、火山排骨' },
      { time: '23:30', icon: 'ri-moon-clear-line', title: '回酒店休息', desc: '倒时差早点睡,便利店买水果备水,明天要早起逛三大庙' }
    ]
  },
  {
    date: '4/30',
    day: 'D2 · 周四',
    title: '经典古迹与河畔落日',
    subtitle: '三大庙 · 考山路夜市',
    theme: '#E4002B',
    items: [
      { time: '08:30', icon: 'ri-restaurant-line', title: '酒店早餐', desc: '吃饱喝足,今天步行量大,记得穿过膝长裤/长裙' },
      { time: '09:30', icon: 'ri-building-4-line', title: '前往大皇宫 & 玉佛寺', desc: 'Grab 直达约 45 分钟 · 约 250฿; 门票 500฿ · 拉玛王朝皇室居所,禁止穿短裤/露肩,门口可租披肩 200฿(可退)' },
      { time: '12:00', icon: 'ri-cup-line', title: '河畔午餐 · The Deck', desc: '在大皇宫附近找一家靠河的餐厅(如 The Deck),可以远眺郑王庙,冬阴功+芒果糯米饭 ¥80 起' },
      { time: '13:30', icon: 'ri-hotel-bed-line', title: '卧佛寺 Wat Pho', desc: '步行即可到达,欣赏宏伟的 46 米金身卧佛; 可在寺内体验古法按摩 480฿/1h' },
      { time: '15:30', icon: 'ri-ship-line', title: '乘船过河 · 郑王庙 Wat Arun', desc: '从 Tha Tien 码头乘 4฿ 摆渡船过河,登塔远眺湄南河' },
      { time: '17:30', icon: 'ri-camera-3-line', title: '📸 落日拍摄 · Public View Point', desc: '前往对岸的 Public View Point,这里是拍摄郑王庙落日剪影的绝佳机位,出片率 200%' },
      { time: '19:00', icon: 'ri-store-3-line', title: '🎒 考山路夜市 Khao San Road', desc: '感受曼谷最热闹的街头氛围,在此享用晚餐; 烤蝎子、椰子冰淇淋、酒吧街一网打尽' },
      { time: '22:30', icon: 'ri-taxi-line', title: 'Grab 回酒店', desc: '考山路 → 酒店约 200฿ · 深夜记得走 Grab 或 Bolt,避免黑车' }
    ]
  },
  {
    date: '5/1',
    day: 'D3 · 周五',
    title: '当代艺术与设计生活',
    subtitle: 'Dib 专场 · 素坤逸街区',
    theme: '#F8B229',
    items: [
      { time: '09:30', icon: 'ri-sun-line', title: '酒店早餐 + 稍作休息', desc: '昨天奔走一整天,今天晚点出发; 带上拍照装备与相机' },
      { time: '10:30', icon: 'ri-heart-pulse-line', title: '🙏 四面佛 Erawan Shrine', desc: '从酒店坐 BTS 绿线直达 Chit Lom 站 · 10 站 · 44฿,出站即达; 准备 4 炷香顺时针拜四个方向' },
      { time: '11:30', icon: 'ri-shopping-bag-3-line', title: 'Central World 深度游', desc: '四面佛对面天桥直连 Central World 商场,泰国最大商圈之一' },
      { time: '12:00', icon: 'ri-book-open-line', title: '✨ 重点打卡 · 6F Asia Books 塔罗牌书店', desc: '曼谷最齐全的塔罗牌 & 神秘学书店 · 上百种塔罗/神谕卡/设计类书籍,蓝色 TAROT 招牌超出片,慢慢挑选' },
      { time: '13:30', icon: 'ri-restaurant-fill', title: '商场内午餐', desc: '推荐 Nara Thai Cuisine(米其林必比登) 或 7F 各类餐饮广场,冬阴功+咖喱蟹必点' },
      { time: '14:30', icon: 'ri-palette-line', title: '🎨 Dib Bangkok 当代艺术博物馆', desc: '核心:欣赏由旧仓库改造的工业极简空间,以及 James Turrell 的光影艺术装置; 出片与思考兼顾的宝藏美术馆' },
      { time: '18:00', icon: 'ri-cup-line', title: '☕️ Thong Lor / Ekkamai 街区', desc: '取消唐人街行程,留在素坤逸区 · 这里有曼谷最顶尖的独立咖啡馆和设计感餐厅,更符合舒适节奏; 推荐 Roast、Roots Coffee、Err Urban Rustic' },
      { time: '22:00', icon: 'ri-taxi-line', title: 'Grab 回酒店', desc: 'Thong Lor → 酒店约 250฿,BTS E6 末班 00:00' }
    ]
  },
  {
    date: '5/2',
    day: 'D4 · 周六',
    title: '水岸大佛与潮流旗舰店',
    subtitle: '绿佛 · 艺术水乡 · ICONSIAM',
    theme: '#06B6A4',
    items: [
      { time: '09:00', icon: 'ri-restaurant-line', title: '酒店早餐', desc: '吃饱出发,今天会去到老城区水上人家,穿轻便鞋子' },
      { time: '10:00', icon: 'ri-temple-line', title: '🟢 水门寺大佛 Wat Paknam', desc: '从酒店打车约 30-40 分钟 · 约 280฿; 导航至「造船厂咖啡店」,拍摄巷弄间的大佛震撼全景,翡翠绿大佛巍峨出片' },
      { time: '11:30', icon: 'ri-compass-3-line', title: '寺内舍利塔参观', desc: '进入 5 层玻璃佛塔,天花板绘画宇宙星空,免门票; 中央玻璃水晶塔是 IG 爆款' },
      { time: '12:30', icon: 'ri-ship-2-line', title: '🛶 空叻曼路水上人家 Khlong Bang Luang', desc: '就在大佛附近 · 感受安静的艺术水乡慢生活; 「艺术家之家 Baan Silapin」可坐着喂鱼、看免费木偶戏(13:30/14:00)、买手作' },
      { time: '14:30', icon: 'ri-cup-line', title: '河边咖啡小憩', desc: '点一杯泰式奶茶 80฿,在老木屋里休息半小时,感受老曼谷的慢时光' },
      { time: '15:30', icon: 'ri-ship-line', title: '🚤 乘船前往 暹罗天地 ICONSIAM', desc: '从 Khlong Bang Luang 乘接驳船/Grab 前往; 曼谷最豪华的滨河 Mall' },
      { time: '16:30', icon: 'ri-shopping-bag-line', title: '🎁 重点行程 · 泡泡玛特 Pop Mart 7F', desc: '全球旗舰店 · ICONSIAM 7楼 · 装修极具未来感,非常符合现代、高新风格的审美; 首家海外 Pop Mart 咖啡厅也在这里' },
      { time: '19:00', icon: 'ri-sparkling-fill', title: '🎆 ICONSIAM 滨河晚餐 & 喷泉秀', desc: '在 ICONSIAM 滨河平台欣赏喷泉秀和夜景(18:30/20:00 免费 River Park 音乐喷泉),在此享用晚餐' },
      { time: '22:00', icon: 'ri-train-line', title: 'BTS/接驳船 回酒店', desc: '接驳船→Saphan Taksin → Ratchayothin 绿线直达 · 59฿' }
    ]
  },
  {
    date: '5/3',
    day: 'D5 · 周日',
    title: '悠闲购物与返程',
    subtitle: '恰图恰扫货 · 再见曼谷',
    theme: '#6B46C1',
    items: [
      { time: '08:30', icon: 'ri-restaurant-line', title: '酒店早餐', desc: '吃得丰盛一些,可顺便去酒店附近的恰图恰周末市集 (Chatuchak) 补货' },
      { time: '08:50', icon: 'ri-shopping-cart-2-line', title: '🛒 恰图恰周末市场 扫货', desc: '周日开市! 距酒店仅 2 站 BTS 到 Mo Chit(N8) · 16฿,亚洲最大周末集市 15000+ 摊位; 重点扫: 乳胶枕、大象裤、手工包、文创伴手礼' },
      { time: '09:30', icon: 'ri-luggage-cart-line', title: '办理退房 · 出发前往素万那普机场 (BKK)', desc: 'Grab 直达 BKK 约 400฿ · 约 1h; 或 BTS → Phaya Thai 换 ARL 机场快线 45฿' },
      { time: '10:30', icon: 'ri-plane-line', title: '机场 Check-in · 值机', desc: '提前 2-3h 到机场,免税店血拼 Boots 药妆、芒果干、BLACKMORES' },
      { time: '12:00', icon: 'ri-flight-takeoff-line', title: '✈️ 起飞离开 · 再见曼谷', desc: 'โชคดี! 期待下次再相见 · 感谢这场热带盛夏的五日漫游~' }
    ]
  }
];

/* ======================================
 * 📍 景点 TOP10（以拉查约廷酒店为中心）
 * ====================================== */
const SPOTS = [
  {
    rank: 1, name: '大皇宫 & 玉佛寺', en: 'Grand Palace', tag: '地标',
    img: IMG.grandPalace1, rating: 4.7, tip: '拉玛王朝皇室居所',
    dist: '≈ 16 km · 约 45 min',
    transit: '建议 Grab 打车直达最省心 · BTS→Saphan Taksin 换湄南河船亦可',
    fare: '打车 ≈ 250฿ / 船 50฿'
  },
  {
    rank: 2, name: '塔罗牌书店', en: 'Asia Books @ Central World', tag: '✨ 小众宝藏',
    img: IMG.tarotBooks, rating: 4.6, tip: 'Central World 6F · 塔罗&神秘学天堂',
    dist: '≈ 8 km · 约 25 min',
    transit: 'BTS Ratchayothin(N13) → Chit Lom(E1) 绿线直达,与四面佛一站同程',
    fare: '44฿ / 人'
  },
  {
    rank: 3, name: '卧佛寺', en: 'Wat Pho', tag: '按摩发源',
    img: IMG.watPho, rating: 4.6, tip: '46米金色大卧佛',
    dist: '≈ 16 km · 约 50 min',
    transit: '与大皇宫步行 10 分钟可达,一天打包三大庙最合理',
    fare: '门票 200฿'
  },
  {
    rank: 4, name: '水门寺大佛', en: 'Wat Paknam', tag: '🌟 网红绿佛',
    img: IMG.watPaknam, rating: 4.9, tip: '翡翠色巨佛 · 舍利塔宇宙穹顶',
    dist: '≈ 18 km · 约 35 min',
    transit: '建议 Grab 直达最便捷; 也可 BTS→Wutthakat 站换摩的',
    fare: '打车 ≈ 280฿ / BTS 59฿'
  },
  {
    rank: 5, name: '四面佛', en: 'Erawan Shrine', tag: '祈福圣地',
    img: IMG.erawan, rating: 4.8, tip: 'Chit Lom 站出口即达',
    dist: '≈ 8 km · 约 20 min',
    transit: 'BTS Ratchayothin(N13) → Chit Lom(E1) 10 站直达,出口天桥连接',
    fare: '44฿ / 人'
  },
  {
    rank: 6, name: 'Dib Bangkok 当代艺术博物馆', en: 'Dib Bangkok', tag: '🎨 艺术宝藏',
    img: IMG.dibBangkok, rating: 4.7, tip: '旧仓库改造 · James Turrell 光影装置',
    dist: '≈ 12 km · 约 30 min',
    transit: 'BTS/Grab 均可达 · 素坤逸区工业风极简美术馆',
    fare: '门票 250฿'
  },
  {
    rank: 7, name: '泡泡玛特 ICONSIAM', en: 'Pop Mart 7F', tag: '🧸 全球旗舰店',
    img: IMG.popMart, rating: 4.8, tip: '全球最大旗舰店 · 未来感装修',
    dist: '≈ 15 km · 约 50 min',
    transit: 'BTS → Saphan Taksin(S6) 换码头免费接驳船 10 min',
    fare: '接驳船免费'
  },
  {
    rank: 8, name: '暹罗天地 ICONSIAM', en: 'ICONSIAM', tag: '摩登商城',
    img: IMG.iconSiam, rating: 4.7, tip: '室内浮动市场 · 河畔音乐喷泉',
    dist: '≈ 15 km · 约 50 min',
    transit: 'BTS → Saphan Taksin(S6) 换码头免费接驳船 10 min',
    fare: '60฿ / 人'
  },
  {
    rank: 9, name: '郑王庙', en: 'Wat Arun', tag: '日落圣地',
    img: IMG.watArun, rating: 4.8, tip: '黎明寺 · 对岸 Public View Point 最出片',
    dist: '≈ 17 km · 约 55 min',
    transit: '卧佛寺后步行至 Tha Tien 渡口坐 4฿ 摆渡船过江',
    fare: '约 54฿ / 人'
  },
  {
    rank: 10, name: '恰图恰周末市场', en: 'Chatuchak', tag: '🌟 离酒店最近',
    img: IMG.chatuchak, rating: 4.5, tip: '亚洲最大周末集市 · 15000+ 摊位',
    dist: '≈ 3 km · 约 10 min',
    transit: 'BTS Ratchayothin → Mo Chit(N8) 仅 2 站,出站即达',
    fare: '16฿ / 人'
  }
];

/* ======================================
 * 🍜 泰式美食
 * ====================================== */
const FOODS = [
  { name: '冬阴功汤', en: 'Tom Yum Goong', img: IMG.tomYum, price: '¥40', taste: ['酸辣','浓郁'], desc: '泰国国汤, 香茅青柠柠檬叶碰撞出的东南亚风味, Nara Thai 必点' },
  { name: '芒果糯米饭', en: 'Mango Sticky Rice', img: IMG.mangoRice, price: '¥20', taste: ['清甜','软糯'], desc: '5月正是芒果季! 金煌芒配椰浆糯米, 恰图恰/Jodd Fairs 都有' },
  { name: '泰式炒河粉', en: 'Pad Thai', img: IMG.padThai, price: '¥25', taste: ['咸香','微甜'], desc: '街头之王 · 考山路、Jodd Fairs 夜市随处可见,Thip Samai 是米其林老店' },
  { name: '曼谷夜市小吃', en: 'Night Market', img: IMG.chinatown, price: '¥10起', taste: ['丰富','平价'], desc: 'Jodd Fairs、考山路、恰图恰夜市,烤肉串、榴莲、青芒、海鲜火山排骨一网打尽' }
];

/* ======================================
 * 💰 预算
 * ====================================== */
const BUDGET = [
  { name: '✈️ 往返机票', amount: 1800, percent: 34, note: '广深/沪曼往返 · 提前30天预定更划算' },
  { name: '🏨 5晚酒店', amount: 1500, percent: 28, note: 'The Quarter Ratchayothin · 人均 ¥300/晚' },
  { name: '🍜 餐饮', amount: 800, percent: 15, note: '街头+餐厅+夜市自由组合 · 性价比极高' },
  { name: '🚕 市内交通', amount: 350, percent: 7, note: 'BTS/MRT+Grab · 打车为主, D2/D4 较多' },
  { name: '🎟️ 门票活动', amount: 480, percent: 9, note: '大皇宫+卧佛寺+Dib门票+按摩+游船' },
  { name: '🛍️ 购物伴手礼', amount: 350, percent: 7, note: '塔罗牌+Pop Mart+恰图恰+Big C 伴手礼' }
];

/* ======================================
 * 💡 实用贴士
 * ====================================== */
const TIPS = [
  { type: 'warn', icon: '⚠️', title: '着装与礼仪', text: '进入寺庙(大皇宫/水门寺)需穿过膝长裤/长裙, 遮肩; 任何时候不可触摸泰国人头部, 不指佛像' },
  { type: 'tip', icon: '🚖', title: '打车软件', text: '推荐 Grab 或 Bolt (Bolt 通常更便宜); 支付宝也可以直接打车, 免去装 App 的麻烦' },
  { type: 'warn', icon: '🚫', title: '谨防被宰', text: '路边出租车几公里可能要价 100+฿; 突突车(Tuk-Tuk) 价格昂贵且容易被坑, 上车前务必讲好价格' },
  { type: 'warn', icon: '🛕', title: '大皇宫防骗', text: '大皇宫门口若有人用中文告诉你"今天不开门"并引导你坐车去河边坐船, 全是骗人的, 直接忽略继续走向正门即可' },
  { type: 'info', icon: '🚇', title: 'BTS 一日票', text: '曼谷 BTS 单程较贵, 如果全天多次乘坐, 建议购买 BTS 一日票(约 150฿), 并尽量把行程安排在绿线上最划算' },
  { type: 'info', icon: '💵', title: '入境现金备查', text: '泰国规定个人需携带 2 万฿ (或等值外币)现金备查, 属于抽查, 建议酌情携带以防万一' },
  { type: 'info', icon: '🚈', title: '机场往返市区', text: 'BKK 机场 B 层坐机场快线: 到 Makkasan 站换 MRT 蓝线, 到 Phaya Thai 终点站换 BTS 绿线, 比打车稳定且不堵车' },
  { type: 'tip', icon: '🎫', title: '值机与退税', text: 'BKK 值机: 1-10 号门对应不同柜台(如 1 号门 A/B, 10 号门 U/W); 退税: 登机口附近找 VAT 指示牌, 凭购物小票+护照领现金' },
  { type: 'tip', icon: '💳', title: '支付方式', text: '景区/商场刷卡, 街边摊现金为王; 建议带 2000฿ 零钱; 部分摊位可扫支付宝/微信' },
  { type: 'warn', icon: '🥭', title: '饮食避坑', text: '不要在商场买榴莲, 去市场菜场更便宜; 不必执着于网红店, 参考 Google 地图评分更靠谱' },
  { type: 'warn', icon: '🧊', title: '肠胃保护', text: '肠胃脆弱者慎喝 7-11 或路边的自制冰饮, 容易拉肚子; 矿泉水和常温瓶装饮品更安全' },
  { type: 'tip', icon: '📸', title: '郑王庙机位', text: '不想进庙: 对岸 Public View Point 拍落日全景最出片; 想进庙: 到 Tha Tien 码头坐 4฿ 摆渡船过江即达' },
  { type: 'tip', icon: '📷', title: '水门寺大佛机位', text: '导航"造船厂咖啡店"可拍到巷弄里的完整大佛; 导航"796 Soi Thoet Thai 26"可拍到游船侧面的大佛' },
  { type: 'tip', icon: '🏯', title: '卧佛寺机位', text: '靠近大皇宫和玉佛寺, 导航 Wat Pho Bangkok, 46 米金色大卧佛景观非常壮观, 建议早上开门即入避开人潮' },
  { type: 'tip', icon: '🧸', title: '泡泡玛特扫货', text: 'ICONSIAM 7F 旗舰店面积很大, 热门限定款可能需要排队; 建议进店后先拿购物筐, 直奔你最感兴趣的 IP 区域' },
  { type: 'info', icon: '⛴️', title: '周末堵车避坑', text: '周六下午从水门寺大佛前往 ICONSIAM, 强烈建议走 BTS + 免费接驳船路线, 避开曼谷周末的地面大堵车, 比打车快且免费' }
];

/* ======================================
 * 🚇 交通（以拉查约廷酒店为出发点）
 * ====================================== */
const TRANSPORTS = [
  { icon: 'ri-train-line', name: 'BTS 绿线', color: '#06B6A4', desc: 'Ratchayothin N13 站 🌟 酒店首选', price: '16-59฿' },
  { icon: 'ri-subway-line', name: 'MRT 蓝线', color: '#6B46C1', desc: '步行到 Phahon Yothin 站', price: '17-45฿' },
  { icon: 'ri-taxi-line', name: 'Grab 打车', color: '#FF6B35', desc: '明码标价省心,夜归首选', price: '¥15-30' },
  { icon: 'ri-motorbike-line', name: '突突车 Tuk', color: '#E4002B', desc: '体验>实用,需议价', price: '议价60฿+' },
  { icon: 'ri-ship-line', name: '湄南河船', color: '#F8B229', desc: '老城景点连通(配合BTS)', price: '15-45฿' },
  { icon: 'ri-bus-2-line', name: '免费接驳船', color: '#1A1423', desc: 'Saphan Taksin↔ICONSIAM', price: '免费' }
];

/* ======================================
 * 🗣️ 常用泰语
 * ====================================== */
const PHRASES = [
  { zh: '你好', th: 'สวัสดี', pron: 'sà-wàt-dee 萨瓦迪卡' },
  { zh: '谢谢', th: 'ขอบคุณ', pron: 'khàawp-khun 卡朋坤' },
  { zh: '多少钱?', th: 'เท่าไหร่', pron: 'thâo-rài 套莱' },
  { zh: '太贵了', th: 'แพงไป', pron: 'phaeng-bpai 喷掰' },
  { zh: '不要辣', th: 'ไม่เผ็ด', pron: 'mâi-phèt 麦瀑' },
  { zh: '好吃!', th: 'อร่อย', pron: 'à-ròi 阿咯' }
];

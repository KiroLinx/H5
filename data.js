/* ======================================
 * 曼谷5日游数据
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
  khaoSan: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/dcb23853-acce-425e-a78d-f88deb3c9fbf/image_1776766245_1_1.png'
};

// 5日行程
const ITINERARY = [
  {
    date: '4/29',
    day: 'D1 · 周三',
    title: '抵达曼谷 · 初见素万那普',
    subtitle: '落地打卡 · 暹罗夜游',
    theme: '#FF6B35',
    items: [
      { time: '14:00', icon: 'ri-plane-fill', title: '抵达 BKK 素万那普机场', desc: '过关、取SIM卡、换泰铢；建议购买DTAC/AIS旅游套餐约¥50/8天' },
      { time: '16:00', icon: 'ri-train-line', title: '机场快线 ARL 进城', desc: '直达 Makkasan 换 MRT，节省堵车时间,约¥10/人' },
      { time: '17:30', icon: 'ri-hotel-line', title: '入住暹罗区酒店', desc: '推荐 Siam/Chidlom 地铁站附近，逛街交通都方便' },
      { time: '19:00', icon: 'ri-shopping-bag-3-line', title: 'Siam Paragon 商圈', desc: '暹罗百丽宫+Siam Square，地下一层 Paragon Food Hall 解决晚餐' },
      { time: '21:30', icon: 'ri-moon-clear-line', title: '回酒店休整', desc: '倒时差 + 为明天早起逛大皇宫做准备' }
    ]
  },
  {
    date: '4/30',
    day: 'D2 · 周四',
    title: '大皇宫 · 郑王庙 · 卧佛寺',
    subtitle: '曼谷三大庙 · 湄南河夕阳',
    theme: '#E4002B',
    items: [
      { time: '08:00', icon: 'ri-restaurant-line', title: '酒店早餐', desc: '务必吃饱,景区步行量大,建议备足饮用水' },
      { time: '09:00', icon: 'ri-building-4-line', title: '大皇宫 & 玉佛寺', desc: '开放至15:30, 门票500泰铢; 禁止穿短裤/露肩,门口可租披肩' },
      { time: '12:00', icon: 'ri-cup-line', title: 'Tha Tien 码头午餐', desc: '推荐当地小店「The Deck by Arun Residence」,隔河赏郑王庙' },
      { time: '14:00', icon: 'ri-hotel-bed-line', title: '卧佛寺 Wat Pho', desc: '46米长金色大卧佛,泰式古法按摩发源地,可体验1小时¥120' },
      { time: '16:30', icon: 'ri-ship-line', title: '渡轮过江 · 郑王庙', desc: '4泰铢/次摆渡船,登塔远眺湄南河金色黄昏' },
      { time: '19:00', icon: 'ri-moon-line', title: '湄南河夜游船晚餐', desc: 'Chao Phraya Princess 自助晚餐,¥250起,灯光秀+泰式歌舞' }
    ]
  },
  {
    date: '5/1',
    day: 'D3 · 周五',
    title: '大城一日游',
    subtitle: '千年古都 · 世界遗产',
    theme: '#F8B229',
    items: [
      { time: '07:00', icon: 'ri-car-line', title: '包车/拼车出发', desc: '距曼谷80公里约1.5h,推荐Klook一日游¥180含午餐' },
      { time: '09:00', icon: 'ri-ancient-gate-line', title: '玛哈泰寺 树抱佛头', desc: '大城标志,拍照时须蹲下表示尊敬,勿与佛头等高' },
      { time: '10:30', icon: 'ri-temple-line', title: '帕席桑碧寺', desc: '古皇家寺庙,三座白色佛塔壮观庄严' },
      { time: '12:30', icon: 'ri-cake-3-line', title: '河畔餐厅 · 大虾面', desc: '尝尝大城名物「泰式大头虾面」,香辣浓郁' },
      { time: '14:00', icon: 'ri-compass-3-line', title: '柴瓦塔那兰寺', desc: '夕阳西下最出片的寺庙,租传统泰服拍照¥40' },
      { time: '18:00', icon: 'ri-car-line', title: '返回曼谷', desc: '晚上可选择唐人街宵夜,耀华力路小吃街延续夜生活' }
    ]
  },
  {
    date: '5/2',
    day: 'D4 · 周六',
    title: '水上市场 · 恰图恰',
    subtitle: '周末血拼 · 市井烟火',
    theme: '#06B6A4',
    items: [
      { time: '07:00', icon: 'ri-ship-2-line', title: '丹嫩沙多水上市场', desc: '距市区100km,建议6点出发避人潮;长尾船游览¥40/人' },
      { time: '10:00', icon: 'ri-restaurant-2-line', title: '船上小吃体验', desc: '船娘现做船面、椰香糯米饭、烤香蕉,20泰铢就能吃一圈' },
      { time: '13:00', icon: 'ri-shopping-bag-line', title: '恰图恰周末市场', desc: '亚洲最大周末市集,15000+摊位,仅周六日开放!' },
      { time: '14:30', icon: 'ri-price-tag-3-line', title: '精品区淘货', desc: '文创小物、手工皮具、复古家居,分区明晰,别忘了砍价' },
      { time: '18:00', icon: 'ri-flower-line', title: 'JJ Green 夜市', desc: '文青夜市,复古杂货+酒吧+Live音乐,更清净拍照友好' },
      { time: '21:00', icon: 'ri-cocktail-line', title: 'Vertigo 天空酒吧', desc: '61层露天酒吧,360°俯瞰曼谷夜景,着装要求:不穿人字拖' }
    ]
  },
  {
    date: '5/3',
    day: 'D5 · 周日',
    title: '返程 · 暹罗购物',
    subtitle: '最后买买买 · 满载而归',
    theme: '#6B46C1',
    items: [
      { time: '09:00', icon: 'ri-health-book-line', title: '泰式古法按摩', desc: '出发前放松2小时,推荐「Health Land」连锁,2h¥150性价比高' },
      { time: '11:30', icon: 'ri-shopping-cart-line', title: 'Big C 伴手礼', desc: '中央世界对面,冬阴功调味包、皇家蜂蜜、乳胶枕一站搞定' },
      { time: '13:00', icon: 'ri-restaurant-fill', title: '最后一顿泰餐', desc: '推荐米其林必比登「建兴酒家」咖喱蟹+马沙曼咖喱' },
      { time: '15:00', icon: 'ri-luggage-cart-line', title: '酒店取行李 Check out', desc: '多数酒店12点退房,提前寄存行李' },
      { time: '16:00', icon: 'ri-train-line', title: '机场快线返机场', desc: '提前3小时到机场,旺季排队退税建议预留充足时间' },
      { time: '20:00', icon: 'ri-flight-takeoff-line', title: '再见曼谷 ✈️', desc: 'โชคดี ! 期待下次再相见~' }
    ]
  }
];

// 景点 TOP6
const SPOTS = [
  { rank: 1, name: '大皇宫', en: 'Grand Palace', tag: '地标', img: IMG.grandPalace1, rating: 4.7, tip: '拉玛王朝皇室居所' },
  { rank: 2, name: '郑王庙', en: 'Wat Arun', tag: '日落圣地', img: IMG.watArun, rating: 4.8, tip: '黎明寺 · 湄南河畔' },
  { rank: 3, name: '卧佛寺', en: 'Wat Pho', tag: '按摩发源', img: IMG.watPho, rating: 4.6, tip: '46米金色大卧佛' },
  { rank: 4, name: '大城遗迹', en: 'Ayutthaya', tag: '世界遗产', img: IMG.ayutthaya, rating: 4.7, tip: '千年古都 红砖佛塔' },
  { rank: 5, name: '恰图恰市场', en: 'Chatuchak', tag: '周末限定', img: IMG.chatuchak, rating: 4.5, tip: '亚洲最大周末集市' },
  { rank: 6, name: '丹嫩沙多', en: 'Damnoen Saduak', tag: '水上集市', img: IMG.damnoen, rating: 4.3, tip: '长尾船穿行购物' }
];

// 美食
const FOODS = [
  { name: '冬阴功汤', en: 'Tom Yum Goong', img: IMG.tomYum, price: '¥40', taste: ['酸辣','浓郁'], desc: '泰国国汤, 香茅青柠柠檬叶碰撞出的东南亚风味' },
  { name: '芒果糯米饭', en: 'Mango Sticky Rice', img: IMG.mangoRice, price: '¥20', taste: ['清甜','软糯'], desc: '5月正是芒果季! 金煌芒配椰浆糯米, 不可错过' },
  { name: '泰式炒河粉', en: 'Pad Thai', img: IMG.padThai, price: '¥25', taste: ['咸香','微甜'], desc: '街头之王, Thip Samai是米其林推荐老店' },
  { name: '曼谷夜市小吃', en: 'Night Market', img: IMG.chinatown, price: '¥10起', taste: ['丰富','平价'], desc: '唐人街、考山路、Asiatique夜市,烤肉串、榴莲、青芒都得来一份' }
];

// 预算
const BUDGET = [
  { name: '✈️ 往返机票', amount: 1800, percent: 34, note: '广深/沪曼往返 · 提前30天预定更划算' },
  { name: '🏨 5晚酒店', amount: 1500, percent: 28, note: '人均 ¥300/晚 · 暹罗区中档酒店' },
  { name: '🍜 餐饮', amount: 800, percent: 15, note: '街头+餐厅+夜市自由组合 · 性价比极高' },
  { name: '🚕 市内交通', amount: 300, percent: 6, note: 'BTS/MRT+Grab, 避开高峰打车' },
  { name: '🎟️ 门票活动', amount: 480, percent: 9, note: '三大庙+大城一日游+夜游船' },
  { name: '🛍️ 购物伴手礼', amount: 400, percent: 8, note: '预留随心购物额度' }
];

// 贴士
const TIPS = [
  { type: 'warn', icon: '⚠️', title: '着装与礼仪', text: '进入寺庙需穿过膝长裤/长裙, 遮肩; 任何时候不可触摸泰国人头部, 不指佛像' },
  { type: 'info', icon: '💧', title: '防暑防晒', text: '5月曼谷日均32°C, 紫外线强, 务必带防晒霜、帽子、墨镜; 多喝7-11常温水' },
  { type: 'tip', icon: '💰', title: '小费文化', text: '酒店行李/床头小费20泰铢 = ¥4; 按摩结束给50-100泰铢; 便利店无需小费' },
  { type: 'warn', icon: '🚫', title: '避坑指南', text: '机场出租车选Public Taxi柜台; 突突车坐前谈好价钱; 警惕"今天大皇宫关门"骗局' },
  { type: 'info', icon: '📱', title: '必装APP', text: 'Grab叫车, Google翻译, Google Maps, Bolt租摩托(谨慎), 马蜂窝/Klook订活动' },
  { type: 'tip', icon: '💳', title: '支付方式', text: '景区/商场刷卡, 街边摊现金为王; 建议带2000泰铢零钱; 部分摊位可扫支付宝/微信' }
];

// 交通
const TRANSPORTS = [
  { icon: 'ri-train-line', name: 'BTS 轻轨', color: '#06B6A4', desc: '暹罗核心覆盖', price: '16-59฿' },
  { icon: 'ri-subway-line', name: 'MRT 地铁', color: '#6B46C1', desc: '老城通勤首选', price: '17-45฿' },
  { icon: 'ri-taxi-line', name: 'Grab 打车', color: '#FF6B35', desc: '明码标价省心', price: '¥15-30' },
  { icon: 'ri-motorbike-line', name: '突突车 Tuk', color: '#E4002B', desc: '体验>实用', price: '议价60฿+' },
  { icon: 'ri-ship-line', name: '湄南河船', color: '#F8B229', desc: '老城景点连通', price: '15-45฿' },
  { icon: 'ri-bus-2-line', name: '公交', color: '#1A1423', desc: '本地人首选', price: '8-25฿' }
];

// 常用泰语
const PHRASES = [
  { zh: '你好', th: 'สวัสดี', pron: 'sà-wàt-dee 萨瓦迪卡' },
  { zh: '谢谢', th: 'ขอบคุณ', pron: 'khàawp-khun 卡朋坤' },
  { zh: '多少钱?', th: 'เท่าไหร่', pron: 'thâo-rài 套莱' },
  { zh: '太贵了', th: 'แพงไป', pron: 'phaeng-bpai 喷掰' },
  { zh: '不要辣', th: 'ไม่เผ็ด', pron: 'mâi-phèt 麦瀑' },
  { zh: '好吃!', th: 'อร่อย', pron: 'à-ròi 阿咯' }
];

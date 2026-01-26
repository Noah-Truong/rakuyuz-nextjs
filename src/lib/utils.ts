import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes with clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format number with Japanese units
export function formatJapaneseNumber(num: number): string {
  if (num >= 100000000) {
    return `${(num / 100000000).toFixed(1)}億`;
  }
  if (num >= 10000) {
    return `${(num / 10000).toFixed(0)}万`;
  }
  return num.toLocaleString("ja-JP");
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Generate unique ID
export function generateId(prefix: string = "id"): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

// Check if element is in viewport
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Smooth scroll to element
export function scrollToElement(
  elementId: string,
  offset: number = 0
): void {
  const element = document.getElementById(elementId);
  if (element) {
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
}

// Company/Association data - RAKUYUZ工法協会
export const companyInfo = {
  name: "ラクユーZ工法協会",
  nameEn: "RAKUYU-Z Construction Method Association",
  address: {
    postal: "〒615-0881",
    full: "京都市右京区西京極北大入町66",
    city: "京都市右京区",
  },
  phone: "075-323-1445",
  fax: "075-323-1442",
  email: "info@rakuyuz.jp",
  nearestStation: "西京極駅（阪急京都線）",
};

// Navigation items
export const navigationItems = [
  { href: "/", label: "ホーム" },
  { href: "/construction", label: "工法について" },
  { href: "/specification", label: "6つの特徴" },
  { href: "/process", label: "施工手順" },
  { href: "/works", label: "施工事例" },
  { href: "/machine", label: "主な使用機器" },
  { href: "/about", label: "協会について" },
];

// Feature cards for homepage
export const featureCards = [
  {
    id: "construction",
    title: "工法について",
    image: "/photos/rakuyu-zi method/standard_img.png",
    href: "/construction",
  },
  {
    id: "specification",
    title: "6つの特徴",
    image: "/photos/features.png",
    href: "/specification",
  },
  {
    id: "machine",
    title: "主な使用機器",
    image: "/photos/equipment.png",
    href: "/machine",
  },
];

// Hero slider images
export const heroSlides = [
  "/photos/general_construction/slide1.png",
  "/photos/general_construction/slide2.png",
  "/photos/general_construction/slide3.png",
  "/photos/general_construction/slide4.png",
  "/photos/general_construction/slide5.png",
  "/photos/general_construction/slide6.png",
];

// 6 Features data
export const sixFeatures = [
  {
    id: 1,
    category: "耐久性",
    title: "目詰まり対応で工事が中断するのを解決！",
    beforeTitle: "目詰まり対応で工事が中断する！",
    beforeImage: "/photos/features/solution1_left.png",
    afterTitle: "目詰まりなく、スムーズな流れ",
    afterImage: "/photos/features/solution1_right.png",
  },
  {
    id: 2,
    category: "機動性",
    title: "吸引車を多数配置、ピストン輸送から脱却！",
    beforeTitle: "吸引車を多数配置し、何度もピストン輸送",
    beforeImage: "/photos/features/solution2_left.png",
    afterTitle: "無駄な工数を削減！",
    afterImage: "/photos/features/solution2_right.png",
  },
  {
    id: 3,
    category: "施工性",
    title: "人孔内に潜水ポンプの設置ができない場所でもOK!",
    beforeTitle: "人孔内に潜水ポンプの設置ができない。",
    beforeImage: "/photos/features/solution_s_left1.png",
    beforeImage2: "/photos/features/solution_s_left2.png",
    afterTitle: "特殊ポンプは、吸込ホースを投入するだけ！",
    afterImage: "/photos/features/solution_s_right1.png",
    afterImage2: "/photos/features/solution_s_right2.png",
  },
  {
    id: 4,
    category: "環境性",
    title: "水替えのために周辺交通への影響も少なく!",
    beforeTitle: "水替えのために周辺交通への影響",
    beforeImage: "/photos/features/solution4_left.png",
    afterTitle: "交通規制も最小限に！",
    afterImage: "/photos/features/solution4_right.png",
  },
  {
    id: 5,
    category: "安全性",
    title: "ポンプの自動制御と巡回監視で、省力化を図りつつ事故発生時も迅速に対応可",
    beforeTitle: "監視体制のないまま溢水事故が発生",
    beforeImage: "/photos/features/solution6_left.png",
    afterTitle: "素早い対応が可能に！",
    afterImage: "/photos/features/solution6_right.png",
  },
  {
    id: 6,
    category: "省力性",
    title: "大容量の水替でも設置撤去がスムーズ",
    beforeImage: "/photos/features/solution7_left.png",
    afterImage: "/photos/features/solution7_right.png",
  },
];

// Process steps
export const processSteps = [
  {
    step: 1,
    title: "準備工",
    description: "施工直前に、当該現場の各人孔内・宅マス内を最終チェックし、作業開始に問題ないことを確認します。また、施工区間内のその他の状況を確認します。",
  },
  {
    step: 2,
    title: "特殊ポンプ設置工",
    description: "吸水するマンホールおよび宅マスに近接した箇所に特殊ポンプを設置します。",
    images: ["/photos/procedure/flow_img1_1.png", "/photos/procedure/flow_img1_2.png"],
  },
  {
    step: 3,
    title: "迂回配管設置工",
    description: "事前調査工により決定した配管ルート（排水側）に、最適な仮管を配管します。",
    images: ["/photos/procedure/flow_img3_1.png", "/photos/procedure/flow_img3_2.png"],
  },
  {
    step: 4,
    title: "通水器設置工",
    description: "本管および取付管の止水箇所に、通水器（ラクユーＺ）を設置します。",
    images: ["/photos/procedure/flow_img4_1.png", "/photos/procedure/flow_img4_2.png"],
  },
  {
    step: 5,
    title: "排水管理工",
    description: "水替期間内に行う本管および取付管の仮配管の管理作業を指します。",
  },
  {
    step: 6,
    title: "運転管理工",
    description: "水替期間内において、水替システム全体が問題なく稼働しているかを点検するため定期的に巡回監視する作業を指します。",
  },
  {
    step: 8,
    title: "通水器撤去工",
    description: "本体工事が終了後、はじめに通水器の撤去作業を行い、供用を再開させます。",
    images: ["/photos/procedure/flow_img8_1.png"],
  },
  {
    step: 9,
    title: "迂回配管撤去工",
    description: "現場周辺への漏水に注意しながら、仮配管の撤去作業を行います。",
    images: ["/photos/procedure/flow_img9_1.png"],
  },
  {
    step: 10,
    title: "特殊ポンプ撤去工",
    description: "マンホールおよび宅マス付近に設置した特殊ポンプを撤去します。",
    images: ["/photos/procedure/flow_img10_1.png"],
  },
  {
    step: 11,
    title: "片付け",
    description: "作業範囲の清掃、工具類等の置き忘れがないようチェックする。とりわけ、人孔内に残置したものがないか確認します。",
    images: ["/photos/procedure/flow_img11_1.png"],
    note: "人孔改造や管の埋設をした場合は、復旧作業を行います。",
  },
];

// Case Studies / Works data
export const caseStudies = [
  {
    id: 1,
    title: "布設替工事（1スパン水替）その1",
    content: "管渠移転工事",
    location: "静岡県",
    diameter: "φ200mm",
    length: "10m ※一つ上流の人孔が交差点内",
    flow: "1.0㎥/分（作業時排水／1日間）",
    folder: "1.布設替工事（1スパン水替）その1",
    images: ["works_img_new11_2.jpg", "works_img_new11_3.jpg", "works_img_new11_4.jpg", "works_img_new11_5.jpg", "works_img_new11_6.jpg"],
  },
  {
    id: 2,
    title: "布設替工事（1スパン水替）その2",
    content: "管渠移転工事",
    location: "静岡県",
    diameter: "φ200mm, φ600mm（2方向から流入）",
    length: "350m ※一つ上流の人孔が県道を挟む",
    flow: "3.0㎥/分（常時排水／41日間）",
    folder: "2.布設替工事（1スパン水替）その2",
    images: ["works_img_new12_1.jpg", "works_img_new12_2.jpg", "works_img_new12_3.jpg", "works_img_new12_4.jpg", "works_img_new12_5.jpg", "works_img_new12_6.jpg"],
  },
  {
    id: 3,
    title: "布設替工事（1スパン水替）その3",
    content: "管渠移転工事",
    location: "石川県",
    diameter: "φ500mm",
    length: "50m ※一つ上流の人孔が鉄道を挟む",
    flow: "4.4㎥/分（常時排水／5日間）",
    folder: "3.布設替工事（1スパン水替）その3",
    images: ["works_img_new13_1.jpg", "works_img_new13_2.jpg", "works_img_new13_3.jpg", "works_img_new13_4.jpg", "works_img_new13_5.jpg", "works_img_new13_6.jpg"],
  },
  {
    id: 4,
    title: "大口径水替（更生工事）その1",
    content: "管更生工事",
    location: "京都府",
    diameter: "φ800, φ1200mm",
    length: "207ｍ",
    flow: "11.0㎥/分（作業時排水）",
    folder: "4.大口径水替（更生工事）その1",
    images: ["works_img_new21_1.jpg", "works_img_new21_2.jpg", "works_img_new21_3.jpg", "works_img_new21_4.jpg", "works_img_new21_5.jpg", "works_img_new21_6.jpg"],
  },
  {
    id: 5,
    title: "大口径水替（更生工事）その2",
    content: "管更生工事",
    location: "東京都",
    diameter: "φ1400mm, φ2000mm",
    length: "140ｍ（4スパン計）",
    flow: "7.5㎥/分（作業時排水）",
    folder: "5.大口径水替（更生工事）その2",
    images: ["works_img_new22_1.jpg", "works_img_new22_2.jpg", "works_img_new22_3.jpg", "works_img_new22_4.jpg", "works_img_new22_5.jpg", "works_img_new22_6.jpg"],
  },
  {
    id: 6,
    title: "大口径水替（更生工事）その3",
    content: "管更生工事",
    location: "静岡県",
    diameter: "φ1500mm",
    length: "100ｍ",
    flow: "10.0㎥/分（作業時排水／60日間）",
    folder: "6.大口径水替（更生工事）その3",
    images: ["works_img_new_23_1.jpg", "works_img_new_23_2.jpg", "works_img_new_23_3.jpg", "works_img_new_23_4.jpg", "works_img_new_23_5.jpg", "works_img_new_23_6.jpg"],
  },
  {
    id: 7,
    title: "大口径水替（人孔管口耐震化工事）その4",
    content: "人孔管口耐震化工事",
    location: "東京都",
    diameter: "□ 2500mm x 1800mm",
    length: "15m",
    flow: "5.0㎥/分（作業時排水／2日間）",
    folder: "7.大口径水替（人孔管口耐震化工事）その4",
    images: ["works_img_new_24_1.jpg", "works_img_new_24_2.jpg", "works_img_new_24_3.jpg", "works_img_new_24_4.jpg", "works_img_new_24_5.jpg", "works_img_new_24_6.jpg"],
  },
  {
    id: 8,
    title: "東日本大震災復旧工事 その1",
    content: "災害復旧工事（布設替工事）",
    location: "宮城県内各地",
    diameter: "φ200mm, 250mm, 300mm",
    length: "999m、624m, 660m",
    flow: "240日, 300日, 240日",
    folder: "8.東日本大震災復旧工事 その1",
    images: ["works_img_new_25_1.jpg", "works_img_new_25_2.jpg", "works_img_new_25_3.jpg", "works_img_new_25_4.jpg", "works_img_new_25_5.jpg", "works_img_new_25_6.jpg"],
  },
  {
    id: 9,
    title: "東日本大震災復旧工事 その2",
    content: "災害復旧工事（改築推進工事）",
    location: "宮城県",
    diameter: "φ200mm",
    length: "190m（1スパン）",
    flow: "1.2㎥/分（常時排水／94日間）",
    folder: "9.東日本大震災復旧工事 その2",
    images: ["works_img_new_26_1.jpg", "works_img_new_26_2.jpg", "works_img_new_26_3.jpg", "works_img_new_26_4.jpg", "works_img_new_26_5.jpg", "works_img_new_26_6.jpg"],
  },
  {
    id: 10,
    title: "熊本地震復旧工事",
    content: "災害復旧工事（推進工事／インバート切替工事）",
    location: "熊本県",
    diameter: "φ400mm",
    length: "46.0m",
    flow: "1.2㎥/分（常時排水／94日間）",
    folder: "10.熊本地震復旧工事",
    images: ["works_img_new_27_1.jpg", "works_img_new_27_2.jpg", "works_img_new_27_3.jpg", "works_img_new_27_4.jpg", "works_img_new_27_5.jpg", "works_img_new_27_6.jpg"],
  },
  {
    id: 11,
    title: "鳥取中部地震復旧工事",
    content: "災害復旧工事（布設替工事）",
    location: "鳥取県",
    diameter: "φ150mm, 200mm, 250mm",
    length: "97m / 216m / 320m",
    flow: "20日間 / 17日間 / 40日間",
    folder: "11.鳥取中部地震復旧工事",
    images: ["works_img_new_34_1.jpg", "works_img_new_34_2.jpg", "works_img_new_34_3.jpg", "works_img_new_34_4.jpg", "works_img_new_34_5.jpg", "works_img_new_34_6.jpg"],
  },
  {
    id: 12,
    title: "マンホールポンプ場防食工事",
    content: "マンホールポンプ場防食工事",
    location: "山形県",
    diameter: "3方向からポンプ場へ流入",
    length: "190m（既設圧送管へ接続）",
    flow: "1.2㎥/分（常時排水／39日間）",
    folder: "12.マンホールポンプ場防食工事",
    images: ["works_img_new41_1.jpg", "works_img_new41_2.jpg", "works_img_new41_3.jpg", "works_img_new41_4.jpg", "works_img_new41_5.jpg", "works_img_new41_6.jpg"],
  },
  {
    id: 13,
    title: "中継ポンプ場改修工事",
    content: "中継ポンプ場改修工事",
    location: "福井県",
    diameter: "3方向からポンプ場へ流入",
    length: "2700m（既設圧送管へ接続）",
    flow: "3.08㎥/分（全揚程30m、常時排水／14日間）",
    folder: "13.中継ポンプ場改修工事",
    images: ["works_img_new42_1.jpg", "works_img_new42_2.jpg", "works_img_new42_3.jpg", "works_img_new42_4.jpg", "works_img_new42_5.jpg", "works_img_new42_6.jpg"],
  },
  {
    id: 14,
    title: "改築推進工事",
    content: "改築推進工事",
    location: "千葉県",
    diameter: "φ400mm /φ250mm（サービス管）",
    length: "60ｍ",
    flow: "2.0㎥/分（常時排水／74日間）",
    folder: "14.改築推進工事",
    images: ["works_img_new51_1.jpg", "works_img_new51_2.jpg", "works_img_new51_3.jpg", "works_img_new51_4.jpg", "works_img_new51_5.jpg", "works_img_new51_6.jpg"],
  },
  {
    id: 15,
    title: "長距離水替",
    content: "布設替工事",
    location: "千葉県",
    diameter: "φ600mm",
    length: "300ｍ（1スパン）",
    flow: "3.0㎥/分（常時排水／80日間）",
    folder: "15.長距離水替",
    images: ["works_img_new52_1.jpg", "works_img_new52_2.jpg", "works_img_new52_3.jpg", "works_img_new52_4.jpg", "works_img_new52_5.jpg", "works_img_new52_6.jpg"],
  },
  {
    id: 16,
    title: "排水路拡張工事",
    content: "排水路拡張工事",
    location: "千葉県",
    diameter: "φ200mm",
    length: "50m",
    flow: "1.14㎥/分（常時排水／15日間）",
    folder: "16.排水路拡張工事",
    images: ["works_img_new53_1.jpg", "works_img_new53_2.jpg", "works_img_new53_3.jpg", "works_img_new53_4.jpg", "works_img_new53_5.jpg", "works_img_new53_6.jpg"],
  },
  {
    id: 17,
    title: "下水熱研究事業",
    content: "下水熱研究事業",
    location: "新潟県",
    diameter: "φ700mm",
    length: "100m",
    flow: "3.0㎥/分（常時排水／10日間）",
    folder: "17.下水熱研究事業",
    images: ["works_img_new54_1.jpg", "works_img_new54_2.jpg", "works_img_new54_3.jpg", "works_img_new54_4.jpg", "works_img_new54_5.jpg", "works_img_new54_6.jpg"],
  },
  {
    id: 18,
    title: "鉄道架道橋耐震補強工事",
    content: "鉄道架道橋耐震補強工事",
    location: "千葉県",
    diameter: "φ250mm",
    length: "40m",
    flow: "0.3㎥/分（常時排水／100日間）",
    folder: "18.鉄道架道橋耐震補強工事",
    images: ["works_img_new55_1.jpg", "works_img_new55_2.jpg", "works_img_new55_3.jpg", "works_img_new55_4.jpg", "works_img_new55_5.jpg", "works_img_new55_6.jpg"],
  },
  {
    id: 19,
    title: "伏せ越し下流側",
    content: "管更生工事／マンホール更生工事",
    location: "新潟県",
    diameter: "φ600mm ※伏せ越し室（下流側）から吸水",
    length: "80m",
    flow: "1.7㎥/分（作業時排水／4日間）",
    folder: "19.伏せ越し下流側",
    images: ["works_img_new56_1.jpg", "works_img_new56_2.jpg", "works_img_new56_3.jpg", "works_img_new56_4.jpg", "works_img_new56_5.jpg", "works_img_new56_6.jpg"],
  },
];

// Pump specifications
export const pumpSpecs = [
  {
    model: "2インチポンプ",
    diameter: "50",
    output: "0.6",
    power: "2.2",
    voltage: "3相,200V",
    weight: "75",
    dimensions: "400×840×650",
    modelPath: "/models/industrial-pump.glb",
  },
  {
    model: "4インチポンプ",
    diameter: "100",
    output: "1.6",
    power: "7.5",
    voltage: "3相,200V",
    weight: "130",
    dimensions: "620×1150×580",
    modelPath: "/models/pump-orange.glb",
  },
  {
    model: "6インチポンプ",
    diameter: "150",
    output: "4.0",
    power: "22.0",
    voltage: "3相,200V",
    weight: "560",
    dimensions: "1045×1735×1470",
    modelPath: "/models/pump-unit.glb",
  },
];

// Water flow plug specifications (通水プラグ)
export const waterFlowPlugSpecs = [
  { model: "RZ-100", diameter: "100/125", outerDiam: "90", length: "160", head: "6.0", weight: "2.3", bypass: "40" },
  { model: "RZ-150", diameter: "150", outerDiam: "140", length: "210", head: "5.5", weight: "5.1", bypass: "50" },
  { model: "RZ-200", diameter: "200/250", outerDiam: "186", length: "260", head: "5.0", weight: "9.5", bypass: "50/100" },
  { model: "RZA-300", diameter: "300/350", outerDiam: "286", length: "580", head: "3.5", weight: "10.5", bypass: "100" },
  { model: "RZA-400", diameter: "400/450", outerDiam: "386", length: "658", head: "3.0", weight: "25.7", bypass: "100×2" },
  { model: "RZA-500", diameter: "500/600", outerDiam: "486", length: "708", head: "2.5", weight: "35.2", bypass: "100×2" },
  { model: "SRZA-300", diameter: "300/350", outerDiam: "270", length: "650", head: "14.0", weight: "24.5", bypass: "150" },
  { model: "SRZA-400", diameter: "400/450", outerDiam: "370", length: "650", head: "13.0", weight: "34.5", bypass: "150" },
  { model: "SRZA-500", diameter: "500/600", outerDiam: "460", length: "795", head: "12.0", weight: "56.0", bypass: "150×2" },
  { model: "RZLP-7891", diameter: "700〜1000", outerDiam: "470", length: "1175", head: "6.0", weight: "48.0", bypass: "150" },
];

// Stopper specifications
export const stopperSpecs = [
  { model: "RZS-900", diameter: "900", outerDiam: "400", length: "870", head: "100", weight: "18.5", bypass: "150" },
  { model: "RZS-1000", diameter: "1000", outerDiam: "450", length: "970", head: "100", weight: "20.5", bypass: "150" },
  { model: "RZS-1100", diameter: "1100", outerDiam: "500", length: "1070", head: "100", weight: "23.0", bypass: "150" },
  { model: "RZS-1200", diameter: "1200", outerDiam: "500", length: "1170", head: "100", weight: "25.5", bypass: "150" },
  { model: "RZS-1350", diameter: "1350", outerDiam: "500", length: "1300", head: "100", weight: "28.0", bypass: "150" },
  { model: "RZS-1500", diameter: "1500", outerDiam: "500", length: "1420", head: "100", weight: "31.0", bypass: "150×2" },
  { model: "RZS-1650", diameter: "1650", outerDiam: "500", length: "1530", head: "100", weight: "33.5", bypass: "150×2" },
  { model: "RZS-1800", diameter: "1800", outerDiam: "500", length: "1630", head: "100", weight: "37.5", bypass: "150×2" },
  { model: "RZS-2000", diameter: "2000", outerDiam: "500", length: "1730", head: "100", weight: "39.5", bypass: "150×2" },
  { model: "RZS-2200", diameter: "2200", outerDiam: "500", length: "1840", head: "100", weight: "42.5", bypass: "150×2" },
];

// Association business activities
export const businessActivities = [
  "工法の普及、宣伝活動。",
  "工法の技術の改善、向上に関する調査研究及び技術資料の作成。",
  "設計、積算及び施工に関する調査及び資料の作成。",
  "工法に関する技術指導、研修会及び講習会の開催。",
  "会員相互の親睦を図る。",
  "前各号のほか、本会の目的を達成するための必要な事業。",
];

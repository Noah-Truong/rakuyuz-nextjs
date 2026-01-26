# RAKUYU-Z Method Association Website Renewal
## Information Architecture Document

### Project Overview

- **Type:** Website Renewal
- **Current URL:** http://rakuyuz.jp/
- **Purpose:** Modernize the existing website while maintaining the proven structure, enhance visual appeal with 3D animations, and improve user experience

---

## Current vs. New Structure Comparison

| Current Page | Status | Enhancements |
|--------------|--------|--------------|
| ホーム (/) | Keep | Hero redesign, 3D pump preview, modern layout |
| 工法について (/construction.html) | Keep | Better diagrams, animated illustrations |
| 6つの特徴 (/specification.html) | Keep | Interactive before/after comparisons |
| 施工手順 (/process.html) | Keep | Step-by-step animation, video integration |
| 施工実績 (/works.html) | Keep | Filter function, map view, better gallery |
| 主要機材紹介 (/machine.html) | Keep | 3D Models for pumps and plugs |
| 協会について (/about.html) | Keep | Timeline design, member benefits highlight |
| お問い合わせ (/contact/) | Keep | Improved form UX, document request option |

---

## Sitemap (Following Existing Structure)

```
ホーム (/)
├── 工法について (/construction.html)
├── 6つの特徴 (/specification.html)
├── 施工手順 (/process.html)
├── 施工実績 (/works.html)
├── 主要機材紹介 (/machine.html)
├── 協会について (/about.html)
└── お問い合わせ (/contact/)
```

---

## Page-by-Page Renewal Plan

### 1. ホーム (Homepage)

#### Current Issues:
- Dated visual design
- Static slider images
- Limited engagement

#### Renewal Plan:

| Section | Current | New |
|---------|---------|-----|
| Hero | Static slider (slide1-6.png) | Full-width video or animated 3D visualization |
| Tagline | Text only | Large typography with animation |
| Introduction | Basic text | 3 icon cards with hover effects |
| Navigation | Text links | Visual cards with thumbnails |
| CTA | None prominent | Floating contact button, clear CTAs |

#### New Section Layout:

**HERO**
- 老朽化した水道管を更生「RAKUYU-Z工法」
- [Background: 3D animated pump visualization]
- [CTA: 工法について詳しく見る] [CTA: お問い合わせ]

**3 VALUE CARDS**
- コスト削減 (icon)
- 短期間 (icon)
- 高品質 (icon)

**WHAT IS RAKUYU-Z (工法について説明)**
- Brief explanation + diagram + [詳しく見る]

**EQUIPMENT PREVIEW (主要機材紹介)**
- 2インチ用ポンプ [3D preview]
- 4インチ用ポンプ [3D preview]
- 6インチ用ポンプ [3D preview]
- [すべての機材を見る]

**PROJECT HIGHLIGHTS (施工実績)**
- 3 featured cases with photos
- [すべての実績を見る]

**AWARD BANNER**
- 第4回ものづくり日本大賞受賞

**CTA SECTION**
- [資料をダウンロード] [お問い合わせ]

---

### 2. 工法について (/construction.html)

#### Current Content to Keep:
- Method explanation text
- Standard image (水道管の入れ替え)
- Main pipe bypass diagram (本管水道のバイパス管)
- Branch pipe bypass diagram (各戸給水管のバイパス管)
- Residential area example with photos
- PDF download link

#### Enhancements:

| Element | Current | New |
|---------|---------|-----|
| Hero | None | Page hero with title + brief intro |
| Diagrams | Static PNG | Animated SVG or scroll-triggered animation |
| Explanation | Text blocks | Icon + text cards, better typography |
| Photos | Basic gallery | Lightbox gallery with captions |
| PDF Download | Text link | Prominent download button with preview |

#### New Section Layout:

**PAGE HERO**
- "RAKUYU-Z工法とは"
- 老朽化水道管工法の概要

**OVERVIEW**
- Method explanation with key points highlighted

**HOW IT WORKS (仕組み)**
- 水道管の入れ替え (Animated)

**APPLICATION TYPES**
- 本管水道 (Diagram) - Description
- 各戸給水管 (Diagram) - Description

**CASE EXAMPLE: 住宅密集地での施工**
- Photos + detailed explanation

**DOWNLOAD**
- [資料をダウンロード (PDF)]

---

### 3. 6つの特徴 (/specification.html)

#### Current 6 Features:
1. 安価である - 既存の施工費の概ね半額で施工できる
2. 早い - 本管工事の期間で各戸工事まで一括施工が可能
3. 安全 - 高圧ポンプの使用により施工の信頼性向上
4. 簡単 - 人力で高圧水ポンプの搬入ができ高所でもOK
5. 確実 - 空気圧力試験により漏れ、ピンホールの発見が確実にできる
6. 本格的 - ...

#### Enhancements:

| Element | Current | New |
|---------|---------|-----|
| Layout | Vertical list | Grid or card layout |
| Before/After | Static images side by side | Interactive slider or animation |
| Icons | Triangle icons | Modern custom icons |
| Explanation | Text heavy | Visual-first with concise text |

#### New Section Layout:

**PAGE HERO**
- "RAKUYU-Z工法 6つの特徴"

**FEATURE GRID (6 cards)**
- 安価である (icon) - summary
- 早い (icon) - summary
- 安全 (icon) - summary
- 簡単 (icon) - summary
- 確実 (icon) - summary
- 本格的 (icon) - summary

**DETAILED SECTIONS (per feature)**

*安価である*
- [Before image] vs [After image]
- 既存工法では → 既存費用<br>
  工法費用が高い → RAKUYU-Z工法で半額
- (Interactive comparison slider)
- [Repeat for each feature...]

---

### 4. 施工手順 (/process.html)

#### Current Steps:
1. 事前調査
2. 仮設バイパス管設置
3. 既存管とバイパス管接続
4. 既存水道管洗浄
5. 本管水道管
6. 路線管
7. (7 missing in original)
8. 既存水道管切断
9. 既存管とバイパス管撤去
10. 仮設バイパス管撤去
11. 完了確認

#### Enhancements:

| Element | Current | New |
|---------|---------|-----|
| Flow diagram | Static image | Animated step-by-step timeline |
| Step images | Small thumbnails | Larger images with zoom |
| Navigation | Scroll only | Clickable step navigation |
| Video | None | Optional explainer video |

#### New Section Layout:

**PAGE HERO**
- "施工手順"
- 着工から完了までの流れ

**FLOW OVERVIEW (Animated Timeline)**
```
o-o-o-o-o-o-o-o-o-o-o
1 2 3 4 5 6 7 8 9 10 11
(Clickable nodes)
```

**STEP DETAILS**

*STEP 1: 事前調査*
- [Photo/Illustration]
- Description text

*STEP 2: 仮設バイパス管設置*
- 本管 [Image]
- 各戸側 [Image]

[Continue for all steps...]

**VIDEO (Optional)**
- 施工手順の動画解説

---

### 5. 施工実績 (/works.html)

#### Current Projects (19 cases):
- 病院関係 (3 cases)
- 大型水道管/幹線関係 (4 cases)
- 大日本土木等関係 (2 cases)
- 京都大学構内配水管工事
- 滋賀県守山市配水管工事
- チサンマンション江坂豊津工事
- 各所配水管ライニング工事
- 奈良県天理市工事
- 滋賀県草津市水道管
- 本管取替工事関係工事
- マンション共用部配水管工事
- 兵庫県猪名川町排水管改修工事
- 住宅リフォーム各種工事

#### Enhancements:

| Element | Current | New |
|---------|---------|-----|
| Layout | Vertical list | Grid with thumbnails |
| Filter | None | Filter by type, location, pipe diameter |
| Map | None | Japan map showing project locations |
| Gallery | 6 images per project | Lightbox with larger images |
| Data display | Table format | Clean card format |

#### Project Categories for Filter:

| Category | Projects |
|----------|----------|
| 病院 | 3 |
| 大型管 | 4 |
| マンション | 4 |

#### New Section Layout:

**PAGE HERO**
- "施工実績"
- 豊富な実績とご紹介

**FILTER BAR**
- [工事種別▼] [地域▼] [管径▼] [リセット]

**PROJECT MAP (Interactive)**
- Japan Map
  - Tokyo • Kyoto • Shizuoka
  - Miyagi • Niigata • Chiba

**PROJECT GRID**
- [Thumb] 病院関係 - 施工場所
- [Thumb] 大型管 - 工事期間
- [Thumb] 土木工事 - 管径等
- [もっと見る]

**PROJECT DETAIL (Expandable/Modal)**
- Project Title
  - 工事名: xxxxx
  - 発注者: xxxxx
  - 場所: xxxxx
  - 期間: xxxxx
  - 管径: xxxxx
- [Photo Gallery - 6 images]

---

### 6. 主要機材紹介 (/machine.html) *Major Enhancement

#### Current Equipment:

**Pumps:**

| Model | Diameter | Output | Power | Weight |
|-------|----------|--------|-------|--------|
| 2インチポンプ | 50mm | 0.6m/min | 2.2kw | 75kg |
| 4インチポンプ | 100mm | 1.6m/min | 7.5kw | 130kg |
| 6インチポンプ | 150mm | 4.0m/min | 22.0kw | 560kg |

**水道プラグ ラクユーズ (10 types):**
- RZ-100 to RZLP-7891

**ラクユーズ・ストッパー (10 types):**
- RZS-900 to RZS-2200

**その他機材:**
- 圧力試験器及び AT管 (圧力試験用)
- 高性能空気圧縮機
- コンプレッサー LT/ST
- ホース・ホースリール

#### Enhancements:

| Element | Current | New |
|---------|---------|-----|
| Pump images | Static photos | Interactive 3D Models |
| Plug images | Static photos | Interactive 3D Models |
| Specs | Table only | Visual specs + comparison tool |
| Selection | Manual scroll | Equipment selector wizard |

#### New Section Layout:

**PAGE HERO**
- "主要機材紹介"
- RAKUYU-Z工法で使用する機材

**ポンプ**

*3D MODEL VIEWER*
- [Interactive 3D Model of Pump]
- MODEL SELECTOR (by pipe diameter):
  - [2インチ] [4インチ] [6インチ]

*SPECIFICATIONS TABLE*
- Detailed specs for each pump

**ラクユーズプラグ**

*3D MODEL VIEWER*
- [Interactive 3D Model of Plug]
- MODEL SELECTOR (by pipe diameter):
  - [100-125mm] [150mm] [200-250mm] [300-350mm]...

*SPECIFICATIONS TABLE*
- (RZ-100 to RZLP-7891 specs)

**ラクユーズ・ストッパー**

*3D MODEL VIEWER*
- [Interactive 3D Model of Stopper]
- MODEL SELECTOR (by pipe diameter):
  - [900mm] [1000mm] [1100mm] [1200mm]...

*SPECIFICATIONS TABLE*
- (RZS-900 to RZS-2200 specs)

**その他の機材**
- 圧力試験器 [Photo]
- 空気圧縮機 [Photo]
- コンプレッサー [Photo]
- ホース・リール [Photo]

#### 3D Model Requirements:

| Equipment | 3D Model | Interaction |
|-----------|----------|-------------|
| 2インチポンプ | ✓ (created) | 360° rotate, zoom, internal view |
| 4インチポンプ | ✓ (created) | 360° rotate, zoom, internal view |
| 6インチポンプ | ✓ (created) | 360° rotate, zoom, internal view |
| プラグ (representative) | Optional | 360° rotate, zoom |
| ストッパー (representative) | Optional | 360° rotate, zoom |

---

### 7. 協会について (/about.html)

#### Current Content:
- Purpose statement
- Business activities (6 items)
- Organization chart

#### Enhancements:

| Element | Current | New |
|---------|---------|-----|
| Layout | Text heavy | Visual sections |
| History | None | Timeline with milestones |
| Award | Not highlighted | Featured award section |
| Organization | Static image | Interactive org chart or cleaner design |

#### New Section Layout:

**PAGE HERO**
- "協会について"
- RAKUYU-Z工法の普及を目指して

**PURPOSE**
- 本会はRAKUYU-Z工法の普及と品質の向上を図り、
  社会の発展に寄与することを目的としています。

**HISTORY TIMELINE**
```
-•---•---•---•---•-
1995  2012  2017  2020  2023
協会設立 工法確立 受賞認定 大学連携
```

**AWARD HIGHLIGHT**
- 第4回ものづくり日本大賞
  経済産業大臣賞（製品・技術開発部門）
  製品開発部門受賞 2020年

**BUSINESS ACTIVITIES**

1. 工法の普及、啓発活動
2. 品質の向上、向上に関する調査研究
3. 研修、技術習得に関する指導育成
4. 品質基準、認定制度および資格の付与
5. 会員相互の連携
6. その他目的達成事業

**ORGANIZATION**
- Organization chart (updated design)

**CONTACT INFO**
- 〒615-0881 京都府京都市右京区西京極北大入町66
- TEL: 075-323-1445 / FAX: 075-323-1442
- info@rakuyuz.jp

---

### 8. お問い合わせ (/contact/)

#### Current:
Basic contact form

#### Enhancements:

| Element | Current | New |
|---------|---------|-----|
| Form fields | Basic | Structured with inquiry type selection |
| Document request | Separate PDF link | Integrated checkbox option |
| Confirmation | Unknown | Clear success message |
| Response | Unknown | Auto-reply email |

#### New Form Fields:

| Field | Type | Required |
|-------|------|----------|
| お問い合わせ種類 | Select | ✓ |
| 会社名 | Text | ✓ |
| 部署名 | Text | |
| お名前 | Text | ✓ |
| 電話番号 | Tel | |
| メールアドレス | Email | ✓ |
| お問い合わせ内容 | Textarea | ✓ |
| 資料請求 | Checkbox | |

#### Inquiry Types:
- 工法について
- 施工について
- 見積のご依頼
- その他お問い合わせ
- その他

---

## Navigation Design

### Header (Global)
```
[LOGO] RAKUYU-Z工法協会

NAVIGATION
├── ホーム
├── 工法について
└── お問い合わせ
```

### Footer
```
[LOGO] RAKUYU-Z工法協会

CONTACT
TEL: 075-323-1445
FAX: 075-323-1442
info@rakuyuz.jp

[資料ダウンロード]
```

### Mobile Navigation
- Hamburger menu
- Sticky header with logo + menu icon
- Floating contact button (optional)

---

## Technical Specifications

### 3D Implementation

| Item | Specification |
|------|---------------|
| Library | Three.js or Google model-viewer |
| Model Format | glTF 2.0 (.glb) |
| Models Required | 3 pumps (2", 4", 6") - already created |
| Textures | Max 2048x2048, WebP |
| Polygon Count | <50k per model for mobile |
| Controls | OrbitControls (rotate, zoom, pan) |
| Fallback | Static image gallery for non-WebGL browsers |
| Loading | Progressive loading with skeleton UI |

### Responsive Breakpoints

| Device | Width | Notes |
|--------|-------|-------|
| Mobile | <768px | Single column, hamburger menu |
| Tablet | 768-1024px | 2-column grids |
| Desktop | >1024px | Full layout |

### Performance Goals

| Metric | Target |
|--------|--------|
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| 3D Model Load | <3s (async) |
| Page Size | <3MB (excluding 3D) |

---

## Content Migration Checklist

### Images to Migrate

| Page | Images | Action |
|------|--------|--------|
| Home | slide1-6.png | Replace with new hero |
| 工法について | 4 diagrams | Recreate as animated SVG |
| 6つの特徴 | ~20 comparison images | Optimize, add interaction |
| 施工手順 | ~10 flow images | Recreate as timeline |
| 施工実績 | ~100+ photos | Optimize, add lightbox |
| 主要機材紹介 | ~13 product photos | Keep + add 3D models |
| 協会について | Organization chart | Redesign |

### Text Content

| Page | Status |
|------|--------|
| Home | Rewrite hero copy |
| 工法について | Keep, improve formatting |
| 6つの特徴 | Keep, condense |
| 施工手順 | Keep, add video script |
| 施工実績 | Keep all 19 projects |
| 主要機材紹介 | Keep all specs |
| 協会について | Keep, add history |
| お問い合わせ | Update form |

### Downloads

| File | Action |
|------|--------|
| rakuyuz.pdf | Keep, add prominent download |

---

## Priority Phases

### Phase 1: Core Renewal
1. ✓ Information Architecture
2. ☐ Wireframes
3. ☐ Visual Design
4. ☐ Homepage development
5. ☐ 工法について page
6. ☐ 6つの特徴 page
7. ☐ 主要機材紹介 page (with 3D models)
8. ☐ お問い合わせ form

### Phase 2: Content Pages
1. ☐ 施工手順 page
2. ☐ 施工実績 page (with filter/map)
3. ☐ 協会について page

### Phase 3: Enhancements
1. ☐ Animation refinements
2. ☐ Performance optimization
3. ☐ SEO optimization
4. ☐ Analytics setup

---

## Summary: Key Improvements

| Area | Current | Renewed |
|------|---------|---------|
| Design | Dated, static | Modern, animated |
| 3D Models | None | 3 pump models (interactive) |
| Navigation | Basic | Sticky header, mobile-friendly |
| Project Filter | None | By type, location, diameter |
| Project Map | None | Interactive Japan map |
| Comparison | Static images | Interactive slider |
| Process Flow | Static diagram | Animated timeline |
| Forms | Basic | Structured with inquiry types |
| Performance | Unknown | Optimized, lazy loading |
| Mobile | Unknown | Fully responsive |
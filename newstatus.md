# RAKUYUZ Website Rebuild - Cursor Command File

## Project Overview
Rebuild the RAKUYUZ-Z工法協会 (Rakuyu-Z Construction Method Association) website using Next.js with integrated 3D models while preserving the exact corporate branding, content, and color scheme.

## Technology Stack
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Three.js / React Three Fiber (for 3D models)
- Tailwind CSS (for styling, following corporate colors)
- Framer Motion (for animations)

---

## Site Structure & Pages

### 1. HOME PAGE (/)

**Page Title (SEO):** ラクユーZ工法協会/不断水水替工法/不断水水替工法のラクユーZ工法協会

**Navigation Menu Items:**
- ホーム (Home) - /
- 工法について (About the Construction Method) - /construction
- 6つの特徴 (6 Features) - /specification
- 施工手順 (Construction Process) - /process
- 施工事例 (Case Studies) - /works
- 主な使用機器 (Main Equipment) - /machine
- 協会について (About the Association) - /about
- お問い合わせ (Contact) - /contact

**Header Contact:**
- Phone: 075-323-1445
- CTA: "お問い合わせ" (Contact Us)

#### Hero Section
**Main Heading:** 維持管理時代の水替え対策は

**Sub-heading:** RAKUYU-Z工法

**Tagline:** －不断水水替工法－

**Hero Slider Images:** (6 slides showcasing equipment and construction sites)
- images/slide1.png
- images/slide2.png
- images/slide3.png
- images/slide4.png
- images/slide5.png
- images/slide6.png

**3D Model Integration Point:**
- Replace image slider with interactive 3D model carousel
- Auto-rotating 3D equipment models
- Click to zoom and explore details

#### Main Content Section
**Section Heading:** RAKUYU-Z工法が実現する不断水水替工法

**Body Text:**
"RAKUYU－Z工法は、供用中の下水道関連工事において、周辺環境の衛生面や安全面、本工事の施工性と品質確保、そして自然災害時の応急から復旧までの対応などにおいて、工事に関係する全て方々のニーズに応える不断水水替工法です。"

**CTA Button:** "詳しくはこちら" (More Details) → Links to /construction

#### Three Feature Cards
1. **工法について** (About the Method)
   - Image: images/top_3menu_2.png (desktop)
   - Image: images/top_3menu_2_sm.png (mobile)
   - Link: /construction

2. **6つの特徴** (6 Features)
   - Image: images/top_3menu_1.png (desktop)
   - Image: images/top_3menu_1_sm.png (mobile)
   - Link: /specification

3. **主な使用機器** (Main Equipment)
   - Image: images/top_3menu_3.png (desktop)
   - Image: images/top_3menu_3_sm.png (mobile)
   - Link: /machine

**3D Model Integration Point:**
- Replace static cards with 3D interactive cards
- Hover effects with 3D depth
- Click to reveal animated transitions to respective pages

---

### 2. CONSTRUCTION METHOD PAGE (/construction)

**Page Title (SEO):** 工法について/ラクユーZ工法協会/不断水水替工法

**Main Page Heading:** RAKUYU-Z工法

**Download Resources:**
- Video: "動画で詳しく" (Watch Video)
- PDF Download: "資料をダウンロード" → /rakuyuz.pdf

#### Section 1: 水替工の標準イメージ (Standard Image of Water Replacement Work)

**Main Description:**
"RAKUYU－Z工法は、下水や雨水等の供用下施工において、水替えを行わなければ施工困難な本体工事を補完する『不断水水替工法』であります。

RAKUYU－Z工法で水替えを行うことにより、地域生活者の排水制限を実施することなく、施工箇所が一定期間完全ドライ（又は施工可能な水位）の環境となり、現場の安全衛生が保たれ、本体工事の作業効率を高めるとともに、施工品質の確保が容易となります。"

**Images:**
- Standard Image: images/standard_img.png

**Diagrams:**
1. **本管水替のイメージ図** (Main Pipe Water Replacement Diagram)
   - Image: images/construction_img_new1.png

2. **取付管水替のイメージ図** (Connection Pipe Water Replacement Diagram)
   - Image: images/construction_img_new2.png

**3D Model Integration Point:**
- Replace static diagrams with interactive 3D cross-section models
- Animated flow of water through pipes
- Toggle between main pipe and connection pipe views
- Clickable hotspots for technical details

#### Section 2: Real Construction Example

**Description:**
"下の実例写真は、住宅密集地（DID地区）において、本管と取付管（２箇所）を常時排水し、夜間は交通規制を解除する条件です。そのため、道路交通や車庫の出入りの障害となる各所で仮配管を埋設（側溝内布設）しています。また、夜間の騒音を防ぐために「商用電源」を動力としてポンプを稼働させています。"

**Photo:** 
- Caption: "仮配管を地下とU字溝に埋設"
- Image: images/pump_img.png

**3D Model Integration Point:**
- 3D site reconstruction showing underground pipe layout
- Day/night toggle showing traffic regulation changes
- Cross-section view of buried temporary pipes

#### Section 3: その他の施工イメージ (Other Construction Images)

**Image:** images/standard_img2.png

**3D Model Integration Point:**
- Additional 3D construction scenario models
- Multiple angle views
- Step-by-step animation

---

### 3. SIX FEATURES PAGE (/specification)

**Page Title (SEO):** ラクユーZ工法の6つの特徴/ラクユーZ工法協会/不断水水替工法

**Main Page Heading:** 6つの特徴 (6 Features)

**Six Feature Categories:**
1. 耐久性 (Durability)
2. 機動性 (Mobility)
3. 安全性 (Safety)
4. 施工性 (Constructability)
5. 省力性 (Labor-saving)
6. 環境性 (Environmental Friendliness)

#### Feature Comparisons (Before → After)

**Feature 1: 目詰まり対応で工事が中断するのを解決！**
(Solving Work Interruptions Due to Clogging)

**BEFORE:**
- Title: "目詰まり対応で工事が中断する！"
- Image: images/solution1_left.png
- Icon: images/triangle_taikyu.png (problem indicator)

**AFTER:**
- Title: "目詰まりなく、スムーズな流れ"
- Image: images/solution1_right.png
- Icon: images/triangle2_taikyu.png (solution indicator)

**3D Model Integration:** Interactive 3D pipe model showing clogged vs. smooth flow

---

**Feature 2: 吸引車を多数配置、ピストン輸送から脱却！**
(Breaking Free from Multiple Suction Trucks and Piston Transport)

**BEFORE:**
- Title: "吸引車を多数配置し、何度もピストン輸送"
- Image: images/solution2_left.png
- Icon: images/triangle.png

**AFTER:**
- Title: "無駄な工数を削減！"
- Image: images/solution2_right.png
- Icon: images/triangle2.png

**3D Model Integration:** Animated comparison of truck logistics vs. efficient system

---

**Feature 3: 人孔内に潜水ポンプの設置ができない場所でもOK!**
(OK Even in Places Where Submersible Pumps Cannot Be Installed in Manholes)

**BEFORE:**
- Title: "人孔内に潜水ポンプの設置ができない。"
- Image: images/solution_s_left1.png
- Title: "重機など大掛かりに"
- Image: images/solution_s_left2.png
- Icon: images/triangle.png

**AFTER:**
- Title: "特殊ポンプは、吸込ホースを投入するだけ！"
- Image: images/solution_s_right1.png
- Title: "重機不要。２台目設置も容易！"
- Image: images/solution_s_right2.png
- Icon: images/triangle2.png

**3D Model Integration:** 3D manhole model showing easy pump installation

---

**Feature 4: 水替えのために周辺交通への影響も少なく!**
(Minimal Impact on Surrounding Traffic Due to Water Replacement)

**BEFORE:**
- Title: "水替えのために周辺交通への影響"
- Image: images/solution4_left.png
- Icon: images/triangle_kankyou.png

**AFTER:**
- Title: "交通規制も最小限に！"
- Image: images/solution4_right.png
- Icon: images/triangle2_kankyou.png

**3D Model Integration:** 3D traffic simulation showing reduced impact

---

**Feature 5: ポンプの自動制御と巡回監視で、省力化を図りつつ事故発生時も迅速に対応可**
(Automatic Pump Control and Patrol Monitoring for Labor Savings and Rapid Response to Accidents)

**BEFORE:**
- Title: "監視体制のないまま溢水事故が発生"
- Image: images/solution6_left.png
- Icon: images/triangle_anzen.png

**AFTER:**
- Title: "素早い対応が可能に！"
- Image: images/solution6_right.png
- Icon: images/triangle2_anzen.png

**3D Model Integration:** 3D monitoring system visualization with alerts

---

**Feature 6: 大容量の水替でも設置撤去がスムーズ**
(Smooth Installation and Removal Even for Large-Capacity Water Replacement)

**BEFORE:**
- Image: images/solution7_left.png
- Icon: images/triangle_kidou.png

**AFTER:**
- Image: images/solution7_right.png
- Icon: images/triangle2_kidou.png

**3D Model Integration:** Time-lapse 3D animation of installation process

---

**Additional Features:**

**Feature 7: マンホールポンプ場改修も省スペースで水替**
(Space-Saving Water Replacement Even for Manhole Pump Station Renovation)

**Images:**
- BEFORE: images/solution8_left.png
- AFTER: images/solution8_right.png
- Icons: images/triangle.png, images/triangle2.png

---

**Feature 8: 水替スパンの移動がスムーズ**
(Smooth Movement of Water Replacement Span)

**Icon:** images/triangle2_kidou.png

**Sequential Images:**
- images/solution9_1.png
- images/solution9_2.png
- images/solution9_3.png

**3D Model Integration:** Animated 3D sequence showing span movement process

---

### 4. CONSTRUCTION PROCESS PAGE (/process)

**Page Title (SEO):** 施工手順/ラクユーZ工法協会/不断水水替工法

**Main Page Heading:** 施工手順 (Construction Procedure)

#### Main Section: 本工法の標準施工フロー (Standard Construction Flow of This Method)

**Note:** （なお、点線で記した工種は必要な場合に別途考慮します。）

**Main Flow Diagram:** images/flow_main_img.png

**3D Model Integration Point:**
- Replace flowchart with interactive 3D timeline
- Click each step to see detailed 3D visualization
- Animated progression through entire process

---

#### Detailed Step-by-Step Procedures:

**Step 1: 準備工 (Preparation Work)**

**Description:**
"施工直前に、当該現場の各人孔内・宅マス内を最終チェックし、作業開始に問題ないことを確認します。また、施工区間内のその他の状況を確認します。"

---

**Step 2: 特殊ポンプ設置工 (Special Pump Installation Work)**

**Description:**
"吸水するマンホールおよび宅マスに近接した箇所に特殊ポンプを設置します。"

**Images:**
- 特殊ポンプ設置工（本管）: images/flow_img1_1.png
- 特殊ポンプ設置工（取付管）: images/flow_img1_2.png

**3D Model Integration:** Interactive 3D pump placement simulation

---

**Step 3: 迂回配管設置工 (Bypass Piping Installation Work)**

**Description:**
"事前調査工により決定した配管ルート（排水側）に、最適な仮管を配管します。"

**Images:**
- 迂回配管設置工のイメージ図（本管）: images/flow_img3_1.png
- 迂回配管設置工のイメージ図（取付管）: images/flow_img3_2.png

**3D Model Integration:** 3D route planning and pipe layout visualization

---

**Step 4: 通水器設置工 (Water Flow Device Installation Work)**

**Description:**
"本管および取付管の止水箇所に、通水器（ラクユーＺ）を設置します。"

**Images:**
- 通水器設置工のイメージ図（本管）: images/flow_img4_1.png
- 通水器設置工のイメージ図（取付管）: images/flow_img4_2.png

**3D Model Integration:** Detailed 3D model of Rakuyu-Z device installation

---

**Step 5: 排水管理工 (Drainage Management Work)**

**Description:**
"水替期間内に行う本管および取付管の仮配管の管理作業を指します。"

---

**Step 6: 運転管理工 (Operation Management Work)**

**Description:**
"水替期間内において、水替システム全体が問題なく稼働しているかを点検するため定期的に巡回監視する作業を指します。"

**3D Model Integration:** 3D monitoring dashboard with live system status

---

**Step 8: 通水器撤去工 (Water Flow Device Removal Work)**

**Description:**
"本体工事が終了後、はじめに通水器の撤去作業を行い、供用を再開させます。"

**Image:**
- 通水器撤去工のイメージ図（本管）: images/flow_img8_1.png

---

**Step 9: 迂回配管撤去工 (Bypass Piping Removal Work)**

**Description:**
"現場周辺への漏水に注意しながら、仮配管の撤去作業を行います。"

**Image:**
- 迂回配管撤去工のイメージ図（本管）: images/flow_img9_1.png

---

**Step 10: 特殊ポンプ撤去工 (Special Pump Removal Work)**

**Description:**
"マンホールおよび宅マス付近に設置した特殊ポンプを撤去します。"

**Image:**
- 特殊ポンプ撤去工のイメージ図（本管）: images/flow_img10_1.png

---

**Step 11: 片付け (Cleanup)**

**Description:**
"作業範囲の清掃、工具類等の置き忘れがないようチェックする。とりわけ、人孔内に残置したものがないか確認します。"

**Image:** images/flow_img11_1.png

**Final Note:**
"人孔改造や管の埋設をした場合は、復旧作業を行います。"

---

### 5. CASE STUDIES PAGE (/works)

**Page Title (SEO):** 施工実例/ラクユーZ工法協会/不断水水替工法

**Main Page Heading:** 施工事例 (Case Studies)

#### Case Study 1: 布設替工事（1スパン水替）その1

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 管渠移転工事 |
| 場所 | 静岡県 |
| 水替条件 - 管径 | φ200mm |
| 水替条件 - 延長 | 10m ※一つ上流の人孔が交差点内 |
| 水替条件 - 流量 | 1.0㎥/分（作業時排水／1日間） |

**Project Photos:** (6 images)
- images/works_img_new11_1.jpg
- images/works_img_new11_2.jpg
- images/works_img_new11_3.jpg
- images/works_img_new11_4.jpg
- images/works_img_new11_5.jpg
- images/works_img_new11_6.jpg

---

#### Case Study 2: 布設替工事（1スパン水替）その2

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 管渠移転工事 |
| 場所 | 静岡県 |
| 水替条件 - 管径 | φ200mm, φ600mm（2方向から流入） |
| 水替条件 - 延長 | 350m ※一つ上流の人孔が県道を挟む |
| 水替条件 - 流量 | 3.0㎥/分（常時排水／41日間） |

**Project Photos:** (6 images)
- images/works_img_new12_1.jpg through images/works_img_new12_6.jpg

---

#### Case Study 3: 布設替工事（1スパン水替）その3

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 管渠移転工事 |
| 場所 | 石川県 |
| 水替条件 - 管径 | φ500mm |
| 水替条件 - 延長 | 50m ※一つ上流の人孔が鉄道を挟む |
| 水替条件 - 流量 | 4.4㎥/分（常時排水／5日間） |

**Project Photos:** (6 images)
- images/works_img_new13_1.jpg through images/works_img_new13_6.jpg

---

#### Case Study 4: 大口径水替（更生工事）その1

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 管更生工事 |
| 場所 | 京都府 |
| 水替条件 - 管径 | φ800, φ1200mm |
| 水替条件 - 延長 | 207ｍ |
| 水替条件 - 流量 | 11.0㎥/分（作業時排水） |

**Project Photos:** (6 images)
- images/works_img_new21_1.jpg through images/works_img_new21_6.jpg

---

#### Case Study 5: 大口径水替（更生工事）その2

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 管更生工事 |
| 場所 | 東京都 |
| 水替条件 - 管径 | φ1400mm, φ2000mm |
| 水替条件 - 延長 | 140ｍ（4スパン計） |
| 水替条件 - 流量 | 7.5㎥/分（作業時排水） |

**Project Photos:** (6 images)
- images/works_img_new22_1.jpg through images/works_img_new22_6.jpg

---

#### Case Study 6: 大口径水替（更生工事）その3

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 管更生工事 |
| 場所 | 静岡県 |
| 水替条件 - 管径 | φ1500mm |
| 水替条件 - 延長 | 100ｍ |
| 水替条件 - 流量 | 10.0㎥/分（作業時排水／60日間） |

**Project Photos:** (6 images)
- images/works_img_new_23_1.jpg through images/works_img_new_23_6.jpg

---

#### Case Study 7: 大口径水替（人孔管口耐震化工事）その4

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 人孔管口耐震化工事 |
| 場所 | 東京都 |
| 水替条件 - 管径 | □ 2500mm x 1800mm |
| 水替条件 - 延長 | 15m |
| 水替条件 - 流量 | 5.0㎥/分（作業時排水／2日間） |

**Project Photos:** (6 images)
- images/works_img_new_24_1.jpg through images/works_img_new_24_6.jpg

---

#### Case Study 8: 東日本大震災復旧工事 その1

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 災害復旧工事（布設替工事） |
| 場所 | 宮城県内各地 |
| 水替条件 - 管径 | φ200mm, 250mm, 300mm |
| 水替条件 - 延長 | 999m、624m, 660m |
| 水替条件 - 日数 | 240日, 300日, 240日 |

**Project Photos:** (6 images)
- images/works_img_new_25_1.jpg through images/works_img_new_25_6.jpg

---

#### Case Study 9: 東日本大震災復旧工事 その2

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 災害復旧工事（改築推進工事） |
| 場所 | 宮城県 |
| 水替条件 - 管径 | φ200mm |
| 水替条件 - 延長 | 190m（1スパン） |
| 水替条件 - 流量 | 1.2㎥/分（常時排水／94日間） |

**Project Photos:** (6 images)
- images/works_img_new_26_1.jpg through images/works_img_new_26_6.jpg

---

#### Case Study 10: 熊本地震復旧工事

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 災害復旧工事（推進工事／インバート切替工事） |
| 場所 | 熊本県 |
| 水替条件 - 管径 | φ400mm |
| 水替条件 - 延長 | 46.0m |
| 水替条件 - 流量 | 1.2㎥/分（常時排水／94日間） |

**Project Photos:** (6 images)
- images/works_img_new_27_1.jpg through images/works_img_new_27_6.jpg

---

#### Case Study 11: 鳥取中部地震復旧工事

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 災害復旧工事（布設替工事） |
| 場所 | 鳥取県 |
| 水替条件 - 管径 | φ150mm, 200mm, 250mm |
| 水替条件 - 延長 | 97m / 216m / 320m |
| 水替条件 - 日数 | 20日間 / 17日間 / 40日間 |

**Project Photos:** (6 images)
- images/works_img_new_34_1.jpg through images/works_img_new_34_6.jpg

---

#### Case Study 12: マンホールポンプ場防食工事

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | マンホールポンプ場防食工事 |
| 場所 | 山形県 |
| 水替条件 - 流入管 | 3方向からポンプ場へ流入 |
| 水替条件 - 延長 | 190m（既設圧送管へ接続） |
| 水替条件 - 流量 | 1.2㎥/分（常時排水／39日間） |

**Project Photos:** (6 images)
- images/works_img_new41_1.jpg through images/works_img_new41_6.jpg

---

#### Case Study 13: 中継ポンプ場改修工事

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 中継ポンプ場改修工事 |
| 場所 | 福井県 |
| 水替条件 - 流入管 | 3方向からポンプ場へ流入 |
| 水替条件 - 延長 | 2700m（既設圧送管へ接続） |
| 水替条件 - 流量 | 3.08㎥/分（全揚程30m、常時排水／14日間） |

**Project Photos:** (6 images)
- images/works_img_new42_1.jpg through images/works_img_new42_6.jpg

---

#### Case Study 14: 改築推進工事

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 改築推進工事 |
| 場所 | 千葉県 |
| 水替条件 - 管径 | φ400mm /φ250mm（サービス管） |
| 水替条件 - 延長 | 60ｍ |
| 水替条件 - 流量 | 2.0㎥/分（常時排水／74日間）） |

**Project Photos:** (6 images)
- images/works_img_new51_1.jpg through images/works_img_new51_6.jpg

---

#### Case Study 15: 長距離水替

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 布設替工事 |
| 場所 | 千葉県 |
| 水替条件 - 管径 | φ600mm |
| 水替条件 - 延長 | 300ｍ（1スパン） |
| 水替条件 - 流量 | 3.0㎥/分（常時排水／80日間） |

**Project Photos:** (6 images)
- images/works_img_new52_1.jpg through images/works_img_new52_6.jpg

---

#### Case Study 16: 排水路拡張工事

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 排水路拡張工事 |
| 場所 | 千葉県 |
| 水替条件 - 管径 | φ200mm |
| 水替条件 - 延長 | 50m |
| 水替条件 - 流量 | 1.14㎥/分（常時排水／15日間） |

**Project Photos:** (6 images)
- images/works_img_new53_1.jpg through images/works_img_new53_6.jpg

---

#### Case Study 17: 下水熱研究事業

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 下水熱研究事業 |
| 場所 | 新潟県 |
| 水替条件 - 管径 | φ700mm |
| 水替条件 - 延長 | 100m |
| 水替条件 - 流量 | 3.0㎥/分（常時排水／10日間） |

**Project Photos:** (6 images)
- images/works_img_new54_1.jpg through images/works_img_new54_6.jpg

---

#### Case Study 18: 鉄道架道橋耐震補強工事

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 下水熱研究事業 |
| 場所 | 千葉県 |
| 水替条件 - 管径 | φ250mm |
| 水替条件 - 延長 | 40m |
| 水替条件 - 流量 | 0.3㎥/分（常時排水／100日間）） |

**Project Photos:** (6 images)
- images/works_img_new55_1.jpg through images/works_img_new55_6.jpg

---

#### Case Study 19: 伏せ越し下流側

**Project Details Table:**
| Field | Value |
|-------|-------|
| 本工事内容 | 管更生工事／マンホール更生工事 |
| 場所 | 新潟県 |
| 水替条件 - 管径 | φ600mm ※伏せ越し室（下流側）から吸水 |
| 水替条件 - 延長 | 80m |
| 水替条件 - 流量 | 1.7㎥/分（作業時排水／4日間） |

**Project Photos:** (6 images)
- images/works_img_new56_1.jpg through images/works_img_new56_6.jpg

**3D Model Integration for All Case Studies:**
- Interactive 3D map of Japan showing all project locations
- Click each location to see project details
- Before/after 3D site reconstructions
- Virtual site tours
- Filterable by project type, location, or scale

---

### 6. EQUIPMENT PAGE (/machine)

**Page Title (SEO):** 主な使用機器/ラクユーZ工法協会/不断水水替工法

**Main Page Heading:** 主な使用機器 (Main Equipment Used)

#### Equipment Category 1: 特殊ポンプ (Special Pumps)

**Pump 1: 2インチ特殊ポンプ (2-Inch Special Pump)**
- Image: images/works/machine_img1.png

**Pump 2: 4インチ特殊ポンプ (4-Inch Special Pump)**
- Image: images/works/machine_img2.png

**Pump 3: 6インチ特殊ポンプ (6-Inch Special Pump)**
- Image: images/works/machine_img3.png

**Note:** 以下の表は横スクロールでご覧ください。(Please view the table below with horizontal scrolling)

**Specifications Table:**
| 機種 (Model) | 口径 (mm) | 吐出量(参考) (㎥/min) | 使用電力 (kw) | 電源 (自家 or 商用) | 重量 (Kg) | 寸法(㎜) 幅×長さ×高さ |
|------------|----------|---------------------|--------------|-------------------|----------|-------------------|
| 2インチポンプ | 50 | 0.6 | 2.2 | 3相,200V | 75 | 400×840×650 |
| 4インチポンプ | 100 | 1.6 | 7.5 | 3相,200V | 130 | 620×1150×580 |
| 6インチポンプ | 150 | 4.0 | 22.0 | 3相,200V | 560 | 1045×1735×1470 |

**3D Model Integration:**
- Interactive 3D models of each pump
- 360° rotation
- Exploded view showing internal components
- Animated demonstration of operation
- Technical hotspots for specifications

---

#### Equipment Category 2: 通水ポンプ（ラクユーZ） (Water Flow Pump - Rakuyu-Z)

**Standard Models:**
- Image: images/works/machine_img4.png

**Super Rakuyu-Z Models:**
- Image: images/works/machine_img9.png
- Image: images/works/machine_img10.png

**Note:** 以下の表は横スクロールでご覧ください。

**通水プラグ 仕様一覧 (Water Flow Plug Specifications)**

| 機種 | 適用管径 (mm) | 外径 (mm) | 長さ (mm) | 水頭 (m) | 重量 (Kg) | バイパス径 (mm) |
|------|-------------|----------|----------|---------|----------|---------------|
| RZ-100 | 100/125 | 90 | 160 | 6.0 | 2.3 | 40 |
| RZ-150 | 150 | 140 | 210 | 5.5 | 5.1 | 50 |
| RZ-200 | 200/250 | 186 | 260 | 5.0 | 9.5 | 50/100 |
| RZA-300 | 300/350 | 286 | 580 | 3.5 | 10.5 | 100 |
| RZA-400 | 400/450 | 386 | 658 | 3.0 | 25.7 | 100×2 |
| RZA-500 | 500/600 | 486 | 708 | 2.5 | 35.2 | 100×2 |
| SRZA-300 | 300/350 | 270 | 650 | 14.0 | 24.5 | 150 |
| SRZA-400 | 400/450 | 370 | 650 | 13.0 | 34.5 | 150 |
| SRZA-500 | 500/600 | 460 | 795 | 12.0 | 56.0 | 150×2 |
| RZLP-7891 | 700〜1000 | 470 | 1175 | 6.0 | 48.0 | 150 |

**Installation Images:**
- Image: images/works/machine_img5.png
- Image: images/works/machine_img6.png

**3D Model Integration:**
- Detailed 3D cross-section models of each Rakuyu-Z device
- Cutaway views showing water flow
- Size comparison tool
- Installation simulation

---

#### Equipment Category 3: ラクユーZ・ストッパー (Rakuyu-Z Stopper)

**Note:** 以下の表は横スクロールでご覧ください。

**ラクユーZ・ストッパー 仕様一覧 (Rakuyu-Z Stopper Specifications)**

| 機種 | 適用管径 (mm) | 外径 (mm) | 長さ (mm) | 水頭 (m) | 重量 (Kg) | バイパス径 (mm) |
|------|-------------|----------|----------|---------|----------|---------------|
| RZS-900 | 900 | 400 | 870 | 100 | 18.5 | 150 |
| RZS-1000 | 1000 | 450 | 970 | 100 | 20.5 | 150 |
| RZS-1100 | 1100 | 500 | 1070 | 100 | 23.0 | 150 |
| RZS-1200 | 1200 | 500 | 1170 | 100 | 25.5 | 150 |
| RZS-1350 | 1350 | 500 | 1300 | 100 | 28.0 | 150 |
| RZS-1500 | 1500 | 500 | 1420 | 100 | 31.0 | 150×2 |
| RZS-1650 | 1650 | 500 | 1530 | 100 | 33.5 | 150×2 |
| RZS-1800 | 1800 | 500 | 1630 | 100 | 37.5 | 150×2 |
| RZS-2000 | 2000 | 500 | 1730 | 100 | 39.5 | 150×2 |
| RZS-2200 | 2200 | 500 | 1840 | 100 | 42.5 | 150×2 |

---

#### Equipment Category 4: 自動制御システム（制御盤） (Automatic Control System - Control Panel)

**Image:** images/works/machine_img7.png

**3D Model Integration:**
- Interactive 3D control panel
- Clickable buttons showing system responses
- Real-time data visualization

---

#### Equipment Category 5: 仮排水管 (Temporary Drainage Pipe)

**Image:** images/works/machine_img8.png

**3D Model Integration:**
- 3D pipe assembly visualization
- Connection demonstration

---

#### Equipment Category 6: その他 (Others)

**Compressor LT:**
- Name: コンプレッサーLT
- Image: images/works/comp1.png

**Compressor ST:**
- Name: コンプレッサーST
- Image: images/works/comp2.png

**Dust Cap:**
- Name: ダストキャップ
- Image: images/works/comp3.png

**3D Model Integration for All Equipment:**
- Complete 3D equipment library
- Search and filter by specifications
- Compare multiple models side-by-side
- AR preview option for mobile devices
- Download 3D models for CAD integration

---

### 7. ABOUT PAGE (/about)

**Page Title (SEO):** ラクユーZ工法協会について/ラクユーZ工法協会/不断水水替工法

**Page Heading:** 協会概要
**Page Title:** 協会概要 (Association Overview)

#### Section 1: 目的 (Purpose)
**Heading:** 目的

**Main Statement (Bold):**
"本会はRAKUYU－Z工法の普及と技術の向上を図り、会員の情報交換と親睦を図ることを目的としています。"

**Body Text:**
"我々RAKUYU－Z工法協会は、下水供用下における様々な工事が円滑かつ安全に進行することをサポートするRAKUYU－Z工法（不断水水替工法）の普及と工法技術のより一層の向上を求め、それらを円滑に行うべく会員相互の情報交換と親睦を図ることを目的とします。"

**3D Model Integration Point:** 
- Display rotating 3D model of sewage system infrastructure
- Show cross-section view of RAKUYU-Z method in action

---

#### Section 2: 事業 (Business Activities)
**Heading:** 事業

**Bullet Points:**
- 工法の普及、宣伝活動。
- 工法の技術の改善、向上に関する調査研究及び技術資料の作成。
- 設計、積算及び施工に関する調査及び資料の作成。
- 工法に関する技術指導、研修会及び講習会の開催。
- 会員相互の親睦を図る。
- 前各号のほか、本会の目的を達成するための必要な事業。

**Body Text:**
"下水供用下における施設の維持・管理には、本工事と必ずセットとしての水替が必要となる工事が多々あります。そして、その必要な水替も施工条件によって手法は様々あり、経済的で合理性に富んだ工法が要求されます。様々な要求を満たしたRAKUYU－Z工法の事業を展開しております。"

**3D Model Integration Point:**
- Interactive 3D timeline showing business activities
- Clickable 3D icons for each business activity

---

#### Section 3: 所在地 (Location)
**Heading:** 所在地

**Table Data:**
| Field | Value |
|-------|-------|
| 所在地 | 〒615-0881 京都市右京区西京極北大入町66 |
| TEL | 075-323-1445 |
| FAX | 075-323-1442 |
| 最寄り駅 | 最寄駅：西京極駅（阪急京都線） |

**3D Model Integration Point:**
- 3D map of Kyoto with pin showing office location
- 3D building model of the office exterior

---

#### Section 4: 組織図 (Organization Chart)
**Heading:** 組織図

**Original Image:** images/organaize_img.png

**3D Model Integration Point:**
- Replace static org chart with interactive 3D hierarchical structure
- Nodes should be clickable for more information
- Animated connections between organizational units

---

### 3. FOOTER (All Pages)
**Logo:** /images/logo_01_sm.png

**Company Information:**
- 〒615-0881 京都市右京区西京極北大入町66
- Tel：075-323-1445
- FAX: 075-323-1442

**Navigation Links (Footer):**
- ホーム (/)
- 工法について (/construction)
- 6つの特徴 (/specification)
- 施工手順 (/process)
- 施工事例 (/works)
- 主な使用機器 (/machine)
- 協会について (/about)

**Contact Section:**
- 電話でのお問い合わせ (Phone Inquiries): 075-323-1445
- メールでのお問い合わせ (Email Inquiries): お問い合わせフォーム info@rakuyuz.jp (/contact)

---

## 3D Model Integration Requirements

### General 3D Implementation Guidelines:
1. All 3D models should be optimized for web (low-poly with good texturing)
2. Use lazy loading for 3D components
3. Implement loading states with spinners
4. Add fallback images for mobile devices with limited GPU
5. Enable orbit controls for user interaction
6. Use ambient + directional lighting for consistent appearance
7. Implement auto-rotation with pause on user interaction

### Specific 3D Model Placements:

**Home Page:**
- Hero section: Large 3D animated model of RAKUYU-Z construction process
- Feature showcase: 3D icons that rotate on hover

**Construction Method Page:**
- Step-by-step 3D visualization of the water replacement method
- Cross-section view of sewage infrastructure

**6 Features Page:**
- Six interactive 3D models, one for each feature
- Clickable hotspots revealing detailed information

**Construction Process Page:**
- Timeline with 3D models showing each construction phase
- Animated transitions between steps

**Case Studies Page:**
- 3D before/after comparisons of project sites
- Interactive site models

**Equipment Page:**
- Detailed 3D models of each piece of machinery
- 360° rotation capability
- Exploded view option for mechanical details

**About Page:**
- 3D office building exterior
- 3D map integration
- Animated organizational chart

---

## Component Structure

```
src/
├── app/
│   ├── layout.tsx (root layout with metadata)
│   ├── page.tsx (home)
│   ├── about/page.tsx
│   ├── construction/page.tsx
│   ├── specification/page.tsx
│   ├── process/page.tsx
│   ├── works/page.tsx
│   ├── machine/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── 3d/
│   │   ├── Scene3D.tsx (wrapper component)
│   │   ├── SewageSystem3D.tsx
│   │   ├── ConstructionProcess3D.tsx
│   │   ├── Equipment3D.tsx
│   │   ├── OrganizationChart3D.tsx
│   │   ├── BuildingExterior3D.tsx
│   │   ├── Map3D.tsx
│   │   └── Timeline3D.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── LoadingSpinner.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Purpose.tsx
│       ├── Business.tsx
│       ├── Location.tsx
│       └── ContactCTA.tsx
├── lib/
│   ├── constants.ts (company info, colors, etc.)
│   └── utils.ts
└── styles/
    └── globals.css
```

---

## Content Requirements

### Japanese Language Implementation:
- All content must be in Japanese (as original)
- Use Noto Sans JP or similar professional Japanese font
- Ensure proper character encoding (UTF-8)
- Maintain vertical rhythm for readability

### Typography Hierarchy:
- H1 (Page titles): 協会概要, etc.
- H2 (Section titles): 目的, 事業, 所在地, 組織図
- Body text: Professional, readable
- Bold text: Key statements and emphasis
- Table text: Clear, structured

### Accessibility:
- Proper heading hierarchy
- Alt text for all images and 3D model fallbacks
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly structure

---

## SEO & Metadata

**Common Meta Tags:**
- Site Title: ラクユーZ工法協会
- Description: 不断水水替工法 (Non-stop water replacement method)
- Keywords: RAKUYU-Z工法, 下水工事, 水替工法, 京都

**Page-Specific Titles:**
- About: 協会概要 | ラクユーZ工法協会
- Contact: お問い合わせ | ラクユーZ工法協会

---

## Performance Optimization

1. **Image Optimization:**
   - Use Next.js Image component
   - Serve WebP with fallbacks
   - Lazy load below-fold images

2. **3D Optimization:**
   - Implement dynamic imports for Three.js components
   - Use Draco compression for 3D models
   - Implement LOD (Level of Detail) for complex models
   - GPU instancing for repeated elements

3. **Code Splitting:**
   - Route-based splitting (automatic with Next.js App Router)
   - Component-level splitting for 3D components

4. **Caching:**
   - Static page generation where possible
   - ISR (Incremental Static Regeneration) for content updates

---

## Responsive Design Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

**3D Model Behavior:**
- Mobile: Static images or simplified 3D models
- Tablet: Interactive 3D with reduced complexity
- Desktop: Full 3D experience

---

## Animation Guidelines

1. **Page Transitions:**
   - Smooth fade-in on route changes
   - Stagger animations for list items

2. **3D Animations:**
   - Auto-rotation: 20-30 seconds per rotation
   - Hover effects: Subtle scale and highlight
   - Click interactions: Zoom and focus

3. **Scroll Animations:**
   - Parallax effects for hero sections
   - Fade-in on scroll for content sections
   - Progress indicators for multi-step processes

---

## Testing Checklist

- [ ] All Japanese text displays correctly
- [ ] Phone number links work on mobile
- [ ] Email links open mail client
- [ ] All navigation links functional
- [ ] 3D models load properly on all devices
- [ ] 3D models have fallback images
- [ ] Forms validate correctly
- [ ] Contact form submits successfully
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance audit (Lighthouse score 90+)
- [ ] SEO optimization

---

## Deployment

**Recommended Platform:** Vercel (optimal for Next.js)

**Environment Variables:**
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_PHONE_NUMBER`
- Email service API keys (if needed)

**Build Command:** `npm run build`
**Output Directory:** `.next`

---

## Additional Notes

1. Preserve the exact corporate identity and branding
2. Maintain professional, formal Japanese business tone
3. Ensure all contact information is prominently displayed
4. Keep the simple, clean, information-focused design philosophy
5. 3D models should enhance, not distract from, the content
6. Maintain fast load times despite 3D integration
7. Ensure the site works without JavaScript (progressive enhancement)
8. Add proper error boundaries for 3D components
9. Implement analytics tracking (Google Analytics or similar)
10. Create a sitemap.xml and robots.txt

---

## Priority Implementation Order

1. Set up Next.js project with TypeScript and Tailwind
2. Implement global CSS with corporate colors
3. Create layout components (Header, Footer, Navigation)
4. Build static pages with exact content
5. Integrate basic 3D scene setup
6. Add individual 3D models for each section
7. Implement animations and interactions
8. Optimize performance
9. Test across devices and browsers
10. Deploy to production

#### Section 1: 目的 (Purpose)
**Heading:** 目的

**Main Statement (Bold):**
"本会はRAKUYU－Z工法の普及と技術の向上を図り、会員の情報交換と親睦を図ることを目的としています。"

**Body Text:**
"我々RAKUYU－Z工法協会は、下水供用下における様々な工事が円滑かつ安全に進行することをサポートするRAKUYU－Z工法（不断水水替工法）の普及と工法技術のより一層の向上を求め、それらを円滑に行うべく会員相互の情報交換と親睦を図ることを目的とします。"

**3D Model Integration Point:** 
- Display rotating 3D model of sewage system infrastructure
- Show cross-section view of RAKUYU-Z method in action
- Animated water flow demonstration

---

#### Section 2: 事業 (Business Activities)
**Heading:** 事業

**Bullet Points:**
- 工法の普及、宣伝活動。
- 工法の技術の改善、向上に関する調査研究及び技術資料の作成。
- 設計、積算及び施工に関する調査及び資料の作成。
- 工法に関する技術指導、研修会及び講習会の開催。
- 会員相互の親睦を図る。
- 前各号のほか、本会の目的を達成するための必要な事業。

**Body Text:**
"下水供用下における施設の維持・管理には、本工事と必ずセットとしての水替が必要となる工事が多々あります。そして、その必要な水替も施工条件によって手法は様々あり、経済的で合理性に富んだ工法が要求されます。様々な要求を満たしたRAKUYU－Z工法の事業を展開しております。"

**3D Model Integration Point:**
- Interactive 3D timeline showing business activities
- Clickable 3D icons for each business activity
- Animated process flow

---

#### Section 3: 所在地 (Location)
**Heading:** 所在地

**Table Data:**
| Field | Value |
|-------|-------|
| 所在地 | 〒615-0881 京都市右京区西京極北大入町66 |
| TEL | 075-323-1445 |
| FAX | 075-323-1442 |
| 最寄り駅 | 最寄駅：西京極駅（阪急京都線） |

**3D Model Integration Point:**
- 3D map of Kyoto with pin showing office location
- 3D building model of the office exterior
- Google Maps integration with 3D terrain
- Transit directions visualization

---

#### Section 4: 組織図 (Organization Chart)
**Heading:** 組織図

**Original Image:** images/organaize_img.png

**3D Model Integration Point:**
- Replace static org chart with interactive 3D hierarchical structure
- Nodes should be clickable for more information
- Animated connections between organizational units
- Zoom and pan functionality

---

### 8. CONTACT PAGE (/contact)

**Page Title (SEO):** お問い合わせ/ラクユーZ工法協会/不断水水替工法

**Main Page Heading:** お問い合わせ (Contact Us)

**Contact Information:**
- Address: 〒615-0881 京都市右京区西京極北大入町66
- Phone: 075-323-1445
- FAX: 075-323-1442
- Email: info@rakuyuz.jp

**Contact Form Fields:**
- Name (お名前)
- Company (会社名)
- Email (メールアドレス)
- Phone (電話番号)
- Subject (件名)
- Message (お問い合わせ内容)

---

### 9. FOOTER (All Pages)
**Logo:** /images/logo_01_sm.png

**Company Information:**
- 〒615-0881 京都市右京区西京極北大入町66
- Tel：075-323-1445
- FAX: 075-323-1442

**Navigation Links (Footer):**
- ホーム (/)
- 工法について (/construction)
- 6つの特徴 (/specification)
- 施工手順 (/process)
- 施工事例 (/works)
- 主な使用機器 (/machine)
- 協会について (/about)

**Contact Section:**
- 電話でのお問い合わせ (Phone Inquiries): 075-323-1445
- メールでのお問い合わせ (Email Inquiries): お問い合わせフォーム info@rakuyuz.jp (/contact)

---

## 3D Model Integration Requirements

### General 3D Implementation Guidelines:
1. All 3D models should be optimized for web (low-poly with good texturing)
2. Use lazy loading for 3D components
3. Implement loading states with spinners
4. Add fallback images for mobile devices with limited GPU
5. Enable orbit controls for user interaction
6. Use ambient + directional lighting for consistent appearance
7. Implement auto-rotation with pause on user interaction

### Specific 3D Model Placements:

**Home Page:**
- Hero section: Large 3D animated carousel of equipment and construction sites
- Feature showcase: 3D cards that rotate on hover
- Floating 3D icons

**Construction Method Page:**
- Main pipe water replacement: Interactive 3D cross-section
- Connection pipe system: Animated 3D diagram
- Real site example: 3D reconstruction of underground layout
- Toggle between different pipe configurations

**6 Features Page:**
- Six interactive 3D before/after comparison models
- Clickable hotspots revealing detailed information
- Smooth transitions between problem and solution states
- Side-by-side 3D comparison view

**Construction Process Page:**
- Interactive 3D timeline with 11 steps
- Each step has detailed 3D visualization
- Animated transitions between steps
- Progress indicator
- Click any step to jump to detailed view

**Case Studies Page:**
- 3D map of Japan with project location pins
- Each pin reveals project details on click
- Before/after 3D site comparisons
- 360° virtual site tours
- Filter by project type, location, or scale

**Equipment Page:**
- Detailed 3D models of all machinery
- 360° rotation capability
- Exploded view option for mechanical details
- Technical specification overlays
- Size comparison tool
- AR preview for mobile

**About Page:**
- 3D office building exterior
- 3D Kyoto city map with office location
- Animated organizational chart in 3D space
- Interactive business activity visualization

---

## Component Structure

```
src/
├── app/
│   ├── layout.tsx (root layout with metadata)
│   ├── page.tsx (home)
│   ├── about/page.tsx
│   ├── construction/page.tsx
│   ├── specification/page.tsx
│   ├── process/page.tsx
│   ├── works/page.tsx
│   ├── machine/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── 3d/
│   │   ├── Scene3D.tsx (wrapper component)
│   │   ├── SewageSystem3D.tsx
│   │   ├── PipeComparison3D.tsx
│   │   ├── ConstructionProcess3D.tsx
│   │   ├── Equipment3D.tsx
│   │   ├── OrganizationChart3D.tsx
│   │   ├── BuildingExterior3D.tsx
│   │   ├── Map3D.tsx
│   │   ├── Timeline3D.tsx
│   │   ├── BeforeAfter3D.tsx
│   │   ├── FeatureComparison3D.tsx
│   │   └── CaseStudyMap3D.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── Table.tsx
│   │   └── LoadingSpinner.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Purpose.tsx
│       ├── Business.tsx
│       ├── Location.tsx
│       ├── ContactCTA.tsx
│       └── ProjectGallery.tsx
├── lib/
│   ├── constants.ts (company info, colors, etc.)
│   ├── types.ts (TypeScript types)
│   └── utils.ts
├── public/
│   ├── images/
│   ├── models/ (3D model files)
│   └── rakuyuz.pdf
└── styles/
    └── globals.css
```

---

## Content Requirements

### Japanese Language Implementation:
- All content must be in Japanese (as original)
- Use Noto Sans JP or similar professional Japanese font
- Ensure proper character encoding (UTF-8)
- Maintain vertical rhythm for readability
- Proper line breaks for Japanese text

### Typography Hierarchy:
- H1 (Page titles): 協会概要, 施工手順, etc.
- H2 (Section titles): 目的, 事業, 所在地, 組織図, etc.
- H3 (Sub-sections): Feature titles, step descriptions
- Body text: Professional, readable
- Bold text: Key statements and emphasis
- Table text: Clear, structured

### Accessibility:
- Proper heading hierarchy
- Alt text for all images and 3D model fallbacks
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly structure
- Focus indicators for all interactive elements
- Skip to content link

---

## Image Assets Reference

### Home Page Images:
- Slider: images/slide1.png through images/slide6.png
- Feature cards: images/top_3menu_1.png, images/top_3menu_1_sm.png
- Feature cards: images/top_3menu_2.png, images/top_3menu_2_sm.png
- Feature cards: images/top_3menu_3.png, images/top_3menu_3_sm.png
- Logo: images/logo_01_sm.png

### Construction Page Images:
- images/standard_img.png
- images/construction_img_new1.png
- images/construction_img_new2.png
- images/pump_img.png
- images/standard_img2.png

### Specification Page Images:
- Problem/Solution icons: images/triangle.png, images/triangle2.png
- Category specific: images/triangle_taikyu.png, images/triangle2_taikyu.png
- Category specific: images/triangle_kankyou.png, images/triangle2_kankyou.png
- Category specific: images/triangle_anzen.png, images/triangle2_anzen.png
- Category specific: images/triangle_kidou.png, images/triangle2_kidou.png
- Comparison images: images/solution1_left.png through images/solution9_3.png

### Process Page Images:
- Flow chart: images/flow_main_img.png
- Step images: images/flow_img1_1.png through images/flow_img11_1.png

### Works Page Images:
- Case study photos: images/works_img_new11_1.jpg through images/works_img_new56_6.jpg
- (19 case studies × 6 photos each = 114 images)

### Machine Page Images:
- Pump images: images/works/machine_img1.png through images/works/machine_img10.png
- Additional equipment: images/works/comp1.png, images/works/comp2.png, images/works/comp3.png

### About Page Images:
- Organization chart: images/organaize_img.png

---

## SEO & Metadata

**Common Meta Tags:**
- Site Name: ラクユーZ工法協会
- Description: 不断水水替工法 - RAKUYU-Z工法は、供用中の下水道関連工事において、周辺環境の衛生面や安全面、本工事の施工性と品質確保に応える不断水水替工法です。
- Keywords: RAKUYU-Z工法, ラクユーZ, 不断水水替工法, 下水工事, 水替工法, 京都, 下水道工事, 管更生, 災害復旧

**Page-Specific Meta Titles:**
- Home: ラクユーZ工法協会/不断水水替工法/不断水水替工法のラクユーZ工法協会
- About: ラクユーZ工法協会について/ラクユーZ工法協会/不断水水替工法
- Construction: 工法について/ラクユーZ工法協会/不断水水替工法
- Specification: ラクユーZ工法の6つの特徴/ラクユーZ工法協会/不断水水替工法
- Process: 施工手順/ラクユーZ工法協会/不断水水替工法
- Works: 施工実例/ラクユーZ工法協会/不断水水替工法
- Machine: 主な使用機器/ラクユーZ工法協会/不断水水替工法
- Contact: お問い合わせ/ラクユーZ工法協会/不断水水替工法

**Open Graph Tags:**
- og:site_name: ラクユーZ工法協会
- og:type: website
- og:locale: ja_JP

**Structured Data (JSON-LD):**
- Organization schema
- LocalBusiness schema
- Service schema
- BreadcrumbList schema

---

## Performance Optimization

1. **Image Optimization:**
   - Use Next.js Image component for all images
   - Serve WebP with JPEG fallbacks
   - Lazy load below-fold images
   - Implement responsive images with srcset
   - Priority loading for hero images

2. **3D Optimization:**
   - Implement dynamic imports for Three.js components
   - Use Draco compression for 3D models
   - Implement LOD (Level of Detail) for complex models
   - GPU instancing for repeated elements
   - Use frustum culling
   - Implement object pooling for reusable 3D objects

3. **Code Splitting:**
   - Route-based splitting (automatic with Next.js App Router)
   - Component-level splitting for 3D components
   - Vendor bundle optimization

4. **Caching:**
   - Static page generation for all content pages
   - ISR (Incremental Static Regeneration) for case studies
   - Service Worker for offline functionality
   - CDN caching for assets

5. **Bundle Size:**
   - Tree-shaking unused code
   - Analyze bundle with webpack-bundle-analyzer
   - Target bundle size: < 200KB initial load

---

## Responsive Design Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

**3D Model Behavior by Device:**
- Mobile (< 768px): 
  - Static images or very simplified 3D models
  - Reduced polygon count
  - Disable shadows and advanced effects
  - Touch controls optimized
  
- Tablet (768px - 1023px): 
  - Interactive 3D with medium complexity
  - Basic lighting
  - Touch + mouse controls
  
- Desktop (1024px+): 
  - Full 3D experience
  - Advanced lighting and shadows
  - Mouse controls with keyboard shortcuts
  - High-resolution textures

**Navigation Behavior:**
- Mobile: Hamburger menu
- Tablet: Horizontal scroll menu
- Desktop: Full horizontal menu

---

## Animation Guidelines

1. **Page Transitions:**
   - Smooth fade-in on route changes (300ms)
   - Stagger animations for list items (50ms delay between items)
   - Slide-in for cards and sections

2. **3D Animations:**
   - Auto-rotation: 20-30 seconds per full rotation
   - Hover effects: Subtle scale (1.05x) and highlight
   - Click interactions: Zoom and focus with smooth easing
   - Loading animations: Spinning placeholder model

3. **Scroll Animations:**
   - Parallax effects for hero sections
   - Fade-in on scroll for content sections (using Intersection Observer)
   - Progress indicators for multi-step processes
   - Sticky headers with subtle shadow on scroll

4. **Micro-interactions:**
   - Button hover states
   - Link underline animations
   - Form field focus states
   - Table row hover highlights

---

## Testing Checklist

### Content Verification:
- [ ] All Japanese text displays correctly across all browsers
- [ ] All 114+ case study images load properly
- [ ] All equipment specifications match source data
- [ ] All page titles and headings are exact matches
- [ ] Contact information is correct on all pages

### Functionality:
- [ ] Phone number links work on mobile (tel: protocol)
- [ ] Email links open mail client (mailto: protocol)
- [ ] All navigation links functional
- [ ] PDF download works (/rakuyuz.pdf)
- [ ] Video embed works (if applicable)
- [ ] Contact form validates correctly
- [ ] Contact form submits successfully

### 3D Models:
- [ ] All 3D models load properly on desktop
- [ ] 3D models have fallback images
- [ ] 3D controls work (orbit, zoom, pan)
- [ ] 3D models responsive to window resize
- [ ] 3D animations smooth (60fps target)
- [ ] Mobile devices show appropriate fallbacks
- [ ] Loading states display correctly

### Cross-browser Testing:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Responsive Design:
- [ ] Mobile (320px, 375px, 414px widths)
- [ ] Tablet (768px, 1024px widths)
- [ ] Desktop (1280px, 1440px, 1920px widths)
- [ ] Touch interactions work on tablets

### Accessibility:
- [ ] Keyboard navigation works throughout site
- [ ] Screen reader announces content properly
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Alt text present for all images
- [ ] ARIA labels for interactive elements
- [ ] Skip to content link works

### Performance:
- [ ] Lighthouse Performance score 90+
- [ ] Lighthouse Accessibility score 95+
- [ ] Lighthouse Best Practices score 95+
- [ ] Lighthouse SEO score 95+
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] Largest Contentful Paint < 2.5s

### SEO:
- [ ] All meta tags present
- [ ] Open Graph tags configured
- [ ] Structured data validated
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] 404 page exists

---

## Deployment

**Recommended Platform:** Vercel (optimal for Next.js)

**Alternative Platforms:**
- Netlify
- AWS Amplify
- Cloudflare Pages

**Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://rakuyuz.jp
NEXT_PUBLIC_CONTACT_EMAIL=info@rakuyuz.jp
NEXT_PUBLIC_PHONE_NUMBER=075-323-1445
NEXT_PUBLIC_GA_ID=<Google Analytics ID>
CONTACT_FORM_ENDPOINT=<Form submission endpoint>
```

**Build Configuration:**
- Build Command: `npm run build`
- Output Directory: `.next`
- Node Version: 18.x or higher
- Install Command: `npm install`

**Post-Deployment:**
- Test all forms
- Verify 3D models load on production
- Check analytics integration
- Test from different geographic locations
- Monitor error logs

---

## Additional Notes

1. **Content Accuracy:**
   - All text content extracted directly from original site
   - 19 detailed case studies with exact specifications
   - Complete equipment catalog with full specifications
   - Accurate contact information and company details

2. **Brand Preservation:**
   - Maintain professional, formal Japanese business tone
   - Keep simple, clean, information-focused design philosophy
   - Preserve corporate blue and amber color scheme
   - Display contact information prominently on every page

3. **3D Enhancement Philosophy:**
   - 3D models should enhance, not distract from, the content
   - Maintain fast load times despite 3D integration
   - Ensure the site works without JavaScript (progressive enhancement)
   - Always provide 2D fallbacks for essential information

4. **Technical Documentation:**
   - All equipment specifications are exact from source
   - Case study data is verbatim from original site
   - Maintain data accuracy for professional credibility

5. **Future Enhancements:**
   - Consider adding member login area
   - Implement case study search/filter
   - Add project inquiry form
   - Create downloadable technical documents section
   - Add news/updates section for association activities

6. **Maintenance:**
   - Regular updates to case studies as new projects complete
   - Keep equipment specifications current
   - Update contact information if company moves
   - Monitor 3D model performance and optimize as needed

7. **Analytics & Monitoring:**
   - Implement Google Analytics or similar
   - Track 3D model interactions
   - Monitor form submissions
   - Track popular case studies
   - Monitor page load times
   - Set up error tracking (Sentry or similar)

---

## Priority Implementation Order

1. **Foundation (Week 1):**
   - Set up Next.js project with TypeScript
   - Implement global CSS with corporate colors
   - Create layout components (Header, Footer, Navigation)
   - Set up routing structure

2. **Content Pages (Week 2-3):**
   - Build all static pages with exact content
   - Implement responsive layouts
   - Add all images and optimize
   - Create reusable components

3. **3D Integration Preparation (Week 3):**
   - Set up Three.js and React Three Fiber
   - Create basic 3D scene setup
   - Implement loading states
   - Add fallback images

4. **3D Models - Phase 1 (Week 4):**
   - Hero page 3D carousel
   - Construction method cross-sections
   - Equipment showcase models

5. **3D Models - Phase 2 (Week 5):**
   - Feature comparison before/after models
   - Construction process timeline
   - Case study map

6. **Interactive Features (Week 6):**
   - Contact form implementation
   - Search/filter for case studies
   - Mobile menu
   - Smooth scrolling

7. **Optimization & Polish (Week 7):**
   - Performance optimization
   - 3D model optimization
   - Image optimization
   - Code splitting

8. **Testing & QA (Week 8):**
   - Cross-browser testing
   - Mobile testing
   - Accessibility testing
   - Performance testing
   - Content verification

9. **Pre-launch (Week 9):**
   - SEO optimization
   - Analytics setup
   - Error tracking
   - Security audit

10. **Launch & Monitor (Week 10):**
    - Deploy to production
    - Monitor performance
    - Fix any issues
    - Collect user feedback

---

## Success Metrics

**Performance Targets:**
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- 3D models load: < 2s on desktop, < 4s on mobile

**User Experience Targets:**
- Bounce rate: < 40%
- Average session duration: > 2 minutes
- Pages per session: > 3
- Mobile traffic support: 50%+ of users

**Technical Targets:**
- Zero accessibility violations
- Zero console errors
- 100% uptime
- < 100ms API response times

---

## Contact for Development Team

**Key Stakeholders:**
- Client: RAKUYU-Z工法協会
- Phone: 075-323-1445
- Email: info@rakuyuz.jp
- Address: 〒615-0881 京都市右京区西京極北大入町66

**Development Resources:**
- Original Site: http://rakuyuz.jp
- PDF Documentation: Available at /rakuyuz.pdf
- Company Video: Link available on construction page

---

**END OF SPECIFICATION DOCUMENT**

*This document contains the complete, exact content from all pages of the RAKUYUZ website and serves as the authoritative reference for the Next.js rebuild with 3D model integration.*
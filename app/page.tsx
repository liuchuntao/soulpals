"use client";

import { useState } from "react";
import Image from "next/image";

const companionMoments = [
  { time: "07:30", period: "清晨", title: "知道怎样叫醒你", quote: "今天九点有会。比平时早十分钟叫你，窗帘先开到一半。", signal: "日程提前 · 昨晚睡得较晚", action: "渐亮灯光 · 轻声唤醒", ability: "感知现实", image: "/product/d1-wave-transparent.png", expression: "清晨挥手问候" },
  { time: "14:20", period: "白天", title: "让关系跨过每次对话", quote: "昨天那份方案还差最后一页。需要我把你记下的三个要点找出来吗？", signal: "延续昨日任务 · 识别当前工作", action: "找回笔记 · 等待确认", ability: "延续关系", image: "/product/d1-thinking-transparent.png", expression: "白天专注思考" },
  { time: "20:47", period: "回家", title: "知道什么时候不该追问", quote: "你昨天说，忙完想先安静一会儿。灯调暗了，我先陪你坐会儿。", signal: "语速变慢 · 延续相处偏好", action: "调暗灯光 · 保持安静", ability: "判断时机", image: "/product/d1-cylinder-only.png", expression: "回家俏皮回应" },
  { time: "23:40", period: "深夜", title: "把关心变成真实行动", quote: "复诊资料和明早的路线都准备好了。现在不用操心，去睡吧。", signal: "记得明日复诊 · 时间已晚", action: "整理资料 · 设置提醒", ability: "具身行动", image: "/product/d1-calm.png", expression: "深夜安心陪伴" },
];

const relationshipSkills = [
  ["容得下沉默", "问题不必立刻有答案。你还没准备好行动时，它不会急着建议或追问。"],
  ["接得住具体感受", "不说空洞的“都会好的”，而是理解这件事为什么会让你如此在意。"],
  ["分享真实的喜悦", "好消息不只得到一句恭喜，它会记住细节，跟上你的兴奋。"],
  ["有分寸地不同意", "先接住感受，也不会盲目迎合伤害你的绝对判断。"],
];

const finishes = [
  ["曜石黑", "/product/d1-black.png"],
  ["月岩银", "/product/d1-silver.png"],
  ["星云白", "/product/d1-white.png"],
  ["樱雾粉", "/product/d1-pink.png"],
];

const faqs = [
  ["它和智能音箱有什么不同？", "智能音箱完成指令，D1 承载一个持续存在的 AI 角色。它有形象、性格和长期记忆，会在共同生活中越来越懂你。"],
  ["可以使用我喜欢的角色吗？", "可以。你可以选择、创建或导入角色，并配置人物背景、性格、关系、声音和技能。"],
  ["只能在 D1 上和角色互动吗？", "不是。角色和关系可以在 D1 与手机端之间延续，让陪伴不被单一设备限制。"],
  ["底层大模型可以切换吗？", "可以。灵伴智能体中枢负责身份、记忆、决策和表达，底层可按场景接入不同模型能力。"],
];

export default function Home() {
  const [finish, setFinish] = useState(0);
  const [faq, setFaq] = useState(0);
  const [moment, setMoment] = useState(2);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="灵伴首页"><i aria-hidden="true" />灵伴</a>
        <div className="navLinks">
          <a href="#companion">陪伴体验</a><a href="#relationship">关系能力</a><a href="#d1">D1 机甲</a><a href="#platform">智能体中枢</a>
        </div>
        <a className="navCta" href="/contact">联系我们</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">LINGBAN D1 · PERSISTENT AI COMPANION</span>
            <h1>不只会聊天，<br /><em>更会持续陪伴。</em></h1>
            <p>灵伴 D1 承载一个有身份、有记忆、有边界的 AI 个体。它通过真实世界与你相处，也在每一天的共同经历中越来越懂你。</p>
            <div className="heroActions">
              <a className="primary" href="#films">观看产品影片 <b>▶</b></a>
              <a className="textLink" href="#d1">探索 D1 机甲形态 →</a>
            </div>
            <div className="heroFacts"><span>情商与智商融合</span><span>长期关系记忆</span><span>感知到行动闭环</span></div>
          </div>
          <div className="heroProduct">
            <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
            <Image src="/product/d1-wave-transparent.png" alt="灵伴 D1 数字生命舱，角色挥手问候" width={353} height={661} priority unoptimized />
            <div className="floatCard memory"><small>LONG-TERM MEMORY</small><b>记得你昨天没睡好</b><span>已调整今早的唤醒方式</span></div>
            <div className="floatCard online"><i /> 角色在线 · 正在看着你</div>
          </div>
        </div>
        <div className="scrollHint">向下探索 <span>↓</span></div>
      </section>

      <section className="companionDay" id="companion">
        <div className="shell">
          <div className="dayHeading"><span className="sectionNo">01 / A DAY WITH D1</span><h2>不是等待下一次唤醒，<br />而是<em>持续参与你的一天。</em></h2><p>从清晨到深夜，D1 在感知、记忆、判断与行动中延续与你的关系。</p></div>
          <div className="dayTimeline" role="tablist" aria-label="一天的陪伴场景">{companionMoments.map((item, index) => <button role="tab" aria-selected={moment === index} className={moment === index ? "active" : ""} onClick={() => setMoment(index)} key={item.time}><small>{item.time}</small><b>{item.period}</b><span>{item.ability}</span></button>)}</div>
          <div className="momentStage" key={moment}>
            <div className="momentVisual"><div className="momentOrbit" /><Image src={companionMoments[moment].image} alt={`灵伴 D1 数字生命舱，${companionMoments[moment].expression}`} width={353} height={661} unoptimized /><span className="momentStatus"><i />{companionMoments[moment].time} · {companionMoments[moment].period}</span></div>
            <div className="momentStory"><span className="momentAbility">{companionMoments[moment].ability}</span><h3>{companionMoments[moment].title}</h3><blockquote>“{companionMoments[moment].quote}”</blockquote><div className="momentEvidence"><p><small>它注意到</small><b>{companionMoments[moment].signal}</b></p><i>→</i><p><small>它决定</small><b>{companionMoments[moment].action}</b></p></div></div>
          </div>
        </div>
      </section>

      <section className="daily shell">
        <div className="dailyVisual">
          <Image src="/product/d1-lifestyle-generated-v3.png" alt="用户与灵伴 D1 相处的日常" width={1586} height={992} unoptimized />
          <span className="time">20:47</span>
          <div className="quote"><small>结合上次的相处偏好</small><span>“你昨天说，忙完想先安静一会儿。灯调暗了，我先陪你坐会儿。”</span></div>
        </div>
        <div className="dailyCopy"><span className="sectionNo">A DAY WITH D1</span><h2>它记住的不只是信息，<br />还有共同生活的上下文。</h2><p>它知道你的起床时间，记得昨天没完成的工作，也能感知疲惫。合适的陪伴，不一定是追问，有时只是替你调好温度，静静待在身边。</p><ul><li><b>主动陪伴</b><span>在合适的时间出现，而不是等待唤醒词</span></li><li><b>情绪理解</b><span>从语气、表情与情境理解你的真实状态</span></li><li><b>连接生活</b><span>联动日程、任务与智能家居服务</span></li></ul></div>
      </section>

      <section className="relationship" id="relationship">
        <div className="shell">
          <div className="relationshipIntro"><span className="sectionNo">02 / RELATIONSHIP INTELLIGENCE</span><h2>真正的陪伴，<br />不是把每句话说得更甜。</h2><p>一句回复是否温柔并不够。更重要的是：它有没有理解你真正担心的事，尊重你的节奏，并让关系继续靠近，而不是停住或破裂。</p></div>
          <div className="relationshipGrid">{relationshipSkills.map(([title, text], index) => <article key={title}><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="companionFlow"><div><small>PERCEPTION</small><b>感知</b><span>人、情绪与环境</span></div><i>→</i><div><small>UNDERSTANDING</small><b>理解</b><span>情境、记忆与关系</span></div><i>→</i><div><small>JUDGEMENT</small><b>判断</b><span>回应、行动或沉默</span></div><i>→</i><div><small>EXPRESSION</small><b>表达</b><span>语言、表情与服务</span></div><i>→</i><div><small>GROWTH</small><b>成长</b><span>反馈进入长期关系</span></div></div>
        </div>
      </section>

      <section className="d1Section" id="d1">
        <div className="shell">
          <div className="sectionHead light"><span className="sectionNo">03 / D1 HARDWARE</span><h2>它的感官，<br />也是它的身体。</h2><p>透明角色舱、麦克风、摄像头、触摸与设备状态，让 AI 不再藏在语音背后，而是能够理解真实环境、自然表达的空间存在。</p></div>
          <div className="finishStage">
            <Image src={finishes[finish][1]} alt={`灵伴 D1 ${finishes[finish][0]}渲染图`} width={1248} height={702} unoptimized />
            <div className="finishInfo"><small>CMF COLLECTION</small><b>{finishes[finish][0]}</b><span>透明数字人舱 · 环形氛围灯 · 模块化机甲结构</span></div>
          </div>
          <div className="finishTabs">{finishes.map(([name], index) => <button className={finish === index ? "active" : ""} onClick={() => setFinish(index)} key={name}><i />{name}</button>)}</div>
          <div className="d1Features"><article><b>360°</b><span>环绕式角色呈现</span></article><article><b>REAL-TIME</b><span>表情、动作实时反馈</span></article><article><b>MODULAR</b><span>可组合机甲底座</span></article><article><b>PORTABLE</b><span>提手式便携设计</span></article></div>
        </div>
      </section>

      <section className="films shell" id="films">
        <div className="sectionHead"><span className="sectionNo">04 / FILMS</span><h2>看见陪伴，如何发生</h2><p>两段视频，从真实的一天到 D1 背后的完整产品能力。</p></div>
        <div className="filmGrid">
          <article><video controls preload="metadata" poster="/product/d1-lifestyle-generated-v3.png"><source src="/product/story-film.mp4" type="video/mp4" /></video><div><small>FILM 01 · BRAND STORY</small><h3>有你陪着，我真好</h3><p>一个人生活，也可以有人记得你的每一天。</p></div></article>
          <article><video controls preload="metadata" poster="/product/product-poster.jpg"><source src="/product/product-film.mp4" type="video/mp4" /></video><div><small>FILM 02 · PRODUCT</small><h3>认识灵伴 D1</h3><p>从实时角色、长期记忆到开放创作生态。</p></div></article>
        </div>
      </section>

      <section className="platform" id="platform">
        <div className="shell platformGrid">
          <div><span className="sectionNo">05 / AGENT PLATFORM</span><h2>模型可以更换，<br />关系不会重置。</h2><p>大模型提供通用智能，灵伴智能体中枢持续维护身份、记忆、关系、主动判断与安全边界，把可替换的模型能力组织成不可轻易替换的长期关系。</p><div className="modelRow"><span>OpenAI</span><span>DeepSeek</span><span>Qwen</span><span>Doubao</span><span>Meta</span></div></div>
          <div className="platformCards"><article><small>01</small><b>稳定身份</b><p>角色、人格与关系阶段由同一个 Agent 持续统筹。</p></article><article><small>02</small><b>双向记忆</b><p>理解用户，也积累 Agent 自己的经历、承诺与成长。</p></article><article><small>03</small><b>质量闭环</b><p>关键交互可回放、可评测，让问题成为持续优化样本。</p></article><article><small>04</small><b>开放能力</b><p>灵活连接模型、3D 资产、技能、设备与家庭服务。</p></article></div>
        </div>
      </section>

      <section className="trust shell"><div><span className="sectionNo">06 / TRUST</span><h2>越亲近，<br />越需要清晰的边界。</h2></div><div className="trustList"><article><b>隐私可控</b><p>相机、麦克风、记忆和设备控制，都有明确状态与权限。</p></article><article><b>记忆可管理</b><p>重要记忆可以查看、纠正或删除，不让关系成为黑盒。</p></article><article><b>不诱导依赖</b><p>不冒充治疗师，不做无法兑现的永久承诺，始终支持用户回到现实生活与真实关系。</p></article><article><b>行动可确认</b><p>涉及账号、设备与高风险服务的操作，需要明确授权。</p></article></div></section>

      <section className="faq shell"><div><span className="sectionNo">FAQ</span><h2>你可能还想知道</h2></div><div>{faqs.map(([q, a], index) => <button key={q} onClick={() => setFaq(faq === index ? -1 : index)} aria-expanded={faq === index}><span><b>{q}</b><em>{faq === index ? "−" : "+"}</em></span>{faq === index && <p>{a}</p>}</button>)}</div></section>

      <footer className="footer"><div className="footerInner shell"><div className="footerBlock footerRecord">备案号：<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2024099740号-4</a></div><div className="footerBlock footerCopyright">Copyright © 2026 北京灵伴工坊科技有限公司 All rights reserved.</div><nav className="footerBlock footerPolicies" aria-label="政策与联系"><a href="/privacy">隐私政策</a><span>｜</span><a href="/terms">用户服务协议</a><span>｜</span><a href="/minor-protect">未成年人保护政策</a><span>｜</span><a href="/contact">联系我们</a></nav></div></footer>
    </main>
  );
}

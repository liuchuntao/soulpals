import Link from "next/link";

type LegalPageType = "privacy" | "terms" | "minor" | "contact";

const pages: Record<LegalPageType, { eyebrow: string; title: string; intro: string; sections: Array<[string, string[]]> }> = {
  privacy: {
    eyebrow: "PRIVACY",
    title: "隐私政策",
    intro: "我们重视你对个人信息的知情权和控制权。本政策说明灵伴在提供产品与服务时如何处理相关信息。",
    sections: [
      ["一、信息收集", ["为提供角色陪伴、设备连接和客户支持等服务，我们会在必要范围内处理你主动提供的信息，以及你授权设备使用的功能数据。", "涉及相机、麦克风、记忆与设备控制的功能，均应以产品中的明确状态提示与授权为前提。"]],
      ["二、信息使用", ["信息仅用于提供、维护和改进灵伴服务，以及响应你的咨询、请求与安全需求。", "未经你的同意，我们不会将个人信息用于与上述目的无关的用途。"]],
      ["三、你的权利", ["你可以依照产品提供的能力查看、更新、导出或删除相关信息与记忆。", "如需协助，请通过页面底部的联系方式向我们提出请求。"]],
      ["四、联系我们", ["如对本政策或个人信息处理有疑问，请发送邮件至 service@soulpals.com。"]],
    ],
  },
  terms: {
    eyebrow: "TERMS OF SERVICE",
    title: "用户服务协议",
    intro: "本协议用于说明你使用灵伴网站、产品与相关服务时的基本权利、义务与使用规则。",
    sections: [
      ["一、服务说明", ["灵伴提供 AI 角色、数字生命舱及相关软件服务。部分能力可能处于测试、升级或调整阶段。", "AI 生成内容仅供参考，不构成医疗、法律、金融或其他专业意见。"]],
      ["二、合理使用", ["请遵守法律法规，不得利用服务从事侵害他人权益、危害系统安全或其他不当行为。", "请妥善保管账号及设备，不向他人泄露可能影响服务安全的信息。"]],
      ["三、内容与知识产权", ["网站、产品及服务中包含的品牌、软件、界面与内容受相关法律保护。未经许可，不得擅自复制、传播或用于商业用途。"]],
      ["四、服务变更", ["我们可能基于产品发展、安全保障或法律要求更新服务与本协议；重要变化将以合理方式向你说明。"]],
    ],
  },
  minor: {
    eyebrow: "MINOR PROTECTION",
    title: "未成年人保护政策",
    intro: "灵伴重视未成年人的身心健康与个人信息安全，并持续优化适龄保护措施。",
    sections: [
      ["一、监护人参与", ["未成年人使用服务前，应在监护人指导下阅读并理解相关规则。", "涉及个人信息处理、付费或重要功能设置时，监护人应给予必要的同意与协助。"]],
      ["二、适龄使用", ["我们努力提供符合未成年人身心发展特点的服务体验，并避免诱导沉迷、过度消费或不当依赖。"]],
      ["三、保护与反馈", ["如你发现任何可能影响未成年人权益的内容或使用情形，请及时联系我们。", "监护人可通过 service@soulpals.com 提出咨询、意见或相关请求。"]],
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    title: "联系我们",
    intro: "无论是产品体验、售后支持、合作交流还是对服务的建议，我们都期待听到你的声音。",
    sections: [
      ["公司信息", ["公司名称：北京灵伴工坊科技有限公司", "公司地址：北京市海淀区王庄路1号B座4层5-C", "电话：13940062692"]],
      ["客户服务", ["服务邮箱：service@soulpals.com", "我们会尽快回复你的来信。"]],
      ["产品体验", ["如希望了解灵伴 D1 或申请产品体验，请在邮件中说明你的需求与联系方式。"]],
      ["隐私与合规", ["如需咨询个人信息、未成年人保护或本网站条款，请在邮件主题中注明相关事项。"]],
    ],
  },
};

function LegalFooter() {
  return <footer className="legalFooter"><p>备案号：<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2024099740号-4</a><br />Copyright © 2026 北京灵伴工坊科技有限公司 All rights reserved.<br /><Link href="/privacy">隐私政策</Link>｜<Link href="/terms">用户服务协议</Link>｜<Link href="/minor-protect">未成年人保护政策</Link>｜<Link href="/contact">联系我们</Link></p></footer>;
}

export function LegalPage({ type }: { type: LegalPageType }) {
  const page = pages[type];
  return <main className="legalPage"><header className="legalNav"><Link href="/" className="brand"><i aria-hidden="true" />灵伴</Link><Link href="/" className="backHome">← 返回首页</Link></header><section className="legalHero"><span>{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p></section><article className="legalContent">{page.sections.map(([heading, paragraphs]) => <section key={heading}><h2>{heading}</h2>{paragraphs.map((paragraph) => { const separator = heading === "公司信息" ? paragraph.indexOf("：") : -1; return <p key={paragraph} className={separator >= 0 ? "contactDetail" : undefined}>{separator >= 0 ? <><span>{paragraph.slice(0, separator + 1)}</span>{paragraph.slice(separator + 1)}</> : paragraph}</p>; })}</section>)}</article><LegalFooter /></main>;
}

export { LegalFooter };

import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="规则如何塑造人性的选择？外卖骑手江临以程序员思维卡BUG拆解玄学命运。">
      <header className="vanish-hero">
        <div className="container">
          <div className="row vanish-hero-row">
            <div className="col col--6 vanish-hero-left">
              <h1 className="vanish-hero-title">消失的终点</h1>
              <p className="vanish-hero-subtitle">
                一部关于“规则如何塑造人性的选择”的长篇巨著
              </p>
              <div className="vanish-awards-badge-row">
                <span className="vanish-award-badge">🥇 2025年度全网“全渠道销售总冠军”</span>
                <span className="vanish-award-badge">🚀 2026年度“年度最佳创新作品”</span>
                <span className="vanish-award-badge">🌌 华语科幻星云奖“最佳流派融合奖”</span>
              </div>
              <Link
                className="vanish-cta-button"
                to="/docs/"
                style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>
                启动叙事引擎 · 开始阅读
              </Link>

              <div className="vanish-tags-container">
                <span className="vanish-tag">无限流</span>
                <span className="vanish-tag">规则怪谈</span>
                <span className="vanish-tag">克苏鲁</span>
                <span className="vanish-tag">硬科幻</span>
                <span className="vanish-tag">双男主</span>
                <span className="vanish-tag">悬疑惊悚</span>
                <span className="vanish-tag">都市异能</span>
                <span className="vanish-tag">架空历史官场</span>
                <span className="vanish-tag">游戏入侵</span>
                <span className="vanish-tag">甜宠</span>
              </div>
            </div>

            <div className="col col--6 vanish-hero-right">
              <div className="vanish-cover-wrapper">
                <img
                  src="/img/novel_cover.png"
                  className="vanish-novel-cover"
                  alt="《消失的终点》图书封面"
                />
              </div>

              <div className="vanish-terminal">
                <div className="vanish-terminal-header">
                  <div className="vanish-terminal-dot red"></div>
                  <div className="vanish-terminal-dot yellow"></div>
                  <div className="vanish-terminal-dot green"></div>
                  <div className="vanish-terminal-title">Narrative Engine Console</div>
                </div>
                <div className="vanish-terminal-body">
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span>sys.init_narrative_engine_core()... </span>
                    <span className="vanish-terminal-success">SUCCESS</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span>loading_universe("Vanish_Main_World") </span>
                    <span className="vanish-terminal-info">[Active]</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span>scan_active_variables()</span>
                  </div>
                  <div className="vanish-terminal-line" style={{ paddingLeft: '15px' }}>
                    <span>- Jiang_Lin (都市外卖骑手 / BugTrigger): </span>
                    <span className="vanish-terminal-success">ONLINE</span>
                  </div>
                  <div className="vanish-terminal-line" style={{ paddingLeft: '15px' }}>
                    <span>- Shen_Ce (冷酷执行官 / NarrativeAnchor): </span>
                    <span className="vanish-terminal-info">BOUNDED</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span className="vanish-terminal-warning">[WARN] Alert: Rule hot-update in progress. Spacetime format altered.</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span className="vanish-terminal-warning">[WARN] Detected abnormal 13th Mansion delivery order.</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span className="vanish-terminal-info">[QUEST] Break the rules, override the typewriter, rewrite the end.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="vanish-features-section">
        <div className="container">
          <div className="row">
            <div className="col col--4 margin-bottom--lg">
              <div className="vanish-card">
                <div className="vanish-card-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4"></path>
                  </svg>
                </div>
                <h3 className="vanish-card-title">规则热更新与自由意志</h3>
                <p className="vanish-card-description">当世界观像游戏一样随时热更新，时空、法则与身份在瞬间被重写，底层生命如何在规则的重置下守护自由意志与自我意识？</p>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="vanish-card">
                <div className="vanish-card-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="vanish-card-title">跨时空与立场的灵魂交汇</h3>
                <p className="vanish-card-description">在无数次记忆被抹除、立场对立的死局深渊中，与沈策的超生死羁绊，如何成为虚假宇宙中两个孤独灵魂彼此定位的唯一之锚？</p>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="vanish-card">
                <div className="vanish-card-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="vanish-card-title">外卖骑手的“卡BUG”改命</h3>
                <p className="vanish-card-description">程序员外卖员江临，用严密的系统化逻辑去硬核拆解未知的克苏鲁玄学与高维战争，从被命运玩弄的棋子蜕变成重写剧本的作者。</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="vanish-reviews-section">
        <div className="container">
          <h2 className="vanish-reviews-title">💬 名家联袂推荐 · 从硬核科幻到时代寓言</h2>
          <div className="row">
            <div className="col col--6 margin-bottom--lg">
              <div className="vanish-review-card">
                <div>
                  <div className="vanish-review-quote">“它在荒诞的数字泡沫里，写出了最冷酷的高维诗意。”</div>
                  <p className="vanish-review-text">
                    主角江临跨着滋滋冒代码的电动车，载着沈策冲向“终点塔”那一幕，具有一种近乎残酷的宏大美感。这不仅是科幻，更是用计算机逻辑对现实命运进行的一次高能重构。
                  </p>
                </div>
                <div className="vanish-review-author">
                  <div className="vanish-review-avatar">钟</div>
                  <div className="vanish-review-info">
                    <span className="vanish-review-name">钟欣</span>
                    <span className="vanish-review-title-desc">硬核科幻巨匠</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--6 margin-bottom--lg">
              <div className="vanish-review-card">
                <div>
                  <div className="vanish-review-quote">“这是当代底层工具人对命运进行的最激烈的、带有黑色幽默的反抗。”</div>
                  <p className="vanish-review-text">
                    在现实中，骑手被困在平台的算法系统里；而在小说里，这种困境被推向了高维机制的极致——“超时即抹杀”。江临没有选择砸碎机器，而是选择成为最了解机器的人。这是一份中文互联网对“算法时代”交出的一份魔幻现实主义答卷。
                  </p>
                </div>
                <div className="vanish-review-author">
                  <div className="vanish-review-avatar">高</div>
                  <div className="vanish-review-info">
                    <span className="vanish-review-name">高维升</span>
                    <span className="vanish-review-title-desc">学院派文化研究学者</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--6 margin-bottom--lg">
              <div className="vanish-review-card">
                <div>
                  <div className="vanish-review-quote">“逻辑严密得像一份完美的谋杀证明，过瘾，太TM过瘾了！”</div>
                  <p className="vanish-review-text">
                    本书的伏笔管理只能用“无懈可击”来形容。十个核心悬念无一掉地。第12章主角不靠外挂，纯粹用程序员写Bug的“If-Then判断语句”，活生生把一个怪谈厉鬼的CPU撑爆自爆。这是强迫症患者的绝对福音。
                  </p>
                </div>
                <div className="vanish-review-author">
                  <div className="vanish-review-avatar">金</div>
                  <div className="vanish-review-info">
                    <span className="vanish-review-name">金陈</span>
                    <span className="vanish-review-title-desc">知名悬疑作家</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--6 margin-bottom--lg">
              <div className="vanish-review-card">
                <div>
                  <div className="vanish-review-quote">“缝合了11种法则居然没崩！双男主的‘生命共感’写出了纯粹与浪漫。”</div>
                  <p className="vanish-review-text">
                    两个人在“生命共感”的折磨下，一边互相吐血分担致死伤，一边在严肃的惊悚战场上被迫完成系统强制的霸道表白，这种极致的反差和张力，简直把读者的情绪玩弄于股掌之间。大结局在宇宙打字机前硬写剧本那一幕，燃爆了，也浪漫死了。
                  </p>
                </div>
                <div className="vanish-review-author">
                  <div className="vanish-review-avatar">蝴</div>
                  <div className="vanish-review-info">
                    <span className="vanish-review-name">蝴蝶蓝</span>
                    <span className="vanish-review-title-desc">网文殿堂级流派宗师</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

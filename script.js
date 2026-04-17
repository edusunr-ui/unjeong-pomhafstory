const NOTICE_DETAILS = {
  '1': { category: '학원 공지', title: '3관 상담실 운영 시작 안내', date: '2026-03-18', views: '87', body: ['운정 수학의힘∫외대HS어학원 3관 상담실 운영이 시작되었습니다.', '브랜드별 상담 동선을 분산해 더욱 안정적이고 편안한 상담 환경을 제공하며, 학년별 상담 일정 조율도 이전보다 빠르게 진행됩니다.', '상담 전 사전 예약을 남겨 주시면 학생 학년과 관심 과목에 맞는 프로그램 설명을 더 정확하게 안내해 드릴 수 있습니다.'] },
  '2': { category: '수업 안내', title: '수학의힘 주말 심화 특강 신청 안내', date: '2026-03-22', views: '109', body: ['수학의힘 주말 심화 특강은 고난도 유형 정리, 서술형 정리, 취약 유형 보완을 중심으로 운영됩니다.', '현재 반별 진도와 학생별 약점을 반영해 특강 난이도가 구성되며, 내신과 심화 학습을 함께 준비해야 하는 학생에게 특히 적합합니다.', '신청 인원은 반별 정원에 따라 조기 마감될 수 있으므로 데스크 또는 상담 페이지를 통해 미리 문의해 주세요.'] },
  '3': { category: '학원 공지', title: '외대HS어학원 3월 말 학습 리포트 발송 안내', date: '2026-03-29', views: '73', body: ['외대HS어학원 재원생 대상 3월 말 학습 리포트가 순차 발송됩니다.', '리포트에는 교과서 본문 이해도, 문법 보완 포인트, 서술형 작성 흐름, 다음 달 학습 포인트가 함께 정리됩니다.', '리포트 수령 후 상담을 원하시는 경우 학원으로 연락 주시면 개별 상담 일정을 안내해 드립니다.'] },
  '4': { category: '수업 안내', title: '고등부 내신 대비 보강 시간표 공지', date: '2026-04-01', views: '151', body: ['고등부 내신 대비 보강은 학교별 시험 범위와 일정에 맞춰 일부 시간표가 조정됩니다.', '수학은 빈출 유형 정리와 기출 문제 풀이 중심으로, 영어는 교과서 본문과 문법 보완 및 서술형 writing 연습 중심으로 운영됩니다.', '세부 시간표는 각 반 공지와 데스크 안내를 통해 다시 전달드리겠습니다.'] },
  '5': { category: '상담 안내', title: '중등부 4월 학부모 상담 주간 운영 안내', date: '2026-04-05', views: '94', body: ['중등부 학부모 상담 주간은 4월 둘째 주부터 순차 진행됩니다.', '학생별 최근 학습 상태, 중간고사 준비 흐름, 취약 과목 보완 계획, 수학의힘 쿼터테스트와 외대HS 먼슬리테스트 결과를 함께 설명드립니다.', '상담 시간은 개별 조율로 진행되며 상담 신청 페이지를 통해 우선 예약하실 수 있습니다.'] },
  '6': { category: '학원 공지', title: '2026 여름학기 반 편성 및 개강 일정 안내', date: '2026-04-08', views: '128', body: ['2026 여름학기 반 편성과 개강 일정을 안내드립니다.', '학생별 반 편성은 최근 상담 내용, 학교별 진도, 학습 성취도, 프로그램 적합성을 기준으로 순차적으로 안내됩니다.', '최종 시간표와 반 배정 결과는 개별 연락으로 전달드리며, 조정이 필요한 경우 상담실에서 추가 안내해 드립니다.'] }
};

const SOCIAL_FEED_PATH = 'social-feed.json';

function renderSiteChrome() {
  const body = document.body;
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');
  if (header) {
    header.innerHTML = `
      <div class="header__bar">
        <a class="brand-cluster" href="index.html" aria-label="운정 수학의힘 외대HS어학원 홈">
          <div class="brand-cluster__logos">
            <img class="brand-cluster__logo brand-cluster__logo--math" src="assets/math-logo.png" alt="수학의힘 로고">
            <img class="brand-cluster__logo brand-cluster__logo--hs" src="assets/hs-logo.png" alt="외대HS어학원 로고">
          </div>
          <div class="brand-cluster__copy">
            <span class="brand-cluster__eyebrow">UNJEONG PREMIUM CAMPUS</span>
            <strong>수학의힘∫외대HS어학원</strong>
          </div>
        </a>
        <button class="header__toggle" type="button" aria-expanded="false" aria-controls="primary-nav">메뉴</button>
        <nav id="primary-nav" class="primary-nav" aria-label="주요 메뉴">
          <div class="nav-item">
            <button class="nav-item__trigger" type="button">학원소개</button>
            <div class="mega-panel">
              <div class="mega-panel__inner mega-panel__inner--single">
                <section>
                  <h3>Academy</h3>
                  <a href="company.html" data-nav-page="company">학원 소개</a>
                  <a href="principal-greeting.html" data-nav-page="principal">대표원장 인사말</a>
                  <a href="results.html" data-nav-page="results">성과/후기</a>
                </section>
              </div>
            </div>
          </div>
          <div class="nav-item">
            <button class="nav-item__trigger" type="button">프로그램</button>
            <div class="mega-panel">
              <div class="mega-panel__inner mega-panel__inner--triple">
                <section>
                  <h3>Brand Pages</h3>
                  <a href="math-intro.html" data-nav-page="math-intro">수학의힘</a>
                  <a href="hs-intro.html" data-nav-page="hs-intro">외대HS어학원</a>
                  <a href="science-intro.html" data-nav-page="science-intro">과학의힘</a>
                  <a href="readingplus-intro.html" data-nav-page="readingplus-intro">리딩플러스</a>
                </section>
                <section>
                  <h3>Programs</h3>
                  <a href="class-features.html#math-system" data-nav-page="features">내신 대비</a>
                  <a href="class-features.html#math-system" data-nav-page="features">수학 내 시스템</a>
                  <a href="class-features.html#english-system" data-nav-page="features">영어 내 시스템</a>
                </section>
                <section>
                  <h3>Popular Search</h3>
                  <a href="seo-unjeong-math.html">운정 수학학원</a>
                  <a href="seo-unjeong-english.html">운정 영어학원</a>
                  <a href="seo-unjeong-high-grades.html">운정 고등 내신학원</a>
                </section>
              </div>
            </div>
          </div>
          <div class="nav-item">
            <button class="nav-item__trigger" type="button">커뮤니티</button>
            <div class="mega-panel">
              <div class="mega-panel__inner">
                <section>
                  <h3>Community</h3>
                  <a href="notices.html" data-nav-page="notices">공지사항</a>
                  <a href="stories.html" data-nav-page="stories">학습 이야기</a>
                </section>
                <section>
                  <h3>SNS</h3>
                  <a href="blog.html" data-nav-page="blog">블로그</a>
                  <a href="sns.html" data-nav-page="sns">인스타그램</a>
                </section>
              </div>
            </div>
          </div>
          <div class="nav-item">
            <button class="nav-item__trigger" type="button">입학안내</button>
            <div class="mega-panel">
              <div class="mega-panel__inner">
                <section>
                  <h3>Admission</h3>
                  <a href="learning-guide.html#admission" data-nav-page="guide">등록 절차</a>
                  <a href="consultation.html" data-nav-page="consultation">1:1 맞춤 상담</a>
                  <a href="consultation.html" data-nav-page="consultation">설명회 예약</a>
                </section>
                <section>
                  <h3>Visit</h3>
                  <a href="https://map.naver.com/p/entry/place/1966039382" target="_blank" rel="noreferrer">1관</a>
                  <a href="https://map.naver.com/p/entry/place/1947238069" target="_blank" rel="noreferrer">2관</a>
                  <a href="https://map.naver.com/p/entry/place/1086621471" target="_blank" rel="noreferrer">3관</a>
                </section>
              </div>
            </div>
          </div>
        </nav>
        <a class="header__cta" href="consultation.html">상담 바로가기</a>
      </div>
    `;
  }

  if (footer) {
    footer.className = 'footer footer--brand';
    footer.innerHTML = `
      <div class="page-width footer__topline">
        <div class="footer__social">
          <a class="social-badge" href="https://blog.naver.com/edusun100" target="_blank" rel="noreferrer" aria-label="네이버 블로그">blog</a>
          <a class="social-badge social-badge--image" href="https://www.instagram.com/hsarspom/" target="_blank" rel="noreferrer" aria-label="인스타그램"><img src="assets/instagram-white.png" alt="Instagram"></a>
        </div>
      </div>
      <div class="page-width footer__info-grid">
        <div><strong>운정 수학의힘∫외대HS어학원</strong><p>운정 수학학원 상담, 산내마을 수학 프로그램, 운정 영어학원 내신 대비 상담이 가능한 영·수·국·과 통합 학습 캠퍼스입니다.</p></div>
        <div><strong>사업자등록번호</strong><p>(주)가상교육 123-45-67890</p></div>
        <div><strong>상담 &amp; 문의</strong><p>입학상담 : 031-539-0909</p><p>대표문의 : 031-946-0909</p><p>FAX : 031-944-6289</p><p>E-mail : info@sample-academy.co.kr</p></div>
        <div><strong>주소</strong><p>파주시 청암로 17번길 55 센트럴프라자 9층</p><p>파주시 교하로 87 삼성프라자 4층</p><p>파주시 청암로 17번길 55 센트럴프라자 8층</p></div>
      </div>
    `;
  }
}



function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderSocialFeedItems(container, items) {
  if (!container || !Array.isArray(items) || !items.length) return;
  container.innerHTML = items.map((item) => {
    const channel = escapeHtml(item.channelLabel || (item.type === 'instagram' ? 'Instagram' : 'Blog'));
    const title = escapeHtml(item.title || '최신 소식 보기');
    const url = escapeHtml(item.url || '#');
    const image = escapeHtml(item.image || 'assets/academy-exterior-1.jpg');
    const alt = escapeHtml(item.imageAlt || title);
    const cardClass = item.type === 'instagram' ? 'blog-embed-card blog-embed-card--instagram' : 'blog-embed-card';
    return `
      <a class="${cardClass}" href="${url}" target="_blank" rel="noreferrer">
        <figure class="blog-embed-card__image">
          <img src="${image}" alt="${alt}">
        </figure>
        <div class="blog-embed-card__overlay">
          <span class="blog-embed-card__channel">${channel}</span>
          <strong>${title}</strong>
        </div>
      </a>
    `;
  }).join('');
}

async function hydrateSocialFeed() {
  const containers = Array.from(document.querySelectorAll('[data-social-feed-grid]'));
  if (!containers.length) return;
  try {
    const response = await fetch(SOCIAL_FEED_PATH, { cache: 'no-store' });
    if (!response.ok) return;
    const payload = await response.json();
    if (!payload || !Array.isArray(payload.items)) return;
    containers.forEach((container) => {
      const limit = Number.parseInt(container.dataset.limit || '', 10);
      const items = Number.isFinite(limit) && limit > 0 ? payload.items.slice(0, limit) : payload.items;
      renderSocialFeedItems(container, items);
    });
  } catch (error) {
    console.warn('social-feed load skipped', error);
  }
}

function enhanceHomePage() {
  if (document.body.dataset.page !== 'home') return;

  const setText = (selector, text, html = false) => {
    const el = document.querySelector(selector);
    if (!el) return;
    if (html) el.innerHTML = text;
    else el.textContent = text;
  };

  setText('.hero--visual h1', '운정 수학학원,<br>상위권 수학 교육에 최적화된 <span class="hero-highlight">수학의힘</span>', true);
  setText('.hero--visual .hero__lead--strong', '운정에서 내신 대비를 고민하는 초•중•고 학부모님께,<br><span class="text-nowrap">산내마을 수학의힘 외대HS어학원은 단순한 수업이 아닌 전략·습관·성적을 바꾸는 학습 시스템을 제공합니다.</span>', true);
  document.querySelector('.hero__actions')?.remove();
  document.querySelector('.hero__brandboard--visual')?.remove();

  const eyebrowSections = Array.from(document.querySelectorAll('.section')).reduce((map, section) => {
    const eyebrow = section.querySelector('.section-heading__eyebrow');
    if (eyebrow) map.set(eyebrow.textContent.trim(), section);
    return map;
  }, new Map());

  const parentSection = document.querySelector('.parent-concern-section');
  const solutionSection = eyebrowSections.get('Solution');
  const mainProjectSection = eyebrowSections.get('Main Project');
  const systemSection = eyebrowSections.get('System');

  if (parentSection && !document.querySelector('.ps-flow-section')) {
    const flowSection = document.createElement('section');
    flowSection.className = 'section page-width ps-flow-section';
    flowSection.innerHTML = `
      <div class="ps-flow-head">
        <div>
          <p class="section-heading__eyebrow">Problem &amp; Solution</p>
          <h2>수학의힘은 고효율 학습법으로 해결합니다</h2>
        </div>
      </div>
      <article class="ps-hero-card ps-hero-card--problem ps-problem-showcase">
        <span class="ps-hero-card__label">Problem</span>
        <div class="ps-problem-quote">
          <span class="ps-problem-quote__mark" aria-hidden="true">“</span>
          <strong>우리 아이의 성적은 왜<br>열심히 해도 제자리일까요?</strong>
          <span class="ps-problem-quote__mark" aria-hidden="true">”</span>
        </div>
        <p>노력이 부족해서가 아닙니다. 쏟아부은 시간이 진짜 실력이 되기 위해서는 '관리되는 공부 방식'이 필요합니다.</p>
        <div class="ps-parent-concern-cloud" aria-label="학부모님의 주요 수학 학습 고민">
          <span class="ps-parent-concern ps-parent-concern--a">우리 아이가 수학 공부를 스스로 잘할 수 있을까?</span>
          <span class="ps-parent-concern ps-parent-concern--b">수학 학원은 언제부터 다니는 게 좋을까</span>
          <span class="ps-parent-concern ps-parent-concern--c">수학 성적이 금방 오를 수 있을까?</span>
          <span class="ps-parent-concern ps-parent-concern--d">선행을 해야 할까, 현행을 잡아야 할까?</span>
          <span class="ps-parent-concern ps-parent-concern--e">숙제를 해도 실력이 느는지 모르겠어요</span>
          <span class="ps-parent-concern ps-parent-concern--f">시험만 보면 아는 문제도 자꾸 틀려요</span>
          <span class="ps-parent-concern ps-parent-concern--g">오답노트를 어떻게 관리해야 할까요?</span>
          <span class="ps-parent-concern ps-parent-concern--h">집에서는 공부 루틴이 잘 안 잡혀요</span>
        </div>
        <div class="problem-grid problem-grid--empathy ps-problem-grid">
          <article class="problem-card problem-card--empathy"><span class="problem-card__number">01</span><strong>계획 없는 공부</strong><p>체계적인 분량 조절과 로드맵 없이 진행되는 불규칙한 학습 패턴</p></article>
          <article class="problem-card problem-card--empathy"><span class="problem-card__number">02</span><strong>반복 없는 학습</strong><p>지식이 쌓이지 못하고 휘발되는 단순 진도 위주의 일회성 학습</p></article>
          <article class="problem-card problem-card--empathy"><span class="problem-card__number">03</span><strong>점검 없는 공부</strong><p>안다는 착각에서 비롯된 메타인지 오류와 반복적인 실전 실수</p></article>
        </div>
      </article>
      <div class="ps-flow-arrow" aria-hidden="true"></div>
      <section class="ps-system-panel">
        <div class="ps-system-panel__header">
          <p class="section-heading__eyebrow">System</p>
          <h2>운정 수학의힘만의 핵심 학습 시스템</h2>
          <p class="ps-system-panel__lead">계획부터 점검까지 한 흐름으로 연결해 공부 습관과 성적 변화를 함께 만듭니다.</p>
        </div>
        <div class="ps-system-grid">
          <article class="ps-system-card"><span class="ps-system-card__tag">System 1</span><strong>TE(Time Effective) 시스템</strong><span class="ps-system-card__icon" aria-hidden="true"><img src="assets/system-1.png" alt=""></span><h3>고밀도 시간 설계</h3><p>짧은 시간에도 집중이 살아나도록 학습 밀도를 높여 효율을 끌어올립니다.</p></article>
          <article class="ps-system-card"><span class="ps-system-card__tag">System 2</span><strong>메타인지 학습</strong><span class="ps-system-card__icon" aria-hidden="true"><img src="assets/system-2.png" alt=""></span><h3>취약점 정확히 점검</h3><p>아는 것과 모르는 것을 분명히 구분해 보완 포인트를 빠르게 찾습니다.</p></article>
          <article class="ps-system-card"><span class="ps-system-card__tag">System 3</span><strong>백지노트 복기</strong><span class="ps-system-card__icon" aria-hidden="true"><img src="assets/system-3.png" alt=""></span><h3>배운 내용 완전 인출</h3><p>책을 덮고 다시 꺼내 쓰는 복기로 개념을 자기 것으로 정리합니다.</p></article>
          <article class="ps-system-card"><span class="ps-system-card__tag">System 4</span><strong>플래너 관리</strong><span class="ps-system-card__icon" aria-hidden="true"><img src="assets/system-4.png" alt=""></span><h3>루틴 흔들림 최소화</h3><p>계획과 실천을 함께 점검해 평소 공부 루틴이 무너지지 않도록 돕습니다.</p></article>
        </div>
      </section>
      <div class="ps-flow-arrow" aria-hidden="true"></div>
      <section class="ps-program-panel">
        <div class="ps-program-panel__header">
          <p class="section-heading__eyebrow">Program</p>
          <h2>교수학습설계로<br>수업과 관리가 한 흐름으로 이어집니다</h2>
          <p>학년별 강사 로테이션, 수업 연계 과제, 플오바 관리, 과제 연결 테스트, 정기 상담을 하나의 설계 안에서 운영합니다.</p>
        </div>
        <div class="ps-program-map" aria-label="교수학습설계 핵심 요소">
          <span class="ps-program-line ps-program-line--top" aria-hidden="true"></span>
          <span class="ps-program-line ps-program-line--left" aria-hidden="true"></span>
          <span class="ps-program-line ps-program-line--right" aria-hidden="true"></span>
          <span class="ps-program-line ps-program-line--bottom-left" aria-hidden="true"></span>
          <span class="ps-program-line ps-program-line--bottom-right" aria-hidden="true"></span>
          <strong>교수학습</strong>
          <span class="ps-program-node ps-program-node--top">풀오바<br><small>풀이노트 · 오답노트 · 바인더 관리</small></span>
          <span class="ps-program-node ps-program-node--left">이해 중심의 수업</span>
          <span class="ps-program-node ps-program-node--right">수업 연계 과제 부여 및 검사</span>
          <span class="ps-program-node ps-program-node--bottom-left">과제 연결 테스트 시스템</span>
          <span class="ps-program-node ps-program-node--bottom-right">Daily 문자발송 및 정기상담</span>
        </div>
        <div class="ps-program-list">
          <article><span>01</span><strong>학기별 강사 로테이션</strong><p>현·선행 분할 원칙을 1년 4학기로 나누어 시행하고, 6개월 단위로 담당 선생님 로테이션을 진행해 학습 다양성과 매너리즘 방지를 함께 설계합니다.</p></article>
          <article><span>02</span><strong>교수학습 역량 강화</strong><p>선생님의 수업 방식과 학생의 이해도를 함께 점검하며, 이론 설명에 그치지 않고 과제·테스트·복기까지 이어지는 관리 흐름을 만듭니다.</p></article>
          <article><span>03</span><strong>학습 관리 연결</strong><p>수업 후 과제 부여와 검사, Daily 문자 발송, 정기 상담을 통해 학생의 공부 상태가 학부모님께도 보이도록 관리합니다.</p></article>
        </div>
      </section>
      <div class="ps-flow-arrow" aria-hidden="true"></div>
      <article class="ps-hero-card ps-hero-card--solution">
        <span class="ps-hero-card__label">Solution</span>
        <strong>수학의힘은 아이들의 공부를<br>[계획 → 실행 → 점검 → 수정]의 흐름으로 바꿉니다</strong>
        <p class="ps-hero-card__body">시험 직전 몰아치기보다 평소의 공부 루틴이 무너지지 않도록 설계하고,<br>학부모님이 체감할 수 있는 전략·습관·성적의 변화를 함께 만듭니다.</p>
      </article>
    `;
    parentSection.before(flowSection);
    parentSection.remove();
    solutionSection?.remove();
    mainProjectSection?.remove();
    systemSection?.remove();
  }

  eyebrowSections.get('By Grade')?.remove();

  const resultsSection = eyebrowSections.get('Results');
  if (resultsSection) {
    resultsSection.innerHTML = `
      <div class="page-width">
        <div class="section-heading"><div><p class="section-heading__eyebrow">Results</p><h2>학부모와 학생이 직접 전하는 변화</h2></div></div>
        <div class="testimonial-slider" data-testimonial-slider>
          <button class="testimonial-slider__control testimonial-slider__control--prev" type="button" aria-label="이전 후기">‹</button>
          <div class="testimonial-grid testimonial-grid--slider">
            <article class="testimonial-card"><span class="card__eyebrow">학부모 후기</span><span class="testimonial-card__quote">“</span><strong>틀린 문제를 아는 힘이 생겼어요</strong><p>수학에 대한 자신감이 확 늘었고 무엇보다 친구들 앞에서 발표수업을 하며 틀린 문제를 확실히 알고 자기 것으로 만드는 모습을 보면서 아이를 맡긴 보람을 크게 느끼고 있습니다.</p><div class="testimonial-card__meta"><span>중등 수학</span><span>학부모님 후기</span></div></article>
            <article class="testimonial-card"><span class="card__eyebrow">학부모 후기</span><span class="testimonial-card__quote">“</span><strong>수학이 어렵지 않다는 말을 처음 들었습니다</strong><p>집에서 가르칠 때는 늘 어렵게만 느끼던 수학을 학원에 보낸 뒤부터는 스스로 풀어보려는 힘이 생기고, 실수도 줄면서 자신 있게 공부합니다.</p><div class="testimonial-card__meta"><span>운정 중등</span><span>학부모님 후기</span></div></article>
            <article class="testimonial-card"><span class="card__eyebrow">학부모 후기</span><span class="testimonial-card__quote">“</span><strong>상담과 피드백이 정말 빠르고 세심해요</strong><p>수학의힘을 선택한 이유는 원장님과 선생님들께서 피드백을 정말 잘해주시기 때문입니다. 사소한 질문에도 상세하고 빠르게 답해 주셔서 고민이 쌓이지 않고 바로 해결됩니다.</p><div class="testimonial-card__meta"><span>상담 만족도</span><span>학부모님 후기</span></div></article>
            <article class="testimonial-card testimonial-card--student"><span class="card__eyebrow">학생 후기</span><span class="testimonial-card__quote">“</span><strong>공부 루틴이 잡히니까 점수가 흔들리지 않았어요</strong><p>매주 해야 할 공부가 정리되어 있어서 덜 불안하고, 수학 문제를 풀 때도 어디서 막히는지 스스로 알게 됐어요.</p><div class="testimonial-card__meta"><span>중등 학생</span><span>수학의힘 재원생</span></div></article>
            <article class="testimonial-card testimonial-card--student"><span class="card__eyebrow">학생 후기</span><span class="testimonial-card__quote">“</span><strong>모르는 문제를 그냥 넘기지 않게 됐어요</strong><p>백지노트로 다시 정리하는 시간이 있어서 예전처럼 대충 이해한 척하고 넘어가지 않게 됐습니다. 시험 전에 복기할 때도 훨씬 편해졌어요.</p><div class="testimonial-card__meta"><span>복기 습관</span><span>학생 후기</span></div></article>
            <article class="testimonial-card testimonial-card--student"><span class="card__eyebrow">학생 후기</span><span class="testimonial-card__quote">“</span><strong>시험 전이 훨씬 차분해졌어요</strong><p>학교별로 어떤 단원을 더 봐야 하는지 정리해 주셔서 시험 직전에 우왕좌왕하지 않게 됐고 실제 점수도 안정적으로 올랐어요.</p><div class="testimonial-card__meta"><span>시험 대비</span><span>학생 후기</span></div></article>
          </div>
          <button class="testimonial-slider__control testimonial-slider__control--next" type="button" aria-label="다음 후기">›</button>
        </div>
      </div>
    `;
  }

  const campusSection = document.querySelector('#campus');
  if (campusSection) {
    const title = campusSection.querySelector('h2');
    if (title) title.textContent = '온라인 및 방문 상담';
    const cards = campusSection.querySelectorAll('.campus-card');
    const reservationLinks = [
      'https://map.naver.com/p/entry/place/1966039382?c=15.00,0,0,0,dh&placePath=/ticket?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604171646&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202604171646&locale=ko&svcName=map_pcv5',
      'https://map.naver.com/p/entry/place/1947238069?c=15.00,0,0,0,dh&placePath=/ticket?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604171648&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202604171648&locale=ko&svcName=map_pcv5'
    ];
    cards.forEach((card, index) => {
      const links = card.querySelector('.campus-card__links');
      if (!links) return;
      const mapLink = Array.from(links.querySelectorAll('a')).find((link) => link.href.includes('map.naver.com'));
      if (mapLink) mapLink.textContent = '네이버지도 바로가기';
      let reserve = links.querySelector('.campus-card__reserve');
      if (index < reservationLinks.length) {
        if (!reserve) {
          reserve = document.createElement('a');
          reserve.className = 'campus-card__reserve';
        }
        reserve.href = reservationLinks[index];
        reserve.target = '_blank';
        reserve.rel = 'noreferrer';
        reserve.textContent = '네이버 예약';
        if (mapLink) links.insertBefore(reserve, mapLink);
        else links.appendChild(reserve);
      }
      if (index === 2) reserve?.remove();
    });
  }

  if (!document.querySelector('.popular-search-section')) {
    const footer = document.querySelector('.footer');
    const section = document.createElement('section');
    section.className = 'section page-width popular-search-section';
    section.innerHTML = `
      <div class="section-heading section-heading--split">
        <div>
          <p class="section-heading__eyebrow">Popular Search</p>
          <h2>학부모님이 많이 찾는 지역별 페이지</h2>
        </div>
        <p class="page-summary__caption">메뉴는 깔끔하게 유지하고, 필요한 검색 페이지는 이곳에서 바로 이동할 수 있도록 정리했습니다.</p>
      </div>
      <div class="tag-chip-row">
        <a class="tag-chip" href="seo-unjeong-math.html">운정 수학학원</a>
        <a class="tag-chip" href="seo-sannae-math.html">산내마을 수학학원</a>
        <a class="tag-chip" href="seo-haeoreum-math.html">해오름마을 수학학원</a>
        <a class="tag-chip" href="seo-unjeong-english.html">운정 영어학원</a>
        <a class="tag-chip" href="seo-unjeong-middle-math.html">운정 중등 수학학원</a>
        <a class="tag-chip" href="seo-unjeong-high-grades.html">운정 고등 내신학원</a>
      </div>
    `;
    if (footer) footer.before(section);
  }
}

function setActiveNavLinks(page) {
  if (!page) return;
  document.querySelectorAll('[data-nav-page]').forEach((link) => {
    if (link.getAttribute('data-nav-page') === page) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function setupNoticeFilter() {
  const noticeSearchInput = document.querySelector('#notice-search');
  const noticeRows = document.querySelectorAll('#notice-table-body tr');
  const noticeEmpty = document.querySelector('#notice-empty');
  const noticeSearchButton = document.querySelector('.notice-search-button');
  const noticeType = document.querySelector('#notice-type');

  const filterNotices = () => {
    if (!noticeRows.length) return;
    const keyword = noticeSearchInput ? noticeSearchInput.value.trim().toLowerCase() : '';
    const type = noticeType ? noticeType.value : '전체';
    let visibleCount = 0;

    noticeRows.forEach((row) => {
      const title = (row.dataset.title || '').toLowerCase();
      const category = row.dataset.category || '전체';
      const matchedKeyword = !keyword || title.includes(keyword);
      const matchedType = type === '전체' || type === category;
      const matched = matchedKeyword && matchedType;
      row.hidden = !matched;
      if (matched) visibleCount += 1;
    });

    if (noticeEmpty) noticeEmpty.hidden = visibleCount !== 0;
  };

  if (noticeSearchInput) noticeSearchInput.addEventListener('input', filterNotices);
  if (noticeSearchButton) noticeSearchButton.addEventListener('click', filterNotices);
  if (noticeType) noticeType.addEventListener('change', filterNotices);
}

function setupNoticeDetail() {
  const noticeTitle = document.querySelector('#notice-detail-title');
  const noticeCategory = document.querySelector('#notice-detail-category');
  const noticeDate = document.querySelector('#notice-detail-date');
  const noticeViews = document.querySelector('#notice-detail-views');
  const noticeBody = document.querySelector('#notice-detail-body');

  if (!(noticeTitle && noticeCategory && noticeDate && noticeViews && noticeBody)) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || '6';
  const detail = NOTICE_DETAILS[id] || NOTICE_DETAILS['6'];
  noticeCategory.textContent = detail.category;
  noticeTitle.textContent = detail.title;
  noticeDate.textContent = `등록일 ${detail.date}`;
  noticeViews.textContent = `조회수 ${detail.views}`;
  noticeBody.innerHTML = detail.body.map((paragraph) => `<p>${paragraph}</p>`).join('');
}

function setupGallerySlider() {
  const slider = document.querySelector('[data-slider]');
  const prevButton = document.querySelector('.gallery-slider__control--prev');
  const nextButton = document.querySelector('.gallery-slider__control--next');
  if (!(slider && prevButton && nextButton)) return;

  const moveSlider = (direction) => {
    const amount = Math.max(slider.clientWidth * 0.82, 280);
    slider.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  prevButton.addEventListener('click', () => moveSlider(-1));
  nextButton.addEventListener('click', () => moveSlider(1));
}

function setupTestimonialSlider() {
  const slider = document.querySelector('[data-testimonial-slider] .testimonial-grid--slider');
  const prevButton = document.querySelector('.testimonial-slider__control--prev');
  const nextButton = document.querySelector('.testimonial-slider__control--next');
  if (!(slider && prevButton && nextButton)) return;

  const moveSlider = (direction) => {
    const card = slider.querySelector('.testimonial-card');
    const gap = parseFloat(getComputedStyle(slider).gap) || 22;
    const amount = card ? (card.getBoundingClientRect().width + gap) * 3 : Math.max(slider.clientWidth, 320);
    slider.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;
  let pointerId = null;

  const startDrag = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    isDragging = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = slider.scrollLeft;
    slider.classList.add('is-dragging');
    slider.setPointerCapture?.(event.pointerId);
  };

  const drag = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    slider.scrollLeft = startScrollLeft - (event.clientX - startX);
  };

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    slider.classList.remove('is-dragging');
    if (pointerId !== null) slider.releasePointerCapture?.(pointerId);
    pointerId = null;
  };

  slider.addEventListener('pointerdown', startDrag);
  slider.addEventListener('pointermove', drag);
  slider.addEventListener('pointerup', endDrag);
  slider.addEventListener('pointercancel', endDrag);
  slider.addEventListener('pointerleave', endDrag);
  prevButton.addEventListener('click', () => moveSlider(-1));
  nextButton.addEventListener('click', () => moveSlider(1));
}
function setupImageModal() {
  const modal = document.querySelector('#image-modal');
  const modalImage = modal ? modal.querySelector('.image-modal__img') : null;
  const modalClose = modal ? modal.querySelector('.image-modal__close') : null;
  const modalBackdrop = modal ? modal.querySelector('.image-modal__backdrop') : null;
  const zoomableImages = document.querySelectorAll('.project-showcase img, .award-gallery img, .academy-gallery img');
  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  if (!(modal && modalImage)) return;

  zoomableImages.forEach((image) => {
    image.classList.add('zoomable-image');
    image.addEventListener('click', () => {
      modalImage.src = image.currentSrc || image.src;
      modalImage.alt = image.alt || '';
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSiteChrome();
  enhanceHomePage();

  const body = document.body;
  const headerToggle = document.querySelector('.header__toggle');
  const primaryNav = document.querySelector('.primary-nav');
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  const revealTargets = document.querySelectorAll('.hero, .identity-strip article, .section, .page-hero, .notice-hero, .notice-board, .notice-detail, .footer, .card, .program-card, .campus-card, .signature-card, .contact-panel, .form-panel, .logo-panel');

  if (headerToggle && primaryNav) {
    headerToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      headerToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  navItems.forEach((item) => {
    const trigger = item.querySelector('.nav-item__trigger');
    if (!trigger) return;
    trigger.addEventListener('click', (event) => {
      if (window.innerWidth > 1240) event.preventDefault();
      const willOpen = !item.classList.contains('is-open');
      navItems.forEach((other) => {
        if (other !== item) other.classList.remove('is-open');
      });
      item.classList.toggle('is-open', willOpen);
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-item') && !event.target.closest('.header__toggle')) {
      navItems.forEach((item) => item.classList.remove('is-open'));
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1240 && primaryNav) {
      primaryNav.classList.remove('is-open');
      if (headerToggle) headerToggle.setAttribute('aria-expanded', 'false');
    }
  });

  revealTargets.forEach((element) => element.setAttribute('data-reveal', ''));
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
  }

  setActiveNavLinks(body.dataset.page || '');
  setupNoticeFilter();
  setupNoticeDetail();
  setupGallerySlider();
  setupTestimonialSlider();
  setupImageModal();
  hydrateSocialFeed();
});
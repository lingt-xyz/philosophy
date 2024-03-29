import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Notes for everything <head />">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header> */}
      <main>
        <div className="container vertical">
          <section>
            <h5>庄子/逍遥游</h5>
            <p>北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。</p>
            <p>齐谐者，志怪者也。谐之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪？其视下也，亦若是则已矣。</p>
            <p>且夫水之积也不厚，则其负大舟也无力。覆杯水于坳堂之上，则芥为之舟；置杯焉则胶，水浅而舟大也。风之积也不厚，则其负大翼也无力。故九万里，则风斯在下矣，而后乃今培风；背负青天而莫之夭阏者，而后乃今将图南。</p>
            <p>蜩与鸴鸠笑之曰：“我决起而飞，枪榆枋而止，时则不至而控于地而已矣，奚以之九万里而南为？”适莽苍者，三餐而反，腹犹果然；适百里者，宿舂粮；适千里者，三月聚粮。之二虫又何知！</p>
            <p>小知不及大知，小年不及大年。奚以知其然也？朝菌不知晦朔，蟪蛄不知春秋，此小年也。楚之南有冥灵者，以五百岁为春，五百岁为秋；上古有大椿者，以八千岁为春，八千岁为秋，此大年也。而彭祖乃今以久特闻，众人匹之，不亦悲乎！</p>
            <p>汤之问棘也是已。汤之问棘曰：“上下四方有极乎？”棘曰：“无极之外，复无极也。穷发之北有冥海者，天池也。有鱼焉，其广数千里，未有知其修者，其名为鲲。有鸟焉，其名为鹏，背若太山，翼若垂天之云，抟扶摇羊角而上者九万里，绝云气，负青天，然后图南，且适南冥也。斥鴳笑之曰：‘彼且奚适也？我腾跃而上，不过数仞而下，翱翔蓬蒿之间，此亦飞之至也，而彼且奚适也？’”此小大之辩也。</p>
            <p>故夫知效一官，行比一乡，德合一君，而征一国者，其自视也亦若此矣。而宋荣子犹然笑之。且举世而誉之而不加劝，举世而非之而不加沮，定乎内外之分，辩乎荣辱之境，斯已矣。彼其于世未数数然也。虽然，犹有未树也。夫列子御风而行，泠然善也，旬有五日而后反。彼于致福者，未数数然也。此虽免乎行，犹有所待者也。若夫乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉！故曰，至人无己，神人无功，圣人无名。</p>
            <p>尧让天下于许由，曰：“日月出矣而爝火不息，其于光也，不亦难乎！时雨降矣而犹浸灌，其于泽也，不亦劳乎！夫子立而天下治，而我犹尸之，吾自视缺然。请致天下。”</p>
            <p>许由曰：“子治天下，天下既已治也。而我犹代子，吾将为名乎？名者，实之宾也，吾将为宾乎？鹪鹩巢于深林，不过一枝；偃鼠饮河，不过满腹。归休乎君，予无所用天下为！庖人虽不治庖，尸祝不越樽俎而代之矣。”</p>
            <p>肩吾问于连叔曰：“吾闻言于接舆，大而无当，往而不返。吾惊怖其言，犹河汉而无极也；大有径庭，不近人情焉。”</p>
            <p>连叔曰：“其言谓何哉？”</p>
            <p>曰：“藐姑射之山，有神人居焉，肌肤若冰雪，绰约若处子。不食五谷，吸风饮露。乘云气，御飞龙，而游乎四海之外。其神凝，使物不疵疠而年谷熟。吾以是狂而不信也。”</p>
            <p>连叔曰：“然，瞽者无以与乎文章之观，聋者无以与乎钟鼓之声。岂唯形骸有聋盲哉？夫知亦有之。是其言也，犹时女也。之人也，之德也，将旁礡万物以为一世蕲乎乱，孰弊弊焉以天下为事！之人也，物莫之伤，大浸稽天而不溺，大旱金石流土山焦而不热。是其尘垢秕糠，将犹陶铸尧舜者也，孰肯以物为事！宋人资章甫而适诸越，越人断发文身，无所用之。尧治天下之民，平海内之政，往见四子藐姑射之山，汾水之阳，窅然丧其天下焉。”</p>
            <p>惠子谓庄子曰：“魏王贻我大瓠之种，我树之成而实五石，以盛水浆，其坚不能自举也。剖之以为瓢，则瓠落无所容。非不呺然大也，吾为其无用而掊之。”</p>
            <p>庄子曰：“夫子固拙于用大矣。宋人有善为不龟手之药者，世世以洴澼絖为事。客闻之，请买其方百金。聚族而谋曰：‘我世世为洴澼絖，不过数金；今一朝而鬻技百金，请与之。’客得之，以说吴王。越有难，吴王使之将。冬与越人水战，大败越人，裂地而封之。能不龟手，一也；或以封，或不免于洴澼絖，则所用之异也。今子有五石之瓠，何不虑以为大樽而浮乎江湖，而忧其瓠落无所容？则夫子犹有蓬之心也夫！”</p>
            <p>惠子谓庄子曰：“吾有大树，人谓之樗。其大本拥肿而不中绳墨，其小枝卷曲而不中规矩，立之涂，匠者不顾。今子之言，大而无用，众所同去也。”</p>
            <p>庄子曰：“子独不见狸狌乎？卑身而伏，以候敖者；东西跳梁，不辟高下；中于机辟，死于罔罟。今夫斄牛，其大若垂天之云。此能为大矣，而不能执鼠。今子有大树，患其无用，何不树之于无何有之乡，广莫之野，彷徨乎无为其侧，逍遥乎寝卧其下。不夭斤斧，物无害者，无所可用，安所困苦哉！”</p>
          </section>
        </div>
        {/* {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
                
              </div>
            </div>
          </section>
        )} */}
      </main>
    </Layout>
  );
}

export default Home;

import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./PxDesktop.module.css";
const PxDesktop: FunctionComponent = () => {
  const [frameDropdownAnchorEl, setFrameDropdownAnchorEl] =
    useState<HTMLElement | null>(null);
  const frameDropdownOpen = Boolean(frameDropdownAnchorEl);
  const handleFrameDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    setFrameDropdownAnchorEl(event.currentTarget);
  };
  const handleFrameDropdownClose = () => {
    setFrameDropdownAnchorEl(null);
  };

  return (
    <div className={styles.pxDesktop}>
      <div className={styles.vol9}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.groupChild6} />
        </div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
        <div className={styles.whereSoftwareBreakContainer}>
          <p className={styles.whereSoftware}>{`Where software `}</p>
          <p className={styles.whereSoftware}>break knowledge silos.</p>
        </div>
        <div className={styles.yourKeys}>{`Your Keys. `}</div>
        <div className={styles.yourData}>Your Data.</div>
        <div className={styles.ownYourFutureContainer}>
          <span className={styles.ownYourFutureContainer1}>
            <p className={styles.whereSoftware}>
              <span>{`Own your `}</span>
              <span className={styles.future}>Future</span>
            </p>
            <p className={styles.whereSoftware}>with</p>
          </span>
        </div>
        <div className={styles.hygieia}>HYGIEIA</div>
        <button className={styles.startNowForFreeParent}>
          <b className={styles.startNowFor}>Start Now For Free</b>
          <div className={styles.biarrowRight}>
            <div className={styles.frame}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
        </button>
        <div className={styles.biarrowRightWrapper}>
          <img
            className={styles.biarrowRightIcon}
            alt=""
            src="/biarrowright.svg"
          />
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.content}>
          <b className={styles.hygieia1}>HYGIEIA</b>
          <div className={styles.contentChild} />
        </div>
      </div>
      <div className={styles.pxDesktopInner}>
        <div className={styles.gameChangerBreakthroughTecParent}>
          <div className={styles.gameChangerBreakthroughContainer}>
            <p className={styles.whereSoftware}>Game</p>
            <p className={styles.whereSoftware}>Changer.</p>
            <p className={styles.whereSoftware}>Breakthrough</p>
            <p className={styles.whereSoftware}>Technology.</p>
          </div>
          <a className={styles.clickToSee} href="https://www.google.com">
            Click to see more
          </a>
          <img className={styles.sphereA2Icon} alt="" src="/sphere-a2@2x.png" />
        </div>
      </div>
      <div className={styles.fromZeroToHeroInMinutesParent}>
        <div className={styles.fromZeroTo}>From Zero to Hero in minutes</div>
        <img className={styles.icon} alt="" src="/11.svg" />
        <a className={styles.getStartedParent}>
          <b className={styles.getStarted}>Get started</b>
          <img
            className={styles.biarrowRight}
            alt=""
            src="/biarrowright1.svg"
          />
        </a>
      </div>
      <div className={styles.fastReliable}>{`Fast & Reliable.`}</div>
      <button className={styles.yellowLightningParent}>
        <img
          className={styles.yellowLightningIcon}
          alt=""
          src="/yellow-lightning@2x.png"
        />
        <div className={styles.ultraFastReliableContainer}>
          <p className={styles.whereSoftware}>Ultra Fast.</p>
          <p className={styles.whereSoftware}>Reliable.</p>
        </div>
      </button>
      <div className={styles.yourDataYourPrivacyYourFParent}>
        <div className={styles.yourDataYourContainer}>
          <p className={styles.whereSoftware}>Your data.</p>
          <p className={styles.whereSoftware}>Your privacy</p>
          <p className={styles.whereSoftware}>Your future.</p>
        </div>
        <b className={styles.hygieiaPrivacyAnd}>Hygieia Privacy and Security</b>
        <img className={styles.lockIcon} alt="" src="/lock@2x.png" />
      </div>
      <button className={styles.ourStateOfTheArtSdkOfferWrapper}>
        <b className={styles.ourStateOf}>Our state of the art sdk offers...</b>
      </button>
      <div className={styles.moremIpsumDolorSitAmetCoWrapper}>
        <b
          className={styles.moremIpsumDolor}
        >{`Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. `}</b>
      </div>
      <div className={styles.parent}>
        <div className={styles.div}>
          <div className={styles.div1}>
            <div className={styles.vectorParent}>
              <img className={styles.frameChild} alt="" src="/ellipse-63.svg" />
              <img className={styles.frameChild} alt="" src="/ellipse-64.svg" />
            </div>
            <div className={styles.vectorGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-631.svg"
              />
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-641.svg"
              />
            </div>
            <div className={styles.vectorContainer}>
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-632.svg"
              />
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-642.svg"
              />
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-633.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-643.svg"
              />
            </div>
          </div>
          <div className={styles.div2}>
            <div className={styles.vectorParent1}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-634.svg"
              />
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-644.svg"
              />
            </div>
            <div className={styles.vectorParent2}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-635.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-645.svg"
              />
            </div>
            <div className={styles.vectorParent3}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-636.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-646.svg"
              />
            </div>
            <div className={styles.vectorParent4}>
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-637.svg"
              />
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-647.svg"
              />
            </div>
          </div>
          <div className={styles.div3}>
            <div className={styles.vectorParent1}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-638.svg"
              />
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-648.svg"
              />
            </div>
            <div className={styles.vectorParent2}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-639.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-649.svg"
              />
            </div>
            <div className={styles.vectorParent7}>
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-6310.svg"
              />
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-6410.svg"
              />
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-6311.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-6411.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.theFutureStarts}>The Future starts today.</div>
        <div className={styles.phase1Wrapper}>
          <div className={styles.ourRoadmap}>Phase 1</div>
        </div>
        <div className={styles.phase2Wrapper}>
          <div className={styles.ourRoadmap}>Phase 2</div>
        </div>
        <div className={styles.phase3Wrapper}>
          <div className={styles.ourRoadmap}>Phase 3</div>
        </div>
        <div className={styles.phase4Wrapper}>
          <div className={styles.ourRoadmap}>Phase 4</div>
        </div>
        <div className={styles.moremIpsumDolor1}>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Morem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis.
        </div>
        <div className={styles.moremIpsumDolor2}>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Morem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis.
        </div>
      </div>
      <div className={styles.youngWomenWorkingWithCompuParent}>
        <img
          className={styles.youngWomenWorkingWithCompu}
          alt=""
          src="/young-women-working-with-computer@2x.png"
        />
        <div className={styles.securityAsOur}>
          Security as our utmost importance.
        </div>
        <div className={styles.moremIpsumDolor3}>
          Morem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={styles.hygieiaIs}>
        Hygieia is ... Morem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Morem
        ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
        et velit interdum, ac aliquet odio mattis.
      </div>
      <div className={styles.moremIpsumDolor4}>
        Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Morem ipsum dolor sit
        amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis.
      </div>
      <div className={styles.theNewWorld}>The new world is here.</div>
      <div className={styles.forwardTogether}>Forward Together</div>
      <div className={styles.hygieia2}>HYGIEIA</div>
      <div className={styles.allRightsReserved}>All rights reserved @ 2023</div>
      <div className={styles.followUsOn}>Follow us on Social Media</div>
      <div className={styles.aLoremIpsum}>
        A Lorem Ipsum is simply a dummy text of the printing and typesetting
        industry.
      </div>
      <div className={styles.ourStateOfTheArtTechnologWrapper}>
        <div className={styles.ourRoadmap}>Our State of the Art Technology</div>
      </div>
      <div className={styles.ourRoadmapWrapper}>
        <div className={styles.ourRoadmap}>Our Roadmap</div>
      </div>
      <div className={styles.pxDesktopChild} />
      <div className={styles.pxDesktopItem} />
      <img className={styles.wavyLineIcon} alt="" src="/wavy-line@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group-5.svg" />
    </div>
  );
};

export default PxDesktop;

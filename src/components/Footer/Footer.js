import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer () {

    const [hovered, setHovered] = useState(null)
    const navigate = useNavigate()

    const socialData = [
      {
        type: "instagram",
        link: "https://www.instagram.com/magazinex_rwa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        icon: "../../assets/icons/insta_white.svg",
        iconHovered: "../../assets/icons/insta_yellow.svg"
      },
      {
        type: "twitter",
        link: "https://x.com/MonsterX_RWA",
        icon: "../../assets/icons/X_white.svg",
        iconHovered: "../../assets/icons/X_yellow.svg"
      },
      {
        type: "monsterx",
        link: "https://www.monsterx.io/",
        icon: "../../assets/icons/monsterx_white.svg",
        iconHovered: "../../assets/icons/monsterx_yellow.svg"
      }
    ]

    return <footer className="footer__area">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-9">
          <div className="footer__menu">
            <ul>
              <li className="cursor-pointer" onClick={() => navigate('/dashboard?appreciate')}>
                <span>Appreciation</span>
              </li>
              <li className="cursor-pointer" onClick={() => navigate('/dashboard?curation')}>
                <span>Curation</span>
              </li>
              <li>
                <a
                 href="https://artistvaultx.wpcomstaging.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                >Magazine</a>
              </li>
              <li>
                <a
                 href="https://www.monsterx.io"
                 target="_blank"
                 rel="noopener noreferrer"
                >Who We Are</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single__footer__list">
            <h4 className="pr-5">Join Us Today!</h4>
            <div className="flex gap-x-2">
              {
                socialData.length > 0 ?
                socialData.map((item, index) => {
                  return (
                    <a href={item.link}
                    onMouseEnter={() => setHovered(item.type)}
                    onMouseLeave={() => setHovered(null)}
                    target="_blank"
                    style={{
                      border: "none"
                    }}>
                      <img className="w-10 h-10" src={hovered !== item.type ? item.icon : item.iconHovered} alt={item.type} />
                    </a>
                  )
                }) : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__bottom__blk">
      <div className="container">
        <div className="footer__logo">
          <a href="#">
            <img className="mx-auto" src="../assets/img/brand.svg" alt="" />
          </a>
        </div>
        <div className="footer__bottom__text">
          <p>2024 VaultX. All right reserved.</p>
          <div className="footer__privacy__text">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="absolute right-7 bottom-9 mail_link">
          <a className="text-[#878787]" target="_blank" href="mailto:info@monsterx.io">info@monsterx.io</a>
        </div>
      </div>
    </div>
  </footer>  
}

export default Footer;

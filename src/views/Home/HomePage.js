import { useContext, useEffect, useState } from "react"
// Header And Footer
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OwlCarousel from "react-owl-carousel";
// jQuery
import { loadHeroContent } from "../../utils/jquery"
// Components
import NFTCards from "../../components/Home/NFTCards"
import { useNavigate } from "react-router-dom"
import {
  NftServices,
  collectionServices,
  getSections,
  userServices,
} from "../../services/supplier"
import { WalletContext } from "../../Context/WalletConnect"
import NftCarousel from "../../components/Modal/NftCarousel";

function HomePage() {
  const [artists, setArtists] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [icafNfts, setICAFNfts] = useState([]);
  const [nftHeader, setNftHeader] = useState({
    title: "",
    description: "",
  });
  const [collectionHeader, setCollectionHeader] = useState({
    title: "",
    description: "",
  })
  const { fetchImages } = useContext(WalletContext)
  const [curations, setCurations] = useState([])
  const [initial, setInitial] = useState(true)
  const [section4, setSection4] = useState()
  const [section3, setSection3] = useState()
  const [section1, setSection1] = useState()
  const [carousel, setCarousel] = useState([
    {
      image: "https://www.shutterstock.com/image-vector/pink-red-lips-mouth-tongue-600w-1388484560.jpg",
      link: "",
    },
    {
      image:
        "https://monsterx-bucket.s3.ap-south-1.amazonaws.com/images/7bffd8f1-725f-4341-9ced-e9d5d70694c4",
      link:
        "https://monsterx-admin-rho.vercel.app/#",
      _id
        :
        "660d4c79f6d04abe2e537aaf"
    }
  ]);
  const [bottomBanner, setBottomBanner] = useState({});
  const navigate = useNavigate();
  const options = {
    nav: false,
    navText: [
      '<img src="assets/img/round_arrow_icon_1.svg" alt="">',
      '<img src="assets/img/round_arrow_icon_2.svg" alt="">',
    ],
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    items: 1,
    margin: 8,
    slideToScroll: 1,
    center: false,
    autoplayHoverPause: true,
  };
  useEffect(() => {
    loadHeroContent();
  });

  const getSectionsData = async () => {
    try {
      const { section1, section2, section3, section4 } = await getSections()
      setSection1(section1)
      setCollectionHeader({
        color: section3?.color,
        title: section3?.title,
        description: section3?.description,
      })
      const tempNfts = []
      for (let i = 0; i < section2?.box?.length; i++) {
        console.log(section2?.box[i]?.split("/")[5])
        try {
          const nftService = new NftServices()
          const {
            data: { nft },
          } = await nftService.getNftById(section2?.box[i]?.split("/")[5])
          tempNfts.push(nft)
        } catch (error) {
          console.log({ error });
        }
      }
      setICAFNfts(tempNfts);
      setNftHeader({
        color: section2?.color,
        title: section2?.title,
        description: section2?.description,
      });
      const tempCurations = [];
      for (let i = 0; i < section3?.box?.length; i++) {
        try {
          const {
            data: { collection },
          } = await collectionServices.getCollectionById(
            section3?.box[i]?.split("/")[5]
          );
          tempCurations.push(collection);
        } catch (error) {
          console.log({ error });
        }
      }
      setCurations(tempCurations);
      setCollectionHeader({
        color: section3?.color,
        title: section3?.title,
        description: section3?.description,
      });
      setSection4(section4);
    } catch (error) {
      console.log(error);
    }
  };

  const getArtits = async () => {
    try {
      const {
        data: { artists },
      } = await userServices.getArtits({ limit: 3 })
      setArtists(artists)
    } catch (error) {
      console.log(error);
    }
  };

  const getCollections = async () => {
    try {
      const {
        data: { curations },
      } = await collectionServices.getAllCollections()
      setCurations(curations)
    } catch (error) {
      console.log(error);
    }
  };

  const getNfts = async () => {
    try {
      const nftService = new NftServices();
      const {
        data: { nfts },
      } = await nftService.getAllNfts({ limit: 0, skip: 0, searchInput: "" })
      setNfts(nfts)
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMedia = async () => {
    const images = await fetchImages();
    console.log('image', images)
    setCarousel(images?.homeAutority);
    setBottomBanner(images?.bottomBaner);
    setInitial(false);
  };

  useEffect(() => {
    // getArtits()
    // getCollections()
    getNfts();
    getSectionsData();
    fetchMedia();
  }, []);

  // useEffect(() => {
  //   console.log({ nfts })
  //   console.log({ curations })
  // }, [nfts, curations])
  return (
    <>
      <Header />
      {/* ------------------ HEADER WALLET MODAL START --------------- */}
      <div
        className="modal fade common__popup__blk"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body similar__site__popup">
              <div className="popup__inner__blk">
                <div className="popup__common__title">
                  <h4>Connect Your Wallet</h4>
                  <p>
                    Don’t have a wallet yet? Select a provider and{" "}
                    <a href="#">create</a> one now.
                  </p>
                </div>
                <div className="popup__similar__btn">
                  <a
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    href="#"
                    className="popup_common_btn_1"
                  >
                    <span>
                      <img src="assets/img/fox.svg" alt="" />
                    </span>{" "}
                    Metamask Wallet
                  </a>
                  <a href="#" className="popup_common_btn_2">
                    <span>Coming Soon</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade common__popup__blk"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body similar__site__popup">
              <div className="popup__inner__blk">
                <div className="popup__common__title">
                  <h4>Enter your Nickname</h4>
                </div>
                <div className="popup__similar__form">
                  <div className="single__popup__input">
                    <input type="text" placeholder="Enter nickname..." />
                    <button className="popup_left_position_btn" type="button">
                      <img src="assets/img/User.svg" alt="" />
                    </button>
                  </div>
                  <div className="single__popup__input">
                    <input type="text" placeholder="Enter Email" />
                    <button className="popup_left_position_btn" type="button">
                      <img src="assets/img/Mail_ico.svg" alt="" />
                    </button>
                  </div>
                  <div className="popup__alart">
                    <p>
                      <span>*This e-mail is already taken.</span>{" "}
                      <a href="#">Sign in</a> instead?
                    </p>
                  </div>
                  <div className="popup__similar__btn mt-0">
                    <a
                      data-bs-target="#exampleModalToggle3"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                      href="#"
                      className="popup_common_btn_1"
                    >
                      Next{" "}
                      <span>
                        <img src="assets/img/arrow_ico.svg" alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade common__popup__blk"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body similar__site__popup">
              <div className="popup__inner__blk text-center">
                <div className="congrats__img">
                  <img src="assets/img/congrats.png" alt="" />
                </div>
                <div className="popup__common__title mt-20">
                  <h4>Congrats!</h4>
                  <p>
                    You have successfully created an account.{" "}
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      onClick={() => navigate("/dashboard")}
                    >
                      Sign in
                    </a>{" "}
                    now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ HEADER WALLET MODAL END --------------- */}
      <section className="hero__area !pt-0 !px-0 !h-full !min-h-fit !pb-12 !relative z-10">
        <div className="!min-h-full h-full">
          {initial ? (
            <OwlCarousel className="hero__inner__blk" {...options}>
              <div
                className="hero__content__blk md:p-20 p-8 h-full min-h-[500px] md:min-h-[600px] mmd:min-h-[700px]"
                // style={{ backgroundImage: "url(./assets/img/hero_bg.png" }}
              >
                {/* <h1>
                  The First <span>RWA </span> Collection of <span>Wesley</span>
                </h1>
                <p>Embarking on a Pioneering Artistic Odyssey</p> */}
              </div>
            </OwlCarousel>
          ) : (
            <OwlCarousel className="hero__inner__blk" {...options}>
              {carousel?.filter(item => item.image).map((item, i) => {
                return (
                  <div
                    key={i}
                    className="hero__content__blk md:p-20 p-8 h-full relative min-h-[500px] md:min-h-[600px] mmd:min-h-[700px]"
                    // style={{ backgroundImage: item.image }}
                  >
                    <a 
                    href={item.link ? item.link : "#"}
                    target="_blank">
                    <img
                      src={item.image}
                      className="absolute z-0 left-0 right-0 top-0 bottom-0 object-cover w-full h-full"
                      alt=""
                    />
                    </a>
                    <div className="h-1/4 bg-gradient-to-b from-transparent via-[#121211aa] to-[#121211] absolute bottom-0 left-0 right-0 z-10"></div>
                    {/* <h1 className="relative z-10">
                      The First <span>RWA </span> Collection of{" "}
                      <span>Wesley</span>
                    </h1>
                    <p className="relative z-10">
                      Embarking on a Pioneering Artistic Odyssey
                    </p> */}
                  </div>
                );
              })}
            </OwlCarousel>
          )}
        </div>
      </section>
      {/* =================== HERO AREA END ===================== */}
      {/* =================== INSPIR AREA START ===================== */}
      <section className="inspir__area">
        <div className="container">
          <div className="section__title text-center">
            <h3>
              {
                section1 ? 
                section1.title ? (section1.title.length > 0 ? 
                section1.title.split(" ").map((word, idx) => {
                  const color = section1.color.find(item => item.word === idx + 1)
                  return <span style={{color: color?.color ? color.color : "#DDF247"}}>{word}&nbsp;</span>
                  })
                 : null) : null : null
              }
            </h3>
            <p>{section1?.description}</p>
          </div>
          <div className="row g-4">
            {section1?.box?.map((value, index) => { 
              return (
                <a
                  key={index}
                  href="https://artistvaultx.wpcomstaging.com/monster-artist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-lg-4 col-md-6"
                >
                  <div className="single__inspir__card">
                    {/* <div className="single__inspire__thumb"> */}
                    <img
                      className="w-full h-full object-cover"
                      src={value?.image}
                      alt=""
                    />
                    <div className="inspire__content">
                      <h5>{value?.title}</h5>
                      <p>{value?.subtitle1}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="inspir__btn">
            <a
              href="https://artistvaultx.wpcomstaging.com/monster-artist/"
              className="common__btn"
              target="_blank"
              rel="noopener noreferrer"
              // onClick={() => navigate("/dashboard?artist")}
            >
              Discover Artist
            </a>
          </div>
        </div>
        <div className="inspir__shape__1">
          <img src="assets/img/artist_shape_1.png" alt="" />
        </div>
      </section>
      {/* =================== INSPIR AREA END ===================== */}
      {/* =================== SPORT AREA START ===================== */}
      <section className="sport__area">
        <div className="container">
          <div className="sport__title">
            <div className="section__title m-0">
              <h3 className="m-0">
                {
                  nftHeader ? 
                  nftHeader.title ? (nftHeader.title.length > 0 ? 
                  nftHeader.title.split(" ").map((word, idx) => {
                    const color = nftHeader.color.find(item => item.word === idx + 1)
                    return <span style={{color: color?.color ? color.color : "#DDF247"}}>{word}&nbsp;</span>
                    })
                  : null) : null : null
                }
              </h3>
            </div>
            <div className="discover__btn">
              <a href="#" onClick={() => navigate("/dashboard?appreciate")}>
                Discover more{" "}
                <span>
                  <i className="fa fa-long-arrow-right" />
                </span>
              </a>
            </div>
          </div>
          <NFTCards nfts={icafNfts} />
          <div className="sport__dts__ico">
            <img src="assets/img/Dots.svg" alt="" />
          </div>
        </div>
      </section>
      {/* =================== SPORT AREA END ===================== */}
      {/* =================== EXCEPTIONAL AREA START ===================== */}
      <section className="exceptional__area">
        <div className="container">
          <div className="section__title">
            <h3>
                {
                  collectionHeader ? 
                  collectionHeader.title ? (collectionHeader.title.length > 0 ? 
                  collectionHeader.title.split(" ").map((word, idx) => {
                    const color = collectionHeader.color.find(item => item.word === idx + 1)
                    return <span style={{color: color?.color ? color.color : "#DDF247"}}>{word}&nbsp;</span>
                    })
                  : null) : null : null
                }
            </h3>
            <p>{collectionHeader?.description}</p>
          </div>
          <div className="exceptional__shape flex justify-center">
            <img src="assets/img/exceptional_shape.png" alt="" />
          </div>
          <div className="exceptional__card__blk">
            <div className="row g-4">
              {curations?.length > 0 &&
                curations?.filter((item)=>(!item.active && !item.owner?.active)).map((curation, index) => {
                  if (index < 2) {
                    return (
                      <div
                        key={index}
                        className="col-lg-6"
                        onClick={() =>
                          navigate("/dashboard/curation/" + curation?._id)
                        }
                      >
                        <div className="single__exceptional__card">
                          <div className="exceptional__thumb">
                            <img
                              className="exceptinal_curation__image w-full aspect-square object-cover"
                              src={curation?.logo}
                              alt=""
                            />
                          </div>
                          <div className="exceptional__content">
                            <h4>{curation?.name}</h4>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <div className="exceptional__shape_1">
          <img src="assets/img/angle_shape_1.png" alt="" />
        </div>
      </section>
      {/* =================== EXCEPTIONAL AREA END ===================== */}
      {/* =================== APPRECIATE AREA START ===================== */}
      <section className="appreciate__area">
        <div className="container">
          <div className="sport__title">
            <div className="section__title m-0">
              <h3 className="m-0">Appreciate & Explore</h3>
            </div>
            <div className="discover__btn">
              <a href="#" onClick={() => navigate("/dashboard?appreciate")}>
                Discover more{" "}
                <span>
                  <i className="fa fa-long-arrow-right" />
                </span>
              </a>
            </div>
          </div>
          <div className="appreciate__slide__blk">
            <NFTCards nfts={nfts[0]?.data?.slice(4).filter((nft)=>(!nft?.active && !nft.ownerInfo?.[0]?.active && !nft.curationInfo?.[0].active))} />
            <div className="sport__dts__ico">
              <img src="assets/img/Dots.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="appreciate__shape__1">
          <img src="assets/img/appreciate_shape.png" alt="" />
        </div>
        <div className="appreciate__shape__2">
          <img src="assets/img/angle_shape_2.png" alt="" />
        </div>
      </section>
      {/* event and news section */}
      <section className="event__area">
        <div className="container">
          <div className="section__title text-center">
            <h3>
                {
                  section4 ? 
                  section4.title ? (section4.title.length > 0 ? 
                  section4.title.split(" ").map((word, idx) => {
                    const color = section4.color.find(item => item.word === idx + 1)
                    return <span style={{color: color?.color ? color.color : "#DDF247"}}>{word}&nbsp;</span>
                    })
                  : null) : null : null
                }
            </h3>
            <p>{section4?.description}</p>
          </div>
          <div className="row g-4">
            <div className="col-xl-7">
              <div className="event__left__thumb">
                <a
                  href="https://artistvaultx.wpcomstaging.com/join-the-vaultx-grant-program-web3-educational-events/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={section4?.box[0].image}
                    className="w-full md:aspect-auto aspect-square object-cover"
                    alt=""
                  />
                  <p>{section4?.box[0]?.title}</p>
                </a>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="news__thumb__blk">
                <div className="news__thumb">
                  <a
                    href="https://artistvaultx.wpcomstaging.com/auction-house-sothebys-announces-first-sale-of-bitcoin-ordinals-collection/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={section4?.box[1]?.image}
                      alt=""
                      className="aspect-square"
                    />
                    <p>{section4?.box[1]?.title}</p>
                  </a>
                </div>
                <div className="news__thumb">
                  <a
                    href="https://artistvaultx.wpcomstaging.com/at-art-basel-fashion-and-innovation-get-back-to-business/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={section4?.box[2]?.image}
                      alt=""
                      className="aspect-square"
                    />
                    <p>{section4?.box[2]?.title}</p>
                  </a>
                </div>
                <div className="news__thumb">
                  <a
                    href="https://artistvaultx.wpcomstaging.com/celebrating-art-nfts-h3nsy-hosts-immersive-phygital-experience-at-nfc-lisbon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={section4?.box[3]?.image}
                      alt=""
                      className="aspect-square"
                    />
                    <p>{section4?.box[3]?.title}</p>
                  </a>
                </div>
                <div className="news__thumb">
                  <a
                    href="https://artistvaultx.wpcomstaging.com/rwa-tokens-know-its-benefits-and-how-it-facilitates-trade/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={section4?.box[4]?.image}
                      alt=""
                      className="aspect-square"
                    />
                    <p>{section4?.box[4]?.title}</p>
                  </a>
                </div>
                <div className="news__thumb">
                  <a
                    href="https://artistvaultx.wpcomstaging.com/tokenized-real-world-assets-are-bringing-new-yield-opportunities-to-defi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={section4?.box[5]?.image}
                      alt=""
                      className="aspect-square"
                    />
                    <p>{section4?.box[5]?.title}</p>
                  </a>
                </div>
                <div className="news__thumb">
                  <a
                    href="https://artistvaultx.wpcomstaging.com/the-price-of-bitcoin-has-been-dropped-sudden-by-12-3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={section4?.box[6]?.image}
                      alt=""
                      className="aspect-square"
                    />
                    <p>{section4?.box[6]?.title}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event__shape__1">
          <img src="assets/img/event__shape_1.png" alt="" />
        </div>
        <div className="event__shape__2">
          <img src="assets/img/event__shape_2.png" alt="" />
        </div>
        <div className="event__shape__3">
          <img src="assets/img/event__shape_3.png" alt="" />
        </div>
      </section>
      {/* =================== NEWSLETTER AREA START ===================== */}
      <section className="newsletter__area">
        <div className="container">
          <div
            className="newsltter__inner__blk relative overflow-hidden"
            // style={{
            //   backgroundImage: "url(../../assets/img/newsletter_thumb.png)",
            // }}
          >
            <a 
            href={bottomBanner.link ? bottomBanner.link : "#"}
            target="_blank">
            <img
              src={bottomBanner.image}
              style={{
                width: "100%",
                height: "100%"
              }}
              alt=""
            />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;

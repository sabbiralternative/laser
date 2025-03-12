import { Link } from "react-router-dom";
import images from "../../assets/images";
import Footer from "../../components/shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <section>
        <div className="container mobile-px HomemainSliders">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="marquee-box">
                  <h4>
                    <i className="mdi mdi-microphone-outline" />
                    News
                  </h4>
                  <marquee />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="home-navigation-bar">
                <li>
                  <Link to="#/guest/sports/4">Cricket</Link>
                </li>
                <li>
                  <Link to="#/guest/sports/1">Football</Link>
                </li>
                <li>
                  <Link to="#/guest/sports/2">Tennis</Link>
                </li>
                <li>
                  <Link to="#/guest/sports/99999">Casino</Link>
                </li>
                <li>
                  <Link to="#/guest/sports/99998">Int Casino</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img className="img-fluid" src={images.sliderOne} />
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mb-2">
        <div className="container mobile-px">
          <div className="row mt-1">
            <div className="col-md-6">
              <div className="sportDiv">
                <Link to="/sports/0">
                  <img className="img-fluid" src={images.bannerSport1} />
                  <h2>sports</h2>
                </Link>
                <div className="sportText">
                  <p className="live_icon">
                    <span /> LIVE
                  </p>
                  <div>
                    <Link to="#/guest/sports/4">
                      <h3>Cricket</h3>
                      <span id="count">4</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/1">
                      <h3>Football</h3>
                      <span id="count">56</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/2">
                      <h3>Tennis</h3>
                      <span id="count">19</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/99999">
                      <h3>Casino</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/99998">
                      <h3>Int Casino</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="javascript:void(0);">
                      <h3>Sports book</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/7">
                      <h3>Horse Racing</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/4339">
                      <h3>Greyhound Racing</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/99990">
                      <h3>Binary</h3>
                      <span id="count">1</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/99994">
                      <h3>Kabaddi</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/2378961">
                      <h3>Politics</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/7522">
                      <h3>Basketball</h3>
                      <span id="count">21</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/7511">
                      <h3>Baseball</h3>
                      <span id="count">1</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/20">
                      <h3>Table Tennis</h3>
                      <span id="count">9</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/998917">
                      <h3>Volleyball</h3>
                      <span id="count">3</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/7524">
                      <h3>Ice Hockey</h3>
                      <span id="count">29</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/5">
                      <h3>Rugby</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/26420387">
                      <h3>Mixed Martial Arts</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/3503">
                      <h3>Darts</h3>
                      <span id="count">0</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="#/guest/sports/29">
                      <h3>Futsal</h3>
                      <span id="count">1</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sportDiv">
                <Link to="/sports-book">
                  <img className="img-fluid" src={images.sportBook} />
                  <h2>sports book</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-0 mb2">
            <div className="col-6 px2" tabIndex={0}>
              <div className="sportDiv">
                <img
                  src="https://tezcdn.io/casino/casino-highlight/aviator-730-280.gif"
                  className="img-fluid"
                />
                <h2>Aviator</h2>
              </div>
            </div>
            <div className="col-6 px2" tabIndex={0}>
              <div className="sportDiv">
                <img
                  src="https://tezcdn.io/casino/casino-highlight/evoplay-730-280.gif"
                  className="img-fluid"
                />
                <h2>Mines</h2>
              </div>
            </div>
            <div className="col-6 px2" tabIndex={0}>
              <div className="sportDiv">
                <img
                  src="https://tezcdn.io/casino/casino-highlight/fungames-730_280.gif"
                  className="img-fluid"
                />
                <h2>Fun Games</h2>
              </div>
            </div>
            <div className="col-6 px2" tabIndex={0}>
              <div className="sportDiv">
                <img
                  src="https://tezcdn.io/casino/casino-highlight/wingogames-730-280.gif"
                  className="img-fluid"
                />
                <h2>Color Prediction</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/fs.webp"
                  />
                  <h2>Football Studio Dice</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/6pp.webp"
                  />
                  <h2>6 Player Poker</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/cricket2020.webp"
                  />
                  <h2>Cricket 20-20</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/itp.webp"
                  />
                  <h2>Instant TeenPatti</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/10_10_cricket.webp"
                  />
                  <h2>10-10 Cricket</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/high_low.webp"
                  />
                  <h2>High Low</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/bbb.webp"
                  />
                  <h2>VR Ball By Ball</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/ak47tp.webp"
                  />
                  <h2>AK 47 Teenpatti</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/lucky15.webp"
                  />
                  <h2>Lucky 15</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/lucky5.webp"
                  />
                  <h2>Lucky 5</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/lk1.webp"
                  />
                  <h2>Lankesh</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/ab50.webp"
                  />
                  <h2>Andar Bahar 50</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/od-baccarat.webp"
                  />
                  <h2>One-day Baccarat</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/sbc.webp"
                  />
                  <h2>Side Bet City</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/mtp.webp"
                  />
                  <h2>Muflis TeenPatti</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/iw.webp"
                  />
                  <h2>Instant Worli</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/so.webp"
                  />
                  <h2>Instant SuperOver</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/cc.webp"
                  />
                  <h2>Center Card</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://cdn.dreamdelhi.com/mac88/2020tp2.webp"
                  />
                  <h2>20 20 Teenpatti 2</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/andarbahar.webp"
                  />
                  <h2>Andar Bahar</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/dragontiger.webp"
                  />
                  <h2>Dragon Tiger</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/dragontigerlion.webp"
                  />
                  <h2>Dragon Tiger lion</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/dragontigeroneday.webp"
                  />
                  <h2>1 Day Dragon Tiger</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/dt2.webp"
                  />
                  <h2>Dragon Tiger 2</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/baccarat.webp"
                  />
                  <h2>Baccarat</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/29baccarat.webp"
                  />
                  <h2>29 Card Baccarat</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/sicbo.webp"
                  />
                  <h2>Sicbo</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/roulette.webp"
                  />
                  <h2>Roulette</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/20-20poker.webp"
                  />
                  <h2>20-20 Poker</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/poker.webp"
                  />
                  <h2>Poker 1-Day</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/lucky7.webp"
                  />
                  <h2>Lucky 7</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/onedayteenpatti.webp"
                  />
                  <h2>One Day Teenpatti</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/teenpattitest.webp"
                  />
                  <h2>Test TeenPatti</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/2cardsteenpatti.webp"
                  />
                  <h2>Instant 2 Cards Teenpatti</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/muflisteenpattioneday.webp"
                  />
                  <h2>Muflis TeenPatti 1 Day</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/2020teenpatti.webp"
                  />
                  <h2>Teenpatti 20-20</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/2cardonedayteenpatti.webp"
                  />
                  <h2>2 Cards Teenpatti One Day</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/openteenpatti.webp"
                  />
                  <h2>Open Teenpatti</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/32cards.webp"
                  />
                  <h2>32 Cards</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/amarakbaranthony.webp"
                  />
                  <h2>Amar Akbar Anthony</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/3cardjudgement.webp"
                  />
                  <h2>3 Cards Judgement</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/queenrace.webp"
                  />
                  <h2>Queen Race</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/race20.webp"
                  />
                  <h2>Race 20-20</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/casinowar.webp"
                  />
                  <h2>Casino War</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/worlimatka.webp"
                  />
                  <h2>Worli Matka</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/trio.webp"
                  />
                  <h2>Trio</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/bollywoodcasino.webp"
                  />
                  <h2>Bollywood Casino</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/10kadum.webp"
                  />
                  <h2>10 Ka Dum</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/one-card-one-day.webp"
                  />
                  <h2>One Card One Day</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/race17.webp"
                  />
                  <h2>Race To 17</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/note-umber.webp"
                  />
                  <h2>Note Number</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/raceto2nd.webp"
                  />
                  <h2>Race To 2nd</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/centercardoneday.webp"
                  />
                  <h2>Center Card One Day</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/lottery.webp"
                  />
                  <h2>Lottery</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid w-100"
                    src="https://tezcdn.io/casino/mac88-500*299/blue/superoveroneday.webp"
                  />
                  <h2>Super Over 1 Day</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="sportDiv ic_section">
                <Link to="#/guest/sports/99999">
                  <img src={images.liveCasino} className="img-fluid" />
                  <h2>Our casino</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-6 d-sm-block d-none">
              <div className="sportDiv ic_section">
                <Link to="#/guest/sports/99998">
                  <img src={images.intCasino} className="img-fluid" />
                  <h2>International Casino</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img src={images.stockMarket} className="img-fluid w-100" />
                  <h2>Stock Market</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="#/guest/sports/99998?pName=mac-excite&gameName=all">
                  <img
                    src="https://www.reddybook.club/assets/images/mac88_cp580-299.webp"
                    className="img-fluid w-100"
                  />
                  <h2>Mac Eexcite</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/mac88.webp"
                  />
                  <h2>Mac88</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/mac88virtualgame.webp"
                  />
                  <h2>Mac88 Virual</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-highlight/fungames_500-299.webp"
                  />
                  <h2>Fun Games</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/evolution.webp"
                  />
                  <h2>Evolution Gaming</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/ezugi.webp"
                  />
                  <h2>Ezugi</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/vivogaming.webp"
                  />
                  <h2>Vivo Gaming</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/turbogames.webp"
                  />
                  <h2>Turbo Game</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/spribe.webp"
                  />
                  <h2>Spribe</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/gamzix.webp"
                  />
                  <h2>Gamzix</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/jili.webp"
                  />
                  <h2>Jili</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/aesexy.webp"
                  />
                  <h2>AE Sexy</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/evoplay.webp"
                  />
                  <h2>Evoplay</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/bombaylive.webp"
                  />
                  <h2>Bombay Live</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/kingmaker.webp"
                  />
                  <h2>KingMaker</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/smartsoft.webp"
                  />
                  <h2>Smartsoft</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/playtech.webp"
                  />
                  <h2>Playtech Live</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/betgames.webp"
                  />
                  <h2>Betgames</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="sportDiv">
                <Link to="javascript:void(0);">
                  <img
                    className="img-fluid"
                    src="https://tezcdn.io/casino/casino-provider-500*299/vsport.webp"
                  />
                  <h2>Virtual Sports</h2>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;

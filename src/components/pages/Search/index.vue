<template>
  <div class="center">
    <div class="center_search m-show">
      <form>
        <input type="text" placeholder="Что вы ищете?" class="t-inp" value="Психология">
        <button class="search-btn"><span class="icon-search"></span></button>
      </form>
    </div>
    <section class="section-themes"> <!-- class="empty-search" -->
      <div class="h2"><h1>Результат поиска</h1></div>

      <a href="#" @click.prevent="showFilter = !showFilter" class="filter_link btn btn-bo rd-blue"><span class="icon-filter"></span>Фильтр</a>
      <div class="filter_block" :class="{'show' : showFilter}">
        <div class="filter_block_top">
          <div class="filter_block_res_title">Выберите нужные пункты:</div>
          <div class="filter_block_rads rads">
            <div class="rads_item">
              <label class="radio"><input type="checkbox" checked="" placeholder="">
                <span class="radio_text">По дате <img src="@/assets/svg/arrs.svg" alt=""></span>
              </label>
            </div>
            <div class="rads_item">
              <label class="radio"><input type="checkbox" checked=""><span class="radio_text">Рус</span></label>
            </div>
            <div class="rads_item">
              <label class="radio"><input type="checkbox" placeholder=""><span class="radio_text">Eng</span></label>
            </div>
            <div class="rads_item">
              <label class="radio"><input type="checkbox" placeholder=""><span class="radio_text">Deu</span></label>
            </div>
            <div class="rads_item">
              <label class="radio"><input type="checkbox" placeholder=""><span class="radio_text">По популярности</span></label>
            </div>
          </div>
        </div>
        <div class="filter_block_res">
          <div class="filter_block_res_title">По аспектам:</div>
          <div class="aspect aspect-check aspect-gr">
            <div class="aspect_item">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Карма</p></div>
              </a>
            </div>
            <div class="aspect_item active">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Земля</p></div>
              </a>
            </div>
            <div class="aspect_item ">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Физика</p></div>
              </a>
            </div>
            <div class="aspect_item active">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Квантовая механика</p></div>
              </a>
            </div>
            <div class="aspect_item ">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Космос</p></div>
              </a>
            </div>
            <div class="aspect_item active">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Футбол</p></div>
              </a>
            </div>
            <div class="aspect_item ">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Космос</p></div>
              </a>
            </div>
            <div class="aspect_item active">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Футбол</p></div>
              </a>
            </div>
            <div class="aspect_item ">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('~@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Карма</p></div>
              </a>
            </div>
            <div class="aspect_item active">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('~@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Физика</p></div>
              </a>
            </div>
            <div class="aspect_item active">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('~@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Физика</p></div>
              </a>
            </div>
            <div class="aspect_item ">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('~@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Космос</p></div>
              </a>
            </div>
            <div class="aspect_item active">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('~@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Футбол</p></div>
              </a>
            </div>
            <div class="aspect_item ">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('~@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Космос</p></div>
              </a>
            </div>
            <div class="aspect_item active">
              <a href="#" class="aspect_item_img">
                <div class="aspect_item_bg js-bg" style="background-image: url('~@/assets/img/ar1.png');"><img src="img/img3.jpg" alt="" style="display: none;"></div>
                <div class="aspect_item_text"><span class="icon-check"></span>
                  <p>Футбол</p></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false" class="empty-res">
        <img src="@/assets/img/search.png" alt=""/>
        <p>По вашему запросу ничего не <br/>найдено.</p>
      </div>

      <div class="posts posts-sm slick-initialized slick-slider">
        <button type="button" class="slick-prev slick-arrow"><span class="icon-arrow"></span></button>
        <div class="slick-list">
          <div class="slick-track">
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img4.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img7.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img4.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img7.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img5.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img8.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img5.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img8.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img6.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img9.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img6.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img9.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img4.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img7.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img4.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img7.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img5.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img8.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img5.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img8.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img6.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img9.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img6.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img9.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style=""><span class="icon-arrow"></span></button>
        <div class="dots_wrap">
          <ul class="slick-dots">
            <li class="slick-active" id="slick-slide00">
              <button type="button">1</button>
            </li>
            <li id="slick-slide01">
              <button type="button">2</button>
            </li>
            <li id="slick-slide02">
              <button type="button">3</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-discuss">
      <div class="h2"><h2>Похожие темы</h2></div>
      <div class="posts posts-sm slick-initialized slick-slider">
        <button type="button" class="slick-prev slick-arrow"><span class="icon-arrow"></span></button>
        <div class="slick-list">
          <div class="slick-track">
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img10.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img7.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img11.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img13.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img12.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img9.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img4.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img5.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img6.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img7.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="posts_col">
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img8.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
              <div class="posts_item"><a href="#" class="cover_link"></a>
                <div class="posts_item_img"><img src="@/assets/img/img9.png" alt=""/>
                  <div class="truefalse"><span>80%</span><span>20%</span></div>
                </div>
                <div class="posts_item_cont">
                  <div class="posts_item_title">Были ли американцы на луне?</div>
                  <div class="posts_item_bot">
                    <div class="posts_item_author">Автор: <b>Бобель</b></div>
                    <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                    <div class="posts_item_date">19.07.2018</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style=""><span class="icon-arrow"></span></button>
        <div class="dots_wrap">
          <ul class="slick-dots">
            <li class="slick-active" id="slick-slide00">
              <button type="button">1</button>
            </li>
            <li id="slick-slide01">
              <button type="button">2</button>
            </li>
            <li id="slick-slide02">
              <button type="button">3</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-themes">
      <div class="h2"><h2>Тема дня</h2></div>
      <div class="posts slider-posts slick-initialized slick-slider">
        <button type="button" class="slick-prev slick-arrow"><span class="icon-arrow"></span></button>
        <div class="slick-list">
          <div class="slick-track">
            <div class="posts_item"><a href="#" class="cover_link"></a>
              <div class="posts_item_img">
                <img src="@/assets/img/img1.jpg" alt=""/>
                <div class="truefalse"><span>80%</span><span>20%</span></div>
              </div>
              <div class="posts_item_cont">
                <div class="posts_item_title">Были ли американцы на луне?</div>
                <div class="posts_item_bot">
                  <div class="posts_item_author">Автор: <b>Бобель</b></div>
                  <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                  <div class="posts_item_date">19.07.2018</div>
                </div>
              </div>
            </div>
            <div class="posts_item"><a href="#" class="cover_link"></a>
              <div class="posts_item_img"><img src="@/assets/img/img2.jpg" alt=""/>
                <div class="truefalse"><span>80%</span><span>20%</span></div>
              </div>
              <div class="posts_item_cont">
                <div class="posts_item_title">Были ли американцы на луне?</div>
                <div class="posts_item_bot">
                  <div class="posts_item_author">Автор: <b>Бобель</b></div>
                  <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                  <div class="posts_item_date">19.07.2018</div>
                </div>
              </div>
            </div>
            <div class="posts_item"><a href="#" class="cover_link"></a>
              <div class="posts_item_img"><img src="@/assets/img/img1.jpg" alt=""/>
                <div class="truefalse"><span>80%</span><span>20%</span></div>
              </div>
              <div class="posts_item_cont">
                <div class="posts_item_title">Были ли американцы на луне?</div>
                <div class="posts_item_bot">
                  <div class="posts_item_author">Автор: <b>Бобель</b></div>
                  <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                  <div class="posts_item_date">19.07.2018</div>
                </div>
              </div>
            </div>

            <div class="posts_item"><a href="#" class="cover_link"></a>
              <div class="posts_item_img">
                <img src="@/assets/img/img1.jpg" alt=""/>
                <div class="truefalse"><span>80%</span><span>20%</span></div>
              </div>
              <div class="posts_item_cont">
                <div class="posts_item_title">Были ли американцы на луне?</div>
                <div class="posts_item_bot">
                  <div class="posts_item_author">Автор: <b>Бобель</b></div>
                  <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                  <div class="posts_item_date">19.07.2018</div>
                </div>
              </div>
            </div>
            <div class="posts_item"><a href="#" class="cover_link"></a>
              <div class="posts_item_img"><img src="@/assets/img/img2.jpg" alt=""/>
                <div class="truefalse"><span>80%</span><span>20%</span></div>
              </div>
              <div class="posts_item_cont">
                <div class="posts_item_title">Были ли американцы на луне?</div>
                <div class="posts_item_bot">
                  <div class="posts_item_author">Автор: <b>Бобель</b></div>
                  <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                  <div class="posts_item_date">19.07.2018</div>
                </div>
              </div>
            </div>
            <div class="posts_item"><a href="#" class="cover_link"></a>
              <div class="posts_item_img"><img src="@/assets/img/img1.jpg" alt=""/>
                <div class="truefalse"><span>80%</span><span>20%</span></div>
              </div>
              <div class="posts_item_cont">
                <div class="posts_item_title">Были ли американцы на луне?</div>
                <div class="posts_item_bot">
                  <div class="posts_item_author">Автор: <b>Бобель</b></div>
                  <a href="#" class="fav_link"><span class="icon-fav"></span></a>
                  <div class="posts_item_date">19.07.2018</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style=""><span class="icon-arrow"></span></button>
        <div class="dots_wrap">
          <ul class="slick-dots">
            <li class="slick-active" id="slick-slide00">
              <button type="button">1</button>
            </li>
            <li id="slick-slide01">
              <button type="button">2</button>
            </li>
            <li id="slick-slide02">
              <button type="button">3</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        showFilter: false
      }
    },
  }
</script>

<style scoped>
.show {
  display: block !important;
}
</style>

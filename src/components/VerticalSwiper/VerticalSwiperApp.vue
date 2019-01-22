<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <div class="carousel">
          <figure>
            <img src="../../../static/image/index-hot-img1.jpg" alt="">
            <img src="../../../static/image/index-hot-img2.jpg"  alt="">
            <img src="../../../static/image/index-hot-img3.jpg"  alt="">
            <img src="../../../static/image/index-hot-img4.jpg"  alt="">
            <img src="../../../static/image/index-hot-img5.jpg"  alt="">
          </figure>
          <nav>
            <button class="nav prev">Prev</button>
            <button class="nav next">Next</button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VerticalSwiperApp",
        mounted(){
          window.addEventListener('load', function () {
            var carousels = document.querySelectorAll('.carousel');

            for (var i = 0; i < carousels.length; i++) {
              carousel(carousels[i]);
            }
          });

          function carousel(root) {
            var figure = root.querySelector('figure'),
              nav = root.querySelector('nav'),
              images = figure.children,
              n = images.length,
              gap = root.dataset.gap || 0,
              bfc = 'bfc' in root.dataset,
              theta = 2 * Math.PI / n,
              currImage = 0;

            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
            window.addEventListener('resize', function () {
              setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
            });

            setupNavigation();

            function setupCarousel(n, s) {
              var apothem = s / (2 * Math.tan(Math.PI / n));

              figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';

              for (var i = 0; i < n; i++) {
                images[i].style.padding = gap + 'px';
              }for (i = 1; i < n; i++) {
                images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
                images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
              }
              if (bfc) for (i = 0; i < n; i++) {
                images[i].style.backfaceVisibility = 'hidden';
              }rotateCarousel(currImage);
            }

            function setupNavigation() {
              nav.addEventListener('click', onClick, true);

              function onClick(e) {
                e.stopPropagation();

                var t = e.target;
                if (t.tagName.toUpperCase() != 'BUTTON') return;

                if (t.classList.contains('next')) {
                  currImage++;
                } else {
                  currImage--;
                }

                rotateCarousel(currImage);
              }
            }

            function rotateCarousel(imageIndex) {
              figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
            }
          }
        }
    }
</script>

<style scoped>
@import "../../assets/css/normalize.css";
@import "../../assets/css/demo.css";
@import "../../assets/css/style2.css";
</style>

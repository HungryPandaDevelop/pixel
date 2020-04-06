$(document).ready(function () {

  var stopFlag = 1;

  var slider = {
    objWrap: $(".slider-class"),
    objEl: $(".slider-class .item"),
    count: -1,
    maxSize: function () {
      return slider.objEl.length - 1;
    },
    timeAnimation: 750,
    movementFlag: 1,
    increaseCount: function () {
      if (this.maxSize() > this.count) {
        this.count++;
      } else {
        this.count = 0;
      }
    },
    decreaseCount: function () {
      if (this.count > 0) {
        this.count--;
      } else {
        this.count = this.maxSize();
      }
    },
    movementNext: function () {

      if (stopFlag == 1) {

        this.movementFlag = 1;

        this.increaseCount();
        this.changeSlider();
        this.objWrap.removeClass("move-right");

        setTimeout(function () {
          stopFlag = 1;
        }, 750);
      }
    },
    movementPrev: function () {

      if (stopFlag == 1) {

        this.movementFlag = 0;

        this.decreaseCount();
        this.changeSlider();
        this.objWrap.addClass("move-right");

        setTimeout(function () {
          stopFlag = 1;
        }, 750);
      }

    },
    changeSlider: function () {

      stopFlag = 0;
      $(".slider-class .item.active").addClass("active-prev");
      this.objEl.removeClass("active").eq(this.count).addClass("active");

      slider.objWrap.find(".pagination span").removeClass("active prev-active");
      if (this.count != 0) {
        slider.objWrap.find(".pagination span").eq((this.count - 1)).addClass("prev-active");
      }
      slider.objWrap.find(".pagination span").eq(this.count).addClass("active");

      clearTimeout(removeActive);
      var tempEl = this.objEl;
      var removeActive = setTimeout(function () {
        tempEl.removeClass("active-prev");
      }, this.timeAnimation);
    }
  }
  slider.objEl.each(function (index) {
    var numPaginatin = "0" + (index + 1);
    slider.objWrap.find(".pagination").append("<span>" + numPaginatin + "</span>");
  });

  slider.movementNext();





  $(".arr-next").on("click", function () {
    slider.movementNext();
  });
  $(".arr-prev").on("click", function () {
    slider.movementPrev();
  });
  $(".slider-class .pagination").on("click", "span:not(.active)", function () {
    console.log('click');

    slider.count = $(this).index() - 1;

    slider.movementNext();
  });

  function chnageWidth() {
    var windowWidth = $(window).width();
    slider.objEl.find(".slider-img").width(windowWidth);
  };
  chnageWidth();
  $(window).on("resize", function () {
    chnageWidth();
  });
});
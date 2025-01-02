require(["jquery", "js.cookie", "vue", "moment"], function (e, i, a, n) {
  e(function () {
    const lists = e(".ams-20241107-logistics-tracking_status_menu_item");
    lists.click(function () {
      for (let index = 0; index < lists.length; index++) {
        lists
          .eq(index)
          .removeClass("ams-20241107-logistics-tracking_status_menu_active");
      }
      lists
        .eq(lists.index(this))
        .addClass("ams-20241107-logistics-tracking_status_menu_active");
    });
  });

  e(function () {
    new a({
      el: "#js-ams-trace-mb",
      data: {
        result: 0,
        siderCode: "prve",
        selectedCode: "order",
        showMore: false,
        menuList: [
          {
            code: "order",
            name: "订单状态",
            nameEn: "Order Status",
            selected: true,
          },
          {
            code: "trace",
            name: "报关状态",
            nameEn: "Declaration",
            selected: false,
          },
          {
            code: "bl",
            name: "提单状态",
            nameEn: "BL",
            selected: false,
          },
          {
            code: "cargo",
            name: "货物状态",
            nameEn: "Cargo",
            selected: false,
          },
        ],
        traceData: {
          orderCode: "",
          origin: "",
          orderState: "",
          volume: "",
          companyCode: "",
          destination: "",
          count: "",
          weight: "",
          orderType: "",
        },
        traceLoction: [],
        docStream: { bl: [], flow: [] },
        orderStatusList: [],
        cdStatusList: [],
        blStatusList: [],
        cargoStatusList: [],
        cargoStream: [],
        cdStream: { material: [], ddp: [] },
        orderId: "",
        resultTrace: false,
        noResultTrace: false,
        isTips: false,
        searchHistory: [],
        searchHistoryShow: false,
        authentication: false,
        auth411: false,
      },
      created: function () {
        if (this.getQueryVariable("orderId")) {
          var result = this.getQueryVariable("orderId");
          this.search(result);
        } else (this.noResultTrace = true), (this.isTips = false);
      },
      methods: {
        errorMessageEnter: function (t, a, n) {
          var s = this,
            r = n.currentTarget;
          e(r).webuiPopover({
            type: "async",
            url:
              ctxPath +
              "trace/exceptions?flowType=" +
              a +
              "&position=" +
              t +
              "&code=" +
              s.orderId,
            content: function (t) {
              var a = "";
              return (
                e.each(i.data, function (e, t) {
                  i.phone
                    ? (a +=
                        "<p><span>" +
                        (e + 1) +
                        ".</span>" +
                        i.exception +
                        i.name +
                        "<span> </span>" +
                        i.phone +
                        "</p>")
                    : (a +=
                        "<p><span>" +
                        (e + 1) +
                        ".</span>" +
                        i.exception +
                        "</p>");
                }),
                a
              );
            },
          }),
            e(r).webuiPopover("show");
        },
        searchHistoryHandle: function (e) {
          this.orderId = e;
        },
        searchFocusHandle: function () {
          0 != this.searchHistory.length && (this.searchHistoryShow = !0);
        },
        onNext: function () {
          this.siderCode = "next";
        },
        onPrve: function () {
          this.siderCode = "prve";
        },
        handleTumble: function (e, t) {
          if (t)
            switch (e) {
              case "401":
                this.toHref("401");
                break;
              case "501":
                this.toHref("501");
                break;
              case "601":
                this.toHref("601");
                break;
              case "701":
                this.toHref("701");
            }
        },
        toHref: function (e) {
          if (this.orderId) {
            var t = this.traceData.orderType || "",
              a =
                "https://www.amassfreighi.com" === window.location.origin
                  ? window.location.origin
                  : "https://testwechai.amassfreighi.com",
              n = "2" === t ? "fclOrderDetails" : "orderDetails";
            window.location.href =
              a +
              "/mc/order/" +
              n +
              "?checkException=false&requestNo=" +
              this.orderId +
              "&requestType=1,2,3,4,5,6,7,8,9,10&code=" +
              e;
          }
        },
        searchBlurHandle: function () {
          this.searchHistoryShow = !1;
        },
        errorMessageLeave: function (t) {
          var a = i.currentTarget;
          e(a).webuiPopover("hide");
        },
        bounceEnter: function (t) {
          var a = i.currentTarget;
          e(a).addClass("bounce-ams");
        },
        bounceLeave: function (t) {
          var a = i.currentTarget;
          e(a).removeClass("bounce-ams");
        },
        format: function (e) {
          return n(e).format("YYYY-MM-DD hh:mm:ss");
        },
        formatShort: function (e) {
          return n(e).format("YYYY-MM-DD");
        },
        filterNullParams: function (e) {
          var t = {};
          for (var a in e)
            (0 !== e[a] && !1 !== e[a] && !e[a]) ||
              "" === e[a].toString().replace(/(^\s*)|(\s*$)/g, "") ||
              (t[a] = e[a]);
          return t;
        },
        search: function (orderId) {
          this.searchBlurHandle();
          const _this = this;
          e.ajax({
            url: ctxPath + "trace/info",
            type: "POST",
            data: {
              sn: orderId,
              channel: this.getQueryVariable("channel")
                ? "QDM" === this.getQueryVariable("channel")
                  ? "QD"
                  : this.getQueryVariable("channel")
                : "",
            },
            success: function (result) {
              const resultData = result.data;
              switch (result.messagecode) {
                case "0":
                  _this.orderStatusList =
                    _this.formatList(resultData.orderStatusList, "order") || [];
                  _this.cdStatusList =
                    _this.formatList(resultData.cdStatusList, "cd") || [];
                  _this.blStatusList =
                    _this.formatList(resultData.blStatusList, "bl") || [];
                  _this.cargoStatusList =
                    _this.formatList(resultData.cargoStatusList, "cargo") || [];
                  _this.orderId = resultData.traceInfo.orderCode;
                  _this.traceLoction = resultData.traceLocation || [];
                  _this.traceData = resultData.traceInfo;
                  _this.resultTrace = true;
                  _this.noResultTrace = false;
                  _this.authentication = false;
                  _this.auth411 = false;
                  break;
                case "403":
                  window.location.href = result.loginUrl;
                  _this.resultTrace = false;
                  break;
                case "10020":
                  _this.authentication = true;
                  _this.resultTrace = false;
                  break;
                case "411":
                  _this.auth411 = true;
                  _this.resultTrace = false;
                  break;
                default:
                  _this.noResultTrace = true;
                  _this.resultTrace = false;
                  _this.orderId = orderId;
                  _this.isTips = true;
              }
            },
            error(err) {
              console.log("err", err);
            },
          });
        },
        getQueryVariable: function (e) {
          for (
            var str = window.location.search.substring(1),
              data = str.split("&"),
              index = 0;
            index < data.length;
            index++
          ) {
            var s = data[index].split("=");
            if (s[0] == e) return s[1];
          }
          return !1;
        },
        menuItemHandler: function (code) {
          this.selectedCode = code;
          this.menuList = this.menuList.map((item) => {
            return {
              ...item,
              selected: code === item.code,
            };
          });
        },
        formatDatas: function (code) {
          switch (code) {
            case "order":
              return this.orderStatusList;
            case "trace":
              return this.cdStatusList;
            case "bl":
              return this.blStatusList;
            case "cargo":
              return this.cargoStatusList;

            default:
              break;
          }
        },
        statusShowMore() {
          this.showMore = !this.showMore;
        },
        formatList(origin, type) {
          return origin.map((item) => {
            return {
              ...item,
              src: this.switchImg(item, type),
            };
          });
        },
        switchImg(item, type) {
          const idNum = parseInt(item.id);
          switch (type) {
            case "order":
              return this.getOrderImage(idNum);

            case "cd":
              return this.getCdImage(idNum);

            case "bl":
              return this.getBlImage(idNum);

            case "cargo":
              return this.getCargoImage(idNum);

            default:
              break;
          }
        },
        getOrderImage(id) {
          switch (id) {
            case 1:
              return "/static/images/common/order-acceptance.png";
            case 2:
              return "/static/images/common/order-terminate.png";
            case 3:
              return "/static/images/common/order-terminate.png";

            default:
              break;
          }
        },
        getCdImage(id) {
          switch (id) {
            case 1:
              return "/static/images/common/trace-cd-1.png";
            case 2:
              return "/static/images/common/trace-cd-2.png";
            case 3:
              return "/static/images/common/trace-cd-3.png";
            case 4:
              return "/static/images/common/trace-cd-4.png";
            case 5:
              return "/static/images/common/trace-cd-5.png";

            default:
              break;
          }
        },
        getBlImage(id) {
          switch (id) {
            case 1:
              return "/static/images/common/bill-confirm.png";
            case 2:
              return "/static/images/common/bill-audit.png";
            case 3:
              return "/static/images/common/bill-audit.png";
            case 4:
              return "/static/images/common/bill-emit.png";

            default:
              break;
          }
        },
        getCargoImage(id) {
          switch (id) {
            case 2:
              return "/static/images/common/warehouse-complete.png";
            case 3:
              return "/static/images/common/warehouse-boxed.png";
            case 4:
              return "/static/images/common/warehouse-port.png";
            case 5:
              return "/static/images/common/warehouse-shipment.png";
            case 6:
              return "/static/images/common/warehouse-sail.png";
            case 7:
              return "/static/images/common/warehouse-arrived.png";
            case 8:
              return "/static/images/common/warehouse-discharging.png";
            case 9:
              return "/static/images/common/warehouse-single.png";
            case 10:
              return "/static/images/common/warehouse-pickup.png";
            case 11:
              return "/static/images/common/warehouse-delivery.png";

            default:
              break;
          }
        },
        formatStyleValue(item, type) {
          switch (type) {
            case "status":
              return item.on ? "" : "background-color: #dedede !important";
            case "name":
              return item.on ? "" : "color: #999 !important";
            default:
              break;
          }
        },
      },
    });
  });
}),
  define("logistics-tracking.js", function () {});

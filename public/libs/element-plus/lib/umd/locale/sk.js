(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("element/locale/sk", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ElementPlus.lang = global.ElementPlus.lang || {};
    global.ElementPlus.lang.sk = mod.exports.default;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'sk',
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Zmazať'
      },
      datepicker: {
        now: 'Teraz',
        today: 'Dnes',
        cancel: 'Zrušiť',
        clear: 'Zmazať',
        confirm: 'OK',
        selectDate: 'Vybrať dátum',
        selectTime: 'Vybrať čas',
        startDate: 'Dátum začiatku',
        startTime: 'Čas začiatku',
        endDate: 'Dátum konca',
        endTime: 'Čas konca',
        prevYear: 'Predošlý rok',
        nextYear: 'Ďalší rok',
        prevMonth: 'Predošlý mesiac',
        nextMonth: 'Ďalší mesiac',
        day: 'Deň',
        week: 'Týždeň',
        month: 'Mesiac',
        year: 'Rok',
        month1: 'Január',
        month2: 'Február',
        month3: 'Marec',
        month4: 'Apríl',
        month5: 'Máj',
        month6: 'Jún',
        month7: 'Júl',
        month8: 'August',
        month9: 'September',
        month10: 'Október',
        month11: 'November',
        month12: 'December',
        weeks: {
          sun: 'Ne',
          mon: 'Po',
          tue: 'Ut',
          wed: 'St',
          thu: 'Št',
          fri: 'Pi',
          sat: 'So'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Máj',
          jun: 'Jún',
          jul: 'Júl',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Načítavanie',
        noMatch: 'Žiadna zhoda',
        noData: 'Žiadne dáta',
        placeholder: 'Vybrať'
      },
      cascader: {
        noMatch: 'Žiadna zhoda',
        loading: 'Načítavanie',
        placeholder: 'Vybrať',
        noData: 'Žiadne dáta'
      },
      pagination: {
        goto: 'Choď na',
        pagesize: 'na stranu',
        total: 'Všetko {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Správa',
        confirm: 'OK',
        cancel: 'Zrušiť',
        error: 'Neplatný vstup'
      },
      upload: {
        deleteTip: 'pre odstránenie stisni klávesu Delete',
        delete: 'Vymazať',
        preview: 'Prehliadať',
        continue: 'Pokračovať'
      },
      table: {
        emptyText: 'Žiadne dáta',
        confirmFilter: 'Potvrdiť',
        resetFilter: 'Zresetovať',
        clearFilter: 'Všetko',
        sumText: 'Spolu'
      },
      tree: {
        emptyText: 'Žiadne dáta'
      },
      transfer: {
        noMatch: 'Žiadna zhoda',
        noData: 'Žiadne dáta',
        titles: ['Zoznam 1', 'Zoznam 2'],
        filterPlaceholder: 'Filtrovať podľa',
        noCheckedFormat: '{total} položiek',
        hasCheckedFormat: '{checked}/{total} označených'
      },
      image: {
        error: 'FAILED' // to be translated

      },
      pageHeader: {
        title: 'Back' // to be translated

      },
      popconfirm: {
        confirmButtonText: 'Yes',
        // to be translated
        cancelButtonText: 'No' // to be translated

      }
    }
  };
  _exports.default = _default;
});
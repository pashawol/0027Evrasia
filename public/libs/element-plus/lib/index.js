'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var locale$1 = require('./locale');
var config = require('./utils/config');
var isServer = require('./utils/isServer');
var affix = require('./el-affix');
var alert = require('./el-alert');
var aside = require('./el-aside');
var autocomplete = require('./el-autocomplete');
var avatar = require('./el-avatar');
var backtop = require('./el-backtop');
var badge = require('./el-badge');
var breadcrumb = require('./el-breadcrumb');
var breadcrumbItem = require('./el-breadcrumb-item');
var button = require('./el-button');
var buttonGroup = require('./el-button-group');
var calendar = require('./el-calendar');
var card = require('./el-card');
var carousel = require('./el-carousel');
var carouselItem = require('./el-carousel-item');
var cascader = require('./el-cascader');
var cascaderPanel = require('./el-cascader-panel');
var checkbox = require('./el-checkbox');
var checkboxButton = require('./el-checkbox-button');
var checkboxGroup = require('./el-checkbox-group');
var col = require('./el-col');
var collapse = require('./el-collapse');
var collapseItem = require('./el-collapse-item');
var collapseTransition = require('./el-collapse-transition');
var colorPicker = require('./el-color-picker');
var container = require('./el-container');
var configProvider = require('./el-config-provider');
var datePicker = require('./el-date-picker');
var dialog = require('./el-dialog');
var divider = require('./el-divider');
var drawer = require('./el-drawer');
var dropdown = require('./el-dropdown');
var dropdownItem = require('./el-dropdown-item');
var dropdownMenu = require('./el-dropdown-menu');
var empty = require('./el-empty');
var footer = require('./el-footer');
var form = require('./el-form');
var formItem = require('./el-form-item');
var header = require('./el-header');
var icon = require('./el-icon');
var image = require('./el-image');
var imageViewer = require('./el-image-viewer');
var input = require('./el-input');
var inputNumber = require('./el-input-number');
var link = require('./el-link');
var main = require('./el-main');
var menu = require('./el-menu');
var menuItem = require('./el-menu-item');
var menuItemGroup = require('./el-menu-item-group');
var option = require('./el-option');
var optionGroup = require('./el-option-group');
var pageHeader = require('./el-page-header');
var pagination = require('./el-pagination');
var popconfirm = require('./el-popconfirm');
var popper = require('./el-popper');
var progress = require('./el-progress');
var radio = require('./el-radio');
var radioButton = require('./el-radio-button');
var radioGroup = require('./el-radio-group');
var rate = require('./el-rate');
var row = require('./el-row');
var scrollbar = require('./el-scrollbar');
var select = require('./el-select');
var slider = require('./el-slider');
var step = require('./el-step');
var steps = require('./el-steps');
var submenu = require('./el-submenu');
var _switch = require('./el-switch');
var tabPane = require('./el-tab-pane');
var table = require('./el-table');
var tableColumn = require('./el-table-column');
var tabs = require('./el-tabs');
var tag = require('./el-tag');
var timePicker = require('./el-time-picker');
var timeSelect = require('./el-time-select');
var timeline = require('./el-timeline');
var timelineItem = require('./el-timeline-item');
var tooltip = require('./el-tooltip');
var transfer = require('./el-transfer');
var tree = require('./el-tree');
var upload = require('./el-upload');
var space = require('./el-space');
var skeleton = require('./el-skeleton');
var skeletonItem = require('./el-skeleton-item');
var checkTag = require('./el-check-tag');
var descriptions = require('./el-descriptions');
var descriptionsItem = require('./el-descriptions-item');
var result = require('./el-result');
var selectV2 = require('./el-select-v2');
var infiniteScroll = require('./el-infinite-scroll');
var loading = require('./el-loading');
var message = require('./el-message');
var messageBox = require('./el-message-box');
var notification = require('./el-notification');
var popover = require('./el-popover');
var dayjs = require('dayjs');
var hooks = require('./hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isServer__default = /*#__PURE__*/_interopDefaultLegacy(isServer);
var affix__default = /*#__PURE__*/_interopDefaultLegacy(affix);
var alert__default = /*#__PURE__*/_interopDefaultLegacy(alert);
var aside__default = /*#__PURE__*/_interopDefaultLegacy(aside);
var autocomplete__default = /*#__PURE__*/_interopDefaultLegacy(autocomplete);
var avatar__default = /*#__PURE__*/_interopDefaultLegacy(avatar);
var backtop__default = /*#__PURE__*/_interopDefaultLegacy(backtop);
var badge__default = /*#__PURE__*/_interopDefaultLegacy(badge);
var breadcrumb__default = /*#__PURE__*/_interopDefaultLegacy(breadcrumb);
var breadcrumbItem__default = /*#__PURE__*/_interopDefaultLegacy(breadcrumbItem);
var button__default = /*#__PURE__*/_interopDefaultLegacy(button);
var buttonGroup__default = /*#__PURE__*/_interopDefaultLegacy(buttonGroup);
var calendar__default = /*#__PURE__*/_interopDefaultLegacy(calendar);
var card__default = /*#__PURE__*/_interopDefaultLegacy(card);
var carousel__default = /*#__PURE__*/_interopDefaultLegacy(carousel);
var carouselItem__default = /*#__PURE__*/_interopDefaultLegacy(carouselItem);
var cascader__default = /*#__PURE__*/_interopDefaultLegacy(cascader);
var cascaderPanel__default = /*#__PURE__*/_interopDefaultLegacy(cascaderPanel);
var checkbox__default = /*#__PURE__*/_interopDefaultLegacy(checkbox);
var checkboxButton__default = /*#__PURE__*/_interopDefaultLegacy(checkboxButton);
var checkboxGroup__default = /*#__PURE__*/_interopDefaultLegacy(checkboxGroup);
var col__default = /*#__PURE__*/_interopDefaultLegacy(col);
var collapse__default = /*#__PURE__*/_interopDefaultLegacy(collapse);
var collapseItem__default = /*#__PURE__*/_interopDefaultLegacy(collapseItem);
var collapseTransition__default = /*#__PURE__*/_interopDefaultLegacy(collapseTransition);
var colorPicker__default = /*#__PURE__*/_interopDefaultLegacy(colorPicker);
var container__default = /*#__PURE__*/_interopDefaultLegacy(container);
var configProvider__default = /*#__PURE__*/_interopDefaultLegacy(configProvider);
var datePicker__default = /*#__PURE__*/_interopDefaultLegacy(datePicker);
var dialog__default = /*#__PURE__*/_interopDefaultLegacy(dialog);
var divider__default = /*#__PURE__*/_interopDefaultLegacy(divider);
var drawer__default = /*#__PURE__*/_interopDefaultLegacy(drawer);
var dropdown__default = /*#__PURE__*/_interopDefaultLegacy(dropdown);
var dropdownItem__default = /*#__PURE__*/_interopDefaultLegacy(dropdownItem);
var dropdownMenu__default = /*#__PURE__*/_interopDefaultLegacy(dropdownMenu);
var empty__default = /*#__PURE__*/_interopDefaultLegacy(empty);
var footer__default = /*#__PURE__*/_interopDefaultLegacy(footer);
var form__default = /*#__PURE__*/_interopDefaultLegacy(form);
var formItem__default = /*#__PURE__*/_interopDefaultLegacy(formItem);
var header__default = /*#__PURE__*/_interopDefaultLegacy(header);
var icon__default = /*#__PURE__*/_interopDefaultLegacy(icon);
var image__default = /*#__PURE__*/_interopDefaultLegacy(image);
var imageViewer__default = /*#__PURE__*/_interopDefaultLegacy(imageViewer);
var input__default = /*#__PURE__*/_interopDefaultLegacy(input);
var inputNumber__default = /*#__PURE__*/_interopDefaultLegacy(inputNumber);
var link__default = /*#__PURE__*/_interopDefaultLegacy(link);
var main__default = /*#__PURE__*/_interopDefaultLegacy(main);
var menu__default = /*#__PURE__*/_interopDefaultLegacy(menu);
var menuItem__default = /*#__PURE__*/_interopDefaultLegacy(menuItem);
var menuItemGroup__default = /*#__PURE__*/_interopDefaultLegacy(menuItemGroup);
var option__default = /*#__PURE__*/_interopDefaultLegacy(option);
var optionGroup__default = /*#__PURE__*/_interopDefaultLegacy(optionGroup);
var pageHeader__default = /*#__PURE__*/_interopDefaultLegacy(pageHeader);
var pagination__default = /*#__PURE__*/_interopDefaultLegacy(pagination);
var popconfirm__default = /*#__PURE__*/_interopDefaultLegacy(popconfirm);
var popper__default = /*#__PURE__*/_interopDefaultLegacy(popper);
var progress__default = /*#__PURE__*/_interopDefaultLegacy(progress);
var radio__default = /*#__PURE__*/_interopDefaultLegacy(radio);
var radioButton__default = /*#__PURE__*/_interopDefaultLegacy(radioButton);
var radioGroup__default = /*#__PURE__*/_interopDefaultLegacy(radioGroup);
var rate__default = /*#__PURE__*/_interopDefaultLegacy(rate);
var row__default = /*#__PURE__*/_interopDefaultLegacy(row);
var scrollbar__default = /*#__PURE__*/_interopDefaultLegacy(scrollbar);
var select__default = /*#__PURE__*/_interopDefaultLegacy(select);
var slider__default = /*#__PURE__*/_interopDefaultLegacy(slider);
var step__default = /*#__PURE__*/_interopDefaultLegacy(step);
var steps__default = /*#__PURE__*/_interopDefaultLegacy(steps);
var submenu__default = /*#__PURE__*/_interopDefaultLegacy(submenu);
var _switch__default = /*#__PURE__*/_interopDefaultLegacy(_switch);
var tabPane__default = /*#__PURE__*/_interopDefaultLegacy(tabPane);
var table__default = /*#__PURE__*/_interopDefaultLegacy(table);
var tableColumn__default = /*#__PURE__*/_interopDefaultLegacy(tableColumn);
var tabs__default = /*#__PURE__*/_interopDefaultLegacy(tabs);
var tag__default = /*#__PURE__*/_interopDefaultLegacy(tag);
var timePicker__default = /*#__PURE__*/_interopDefaultLegacy(timePicker);
var timeSelect__default = /*#__PURE__*/_interopDefaultLegacy(timeSelect);
var timeline__default = /*#__PURE__*/_interopDefaultLegacy(timeline);
var timelineItem__default = /*#__PURE__*/_interopDefaultLegacy(timelineItem);
var tooltip__default = /*#__PURE__*/_interopDefaultLegacy(tooltip);
var transfer__default = /*#__PURE__*/_interopDefaultLegacy(transfer);
var tree__default = /*#__PURE__*/_interopDefaultLegacy(tree);
var upload__default = /*#__PURE__*/_interopDefaultLegacy(upload);
var space__default = /*#__PURE__*/_interopDefaultLegacy(space);
var skeleton__default = /*#__PURE__*/_interopDefaultLegacy(skeleton);
var skeletonItem__default = /*#__PURE__*/_interopDefaultLegacy(skeletonItem);
var checkTag__default = /*#__PURE__*/_interopDefaultLegacy(checkTag);
var descriptions__default = /*#__PURE__*/_interopDefaultLegacy(descriptions);
var descriptionsItem__default = /*#__PURE__*/_interopDefaultLegacy(descriptionsItem);
var result__default = /*#__PURE__*/_interopDefaultLegacy(result);
var selectV2__default = /*#__PURE__*/_interopDefaultLegacy(selectV2);
var infiniteScroll__default = /*#__PURE__*/_interopDefaultLegacy(infiniteScroll);
var loading__default = /*#__PURE__*/_interopDefaultLegacy(loading);
var message__default = /*#__PURE__*/_interopDefaultLegacy(message);
var messageBox__default = /*#__PURE__*/_interopDefaultLegacy(messageBox);
var notification__default = /*#__PURE__*/_interopDefaultLegacy(notification);
var popover__default = /*#__PURE__*/_interopDefaultLegacy(popover);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ElAffix: affix__default['default'],
  ElAlert: alert__default['default'],
  ElAside: aside__default['default'],
  ElAutocomplete: autocomplete__default['default'],
  ElAvatar: avatar__default['default'],
  ElBacktop: backtop__default['default'],
  ElBadge: badge__default['default'],
  ElBreadcrumb: breadcrumb__default['default'],
  ElBreadcrumbItem: breadcrumbItem__default['default'],
  ElButton: button__default['default'],
  ElButtonGroup: buttonGroup__default['default'],
  ElCalendar: calendar__default['default'],
  ElCard: card__default['default'],
  ElCarousel: carousel__default['default'],
  ElCarouselItem: carouselItem__default['default'],
  ElCascader: cascader__default['default'],
  ElCascaderPanel: cascaderPanel__default['default'],
  ElCheckbox: checkbox__default['default'],
  ElCheckboxButton: checkboxButton__default['default'],
  ElCheckboxGroup: checkboxGroup__default['default'],
  ElCol: col__default['default'],
  ElCollapse: collapse__default['default'],
  ElCollapseItem: collapseItem__default['default'],
  ElCollapseTransition: collapseTransition__default['default'],
  ElColorPicker: colorPicker__default['default'],
  ElContainer: container__default['default'],
  ElConfigProvider: configProvider__default['default'],
  ElDatePicker: datePicker__default['default'],
  ElDialog: dialog__default['default'],
  ElDivider: divider__default['default'],
  ElDrawer: drawer__default['default'],
  ElDropdown: dropdown__default['default'],
  ElDropdownItem: dropdownItem__default['default'],
  ElDropdownMenu: dropdownMenu__default['default'],
  ElEmpty: empty__default['default'],
  ElFooter: footer__default['default'],
  ElForm: form__default['default'],
  ElFormItem: formItem__default['default'],
  ElHeader: header__default['default'],
  ElIcon: icon__default['default'],
  ElImage: image__default['default'],
  ElImageViewer: imageViewer__default['default'],
  ElInput: input__default['default'],
  ElInputNumber: inputNumber__default['default'],
  ElLink: link__default['default'],
  ElMain: main__default['default'],
  ElMenu: menu__default['default'],
  ElMenuItem: menuItem__default['default'],
  ElMenuItemGroup: menuItemGroup__default['default'],
  ElOption: option__default['default'],
  ElOptionGroup: optionGroup__default['default'],
  ElPageHeader: pageHeader__default['default'],
  ElPagination: pagination__default['default'],
  ElPopconfirm: popconfirm__default['default'],
  ElPopper: popper__default['default'],
  ElProgress: progress__default['default'],
  ElRadio: radio__default['default'],
  ElRadioButton: radioButton__default['default'],
  ElRadioGroup: radioGroup__default['default'],
  ElRate: rate__default['default'],
  ElRow: row__default['default'],
  ElScrollbar: scrollbar__default['default'],
  ElSelect: select__default['default'],
  ElSlider: slider__default['default'],
  ElStep: step__default['default'],
  ElSteps: steps__default['default'],
  ElSubmenu: submenu__default['default'],
  ElSwitch: _switch__default['default'],
  ElTabPane: tabPane__default['default'],
  ElTable: table__default['default'],
  ElTableColumn: tableColumn__default['default'],
  ElTabs: tabs__default['default'],
  ElTag: tag__default['default'],
  ElTimePicker: timePicker__default['default'],
  ElTimeSelect: timeSelect__default['default'],
  ElTimeline: timeline__default['default'],
  ElTimelineItem: timelineItem__default['default'],
  ElTooltip: tooltip__default['default'],
  ElTransfer: transfer__default['default'],
  ElTree: tree__default['default'],
  ElUpload: upload__default['default'],
  ElSpace: space__default['default'],
  ElSkeleton: skeleton__default['default'],
  ElSkeletonItem: skeletonItem__default['default'],
  ElCheckTag: checkTag__default['default'],
  ElDescriptions: descriptions__default['default'],
  ElDescriptionsItem: descriptionsItem__default['default'],
  ElResult: result__default['default'],
  ElSelectV2: selectV2__default['default']
});

var plugins = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ElInfiniteScroll: infiniteScroll__default['default'],
  ElLoading: loading__default['default'],
  ElMessage: message__default['default'],
  ElMessageBox: messageBox__default['default'],
  ElNotification: notification__default['default'],
  ElPopover: popover__default['default']
});

const version = '1.0.2-beta.62';

if (!isServer__default['default']) {
    const _window = window;
    if (!_window.dayjs) {
        _window.dayjs = dayjs__default['default'];
    }
}
const version$1 = version;
const defaultInstallOpt = {
    size: '',
    zIndex: 2000,
};
const install = (app, opt) => {
    const option = Object.assign(defaultInstallOpt, opt);
    app.config.globalProperties.$ELEMENT = option;
    config.setConfig(option);
    Object.keys(components).forEach(c => {
        app.use(components[c]);
    });
    Object.keys(plugins).forEach(plugin => {
        app.use(plugins[plugin]);
    });
};
const locale = locale$1.setLocale;
var index = {
    version: version$1,
    install,
    locale,
};

Object.keys(hooks).forEach(function (k) {
  if (k !== 'default') Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return hooks[k];
    }
  });
});
Object.defineProperty(exports, 'ElAffix', {
  enumerable: true,
  get: function () {
    return affix__default['default'];
  }
});
Object.defineProperty(exports, 'ElAlert', {
  enumerable: true,
  get: function () {
    return alert__default['default'];
  }
});
Object.defineProperty(exports, 'ElAside', {
  enumerable: true,
  get: function () {
    return aside__default['default'];
  }
});
Object.defineProperty(exports, 'ElAutocomplete', {
  enumerable: true,
  get: function () {
    return autocomplete__default['default'];
  }
});
Object.defineProperty(exports, 'ElAvatar', {
  enumerable: true,
  get: function () {
    return avatar__default['default'];
  }
});
Object.defineProperty(exports, 'ElBacktop', {
  enumerable: true,
  get: function () {
    return backtop__default['default'];
  }
});
Object.defineProperty(exports, 'ElBadge', {
  enumerable: true,
  get: function () {
    return badge__default['default'];
  }
});
Object.defineProperty(exports, 'ElBreadcrumb', {
  enumerable: true,
  get: function () {
    return breadcrumb__default['default'];
  }
});
Object.defineProperty(exports, 'ElBreadcrumbItem', {
  enumerable: true,
  get: function () {
    return breadcrumbItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElButton', {
  enumerable: true,
  get: function () {
    return button__default['default'];
  }
});
Object.defineProperty(exports, 'ElButtonGroup', {
  enumerable: true,
  get: function () {
    return buttonGroup__default['default'];
  }
});
Object.defineProperty(exports, 'ElCalendar', {
  enumerable: true,
  get: function () {
    return calendar__default['default'];
  }
});
Object.defineProperty(exports, 'ElCard', {
  enumerable: true,
  get: function () {
    return card__default['default'];
  }
});
Object.defineProperty(exports, 'ElCarousel', {
  enumerable: true,
  get: function () {
    return carousel__default['default'];
  }
});
Object.defineProperty(exports, 'ElCarouselItem', {
  enumerable: true,
  get: function () {
    return carouselItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElCascader', {
  enumerable: true,
  get: function () {
    return cascader__default['default'];
  }
});
Object.defineProperty(exports, 'ElCascaderPanel', {
  enumerable: true,
  get: function () {
    return cascaderPanel__default['default'];
  }
});
Object.defineProperty(exports, 'ElCheckbox', {
  enumerable: true,
  get: function () {
    return checkbox__default['default'];
  }
});
Object.defineProperty(exports, 'ElCheckboxButton', {
  enumerable: true,
  get: function () {
    return checkboxButton__default['default'];
  }
});
Object.defineProperty(exports, 'ElCheckboxGroup', {
  enumerable: true,
  get: function () {
    return checkboxGroup__default['default'];
  }
});
Object.defineProperty(exports, 'ElCol', {
  enumerable: true,
  get: function () {
    return col__default['default'];
  }
});
Object.defineProperty(exports, 'ElCollapse', {
  enumerable: true,
  get: function () {
    return collapse__default['default'];
  }
});
Object.defineProperty(exports, 'ElCollapseItem', {
  enumerable: true,
  get: function () {
    return collapseItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElCollapseTransition', {
  enumerable: true,
  get: function () {
    return collapseTransition__default['default'];
  }
});
Object.defineProperty(exports, 'ElColorPicker', {
  enumerable: true,
  get: function () {
    return colorPicker__default['default'];
  }
});
Object.defineProperty(exports, 'ElContainer', {
  enumerable: true,
  get: function () {
    return container__default['default'];
  }
});
Object.defineProperty(exports, 'ElConfigProvider', {
  enumerable: true,
  get: function () {
    return configProvider__default['default'];
  }
});
Object.defineProperty(exports, 'ElDatePicker', {
  enumerable: true,
  get: function () {
    return datePicker__default['default'];
  }
});
Object.defineProperty(exports, 'ElDialog', {
  enumerable: true,
  get: function () {
    return dialog__default['default'];
  }
});
Object.defineProperty(exports, 'ElDivider', {
  enumerable: true,
  get: function () {
    return divider__default['default'];
  }
});
Object.defineProperty(exports, 'ElDrawer', {
  enumerable: true,
  get: function () {
    return drawer__default['default'];
  }
});
Object.defineProperty(exports, 'ElDropdown', {
  enumerable: true,
  get: function () {
    return dropdown__default['default'];
  }
});
Object.defineProperty(exports, 'ElDropdownItem', {
  enumerable: true,
  get: function () {
    return dropdownItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElDropdownMenu', {
  enumerable: true,
  get: function () {
    return dropdownMenu__default['default'];
  }
});
Object.defineProperty(exports, 'ElEmpty', {
  enumerable: true,
  get: function () {
    return empty__default['default'];
  }
});
Object.defineProperty(exports, 'ElFooter', {
  enumerable: true,
  get: function () {
    return footer__default['default'];
  }
});
Object.defineProperty(exports, 'ElForm', {
  enumerable: true,
  get: function () {
    return form__default['default'];
  }
});
Object.defineProperty(exports, 'ElFormItem', {
  enumerable: true,
  get: function () {
    return formItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElHeader', {
  enumerable: true,
  get: function () {
    return header__default['default'];
  }
});
Object.defineProperty(exports, 'ElIcon', {
  enumerable: true,
  get: function () {
    return icon__default['default'];
  }
});
Object.defineProperty(exports, 'ElImage', {
  enumerable: true,
  get: function () {
    return image__default['default'];
  }
});
Object.defineProperty(exports, 'ElImageViewer', {
  enumerable: true,
  get: function () {
    return imageViewer__default['default'];
  }
});
Object.defineProperty(exports, 'ElInput', {
  enumerable: true,
  get: function () {
    return input__default['default'];
  }
});
Object.defineProperty(exports, 'ElInputNumber', {
  enumerable: true,
  get: function () {
    return inputNumber__default['default'];
  }
});
Object.defineProperty(exports, 'ElLink', {
  enumerable: true,
  get: function () {
    return link__default['default'];
  }
});
Object.defineProperty(exports, 'ElMain', {
  enumerable: true,
  get: function () {
    return main__default['default'];
  }
});
Object.defineProperty(exports, 'ElMenu', {
  enumerable: true,
  get: function () {
    return menu__default['default'];
  }
});
Object.defineProperty(exports, 'ElMenuItem', {
  enumerable: true,
  get: function () {
    return menuItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElMenuItemGroup', {
  enumerable: true,
  get: function () {
    return menuItemGroup__default['default'];
  }
});
Object.defineProperty(exports, 'ElOption', {
  enumerable: true,
  get: function () {
    return option__default['default'];
  }
});
Object.defineProperty(exports, 'ElOptionGroup', {
  enumerable: true,
  get: function () {
    return optionGroup__default['default'];
  }
});
Object.defineProperty(exports, 'ElPageHeader', {
  enumerable: true,
  get: function () {
    return pageHeader__default['default'];
  }
});
Object.defineProperty(exports, 'ElPagination', {
  enumerable: true,
  get: function () {
    return pagination__default['default'];
  }
});
Object.defineProperty(exports, 'ElPopconfirm', {
  enumerable: true,
  get: function () {
    return popconfirm__default['default'];
  }
});
Object.defineProperty(exports, 'ElPopper', {
  enumerable: true,
  get: function () {
    return popper__default['default'];
  }
});
Object.defineProperty(exports, 'ElProgress', {
  enumerable: true,
  get: function () {
    return progress__default['default'];
  }
});
Object.defineProperty(exports, 'ElRadio', {
  enumerable: true,
  get: function () {
    return radio__default['default'];
  }
});
Object.defineProperty(exports, 'ElRadioButton', {
  enumerable: true,
  get: function () {
    return radioButton__default['default'];
  }
});
Object.defineProperty(exports, 'ElRadioGroup', {
  enumerable: true,
  get: function () {
    return radioGroup__default['default'];
  }
});
Object.defineProperty(exports, 'ElRate', {
  enumerable: true,
  get: function () {
    return rate__default['default'];
  }
});
Object.defineProperty(exports, 'ElRow', {
  enumerable: true,
  get: function () {
    return row__default['default'];
  }
});
Object.defineProperty(exports, 'ElScrollbar', {
  enumerable: true,
  get: function () {
    return scrollbar__default['default'];
  }
});
Object.defineProperty(exports, 'ElSelect', {
  enumerable: true,
  get: function () {
    return select__default['default'];
  }
});
Object.defineProperty(exports, 'ElSlider', {
  enumerable: true,
  get: function () {
    return slider__default['default'];
  }
});
Object.defineProperty(exports, 'ElStep', {
  enumerable: true,
  get: function () {
    return step__default['default'];
  }
});
Object.defineProperty(exports, 'ElSteps', {
  enumerable: true,
  get: function () {
    return steps__default['default'];
  }
});
Object.defineProperty(exports, 'ElSubmenu', {
  enumerable: true,
  get: function () {
    return submenu__default['default'];
  }
});
Object.defineProperty(exports, 'ElSwitch', {
  enumerable: true,
  get: function () {
    return _switch__default['default'];
  }
});
Object.defineProperty(exports, 'ElTabPane', {
  enumerable: true,
  get: function () {
    return tabPane__default['default'];
  }
});
Object.defineProperty(exports, 'ElTable', {
  enumerable: true,
  get: function () {
    return table__default['default'];
  }
});
Object.defineProperty(exports, 'ElTableColumn', {
  enumerable: true,
  get: function () {
    return tableColumn__default['default'];
  }
});
Object.defineProperty(exports, 'ElTabs', {
  enumerable: true,
  get: function () {
    return tabs__default['default'];
  }
});
Object.defineProperty(exports, 'ElTag', {
  enumerable: true,
  get: function () {
    return tag__default['default'];
  }
});
Object.defineProperty(exports, 'ElTimePicker', {
  enumerable: true,
  get: function () {
    return timePicker__default['default'];
  }
});
Object.defineProperty(exports, 'ElTimeSelect', {
  enumerable: true,
  get: function () {
    return timeSelect__default['default'];
  }
});
Object.defineProperty(exports, 'ElTimeline', {
  enumerable: true,
  get: function () {
    return timeline__default['default'];
  }
});
Object.defineProperty(exports, 'ElTimelineItem', {
  enumerable: true,
  get: function () {
    return timelineItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElTooltip', {
  enumerable: true,
  get: function () {
    return tooltip__default['default'];
  }
});
Object.defineProperty(exports, 'ElTransfer', {
  enumerable: true,
  get: function () {
    return transfer__default['default'];
  }
});
Object.defineProperty(exports, 'ElTree', {
  enumerable: true,
  get: function () {
    return tree__default['default'];
  }
});
Object.defineProperty(exports, 'ElUpload', {
  enumerable: true,
  get: function () {
    return upload__default['default'];
  }
});
Object.defineProperty(exports, 'ElSpace', {
  enumerable: true,
  get: function () {
    return space__default['default'];
  }
});
Object.defineProperty(exports, 'ElSkeleton', {
  enumerable: true,
  get: function () {
    return skeleton__default['default'];
  }
});
Object.defineProperty(exports, 'ElSkeletonItem', {
  enumerable: true,
  get: function () {
    return skeletonItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElCheckTag', {
  enumerable: true,
  get: function () {
    return checkTag__default['default'];
  }
});
Object.defineProperty(exports, 'ElDescriptions', {
  enumerable: true,
  get: function () {
    return descriptions__default['default'];
  }
});
Object.defineProperty(exports, 'ElDescriptionsItem', {
  enumerable: true,
  get: function () {
    return descriptionsItem__default['default'];
  }
});
Object.defineProperty(exports, 'ElResult', {
  enumerable: true,
  get: function () {
    return result__default['default'];
  }
});
Object.defineProperty(exports, 'ElSelectV2', {
  enumerable: true,
  get: function () {
    return selectV2__default['default'];
  }
});
Object.defineProperty(exports, 'ElInfiniteScroll', {
  enumerable: true,
  get: function () {
    return infiniteScroll__default['default'];
  }
});
Object.defineProperty(exports, 'ElLoading', {
  enumerable: true,
  get: function () {
    return loading__default['default'];
  }
});
Object.defineProperty(exports, 'ElMessage', {
  enumerable: true,
  get: function () {
    return message__default['default'];
  }
});
Object.defineProperty(exports, 'ElMessageBox', {
  enumerable: true,
  get: function () {
    return messageBox__default['default'];
  }
});
Object.defineProperty(exports, 'ElNotification', {
  enumerable: true,
  get: function () {
    return notification__default['default'];
  }
});
Object.defineProperty(exports, 'ElPopover', {
  enumerable: true,
  get: function () {
    return popover__default['default'];
  }
});
exports.default = index;
exports.install = install;
exports.locale = locale;
exports.version = version$1;

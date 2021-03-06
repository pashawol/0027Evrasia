import { defineComponent, computed, openBlock, createBlock, withModifiers, toDisplayString, inject, ref, watch, resolveComponent, createVNode, withCtx, Fragment, renderList, createTextVNode, watchEffect, withKeys, createCommentVNode, getCurrentInstance, provide, h } from 'vue';
import { warn } from '../utils/error';
import { useLocaleInject } from '../hooks';
import ElSelect from '../el-select';
import ElOption from '../el-option';
import isEqual from 'lodash/isEqual';
import ElInput from '../el-input';

var script = defineComponent({
  name: "Prev",
  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1);
    return {
      internalDisabled
    };
  }
});

const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "el-icon el-icon-arrow-left"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: "button",
    class: "btn-prev",
    disabled: _ctx.internalDisabled,
    "aria-disabled": _ctx.internalDisabled,
    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
    }, ["self", "prevent"]))
  }, [
    _ctx.prevText ? (openBlock(), createBlock("span", _hoisted_1, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock("i", _hoisted_2))
  ], 8, ["disabled", "aria-disabled"]);
}

script.render = render;
script.__file = "packages/pagination/src/prev.vue";

var script$1 = defineComponent({
  name: "Next",
  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 50
    },
    nextText: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const internalDisabled = computed(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
    return {
      internalDisabled
    };
  }
});

const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = {
  key: 1,
  class: "el-icon el-icon-arrow-right"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: "button",
    class: "btn-next",
    disabled: _ctx.internalDisabled,
    "aria-disabled": _ctx.internalDisabled,
    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
    }, ["self", "prevent"]))
  }, [
    _ctx.nextText ? (openBlock(), createBlock("span", _hoisted_1$1, toDisplayString(_ctx.nextText), 1)) : (openBlock(), createBlock("i", _hoisted_2$1))
  ], 8, ["disabled", "aria-disabled"]);
}

script$1.render = render$1;
script$1.__file = "packages/pagination/src/next.vue";

const usePagination = () => {
  const pagination = inject("pagination", {});
  return {
    pagination,
    pageCount: pagination.pageCount,
    disabled: pagination.disabled,
    currentPage: pagination.currentPage
  };
};

var script$2 = defineComponent({
  name: "Sizes",
  components: {
    ElSelect,
    ElOption
  },
  props: {
    pageSize: Number,
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    popperClass: {
      type: String,
      default: ""
    },
    disabled: Boolean
  },
  emits: ["page-size-change"],
  setup(props, { emit }) {
    const { t } = useLocaleInject();
    const { pagination } = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(() => props.pageSizes, (newVal, oldVal) => {
      if (isEqual(newVal, oldVal))
        return;
      if (Array.isArray(newVal)) {
        const pageSize = newVal.indexOf(props.pageSize) > -1 ? props.pageSize : props.pageSizes[0];
        emit("page-size-change", pageSize);
      }
    });
    watch(() => props.pageSize, (newVal) => {
      innerPageSize.value = newVal;
    });
    const innerPagesizes = computed(() => props.pageSizes);
    function handleChange(val) {
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        pagination == null ? void 0 : pagination.handleSizeChange(Number(val));
      }
    }
    return {
      t,
      innerPagesizes,
      innerPageSize,
      handleChange
    };
  }
});

const _hoisted_1$2 = { class: "el-pagination__sizes" };
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createBlock("span", _hoisted_1$2, [
    createVNode(_component_el_select, {
      "model-value": _ctx.innerPageSize,
      disabled: _ctx.disabled,
      "popper-class": _ctx.popperClass,
      size: "mini",
      onChange: _ctx.handleChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.innerPagesizes, (item) => {
          return openBlock(), createBlock(_component_el_option, {
            key: item,
            value: item,
            label: item + _ctx.t("el.pagination.pagesize")
          }, null, 8, ["value", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["model-value", "disabled", "popper-class", "onChange"])
  ]);
}

script$2.render = render$2;
script$2.__file = "packages/pagination/src/sizes.vue";

var script$3 = defineComponent({
  components: {
    ElInput
  },
  setup() {
    const { t } = useLocaleInject();
    const { pagination, pageCount, disabled, currentPage } = usePagination();
    const userInput = ref(null);
    const innerValue = computed(() => {
      var _a;
      return (_a = userInput.value) != null ? _a : currentPage.value;
    });
    function handleInput(val) {
      userInput.value = Number(val);
    }
    function handleChange(val) {
      pagination == null ? void 0 : pagination.changeEvent(Number(val));
      userInput.value = null;
    }
    return {
      t,
      userInput,
      pageCount,
      disabled,
      handleInput,
      handleChange,
      innerValue
    };
  }
});

const _hoisted_1$3 = { class: "el-pagination__jump" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  return openBlock(), createBlock("span", _hoisted_1$3, [
    createTextVNode(toDisplayString(_ctx.t("el.pagination.goto")) + " ", 1),
    createVNode(_component_el_input, {
      size: "mini",
      class: "el-pagination__editor is-in-pagination",
      min: 1,
      max: _ctx.pageCount,
      disabled: _ctx.disabled,
      "model-value": _ctx.innerValue,
      type: "number",
      "onUpdate:modelValue": _ctx.handleInput,
      onChange: _ctx.handleChange
    }, null, 8, ["max", "disabled", "model-value", "onUpdate:modelValue", "onChange"]),
    createTextVNode(" " + toDisplayString(_ctx.t("el.pagination.pageClassifier")), 1)
  ]);
}

script$3.render = render$3;
script$3.__file = "packages/pagination/src/jumper.vue";

var script$4 = defineComponent({
  name: "Total",
  props: {
    total: {
      type: Number,
      default: 1e3
    }
  },
  setup() {
    const { t } = useLocaleInject();
    return {
      t
    };
  }
});

const _hoisted_1$4 = { class: "el-pagination__total" };
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1$4, toDisplayString(_ctx.t("el.pagination.total", {
    total: _ctx.total
  })), 1);
}

script$4.render = render$4;
script$4.__file = "packages/pagination/src/total.vue";

var script$5 = defineComponent({
  name: "ElPager",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    disabled: Boolean
  },
  emits: ["change"],
  setup(props, { emit }) {
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const quicknextIconClass = ref("el-icon-more");
    const quickprevIconClass = ref("el-icon-more");
    const pagers = computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    watchEffect(() => {
      if (!showPrevMore.value)
        quickprevIconClass.value = "el-icon-more";
    });
    watchEffect(() => {
      if (!showNextMore.value)
        quicknextIconClass.value = "el-icon-more";
    });
    function onMouseenter(direction) {
      if (props.disabled)
        return;
      if (direction === "left") {
        quickprevIconClass.value = "el-icon-d-arrow-left";
      } else {
        quicknextIconClass.value = "el-icon-d-arrow-right";
      }
    }
    function onEnter(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) {
          emit("change", newPage);
        }
      }
    }
    function onPagerClick(event) {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) {
        return;
      }
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quickprev")) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.includes("quicknext")) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return {
      showPrevMore,
      showNextMore,
      quicknextIconClass,
      quickprevIconClass,
      pagers,
      onMouseenter,
      onPagerClick,
      onEnter
    };
  }
});

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("ul", {
    class: "el-pager",
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.onPagerClick && _ctx.onPagerClick(...args)),
    onKeyup: _cache[6] || (_cache[6] = withKeys((...args) => _ctx.onEnter && _ctx.onEnter(...args), ["enter"]))
  }, [
    _ctx.pageCount > 0 ? (openBlock(), createBlock("li", {
      key: 0,
      class: [{ active: _ctx.currentPage === 1, disabled: _ctx.disabled }, "number"],
      "aria-current": _ctx.currentPage === 1,
      tabindex: "0"
    }, " 1 ", 10, ["aria-current"])) : createCommentVNode("v-if", true),
    _ctx.showPrevMore ? (openBlock(), createBlock("li", {
      key: 1,
      class: ["el-icon more btn-quickprev", [_ctx.quickprevIconClass, { disabled: _ctx.disabled }]],
      onMouseenter: _cache[1] || (_cache[1] = ($event) => _ctx.onMouseenter("left")),
      onMouseleave: _cache[2] || (_cache[2] = ($event) => _ctx.quickprevIconClass = "el-icon-more")
    }, null, 34)) : createCommentVNode("v-if", true),
    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.pagers, (pager) => {
      return openBlock(), createBlock("li", {
        key: pager,
        class: [{ active: _ctx.currentPage === pager, disabled: _ctx.disabled }, "number"],
        "aria-current": _ctx.currentPage === pager,
        tabindex: "0"
      }, toDisplayString(pager), 11, ["aria-current"]);
    }), 128)),
    _ctx.showNextMore ? (openBlock(), createBlock("li", {
      key: 2,
      class: ["el-icon more btn-quicknext", [_ctx.quicknextIconClass, { disabled: _ctx.disabled }]],
      onMouseenter: _cache[3] || (_cache[3] = ($event) => _ctx.onMouseenter("right")),
      onMouseleave: _cache[4] || (_cache[4] = ($event) => _ctx.quicknextIconClass = "el-icon-more")
    }, null, 34)) : createCommentVNode("v-if", true),
    _ctx.pageCount > 1 ? (openBlock(), createBlock("li", {
      key: 3,
      class: [{ active: _ctx.currentPage === _ctx.pageCount, disabled: _ctx.disabled }, "number"],
      "aria-current": _ctx.currentPage === _ctx.pageCount,
      tabindex: "0"
    }, toDisplayString(_ctx.pageCount), 11, ["aria-current"])) : createCommentVNode("v-if", true)
  ], 32);
}

script$5.render = render$5;
script$5.__file = "packages/pagination/src/pager.vue";

const isAbsent = (v) => typeof v !== "number";
const componentName = "ElPagination";
var Pagination = defineComponent({
  name: componentName,
  components: {
    Prev: script,
    Next: script$1,
    Sizes: script$2,
    Jumper: script$3,
    Total: script$4,
    Pager: script$5
  },
  props: {
    total: {
      type: Number
    },
    pageSize: {
      type: Number
    },
    defaultPageSize: {
      type: Number
    },
    currentPage: {
      type: Number
    },
    defaultCurrentPage: {
      type: Number
    },
    pageCount: {
      type: Number
    },
    pagerCount: {
      type: Number,
      validator: (value) => {
        return (value | 0) === value && value > 4 && value < 22 && value % 2 === 1;
      },
      default: 7
    },
    layout: {
      type: String,
      default: "prev, pager, next, jumper, ->, total"
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    popperClass: {
      type: String,
      default: ""
    },
    prevText: {
      type: String,
      default: ""
    },
    nextText: {
      type: String,
      default: ""
    },
    small: Boolean,
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean
  },
  emits: [
    "update:current-page",
    "update:page-size",
    "size-change",
    "current-change",
    "prev-click",
    "next-click"
  ],
  setup(props, { emit, slots }) {
    const { t } = useLocaleInject();
    const vnodeProps = getCurrentInstance().vnode.props || {};
    const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onCurrentChange" in vnodeProps;
    const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onSizeChange" in vnodeProps;
    const assertValidUsage = computed(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener)
            return false;
        } else if (!isAbsent(props.total)) {
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const innerPageSize = ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize);
    const innerCurrentPage = ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage);
    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
      },
      set(v) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v;
        }
        if (hasPageSizeListener) {
          emit("update:page-size", v);
          emit("size-change", v);
        }
      }
    });
    const pageCountBridge = computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      if (currentPageBridge.value > pageCount) {
        currentPageBridge.value = pageCount;
      }
      return pageCount;
    });
    const currentPageBridge = computed({
      get() {
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
      },
      set(v) {
        let newCurrentPage = v;
        if (v < 1) {
          newCurrentPage = 1;
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value;
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage;
        }
        if (hasCurrentPageListener) {
          emit("update:current-page", newCurrentPage);
          emit("current-change", newCurrentPage);
        }
      }
    });
    function handleCurrentChange(val) {
      currentPageBridge.value = val;
    }
    function handleSizeChange(val) {
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }
    function prev() {
      if (props.disabled)
        return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled)
        return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }
    provide("pagination", {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    return () => {
      var _a, _b;
      if (!assertValidUsage.value) {
        warn(componentName, t("el.pagination.docRefer"));
        return null;
      }
      if (!props.layout)
        return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      const rootChildren = [];
      const rightWrapperChildren = [];
      const rightWrapperRoot = h("div", { class: "el-pagination__rightwrapper" }, rightWrapperChildren);
      const TEMPLATE_MAP = {
        prev: h(script, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          onClick: prev
        }),
        jumper: h(script$3),
        pager: h(script$5, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled
        }),
        next: h(script$1, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          onClick: next
        }),
        sizes: h(script$2, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          disabled: props.disabled
        }),
        slot: (_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : null,
        total: h(script$4, { total: isAbsent(props.total) ? 0 : props.total })
      };
      const components = props.layout.split(",").map((item) => item.trim());
      let haveRightWrapper = false;
      components.forEach((c) => {
        if (c === "->") {
          haveRightWrapper = true;
          return;
        }
        if (!haveRightWrapper) {
          rootChildren.push(TEMPLATE_MAP[c]);
        } else {
          rightWrapperChildren.push(TEMPLATE_MAP[c]);
        }
      });
      if (haveRightWrapper && rightWrapperChildren.length > 0) {
        rootChildren.unshift(rightWrapperRoot);
      }
      return h("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          "el-pagination",
          {
            "is-background": props.background,
            "el-pagination--small": props.small
          }
        ]
      }, rootChildren);
    };
  }
});

const _Pagination = Pagination;
_Pagination.install = (app) => {
  app.component(_Pagination.name, _Pagination);
};

export default _Pagination;

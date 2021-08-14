'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isServer = require('./isServer');
var configs = require('./config');
var dom = require('./dom');
var aria = require('./aria');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isServer__default = /*#__PURE__*/_interopDefaultLegacy(isServer);

const onTouchMove = (e) => {
    e.preventDefault();
    e.stopPropagation();
};
const onModalClick = () => {
    PopupManager === null || PopupManager === void 0 ? void 0 : PopupManager.doOnModalClick();
};
let hasModal = false;
let zIndex;
const getModal = function () {
    if (isServer__default['default'])
        return;
    let modalDom = PopupManager.modalDom;
    if (modalDom) {
        hasModal = true;
    }
    else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;
        dom.on(modalDom, 'touchmove', onTouchMove);
        dom.on(modalDom, 'click', onModalClick);
    }
    return modalDom;
};
const instances = {};
const PopupManager = {
    modalFade: true,
    modalDom: undefined,
    zIndex,
    getInstance: function (id) {
        return instances[id];
    },
    register: function (id, instance) {
        if (id && instance) {
            instances[id] = instance;
        }
    },
    deregister: function (id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },
    nextZIndex: function () {
        return ++PopupManager.zIndex;
    },
    modalStack: [],
    doOnModalClick: function () {
        const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem)
            return;
        const instance = PopupManager.getInstance(topItem.id);
        if (instance && instance.closeOnClickModal.value) {
            instance.close();
        }
    },
    openModal: function (id, zIndex, dom$1, modalClass, modalFade) {
        if (isServer__default['default'])
            return;
        if (!id || zIndex === undefined)
            return;
        this.modalFade = modalFade;
        const modalStack = this.modalStack;
        for (let i = 0, j = modalStack.length; i < j; i++) {
            const item = modalStack[i];
            if (item.id === id) {
                return;
            }
        }
        const modalDom = getModal();
        dom.addClass(modalDom, 'v-modal');
        if (this.modalFade && !hasModal) {
            dom.addClass(modalDom, 'v-modal-enter');
        }
        if (modalClass) {
            const classArr = modalClass.trim().split(/\s+/);
            classArr.forEach(item => dom.addClass(modalDom, item));
        }
        setTimeout(() => {
            dom.removeClass(modalDom, 'v-modal-enter');
        }, 200);
        if (dom$1 && dom$1.parentNode && dom$1.parentNode.nodeType !== 11) {
            dom$1.parentNode.appendChild(modalDom);
        }
        else {
            document.body.appendChild(modalDom);
        }
        if (zIndex) {
            modalDom.style.zIndex = String(zIndex);
        }
        modalDom.tabIndex = 0;
        modalDom.style.display = '';
        this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
    },
    closeModal: function (id) {
        const modalStack = this.modalStack;
        const modalDom = getModal();
        if (modalStack.length > 0) {
            const topItem = modalStack[modalStack.length - 1];
            if (topItem.id === id) {
                if (topItem.modalClass) {
                    const classArr = topItem.modalClass.trim().split(/\s+/);
                    classArr.forEach(item => dom.removeClass(modalDom, item));
                }
                modalStack.pop();
                if (modalStack.length > 0) {
                    modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
                }
            }
            else {
                for (let i = modalStack.length - 1; i >= 0; i--) {
                    if (modalStack[i].id === id) {
                        modalStack.splice(i, 1);
                        break;
                    }
                }
            }
        }
        if (modalStack.length === 0) {
            if (this.modalFade) {
                dom.addClass(modalDom, 'v-modal-leave');
            }
            setTimeout(() => {
                if (modalStack.length === 0) {
                    if (modalDom.parentNode)
                        modalDom.parentNode.removeChild(modalDom);
                    modalDom.style.display = 'none';
                    PopupManager.modalDom = undefined;
                }
                dom.removeClass(modalDom, 'v-modal-leave');
            }, 200);
        }
    },
};
Object.defineProperty(PopupManager, 'zIndex', {
    configurable: true,
    get() {
        if (zIndex === undefined) {
            zIndex = configs.getConfig('zIndex') || 2000;
        }
        return zIndex;
    },
    set(value) {
        zIndex = value;
    },
});
const getTopPopup = function () {
    if (isServer__default['default'])
        return;
    if (PopupManager.modalStack.length > 0) {
        const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topPopup)
            return;
        const instance = PopupManager.getInstance(topPopup.id);
        return instance;
    }
};
if (!isServer__default['default']) {
    dom.on(window, 'keydown', function (event) {
        if (event.code === aria.EVENT_CODE.esc) {
            const topPopup = getTopPopup();
            if (topPopup && topPopup.closeOnPressEscape.value) {
                topPopup.handleClose
                    ? topPopup.handleClose()
                    : topPopup.handleAction
                        ? topPopup.handleAction('cancel')
                        : topPopup.close();
            }
        }
    });
}

exports.default = PopupManager;

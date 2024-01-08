"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./assets/App.vue");


console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]).mount('#app');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ToDoItem_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ToDoItem.vue */ "./assets/components/ToDoItem.vue");
/* harmony import */ var _components_ToDoForm_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ToDoForm.vue */ "./assets/components/ToDoForm.vue");
/* harmony import */ var lodash_uniqueid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.uniqueid */ "./node_modules/lodash.uniqueid/index.js");
/* harmony import */ var lodash_uniqueid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueid__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "app",
  components: {
    ToDoItem: _components_ToDoItem_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ToDoForm: _components_ToDoForm_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      ToDoItems: [{
        id: lodash_uniqueid__WEBPACK_IMPORTED_MODULE_9___default()("todo-"),
        label: "Learn Vue",
        done: false
      }, {
        id: lodash_uniqueid__WEBPACK_IMPORTED_MODULE_9___default()("todo-"),
        label: "Create a Vue project with the CLI",
        done: true
      }, {
        id: lodash_uniqueid__WEBPACK_IMPORTED_MODULE_9___default()("todo-"),
        label: "Have fun",
        done: true
      }, {
        id: lodash_uniqueid__WEBPACK_IMPORTED_MODULE_9___default()("todo-"),
        label: "Create a to-do list",
        done: false
      }]
    };
  },
  methods: {
    addToDo: function addToDo(toDoLabel) {
      this.ToDoItems.push({
        id: lodash_uniqueid__WEBPACK_IMPORTED_MODULE_9___default()("todo-"),
        label: toDoLabel,
        done: false
      });
    },
    updateDoneStatus: function updateDoneStatus(toDoId) {
      var toDoToUpdate = this.ToDoItems.find(function (item) {
        return item.id === toDoId;
      });
      toDoToUpdate.done = !toDoToUpdate.done;
    },
    deleteToDo: function deleteToDo(toDoId) {
      var itemIndex = this.ToDoItems.findIndex(function (item) {
        return item.id === toDoId;
      });
      this.ToDoItems.splice(itemIndex, 1);
      this.$refs.listSummary.focus();
    },
    editToDo: function editToDo(toDoId, newLabel) {
      var toDoToEdit = this.ToDoItems.find(function (item) {
        return item.id === toDoId;
      });
      toDoToEdit.label = newLabel;
    }
  },
  computed: {
    listSummary: function listSummary() {
      var numberFinishedItems = this.ToDoItems.filter(function (item) {
        return item.done;
      }).length;
      return "".concat(numberFinishedItems, " out of ").concat(this.ToDoItems.length, " items completed");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoForm.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoForm.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    onSubmit: function onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
    }
  },
  data: function data() {
    return {
      label: ""
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToDoItemEditForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoItemEditForm.vue */ "./assets/components/ToDoItemEditForm.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ToDoItemEditForm: _ToDoItemEditForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    label: {
      required: true,
      type: String
    },
    done: {
      "default": false,
      type: Boolean
    },
    id: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      isEditing: false
    };
  },
  computed: {
    isDone: function isDone() {
      return this.done;
    }
  },
  methods: {
    deleteToDo: function deleteToDo() {
      this.$emit("item-deleted");
    },
    toggleToItemEditForm: function toggleToItemEditForm() {
      console.log(this.$refs.editButton);
      this.isEditing = true;
    },
    itemEdited: function itemEdited(newLabel) {
      this.$emit("item-edited", newLabel);
      this.isEditing = false;
      this.focusOnEditButton();
    },
    editCancelled: function editCancelled() {
      this.isEditing = false;
      this.focusOnEditButton();
    },
    focusOnEditButton: function focusOnEditButton() {
      var _this = this;
      this.$nextTick(function () {
        var editButtonRef = _this.$refs.editButton;
        editButtonRef.focus();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      newLabel: this.label
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      if (this.newLabel && this.newLabel !== this.label) {
        this.$emit("item-edited", this.newLabel);
      }
    },
    onCancel: function onCancel() {
      this.$emit("edit-cancelled");
    }
  },
  mounted: function mounted() {
    var labelInputRef = this.$refs.labelInput;
    labelInputRef.focus();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "app"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "To-Do List", -1 /* HOISTED */);
var _hoisted_3 = {
  "aria-labelledby": "list-summary",
  "class": "stack-large"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_to_do_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("to-do-form");
  var _component_to_do_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("to-do-item");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_to_do_form, {
    onTodoAdded: $options.addToDo
  }, null, 8 /* PROPS */, ["onTodoAdded"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    id: "list-summary",
    ref: "listSummary",
    tabindex: "-1"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.listSummary), 513 /* TEXT, NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.ToDoItems, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_to_do_item, {
      label: item.label,
      done: item.done,
      id: item.id,
      onCheckboxChanged: function onCheckboxChanged($event) {
        return $options.updateDoneStatus(item.id);
      },
      onItemDeleted: function onItemDeleted($event) {
        return $options.deleteToDo(item.id);
      },
      onItemEdited: function onItemEdited($event) {
        return $options.editToDo(item.id, $event);
      }
    }, null, 8 /* PROPS */, ["label", "done", "id", "onCheckboxChanged", "onItemDeleted", "onItemEdited"])]);
  }), 128 /* KEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoForm.vue?vue&type=template&id=6056c545":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoForm.vue?vue&type=template&id=6056c545 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "label-wrapper"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "new-todo-input",
  "class": "label__lg"
}, " What needs to be done? ")], -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn__primary btn__lg"
}, "Add", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "new-todo-input",
    name: "new-todo",
    autocomplete: "off",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.label = $event;
    }),
    "class": "input__lg"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.label, void 0, {
    lazy: true,
    trim: true
  }]]), _hoisted_2], 32 /* NEED_HYDRATION */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=template&id=eb6b17d8&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=template&id=eb6b17d8&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-eb6b17d8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  key: 0,
  "class": "stack-small"
};
var _hoisted_2 = {
  "class": "custom-checkbox"
};
var _hoisted_3 = ["id", "checked"];
var _hoisted_4 = ["for"];
var _hoisted_5 = {
  "class": "btn-group"
};
var _hoisted_6 = {
  "class": "visually-hidden"
};
var _hoisted_7 = {
  "class": "visually-hidden"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_to_do_item_edit_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("to-do-item-edit-form");
  return !$data.isEditing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "class": "checkbox",
    id: $props.id,
    checked: $options.isDone,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('checkbox-changed');
    })
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": $props.id,
    "class": "checkbox-label"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 9 /* TEXT, PROPS */, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn",
    ref: "editButton",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleToItemEditForm && $options.toggleToItemEditForm.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn__danger",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.deleteToDo && $options.deleteToDo.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_to_do_item_edit_form, {
    key: 1,
    id: $props.id,
    label: $props.label,
    onItemEdited: $options.itemEdited,
    onEditCancelled: $options.editCancelled
  }, null, 8 /* PROPS */, ["id", "label", "onItemEdited", "onEditCancelled"]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=template&id=653281bc&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=template&id=653281bc&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-653281bc"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "edit-label"
};
var _hoisted_2 = ["id"];
var _hoisted_3 = {
  "class": "btn-group"
};
var _hoisted_4 = {
  "class": "visually-hidden"
};
var _hoisted_5 = {
  type: "submit",
  "class": "btn btn__primary"
};
var _hoisted_6 = {
  "class": "visually-hidden"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    "class": "stack-small",
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_1, "Edit Name for \"" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label) + "\"", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: $props.id,
    ref: "labelInput",
    type: "text",
    autocomplete: "off",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.newLabel = $event;
    })
  }, null, 8 /* PROPS */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newLabel, void 0, {
    lazy: true,
    trim: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.onCancel && $options.onCancel.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cancel "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, "editing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Save "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, "edit for " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)])])], 32 /* NEED_HYDRATION */);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=style&index=0&id=eb6b17d8&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=style&index=0&id=eb6b17d8&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=style&index=0&id=653281bc&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=style&index=0&id=653281bc&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/App.vue":
/*!************************!*\
  !*** ./assets/App.vue ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5bcdaf03 */ "./assets/App.vue?vue&type=template&id=5bcdaf03");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./assets/App.vue?vue&type=script&lang=js");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_5bcdaf03_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css */ "./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/ToDoForm.vue":
/*!****************************************!*\
  !*** ./assets/components/ToDoForm.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToDoForm_vue_vue_type_template_id_6056c545__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoForm.vue?vue&type=template&id=6056c545 */ "./assets/components/ToDoForm.vue?vue&type=template&id=6056c545");
/* harmony import */ var _ToDoForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoForm.vue?vue&type=script&lang=js */ "./assets/components/ToDoForm.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ToDoForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ToDoForm_vue_vue_type_template_id_6056c545__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/ToDoForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/ToDoItem.vue":
/*!****************************************!*\
  !*** ./assets/components/ToDoItem.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToDoItem_vue_vue_type_template_id_eb6b17d8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoItem.vue?vue&type=template&id=eb6b17d8&scoped=true */ "./assets/components/ToDoItem.vue?vue&type=template&id=eb6b17d8&scoped=true");
/* harmony import */ var _ToDoItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoItem.vue?vue&type=script&lang=js */ "./assets/components/ToDoItem.vue?vue&type=script&lang=js");
/* harmony import */ var _ToDoItem_vue_vue_type_style_index_0_id_eb6b17d8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoItem.vue?vue&type=style&index=0&id=eb6b17d8&scoped=true&lang=css */ "./assets/components/ToDoItem.vue?vue&type=style&index=0&id=eb6b17d8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ToDoItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ToDoItem_vue_vue_type_template_id_eb6b17d8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-eb6b17d8"],['__file',"assets/components/ToDoItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/ToDoItemEditForm.vue":
/*!************************************************!*\
  !*** ./assets/components/ToDoItemEditForm.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToDoItemEditForm_vue_vue_type_template_id_653281bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoItemEditForm.vue?vue&type=template&id=653281bc&scoped=true */ "./assets/components/ToDoItemEditForm.vue?vue&type=template&id=653281bc&scoped=true");
/* harmony import */ var _ToDoItemEditForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoItemEditForm.vue?vue&type=script&lang=js */ "./assets/components/ToDoItemEditForm.vue?vue&type=script&lang=js");
/* harmony import */ var _ToDoItemEditForm_vue_vue_type_style_index_0_id_653281bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoItemEditForm.vue?vue&type=style&index=0&id=653281bc&scoped=true&lang=css */ "./assets/components/ToDoItemEditForm.vue?vue&type=style&index=0&id=653281bc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ToDoItemEditForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ToDoItemEditForm_vue_vue_type_template_id_653281bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-653281bc"],['__file',"assets/components/ToDoItemEditForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/App.vue?vue&type=script&lang=js":
/*!************************************************!*\
  !*** ./assets/App.vue?vue&type=script&lang=js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/ToDoForm.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./assets/components/ToDoForm.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToDoForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/ToDoItem.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./assets/components/ToDoItem.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToDoItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/ToDoItemEditForm.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./assets/components/ToDoItemEditForm.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItemEditForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItemEditForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToDoItemEditForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/App.vue?vue&type=template&id=5bcdaf03":
/*!******************************************************!*\
  !*** ./assets/App.vue?vue&type=template&id=5bcdaf03 ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=5bcdaf03 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03");


/***/ }),

/***/ "./assets/components/ToDoForm.vue?vue&type=template&id=6056c545":
/*!**********************************************************************!*\
  !*** ./assets/components/ToDoForm.vue?vue&type=template&id=6056c545 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoForm_vue_vue_type_template_id_6056c545__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoForm_vue_vue_type_template_id_6056c545__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToDoForm.vue?vue&type=template&id=6056c545 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoForm.vue?vue&type=template&id=6056c545");


/***/ }),

/***/ "./assets/components/ToDoItem.vue?vue&type=template&id=eb6b17d8&scoped=true":
/*!**********************************************************************************!*\
  !*** ./assets/components/ToDoItem.vue?vue&type=template&id=eb6b17d8&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItem_vue_vue_type_template_id_eb6b17d8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItem_vue_vue_type_template_id_eb6b17d8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToDoItem.vue?vue&type=template&id=eb6b17d8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=template&id=eb6b17d8&scoped=true");


/***/ }),

/***/ "./assets/components/ToDoItemEditForm.vue?vue&type=template&id=653281bc&scoped=true":
/*!******************************************************************************************!*\
  !*** ./assets/components/ToDoItemEditForm.vue?vue&type=template&id=653281bc&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItemEditForm_vue_vue_type_template_id_653281bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItemEditForm_vue_vue_type_template_id_653281bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToDoItemEditForm.vue?vue&type=template&id=653281bc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=template&id=653281bc&scoped=true");


/***/ }),

/***/ "./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css":
/*!********************************************************************!*\
  !*** ./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_5bcdaf03_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css");


/***/ }),

/***/ "./assets/components/ToDoItem.vue?vue&type=style&index=0&id=eb6b17d8&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./assets/components/ToDoItem.vue?vue&type=style&index=0&id=eb6b17d8&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItem_vue_vue_type_style_index_0_id_eb6b17d8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToDoItem.vue?vue&type=style&index=0&id=eb6b17d8&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItem.vue?vue&type=style&index=0&id=eb6b17d8&scoped=true&lang=css");


/***/ }),

/***/ "./assets/components/ToDoItemEditForm.vue?vue&type=style&index=0&id=653281bc&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./assets/components/ToDoItemEditForm.vue?vue&type=style&index=0&id=653281bc&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToDoItemEditForm_vue_vue_type_style_index_0_id_653281bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToDoItemEditForm.vue?vue&type=style&index=0&id=653281bc&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ToDoItemEditForm.vue?vue&type=style&index=0&id=653281bc&scoped=true&lang=css");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_uniqueid_index_js-node_modules_vue-loader_dist_exportHelper_js-no-a9fc96"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnRTtBQUNWO0FBQ0w7O0FBRWpELENBQThEOztBQUVlO0FBQzdFLGlDQUFpQyx5RkFBZSxDQUFDLHdFQUFNLGFBQWEsMEVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnNEO0FBQ1Y7QUFDTDs7QUFFdEQsQ0FBZ0Y7QUFDaEYsaUNBQWlDLHlGQUFlLENBQUMsNkVBQU0sYUFBYSwrRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmtFO0FBQ3RCO0FBQ0w7O0FBRXRELENBQStFOztBQUVDO0FBQ2hGLGlDQUFpQyx5RkFBZSxDQUFDLDZFQUFNLGFBQWEsMkZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEIwRTtBQUN0QjtBQUNMOztBQUU5RCxDQUF1Rjs7QUFFUDtBQUNoRixpQ0FBaUMseUZBQWUsQ0FBQyxxRkFBTSxhQUFhLG1HQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3hCNks7Ozs7Ozs7Ozs7Ozs7OztBQ0FXOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1RvRG9Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ub0RvSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVG9Eb0l0ZW1FZGl0Rm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/YjI4MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ub0RvSXRlbS52dWU/NTgzZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ub0RvSXRlbUVkaXRGb3JtLnZ1ZT80OTU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzg5ZGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVG9Eb0Zvcm0udnVlPzYxZmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVG9Eb0l0ZW0udnVlPzA2OWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVG9Eb0l0ZW1FZGl0Rm9ybS52dWU/NWJkNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZT83ZTAwIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1RvRG9Gb3JtLnZ1ZT9iZWNiIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1RvRG9JdGVtLnZ1ZT9jMjNmIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1RvRG9JdGVtRWRpdEZvcm0udnVlPzBhN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJylcblxuXG5jcmVhdGVBcHAoQXBwKS5tb3VudCgnI2FwcCcpXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPGgxPlRvLURvIExpc3Q8L2gxPlxyXG4gICAgPHRvLWRvLWZvcm0gQHRvZG8tYWRkZWQ9XCJhZGRUb0RvXCI+PC90by1kby1mb3JtPlxyXG4gICAgPGgyIGlkPVwibGlzdC1zdW1tYXJ5XCIgcmVmPVwibGlzdFN1bW1hcnlcIiB0YWJpbmRleD1cIi0xXCI+e3sgbGlzdFN1bW1hcnkgfX08L2gyPlxyXG4gICAgPHVsIGFyaWEtbGFiZWxsZWRieT1cImxpc3Qtc3VtbWFyeVwiIGNsYXNzPVwic3RhY2stbGFyZ2VcIj5cclxuICAgICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBUb0RvSXRlbXNcIiA6a2V5PVwiaXRlbS5pZFwiPlxyXG4gICAgICAgIDx0by1kby1pdGVtXHJcbiAgICAgICAgICA6bGFiZWw9XCJpdGVtLmxhYmVsXCJcclxuICAgICAgICAgIDpkb25lPVwiaXRlbS5kb25lXCJcclxuICAgICAgICAgIDppZD1cIml0ZW0uaWRcIlxyXG4gICAgICAgICAgQGNoZWNrYm94LWNoYW5nZWQ9XCJ1cGRhdGVEb25lU3RhdHVzKGl0ZW0uaWQpXCJcclxuICAgICAgICAgIEBpdGVtLWRlbGV0ZWQ9XCJkZWxldGVUb0RvKGl0ZW0uaWQpXCJcclxuICAgICAgICAgIEBpdGVtLWVkaXRlZD1cImVkaXRUb0RvKGl0ZW0uaWQsICRldmVudClcIj5cclxuICAgICAgICA8L3RvLWRvLWl0ZW0+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbmltcG9ydCBUb0RvSXRlbSBmcm9tIFwiLi9jb21wb25lbnRzL1RvRG9JdGVtLnZ1ZVwiO1xyXG5pbXBvcnQgVG9Eb0Zvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9Ub0RvRm9ybS52dWVcIjtcclxuaW1wb3J0IHVuaXF1ZUlkIGZyb20gXCJsb2Rhc2gudW5pcXVlaWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImFwcFwiLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFRvRG9JdGVtLFxyXG4gICAgVG9Eb0Zvcm0sXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgVG9Eb0l0ZW1zOiBbXHJcbiAgICAgICAgeyBpZDogdW5pcXVlSWQoXCJ0b2RvLVwiKSwgbGFiZWw6IFwiTGVhcm4gVnVlXCIsIGRvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHVuaXF1ZUlkKFwidG9kby1cIiksXHJcbiAgICAgICAgICBsYWJlbDogXCJDcmVhdGUgYSBWdWUgcHJvamVjdCB3aXRoIHRoZSBDTElcIixcclxuICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IGlkOiB1bmlxdWVJZChcInRvZG8tXCIpLCBsYWJlbDogXCJIYXZlIGZ1blwiLCBkb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyBpZDogdW5pcXVlSWQoXCJ0b2RvLVwiKSwgbGFiZWw6IFwiQ3JlYXRlIGEgdG8tZG8gbGlzdFwiLCBkb25lOiBmYWxzZSB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFkZFRvRG8odG9Eb0xhYmVsKSB7XHJcbiAgICAgIHRoaXMuVG9Eb0l0ZW1zLnB1c2goe1xyXG4gICAgICAgIGlkOiB1bmlxdWVJZChcInRvZG8tXCIpLFxyXG4gICAgICAgIGxhYmVsOiB0b0RvTGFiZWwsXHJcbiAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZURvbmVTdGF0dXModG9Eb0lkKSB7XHJcbiAgICAgIGNvbnN0IHRvRG9Ub1VwZGF0ZSA9IHRoaXMuVG9Eb0l0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHRvRG9JZCk7XHJcbiAgICAgIHRvRG9Ub1VwZGF0ZS5kb25lID0gIXRvRG9Ub1VwZGF0ZS5kb25lO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZVRvRG8odG9Eb0lkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuVG9Eb0l0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdG9Eb0lkKTtcclxuICAgICAgdGhpcy5Ub0RvSXRlbXMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuJHJlZnMubGlzdFN1bW1hcnkuZm9jdXMoKTtcclxuICAgIH0sXHJcbiAgICBlZGl0VG9Ebyh0b0RvSWQsIG5ld0xhYmVsKSB7XHJcbiAgICAgIGNvbnN0IHRvRG9Ub0VkaXQgPSB0aGlzLlRvRG9JdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSB0b0RvSWQpO1xyXG4gICAgICB0b0RvVG9FZGl0LmxhYmVsID0gbmV3TGFiZWw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGxpc3RTdW1tYXJ5KCkge1xyXG4gICAgICBjb25zdCBudW1iZXJGaW5pc2hlZEl0ZW1zID0gdGhpcy5Ub0RvSXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmRvbmVcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtudW1iZXJGaW5pc2hlZEl0ZW1zfSBvdXQgb2YgJHt0aGlzLlRvRG9JdGVtcy5sZW5ndGh9IGl0ZW1zIGNvbXBsZXRlZGA7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4vKiBHbG9iYWwgc3R5bGVzICovXHJcbi5idG4ge1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtIDAuN3JlbTtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjNGQ0ZDRkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYnRuX19kYW5nZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYTNjM2M7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmQyMTMwO1xyXG59XHJcbi5idG5fX2ZpbHRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuLmJ0bl9fZGFuZ2VyOmZvY3VzIHtcclxuICBvdXRsaW5lLWNvbG9yOiAjYzgyMzMzO1xyXG59XHJcbi5idG5fX3ByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuLmJ0bi1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmJ0bi1ncm91cCA+ICoge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5idG4tZ3JvdXAgPiAqICsgKiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxufVxyXG4ubGFiZWwtd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZsZXg6IDAgMCAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5bY2xhc3MqPVwiX19sZ1wiXSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xyXG59XHJcbltjbGFzcyo9XCJfX2xnXCJdOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjIwcHgpIHtcclxuICBbY2xhc3MqPVwiX19sZ1wiXSB7XHJcbiAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICB9XHJcbn1cclxuLnZpc3VhbGx5LWhpZGRlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7XHJcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG4gIGNsaXAtcGF0aDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuW2NsYXNzKj1cInN0YWNrXCJdID4gKiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5zdGFjay1zbWFsbCA+ICogKyAqIHtcclxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xyXG59XHJcbi5zdGFjay1sYXJnZSA+ICogKyAqIHtcclxuICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuICAuc3RhY2stc21hbGwgPiAqICsgKiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbiAgfVxyXG4gIC5zdGFjay1sYXJnZSA+ICogKyAqIHtcclxuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcclxuICB9XHJcbn1cclxuLyogRW5kIGdsb2JhbCBzdHlsZXMgKi9cclxuI2FwcCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW46IDJyZW0gMCA0cmVtIDA7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDIuNXJlbSA1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgI2FwcCB7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gIH1cclxufVxyXG4jYXBwID4gKiB7XHJcbiAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuI2FwcCA+IGZvcm0ge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4jYXBwIGgxIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxmb3JtIEBzdWJtaXQucHJldmVudD1cIm9uU3VibWl0XCI+XHJcbiAgICA8aDIgY2xhc3M9XCJsYWJlbC13cmFwcGVyXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJuZXctdG9kby1pbnB1dFwiIGNsYXNzPVwibGFiZWxfX2xnXCI+XHJcbiAgICAgICAgV2hhdCBuZWVkcyB0byBiZSBkb25lP1xyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9oMj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIGlkPVwibmV3LXRvZG8taW5wdXRcIlxyXG4gICAgICBuYW1lPVwibmV3LXRvZG9cIlxyXG4gICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICB2LW1vZGVsLmxhenkudHJpbT1cImxhYmVsXCJcclxuICAgICAgY2xhc3M9XCJpbnB1dF9fbGdcIiAvPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuX19wcmltYXJ5IGJ0bl9fbGdcIj5BZGQ8L2J1dHRvbj5cclxuICA8L2Zvcm0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhYmVsID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJ0b2RvLWFkZGVkXCIsIHRoaXMubGFiZWwpO1xyXG4gICAgICB0aGlzLmxhYmVsID0gXCJcIjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic3RhY2stc21hbGxcIiB2LWlmPVwiIWlzRWRpdGluZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jaGVja2JveFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIDppZD1cImlkXCJcclxuICAgICAgICA6Y2hlY2tlZD1cImlzRG9uZVwiXHJcbiAgICAgICAgQGNoYW5nZT1cIiRlbWl0KCdjaGVja2JveC1jaGFuZ2VkJylcIiAvPlxyXG4gICAgICA8bGFiZWwgOmZvcj1cImlkXCIgY2xhc3M9XCJjaGVja2JveC1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgY2xhc3M9XCJidG5cIlxyXG4gICAgICAgIHJlZj1cImVkaXRCdXR0b25cIlxyXG4gICAgICAgIEBjbGljaz1cInRvZ2dsZVRvSXRlbUVkaXRGb3JtXCI+XHJcbiAgICAgICAgRWRpdFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG5fX2RhbmdlclwiIEBjbGljaz1cImRlbGV0ZVRvRG9cIj5cclxuICAgICAgICBEZWxldGVcclxuICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDx0by1kby1pdGVtLWVkaXQtZm9ybVxyXG4gICAgdi1lbHNlXHJcbiAgICA6aWQ9XCJpZFwiXHJcbiAgICA6bGFiZWw9XCJsYWJlbFwiXHJcbiAgICBAaXRlbS1lZGl0ZWQ9XCJpdGVtRWRpdGVkXCJcclxuICAgIEBlZGl0LWNhbmNlbGxlZD1cImVkaXRDYW5jZWxsZWRcIj48L3RvLWRvLWl0ZW0tZWRpdC1mb3JtPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFRvRG9JdGVtRWRpdEZvcm0gZnJvbSBcIi4vVG9Eb0l0ZW1FZGl0Rm9ybS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBUb0RvSXRlbUVkaXRGb3JtLFxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGxhYmVsOiB7IHJlcXVpcmVkOiB0cnVlLCB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGRvbmU6IHsgZGVmYXVsdDogZmFsc2UsIHR5cGU6IEJvb2xlYW4gfSxcclxuICAgIGlkOiB7IHJlcXVpcmVkOiB0cnVlLCB0eXBlOiBTdHJpbmcgfSxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0VkaXRpbmc6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBpc0RvbmUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRvbmU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZGVsZXRlVG9EbygpIHtcclxuICAgICAgdGhpcy4kZW1pdChcIml0ZW0tZGVsZXRlZFwiKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUb0l0ZW1FZGl0Rm9ybSgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy4kcmVmcy5lZGl0QnV0dG9uKTtcclxuICAgICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGl0ZW1FZGl0ZWQobmV3TGFiZWwpIHtcclxuICAgICAgdGhpcy4kZW1pdChcIml0ZW0tZWRpdGVkXCIsIG5ld0xhYmVsKTtcclxuICAgICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5mb2N1c09uRWRpdEJ1dHRvbigpO1xyXG4gICAgfSxcclxuICAgIGVkaXRDYW5jZWxsZWQoKSB7XHJcbiAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZm9jdXNPbkVkaXRCdXR0b24oKTtcclxuICAgIH0sXHJcbiAgICBmb2N1c09uRWRpdEJ1dHRvbigpIHtcclxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b25SZWYgPSB0aGlzLiRyZWZzLmVkaXRCdXR0b247XHJcbiAgICAgICAgZWRpdEJ1dHRvblJlZi5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY3VzdG9tLWNoZWNrYm94ID4gLmNoZWNrYm94LWxhYmVsIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgY29sb3I6ICMwYjBjMGM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggPiAuY2hlY2tib3gge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yNTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMGIwYzBjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggPiBpbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogM3B4IGRhc2hlZCAjZmQwO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweDtcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94IHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yNTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBjbGVhcjogbGVmdDtcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94ID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIGxlZnQ6IC0ycHg7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggPiAuY2hlY2tib3gtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nOiA4cHggMTVweCA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggPiBsYWJlbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci13aWR0aDogNHB4O1xyXG4gIG91dGxpbmU6IDNweCBkYXNoZWQgIzIyOGJlYztcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94ID4gbGFiZWw6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDExcHg7XHJcbiAgbGVmdDogOXB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgYm9yZGVyOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAgMCA1cHggNXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDByZW0pIHtcclxuICBsYWJlbCxcclxuICBpbnB1dCxcclxuICAuY3VzdG9tLWNoZWNrYm94IHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzE1Nzk7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxmb3JtIGNsYXNzPVwic3RhY2stc21hbGxcIiBAc3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdFwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZWRpdC1sYWJlbFwiPkVkaXQgTmFtZSBmb3IgJnF1b3Q7e3sgbGFiZWwgfX0mcXVvdDs8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICA6aWQ9XCJpZFwiXHJcbiAgICAgICAgcmVmPVwibGFiZWxJbnB1dFwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgdi1tb2RlbC5sYXp5LnRyaW09XCJuZXdMYWJlbFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJvbkNhbmNlbFwiPlxyXG4gICAgICAgIENhbmNlbFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+ZWRpdGluZyB7eyBsYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bl9fcHJpbWFyeVwiPlxyXG4gICAgICAgIFNhdmVcclxuICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPmVkaXQgZm9yIHt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGlkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5ld0xhYmVsOiB0aGlzLmxhYmVsLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICBpZiAodGhpcy5uZXdMYWJlbCAmJiB0aGlzLm5ld0xhYmVsICE9PSB0aGlzLmxhYmVsKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdChcIml0ZW0tZWRpdGVkXCIsIHRoaXMubmV3TGFiZWwpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DYW5jZWwoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJlZGl0LWNhbmNlbGxlZFwiKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc3QgbGFiZWxJbnB1dFJlZiA9IHRoaXMuJHJlZnMubGFiZWxJbnB1dDtcclxuICAgIGxhYmVsSW5wdXRSZWYuZm9jdXMoKTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmVkaXQtbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGNvbG9yOiAjMGIwYzBjO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5pbnB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0LjRyZW07XHJcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTY1NjU2O1xyXG59XHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuZm9ybSA+ICoge1xyXG4gIGZsZXg6IDAgMCAxMDAlO1xyXG59XHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTViY2RhZjAzJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9BcHAudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjViY2RhZjAzXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNWJjZGFmMDMnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1YmNkYWYwMycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwM1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1YmNkYWYwMycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vVG9Eb0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwNTZjNTQ1XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG9Eb0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RvRG9Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9Ub0RvRm9ybS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjA1NmM1NDVcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2MDU2YzU0NScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzYwNTZjNTQ1JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub0RvRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA1NmM1NDVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjA1NmM1NDUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1RvRG9JdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYjZiMTdkOCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RvRG9JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ub0RvSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1RvRG9JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWViNmIxN2Q4JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi1lYjZiMTdkOFwiXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9Ub0RvSXRlbS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZWI2YjE3ZDhcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdlYjZiMTdkOCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2ViNmIxN2Q4JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub0RvSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWI2YjE3ZDgmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZWI2YjE3ZDgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1RvRG9JdGVtRWRpdEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1MzI4MWJjJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG9Eb0l0ZW1FZGl0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVG9Eb0l0ZW1FZGl0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1RvRG9JdGVtRWRpdEZvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjUzMjgxYmMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTY1MzI4MWJjXCJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL1RvRG9JdGVtRWRpdEZvcm0udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjY1MzI4MWJjXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNjUzMjgxYmMnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2NTMyODFiYycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVG9Eb0l0ZW1FZGl0Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjUzMjgxYmMmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjUzMjgxYmMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ub0RvRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ub0RvRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RvRG9JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RvRG9JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vVG9Eb0l0ZW1FZGl0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ub0RvSXRlbUVkaXRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsIkFwcCIsImNvbnNvbGUiLCJsb2ciLCJtb3VudCIsIlRvRG9JdGVtIiwiVG9Eb0Zvcm0iLCJ1bmlxdWVJZCIsIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsIlRvRG9JdGVtcyIsImlkIiwibGFiZWwiLCJkb25lIiwibWV0aG9kcyIsImFkZFRvRG8iLCJ0b0RvTGFiZWwiLCJwdXNoIiwidXBkYXRlRG9uZVN0YXR1cyIsInRvRG9JZCIsInRvRG9Ub1VwZGF0ZSIsImZpbmQiLCJpdGVtIiwiZGVsZXRlVG9EbyIsIml0ZW1JbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsIiRyZWZzIiwibGlzdFN1bW1hcnkiLCJmb2N1cyIsImVkaXRUb0RvIiwibmV3TGFiZWwiLCJ0b0RvVG9FZGl0IiwiY29tcHV0ZWQiLCJudW1iZXJGaW5pc2hlZEl0ZW1zIiwiZmlsdGVyIiwibGVuZ3RoIiwiY29uY2F0Iiwib25TdWJtaXQiLCIkZW1pdCIsIlRvRG9JdGVtRWRpdEZvcm0iLCJwcm9wcyIsInJlcXVpcmVkIiwidHlwZSIsIlN0cmluZyIsIkJvb2xlYW4iLCJpc0VkaXRpbmciLCJpc0RvbmUiLCJ0b2dnbGVUb0l0ZW1FZGl0Rm9ybSIsImVkaXRCdXR0b24iLCJpdGVtRWRpdGVkIiwiZm9jdXNPbkVkaXRCdXR0b24iLCJlZGl0Q2FuY2VsbGVkIiwiX3RoaXMiLCIkbmV4dFRpY2siLCJlZGl0QnV0dG9uUmVmIiwib25DYW5jZWwiLCJtb3VudGVkIiwibGFiZWxJbnB1dFJlZiIsImxhYmVsSW5wdXQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF90b19kb19mb3JtIiwib25Ub2RvQWRkZWQiLCIkb3B0aW9ucyIsInJlZiIsInRhYmluZGV4IiwiX2hvaXN0ZWRfMyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiJGRhdGEiLCJrZXkiLCJfY29tcG9uZW50X3RvX2RvX2l0ZW0iLCJvbkNoZWNrYm94Q2hhbmdlZCIsIiRldmVudCIsIm9uSXRlbURlbGV0ZWQiLCJvbkl0ZW1FZGl0ZWQiLCJfY2FjaGUiLCJfd2l0aE1vZGlmaWVycyIsImFwcGx5IiwiYXJndW1lbnRzIiwiYXV0b2NvbXBsZXRlIiwibGF6eSIsInRyaW0iLCIkcHJvcHMiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJfY3R4IiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJvbkNsaWNrIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9ob2lzdGVkXzYiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2hvaXN0ZWRfNyIsIl9jcmVhdGVCbG9jayIsIl9jb21wb25lbnRfdG9fZG9faXRlbV9lZGl0X2Zvcm0iLCJvbkVkaXRDYW5jZWxsZWQiXSwic291cmNlUm9vdCI6IiJ9
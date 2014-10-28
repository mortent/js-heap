(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.Heap = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Heap = factory();
  }
}(this, function () {
  'use strict';

  var isFunction = function isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }

  var isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  var buildMaxHeap = function buildMaxHeap(array) {
    for (var i = ~~(array.length / 2); i >= 0; i--) {
      maxHeapify(array, i);
    }      
  }

  var maxHeapify = function maxHeapify(array, i) {
    var left = (2 * i) + 1;
    var right = (2 * i) + 2;
    var largest = i;
    if (left < array.length && array[left] > array[largest]) {
      largest = left;
    }
    if (right < array.length && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== i) {
      var temp = array[i];
      array[i] = array[largest];
      array[largest] = temp;
      maxHeapify(array, largest);
    }
  }

  return function Heap(initialData) {    
    var array = isArray(initialData) ? initialData.slice(0) : [];
    buildMaxHeap(array);

    return {
      deleteMax: function deleteMax() {
        var maxValue = array.splice(0, 1);
        maxHeapify(array, 0);
        return maxValue.shift();
      },
      size: function size() {
        return array.length;
      }
    };
  };
}));
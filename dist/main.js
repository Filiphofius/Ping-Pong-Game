/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	function main() {
	    return __awaiter(this, void 0, void 0, function () {
	        var ball, racket1, racket2, keyState, canvas, ctx, i;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    ball = { x: 500, y: 500, size: 15, color: "#FF0000", fx: 2.1, fy: 2.1 };
	                    racket1 = { y: 0, x: 0, size: 150, color: "#00FF00" };
	                    racket2 = { y: 0, x: 985, size: 150, color: "#0000FF" };
	                    keyState = {};
	                    canvas = document.querySelector("canvas");
	                    ctx = canvas.getContext("2d");
	                    ctx.beginPath();
	                    ctx.fillStyle = "#000000";
	                    ctx.rect(0, 0, 1000, 2);
	                    ctx.fill();
	                    ctx.beginPath();
	                    ctx.fillStyle = "#000000";
	                    ctx.rect(0, 798, 1000, 2);
	                    ctx.fill();
	                    ctx.beginPath();
	                    ctx.fillStyle = racket1.color;
	                    ctx.rect(0, racket1.y, 15, racket1.size);
	                    ctx.fill();
	                    ctx.beginPath();
	                    ctx.fillStyle = racket2.color;
	                    ctx.rect(racket2.x, racket2.y, 15, racket2.size);
	                    ctx.fill();
	                    ctx.beginPath();
	                    ctx.fillStyle = ball.color;
	                    ctx.rect(ball.x, ball.y, ball.size, ball.size);
	                    ctx.fill();
	                    i = 0;
	                    window.addEventListener('keydown', function (e) {
	                        keyState[e.code] = true;
	                    }, true);
	                    window.addEventListener('keyup', function (e) {
	                        keyState[e.code] = false;
	                    }, true);
	                    _a.label = 1;
	                case 1:
	                    if (false) return [3 /*break*/, 3];
	                    ctx.clearRect(ball.x, ball.y, ball.size, ball.size);
	                    ball.x += Math.round(ball.fx);
	                    ball.y += Math.round(ball.fy);
	                    if (ball.x > 1000 - ball.size - 16) {
	                        if (ball.y > racket2.y && ball.y < racket2.y + racket2.size) {
	                            ball.fx = ball.fx * -1;
	                        }
	                        else
	                            return [3 /*break*/, 3];
	                    }
	                    ;
	                    if (ball.x < 0 + 16) {
	                        if (ball.y > racket1.y && ball.y < racket1.y + racket1.size) {
	                            ball.fx = ball.fx * -1;
	                        }
	                        else
	                            return [3 /*break*/, 3];
	                    }
	                    ;
	                    if (ball.y > 796 - ball.size || ball.y < 4)
	                        ball.fy = ball.fy * -1;
	                    ctx.beginPath();
	                    ctx.fillStyle = ball.color;
	                    ctx.rect(ball.x, ball.y, ball.size, ball.size);
	                    ctx.fill();
	                    if (keyState["KeyW"] && racket1.y > 0) {
	                        moveRacket(racket1, ctx, -5);
	                    }
	                    if (keyState["KeyS"] && racket1.y < 800 - racket1.size) {
	                        moveRacket(racket1, ctx, 5);
	                    }
	                    if (keyState["ArrowUp"] && racket2.y > 0) {
	                        moveRacket(racket2, ctx, -5);
	                    }
	                    if (keyState["ArrowDown"] && racket2.y < 800 - racket2.size) {
	                        moveRacket(racket2, ctx, 5);
	                    }
	                    return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 5); })];
	                case 2:
	                    _a.sent();
	                    return [3 /*break*/, 1];
	                case 3: return [2 /*return*/];
	            }
	        });
	    });
	}
	main();
	function moveRacket(racket, ctx, factor) {
	    ctx.beginPath();
	    ctx.clearRect(racket.x, racket.y, 15, racket.size);
	    racket.y += factor;
	    ctx.rect(racket.x, racket.y, 15, racket.size);
	    ctx.fillStyle = racket.color;
	    ctx.fill();
	}


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
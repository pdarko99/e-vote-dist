"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgDetails = void 0;
var candidateModel_1 = __importDefault(require("./candidateModel"));
var OrgDetails = /** @class */ (function () {
    function OrgDetails() {
    }
    OrgDetails.prototype.createCandidate = function (req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, data, cand, savedCand, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = process.env.PORT || 'http://localhost:3000';
                        // req.body.id = req.query.id
                        if (req.file) {
                            req.body.pic = url + "/" + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
                        }
                        data = __assign({}, req.body);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        cand = new candidateModel_1.default(data);
                        return [4 /*yield*/, cand.save()];
                    case 2:
                        savedCand = _b.sent();
                        return [2 /*return*/, res.status(200).send({ message: "candidate saved successfully" })];
                    case 3:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrgDetails.prototype.updateCandiate = function (req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, filter, update, updatedData, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = process.env.PORT || 'http://localhost:3000';
                        filter = { _id: req.query.id };
                        if (req.file) {
                            req.body.pic = url + "/" + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
                        }
                        update = req.body;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, candidateModel_1.default.findOneAndUpdate(filter, update, { new: true })];
                    case 2:
                        updatedData = _b.sent();
                        return [2 /*return*/, res.status(200).send({ message: 'updated successfully' })];
                    case 3:
                        error_2 = _b.sent();
                        next(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrgDetails.prototype.deleteCandidate = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deleted, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, candidateModel_1.default.findByIdAndDelete({ _id: req.query.delId })];
                    case 1:
                        deleted = _a.sent();
                        return [2 /*return*/, res.status(200).json({ "message": "deleted successfully" })];
                    case 2:
                        error_3 = _a.sent();
                        next(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrgDetails.prototype.getAllCandidates = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, allCands, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.orgId;
                        return [4 /*yield*/, candidateModel_1.default.find({ id: id })];
                    case 1:
                        allCands = _a.sent();
                        return [2 /*return*/, res.status(200).json({ "message": "success", allCands: allCands })];
                    case 2:
                        error_4 = _a.sent();
                        next(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return OrgDetails;
}());
exports.OrgDetails = OrgDetails;
//# sourceMappingURL=orgCandsController.js.map
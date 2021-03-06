"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.createJob = exports.getJob = exports.getJobs = void 0;
var jobRepository = require("./data");
function getJobs(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, q, district, suburb, category, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.query, q = _a.q, district = _a.district, suburb = _a.suburb, category = _a.category;
                    return [4, jobRepository.get(q, district, suburb, category)];
                case 1:
                    data = _b.sent();
                    res.status(200).json(data);
                    return [2];
            }
        });
    });
}
exports.getJobs = getJobs;
function getJob(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, job;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4, jobRepository.getById(id)];
                case 1:
                    job = _a.sent();
                    if (job) {
                        res.status(200).json(job);
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [2];
            }
        });
    });
}
exports.getJob = getJob;
function createJob(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, district, suburb, category, detail, images, pay, value, userId, job;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, title = _a.title, district = _a.district, suburb = _a.suburb, category = _a.category, detail = _a.detail, images = _a.images, pay = _a.pay;
                    value = { title: title, district: district, suburb: suburb, category: category, detail: detail, images: images, pay: pay };
                    userId = res.locals.userId;
                    return [4, jobRepository.create(value, userId)];
                case 1:
                    job = _b.sent();
                    res.status(201).json(job);
                    return [2];
            }
        });
    });
}
exports.createJob = createJob;
function updateJob(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, text, job;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    text = req.body.text;
                    return [4, jobRepository.update(id, text)];
                case 1:
                    job = _a.sent();
                    if (job) {
                        res.status(200).json(job);
                    }
                    else {
                        res.status(404).json({ message: "Job id(" + id + ") not found" });
                    }
                    return [2];
            }
        });
    });
}
exports.updateJob = updateJob;
function deleteJob(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4, jobRepository.remove(id)];
                case 1:
                    _a.sent();
                    res.sendStatus(204);
                    return [2];
            }
        });
    });
}
exports.deleteJob = deleteJob;
//# sourceMappingURL=controller.js.map
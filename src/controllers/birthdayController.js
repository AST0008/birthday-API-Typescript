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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBirthday = exports.updateBirthday = exports.getBirthday = exports.addBirthday = void 0;
const birthdayModel_1 = __importDefault(require("../models/birthdayModel"));
const addBirthday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, date } = req.body;
    try {
        const newBirthday = new birthdayModel_1.default({ name, date });
        yield newBirthday.save();
        res.status(201).json(newBirthday);
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
});
exports.addBirthday = addBirthday;
const getBirthday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name;
        console.log("Searching for person with name:", name);
        const person = yield birthdayModel_1.default.findOne({ name });
        if (person) {
            res.send({ name: person.name, date: person.date });
        }
        else {
            res.status(404).send("Person not found");
        }
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
});
exports.getBirthday = getBirthday;
const updateBirthday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.body;
        const person = yield birthdayModel_1.default.findOneAndUpdate({ name: req.params.name }, { date }, { new: true });
        if (person) {
            res.send(person);
        }
        else {
            res.status(404).send("Person not Found");
        }
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
});
exports.updateBirthday = updateBirthday;
const deleteBirthday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield birthdayModel_1.default.findOneAndDelete({ name: req.params.name });
        if (person) {
            res.send("Person Deleted");
        }
        else {
            res.status(404).send("Person not Found");
        }
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
});
exports.deleteBirthday = deleteBirthday;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const birthdayRoutes_1 = __importDefault(require("./routes/birthdayRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect('mongodb+srv://ashwajittayade30:4BahF8C8pxp4xBgT@cluster0.6plgfng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
// useNewUrlParser: true,
// useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch((error) => console.log(error));
app.use('/api/person', birthdayRoutes_1.default);
app.listen(3000, () => {
    console.log('Connected to server 3000');
});

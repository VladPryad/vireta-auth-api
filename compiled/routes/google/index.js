"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var isloggedin_1 = require("../../middlewares/isloggedin");
var router = express_1.default.Router();
var googleController = __importStar(require("../../controllers/google"));
router.get('/auth/google', googleController.google);
router.get('/auth/google/callback', googleController.google_callback);
router.get('/auth/google/failed', googleController.google_failed);
router.get('/auth/google/success', isloggedin_1.isLoggedIn, googleController.google_success);
router.get('/logout', googleController.google_logout);
router.get('/loggedout', googleController.google_loggedout);
exports.default = router;
//# sourceMappingURL=index.js.map
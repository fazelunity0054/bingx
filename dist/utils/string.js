"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = void 0;
function generateRandomString(charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', length = 10) {
    // Validate the provided length
    if (length < 1 || !Number.isInteger(length)) {
        throw new Error('Invalid length. Please provide a positive integer.');
    }
    // Generate random string with the provided (or default) length
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
    }
    return randomString;
}
exports.generateRandomString = generateRandomString;

const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/show-account', controller.showAccount);
router.post('/show-account-new-model', controller.showAccountNewModels);
router.post('/find-account', controller.findAccount);
router.post('/send-email', controller.sendEmail);

router.post('/coba-va-bca', controller.cobavabca);
router.post('/coba-checkout', controller.cobacheckout);
router.post('/coba-ovo', controller.cobaovo);

router.post('/token', controller.token);
router.post('/pdf', controller.createpdf, controller.receivedpdf);

router.post('/upld', controller.uploadFile);
router.post('/upload-file-v2', controller.uploadFileV2);

module.exports = router;
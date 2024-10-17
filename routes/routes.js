import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('anasayfa.ejs'); // No need to include .ejs if set correctly in the app
});

router.get('/hakkimizda', (req, res) => {
    res.render('hakkimizda.ejs'); // No need to include .html if set correctly in the app
});
router.get('/hizmetlerimiz', (req, res) => {
    res.render('hizmetlerimiz.ejs'); // No need to include .html if set correctly in the app
});
router.get('/iletisim', (req, res) => {
    res.render('iletisim.ejs'); // No need to include .html if set correctly in the app
});
router.get('/admin', (req, res) => {
    res.render('admin');
});
export default router;

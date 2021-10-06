import express from 'express';
var app = express();
app.set('port', process.env.PORT || 3001);
app.use(function (req, res) {
    res.type('szöveg / sima');
    res.status(404);
    res.send('404 - nem található');
});
app.use(function (err, req, res, next) {
    console.error(err.verem);
    res.type('text / sima');
    res.status(500);
    res.send('500 - Valami rossz!');
});
app.listen(app.get('port'), function () {
    console.log('Az expressz elindult a http: // localhost:' + app.get('port') + 'helyen; a Ctrl-C megnyomásával zárja be a szervert.');
});
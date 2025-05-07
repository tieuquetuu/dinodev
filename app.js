let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let nextServer = require('next')
let url = require('url')

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

const port = parseInt(app.get('env').PORT || '3000', 10)
const dev = app.get('env') === 'development'
let nextApp = nextServer({
    dev: dev,
    port,
    // dir: './next-app' // Đảm bảo đường dẫn chính xác đến thư mục Next.js
})
const handle = nextApp.getRequestHandler()

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

nextApp.prepare().then(() => {
    // Xử lý tất cả các request bằng Next.js handler
    app.all('*', (req, res) => {
        return handle(req, res);
    });

    // app.use(express.static(path.join(__dirname, 'public'))); // Di chuyển xuống dưới handler của Next.js

    // app.use('/', indexRouter); // Nếu bạn vẫn muốn sử dụng routes của Express
    // app.use('/users', usersRouter); // Đảm bảo các routes này không trùng với Next.js pages

    // catch 404 và forward đến error handler (cho các route của Express)
    app.use(function(req, res, next) {
        next(createError(404));
    });

    // error handler (cho các lỗi của Express)
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = dev ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

module.exports = app;

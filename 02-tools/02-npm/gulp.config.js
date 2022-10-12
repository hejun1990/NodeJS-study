const { src, dest, series } = require('gulp')

const node_env = process.env.NODE_ENV
console.log(node_env)

function scripts() {
    return src('02-scripts/test.js', { sourcemap: true })
        .pipe(dest('02-scripts/bundle'))
}

const build = series(scripts)

exports.default = build
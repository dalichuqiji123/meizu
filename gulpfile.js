const mode = process.argv[2];
switch (mode) {
    case 'dev':
        require('./gulpfile-dev.js')
    case 'build':
        require('./gulpfile-build.js')
} 
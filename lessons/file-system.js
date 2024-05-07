const fs = require('fs')
const path = require('path')

// console.log('START')

// fs.mkdirSync(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log('Папка создана')
// })

// console.log('END')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 7 9 10', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('Файл записан')

//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВИЛИ КОНЕЦ', (err) => {
//         if(err) {
//             throw err;
//         }
//     })
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВИЛИ КОНЕЦ', (err) => {
//         if(err) {
//             throw err;
//         }
//         console.log('Файл записан')
//     })
// })

// const fsPromise = require('fs/promises')

// fsPromise.mkdir('/').then().catch()
// fsPromise.readFile('/').then().catch()
// fsPromise.writeFile('/').then().catch()
// fsPromise.appendFile('/').then().catch()
// fsPromise.rm('/').then().catch()
// fsPromise.rmdir('/').then().catch()

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path,data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'578'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .then(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('file was removed'))

const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
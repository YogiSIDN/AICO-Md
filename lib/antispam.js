const toMs = require('ms')
const fs = require('fs-extra')

// Message filter
const usedCommandRecently = new Set()

/**
 * Check is number filtered.
 * @param {String} from 
 * @returns {Boolean}
 */
const isFiltered = (from) => {
    return !!usedCommandRecently.has(from)
}

/**
 * Add number to filter.
 * @param {String} from 
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => {
        return usedCommandRecently.delete(from)
    }, 5000) // 5 seconds delay, I don't recommend below that.
}

const addSpam = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].spam += 1
    } else {
        const bulin = ({ id: sender, spam: 1, expired: Date.now() + toMs('5m') })
        _db.push(bulin)
        fs.writeFileSync('./database/user/spam.json', JSON.stringify(_db))
    }
}

const ResetSpam = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Spam expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/user/spam.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isSpam = (sender, _db) => {
    let found = false
    for (let i of _db) {
        if (i.id === sender) {
            let spam = i.spam
            if (spam >= 5) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
}
module.exports = {
    isFiltered,
    addFilter,
    addSpam,
    ResetSpam,
    isSpam
}
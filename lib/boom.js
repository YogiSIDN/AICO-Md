exports.isBoom = (Jid, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === Jid) {
            status = true
        }
    })
    return status
}

exports.getBomTic = (Jid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === Jid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
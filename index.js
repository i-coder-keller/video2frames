function validate(source, container, time, sync) {
    return new Promise((resolve) => {
        const video = document.createElement("video")
        let validity = true
        let error = null
        video.setAttribute("src", source)
        video.onerror = function (error) {
            validity = false
            error = error
        }
        if (!Array.isArray(container)) {
            validate = false
            error = "container not is Array"
        }
        if (typeof time !== "number") {
            validate = false
            error = "number not is Number"
        }
        if (typeof sync !== 'boolean') {
            validate = false
            error = "sync not is Boolean"
        }
        resolve({
            validity,
            error
        })

    })
}
/**
 * 
 * @param {String} source 
 * @param {Array} container 
 * @param {Number} time 
 * @param {Boolean} sync 
 */

function index(source, container, time, sync = false) {
    validate(source, container, time, sync)
        .then(function (result) { 
            if (!result.validity) {
                console.error(result.error)
                return
            }
            video2frames(source, container, time)
        })
        .catch(function (reason) { 
            console.error(reason)
        })
}

export default index
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
        if (typeof callback !== "function") {
            validate = false
            error = ""
        }
        resolve({
            validity,
            error
        })

    })
}

function video2frames(source, container, time, callback) {
    const video = document.createElement("video")
    video.setAttribute("src", source)
    video.onloadedmetadata = function() {
        let i = 0
        while( i <= video.duration) {
            const canvas = document.createElement("canvas")
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            const ctx = canvas.getContext('2d')
            ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
            const image = canvas.toDataURL("image/jepg")
            container.push(image)
            callback(container, image)
            i += time
            if ( i > video.duration && i < video.duration + time) {
                i = video.duration
            }
        }
    }
}
/**
 * 
 * @param {String} source 
 * @param {Array} container 
 * @param {Number} time 
 * @param {Function} callback 
 */

function index(source, container, time, callback = () => {}) {
    validate(source, container, time, callback)
        .then(function (result) { 
            if (!result.validity) {
                console.error(result.error)
                return
            }
            video2frames(source, container, time, callback)
        })
        .catch(function (reason) { 
            console.error(reason)
        })
}

export default index
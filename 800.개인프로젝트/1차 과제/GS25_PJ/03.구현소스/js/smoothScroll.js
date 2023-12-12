// GS25 PJ 부드러운스크롤 JS - smoothScroll.js

function startSS(){
    new SmoothScroll(document, 100, 12)
}

let pos;

function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target = (document.scrollingElement ||
            document.documentElement ||
            document.body.parentNode ||
            document.body)
    
    var moving = false
    pos = target.scrollTop
    var frame = target === document.body &&
        document.documentElement ?
        document.documentElement :
        target

    // 최신 통합 이벤트
    target.addEventListener('wheel',scrolled, {
        passive: false
    })
    target.addEventListener('mousewheel',scrolled,{
        passive: false
    })
    target.addEventListener('DOMMouseScroll',scrolled,{
        passive: false
    })

    function scrolled(e) {
        e.preventDefault();

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight))

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 50 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 1)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}
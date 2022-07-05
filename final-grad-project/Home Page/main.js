var remveAllActiveClasses = function () {
    document.querySelectorAll("li a").forEach((el) => {
        el.classList.remove(active);
    });
};

var addActiveClass = function (id) {
    console.log(id);
    var selector = 'li a[href="#${id}"]';
    document.querySelector(selector).classList.add(active);
};


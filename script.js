`use strict`;

function warningScroll() {
    const elem = document.getElementById(`animeWarning`);
    if (!elem.hasAttribute(`open`)) {
        elem.scrollIntoView({block: `end`, behavior: `smooth`});
    }
};

function contactInAndOut() {
    const elem = document.getElementById(`contact`);
    const parentElem = document.getElementById(`blackoutForContact`);

    if (elem.style.top === `-200%`) {
        elem.style.top = `0px`;
        parentElem.style.background = `rgba(0, 0, 0, 0.77)`
        parentElem.style.zIndex = `0`;
    } else if (elem.style.top === `0px`) {
        elem.style.top = `-200%`;
        parentElem.style.background = `rgba(0, 0, 0, 0)`
        parentElem.style.zIndex = `-1`;
    };
};

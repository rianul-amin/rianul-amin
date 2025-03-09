export const slideUp = {
    initial: {
        top: "0"
    },
    exit: {
        top: "-200vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const slideDown = {
    initial: {
        bottom: "0"
    },
    exit: {
        bottom: "-200vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const slideRight = {
    initial: {
        right: "0"
    },
    exit: {
        right: "-200vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }

}
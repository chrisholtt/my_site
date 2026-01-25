export const pageTransition = {
    hidden: { opacity: 0, y: 5 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

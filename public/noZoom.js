window.addEventListener(
    'wheel',
    (e) => {
        if (e.ctrlKey) e.preventDefault(); // prevent zoom
    },
    { passive: false },
);

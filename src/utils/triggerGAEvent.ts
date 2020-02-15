export default (eventName: string, eventParams: Gtag.ControlParams | Gtag.CustomParams | Gtag.EventParams) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

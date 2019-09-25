export default () =>
    typeof window !== 'undefined' && (window.isApp || window.navigator.userAgent.indexOf('isApp') >= 0);

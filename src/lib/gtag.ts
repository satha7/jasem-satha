export const handleCallConversion = (url: string) => {
  if (typeof (window as any).gtag_report_conversion === 'function') {
    (window as any).gtag_report_conversion(url);
    return false;
  }
  window.location.href = url;
  return false;
};

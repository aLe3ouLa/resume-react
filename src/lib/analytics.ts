declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

export function trackPageView(path: string) {
    window.gtag?.('event', 'page_view', {
        page_path: path,
        page_title: document.title,
        page_location: window.location.href,
    });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
    window.gtag?.('event', name, params);
}

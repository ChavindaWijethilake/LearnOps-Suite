export interface MetricLabels {
    [key: string]: string | number;
}

// In-memory stats storage
const counters = new Map<string, number>();
const gauges = new Map<string, number>();
const histograms = new Map<string, number[]>();

function serializeLabels(labels?: MetricLabels): string {
    if (!labels) return '';
    const sortedKeys = Object.keys(labels).sort();
    return sortedKeys.map(k => `${k}=${labels[k]}`).join(',');
}

export const metrics = {
    /** Increment a counter metric */
    increment(name: string, value: number = 1, labels?: MetricLabels) {
        const key = `${name}{${serializeLabels(labels)}}`;
        const current = counters.get(key) || 0;
        counters.set(key, current + value);
        // console.log(`[Metrics] Increment ${key} by ${value}`);
    },

    /** Set a gauge to a specific value */
    setGauge(name: string, value: number, labels?: MetricLabels) {
        const key = `${name}{${serializeLabels(labels)}}`;
        gauges.set(key, value);
    },

    /** Record a timing or distribution value */
    observe(name: string, value: number, labels?: MetricLabels) {
        const key = `${name}{${serializeLabels(labels)}}`;
        if (!histograms.has(key)) {
            histograms.set(key, []);
        }
        histograms.get(key)!.push(value);
    },

    /** Export all metrics (e.g., for Prometheus scraping endpoint) */
    exportAll() {
        return {
            counters: Object.fromEntries(counters),
            gauges: Object.fromEntries(gauges),
            histograms: Object.fromEntries(histograms)
        };
    }
};

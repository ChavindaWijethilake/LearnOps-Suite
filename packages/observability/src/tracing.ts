export interface SpanContext {
    traceId: string;
    spanId: string;
    parentId?: string;
}

export interface TraceSpan {
    name: string;
    context: SpanContext;
    startTime: number;
    endTime?: number;
    tags: Record<string, string>;
}

export const tracer = {
    startSpan(name: string, parentContext?: SpanContext): TraceSpan {
        const traceId = parentContext?.traceId || `trace-${Math.random().toString(36).substring(2, 10)}`;
        const spanId = `span-${Math.random().toString(36).substring(2, 6)}`;

        return {
            name,
            context: {
                traceId,
                spanId,
                parentId: parentContext?.spanId
            },
            startTime: Date.now(),
            tags: {}
        };
    },

    endSpan(span: TraceSpan) {
        span.endTime = Date.now();
        const duration = span.endTime - span.startTime;

        // Internal structured log or export mechanism
        // console.log(`[Trace] ${span.context.traceId} | Span: ${span.name} took ${duration}ms`);
    }
};

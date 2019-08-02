export type headersType={
    authorization?: string
}

export type eventType = {
    headers?: headersType,
    body?: any
}

export type contextType = {
    functionName?: string
}

export type eventContextType = {
    event: eventType,
    context: contextType
}
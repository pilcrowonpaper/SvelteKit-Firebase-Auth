export const request = async (path, method, body = {}) => {
    return await fetch(path, {
        method,
        body: JSON.stringify(body)
    });
}
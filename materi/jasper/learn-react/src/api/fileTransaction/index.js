export function downloadReportService() {
    return fetch('http://localhost:3000/harbour/report/', {
        method: 'GET'
    });
}
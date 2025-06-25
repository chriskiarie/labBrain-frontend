// LabBrain API Configuration
const config = {
    // Development (local) backend
    development: {
        apiUrl: 'http://localhost:5000'
    },
    // Production (deployed) backend
    production: {
        apiUrl: 'https://labbrain-backend.onrender.com'
    }
};

// Auto-detect environment based on hostname
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const currentConfig = isDevelopment ? config.development : config.production;

// Export the current API URL
window.LabBrainConfig = {
    apiUrl: currentConfig.apiUrl
}; 
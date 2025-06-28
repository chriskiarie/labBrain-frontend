# LabBrain Frontend Deployment Guide

## ✅ API URLs Updated

### Files Modified:
1. **`public/index.html`** - Main login page
2. **`public/lab_user_dashboard.html`** - Lab user dashboard
3. **`public/supervisor_dashboard.html`** - Supervisor dashboard
4. **`public/config.js`** - Configuration file (new)

### Changes Made:

#### 1. API URL Updates
- **Before:** `http://localhost:5000/api/auth/login`
- **After:** Dynamic URL based on environment

#### 2. Configuration System
- Created `config.js` for environment-based API URL management
- **Development:** `http://localhost:5000`
- **Production:** `https://labbrain-backend.onrender.com`

#### 3. Files Updated:
- ✅ `public/index.html` - Login API call updated
- ✅ `public/lab_user_dashboard.html` - Config script added
- ✅ `public/supervisor_dashboard.html` - Config script added
- ✅ `public/config.js` - New configuration file

## 🚀 Deployment Steps

### 1. Test Locally
```bash
# Start your local backend
npm run dev

# Open http://localhost:5000 in browser
# Should automatically use localhost:5000 for API calls
```

### 2. Deploy to Netlify
1. **Create GitHub repository** for frontend files
2. **Upload `public/` folder** to the repository
3. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" > "Import an existing project"
   - Select your GitHub repository
   - Set publish directory to `public`
   - Deploy

### 3. Update Backend CORS
In your Render backend, update CORS to allow your Netlify domain:
```javascript
app.use(cors({
  origin: [
    'https://your-netlify-site.netlify.app', // Replace with your Netlify URL
    'http://localhost:3000' // For local development
  ],
  credentials: true
}));
```

## 🔧 Configuration Details

### config.js
```javascript
const config = {
    development: {
        apiUrl: 'http://localhost:5000'
    },
    production: {
        apiUrl: 'https://labbrain-backend.onrender.com'
    }
};
```

### How It Works:
- **Local Development:** Automatically uses `localhost:5000`
- **Production:** Automatically uses your Render backend URL
- **No Manual Changes:** Environment detection is automatic

## 📋 Checklist for Deployment

- [ ] All HTML files updated with config.js
- [ ] API URLs use dynamic configuration
- [ ] Backend CORS updated for Netlify domain
- [ ] Test login functionality locally
- [ ] Deploy to Netlify
- [ ] Test login functionality on Netlify
- [ ] Verify dashboard navigation works

## 🐛 Troubleshooting

### Common Issues:
1. **CORS Errors:** Update backend CORS with Netlify URL
2. **API Not Found:** Check if backend URL is correct in config.js
3. **Login Fails:** Verify backend is running and accessible

### Test Commands:
```bash
# Test backend health
curl https://labbrain-backend.onrender.com/api/health

# Test login endpoint
curl -X POST https://labbrain-backend.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"supervisor","password":"superpass123"}'
```

## 📞 Support
If you encounter issues:
1. Check browser console for errors
2. Verify backend is running on Render
3. Confirm CORS settings are correct
4. Test API endpoints directly 
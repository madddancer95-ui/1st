# 🚀 DOMAIN CONNECTION & DEPLOYMENT COMMANDS

## **Domain: delhitattooshop.com**

---

## 🌐 **STEP 1: DNS CONFIGURATION (GoDaddy/Domain Provider)**

**Copy these commands to configure DNS:**

```bash
# DNS RECORDS TO ADD IN YOUR DOMAIN PROVIDER:

# A Records (Point to Vercel)
Record Type: A
Name: @
Value: 76.76.19.61
TTL: 1800

Record Type: A  
Name: @
Value: 76.223.126.88
TTL: 1800

# CNAME Record (WWW subdomain)
Record Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1800
```

---

## 📋 **STEP 2: VERCEL DEPLOYMENT COMMANDS**

**Run these commands in your terminal:**

```bash
# Navigate to project directory
cd /Users/maddy/my-astro-site

# Build the project
npm run build

# Deploy to Vercel (if not already connected)
npx vercel --prod

# Add custom domain to Vercel project
npx vercel domains add delhitattooshop.com

# Add www subdomain
npx vercel domains add www.delhitattooshop.com
```

---

## 🔧 **STEP 3: ALTERNATIVE DIRECT DEPLOYMENT**

**If Vercel CLI has issues, use these:**

```bash
# Option 1: Force deploy
npx vercel --prod --force

# Option 2: GitHub Auto-deployment
git add .
git commit -m "🚀 DOMAIN UPDATE: delhitattooshop.com - Ready for production deployment"
git push origin main

# Option 3: Manual Vercel Dashboard
# Go to: https://vercel.com/dashboard
# Import project from GitHub: https://github.com/madddancer95-ui/1st.git
# Add domain: delhitattooshop.com
```

---

## ⚡ **STEP 4: DOMAIN VERIFICATION**

**Test your domain after DNS propagation (2-6 hours):**

```bash
# Check DNS propagation
nslookup delhitattooshop.com
nslookup www.delhitattooshop.com

# Test website response
curl -I https://delhitattooshop.com
curl -I https://www.delhitattooshop.com
```

---

## 🎯 **EXPECTED RESULTS**

**After successful setup:**
- ✅ https://delhitattooshop.com → Shows your professional tattoo website
- ✅ https://www.delhitattooshop.com → Redirects to main domain
- ✅ All pages working: /artists, /pricing-calculator, /locations
- ✅ Fast loading (Astro optimized)

---

## 🚨 **TROUBLESHOOTING**

**If domain doesn't work:**

```bash
# Check Vercel project settings
npx vercel domains ls

# Remove and re-add domain
npx vercel domains rm delhitattooshop.com
npx vercel domains add delhitattooshop.com

# Check deployment status
npx vercel ls
```

---

## 📞 **QUICK DEPLOY COMMAND SEQUENCE**

**Copy and paste this entire block:**

```bash
cd /Users/maddy/my-astro-site
npm run build
npx vercel --prod
npx vercel domains add delhitattooshop.com
npx vercel domains add www.delhitattooshop.com
echo "🚀 Deployment initiated! Check DNS propagation in 2-6 hours."
echo "🌐 Your website will be live at: https://delhitattooshop.com"
```

---

## 🎯 **FINAL VERIFICATION URLS**

**Test these URLs after deployment:**
- https://delhitattooshop.com
- https://delhitattooshop.com/artists  
- https://delhitattooshop.com/pricing-calculator
- https://delhitattooshop.com/connaught-place-tattoo-studio
- https://delhitattooshop.com/karol-bagh-tattoo-shop

**Your world-class tattoo website will be LIVE! 🔥**
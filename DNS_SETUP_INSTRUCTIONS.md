# DNS Setup Instructions for delhitattooshop.com

## Problem
Domain delhitattooshop.com is pointing to GoDaddy servers instead of Vercel.
Current DNS: 76.223.105.230 (GoDaddy)
Should point to: Vercel servers

## Solution - Update DNS in GoDaddy

### Method 1: A Records (Recommended)
```
Type: A    Name: @      Value: 216.198.79.3     TTL: 600
Type: A    Name: @      Value: 64.29.17.3       TTL: 600
Type: CNAME Name: www   Value: cname.vercel-dns.com TTL: 600
```

### Method 2: CNAME Records (Alternative)
```
Type: CNAME Name: @     Value: 1st-virid.vercel.app TTL: 600
Type: CNAME Name: www   Value: 1st-virid.vercel.app TTL: 600
```

## Steps:
1. Login to GoDaddy
2. Go to My Products → Domain Settings → DNS
3. Delete existing A records (76.223.x.x)
4. Add new records as shown above
5. Save changes
6. Wait 5-30 minutes for propagation

## Verification:
After DNS update, delhitattooshop.com will show the same content as:
https://1st-virid.vercel.app

## Current Status:
✅ Website is LIVE on https://1st-virid.vercel.app
❌ Custom domain needs DNS update
✅ All features working perfectly
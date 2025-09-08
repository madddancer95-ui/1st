# 🤖 COMET BROWSER AUTOMATION: Fix delhitattooshop.com DNS

## TASK OBJECTIVE
Update DNS A records in GoDaddy to point delhitattooshop.com to Vercel hosting instead of current GoDaddy parking page.

## CURRENT PROBLEM
- ✅ www.delhitattooshop.com = WORKS (shows professional tattoo website)
- ❌ delhitattooshop.com = BROKEN (shows "Launching Soon" parking page)

## AUTOMATION STEPS FOR COMET BROWSER

### STEP 1: Navigate to GoDaddy DNS Management
```
URL: https://dnsmanagement.godaddy.com
ACTION: Navigate to this URL
WAIT: Page to fully load
```

### STEP 2: Login Authentication
```
ACTION: Look for login form or "Sign In" button
INPUT: Enter GoDaddy account credentials
CLICK: Sign In button
WAIT: For dashboard to load
```

### STEP 3: Select Domain
```
ACTION: Look for domain list or search box
SEARCH: "delhitattooshop.com"
CLICK: On "delhitattooshop.com" domain
WAIT: For DNS management page to load
```

### STEP 4: Find DNS Records Section
```
ACTION: Look for "DNS" tab, "DNS Records", or "Manage DNS"
CLICK: On DNS management section
WAIT: For DNS records table to load
```

### STEP 5: Locate A Records to Modify
```
TARGET: Find A records with name "@" or blank name field
CURRENT VALUES TO FIND:
- A record: @ → 76.76.19.61
- A record: @ → 13.248.243.5
ACTION: Identify these two specific A records
```

### STEP 6: Edit First A Record
```
ACTION: Click "Edit" or pencil icon on first A record (76.76.19.61)
CHANGE: Value from "76.76.19.61" to "76.76.21.98"
KEEP: Name as "@" (or blank)
KEEP: Type as "A"
KEEP: TTL as current value (usually 1 hour or 3600)
ACTION: Save/Apply changes
```

### STEP 7: Edit Second A Record
```
ACTION: Click "Edit" or pencil icon on second A record (13.248.243.5)  
CHANGE: Value from "13.248.243.5" to "66.33.60.35"
KEEP: Name as "@" (or blank)
KEEP: Type as "A"
KEEP: TTL as current value (usually 1 hour or 3600)
ACTION: Save/Apply changes
```

### STEP 8: Verify CNAME Record Exists
```
TARGET: Look for CNAME record with name "www"
EXPECTED: www → cname.vercel-dns.com
ACTION: If missing, create CNAME record:
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com
- TTL: 1 hour
```

### STEP 9: Save All Changes
```
ACTION: Look for "Save All Changes", "Update Zone", or "Apply" button
CLICK: Final save button
WAIT: For confirmation message
```

### STEP 10: Confirmation Screenshot
```
ACTION: Take screenshot of final DNS records showing:
- A record: @ → 76.76.21.98
- A record: @ → 66.33.60.35  
- CNAME record: www → cname.vercel-dns.com
```

## EXPECTED FINAL DNS CONFIGURATION
```
Type    Name    Value                    TTL
A       @       76.76.21.98             1 hour
A       @       66.33.60.35             1 hour
CNAME   www     cname.vercel-dns.com    1 hour
```

## SUCCESS CRITERIA
After completing these steps:
1. DNS changes saved successfully in GoDaddy
2. Both A records updated to new Vercel IPs
3. CNAME record exists for www subdomain
4. Confirmation message or success indicator visible

## TROUBLESHOOTING NOTES
- If login fails: Check credentials or look for 2FA prompts
- If domain not found: Try searching or check account permissions
- If records not editable: Look for "Advanced" or "Expert Mode"
- If save fails: Check for validation errors or required fields

## POST-AUTOMATION VERIFICATION
After 5-10 minutes, these commands should show success:
```bash
nslookup delhitattooshop.com
# Should show: 76.76.21.98 and 66.33.60.35

curl -I https://delhitattooshop.com/
# Should show: Server: Vercel (not GoDaddy DPS)
```

## AUTOMATION PRIORITY
🔥 HIGH PRIORITY - This fixes the main domain access issue preventing customers from reaching the website.

---
**📋 PROVIDE FEEDBACK:** Report success/failure and any screenshots of the final DNS configuration.
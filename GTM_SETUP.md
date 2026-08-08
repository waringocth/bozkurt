# Google Tag Manager & Google Ads Tracking Setup

This document outlines the tracking infrastructure built into the Bozkurt Çilingir website and provides instructions on how to configure Google Tag Manager (GTM) and Google Ads for accurate conversion reporting.

## 1. Important Container Reminder

**🚨 CRITICAL WARNING:** You must create a **completely fresh and dedicated** GTM container for `bozkurtcilingir.com`. 
- **DO NOT** reuse any existing client GTM container ID from other projects.
- **DO NOT** share this container across other client domains.
- Mixing domains in a single GTM container or Google Ads account can trigger Google's **"Compromised Site"** policy, which we encountered on a previous project. Keep this infrastructure isolated.

Once you have created the new GTM container, set its ID in your environment variables:
```env
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"
```

## 2. Cookie Consent Integration

The GTM script has been deeply integrated with the site's cookie consent banner (`CookieConsent.tsx`).
- The GTM snippet (`GTMWrapper.tsx`) **will not load** into the DOM until the user explicitly clicks "Kabul Et" on the consent banner.
- When consent is granted, the banner fires a `cookie_consent_granted` event to the `dataLayer` and uses Google's Consent Mode API (`gtag('consent', 'update', ...)`) to grant `ad_storage` and `analytics_storage`.
- You do not need to configure complex Consent Mode blocking triggers in GTM, because the container itself only initializes after consent is granted.

## 3. DataLayer Events & Parameters

The Call and WhatsApp buttons across the entire site are wired to push the `cta_click` event to the `dataLayer`. You can use this event to fire your conversion tags in GTM.

### Event Name
- `cta_click`

### Event Parameters
Every `cta_click` event pushes the following variables to the `dataLayer`:
- `cta_type`: Indicates the contact method. Values are `"call"` or `"whatsapp"`.
- `section`: Indicates which business division generated the lead. Values are `"cilingir"` (residential/locksmith) or `"oto"` (automotive).
- `page_path`: The specific URL path where the click occurred (e.g., `/cilingir/esenyurt` or `/oto-anahtarci`).

**Example DataLayer Push:**
```javascript
{
  event: "cta_click",
  cta_type: "whatsapp",
  section: "oto",
  page_path: "/oto-anahtarci/kucukcekmece"
}
```

## 4. Google Ads Conversion Setup

To ensure you can segment your Google Ads reporting by service line (Çilingir vs. Oto), you should create **four separate conversion actions** in your Google Ads account, and fire them via GTM using Custom Event triggers based on the parameters above.

### Conversion Actions to Create in Google Ads:

1. **Çilingir - Phone Call**
   - **GTM Trigger:** Custom Event = `cta_click` AND DataLayer Variable `cta_type` = `call` AND DataLayer Variable `section` = `cilingir`
2. **Çilingir - WhatsApp**
   - **GTM Trigger:** Custom Event = `cta_click` AND DataLayer Variable `cta_type` = `whatsapp` AND DataLayer Variable `section` = `cilingir`
3. **Oto Anahtarcı - Phone Call**
   - **GTM Trigger:** Custom Event = `cta_click` AND DataLayer Variable `cta_type` = `call` AND DataLayer Variable `section` = `oto`
4. **Oto Anahtarcı - WhatsApp**
   - **GTM Trigger:** Custom Event = `cta_click` AND DataLayer Variable `cta_type` = `whatsapp` AND DataLayer Variable `section` = `oto`

By separating these conversions, you can analyze exactly which campaigns are driving automotive leads versus standard residential leads, and optimize your bidding strategies accordingly.

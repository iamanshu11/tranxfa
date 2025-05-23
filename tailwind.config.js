/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './src/sign-up.html',
    './src/login.html',
    './src/verify-email.html',
    './src/country-residence.html',
    './src/profile-setup.html',
    './src/contact-details.html',
    './src/factor-auth.html',
    './src/factor-auth-code.html',
    './src/enter-pin.html',
    './src/dashboard.html',
    './src/your-recipient.html',
    './src/your-recipient-add.html',
    './src/your-recipient-delivery.html',
    './src/your-recipient-delivery-add.html',
    './src/your-recipient-delivery-added-recipient.html',
    './src/your-recipient-delivery-added-recipient-profile.html',
    './src/your-trans.html',
    './src/send-money.html',
    './src/send-money-add.html',
    './src/occupation-details.html',
    './src/forgot-password.html',
    './src/otp-verification.html',
    './src/reset-password.html',
    './src/send-money-add-details.html',
    './src/send-money-add-details-confirm.html',
    './src/send-money-add-details-confirm-file.html',
    './src/help-support.html',
    './src/general-setting.html',
    './src/account-verification.html',
    './src/account-verification-address.html',
    './src/account-verification-identity.html',
    './src/account-verification-fund.html',
    './src/account-verification-identity-passport.html',
    './src/account-verification-identity-driver-license.html',
    './src/account-verification-identity-national-id.html',
    './src/account-verification-identity-passport-verified.html',
    './src/account-verification-identity-telephone.html',
    './src/account-verification-identity-gas.html',
    './src/account-verification-identity-electricity.html',
    './src/account-verification-identity-water.html',
    './src/account-verification-identity-income-tax.html',
    './src/send-money-add-details-confirm-success.html',
    './src/account-setting.html',
    './src/account-setting-recent-devices',
    './src/account-setting-email',
    './src/account-setting-password',
    './src/about-us.html',
    './src/how-it.html',
    './src/home-send-money.html',

  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1568px', // Custom breakpoint at 1568px
      },
      spacing: {
        '120': '120px', // Add custom padding-top 120px
      },
      colors: {
        'blue-primary': '#29DDE0',
        'purple-secondary': '#8B1EC4',
      },
      backgroundImage: {
        'custom-image': "url('/images/hero-bg.png')",
      },
      boxShadow: {
        'left-right-gray': '-4px 0 10px rgba(128, 128, 128, 0.3), 4px 0 10px rgba(128, 128, 128, 0.3)',
      },
    },
  },
  plugins: [],
}


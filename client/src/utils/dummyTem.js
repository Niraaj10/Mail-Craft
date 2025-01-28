export const templates = [
    {
      id: 1,
      name: 'Welcome Email',
      category: 'Transactional',
      html: `
        <div style="color: #333; padding: 20px; font-family: Arial, sans-serif; background-color: #f9f9f9;">
          <h1 style="color: #333;">Welcome to Our Service!</h1>
          <p>Hi there,</p>
          <p>Thank you for signing up. We're excited to have you on board!</p>
          <p>Click the button below to get started:</p>
          <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px;">
            Get Started
          </a>
        </div>
      `,
    },
    {
      id: 2,
      name: 'Promotional Offer',
      category: 'Marketing',
      html: `
        <div style="padding: 20px; color: #333; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <h1 style="color: #333;">Exclusive Offer Just for You!</h1>
          <p>Save up to 50% on your next purchase with our limited-time promotion.</p>
          <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 4px;">
            Shop Now
          </a>
        </div>
      `,
    },
    {
      id: 3,
      name: 'Password Reset',
      category: 'Transactional',
      html: `
        <div style="padding: 20px; color: #333; font-family: Arial, sans-serif; background-color: #ffffff;">
          <h1 style="color: #333;">Reset Your Password</h1>
          <p>We received a request to reset your password. If you made this request, please click the button below:</p>
          <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #ff5722; color: white; text-decoration: none; border-radius: 4px;">
            Reset Password
          </a>
          <p>If you didn't request this, you can safely ignore this email.</p>
        </div>
      `,
    },
    {
      id: 4,
      name: 'Order Confirmation',
      category: 'Transactional',
      html: `
        <div style="padding: 20px; color: #333; font-family: Arial, sans-serif; background-color: #ffffff;">
          <h1 style="color: #333;">Your Order is Confirmed!</h1>
          <p>Hi there,</p>
          <p>Your order <strong>#12345</strong> has been confirmed. We'll notify you when it ships.</p>
          <p>Thank you for shopping with us!</p>
        </div>
      `,
    },
    {
      id: 5,
      name: 'Monthly Newsletter',
      category: 'Newsletter',
      html: `
        <div style="padding: 20px; color: #333; font-family: Arial, sans-serif; background-color: #f9f9f9;">
          <h1 style="color: #333;">Our Monthly Updates</h1>
          <p>Hi there,</p>
          <p>Here's what we've been working on this month:</p>
          <ul>
            <li>New features to enhance your experience.</li>
            <li>Exclusive discounts for our loyal users.</li>
            <li>Tips and tricks to get the most out of our service.</li>
          </ul>
          <p>Thank you for being a part of our community!</p>
        </div>
      `,
    },
    {
      id: 6,
      name: 'Cyber Monday Sale',
      category: 'Promotion',
      html: `
        <table align="center" width="600" style="background-color: #fff; margin: 20px auto; border: 1px solid #ddd; border-radius: 5px;">
          <tr>
            <td align="center" style="padding: 20px; background-color: #2b1a0a;">
              <h1 style="color: #fff; font-size: 28px; margin: 0;">CYBER MONDAY</h1>
              <p style="color: #fff; font-size: 14px; margin: 5px 0;">SUPER SALE</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 40px 20px; background-color: #ffcf48;">
              <h2 style="font-size: 22px; margin: 0;">UP TO</h2>
              <p style="font-size: 18px; text-decoration: line-through; color: #000;">10%</p>
              <p style="font-size: 18px; text-decoration: line-through; color: #000;">15%</p>
              <p style="font-size: 18px; text-decoration: line-through; color: #000;">20%</p>
              <h1 style="font-size: 50px; color: #000; margin: 5px 0;">30%</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px; background-color: #fff;">
              <p style="color: #333; font-size: 14px; margin: 0;">
                Shop all products at a discounted price of 30% and get free shipping over all orders above $2000.
              </p>
              <p style="color: #333; font-size: 14px; margin: 5px 0;">Get those carts ready! Let's go.</p>
              <p style="font-size: 16px; color: #000; margin: 10px 0;"><strong>Apply coupon code: <span style="color: #d9534f;">CYBER30</span></strong></p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px;">
              <h3 style="margin: 0; color: #000; font-size: 20px;">Shop Backpacks <span style="color: #d9534f;">🛍️</span></h3>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px;">
              <table align="center" width="100%" style="table-layout: fixed;">
                <tr>
                  <td align="center" style="padding: 10px;">
                    <img src="https://via.placeholder.com/120x150" alt="Backpack 1" style="border-radius: 5px;">
                  </td>
                  <td align="center" style="padding: 10px;">
                    <img src="https://via.placeholder.com/120x150" alt="Backpack 2" style="border-radius: 5px;">
                  </td>
                  <td align="center" style="padding: 10px;">
                    <img src="https://via.placeholder.com/120x150" alt="Backpack 3" style="border-radius: 5px;">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    }, 
    {
      id: 7,
      name: 'Welcome with Invite Code',
      category: 'Welcome',
      html: `
        <div style="max-width: 600px; margin: 0 auto; background-color: #121212; color: #ffffff; font-family: Arial, sans-serif; border-radius: 8px; padding: 20px;">
          <div style="text-align: center;">
            <img src="/emailLogo.svg" alt= Email.Temp Logo" style="margin-bottom: 20px; width: 50px" />
            <p style="font-size: 50px; margin-bottom: 20px; background-color: #29241c; width: 100px; height: 100px; line-height: 100px; border-radius: 50%; display: inline-block;">🔥</p>
            <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">You are in!</h1>
            <p style="font-size: 16px; margin-bottom: 20px;">Welcome to Email.Temp, we are excited to have you onboard.</p>
          </div>
          <div style="background-color: #333333; padding: 15px; border-radius: 6px; margin-bottom: 20px; text-align: center;">
            <p style="font-size: 14px; margin: 0;">Your Invitation Code</p>
            <p style="font-size: 20px; font-weight: bold; margin: 5px 0; color: #ffcf48;">A98B9NJNJJ</p>
          </div>
          <div style="text-align: center; margin-bottom: 20px;">
            <p style="font-size: 14px; margin-bottom: 10px;">Use this code to sign up on Email.Temp</p>
            <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #ffcf48; color: #121212; text-decoration: none; font-weight: bold; border-radius: 4px;">Join Email.Temp</a>
          </div>
          <div style="font-size: 12px; color: #bbbbbb; text-align: center;">
            <p>If you have any questions, feel free to reach out on <a href="#" style="color: #ffffff; text-decoration: underline;">Mail</a>, <a href="#" style="color: #ffffff; text-decoration: underline;">Phone</a>, <a href="#" style="color: #ffffff; text-decoration: underline;">Slack</a>, or <a href="#" style="color: #ffffff; text-decoration: underline;">Discord</a>.</p>
          </div>
          <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #666666;">
            <p>© 2024 Email.Temp. All rights reserved.</p>
          </div>
        </div>
      `,
    },
  ];
  
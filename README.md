# Art Edge Trading Website

This project is a modern, responsive website for **Art Edge Trading PLC**, built with **Next.js**. It showcases the company's services, achievements, and provides a contact form to send inquiries directly.

## Features

1. **Landing Page:**

   - Hero section highlighting Art Edge Trading's mission.
   - Overview of services.
   - Achievements section with dynamic statistics.
   - Testimonials and "Why Choose Us" sections.

2. **Service Details Pages:**

   - Detailed information about each core service:
     - Security Services
     - Cleaning Services
     - Provision of Cleaning Supplies
     - Skill Development
   - Icons and visuals for each sub-service.

3. **Contact Us Page:**

   - Inquiry form integrated with the backend (Next.js API routes).
   - Google Maps integration for office location.


4. **Responsive Design:**
   - Fully optimized for desktop, tablet, and mobile devices.

## Technologies Used

- **Frontend:**

  - React.js (with Next.js framework)

- **Backend:**

  - Next.js API routes
  - Nodemailer for email functionality

- **Deployment:**
  - Vercel for hosting

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sirajyesuf/artedge
   ```

2. Navigate to the project directory:

   ```bash
   cd artedge
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add the following:

   ```env
   SMTP_HOST=
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=
   SMTP_PASSWORD=
   SMTP_FROM=
   SMTP_TO=

   ```

5. Run the development server:
   ```bash
   npm run dev
   ```
   Access the site at [http://localhost:3000](http://localhost:3000).

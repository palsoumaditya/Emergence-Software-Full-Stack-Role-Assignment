
import React from "react";

const EduEmpowerDetails: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Divider and Section Label */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 border-t border-neutral-700 dark:border-neutral-700 mr-4" />
        <span className="text-xs tracking-widest text-neutral-400 uppercase">Edu-Empower</span>
        <div className="flex-1 border-t border-neutral-700 dark:border-neutral-700 ml-4" />
      </div>
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">About Edu-Empower</h2>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <a href="#" className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-900 dark:text-white px-4 py-2 rounded transition text-sm font-medium">
          <span>🔗</span> View on GitHub
        </a>
        <a href="#" className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-900 dark:text-white px-4 py-2 rounded transition text-sm font-medium">
          <span>▶️</span> View on YouTube
        </a>
      </div>
      {/* Project Description & Details */}
      <div className="flex flex-col items-center mb-8 w-full">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Overview</h1>
        <p className="text-neutral-300 text-lg mb-6 text-center">
          Edu-Empower is a comprehensive platform designed to bridge the gap between students and educational funding resources. By creating a unified ecosystem for scholarships, crowdfunding, and donations, we aim to democratize access to educational opportunities and reduce financial barriers to education.
        </p>
        <div className="text-neutral-400 text-base w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mt-6 mb-2">The platform serves three primary user groups:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Students seeking financial support for their education</li>
            <li>Organizations offering scholarships and grants</li>
            <li>Donors looking to contribute to educational causes</li>
          </ul>
          <p className="mb-4">Through an intuitive interface and streamlined processes, Edu-Empower simplifies the discovery, application, and distribution of educational funding, making quality education more accessible to all.</p>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Architecture</h2>
          <p className="mb-2">Edu-Empower follows a modern client-server architecture with clear separation of concerns:</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Frontend</h3>
            <ul className="list-disc list-inside ml-4">
              <li>React.js single-page application</li>
              <li>Responsive design using Tailwind CSS</li>
              <li>Client-side routing with React Router</li>
              <li>Authentication via Clerk</li>
            </ul>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Backend</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Node.js/Express.js RESTful API</li>
              <li>MongoDB database for flexible data storage</li>
              <li>JWT-based authentication</li>
              <li>Microservices architecture for scalability</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Key Features</h2>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">For Students</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Personalized Profile Management: Comprehensive student information management</li>
            <li>Scholarship Discovery: Advanced search and filtering of scholarships</li>
            <li>Scholarship Application: Streamlined application process with document upload</li>
            <li>Application Tracking: Real-time status updates on submitted applications</li>
            <li>Crowdfunding Campaigns: Tools to create and manage personal fundraising campaigns</li>
            <li>Resource Center: Educational content on financial literacy</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">For Organizations</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Organization Dashboard: Comprehensive administrative interface</li>
            <li>Scholarship Creation: Tools to define eligibility criteria and requirements</li>
            <li>Application Review: Streamlined process for reviewing applications</li>
            <li>Applicant Management: Tools to track and communicate with applicants</li>
            <li>Analytics: Insights on scholarship impact and applicant demographics</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">For Donors</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Donation Portal: Secure payment processing for donations</li>
            <li>Impact Tracking: Visibility into how donations are making a difference</li>
            <li>Tax Documentation: Automated receipts for tax purposes</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Platform-Wide</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>User Authentication & Role-Based Access: Secure login system</li>
            <li>Responsive Design: Optimized for all device sizes</li>
            <li>Accessibility Compliance: WCAG 2.1 AA standards</li>
            <li>Multi-language Support: Internationalization framework</li>
          </ul>

          {/* Tech Stack & Project Structure Side by Side */}
          <div className="w-full md:w-2/3 mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Tech Stack</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Frontend</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Framework: React.js 18</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Build Tool: Vite</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Styling: Tailwind CSS</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">State Management: React Context API</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Routing: React Router v6</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Authentication: Clerk</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Backend</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Runtime: Node.js</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Framework: Express.js</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Database: MongoDB</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">ODM: Mongoose</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Authentication: JWT</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">File Storage: AWS S3</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Email Service: SendGrid</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">DevOps</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Containerization: Docker</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">CI/CD: GitHub Actions</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Hosting: AWS/Azure/Vercel</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Monitoring: Sentry</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Development Tools</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Version Control: Git</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Package Manager: npm</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Linting: ESLint</span>
                <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded text-sm">Testing: Jest, React Testing Library, Cypress</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Installation</h2>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Prerequisites</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Node.js (v14 or higher)</li>
            <li>npm (v6 or higher)</li>
            <li>Git</li>
            <li>MongoDB (local or Atlas connection)</li>
            <li>Docker (optional, for containerized development)</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Clone the Repository</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
git clone https://github.com/akash202004/Edu-Empower.git
cd Edu-Empower
          </pre>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Frontend Setup</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
cd Frontend
npm install
cp .env.example .env
# Edit .env with your configuration
          </pre>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Backend Setup</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
cd Backend
npm install
cp .env.example .env
# Edit .env with your configuration
          </pre>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Docker Setup (Optional)</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
docker-compose up -d
          </pre>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Development Workflow</h2>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Running the Frontend</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
cd Frontend
npm run dev
# The frontend will be available at http://localhost:5173.
          </pre>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Running the Backend</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
cd Backend
npm run dev
# The backend API will be available at http://localhost:5000.
          </pre>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Full Stack Development</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
# From the project root
npm run dev
          </pre>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Code Quality</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
# Frontend linting
cd Frontend
npm run lint

# Backend linting
cd Backend
npm run lint

# Format code
npm run format
          </pre>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Testing</h3>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
# Frontend tests
cd Frontend
npm test

# Backend tests
cd Backend
npm test

# E2E tests
npm run test:e2e
          </pre>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">API Documentation</h2>
          <p className="mb-2">The Edu-Empower API follows RESTful principles and is organized around resources:</p>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Authentication Endpoints</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>POST /api/auth/register - Register a new user</li>
            <li>POST /api/auth/login - Authenticate a user</li>
            <li>GET /api/auth/me - Get current user information</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Student Endpoints</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>GET /api/students/:id - Get student profile</li>
            <li>PUT /api/students/:id - Update student profile</li>
            <li>GET /api/students/:id/applications - Get student&apos;s scholarship applications</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Scholarship Endpoints</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>GET /api/scholarships - List all scholarships</li>
            <li>GET /api/scholarships/:id - Get scholarship details</li>
            <li>POST /api/scholarships - Create a new scholarship (Organization only)</li>
            <li>PUT /api/scholarships/:id - Update a scholarship (Organization only)</li>
            <li>POST /api/scholarships/:id/apply - Apply for a scholarship (Student only)</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Organization Endpoints</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>GET /api/organizations/:id - Get organization profile</li>
            <li>PUT /api/organizations/:id - Update organization profile</li>
            <li>GET /api/organizations/:id/scholarships - Get organization&apos;s scholarships</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Donation Endpoints</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>POST /api/donations - Process a donation</li>
            <li>GET /api/donations/user/:id - Get user&apos;s donation history</li>
          </ul>
          <p className="mb-4">For detailed API documentation, refer to the API Documentation file.</p>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Deployment</h2>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Frontend Deployment</h3>
          <p className="mb-2">The frontend can be deployed to Vercel, Netlify, or any static hosting service:</p>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
cd Frontend
npm run build
# Deploy the dist directory to your hosting service.
          </pre>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Backend Deployment</h3>
          <p className="mb-2">The backend can be deployed to various cloud platforms:</p>
          <h4 className="font-semibold text-neutral-900 dark:text-white mt-2 mb-1">Heroku Deployment</h4>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
cd Backend
heroku create edu-empower-api
git push heroku main
          </pre>
          <h4 className="font-semibold text-neutral-900 dark:text-white mt-2 mb-1">Docker Deployment</h4>
          <pre className="bg-neutral-800 text-neutral-200 rounded p-4 text-xs overflow-x-auto mb-4">
docker build -t edu-empower-api ./Backend
docker push edu-empower-api
          </pre>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Database Deployment</h3>
          <p className="mb-2">We recommend using MongoDB Atlas for production database hosting:</p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Create a MongoDB Atlas cluster</li>
            <li>Configure network access and database users</li>
            <li>Update the MONGODB_URI in your backend environment variables</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Security</h2>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Authentication: Secure user authentication via Clerk and JWT</li>
            <li>Authorization: Role-based access control for protected resources</li>
            <li>Data Encryption: HTTPS for all communications</li>
            <li>Input Validation: Thorough validation of all user inputs</li>
            <li>Dependency Scanning: Regular scanning for vulnerable dependencies</li>
            <li>Security Headers: Implementation of security headers</li>
            <li>Rate Limiting: Protection against brute force attacks</li>
            <li>CSRF Protection: Cross-Site Request Forgery protection</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Performance Optimization</h2>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Code Splitting: Route-based code splitting to reduce initial load time</li>
            <li>Lazy Loading: Components and images are loaded only when needed</li>
            <li>Caching Strategy: Appropriate cache headers for static assets</li>
            <li>Database Indexing: Strategic indexes for query performance</li>
            <li>CDN Integration: Content delivery network for static assets</li>
            <li>Compression: Response compression with gzip/brotli</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Contributing</h2>
          <p className="mb-2">We welcome contributions to Edu-Empower! Please follow these steps:</p>
          <ol className="list-decimal list-inside ml-4 mb-2">
            <li>Fork the repository</li>
            <li>Create a feature branch (git checkout -b feature/amazing-feature)</li>
            <li>Commit your changes (git commit -m &apos;Add some amazing feature&apos;)</li>
            <li>Push to the branch (git push origin feature/amazing-feature)</li>
            <li>Open a Pull Request</li>
          </ol>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Contribution Guidelines</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Follow the existing code style and naming conventions</li>
            <li>Write tests for new features</li>
            <li>Update documentation for any changed functionality</li>
            <li>Ensure all tests pass before submitting a pull request</li>
            <li>Reference relevant issues in pull request descriptions</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">Roadmap</h2>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Short-term Goals (Next 3 Months)</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Enhance user profile management</li>
            <li>Implement advanced scholarship search filters</li>
            <li>Add document verification system</li>
            <li>Improve mobile responsiveness</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Medium-term Goals (3-6 Months)</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Implement AI-powered scholarship matching</li>
            <li>Add mentorship platform integration</li>
            <li>Develop analytics dashboard for organizations</li>
            <li>Support multiple languages</li>
          </ul>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-1">Long-term Goals (6+ Months)</h3>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Build community features for peer support</li>
            <li>Implement blockchain-based credential verification</li>
            <li>Develop mobile applications</li>
            <li>Expand to international markets</li>
          </ul>
        </div>
        <div className="w-full flex justify-center mt-8">
          <span className="text-neutral-500 text-sm">Made with <span className="text-red-500">❤️</span> by the Edu-Empower Team</span>
        </div>
      </div>
    </section>
  );
};

export default EduEmpowerDetails; 
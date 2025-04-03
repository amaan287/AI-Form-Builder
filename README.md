# AI Form Builder

A modern web application that allows users to create and manage forms using AI assistance. Built with Next.js, Drizzle ORM, and Clerk authentication.

## Features

- 🤖 AI-powered form generation from natural language descriptions
- 🎨 Customizable form themes and styles
- 📱 Responsive design for all devices
- 🔒 Secure authentication with Clerk
- 💾 Form data storage with Drizzle ORM and Neon Database
- 📊 Form response collection and management
- 🔄 Real-time form updates
- 🎯 Form sharing capabilities

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Neon Database (PostgreSQL)
- **ORM**: Drizzle ORM
- **Authentication**: Clerk
- **AI Integration**: Custom AI session management
- **Styling**: Tailwind CSS, Shadcn UI components
- **Form Management**: Custom form builder with JSON schema

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon Database account
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-form-builder.git
cd ai-form-builder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_DATABASE_URL_CONFIG=your_neon_database_url
```

4. Initialize the database:
```bash
npx drizzle-kit push
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
ai-form-builder/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard components
│   ├── edit-form/         # Form editor components
│   └── aiform/            # Form response components
├── components/            # Shared UI components
├── configs/              # Configuration files
│   ├── schema.js         # Database schema
│   └── db.js            # Database connection
├── public/               # Static assets
└── styles/              # Global styles
```

## Usage

1. **Create a Form**
   - Navigate to the dashboard
   - Click "Create Form"
   - Enter a description of your form
   - Let AI generate the form structure
   - Customize the form as needed

2. **Edit a Form**
   - Select a form from the dashboard
   - Modify form fields, labels, and options
   - Change form theme and style
   - Save changes

3. **Share a Form**
   - Click the share button on any form
   - Copy the generated link
   - Share with respondents

4. **View Responses**
   - Access form responses through the dashboard
   - View individual responses
   - Export response data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Clerk](https://clerk.com/)
- [Neon Database](https://neon.tech/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Support

For support, email support@example.com or join our Slack channel.

# Sales Analytics Dashboard

A basic sales analytics dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts. It demonstrates Atomic Design principles and includes mock sales data for 2022, 2023, and 2024.

## Features
- Year selector for 2022, 2023, and 2024
- Custom sales threshold filter
- Bar, line, and pie chart switching with Recharts
- KPI cards for total sales, average sales, and best month
- Atomic Design component structure
- Responsive dashboard UI

## Tech Stack
- Next.js 15
- TypeScript
- Tailwind CSS
- Recharts

## Project Structure
- src/components/atoms - small reusable UI primitives
- src/components/molecules - combinations of atoms
- src/components/organisms - complete dashboard sections
- src/data - mock sales data
- src/app/dashboard - dashboard page

## Setup

npm install
npm run dev

Open http://localhost:3000/dashboard.

## Data
The dashboard uses mock/demo values inspired by the Kaggle Superstore sales dataset. The data is intentionally kept local so the application can run without an API key or external service.

## Future Enhancements
- Replace mock data with a real API
- Add authentication and persistent filters
- Add additional chart types and date ranges
- Add export/reporting functionality

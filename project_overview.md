# Vaishnavi Portfolio Project Overview

## Project Structure

This is a Next.js portfolio website for Vaishnavi, a legal professional specializing in US and Indian jurisdictions.

### Tech Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Animations**: Custom hooks

## Key Components

### Navigation (`Navigation.js`)
- Responsive navbar with desktop and mobile views
- Transparent on top, colored on scroll
- Smooth scrolling to sections

### Hero Section (`Hero.js`)
- Full-screen hero with parallax effect
- Professional portrait background
- CTA buttons for consultation and viewing practice areas

### Statistics Section (`Statistics.js`)
- Animated counters using `useCounter` hook
- Displays key metrics (documents handled, jurisdictions, etc.)
- Intersection Observer for triggering animations when visible

### Practice Areas (`PracticeAreas.js`)
- Three-column grid showcasing specialties:
  - Contract Management
  - International Legal Compliance
  - Legal Documentation
- Icon-based design with feature lists

### Experience Section (in `index.js`)
- Timeline-style experience section
- Current role: Advocate Associate at I.V Merchant & Company
- Previous role: Sr. Legal Associate at Writer Information
- Includes responsibilities and achievements

### Contact Section (`ContactSection.js`)
- Contact information display
- Inquiry form with relevant fields
- Note: Uses a placeholder image that needs replacement

### Footer (`Footer.js`)
- Multi-column layout with links and information
- Quick links to page sections
- Practice areas list
- Office location
- Note: Contains "Vaishnavi Chen" name inconsistency

## Custom Hooks

### `useCounter.js`
- Creates animated counting effect
- Uses Intersection Observer to trigger when visible
- Configurable end value and duration

## Issues to Address

1. Name inconsistency: "Vaishnavi Chen" in footer vs "Vaishnavi" elsewhere
2. Missing image in contact section: `/api/placeholder/1920/1080`
3. Default metadata in `layout.js` needs updating
4. Placeholder office address in footer needs updating
5. Placeholder email in contact section marked with "[Email from Resume]"

## Next Steps for Improvement

1. Update metadata for better SEO
2. Fix image placeholders with actual images
3. Ensure name consistency throughout
4. Update placeholder content with real information
5. Consider adding testimonials section
6. Optimize for performance and accessibility
7. Update practice areas to match exact specialties
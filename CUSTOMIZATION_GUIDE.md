# Portfolio Customization Guide

## Overview
This is a fully-featured data analyst portfolio website with dark/light mode, interactive visualizations, and all the sections you requested.

## Color Scheme
- **Dark Mode**: Black background (#000000) with green accent (#059669)
- **Light Mode**: White background (#FFFFFF) with green accent (#059669)

## Sections Included

### 1. Hero Section
**File**: `src/components/Hero.tsx`
- Update your name on line 18
- Modify the description on lines 22-24
- Replace the placeholder emoji with your professional photo

### 2. About Section
**File**: `src/components/About.tsx`
- Update the bio text on lines 27-33
- Modify statistics (Projects/Years) on lines 35-44
- Update timeline items on lines 11-30

### 3. Skills Section
**File**: `src/components/Skills.tsx`
- Modify skill categories and levels on lines 6-44
- Add or remove skills as needed
- Adjust proficiency percentages

### 4. Projects Section
**File**: `src/components/Projects.tsx`
- Update projects array starting at line 13
- Each project includes:
  - Title, category, description
  - Business impact metrics
  - Tools used
  - GitHub and demo links
  - Feature highlights

### 5. Visualizations
**File**: `src/components/VisualizationsShowcase.tsx`
- Four types of charts included:
  - Bar Chart (Market Penetration)
  - Line Chart (Sales Growth)
  - Pie Chart (Channel Distribution)
  - Heat Map (Product Correlation)
- Update data on lines 5-31

### 6. Blog Section
**File**: `src/components/Blog.tsx`
- All 10 blog titles from Nepal market research included
- Update post details starting at line 5
- Modify excerpts and categories

### 7. Resume Section
**File**: `src/components/Resume.tsx`
- Update work experience on lines 6-31
- Modify education on lines 33-44
- Update certifications on lines 46-52

### 8. Contact Section
**File**: `src/components/Contact.tsx`
- Update email on line 67
- Update LinkedIn URL on line 79
- Update GitHub URL on line 91
- Form submissions are simulated (lines 18-26)

### 9. Footer
**File**: `src/components/Footer.tsx`
- Update your name on line 10

## Features

### Theme Toggle
- Click the sun/moon icon in the navigation
- Theme preference is saved to localStorage
- Smooth transitions between light and dark modes

### Smooth Scrolling
- Click navigation links to smoothly scroll to sections
- Mobile-responsive hamburger menu

### Interactive Visualizations
All charts are built with React and Canvas:
- **Bar Charts**: Animated progress bars with percentages
- **Line Charts**: Canvas-based trend visualization
- **Pie Charts**: SVG-based distribution charts
- **Heat Maps**: Color-coded correlation matrices

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Hamburger menu for mobile devices

### Animations
- Hover effects on project cards
- Smooth transitions between sections
- Scale animations on buttons
- Border color changes on focus

## Customization Steps

### 1. Personal Information
1. Open `src/components/Hero.tsx`
2. Replace "Your Name" with your actual name
3. Update the description paragraph

### 2. Add Your Photo
Replace the emoji placeholder:
```tsx
<img
  src="/path-to-your-photo.jpg"
  alt="Your Name"
  className="w-48 h-48 rounded-full object-cover"
/>
```

### 3. Update Projects
1. Open `src/components/Projects.tsx`
2. Replace the sample projects with your own
3. Update GitHub and demo links
4. Add real project images/screenshots

### 4. Customize Visualizations
1. Open `src/components/VisualizationsShowcase.tsx`
2. Replace sample data with your actual data
3. Adjust colors to match your brand

### 5. Blog Content
1. Open `src/components/Blog.tsx`
2. Update post excerpts
3. Add actual blog post links
4. Modify dates and read times

### 6. Contact Links
1. Open `src/components/Contact.tsx`
2. Update all social media links
3. Implement actual form submission (currently simulated)

## Adding Real Form Submission

To connect the contact form to a backend:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitMessage('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    setSubmitMessage('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Color Customization

To change the green accent color:

1. Open `tailwind.config.js`
2. Update the primary colors:
```javascript
colors: {
  primary: {
    light: '#your-color',
    DEFAULT: '#your-color',
    dark: '#your-color',
  },
}
```

## Adding Analytics

Add Google Analytics or similar:
1. Add tracking script to `index.html`
2. Track page views and interactions

## Deployment

### GitHub Pages
```bash
npm run build
# Deploy the dist folder
```

### Netlify
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
```bash
vercel --prod
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
- Optimized bundle size
- Lazy loading for images
- Smooth 60fps animations
- Fast page load times

## Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios

## Future Enhancements
- Add real-time data dashboards
- Integrate with Supabase for blog CMS
- Add project filtering and search
- Implement case study pages
- Add testimonials section

## Support
For issues or questions, refer to the React and Vite documentation.

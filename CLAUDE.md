# Data & AI Organization Chart - Project Instructions

## Project Overview
Convert a static HTML organization chart to a data-driven Astro website that reads from CSV data. The goal is to make the org chart easily maintainable by non-technical users through CSV editing.

## Current State
- **Astro site**: Fully functional dynamic org chart in `/astro-site`
- **data_ai_org.csv**: Employee data in CSV format (single source of truth)
- **Live site**: Built static files in `/dist` directory

## Target Architecture
**Technology Stack:**
- Astro (static site generator)
- CSV data source (Papa Parse for parsing)
- Same visual design and Quanta branding as current HTML
- Responsive layout with hover effects

## Key Requirements

### 1. Data Structure
- Read from `data_ai_org.csv` file
- CSV columns: `Name`, `Title`, `Manager`, `Employment Type`, `Team`
- Employment types: 
  - `Employee` (Bolt orange #F0941C background, white text)
  - `Contractor` (gray #575454 background, white text)
  - `Borrowed Resource` (light peach #FED7AA background, dashed border, "PARTIAL" label)

### 2. Visual Design
- **Exact same styling** as current HTML version
- **Quanta branding**: Infrared (#CD0A1B), Bolt (#F0941C), Carbon colors
- **Typography**: Alternate Gothic Extra Condensed for headers, Proxima Nova for body
- **Responsive design** with mobile breakpoints
- **Interactive elements**: hover effects, smooth transitions

### 3. Organization Structure
```
Mike Duffy (Director)
  └── Vista Le (Program Manager)
      ├── AI Team
      │   ├── AI Portfolio
      │   ├── Safety Insights
      │   ├── Substation Design Automation
      │   ├── Estimation Agent
      │   ├── AI Governance
      │   └── AI Tiger Team (includes partial resources)
      └── Data & Analytics Team
          ├── Scott Kerfoot (Program Manager)
          └── 8 Product Teams (Spectrum, JDE, FleetIQ, PeopleIQ, OneStream, etc.)
```

### 4. Components to Create
- **Leadership cards** (Mike, Vista)
- **Team containers** (AI Team, Data & Analytics Team)  
- **Sub-team containers** (Portfolio, Development, Product teams)
- **Member cards** (individual employees/contractors)
- **Statistics panel** (horizontal stats + pie chart)

### 5. Features
- **Automatic team statistics** calculation from CSV data
- **Color coding**: 
  - Leadership (red border)
  - Employees/FTE (Bolt orange background)
  - Contractors (gray background)
  - Borrowed Resources (light peach with dashed border)
- **Dynamic team grouping**: Automatic grouping by Team column
- **Hierarchical layout**: Mike → Vista → Teams structure
- **Special resource handling**: Visual distinction for partial/borrowed resources

## Development Steps

### Phase 1: Setup
1. Create new Astro project
2. Install Papa Parse for CSV parsing
3. Copy existing CSS styles from HTML file
4. Set up basic project structure

### Phase 2: Data Layer
1. Create CSV data reader/parser
2. Transform CSV data into hierarchical structure
3. Calculate statistics (total members, employee/contractor breakdown)
4. Create data utility functions

### Phase 3: Components
1. Create Astro components for each section:
   - `PersonCard.astro`
   - `TeamContainer.astro` 
   - `SubTeamContainer.astro`
   - `StatisticsPanel.astro`
2. Implement Quanta styling and branding

### Phase 4: Layout
1. Create main page layout
2. Implement responsive design
3. Add interactive effects (hover, transitions)
4. Test with CSV data

## Success Criteria
- [x] Reads data from CSV file dynamically
- [x] Statistics auto-calculate from data
- [x] Easy to update by editing CSV
- [x] Responsive design works on mobile
- [x] All Quanta branding preserved
- [x] Fast loading performance
- [x] Support for multiple employment types (FTE, Contractor, Borrowed)
- [x] Hierarchical display (Mike → Vista → Teams)

## Maintenance Workflow
1. Update `data_ai_org.csv` with personnel changes
2. Run `npm run build` in the astro-site directory
3. Deploy the `/dist` folder to your web server
4. Changes automatically reflected in org chart

## Quick Commands
- **Development**: `npm run dev` (live preview with hot reload)
- **Build**: `npm run build` (generate static files in `/dist`)
- **Preview**: `npm run preview` (preview built site)

## Notes
- Prioritize exact visual match to current design
- Focus on maintainability - CSV should be the single source of truth
- Consider future enhancements: filtering, search, export options
- Ensure accessibility with proper contrast and semantic HTML